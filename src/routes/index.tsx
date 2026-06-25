import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Shield, Zap, Award, Building2, Wrench, HardHat, Layers,
  ChevronRight, Mouse, Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import warehouseImg from "@/assets/warehouse-complete.jpg";
import steelRoofImg from "@/assets/steel-roofing.jpg";
import industrialImg from "@/assets/industrial-shed.jpg";
import warehouseInteriorImg from "@/assets/warehouse-interior.jpg";
import pebInstallImg from "@/assets/hero-construction.jpg";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import ClientsMarquee from "@/components/ClientsMarquee";
import { SITE_URL, OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Pre-Engineered Building (PEB)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Pre-Engineered Building (PEB) is a steel structure manufactured in a factory and assembled on-site. PEBs are faster to construct, cost-effective, and ideal for industrial warehouses, factories, automobile plants, and commercial buildings. RK Roofing PEB specialises in PEB structure installation across Bangalore and South India.",
      },
    },
    {
      "@type": "Question",
      "name": "Is RK Roofing PEB a licensed PEB contractor in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. RK Roofing PEB Pvt Ltd is a professional PEB contractor based in Bangalore, Karnataka. We are ISO-certified and have delivered 150+ pre-engineered building and warehouse construction projects across India over 15+ years.",
      },
    },
    {
      "@type": "Question",
      "name": "What types of industrial roofing do you offer in Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RK Roofing PEB offers Standing Seam roofing, Clip Lock roofing, Kalzip roofing, Deck Sheet roofing, Double Skin Roof Sheeting, and Sandwich PUF Roof Panels for industrial and commercial projects in Bangalore and across Karnataka.",
      },
    },
    {
      "@type": "Question",
      "name": "How quickly can RK Roofing PEB construct a warehouse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pre-engineered building construction is 40% faster than conventional construction. Depending on the size and complexity, a standard industrial warehouse can be completed in 3–6 months from contract signing.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide PEB construction services outside Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. RK Roofing PEB Pvt Ltd operates across South India and beyond, with completed projects in Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Bihar, Maharashtra, Gujarat, and Chhattisgarh.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title:
          "RK Roofing PEB Pvt Ltd | PEB Contractors Bangalore | Industrial Roofing & Warehouse Construction",
      },
      {
        name: "description",
        content:
          "RK Roofing PEB Pvt Ltd — #1 PEB contractors in Bangalore for industrial roofing, warehouse construction & pre-engineered steel building solutions. 150+ projects, ISO certified. Get a free quote today.",
      },
      {
        name: "keywords",
        content:
          "PEB contractors Bangalore, pre engineered building contractors Bangalore, industrial roofing company Bangalore, warehouse construction Bangalore, steel building solutions Karnataka, commercial roofing Karnataka, industrial shed construction Bangalore",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      {
        property: "og:title",
        content: "RK Roofing PEB Pvt Ltd | #1 PEB Contractors Bangalore",
      },
      {
        property: "og:description",
        content:
          "India's trusted PEB contractors in Bangalore. Premium industrial roofing, warehouse construction & steel building solutions. 150+ projects delivered, ISO certified.",
      },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema), id: "schema-faq-home" },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([])), id: "schema-breadcrumb-home" },
    ],
  }),
});

const easeLuxury = [0.22, 1, 0.36, 1] as const;

// Letter-by-letter reveal
function SplitText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: delay + (wi * 0.06) + (ci * 0.025),
                ease: easeLuxury,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

// Count-up
function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const services = [
  {
    icon: Building2,
    title: "PEB Structure Installation",
    desc: "Expert pre-engineered building assembly in Bangalore with millimeter-accurate erection, rigorous quality control, and multi-sector experience across warehouses, factories, and automobile plants.",
    img: heroImg,
    imgAlt: "PEB structure installation by RK Roofing PEB contractors Bangalore",
  },
  {
    icon: HardHat,
    title: "Premium Steel Roofing",
    desc: "Standing Seam, Clip Lock, Kalzip, and Deck Sheet roofing systems engineered for decades of performance — trusted industrial roofing company in Karnataka.",
    img: steelRoofImg,
    imgAlt: "Premium industrial steel roofing installation by RK Roofing PEB Bangalore",
  },
  {
    icon: Wrench,
    title: "Warehouse Construction",
    desc: "Large-span industrial warehouse construction in Bangalore with optimized clear heights and integrated material handling readiness for logistics and manufacturing.",
    img: warehouseImg,
    imgAlt: "Industrial warehouse construction by RK Roofing PEB Pvt Ltd Bangalore",
  },
  {
    icon: Layers,
    title: "Structural Erection",
    desc: "Expert erection of rigid frames, beams, purlins, girts, trusses, and columns — professional structural steel erection contractors across South India.",
    img: industrialImg,
    imgAlt: "Structural steel erection for industrial building by RK Roofing PEB Karnataka",
  },
  {
    icon: Shield,
    title: "Cladding & Insulation",
    desc: "ACP Panels, PUF Panels, and Sandwich Panel systems for thermal efficiency, weather protection, and architectural finesse in commercial and industrial buildings.",
    img: steelRoofImg,
    imgAlt: "Industrial cladding and PUF panel insulation by RK Roofing PEB Bangalore",
  },
  {
    icon: Sparkles,
    title: "Turnkey Execution",
    desc: "End-to-end PEB project execution in Bangalore — you bring the design, we deliver a fully operational industrial structure on time and within budget.",
    img: warehouseInteriorImg,
    imgAlt: "Turnkey industrial building execution by RK Roofing PEB contractors Bangalore",
  },
];

const projects = [
  { title: "Ruchi Soya Industries Ltd", location: "Bihar", size: "2,000 MT", tag: "Manufacturing" },
  { title: "Prestige Group", location: "Malur, Karnataka", size: "1,500 MT", tag: "Commercial" },
  { title: "Hatsun Agro", location: "Krishnagiri, Tamil Nadu", size: "1,000 MT", tag: "Food Processing" },
  { title: "SRK Health Care", location: "Mysore, Karnataka", size: "800 MT", tag: "Healthcare" },
  { title: "JSW", location: "Nandyal, Andhra Pradesh", size: "600 MT", tag: "Steel" },
];

const process = [
  { step: "01", title: "Consultation", desc: "We review your design, site, and operational requirements to scope the PEB project precisely." },
  { step: "02", title: "Engineering Plan", desc: "Detailed execution plan with material specifications, timeline, and on-site logistics for your warehouse or industrial building." },
  { step: "03", title: "Precision Erection", desc: "Skilled crews assemble pre-engineered components with strict quality and safety protocols at your site." },
  { step: "04", title: "Handover", desc: "Final inspection, quality certification, and a structure built to outlast expectations." },
];

function HomePage() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary" aria-label="Hero — RK Roofing PEB Pvt Ltd">
        {/* Background installation photo — full bleed */}
        <img
          src={pebInstallImg}
          alt="RK Roofing PEB pre-engineered building structure installation in progress on industrial site in Bangalore"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="sync"
          width={1920}
          height={1080}
        />
        {/* Brand-blue tint overlay across the entire image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, oklch(0.32 0.18 265 / 0.78), oklch(0.30 0.18 265 / 0.72))" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeLuxury }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 bg-cta/95 shadow-lg"
            >
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.35em] text-cta-foreground">
                #1 PEB Construction Company Bangalore
              </span>
            </motion.div>

            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.05] mb-8 text-white">
              <span className="block overflow-hidden">
                <SplitText text="Reliable PEB Roofing" />
              </span>
              <span className="block overflow-hidden">
                <SplitText text="& Warehouse" delay={0.18} />
              </span>
              <span className="block overflow-hidden mt-2">
                <SplitText text="Construction " delay={0.42} />
                <span className="text-cta">
                  <SplitText text="Experts" delay={0.62} />
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: easeLuxury }}
              className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Bangalore's trusted PEB contractors — we design, fabricate, and construct pre-engineered buildings with precision engineering, delivering projects 40% faster at competitive costs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: easeLuxury }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/quote"
                className="btn-glow group inline-flex items-center justify-center gap-3 px-9 py-4 bg-cta text-cta-foreground font-heading font-bold text-xs uppercase tracking-[0.25em] rounded-md hover:bg-cta/90 transition-colors"
                aria-label="Get a free quote for your PEB or warehouse construction project"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 ease-luxury" />
              </Link>
              <a
                href="tel:+919880691046"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-white/40 bg-white/5 text-white font-heading font-semibold text-xs uppercase tracking-[0.25em] rounded-md hover:bg-white/10 transition-all ease-luxury"
                aria-label="Call RK Roofing PEB Pvt Ltd"
              >
                Call: +91 98806 91046
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2, ease: easeLuxury }}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
              aria-label="RK Roofing PEB key achievements"
            >
              {[
                { label: "150+ Projects Delivered" },
                { label: "15+ Years Experience" },
                { label: "ISO Certified" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-white/90">
                  <span className="w-4 h-4 rounded-full bg-cta/90 inline-flex items-center justify-center text-[10px] text-cta-foreground font-bold" aria-hidden="true">✓</span>
                  <span className="text-xs md:text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <Mouse className="w-5 h-5 text-white/60" />
          <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent animate-scroll-bounce" />
        </motion.div>
      </section>

      {/* ====== ABOUT ====== */}
      <section className="py-28 md:py-36 relative overflow-hidden" aria-label="About RK Roofing PEB Pvt Ltd">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image with mask reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: easeLuxury }}
                className="relative rounded-sm overflow-hidden"
              >
                <img
                  src={warehouseImg}
                  alt="Completed industrial warehouse construction project by RK Roofing PEB Pvt Ltd"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover"
                />
              </motion.div>

              {/* Floating glass card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: easeLuxury }}
                className="absolute -bottom-8 -right-4 md:-right-8 glass-strong p-6 rounded-sm shadow-2xl max-w-[240px]"
              >
                <div className="text-gradient-gold font-heading font-black text-4xl mb-1">15+</div>
                <div className="text-[10px] font-heading uppercase tracking-[0.25em] text-foreground/60">Years of Engineered Excellence</div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <SectionHeading
                label="Who We Are"
                title="Precision execution for industrial-scale ambition."
                center={false}
                description="RK Roofing PEB Pvt Ltd is Bangalore's specialist execution partner for pre-engineered buildings, premium industrial roofing, and steel structures. With 15+ years of disciplined site delivery, we transform engineered designs into structures that endure."
              />
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { num: 150, suffix: "+", label: "Projects" },
                  { num: 15, suffix: "+", label: "Years" },
                  { num: 100, suffix: "+", label: "Clients" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: easeLuxury }}
                    className="p-6 glass rounded-sm text-center"
                  >
                    <span className="block font-heading font-black text-3xl md:text-4xl text-gradient-gold">
                      <CountUp end={stat.num} suffix={stat.suffix} />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mt-1 block">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-cta font-heading font-semibold text-xs uppercase tracking-[0.25em] link-underline w-fit"
                aria-label="Learn more about RK Roofing PEB Pvt Ltd"
              >
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="py-28 md:py-36 bg-secondary relative overflow-hidden border-y border-border" aria-label="PEB and industrial construction services">
        <div className="absolute inset-0 texture-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 20%, oklch(0.68 0.18 45 / 0.12), transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading
            label="Capabilities"
            title="End-to-end PEB & steel solutions in Bangalore."
            description="Comprehensive execution services across the full lifecycle of pre-engineered industrial construction in Bangalore and across South India."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: easeLuxury }}
                className="tilt-card group relative bg-card border border-border/50 rounded-sm overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={service.imgAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-110"
                  />
                </div>
                <div className="p-7 relative">
                  <div className="absolute -top-7 left-7 w-14 h-14 rounded-sm bg-gradient-to-br from-cta to-gold flex items-center justify-center shadow-xl shadow-cta/20 transition-transform duration-500 ease-luxury group-hover:scale-110 group-hover:rotate-6" aria-hidden="true">
                    <service.icon className="w-6 h-6 text-cta-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-6 mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-foreground/55 leading-relaxed mb-5">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-cta text-[11px] font-heading font-bold uppercase tracking-[0.2em] hover:gap-2 transition-all" aria-label={`Learn more about ${service.title}`}>
                    Explore <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="py-28 md:py-36 relative" aria-label="Why choose RK Roofing PEB for industrial construction">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Why Choose Us"
            title="The advantage of disciplined engineering."
            description="Four pillars that define every PEB and warehouse construction project we execute in Bangalore and across India."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Faster Delivery", desc: "Pre-engineered components enable rapid on-site assembly — completing industrial buildings 40% faster than conventional construction." },
              { icon: Shield, title: "25-Year Durability", desc: "Premium steel and corrosion-resistant coatings engineered to outlast decades of use in demanding industrial environments." },
              { icon: Award, title: "ISO Quality Certified", desc: "Rigorous QA at every stage — from material inspection to final structural certification — guaranteed for every project." },
              { icon: Sparkles, title: "Cost Efficient", desc: "Optimized PEB execution and material discipline deliver superior value over conventional builds, reducing project costs significantly." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: easeLuxury }}
                className="group p-8 rounded-sm glass hover:border-cta/30 transition-all duration-500 ease-luxury text-center hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-cta/20 to-gold/20 border border-cta/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-luxury" aria-hidden="true">
                  <item.icon className="w-6 h-6 text-cta" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROJECTS ====== */}
      <section className="py-28 md:py-36 bg-secondary relative overflow-hidden border-y border-border" aria-label="Featured PEB and warehouse construction projects">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading
            label="Portfolio"
            title="Trusted by industry leaders across India."
            description="A selection of PEB and warehouse construction projects spanning manufacturing, logistics, healthcare, and steel sectors."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: easeLuxury }}
                className="group rounded-sm overflow-hidden relative aspect-[4/5] bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-full bg-muted/30" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.21_0.04_265/0.92)] via-[oklch(0.21_0.04_265/0.35)] to-transparent" aria-hidden="true" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 bg-white text-cta text-[9px] font-heading font-bold uppercase tracking-[0.25em] rounded-sm shadow">
                    {project.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
                  <h3 className="font-heading font-bold text-white text-lg mb-1 tracking-tight">{project.title}</h3>
                  <p className="text-white/80 text-xs uppercase tracking-widest mb-3">{project.location} • {project.size}</p>
                  <div className="h-px w-12 bg-cta opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-9 py-4 border border-border bg-white text-foreground font-heading font-semibold text-xs uppercase tracking-[0.25em] rounded-sm hover:border-cta hover:text-cta transition-all ease-luxury"
              aria-label="View all PEB and warehouse construction projects by RK Roofing PEB"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="py-28 md:py-36 relative overflow-hidden" aria-label="RK Roofing PEB construction process">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Process"
            title="Engineered execution, end-to-end."
            description="A disciplined four-stage process from consultation to handover — how RK Roofing PEB delivers every industrial building project."
          />
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border/60" aria-hidden="true" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: easeLuxury }}
              style={{ transformOrigin: "top" }}
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cta to-gold"
              aria-hidden="true"
            />
            <div className="space-y-12 md:space-y-20">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: easeLuxury }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                    <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-gradient-gold font-heading font-black text-5xl md:text-6xl leading-none" aria-hidden="true">{p.step}</span>
                      <div className="h-px w-12 bg-cta/40" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-3 tracking-tight">{p.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="relative hidden md:flex justify-center" aria-hidden="true">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cta to-gold shadow-[0_0_20px_oklch(0.68_0.18_45/0.6)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CLIENTS MARQUEE ====== */}
      <ClientsMarquee />

      <CTABanner />
    </>
  );
}
