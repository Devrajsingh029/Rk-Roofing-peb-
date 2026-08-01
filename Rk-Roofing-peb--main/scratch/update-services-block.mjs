import fs from 'fs';
let servicesHtml = fs.readFileSync('services.html', 'utf8');

const newGrid = `<div class="services-multi-grid">
            <a
              href="peb-construction.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="factory" data-size="28"></div></div>
              <h3>PEB Services</h3>
              </a>
            <a
              href="industrial-roofing-services.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="layers" data-size="28"></div></div>
              <h3>Roofing Services</h3>
              </a>
            <a
              href="standing-seam-roofing.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="shield" data-size="28"></div></div>
              <h3>Standing Seam & Kalzip Roofing</h3>
              </a>
            <a
              href="cladding-solutions-services.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="building" data-size="28"></div></div>
              <h3>Wall Cladding Services</h3>
              </a>
            <a
              href="insulated-panel-services.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="package" data-size="28"></div></div>
              <h3>Insulated Panel Services</h3>
              </a>
            <a
              href="warehouse-construction-services.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="gauge" data-size="28"></div></div>
              <h3>Cold Room & Cold Storage Panels</h3>
              </a>
            <a
              href="structural-steel-erection-services.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="layers" data-size="28"></div></div>
              <h3>Mezzanine Floor Services</h3>
              </a>
            <a
              href="flashing-gutters.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="zap" data-size="28"></div></div>
              <h3>Flashing, Gutters & Downpipes</h3>
              </a>
            <a
              href="insulation-skylights.html"
              class="svc-card"
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="sparkles" data-size="28"></div></div>
              <h3>Insulation & Skylights</h3>
              </a>
            <a 
              href="maintenance-repair.html" 
              class="svc-card" 
              style="text-decoration: none; color: inherit"
              ><div class="svc-icon-wrapper"><div data-icon="wrench" data-size="28"></div></div>
              <h3>Maintenance & Repair Services</h3>
              </a>
          </div>`;

// Replace the entire block
const startStr = '<div class="services-multi-grid">';
const endStr = '</div>\n        </div>\n      </section>';

const startIndex = servicesHtml.indexOf(startStr);
const endIndex = servicesHtml.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  servicesHtml = servicesHtml.substring(0, startIndex) + newGrid + '\n        </div>\n      </section>' + servicesHtml.substring(endIndex + endStr.length);
  fs.writeFileSync('services.html', servicesHtml, 'utf8');
  console.log('Updated services.html flawlessly with block replacement');
} else {
  console.log('Could not find boundaries');
}
