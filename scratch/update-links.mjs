import fs from 'fs';

// 1. Update app.js navigation
let appJs = fs.readFileSync('app.js', 'utf8');

const newDropdown = `          <li><a href="\${prefix}peb-construction.html">PEB Services</a></li>
          <li><a href="\${prefix}industrial-roofing-services.html">Roofing Services</a></li>
          <li><a href="\${prefix}standing-seam-roofing.html">Standing Seam & Kalzip Roofing</a></li>
          <li><a href="\${prefix}cladding-solutions-services.html">Wall Cladding Services</a></li>
          <li><a href="\${prefix}insulated-panel-services.html">Insulated Panel Services</a></li>
          <li><a href="\${prefix}warehouse-construction-services.html">Cold Room & Cold Storage Panels</a></li>
          <li><a href="\${prefix}structural-steel-erection-services.html">Mezzanine Floor Services</a></li>
          <li><a href="\${prefix}flashing-gutters.html">Flashing, Gutters & Downpipes</a></li>
          <li><a href="\${prefix}insulation-skylights.html">Insulation & Skylights</a></li>
          <li><a href="\${prefix}maintenance-repair.html">Maintenance & Repair Services</a></li>`;

appJs = appJs.replace(
  /<li><a href="\$\{prefix\}peb-construction\.html">[\s\S]*?Cold Storage Facilities<\/a><\/li>/m,
  newDropdown
);

fs.writeFileSync('app.js', appJs, 'utf8');
console.log('Updated app.js');

// 2. Update services.html grid links
let servicesHtml = fs.readFileSync('services.html', 'utf8');

const mapping = {
  'PEB Services': 'peb-construction.html',
  'Roofing Services': 'industrial-roofing-services.html',
  'Standing Seam & Kalzip Roofing': 'standing-seam-roofing.html',
  'Wall Cladding Services': 'cladding-solutions-services.html',
  'Insulated Panel Services': 'insulated-panel-services.html',
  'Cold Room & Cold Storage Panels': 'warehouse-construction-services.html',
  'Mezzanine Floor Services': 'structural-steel-erection-services.html',
  'Flashing, Gutters & Downpipes': 'flashing-gutters.html',
  'Insulation & Skylights': 'insulation-skylights.html',
  'Maintenance & Repair Services': 'maintenance-repair.html'
};

for (const [title, href] of Object.entries(mapping)) {
  // Regex to match href="..." before the <h3>title</h3>
  // We look for href="something" followed by class="svc-card"... <h3>title</h3>
  const regex = new RegExp(`href="[^"]+"([\\s\\S]*?<h3>${title}</h3>)`);
  servicesHtml = servicesHtml.replace(regex, `href="${href}"$1`);
}

fs.writeFileSync('services.html', servicesHtml, 'utf8');
console.log('Updated services.html');
