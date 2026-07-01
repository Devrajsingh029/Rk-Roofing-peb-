import fs from 'fs';

let content = fs.readFileSync('services.html', 'utf8');
const injectStr = `
  <!-- MAINTENANCE & REPAIR SERVICES -->
  <section class="section" style="background:linear-gradient(#f9fafb,#fff);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
    <div class="container-x">
      <div style="text-align:center;max-width:44rem;margin:0 auto 3.5rem">
        <span class="eyebrow">Services Included</span>
        <h2 class="h-section" style="margin-top:1rem">Maintenance & Repair Services</h2>
      </div>
      <div class="grid-cards gc-3">
        <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%">
          <div class="icon-tile" data-icon="wrench" data-size="28"></div>
          <h3 class="h-card">PEB Maintenance</h3>
          <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">Systematic inspection and structural maintenance of pre-engineered buildings, ensuring bolt tightening, alignment checks, and long-term stability.</p>
        </div>
        <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%">
          <div class="icon-tile" data-icon="layers" data-size="28"></div>
          <h3 class="h-card">Roofing Repairs</h3>
          <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">Expert rectification of damaged or rusted metal roofing sheets, restoring weather-tightness and preventing structural degradation.</p>
        </div>
        <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%">
          <div class="icon-tile" data-icon="building" data-size="28"></div>
          <h3 class="h-card">Cladding Repairs</h3>
          <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">Professional replacement and realignment of damaged wall cladding panels, ensuring secure fastening and continuous protection.</p>
        </div>
        <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%">
          <div class="icon-tile" data-icon="search" data-size="28"></div>
          <h3 class="h-card">Leak Detection & Rectification</h3>
          <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">Thorough identification and repair of roof leaks, utilizing advanced sealing techniques, butyl tapes, and flashing replacements.</p>
        </div>
        <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%">
          <div class="icon-tile" data-icon="shield" data-size="28"></div>
          <h3 class="h-card">Preventive Maintenance</h3>
          <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">Scheduled industrial maintenance services, proactively addressing potential structural or roofing issues before they cause operational disruptions.</p>
        </div>
        <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%">
          <div class="icon-tile" data-icon="clock" data-size="28"></div>
          <h3 class="h-card">Renovation & Retrofit Services</h3>
          <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">Expert upgrading of existing industrial facilities, including structural reinforcements, roof replacements, and cladding modernizations.</p>
        </div>
      </div>
    </div>
  </section>
`;
if (content.includes('</main>')) {
  content = content.replace('</main>', injectStr + '\n    </main>');
  fs.writeFileSync('services.html', content, 'utf8');
  console.log('Updated services.html');
}
