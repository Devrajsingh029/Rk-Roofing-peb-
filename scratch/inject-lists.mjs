import fs from 'fs';

const servicesData = {
  "PEB Services": [
    "PEB Erection & Installation",
    "Steel Structure Erection",
    "Industrial Building Installation",
    "Commercial Building Installation",
    "Warehouse Structure Erection"
  ],
  "Roofing Services": [
    "Industrial Roofing Installation",
    "Commercial Roofing Installation",
    "Metal Roofing Systems",
    "Roof Sheet Installation",
    "Industrial Shed Roofing",
    "Roofing Maintenance & Repair"
  ],
  "Standing Seam & Kalzip Roofing": [
    "Standing Seam Roofing System",
    "Kalzip Roofing System",
    "Curved Roofing Systems",
    "High-Performance Roofing Solutions"
  ],
  "Wall Cladding Services": [
    "Wall Cladding Installation",
    "Industrial Cladding Systems",
    "Commercial Cladding Systems",
    "Metal Cladding Solutions",
    "Roof & Wall Cladding Works"
  ],
  "Insulated Panel Services": [
    "PUF Insulated Panel Installation",
    "Sandwich Panel Installation",
    "Insulated Wall Panels",
    "Insulated Roof Panels"
  ],
  "Cold Room & Cold Storage Panels": [
    "Cold Room Panel Installation",
    "Cold Storage Panel Installation",
    "Temperature-Controlled Panel Systems"
  ],
  "Mezzanine Floor Services": [
    "Mezzanine Floor Installation",
    "Industrial Mezzanine Structures",
    "Commercial Mezzanine Floors",
    "Steel Mezzanine Platforms"
  ],
  "Flashing, Gutters & Downpipes": [
    "Flashing Installation",
    "Gutter Installation",
    "Downpipe Installation",
    "Rainwater Drainage Systems"
  ],
  "Insulation & Skylights": [
    "Roof Insulation Installation",
    "Thermal Insulation Systems",
    "Skylight Installation",
    "Natural Daylighting Solutions"
  ],
  "Maintenance & Repair Services": [
    "PEB Maintenance",
    "Roofing Repairs",
    "Cladding Repairs",
    "Leak Detection & Rectification",
    "Preventive Maintenance",
    "Renovation & Retrofit Services"
  ]
};

// Checkout clean file first to avoid double injections
import { execSync } from 'child_process';
execSync('git checkout services.html');

let html = fs.readFileSync('services.html', 'utf8');

for (const [title, list] of Object.entries(servicesData)) {
  const ulHTML = `\n<ul class="svc-list" style="margin-top: 1rem; text-align: left;">\n` + list.map(item => `  <li>${item}</li>`).join('\n') + `\n</ul>\n`;
  html = html.replace(`<h3>${title}</h3>`, `<h3>${title}</h3>${ulHTML}`);
}

fs.writeFileSync('services.html', html, 'utf8');
console.log('Successfully injected service lists into services.html');
