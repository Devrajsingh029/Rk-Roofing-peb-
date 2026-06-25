import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Users, CheckCircle2 } from "lucide-react";
import warehouseImg from "@/assets/warehouse-complete.jpg";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { SITE_URL, OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  "url": `${SITE_URL}/about`,
  "name": "About RK Roofing PEB Pvt Ltd — PEB Contractors Bangalore",
  "description":
    "RK Roofing PEB Pvt Ltd, established in 2016, is Bangalore's trusted PEB contractor for industrial roofing, warehouse construction & steel building solutions. 150+ projects, 15+ years.",
  "breadcrumb": breadcrumbSchema([{ name: "About Us", path: "/about" }]),
  "mainEntity": {
    "@id": `${SITE_URL}/#organization`,
  },
};

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title:
          "About RK Roofing PEB Pvt Ltd | PEB Contractors Bangalore | 15+ Years Excellence",
      },
      {
        name: "description",
        content:
          "RK Roofing PEB Pvt Ltd — Bangalore's trusted PEB contractor for industrial roofing, warehouse construction & steel structures. Founded 2016, 150+ projects delivered, ISO certified. Learn our story.",
      },
      {
        name: "keywords",
        content:
          "RK Roofing PEB about, PEB contractors Bangalore history, pre engineered building company Bangalore, industrial construction company Karnataka, steel building contractors India",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      {
        property: "og:title",
        content: "About RK Roofing PEB Pvt Ltd — Built Through Engineering",
      },
      {
        property: "og:description",
        content:
          "Bangalore's trusted PEB contractors. 150+ projects, 15+ years. Expert in pre-engineered buildings, industrial roofing, and warehouse construction across South India.",
      },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(aboutSchema),
        id: "schema-about",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "About Us", path: "/about" }])),
        id: "schema-breadcrumb-about",
      },
    ],
  }),
});

const easeLuxury = [0.22, 1, 0.36, 1] as const;

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-background border-b border-border/40 overflow-hidden" aria-label="About RK Roofing PEB Pvt Ltd">
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
              About Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeLuxury }}
            className="font-heading font-black text-4xl md:text-6xl text-foreground mb-5 leading-[1.05]"
          >
            Built Through <span className="text-gradient-gold">Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-foreground/60 max-w-2xl mx-auto leading-relaxed"
          >
            Bangalore's trusted PEB contractors and execution partner for pre-engineered buildings, premium industrial roofing systems, and large-scale warehouse construction since 2010.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 relative" aria-label="Company history and story">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeLuxury }}
          >
            <SectionHeading label="Our Story" title="Welcome to RK Roofing PEB Private Limited." center={false} />
            <div className="space-y-5 text-foreground/65 leading-relaxed">
              <p>
                Established in <span className="text-foreground font-semibold">2010</span> by the late <span className="text-foreground font-semibold">Shri Raj Kishore Singh</span>, RK Roofing Solutions emerged as a visionary outcome of the founder's expertise and dedication. With a team of skilled members and trusted allies, we have been committed to excellence in executing and implementing Pre-Engineered Buildings (PEB), roofing, cladding, and metal building systems. Our extensive experience spans automobile buildings, warehousing, power projects, airports, cement and steel industries, and many more.
              </p>
              <p>
                In <span className="text-foreground font-semibold">2016</span>, RK Roofing PEB Pvt. Limited was founded by <span className="text-foreground font-semibold">Mr. Ravindra Singh</span>, further solidifying our commitment to quality and innovation in the construction industry. Based in Bangalore, Karnataka, we serve clients across South India and beyond.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-heading font-bold text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Proudly Associated With</h3>
              <div className="space-y-3">
                {[
                  "ALFA PEB Limited, Bangalore",
                  "Zamil Construction India Pvt Ltd, Pune",
                ].map((partner) => (
                  <div key={partner} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cta shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: easeLuxury }}
              className="relative rounded-sm overflow-hidden"
            >
              <img
                src={warehouseImg}
                alt="Completed industrial warehouse construction by RK Roofing PEB Pvt Ltd Bangalore"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: easeLuxury }}
              className="absolute -bottom-8 -right-4 md:-right-8 glass-strong p-6 rounded-sm shadow-2xl max-w-[240px]"
            >
              <div className="text-gradient-gold font-heading font-black text-4xl mb-1">Since 2010</div>
              <div className="text-[10px] font-heading uppercase tracking-[0.25em] text-foreground/60">Engineered execution, nationwide</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise / What We Do */}
      <section className="py-20 md:py-28 bg-secondary border-y border-border relative overflow-hidden" aria-label="PEB construction expertise and services">
        <div className="absolute inset-0 texture-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <SectionHeading
            label="What We Do"
            title="Trusted Pre-Engineered Building Solutions in Bangalore & Across India."
          />
          <div className="space-y-8 text-foreground/70 leading-relaxed text-base md:text-lg">
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 tracking-tight">Reliable PEB & Structural Steel Construction Services</h3>
              <p>
                At RK Roofing PEB, we provide dependable Pre-Engineered Building (PEB) solutions and structural steel erection services for a wide range of industrial and commercial projects across India. Our experience includes working on warehouses, automobile facilities, power plants, and infrastructure projects, where precision, safety, and timely delivery are critical. We focus on doing the basics right—strong structures, quality materials, and practical execution on-site.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 tracking-tight">Smart & Cost-Effective PEB Construction in Bangalore</h3>
              <p className="mb-4">
                With the growing demand for faster and more efficient construction, pre-engineered buildings (PEBs) have become a preferred choice across industries in Bangalore and Karnataka. They offer:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4" aria-label="PEB construction benefits">
                {["Faster project completion", "Cost-effective construction", "Flexible design options", "Durable steel structures"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground/80 text-base">
                    <CheckCircle2 className="w-4 h-4 text-cta shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p>
                At RK Roofing PEB, we deliver custom-built PEB structures designed to match your exact project requirements while maintaining structural strength and efficiency.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 tracking-tight">Experienced Team, Practical Approach</h3>
              <p className="mb-4">
                What makes RK Roofing PEB reliable is our hands-on team of engineers and technicians who bring real site experience into every project. Instead of overcomplicating, we:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3" aria-label="RK Roofing PEB approach">
                {[
                  "Understand your actual project needs",
                  "Provide practical and efficient design solutions",
                  "Execute with attention to detail",
                  "Maintain quality and safety standards on-site",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground/80 text-base">
                    <CheckCircle2 className="w-4 h-4 text-cta shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 tracking-tight">Complete Turnkey PEB Solutions in Bangalore</h3>
              <p className="mb-4">
                We offer end-to-end steel building solutions for industrial, commercial, and logistics clients across Bangalore, Karnataka, and South India, including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4" aria-label="Turnkey PEB services">
                {["Design & Engineering", "Fabrication & Supply", "Structural Erection", "Roofing & Cladding"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground/80 text-base">
                    <CheckCircle2 className="w-4 h-4 text-cta shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p>
                From planning to final execution, we ensure smooth coordination and clear communication at every stage.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 tracking-tight">Focused on Quality, Safety & Timely Delivery</h3>
              <p className="mb-4">
                At RK Roofing PEB, we aim to build long-term trust through:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4" aria-label="Quality and safety commitments">
                {["Reliable project execution", "Strong safety practices", "Consistent quality standards", "On-time delivery"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground/80 text-base">
                    <CheckCircle2 className="w-4 h-4 text-cta shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground font-semibold">
                We may not claim to be the biggest—but we focus on being dependable and consistent, which is what truly matters in construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-28 bg-secondary border-y border-border relative overflow-hidden" aria-label="Company mission and vision">
        <div className="absolute inset-0 texture-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 relative">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver world-class pre-engineered building execution that exceeds client expectations in quality, timeline, and value — empowering India's industrial growth across Bangalore, Karnataka, and beyond." },
            { icon: Eye, title: "Our Vision", text: "To become India's most trusted PEB execution company, setting benchmarks in engineered construction, safety, and cost-effective industrial building solutions for warehouses, factories, and commercial structures." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: easeLuxury }}
              className="p-10 bg-card border border-border/50 rounded-sm relative overflow-hidden group hover:border-cta/40 transition-colors"
            >
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cta/10 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-50 transition-opacity" aria-hidden="true" />
              <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-cta to-gold flex items-center justify-center mb-6 shadow-lg shadow-cta/20" aria-hidden="true">
                <item.icon className="w-6 h-6 text-cta-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground tracking-tight">{item.title}</h3>
              <p className="text-foreground/65 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-28" aria-label="RK Roofing PEB key statistics and achievements">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Track Record" title="Numbers built through engineering." description="A national footprint of disciplined PEB and warehouse construction execution and on-time delivery." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { num: "150+", label: "Projects Completed", icon: Award },
              { num: "100+", label: "Happy Clients", icon: Users },
              { num: "15+", label: "Years Experience", icon: Shield },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: easeLuxury }}
                className="p-8 text-center rounded-sm glass border border-border/50"
              >
                <stat.icon className="w-7 h-7 text-cta mx-auto mb-4" aria-hidden="true" />
                <span className="block font-heading font-black text-4xl text-gradient-gold">{stat.num}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 mt-2 block">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
