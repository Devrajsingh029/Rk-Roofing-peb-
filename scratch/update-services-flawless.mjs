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

// We only want to replace hrefs within the "services-multi-grid" container.
const gridStartIdx = servicesHtml.indexOf('class="services-multi-grid"');
if (gridStartIdx !== -1) {
  let beforeGrid = servicesHtml.substring(0, gridStartIdx);
  let afterGrid = servicesHtml.substring(gridStartIdx);

  for (const [title, href] of Object.entries(mapping)) {
    // This regex looks for: href="<anything>" ... <h3>Title</h3>
    // We make sure it doesn't cross over another </a> by asserting no </a> in between
    const regex = new RegExp(`href="[^"]+"([^>]*class="svc-card"[^>]*>[\\s\\S]*?<h3>${title}</h3>)`);
    afterGrid = afterGrid.replace(regex, `href="${href}"$1`);
  }
  servicesHtml = beforeGrid + afterGrid;
}

fs.writeFileSync('services.html', servicesHtml, 'utf8');
console.log('Updated services.html flawlessly');
