import fs from 'fs';
import path from 'path';

function getBaselineCorpus() {
  const allText = new Set();
  const dirs = ['src/data', 'src/app', 'src/components'];

  function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Extract inner text from JSX and strings
        const textMatches = content.matchAll(/>([^<>{}\n\r]+)</g);
        for (const tm of textMatches) {
          const t = tm[1].trim().replace(/\s+/g, ' ');
          if (t.length > 1) allText.add(t.toLowerCase().replace(/[\.\,\?\!\:\;•›→—]/g, '').trim());
        }
        const strMatches = content.matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"/g);
        for (const sm of strMatches) {
          const s = (sm[1] || sm[2] || '').trim().replace(/\s+/g, ' ');
          if (s.length > 1 && !s.startsWith('#') && !s.startsWith('/') && !s.startsWith('http')) {
            allText.add(s.toLowerCase().replace(/[\.\,\?\!\:\;•›→—]/g, '').trim());
          }
        }
      }
    }
  }

  dirs.forEach(scan);
  return allText;
}

const corpus = getBaselineCorpus();

const stringsToCheck = [
  // 1. Deliverables / bullets checked
  { category: 'Deliverable', str: 'Responsive layouts for mobile and desktop screens' },
  { category: 'Deliverable', str: 'Clean website code tested across modern browsers' },
  { category: 'Deliverable', str: 'Fast page loading and speed optimization' },
  { category: 'Deliverable', str: 'Technical documentation explaining site structure' },
  // 2. Pillar taglines
  { category: 'Pillar Tagline', str: 'Websites, mobile apps, and custom web tools.' },
  { category: 'Pillar Tagline', str: 'Connected tools and routine tasks on autopilot.' },
  { category: 'Pillar Tagline', str: 'Clean design, plain writing, and targeted campaigns.' },
  // 3. Hero Notification
  { category: 'Hero Notification', str: 'New customer inquiry' },
  { category: 'Hero Notification', str: 'Sarah M. submitted contact form for website redesign.' },
  { category: 'Hero Notification', str: 'Customer record updated' },
  { category: 'Hero Notification', str: 'Notification sent' },
  // 4. Headings & sections
  { category: 'Section Heading', str: 'Websites and apps built for your business.' },
  { category: 'Section Heading', str: 'Three clear ways we help your business.' },
  { category: 'Section Heading', str: 'How your project gets built.' },
  { category: 'Section Heading', str: 'Sample projects to show how we build.' },
  { category: 'Section Heading', str: 'Ready to start your project?' },
  { category: 'Section Heading', str: 'Tell us about your project.' },
  { category: 'Contact Sidebar', str: 'What to Expect' },
  { category: 'Contact Sidebar', str: 'Direct Review' },
  { category: 'Contact Sidebar', str: 'Our team reads every inquiry and reviews the project requirements.' },
  { category: 'Contact Sidebar', str: 'We outline the steps and options to help you move forward.' },
  // 5. Approved Projects
  { category: 'Project Title', str: 'Online Store & Inventory Updates' },
  { category: 'Project Title', str: 'Automated Inquiry Follow-Up' },
  { category: 'Project Title', str: 'Design Kit for Web & Mobile' }
];

console.log('=== STRING VERIFICATION AGAINST COPY-SIMPLIFICATION BASELINE ===\n');
const report = stringsToCheck.map(item => {
  const norm = item.str.toLowerCase().replace(/[\.\,\?\!\:\;•›→—]/g, '').trim();
  const exists = corpus.has(norm);
  return {
    Category: item.category,
    String: item.str,
    Status: exists ? 'EXACT MATCH IN BASELINE' : 'NEW STRING (NEEDS APPROVAL)'
  };
});

console.table(report);
