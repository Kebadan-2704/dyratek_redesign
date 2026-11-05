import fs from 'fs';
import { execSync } from 'child_process';

const rawAudit = JSON.parse(fs.readFileSync('audit/string-audit.json', 'utf8'));
const baselineContent = execSync('git grep -h -I . copy-simplification -- src/', { maxBuffer: 10 * 1024 * 1024 }).toString();

function cleanStr(s) {
  return s.toLowerCase().replace(/[\.\,\?\!\:\;•›→—\/\\"'`]/g, '').replace(/\s+/g, ' ').trim();
}
const cleanedBaseline = cleanStr(baselineContent);

const KEYWORDS = [
  'ownership',
  'support',
  'estimate',
  'fast',
  'quickly',
  'instant',
  'always',
  'never',
  'hosting',
  'routing',
  'confirm'
];

const rows = rawAudit.map((item, idx) => {
  const c = cleanStr(item.text);
  const existsInBaseline = c.length > 1 && cleanedBaseline.includes(c);
  
  const textLower = item.text.toLowerCase();
  const matched = KEYWORDS.filter(k => textLower.includes(k));
  const keywordCol = matched.length > 0 ? matched.join(', ') : 'none';

  return {
    index: idx + 1,
    page: item.page,
    tag: item.tag,
    text: item.text,
    baselineMatch: existsInBaseline ? 'YES (in baseline)' : 'NO (new/redesigned)',
    confirmKeyword: keywordCol
  };
});

fs.writeFileSync('audit/full-207-string-diff.json', JSON.stringify(rows, null, 2));

// Generate markdown table
let md = '| # | Page | Element | Rendered String | Baseline Match | Matches CONTENT_TO_CONFIRM Word List |\n';
md += '| :--- | :--- | :--- | :--- | :--- | :--- |\n';
rows.forEach(r => {
  const safeText = r.text.replace(/\|/g, '\\|');
  md += `| ${r.index} | ${r.page} | \`<${r.tag}>\` | ${safeText} | ${r.baselineMatch} | ${r.confirmKeyword} |\n`;
});

fs.writeFileSync('audit/full-207-string-diff.md', md);
console.log(`Generated full table with ${rows.length} rows.`);
console.log(`Items with confirm keywords: ${rows.filter(r => r.confirmKeyword !== 'none').length}`);

