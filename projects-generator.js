import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsData = [
  {
    slug: "horizon-logistics-park",
    seoTitle: "Horizon Logistics Park Construction Hosur | RK Roofing PEB",
    seoDesc: "Explore the Horizon Logistics Park project in Hosur. Heavy PEB structures, insulated roofing, and industrial cladding systems delivered on time.",
    client: "Horizon Industrial Parks",
    location: "Begur, Hosur, Tamil Nadu",
    industry: "Logistics & Warehousing",
    type: "Warehouse & Logistics Construction",
    buildingType: "Grade-A Logistics Park",
    status: "Completed",
    scope: [
      "Pre-Engineered Building (PEB) design",
      "Structural steel fabrication",
      "High-bay frame erection",
      "Insulated metal roofing",
      "Side wall cladding",
      "Rainwater management"
    ],
    desc: [
      "RK Roofing PEB Pvt Ltd successfully executed the high-bay warehouse construction for Horizon Logistics Park in Hosur, Tamil Nadu. The project involved erecting multiple PEB steel structures with insulated metal roofing systems and weather-tight wall cladding solutions.",
      "The layout incorporates high clear-height frames designed to optimize internal racking arrangements for modern third-party logistics (3PL) operations. The metal sheeting utilizes premium anti-corrosive coatings suitable for long-term industrial weather resistance.",
      "Our scope included complete coordination of foundations, design verification, site logistics planning, safety enforcement (EHS), and delivery on a strict schedule. This Grade-A facility meets the highest standards for commercial logistics hubs in India."
    ],
    highlights: [
      "Grade-A logistics park",
      "Multi-block PEB execution",
      "Insulated roofing system"
    ],
    mainImg: "horizon-logistics-park.webp",
    gallery: ["horizon-logistics-park.webp"],
    related: ["welspun-one-logistics-park.html", "ficus-pax-warehouse.html", "halles-blue-steel.html"],
    landmarks: "Begur Lake and SIPCOT Industrial Area, off NH 44 (Bengaluru-Hosur Expressway)"
  },
  {
    slug: "welspun-one-logistics-park",
    seoTitle: "Welspun One Warehouse Construction Hosur | RK Roofing PEB",
    seoDesc: "Explore the Welspun One Logistics Park warehouse build in Hosur. Grade-A PEB structural steel and premium industrial roofing installation.",
    client: "Welspun One Logistics Parks",
    location: "Hosur, Tamil Nadu",
    industry: "Logistics & Warehousing",
    type: "Grade-A Warehouse Construction",
    buildingType: "Logistics Facility",
    status: "Completed",
    scope: [
      "Complete PEB design",
      "Fabrication & dispatch",
      "Steel superstructure erection",
      "Profile metal roofing",
      "Double-layered insulation",
      "Architectural wall cladding"
    ],
    desc: [
      "Delivered a massive logistics warehousing facility for Welspun One Logistics Parks in Hosur. The scope of work encompassed advanced PEB design, steel frame fabrication, structural erection, and leak-free metal roofing sheets to meet Grade-A specifications.",
      "Engineered with strict adherence to load requirements, this facility supports multiple dock levelers, heavy-duty floor slabs, and large transport movements. Double-layered thermal insulation was integrated to ensure temperature stability for stored inventory.",
      "The design incorporates continuous ridge ventilators and daylight polycarbonate sheets, reducing energy costs while providing comfortable internal workspaces. Handover was completed within the tight milestone timelines set by the client."
    ],
    highlights: [
      "Large-format warehouse",
      "High-bay PEB design",
      "Schedule-driven delivery"
    ],
    mainImg: "welspun-one.webp",
    gallery: ["welspun-one.webp"],
    related: ["horizon-logistics-park.html", "ficus-pax-warehouse.html", "halles-blue-steel.html"],
    landmarks: "SIPCOT Industrial Area and Hosur IT Park, off Bangalore-Hosur Highway (NH 44)"
  },
  {
    slug: "ruchi-soya-industries",
    seoTitle: "Ruchi Soya Manufacturing Plant Bihar | RK Roofing PEB",
    seoDesc: "Learn about the 40,000 SQM Ruchi Soya Industries manufacturing plant in Bihar. Complete structural steel and industrial roofing project.",
    client: "Ruchi Soya Industries Ltd (Patanjali Foods)",
    location: "Kaimur, Bihar",
    industry: "FMCG & Food Processing",
    type: "Industrial Manufacturing Plant",
    buildingType: "Processing & Refinery Facility",
    status: "Completed",
    scope: [
      "Heavy primary structural steel erection",
      "Multi-bay processing shed fabrication",
      "Silo support structures",
      "Premium profile metal roofing"
    ],
    desc: [
      "A mega-scale industrial manufacturing facility spanning 40,000 SQM executed in collaboration with Octamec Engineering Ltd. The project includes heavy primary steel erection, multiple processing sheds, storage silos, and premium profile metal roofing.",
      "The massive manufacturing unit was engineered to withstand severe seismic and wind forces typical of the eastern plains. Special heavy column sections were placed to support tall processing machinery and auxiliary pipeline bridges.",
      "Our team carried out precision bolting and heavy crane-led erection on site, strictly adhering to Patanjali's standard corporate layout and safety mandates. The processing shed incorporates custom vents for steam and heat dissipation."
    ],
    highlights: [
      "40,000 SQM industrial facility",
      "Executed with Octamec Engineering Ltd",
      "Heavy structural steel erection"
    ],
    mainImg: "ruchi-soya-industrial-facility-bihar.jpg",
    gallery: ["ruchi-soya-industrial-facility-bihar.jpg", "ruchi-soya-industrial-facility-bihar-2.jpg"],
    related: ["jsw-cement-nandyal.html", "motherson-group.html", "ambient-controls.html"],
    landmarks: "Mohania Junction and Durgavati River, off Grand Trunk Road (NH 19)"
  },
  {
    slug: "jsw-cement-nandyal",
    seoTitle: "JSW Cement Storage Shed Nandyal | RK Roofing PEB",
    seoDesc: "View the JSW Cement storage yard PEB building project in Nandyal, AP. Heavy structural steel erection and large span fabrication.",
    client: "JSW Cement Ltd",
    location: "Nandyal, Andhra Pradesh",
    industry: "Cement & Heavy Industry",
    type: "Raw Material Storage Shed",
    buildingType: "Bulk Storage Hangar",
    status: "Completed",
    scope: [
      "Heavy industrial structural steel erection",
      "Large-span PEB frame assembly",
      "Secondary steel purlins",
      "Industrial sheet roofing"
    ],
    desc: [
      "Executed in collaboration with Zamil Construction Pvt Ltd, this heavy industrial project involved the design and erection of a massive raw material storage yard shed at the JSW Cement plant in Nandyal. Features large clear-span frames engineered for high wind loads.",
      "The warehouse was designed to contain bulk raw materials, preventing dust dispersion while protecting stock from rain. Erection of the massive truss spans required precise tandem crane operations and special rigging setups.",
      "High-grade anti-corrosive coatings were applied to all steel surfaces to prevent chemical wear and corrosion from cement dust. The building successfully meets all structural standards under the Indian Code (IS 875 and IS 800)."
    ],
    highlights: [
      "Heavy industrial steel infrastructure",
      "Executed with Zamil Construction Pvt Ltd",
      "Large-span PEB erection"
    ],
    mainImg: "jsw-cement-peb-structure-nandyal.jpg",
    gallery: [
      "jsw-cement-peb-structure-nandyal.jpg",
      "jsw-cement-peb-structure-nandyal-2.jpg",
      "jsw-cement-peb-structure-nandyal-3.jpg",
      "jsw-cement-office-collage-nandyal.jpg",
      "jsw-cement-completed-storage-shed-nandyal.jpg"
    ],
    related: ["ruchi-soya-industries.html", "motherson-group.html", "dynamatic-technologies.html"],
    landmarks: "Near Bilakala Gudur reserve forest, off Nandyal-Kurnool Highway"
  },
  {
    slug: "bangalore-palace",
    seoTitle: "Bangalore Palace Steel Event Structure | RK Roofing PEB",
    seoDesc: "See how we erected a large-span temporary-to-permanent structural steel event frame at the historic Bangalore Palace site.",
    client: "Bangalore Palace Royal Events",
    location: "Bangalore, Karnataka",
    industry: "Commercial & Tourism",
    type: "Large-Span Event Structure",
    buildingType: "Exhibition & Event Hangar",
    status: "Completed",
    scope: [
      "Precision PEB structural design",
      "Modular steel frame assembly",
      "Crane-assisted truss erection",
      "Weather-proof roof coverings"
    ],
    desc: [
      "Erected a premium, large-span structural steel event facility adjacent to the historic Bangalore Palace. The project required highly precise crane operations and strict EHS protocols to safeguard the heritage palace grounds while delivering a robust structure.",
      "This semi-permanent structure features high aesthetic detailing to complement the surrounding palace architecture. The structural members are designed to be modular, allowing flexible interior layouts and heavy stage lighting integration.",
      "The roofing profile utilizes noise-dampening insulation layers to ensure sound isolation during high-profile events. The structure has successfully hosted international trade expos, royal weddings, and major corporate exhibitions."
    ],
    highlights: [
      "Large-span event structure",
      "Heritage-site adjacent execution",
      "Heavy crane-led erection"
    ],
    mainImg: "bangalore-palace-event-structure-erection.jpg",
    gallery: [
      "bangalore-palace-event-structure-erection.jpg",
      "bangalore-palace-event-structure-erection-2.jpg",
      "bangalore-palace-event-structure-erection-3.jpg"
    ],
    related: ["bmrcl-metro-station.html", "alfa-peb-yelahanka.html", "dynamatic-technologies.html"],
    landmarks: "Near Mount Carmel College and Fun World Amusement Park, Vasanth Nagar"
  },
  {
    slug: "bmrcl-metro-station",
    seoTitle: "BMRCL Metro Station Roofing Bangalore | RK Roofing PEB",
    seoDesc: "Explore the curved metal roofing sheet installation for BMRCL Metro Stations in Bangalore, using double-locked standing seam profiles.",
    client: "Bangalore Metro Rail Corporation Ltd (BMRCL)",
    location: "Bangalore, Karnataka",
    industry: "Public Transport Infrastructure",
    type: "Metro Station Roofing Package",
    buildingType: "Transit Facility",
    status: "Completed",
    scope: [
      "Design and installation of curved metal roofing profiles",
      "Double-locked standing seam sheet installation",
      "Architectural side cladding"
    ],
    desc: [
      "Delivered a curved metal roofing and side cladding package for the Bangalore Metro Rail Corporation (BMRCL) stations. Used weather-tight standing seam profiles engineered for heavy monsoons and high structural durability.",
      "The geometry of the metro platform roofs required custom-curved roll forming at the site to eliminate mid-lap joints, drastically reducing leakage risks. Special fall-protection netting and rigid anchor points were installed to ensure safe working conditions during overnight track-adjacent works.",
      "Completed in alignment with the safety guidelines of the metro rail inspectors, the standing seam sheets allow thermal expansion and contraction without damaging the underlying structure, offering a lifetime design solution for urban transport."
    ],
    highlights: [
      "Curved metal roofing system",
      "Metro station roof package",
      "Weather-tight standing seam profile"
    ],
    mainImg: "bmrcl-metro-station-roofing-bangalore.jpg",
    gallery: ["bmrcl-metro-station-roofing-bangalore.jpg"],
    related: ["bangalore-palace.html", "alfa-peb-yelahanka.html", "dynamatic-technologies.html"],
    landmarks: "Located at designated Namma Metro transit stations on Kanakapura Road / Outer Ring Road"
  },
  {
    slug: "alfa-peb-yelahanka",
    seoTitle: "Alfa PEB Multi-Storey Building Yelahanka | RK Roofing PEB",
    seoDesc: "Discover the multi-storey commercial PEB frame erected in Yelahanka, Bangalore. High-rise steel column and beam construction details.",
    client: "Alfa PEB Limited",
    location: "Yelahanka, Bangalore",
    industry: "Commercial & Office Space",
    type: "Multi-Storey Commercial PEB Building",
    buildingType: "Multi-Storey Commercial Frame",
    status: "Completed",
    scope: [
      "Multi-tier structural steel frame erection",
      "High-rise PEB columns",
      "Multi-floor decking sheets",
      "Bolted connection alignment"
    ],
    desc: [
      "A multi-storey commercial PEB building frame erected in Yelahanka, Bangalore. The project involved complex urban-site crane operations, high-rise column-and-beam connections, and tight tolerance alignments in a dense commercial zone.",
      "The structure uses composite deck slabs where profiled steel decking sheets act as a permanent shuttering and tensile reinforcement for the concrete floors. This significantly sped up the floor slab casting timeline compared to traditional RCC.",
      "Precision-engineered primary columns were bolted with high-tensile fasteners under strict QC check. This structure is a prime example of structural steel design applied to high-density commercial office buildings in urban centers."
    ],
    highlights: [
      "Multi-storey PEB frame erection",
      "Urban-site crane operations",
      "High-rise PEB column & beam scope"
    ],
    mainImg: "alfa-peb-multi-storey-yelahanka.jpg",
    gallery: ["alfa-peb-multi-storey-yelahanka.jpg", "alfa-peb-multi-storey-yelahanka-2.jpg"],
    related: ["bangalore-palace.html", "bmrcl-metro-station.html", "dynamatic-technologies.html"],
    landmarks: "Near Attur Lake and Yelahanka New Town police station, Attur Main Road"
  },
  {
    slug: "motherson-group",
    seoTitle: "Motherson Manufacturing Plant Pune | RK Roofing PEB",
    seoDesc: "View the Motherson Group automotive parts manufacturing plant in Pune. Features customized PEB structural framework and profile wall cladding.",
    client: "Motherson Group",
    location: "Pune, Maharashtra",
    industry: "Automotive",
    type: "Automotive Parts Manufacturing Plant",
    buildingType: "Factory Shed & Assembly Unit",
    status: "Completed",
    scope: [
      "Custom primary PEB steel frame erection",
      "Profile metal sheet roofing",
      "Custom color wall cladding",
      "Daylight panels",
      "Ventilation louvers"
    ],
    desc: [
      "Constructed a state-of-the-art manufacturing plant for the Motherson Group in Pune, Maharashtra. The facility features a custom red-roof PEB framework with insulated wall cladding and trapezoidal profile sheeting matching the client's corporate branding.",
      "The factory floor was designed to accommodate heavy robotic presses, injection molding machinery, and rapid material handling assembly lines. Custom portal frames were created to maximize unobstructed interior space for the machinery layout.",
      "Translucent daylight panels were integrated into the roof to reduce electrical dependency during day shifts, while the wall-integrated louver system provides continuous air exchange to maintain thermal comfort inside."
    ],
    highlights: [
      "Industrial manufacturing facility",
      "Red-roof PEB execution",
      "Wall cladding & profile sheeting"
    ],
    mainImg: "motherson-automotive-manufacturing-plant-pune.jpg",
    gallery: ["motherson-automotive-manufacturing-plant-pune.jpg"],
    related: ["ruchi-soya-industries.html", "jsw-cement-nandyal.html", "ambient-controls.html"],
    landmarks: "Chakan MIDC Phase II, off Talegaon-Chakan Road"
  },
  {
    slug: "halles-blue-steel",
    seoTitle: "Halles Blue Steel Warehouse Bellary | RK Roofing PEB",
    seoDesc: "Check out the Halles Blue Steel warehouse project in Bellary. Complete industrial PEB steel shed with full side wall cladding installation.",
    client: "Halles Blue Steel Pvt Ltd",
    location: "Bellary, Karnataka",
    industry: "Metal & Steel Processing",
    type: "Industrial Warehouse & Shed",
    buildingType: "Raw Material Storage Shed",
    status: "Completed",
    scope: [
      "Foundations and civil preparation",
      "Fabrication and erection of primary PEB steel shed",
      "Profile metal roofing sheets",
      "Full-height side wall cladding"
    ],
    desc: [
      "Complete delivery of a large-format industrial storage warehouse for Halles Blue Steel in Bellary, Karnataka. The project included laying the foundations, fabricating the primary steel shed structure, and wrapping the building in durable side-wall metal cladding.",
      "The Bellary site experiences high temperatures and dusty winds. Hence, the building envelope was built using high-reflectivity Galvalume roofing sheets and heavy-duty side cladding, offering resistance to abrasion from sand and steel dust.",
      "This facility has a multi-span layout that optimizes storage density. It is built to house heavy coil sheets and structural steel products, utilizing specialized concrete floor zones with reinforcement to withstand point loading from steel coils."
    ],
    highlights: [
      "Large-format industrial warehouse",
      "PEB shed with side cladding",
      "Complete shed delivery"
    ],
    mainImg: "halles-blue-steel-warehouse-bellary.jpg",
    gallery: ["halles-blue-steel-warehouse-bellary.jpg"],
    related: ["horizon-logistics-park.html", "welspun-one-logistics-park.html", "ficus-pax-warehouse.html"],
    landmarks: "Near Jindal Vijayanagar Steel Plant (JSW Steel Ltd), off Toranagallu-Bellary Road"
  },
  {
    slug: "ambient-controls",
    seoTitle: "Ambient Controls Manufacturing Plant Chennai | RK Roofing PEB",
    seoDesc: "View the Ambient Controls manufacturing building in Chennai. Custom PEB structure with advanced side-wall louvered cladding and daylight panels.",
    client: "Ambient Controls Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    industry: "Electronics & Engineering",
    type: "Manufacturing Unit & Warehouse",
    buildingType: "Industrial Shed & Assembly Hangar",
    status: "Completed",
    scope: [
      "PEB steel framing",
      "Translucent polycarbonate day-lighting sheets",
      "Side-wall louvered cladding ventilation",
      "Custom gutter downspout networks"
    ],
    desc: [
      "A custom-engineered manufacturing facility for Ambient Controls in Chennai, Tamil Nadu. The project features translucent polycarbonate panels for natural daylighting, integrated louvered side-wall cladding for ventilation, and full rainwater gutters.",
      "Built inside Chennai's high-humidity industrial belt, the facility utilizes premium rust-resistant fasteners and coated structural frames. The design features a continuous gutter network to channel heavy monsoon rainwater away safely.",
      "The internal floor layout features anti-static concrete zones suitable for assembling electronic control panels. The building serves as a perfect blend of high-efficiency utility design and smart industrial architecture."
    ],
    highlights: [
      "Industrial facility with louvered ventilation",
      "PEB shed with translucent panels",
      "Side-wall cladding system"
    ],
    mainImg: "ambient-controls-industrial-shed-chennai.jpg",
    gallery: ["ambient-controls-industrial-shed-chennai.jpg", "ambient-controls-industrial-shed-chennai-2.jpg"],
    related: ["ruchi-soya-industries.html", "motherson-group.html", "cheyyar-plant.html"],
    landmarks: "Sriperumbudur Industrial Corridor, near Hyundai Motor India plant"
  },
  {
    slug: "dynamatic-technologies",
    seoTitle: "Dynamatic Technologies Aerospace Facility Bangalore | RK Roofing PEB",
    seoDesc: "View the Dynamatic Technologies aerospace plant project in Devanahalli, Bangalore. Structural steel hangar and heavy PEB crane girder erection.",
    client: "Dynamatic Technologies Limited",
    location: "Devanahalli, Bangalore, Karnataka",
    industry: "Aerospace & High-Tech Engineering",
    type: "Aerospace Component Manufacturing Facility",
    buildingType: "Aviation Hangar & Clean-Room Frame",
    status: "Completed",
    scope: [
      "High-precision PEB steel design",
      "Heavy-duty structural column erection",
      "Overhead crane support runway beams",
      "Primary trusses",
      "High-tensile bolted connections"
    ],
    desc: [
      "A high-precision structural steel PEB hangar framework executed for Dynamatic Technologies' Aerospace division near Bengaluru International Airport in Devanahalli. Features complex primary columns and crane girders to house heavy aviation component assembly.",
      "The engineering team maintained extremely low structural tolerances to support multi-ton overhead cranes. The design includes deep trusses with clean clearance zones to facilitate large aircraft component transport inside the hangar.",
      "High-durability fire-retardant paints and epoxies were applied to all steelwork. This specialized facility highlights RK Roofing PEB's capability to deliver state-of-the-art industrial infrastructure for high-precision global technology companies."
    ],
    highlights: [
      "Aerospace manufacturing facility",
      "Heavy structural steel mainframe",
      "Large clear-span design"
    ],
    mainImg: "dynamatic-technologies-aerospace-facility-devanahalli-1.jpg",
    gallery: [
      "dynamatic-technologies-aerospace-facility-devanahalli-1.jpg",
      "dynamatic-technologies-aerospace-facility-devanahalli-2.jpg",
      "dynamatic-technologies-aerospace-facility-devanahalli-3.jpg",
      "dynamatic-technologies-aerospace-facility-devanahalli-4.jpg",
      "dynamatic-technologies-aerospace-facility-devanahalli-5.jpg"
    ],
    related: ["bangalore-palace.html", "bmrcl-metro-station.html", "alfa-peb-yelahanka.html"],
    landmarks: "KIADB Aerospace Park, near Kempegowda International Airport and Devanahalli Fort"
  },
  {
    slug: "ficus-pax-warehouse",
    seoTitle: "Ficus Pax Gokuldas Warehouse Hoskote | RK Roofing PEB",
    seoDesc: "See the Ficus Pax warehouse project in Hoskote, Bangalore. Double-height PEB structure, industrial roofing sheets and color-coated wall cladding.",
    client: "Gokuldas Warehousing Developer (Tenant: Ficus Pax)",
    location: "Hoskote, Bangalore, Karnataka",
    industry: "Packaging & Logistics",
    type: "Packaging Manufacturing & Storage Warehouse",
    buildingType: "Double-Height Industrial Hangar",
    status: "Completed",
    scope: [
      "Groundwork liaison and planning",
      "Steel frame fabrication",
      "Double-height column erection",
      "Insulated metal sheet roofing",
      "Daylight panel integration",
      "Colored profile side-wall cladding"
    ],
    desc: [
      "Delivered a double-height packaging manufacturing warehouse for Ficus Pax (a UFP Industries company) in Hoskote, Bangalore. The structure combines a red-and-white pre-painted profile wall cladding design, daylight panels, and a heavy-duty industrial concrete floor layout.",
      "The double-height column spacing allows maximum vertical stacking for inventory storage, optimizing space usage for heavy logistics. Thermal-insulated roofing panels were chosen to improve energy efficiency within the packaging lines.",
      "Safety systems such as fire hydrants and electrical cable tray supports were fully integrated into the secondary PEB framework during erection, ensuring rapid commissioning of manufacturing equipment upon structural completion."
    ],
    highlights: [
      "Packaging manufacturing unit",
      "Double-height warehouse",
      "Pre-painted profile wall cladding"
    ],
    mainImg: "gokuldas-ficus-pax-warehouse-hoskote-1.jpg",
    gallery: ["gokuldas-ficus-pax-warehouse-hoskote-1.jpg", "gokuldas-ficus-pax-warehouse-hoskote-2.jpg"],
    related: ["horizon-logistics-park.html", "welspun-one-logistics-park.html", "halles-blue-steel.html"],
    landmarks: "Pillagumpa KIADB Industrial Area, near Hoskote Lake and Old Madras Road"
  },
  {
    slug: "cheyyar-plant",
    seoTitle: "Cheyyar Plant Construction | RK Roofing PEB",
    seoDesc: "Explore the Cheyyar plant project completed with advanced PEB structures, metal roofing, and wall cladding solutions.",
    client: "To Be Updated (Needs Client Verification)",
    location: "Cheyyar, Tamil Nadu",
    industry: "Industrial Manufacturing",
    type: "Industrial Building",
    buildingType: "Factory Shed",
    status: "Completed",
    scope: [
      "Pre-engineered steel column installation",
      "Lightweight roof purlin alignment",
      "Weather-proof color-coated profile sheet roofing",
      "Side cladding systems"
    ],
    desc: [
      "RK Roofing PEB Pvt Ltd successfully executed this large-scale industrial manufacturing factory shed in Cheyyar, Tamil Nadu. The project showcases advanced pre-engineered steel columns, lightweight roof purlins, and weather-proof color-coated profile sheet installation.",
      "The structural layout maximizes open floor space using a wide portal span. High-strength structural bolts and bracing systems were used to ensure load distribution and wind resistance in accordance with local safety building standards.",
      "Durable flashing and gutter units were installed along the roof edge to handle rainwater during regional storms. The facility is fully optimized for mass assembly operations and bulk industrial storage."
    ],
    highlights: [
      "Large-span factory shed",
      "Roofing and side cladding",
      "Needs Client Verification"
    ],
    mainImg: "cheyyar-plant-1.jpg",
    gallery: ["cheyyar-plant-1.jpg", "cheyyar-plant-2.jpg"],
    related: ["horizon-logistics-park.html", "welspun-one-logistics-park.html", "ambient-controls.html"],
    landmarks: "SIPCOT Industrial Park Cheyyar, off Kanchipuram-Cheyyar Road"
  }
];

const projectsDir = path.resolve(__dirname, 'projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Map slug to details to find related project details
const projectLookup = {};
projectsData.forEach(p => {
  projectLookup[p.slug + '.html'] = p;
});

projectsData.forEach(p => {
  const filePath = path.join(projectsDir, `${p.slug}.html`);
  
  // Format highlights
  const highlightsHtml = p.highlights.map(hl => `<li>✔ ${hl}</li>`).join('\n              ');
  
  // Format scope
  const scopeHtml = p.scope.map(sc => `<li>${sc}</li>`).join('\n              ');
  
  // Format desc paragraphs
  const descHtml = p.desc.map(para => `<p style="color:#0f172aa6;margin-bottom:1.25rem;font-size:1.05rem;line-height:1.75;text-align:justify;text-justify:inter-word;">${para}</p>`).join('\n            ');
  
  // Format gallery thumbnails
  const galleryThumbsHtml = p.gallery.map((g, idx) => {
    const borderStyle = idx === 0 ? 'border-color:var(--cta);' : 'border-color:transparent;';
    return `<button class="gallery-thumb-btn" data-src="../assets/${g}" style="flex:0 0 100px;height:70px;border-radius:0.375rem;overflow:hidden;border:2px solid;${borderStyle}padding:0;cursor:pointer;transition:border-color 0.2s;" aria-label="View gallery image ${idx + 1}">
              <img src="../assets/${g}" alt="Thumbnail ${idx + 1}" style="width:100%;height:100%;object-fit:cover;">
            </button>`;
  }).join('\n            ');
  
  // Format similar projects
  const similarHtml = p.related.map(relFilename => {
    const relProject = projectLookup[relFilename];
    if (!relProject) return '';
    const relHighlights = relProject.highlights.map(h => `<li style="margin-top:.375rem;">· ${h}</li>`).join('');
    
    return `<a href="${relProject.slug}.html" class="card-premium" style="display:flex;flex-direction:column;text-decoration:none;color:inherit;overflow:hidden;">
            <div style="position:relative;height:240px;overflow:hidden;">
              <img src="../assets/${relProject.mainImg}" alt="${relProject.seoTitle}" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform .7s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
              <div class="badge" style="position:absolute;bottom:1rem;left:1rem;background:rgba(255,255,255,.9);color:rgba(15,23,42,.7);">${relProject.industry}</div>
            </div>
            <div style="padding:1.75rem;flex:1;display:flex;flex-direction:column;">
              <h3 style="font-family:Montserrat;font-weight:700;font-size:1.25rem;margin-bottom:0.5rem;color:var(--primary);">${relProject.client}</h3>
              <p style="display:flex;align-items:center;gap:.375rem;font-size:.875rem;color:rgba(15,23,42,.6);margin-bottom:1rem;"><span data-icon="pin" data-size="16" style="color:var(--cta);"></span> ${relProject.location}</p>
              <p style="font-family:Montserrat;font-weight:700;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--cta);margin-bottom:0.75rem;">${relProject.type}</p>
              <ul style="list-style:none;padding:0;font-size:.875rem;color:rgba(15,23,42,.65);margin-top:auto;">
                ${relHighlights}
              </ul>
            </div>
          </a>`;
  }).join('\n        ');

  // Breadcrumb short title (clean name)
  const breadcrumbTitle = p.client.includes('To Be Updated') ? 'Factory Shed' : p.client;

  // Render full HTML contents
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width,initial-scale=1" name="viewport"/>
  <title>${p.seoTitle}</title>
  <meta content="${p.seoDesc}" name="description"/>
  <link href="https://rkroofingpeb.com/projects/${p.slug}.html" rel="canonical"/>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" media="print" onload="this.media='all'" rel="stylesheet"/>
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
  </noscript>
  <link href="../styles.css" rel="stylesheet"/>
  <meta content="#1e2a78" name="theme-color"/>
  <meta content="index,follow,max-image-preview:large" name="robots"/>
  <meta content="https://rkroofingpeb.com/projects/${p.slug}.html" property="og:url"/>
  <meta content="RK Roofing PEB Pvt Ltd" property="og:site_name"/>
  <meta content="https://rkroofingpeb.com/assets/${p.mainImg}" property="og:image"/>
  <meta content="1200" property="og:image:width"/>
  <meta content="630" property="og:image:height"/>
  <meta content="en_IN" property="og:locale"/>
  <meta content="summary_large_image" name="twitter:card"/>
  <meta content="${p.seoTitle}" name="twitter:title"/>
  <meta content="${p.seoDesc}" name="twitter:description"/>
  <meta content="https://rkroofingpeb.com/assets/${p.mainImg}" name="twitter:image"/>
  <meta content="RK Roofing PEB Pvt Ltd" name="author"/>
  <meta content="website" property="og:type"/>
  <meta content="${p.seoTitle}" property="og:title"/>
  <meta content="${p.seoDesc}" property="og:description"/>
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://rkroofingpeb.com/projects/${p.slug}.html#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rkroofingpeb.com/index.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://rkroofingpeb.com/projects.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${breadcrumbTitle.replace(/"/g, '\\"')}",
            "item": "https://rkroofingpeb.com/projects/${p.slug}.html"
          }
        ]
      },
      {
        "@type": "Project",
        "@id": "https://rkroofingpeb.com/projects/${p.slug}.html#project",
        "name": "${p.client.replace(/"/g, '\\"')} — ${p.type.replace(/"/g, '\\"')}",
        "description": "${p.seoDesc.replace(/"/g, '\\"')}",
        "image": "https://rkroofingpeb.com/assets/${p.mainImg}",
        "location": {
          "@type": "Place",
          "name": "${p.location.replace(/"/g, '\\"')}"
        },
        "customer": {
          "@type": "Organization",
          "name": "${p.client.replace(/"/g, '\\"')}"
        }
      }
    ]
  }
  </script>
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
  <link rel="manifest" href="/site.webmanifest"/>
  
  <style>
    .project-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      align-items: start;
    }
    @media (min-width: 1024px) {
      .project-grid {
        grid-template-columns: 1.8fr 1fr !important;
        gap: 4rem !important;
      }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div id="rk-header"></div>
  <main id="main-content">
    
    <!-- HERO -->
    <section class="gradient-hero site-anchor" style="color:#fff;margin-top:-80px;padding:10rem 0 6rem;position:relative;overflow:hidden">
      <img alt="${p.seoTitle}" decoding="async" fetchpriority="high" height="720" src="../assets/${p.mainImg}" style="object-fit:cover;width:100%;height:100%;position:absolute;inset:0;opacity:0.3" width="1280"/>
      <div style="background:linear-gradient(#141c52eb,#1e2a78eb);position:absolute;inset:0;opacity:0.85;"></div>
      <div class="container-x" style="position:relative">
        <span class="eyebrow eyebrow-gold">Project Case Study</span>
        <h1 class="h-display" style="max-width:64rem;margin-top:1rem">${p.client}</h1>
        <p style="color:#ffffffd9;max-width:42rem;margin-top:1.5rem;font-size:1.125rem;line-height:1.7;display:flex;align-items:center;gap:0.5rem;">
          <span data-icon="pin" data-size="18" style="color:var(--cta);"></span> ${p.location}
        </p>
      </div>
    </section>

    <!-- BREADCRUMB -->
    <nav aria-label="Breadcrumb" class="breadcrumb-nav">
      <div class="container-x">
        <ol class="breadcrumb-list">
          <li><a href="../index.html">Home</a></li>
          <li><a href="../projects.html">Projects</a></li>
          <li aria-current="page">${breadcrumbTitle}</li>
        </ol>
      </div>
    </nav>

    <!-- PROJECT CONTENT -->
    <section class="section" style="background:#fff;">
      <div class="container-x">
        <div class="project-grid">
          <!-- Column 1: Description & Scope -->
          <div>
            <h2 style="font-family:Montserrat;font-size:1.75rem;font-weight:800;color:var(--primary);margin-bottom:1.25rem;">Project Overview</h2>
            ${descHtml}
            
            <h2 style="font-family:Montserrat;font-size:1.75rem;font-weight:800;color:var(--primary);margin-top:2.5rem;margin-bottom:1rem;">Scope of Work</h2>
            <ul class="spec-list" style="margin-bottom:2.5rem;">
              ${scopeHtml}
            </ul>
            
            <h2 style="font-family:Montserrat;font-size:1.75rem;font-weight:800;color:var(--primary);margin-bottom:1rem;">Project Highlights</h2>
            <ul class="spec-list">
              ${highlightsHtml}
            </ul>
          </div>
          
          <!-- Column 2: Information Card -->
          <div>
            <div class="card-premium" style="padding:2rem;background:var(--muted);position:sticky;top:100px;">
              <h3 style="font-family:Montserrat;font-size:1.25rem;font-weight:800;color:var(--primary);margin-bottom:1.5rem;border-bottom:2px solid var(--border);padding-bottom:0.75rem;">Project Details</h3>
              <div style="display:flex;flex-direction:column;gap:1.25rem;margin-bottom:2rem;">
                <div>
                  <span style="font-size:11px;text-transform:uppercase;color:var(--muted-foreground);display:block;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:600;">Client</span>
                  <span style="font-size:15px;font-weight:700;color:var(--foreground);">${p.client}</span>
                </div>
                <div>
                  <span style="font-size:11px;text-transform:uppercase;color:var(--muted-foreground);display:block;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:600;">Location</span>
                  <span style="font-size:15px;font-weight:700;color:var(--foreground);">${p.location}</span>
                </div>
                <div>
                  <span style="font-size:11px;text-transform:uppercase;color:var(--muted-foreground);display:block;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:600;">Industry</span>
                  <span style="font-size:15px;font-weight:700;color:var(--foreground);">${p.industry}</span>
                </div>
                <div>
                  <span style="font-size:11px;text-transform:uppercase;color:var(--muted-foreground);display:block;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:600;">Project Type</span>
                  <span style="font-size:15px;font-weight:700;color:var(--foreground);">${p.type}</span>
                </div>
                <div>
                  <span style="font-size:11px;text-transform:uppercase;color:var(--muted-foreground);display:block;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:600;">Building Type</span>
                  <span style="font-size:15px;font-weight:700;color:var(--foreground);">${p.buildingType}</span>
                </div>
                <div>
                  <span style="font-size:11px;text-transform:uppercase;color:var(--muted-foreground);display:block;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:600;">Completion Status</span>
                  <span class="badge" style="background:rgba(37,211,102,0.15);color:#128c7e;font-size:10px;padding:0.25rem 0.75rem;">${p.status}</span>
                </div>
              </div>
              <a class="btn-cta btn-glow" href="../contact.html" style="width:100%;justify-content:center;padding:1rem;">Request a Quote for a Similar Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IMAGE GALLERY -->
    <section class="section border-t-soft" style="background:var(--muted);border-bottom:1px solid var(--border)">
      <div class="container-x">
        <div style="text-align:center;max-width:44rem;margin:0 auto 3rem">
          <span class="eyebrow">Project Showcase</span>
          <h2 class="h-section" style="margin-top:1rem">Project Gallery</h2>
          <p style="color:#0f172aa6;margin-top:1rem;line-height:1.75">Click the image below to open the interactive fullscreen lightbox.</p>
        </div>
        
        <div style="max-width:56rem;margin:0 auto;">
          <div class="card-premium" style="position:relative;height:500px;overflow:hidden;border-radius:0.75rem;background:#000;margin-bottom:1rem;cursor:pointer;" id="galleryMainWrap">
            <img id="galleryMainImg" src="../assets/${p.mainImg}" alt="${p.client} project photo" style="width:100%;height:100%;object-fit:cover;transition:opacity 0.3s ease;">
            <div style="position:absolute;inset:0;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s;" id="galleryHoverBtn">
              <span class="btn-cta" style="pointer-events:none;">View Full Screen</span>
            </div>
          </div>
          
          <div style="display:flex;gap:0.75rem;overflow-x:auto;padding-bottom:0.5rem;" id="galleryThumbs">
            ${galleryThumbsHtml}
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATION SECTION -->
    <section class="section border-t-soft" style="background:#fff;">
      <div class="container-x center" style="max-width:56rem;">
        <span class="eyebrow">Project Location</span>
        <h2 class="h-section" style="margin-top:1rem;margin-bottom:1rem;">Where we built it</h2>
        <p style="color:#0f172aa6;margin-bottom:2.5rem;line-height:1.75;">The project is located at <strong>${p.location}</strong>.<br><strong>Nearby Landmarks:</strong> ${p.landmarks}.</p>
        
        <div style="position:relative;width:100%;min-height:clamp(260px,42vw,440px);border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,.08);border:1px solid var(--border);background:linear-gradient(135deg,#eaf0fb 0%,#fff 52%,#eaf0fb 100%);display:flex;align-items:center;justify-content:center;padding:2rem">
          <div class="texture-grid" style="position:absolute;inset:0;opacity:.35"></div>
          <div style="position:absolute;inset:0;background:radial-gradient(circle at 28% 34%,rgba(234,120,51,.12),transparent 22%),radial-gradient(circle at 70% 64%,rgba(30,42,120,.1),transparent 24%)"></div>
          <div style="position:relative;text-align:center;max-width:560px">
            <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--cta),var(--gold));color:#fff;margin:0 auto 1.25rem;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 34px -16px rgba(234,120,51,.65)"><span data-icon="pin" data-size="30"></span></div>
            <div class="eyebrow">Location Coordination</div>
            <h3 style="margin-top:.75rem;font-family:Montserrat;font-size:1.5rem;font-weight:800;color:var(--foreground)">${p.location}</h3>
            <p style="color:#0f172ab3;margin:1rem auto 0;line-height:1.7">Project successfully erected and commissioned to code specifications at the site.</p>
          </div>
        </div>
        <div style="text-align:center;margin-top:1.5rem">
          <a class="btn btn-cta" href="https://maps.app.goo.gl/gdvinAKbkdAuQ2gk9" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:.5rem"><span data-icon="pin" data-size="18"></span>Explore Regional Map Location</a>
        </div>
      </div>
    </section>

    <!-- SIMILAR PROJECTS -->
    <section class="section border-t-soft" style="background:var(--muted);border-bottom:1px solid var(--border)">
      <div class="container-x">
        <div style="text-align:center;max-width:44rem;margin:0 auto 3.5rem">
          <span class="eyebrow">More Projects</span>
          <h2 class="h-section" style="margin-top:1rem">Similar Projects</h2>
          <p style="color:#0f172aa6;margin-top:1rem;line-height:1.75">Explore other industrial and commercial infrastructure projects executed by RK Roofing PEB.</p>
        </div>
        
        <div class="grid-3">
          ${similarHtml}
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="section dark-section" style="position:relative;overflow:hidden">
      <div class="texture-grid" style="opacity:.1;position:absolute;inset:0"></div>
      <div class="container-x center" style="max-width:48rem;position:relative">
        <span class="eyebrow eyebrow-gold" style="margin-bottom:1.25rem;display:inline-block">Get in Touch</span>
        <h2 class="h-section" style="color:#fff">Ready to build your next industrial project? Let's discuss.</h2>
        <p style="color:#ffffffbf;max-width:36rem;margin:1.25rem auto 0;line-height:1.7">Share your requirements with us. We'll provide customized structural advice, preliminary sketches, and a detailed cost estimate.</p>
        <div class="cta-row" style="justify-content:center;margin-top:2.5rem">
          <a class="btn-cta btn-glow" href="../contact.html" style="padding:1rem 2.25rem">Request Quote <span data-icon="arrow" data-size="16"></span></a>
          <a class="btn-outline-light" href="tel:+919845770392" style="padding:1rem 2.25rem"><span data-icon="phone" data-size="16"></span> Call +91 98457 70392</a>
          <a class="btn-outline-light" href="https://wa.me/919845770392" target="_blank" rel="noopener noreferrer" style="padding:1rem 2.25rem;background:#25D366;border-color:transparent;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5h.01c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 18.3-5c0 5.4-4.4 9.8-9.9 9.8zm5.4-7.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5c-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.2-.7.2-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"/></svg> WhatsApp Us</a>
        </div>
      </div>
    </section>

  </main>
  <div id="rk-footer"></div>
  <script type="module" src="../app.js"></script>

  <!-- LIGHTBOX MODAL -->
  <div id="lightboxModal" class="rk-popup-overlay" style="display:none;z-index:300;align-items:center;justify-content:center;background:rgba(15,23,42,0.95);opacity:1;visibility:visible;padding:1rem;">
    <button id="closeLightbox" class="rk-popup-close" style="top:1.5rem;right:1.5rem;font-size:24px;width:44px;height:44px;background:rgba(255,255,255,0.1);">&times;</button>
    <div style="position:relative;max-width:90%;max-height:85vh;display:flex;align-items:center;justify-content:center;flex-direction:column;">
      <img id="lightboxImg" src="" alt="" style="max-width:100%;max-height:80vh;object-fit:contain;border-radius:0.5rem;box-shadow:0 20px 50px rgba(0,0,0,0.5);transition:opacity 0.15s ease;">
      <p id="lightboxCaption" style="color:#fff;margin-top:1rem;font-family:Montserrat;font-size:14px;font-weight:600;text-align:center;"></p>
      <button id="prevLightbox" style="position:absolute;left:-60px;background:none;border:none;color:#fff;font-size:36px;cursor:pointer;padding:1rem;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">&#10094;</button>
      <button id="nextLightbox" style="position:absolute;right:-60px;background:none;border:none;color:#fff;font-size:36px;cursor:pointer;padding:1rem;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">&#10095;</button>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const galleryImages = ${JSON.stringify(p.gallery.map(g => `../assets/${g}`))};
      let currentIndex = 0;
      
      const mainImg = document.getElementById('galleryMainImg');
      const mainWrap = document.getElementById('galleryMainWrap');
      const hoverBtn = document.getElementById('galleryHoverBtn');
      
      // Setup thumb click events
      const thumbs = document.querySelectorAll('.gallery-thumb-btn');
      thumbs.forEach((thumb, idx) => {
        thumb.addEventListener('click', () => {
          currentIndex = idx;
          mainImg.style.opacity = '0';
          setTimeout(() => {
            mainImg.src = thumb.dataset.src;
            mainImg.style.opacity = '1';
          }, 150);
          
          // Highlight thumb
          thumbs.forEach(t => t.style.borderColor = 'transparent');
          thumb.style.borderColor = 'var(--cta)';
        });
      });
      
      // Hover overlay effect for main image
      mainWrap.addEventListener('mouseenter', () => { hoverBtn.style.opacity = '1'; });
      mainWrap.addEventListener('mouseleave', () => { hoverBtn.style.opacity = '0'; });
      
      // Lightbox modal elements
      const lightboxModal = document.getElementById('lightboxModal');
      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxCaption = document.getElementById('lightboxCaption');
      const closeLightbox = document.getElementById('closeLightbox');
      const prevBtn = document.getElementById('prevLightbox');
      const nextBtn = document.getElementById('nextLightbox');
      
      function showLightbox(idx) {
        currentIndex = idx;
        lightboxImg.src = galleryImages[currentIndex];
        lightboxCaption.textContent = "Image " + (currentIndex + 1) + " of " + galleryImages.length;
        lightboxModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Hide navigation arrows if there is only 1 image
        if (galleryImages.length <= 1) {
          prevBtn.style.display = 'none';
          nextBtn.style.display = 'none';
        } else {
          prevBtn.style.display = 'block';
          nextBtn.style.display = 'block';
          
          // Adjust position on small screens
          if (window.innerWidth < 768) {
            prevBtn.style.left = '10px';
            nextBtn.style.right = '10px';
            prevBtn.style.fontSize = '24px';
            nextBtn.style.fontSize = '24px';
          } else {
            prevBtn.style.left = '-60px';
            nextBtn.style.right = '-60px';
            prevBtn.style.fontSize = '36px';
            nextBtn.style.fontSize = '36px';
          }
        }
      }
      
      mainWrap.addEventListener('click', () => {
        showLightbox(currentIndex);
      });
      
      function closeLightboxFunc() {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = '';
      }
      
      closeLightbox.addEventListener('click', closeLightboxFunc);
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightboxFunc();
      });
      
      function navigateLightbox(dir) {
        currentIndex = (currentIndex + dir + galleryImages.length) % galleryImages.length;
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
          lightboxImg.src = galleryImages[currentIndex];
          lightboxCaption.textContent = "Image " + (currentIndex + 1) + " of " + galleryImages.length;
          lightboxImg.style.opacity = '1';
        }, 150);
      }
      
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
      });
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (lightboxModal.style.display === 'flex') {
          if (e.key === 'ArrowLeft') navigateLightbox(-1);
          if (e.key === 'ArrowRight') navigateLightbox(1);
          if (e.key === 'Escape') closeLightboxFunc();
        }
      });
    });
  </script>
</body>
</html>`;

  fs.writeFileSync(filePath, htmlContent, 'utf-8');
});

console.log('Successfully generated all 13 HTML project pages.');


