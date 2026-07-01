import fs from 'fs';

const categories = {
  'peb-construction.html': [
    {
      title: "PEB Services",
      cards: [
        { icon: "factory", title: "PEB Erection & Installation", desc: "Professional erection of pre-engineered building components, ensuring accurate alignment, structural integrity, and efficient on-site execution for factories and warehouses." },
        { icon: "layers", title: "Steel Structure Erection", desc: "Precision installation of primary and secondary structural steel members using certified erection methodologies, secure connections, and strict safety protocols." },
        { icon: "building", title: "Industrial Building Installation", desc: "Complete field erection of industrial facilities, assembling fabricated steel frameworks to deliver robust, weather-resistant structures ready for operation." },
        { icon: "briefcase", title: "Commercial Building Installation", desc: "Execution of steel erection for commercial structures, ensuring rapid on-site assembly, precise leveling, and safe construction practices." },
        { icon: "package", title: "Warehouse Structure Erection", desc: "Specialized installation of large-span warehouse steel frames, optimizing site logistics and ensuring stable, high-capacity storage facilities." }
      ]
    }
  ],
  'industrial-roofing-services.html': [
    {
      title: "Roofing Services",
      cards: [
        { icon: "layers", title: "Industrial Roofing Installation", desc: "Professional installation of industrial roofing systems for warehouses, factories, and commercial buildings, ensuring durable weather protection, structural reliability, and long-term performance." },
        { icon: "building", title: "Commercial Roofing Installation", desc: "Expert application of metal roofing solutions for commercial properties, delivering secure fastening, leak-free detailing, and excellent weather resistance." },
        { icon: "shield", title: "Metal Roofing Systems", desc: "Installation of high-performance metal roof sheets using concealed or exposed fasteners, built to withstand heavy rainfall and high wind loads." },
        { icon: "wrench", title: "Roof Sheet Installation", desc: "Precise alignment and fastening of roofing sheets, ensuring proper overlap, secure fixing, and long-lasting structural integrity." },
        { icon: "factory", title: "Industrial Shed Roofing", desc: "Specialized roofing erection for factory sheds, incorporating robust materials and expert sealing techniques for optimal facility protection." },
        { icon: "clock", title: "Roofing Maintenance & Repair", desc: "Professional inspection, leak rectification, and preventive maintenance of existing metal roofs to extend their lifespan and ensure continuous protection." }
      ]
    },
    {
      title: "Standing Seam & Kalzip Roofing",
      cards: [
        { icon: "shield", title: "Standing Seam Roofing System", desc: "Installation of concealed-fix standing seam roofs, mechanically seamed on-site to eliminate exposed fasteners and provide ultimate leak-proof performance." },
        { icon: "layers", title: "Kalzip Roofing System", desc: "Expert erection of premium Kalzip aluminium roofing systems, offering superior weather resistance, long-length continuous sheets, and exceptional durability." },
        { icon: "compass", title: "Curved Roofing Systems", desc: "Specialized installation of curved metal roof profiles, precisely aligned and fastened to suit unique structural geometries and industrial requirements." },
        { icon: "zap", title: "High-Performance Roofing Solutions", desc: "Execution of advanced roofing systems engineered for extreme weather zones, ensuring maximum structural stability and water-tightness." }
      ]
    },
    {
      title: "Flashing, Gutters & Downpipes",
      cards: [
        { icon: "wrench", title: "Flashing Installation", desc: "Precise cutting, bending, and installation of metal flashings at ridges, eaves, and penetrations to guarantee a watertight roofing system." },
        { icon: "layers", title: "Gutter Installation", desc: "Expert fitting of eave and valley gutters, ensuring proper slope, secure brackets, and efficient rainwater collection." },
        { icon: "zap", title: "Downpipe Installation", desc: "Secure attachment of uPVC or metal downpipes, correctly aligned to handle high-capacity water drainage from industrial roofs." },
        { icon: "shield", title: "Rainwater Drainage Systems", desc: "Complete installation of integrated roof drainage components, preventing water accumulation and ensuring rapid runoff during heavy monsoons." }
      ]
    },
    {
      title: "Insulation & Skylights",
      cards: [
        { icon: "zap", title: "Roof Insulation Installation", desc: "Professional application of glass wool or bubble wrap insulation beneath metal roofing, properly tensioned and secured for maximum thermal performance." },
        { icon: "compass", title: "Thermal Insulation Systems", desc: "Expert installation of industrial insulation materials, minimizing heat transfer and improving energy efficiency within large facilities." },
        { icon: "sun", title: "Skylight Installation", desc: "Secure fitting of polycarbonate skylight sheets, ensuring leak-proof sealing, accurate overlapping, and optimal natural daylight transmission." },
        { icon: "sparkles", title: "Natural Daylighting Solutions", desc: "Installation of translucent roof panels, correctly integrated with metal sheets to provide reliable illumination without compromising roof integrity." }
      ]
    }
  ],
  'cladding-solutions-services.html': [
    {
      title: "Wall Cladding Services",
      cards: [
        { icon: "building", title: "Wall Cladding Installation", desc: "Installation of metal wall cladding systems that improve weather protection, durability, and the external finish of industrial and commercial buildings." },
        { icon: "factory", title: "Industrial Cladding Systems", desc: "Robust installation of profiled metal wall sheets for factories, ensuring secure attachment, proper sealing, and long-lasting performance." },
        { icon: "briefcase", title: "Commercial Cladding Systems", desc: "Precision erection of architectural wall cladding for commercial facilities, delivering clean lines, secure joints, and excellent weather resistance." },
        { icon: "layers", title: "Metal Cladding Solutions", desc: "Expert application of steel and aluminium cladding panels, providing enhanced structural protection and a durable exterior shell." },
        { icon: "shield", title: "Roof & Wall Cladding Works", desc: "Comprehensive installation of both roofing and wall cladding components, delivering a fully sealed, weather-tight industrial envelope." }
      ]
    },
    {
      title: "Insulated Panel Services",
      cards: [
        { icon: "package", title: "PUF Insulated Panel Installation", desc: "Professional installation of Polyurethane Foam (PUF) panels for walls and roofs, ensuring precise joints, thermal efficiency, and structural stability." },
        { icon: "layers", title: "Sandwich Panel Installation", desc: "Expert erection of composite sandwich panels, providing superior insulation, rapid on-site assembly, and robust weather protection." },
        { icon: "building", title: "Insulated Wall Panels", desc: "Secure fastening of insulated metal panels for industrial walls, delivering seamless alignment and excellent temperature control capabilities." },
        { icon: "zap", title: "Insulated Roof Panels", desc: "Installation of insulated roofing systems with specialized concealed fasteners, ensuring leak-free performance and high thermal resistance." }
      ]
    }
  ],
  'warehouse-construction-services.html': [
    {
      title: "Cold Room & Cold Storage Panels",
      cards: [
        { icon: "thermometer", title: "Cold Room Panel Installation", desc: "Precision assembly of insulated panels for cold rooms, ensuring airtight joints, thermal integrity, and secure structural fastening." },
        { icon: "snowflake", title: "Cold Storage Panel Installation", desc: "Large-scale erection of insulated wall and roof panels for cold storage facilities, maintaining strict temperature-controlled environments." },
        { icon: "zap", title: "Temperature-Controlled Panel Systems", desc: "Expert installation of high-performance insulated enclosures, delivering seamless connections and optimized thermal protection for sensitive industrial operations." }
      ]
    }
  ],
  'structural-steel-erection-services.html': [
    {
      title: "Mezzanine Floor Services",
      cards: [
        { icon: "layers", title: "Mezzanine Floor Installation", desc: "Professional erection of structural steel mezzanine floors, ensuring high load capacity, stable connections, and efficient space utilization." },
        { icon: "factory", title: "Industrial Mezzanine Structures", desc: "Heavy-duty installation of mezzanine platforms for factories, using precision-aligned steel beams and robust decking systems." },
        { icon: "briefcase", title: "Commercial Mezzanine Floors", desc: "Secure assembly of steel mezzanine levels for commercial spaces, delivering accurate leveling and strong structural integration." },
        { icon: "wrench", title: "Steel Mezzanine Platforms", desc: "Expert fabrication and field erection of elevated steel platforms, built to exact specifications for safe industrial access." }
      ]
    }
  ],
  'services.html': [
    {
      title: "Maintenance & Repair Services",
      cards: [
        { icon: "wrench", title: "PEB Maintenance", desc: "Systematic inspection and structural maintenance of pre-engineered buildings, ensuring bolt tightening, alignment checks, and long-term stability." },
        { icon: "layers", title: "Roofing Repairs", desc: "Expert rectification of damaged or rusted metal roofing sheets, restoring weather-tightness and preventing structural degradation." },
        { icon: "building", title: "Cladding Repairs", desc: "Professional replacement and realignment of damaged wall cladding panels, ensuring secure fastening and continuous protection." },
        { icon: "search", title: "Leak Detection & Rectification", desc: "Thorough identification and repair of roof leaks, utilizing advanced sealing techniques, butyl tapes, and flashing replacements." },
        { icon: "shield", title: "Preventive Maintenance", desc: "Scheduled industrial maintenance services, proactively addressing potential structural or roofing issues before they cause operational disruptions." },
        { icon: "clock", title: "Renovation & Retrofit Services", desc: "Expert upgrading of existing industrial facilities, including structural reinforcements, roof replacements, and cladding modernizations." }
      ]
    }
  ]
};

function generateSectionHTML(category) {
  let html = `
  <!-- ${category.title.toUpperCase()} -->
  <section class="section" style="background:linear-gradient(#f9fafb,#fff);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
    <div class="container-x">
      <div style="text-align:center;max-width:44rem;margin:0 auto 3.5rem">
        <span class="eyebrow">Services Included</span>
        <h2 class="h-section" style="margin-top:1rem">${category.title}</h2>
      </div>
      <div class="grid-cards gc-3">`;
  
  for (const card of category.cards) {
    html += `
        <div class="card-premium card-pad" style="display:flex;flex-direction:column;height:100%">
          <div class="icon-tile" data-icon="${card.icon}" data-size="28"></div>
          <h3 class="h-card">${card.title}</h3>
          <p style="color:#0f172aa6;margin-top:.75rem;font-size:14px;line-height:1.7;flex-grow:1">
            ${card.desc}
          </p>
        </div>`;
  }

  html += `
      </div>
    </div>
  </section>
`;
  return html;
}

for (const [file, cats] of Object.entries(categories)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let injectStr = cats.map(generateSectionHTML).join('');
    
    if (file === 'services.html') {
      // Remove the existing simple bullet lists from the overview grid
      content = content.replace(/<ul class="svc-list">[\s\S]*?<\/ul>/g, '');
    }

    if (file !== 'services.html') {
      if (content.includes('<!-- FAQ -->')) {
        content = content.replace('<!-- FAQ -->', injectStr + '\n  <!-- FAQ -->');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
      } else {
        console.log(`Could not find <!-- FAQ --> in ${file}`);
      }
    } else {
      if (content.includes('<!-- CTA -->')) {
        content = content.replace('<!-- CTA -->', injectStr + '\n  <!-- CTA -->');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
      } else {
        console.log(`Could not find <!-- CTA --> in ${file}`);
      }
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}
