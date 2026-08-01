import fs from 'fs';
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
  const regex = new RegExp(`href="[^"]+"([\\s\\S]*?class="svc-card"[\\s\\S]*?<h3>${title}</h3>)`);
  servicesHtml = servicesHtml.replace(regex, `href="${href}"$1`);
}

fs.writeFileSync('services.html', servicesHtml, 'utf8');
console.log('Updated services.html safely');
