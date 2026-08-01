import fs from 'fs';

const pagesData = {
  'peb-construction.html': {
    title: 'PEB Construction',
    categories: [
      {
        title: "PEB Services",
        cards: [
          { icon: "factory", title: "PEB Erection & Installation", desc: "Professional installation and on-site erection of pre-engineered building components for industrial, warehouse, and commercial structures." },
          { icon: "layers", title: "Steel Structure Erection", desc: "Accurate assembly and installation of structural steel members using proper alignment, bolted connections, and safe execution practices." },
          { icon: "building", title: "Industrial Building Installation", desc: "Installation of steel buildings for factories, manufacturing units, warehouses, and industrial facilities." },
          { icon: "briefcase", title: "Commercial Building Installation", desc: "Installation of steel structures for commercial facilities with durable roofing, cladding, and structural systems." },
          { icon: "warehouse", title: "Warehouse Structure Erection", desc: "Construction and erection of warehouse steel frameworks designed for storage and logistics applications." }
        ]
      }
    ]
  },
  'industrial-roofing-services.html': {
    title: 'Industrial Roofing Services',
    categories: [
      {
        title: "Roofing Services",
        cards: [
          { icon: "layers", title: "Industrial Roofing Installation", desc: "Professional installation of industrial roofing systems for warehouses, factories, and commercial buildings, ensuring durable weather protection, structural reliability, and long-term performance." },
          { icon: "building", title: "Commercial Roofing Installation", desc: "Expert application of metal roofing solutions for commercial properties, delivering secure fastening, leak-free detailing, and excellent weather resistance." },
          { icon: "shield", title: "Metal Roofing Systems", desc: "Installation of high-performance metal roof sheets using concealed or exposed fasteners, built to withstand heavy rainfall and high wind loads." },
          { icon: "wrench", title: "Roof Sheet Installation", desc: "Precise alignment and fastening of roofing sheets, ensuring proper overlap, secure fixing, and long-lasting structural integrity." },
          { icon: "factory", title: "Industrial Shed Roofing", desc: "Specialized roofing erection for factory sheds, incorporating robust materials and expert sealing techniques for optimal facility protection." },
          { icon: "maintenance", title: "Roofing Maintenance & Repair", desc: "Professional inspection, leak rectification, and preventive maintenance of existing metal roofs to extend their lifespan and ensure continuous protection." }
        ]
      },
      {
        title: "Standing Seam & Kalzip Roofing",
        cards: [
          { icon: "shield", title: "Standing Seam Roofing System", desc: "Installation of concealed-fix standing seam roofs, mechanically seamed on-site to eliminate exposed fasteners and provide ultimate leak-proof performance." },
          { icon: "layers", title: "Kalzip Roofing System", desc: "Expert erection of premium Kalzip aluminium roofing systems, offering superior weather resistance, long-length continuous sheets, and exceptional durability." },
          { icon: "roof", title: "Curved Roofing Systems", desc: "Specialized installation of curved metal roof profiles, precisely aligned and fastened to suit unique structural geometries and industrial requirements." },
          { icon: "shield", title: "High-Performance Roofing Solutions", desc: "Execution of advanced roofing systems engineered for extreme weather zones, ensuring maximum structural stability and water-tightness." }
        ]
      },
      {
        title: "Flashing, Gutters & Downpipes",
        cards: [
          { icon: "wrench", title: "Flashing Installation", desc: "Precise cutting, bending, and installation of metal flashings at ridges, eaves, and penetrations to guarantee a watertight roofing system." },
          { icon: "water-flow", title: "Gutter Installation", desc: "Expert fitting of eave and valley gutters, ensuring proper slope, secure brackets, and efficient rainwater collection." },
          { icon: "pipe", title: "Downpipe Installation", desc: "Secure attachment of uPVC or metal downpipes, correctly aligned to handle high-capacity water drainage from industrial roofs." },
          { icon: "shield", title: "Rainwater Drainage Systems", desc: "Complete installation of integrated roof drainage components, preventing water accumulation and ensuring rapid runoff during heavy monsoons." }
        ]
      },
      {
        title: "Insulation & Skylights",
        cards: [
          { icon: "shield", title: "Roof Insulation Installation", desc: "Professional application of glass wool or bubble wrap insulation beneath metal roofing, properly tensioned and secured for maximum thermal performance." },
          { icon: "thermometer", title: "Thermal Insulation Systems", desc: "Expert installation of industrial insulation materials, minimizing heat transfer and improving energy efficiency within large facilities." },
          { icon: "sun", title: "Skylight Installation", desc: "Secure fitting of polycarbonate skylight sheets, ensuring leak-proof sealing, accurate overlapping, and optimal natural daylight transmission." },
          { icon: "sunlight", title: "Natural Daylighting Solutions", desc: "Installation of translucent roof panels, correctly integrated with metal sheets to provide reliable illumination without compromising roof integrity." }
        ]
      }
    ]
  },
  'cladding-solutions-services.html': {
    title: 'Wall Cladding Solutions',
    categories: [
      {
        title: "Wall Cladding Services",
        cards: [
          { icon: "building", title: "Wall Cladding Installation", desc: "Installation of metal wall cladding systems that improve weather protection, durability, and the external finish of industrial and commercial buildings." },
          { icon: "factory", title: "Industrial Cladding Systems", desc: "Robust installation of profiled metal wall sheets for factories, ensuring secure attachment, proper sealing, and long-lasting performance." },
          { icon: "building", title: "Commercial Cladding Systems", desc: "Precision erection of architectural wall cladding for commercial facilities, delivering clean lines, secure joints, and excellent weather resistance." },
          { icon: "layers", title: "Metal Cladding Solutions", desc: "Expert application of steel and aluminium cladding panels, providing enhanced structural protection and a durable exterior shell." },
          { icon: "shield", title: "Roof & Wall Cladding Works", desc: "Comprehensive installation of both roofing and wall cladding components, delivering a fully sealed, weather-tight industrial envelope." }
        ]
      },
      {
        title: "Insulated Panel Services",
        cards: [
          { icon: "wall-panel", title: "PUF Insulated Panel Installation", desc: "Professional installation of Polyurethane Foam (PUF) panels for walls and roofs, ensuring precise joints, thermal efficiency, and structural stability." },
          { icon: "layers", title: "Sandwich Panel Installation", desc: "Expert erection of composite sandwich panels, providing superior insulation, rapid on-site assembly, and robust weather protection." },
          { icon: "building", title: "Insulated Wall Panels", desc: "Secure fastening of insulated metal panels for industrial walls, delivering seamless alignment and excellent temperature control capabilities." },
          { icon: "roof", title: "Insulated Roof Panels", desc: "Installation of insulated roofing systems with specialized concealed fasteners, ensuring leak-free performance and high thermal resistance." }
        ]
      }
    ]
  },
  'warehouse-construction-services.html': {
    title: 'Warehouse & Cold Storage',
    categories: [
      {
        title: "Cold Room & Cold Storage Panels",
        cards: [
          { icon: "snowflake", title: "Cold Room Panel Installation", desc: "Precision assembly of insulated panels for cold rooms, ensuring airtight joints, thermal integrity, and secure structural fastening." },
          { icon: "snowflake", title: "Cold Storage Panel Installation", desc: "Large-scale erection of insulated wall and roof panels for cold storage facilities, maintaining strict temperature-controlled environments." },
          { icon: "thermometer", title: "Temperature-Controlled Panel Systems", desc: "Expert installation of high-performance insulated enclosures, delivering seamless connections and optimized thermal protection for sensitive industrial operations." }
        ]
      }
    ]
  },
  'structural-steel-erection-services.html': {
    title: 'Structural Steel & Mezzanine Floors',
    categories: [
      {
        title: "Mezzanine Floor Services",
        cards: [
          { icon: "layers", title: "Mezzanine Floor Installation", desc: "Professional erection of structural steel mezzanine floors, ensuring high load capacity, stable connections, and efficient space utilization." },
          { icon: "factory", title: "Industrial Mezzanine Structures", desc: "Heavy-duty installation of mezzanine platforms for factories, using precision-aligned steel beams and robust decking systems." },
          { icon: "building", title: "Commercial Mezzanine Floors", desc: "Secure assembly of steel mezzanine levels for commercial spaces, delivering accurate leveling and strong structural integration." },
          { icon: "steel-structure", title: "Steel Mezzanine Platforms", desc: "Expert fabrication and field erection of elevated steel platforms, built to exact specifications for safe industrial access." }
        ]
      }
    ]
  },
  'industrial-infrastructure-solutions.html': {
    title: 'Maintenance & Repair Services',
    categories: [
      {
        title: "Maintenance & Repair Services",
        cards: [
          { icon: "maintenance", title: "PEB Maintenance", desc: "Systematic inspection and structural maintenance of pre-engineered buildings, ensuring bolt tightening, alignment checks, and long-term stability." },
          { icon: "wrench", title: "Roofing Repairs", desc: "Expert rectification of damaged or rusted metal roofing sheets, restoring weather-tightness and preventing structural degradation." },
          { icon: "building", title: "Cladding Repairs", desc: "Professional replacement and realignment of damaged wall cladding panels, ensuring secure fastening and continuous protection." },
          { icon: "water-flow", title: "Leak Detection & Rectification", desc: "Thorough identification and repair of roof leaks, utilizing advanced sealing techniques, butyl tapes, and flashing replacements." },
          { icon: "shield", title: "Preventive Maintenance", desc: "Scheduled industrial maintenance services, proactively addressing potential structural or roofing issues before they cause operational disruptions." },
          { icon: "maintenance", title: "Renovation & Retrofit Services", desc: "Expert upgrading of existing industrial facilities, including structural reinforcements, roof replacements, and cladding modernizations." }
        ]
      }
    ]
  },
  'factory-sheds.html': {
    title: 'Factory Sheds',
    categories: [
      {
        title: "Factory Shed Services",
        cards: [
          { icon: "factory", title: "Factory Shed Erection", desc: "Professional erection of robust factory sheds using quality steel components, secure fastening, and precise structural alignment." },
          { icon: "layers", title: "Shed Roofing & Cladding", desc: "Installation of durable metal roofing and wall cladding systems specifically tailored for industrial factory sheds." },
          { icon: "steel-structure", title: "Structural Reinforcement", desc: "Strengthening and structural modification of existing factory shed frameworks for enhanced load capacity and operational safety." }
        ]
      }
    ]
  }
};

const mapIcon = (icon) => {
  // Lucide icons fallback mapping if some don't exist
  const iconMap = {
    'factory': 'factory',
    'layers': 'layers',
    'building': 'building',
    'briefcase': 'briefcase',
    'warehouse': 'warehouse', // warehouse may not exist in standard lucide, use building if it fails
    'shield': 'shield',
    'wrench': 'wrench',
    'maintenance': 'settings', // 'settings' or 'tool'
    'roof': 'home',
    'water-flow': 'droplet',
    'pipe': 'pipette',
    'thermometer': 'thermometer',
    'sun': 'sun',
    'sunlight': 'sun',
    'wall-panel': 'square',
    'snowflake': 'snowflake',
    'steel-structure': 'construction'
  };
  return iconMap[icon] || 'check-circle';
};

function generateGridsHTML(categories) {
  let html = '';
  for (const cat of categories) {
    html += `
        <div style="margin-bottom: 5rem;">
          <h2 class="h-section" style="margin-bottom: 2rem; font-size: 2rem; border-bottom: 2px solid var(--border); padding-bottom: 1rem;">${cat.title}</h2>
          <div class="grid-cards gc-3">`;
    for (const card of cat.cards) {
      let icon = mapIcon(card.icon);
      html += `
            <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%; background: white;">
              <div class="icon-tile" data-icon="${icon}" data-size="28"></div>
              <h3 class="h-card">${card.title}</h3>
              <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">
                ${card.desc}
              </p>
            </div>`;
    }
    html += `
          </div>
        </div>`;
  }
  return html;
}

for (const [file, data] of Object.entries(pagesData)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Extract the <head>...</head> from the existing file to preserve SEO/meta/scripts
    const headMatch = content.match(/<head>[\s\S]*?<\/head>/i);
    const headHTML = headMatch ? headMatch[0] : '<head><meta charset="UTF-8"><title>RK Roofing</title></head>';

    const gridsHTML = generateGridsHTML(data.categories);

    const newHTML = `<!doctype html>
<html lang="en">
  ${headHTML}
  <body>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div id="rk-header"></div>
    <main id="main-content">
      <!-- Minimal Header -->
      <section style="padding: 8rem 0 4rem; text-align: center; background: linear-gradient(to bottom, #0f172a, #1e293b); color: white;">
        <div class="container-x">
          <!-- BREADCRUMB -->
          <nav aria-label="Breadcrumb" class="breadcrumb-nav" style="display: flex; justify-content: center; margin-bottom: 2rem;">
            <ol class="breadcrumb-list" style="justify-content: center;">
              <li><a href="index.html" style="color: #cbd5e1;">Home</a></li>
              <li><a href="services.html" style="color: #cbd5e1;">Services</a></li>
              <li aria-current="page" style="color: white;">${data.title}</li>
            </ol>
          </nav>
          <h1 class="h-display" style="color: white; margin-bottom: 1rem;">${data.title}</h1>
        </div>
      </section>

      <!-- SERVICES INCLUDED GRIDS -->
      <section class="section" style="background: #f9fafb; padding: 5rem 0;">
        <div class="container-x">
${gridsHTML}
        </div>
      </section>
    </main>
    <div id="rk-footer"></div>
  </body>
</html>`;

    fs.writeFileSync(file, newHTML, 'utf8');
    console.log(`Replaced and simplified ${file}`);
  }
}
