import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, HardHat, Wrench, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-construction.jpg";
import warehouseImg from "@/assets/warehouse-complete.jpg";
import steelRoofImg from "@/assets/steel-roofing.jpg";
import industrialImg from "@/assets/industrial-shed.jpg";
import interiorImg from "@/assets/warehouse-interior.jpg";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { SITE_URL, OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "PEB Roofing & Industrial Construction Services — RK Roofing PEB Pvt Ltd Bangalore",
  "url": `${SITE_URL}/services`,
  "description":
    "Complete PEB installation, industrial roofing, warehouse construction, structural erection, and cladding services by RK Roofing PEB Pvt Ltd in Bangalore, Karnataka.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "PEB Structure Installation Bangalore",
        "description":
          "Expert pre-engineered building structure installation in Bangalore and across South India. Precision assembly, quality workmanship, and on-time delivery.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Bangalore, Karnataka, India",
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Industrial Steel Roofing Solutions",
        "description":
          "Premium industrial roofing including Standing Seam, Clip Lock, Kalzip, Deck Sheet roofing systems for factories and warehouses.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Bangalore, Karnataka, India",
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Warehouse Construction Bangalore",
        "description":
          "End-to-end industrial warehouse construction in Bangalore. Large-span, clear-height facilities for storage, logistics, and manufacturing.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "Bangalore, Karnataka, India",
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Structural Steel Erection",
        "description":
          "Professional structural erection of rigid frames, beams, purlins, girts, trusses, and columns for industrial and commercial buildings.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "India",
      },
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Industrial Cladding & Panel Systems",
        "description":
          "ACP Panels, Insulated PUF Wall Panels, Sandwich PUF Roof Panels, and metal building systems for energy-efficient industrial structures.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": "India",
      },
    },
  ],
};

const services = [
  {
    icon: Building2,
    title: "PEB Structure Installation",
    slug: "peb-structure-installation",
    desc: "Expert execution and implementation of pre-engineered building structures across Bangalore and South India. We take your designs and bring them to life with precision assembly, quality workmanship, and on-time delivery.",
    benefits: ["Precision structural assembly", "Quality-controlled execution", "Rapid on-site installation", "Multi-sector expertise"],
    img: heroImg,
    imgAlt: "PEB structure installation by RK Roofing PEB contractors Bangalore Karnataka",
  },
  {
    icon: HardHat,
    title: "Steel Roofing Solutions",
    slug: "industrial-steel-roofing",
    desc: "Premium industrial roofing solutions including Standing Seam, Clip Lock, Kalzip, and Deck Sheet roofing systems. We ensure superior weather protection, thermal insulation, and longevity for factories and warehouses.",
    benefits: ["Standing Seam Roof Sheet", "Clip Lock & Kalzip Systems", "Deck Sheet Roofing", "Double Skin Roof Sheeting"],
    img: steelRoofImg,
    imgAlt: "Industrial steel roofing installation — Standing Seam and Clip Lock systems by RK Roofing PEB Bangalore",
  },
  {
    icon: Wrench,
    title: "Warehouse Construction",
    slug: "warehouse-construction-bangalore",
    desc: "End-to-end warehouse construction in Bangalore from foundation to finishing. We specialise in large-span clear-height warehouses optimised for storage efficiency and logistics operations across Karnataka.",
    benefits: ["Large span construction", "Height optimization for racking", "Built-in loading docks", "Safety compliance"],
    img: warehouseImg,
    imgAlt: "Large-span industrial warehouse construction in Bangalore by RK Roofing PEB Pvt Ltd",
  },
  {
    icon: Building2,
    title: "Structural Erection",
    slug: "structural-steel-erection",
    desc: "Professional structural erection services for industrial and commercial buildings. Our experienced teams handle rigid frames, beams, purlins, girts, trusses, and columns with precision across India.",
    benefits: ["Rigid frame assembly", "Heavy structural components", "Multi-bay configurations", "Safety-first approach"],
    img: industrialImg,
    imgAlt: "Structural steel erection for industrial shed by RK Roofing PEB contractors India",
  },
  {
    icon: Shield,
    title: "Cladding & Panel Systems",
    slug: "cladding-panel-systems",
    desc: "Complete industrial cladding solutions including ACP Panels, Insulated PUF Wall Panels, Sandwich PUF Roof Panels, and metal building systems for weather-tight, energy-efficient structures.",
    benefits: ["ACP Panel installation", "Insulated PUF Wall Panels", "Sandwich PUF Roof Panels", "Metal Building Systems"],
    img: interiorImg,
    imgAlt: "ACP panel and PUF insulated cladding installation for industrial building by RK Roofing PEB Bangalore",
  },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      {
        title:
          "PEB Roofing & Industrial Construction Services Bangalore | RK Roofing PEB",
      },
      {
        name: "description",
        content:
          "RK Roofing PEB offers PEB structure installation, industrial steel roofing, warehouse construction, structural erection & cladding services in Bangalore, Karnataka. Get a free quote today.",
      },
      {
        name: "keywords",
        content:
          "PEB installation Bangalore, industrial roofing services Karnataka, warehouse construction Bangalore, structural steel erection India, cladding panel systems Bangalore, pre engineered building services",
      },
      { property: "og:url", content: `${SITE_URL}/services` },
      {
        property: "og:title",
        content: "PEB & Industrial Construction Services | RK Roofing PEB Bangalore",
      },
      {
        property: "og:description",
        content:
          "PEB installation, steel roofing, warehouse construction, structural erection & cladding services in Bangalore. Expert industrial construction by RK Roofing PEB Pvt Ltd.",
      },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(servicesSchema), id: "schema-services" },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Services", path: "/services" }])),
        id: "schema-breadcrumb-services",
      },
    ],
  }),
});

function ServicesPage() {
  const easeLuxury = [0.22, 1, 0.36, 1] as const;
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-background border-b border-border/40 overflow-hidden" aria-label="PEB and industrial construction services overview">
        <div className="absolute inset-0 texture-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.72 0.18 42 / 0.15), transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeLuxury }}
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cta" aria-hidden="true" />
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-foreground/80">
              Capabilities
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeLuxury }}
            className="font-heading font-black text-4xl md:text-6xl text-foreground mb-5 leading-[1.05]"
          >
            End-to-End <span className="text-gradient-gold">PEB Execution</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-foreground/60 max-w-xl mx-auto leading-relaxed"
          >
            From engineered PEB structures to premium industrial roofing — disciplined execution across the full build lifecycle in Bangalore, Karnataka, and across South India.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-28" aria-label="Detailed PEB and construction services">
        <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              id={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: easeLuxury }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-cta to-gold flex items-center justify-center mb-6 shadow-lg shadow-cta/20" aria-hidden="true">
                  <service.icon className="w-6 h-6 text-cta-foreground" />
                </div>
                <span className="block text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-cta mb-3">0{i + 1} — Service</span>
                <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-5 tracking-tight leading-tight">{service.title}</h2>
                <p className="text-foreground/65 leading-relaxed mb-7">{service.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" aria-label={`${service.title} features`}>
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 text-cta font-heading font-bold text-xs uppercase tracking-[0.25em] link-underline w-fit"
                  aria-label={`Request a free quote for ${service.title}`}
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: easeLuxury }}
                  className="relative rounded-sm overflow-hidden border border-border/50"
                >
                  <img
                    src={service.img}
                    alt={service.imgAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" aria-hidden="true" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTABanner title="Need a Custom Solution?" subtitle="Every project is unique. Share your design and our team will execute it with precision across Bangalore and South India." />
    </>
  );
}
