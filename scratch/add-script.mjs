import fs from 'fs';

const pages = [
  'peb-construction.html',
  'industrial-roofing-services.html',
  'standing-seam-roofing.html',
  'cladding-solutions-services.html',
  'insulated-panel-services.html',
  'warehouse-construction-services.html',
  'structural-steel-erection-services.html',
  'flashing-gutters.html',
  'insulation-skylights.html',
  'maintenance-repair.html'
];

for (const file of pages) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('<script type="module" src="app.js"></script>')) {
    content = content.replace('</body>', '<script type="module" src="app.js"></script>\n  </body>');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
}
