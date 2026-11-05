import fs from 'fs';
import { execSync } from 'child_process';

const auditData = JSON.parse(fs.readFileSync('audit/string-audit.json', 'utf8'));

// Get all baseline strings from copy-simplification git tree
const baselineContent = execSync('git grep -h -I . copy-simplification -- src/', { maxBuffer: 10 * 1024 * 1024 }).toString();

function cleanStr(s) {
  return s.toLowerCase().replace(/[\.\,\?\!\:\;•›→—\/\\"'`]/g, '').replace(/\s+/g, ' ').trim();
}

const cleanedBaseline = cleanStr(baselineContent);

const categorized = auditData.map(item => {
  const c = cleanStr(item.text);
  const existsInBaseline = c.length > 2 && cleanedBaseline.includes(c);
  
  let status = existsInBaseline ? 'Exact match in baseline' : 'Redesigned UI copy';
  let notes = 'Factual / Structural';

  if (item.flaggedKeywords !== 'none') {
    notes = `Flagged keyword: ${item.flaggedKeywords}`;
  }

  return {
    Page: item.page,
    Type: item.type,
    Tag: item.tag,
    Text: item.text,
    Status: status,
    Notes: notes
  };
});

fs.writeFileSync('audit/comprehensive-string-table.json', JSON.stringify(categorized, null, 2));

console.log(`Total strings analyzed: ${categorized.length}`);
console.log(`Baseline exact matches: ${categorized.filter(c => c.Status === 'Exact match in baseline').length}`);
console.log(`Redesigned UI copy: ${categorized.filter(c => c.Status === 'Redesigned UI copy').length}`);

