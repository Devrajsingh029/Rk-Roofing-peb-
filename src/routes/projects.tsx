import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Weight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { SITE_URL, OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/projects#webpage`,
  "url": `${SITE_URL}/projects`,
  "name": "PEB & Warehouse Construction Projects — RK Roofing PEB Pvt Ltd",
  "description":
    "Portfolio of PEB, warehouse, and industrial steel construction projects delivered across India by RK Roofing PEB Pvt Ltd.",
  "breadcrumb": breadcrumbSchema([{ name: "Projects", path: "/projects" }]),
  "publisher": { "@id": `${SITE_URL}/#organization` },
};

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      {
        title:
          "PEB & Warehouse Construction Projects Portfolio | RK Roofing PEB Bangalore",
      },
      {
        name: "description",
        content:
          "Explore PEB, warehouse, and industrial steel construction projects by RK Roofing PEB Pvt Ltd across India — for Ruchi Soya, Prestige Group, Hatsun Agro, SRK Health Care, and JSW.",
      },
      {
        name: "keywords",
        content:
          "PEB projects India, warehouse construction projects Bangalore, industrial building portfolio Karnataka, pre engineered building contractors projects, steel structure projects South India",
      },
      { property: "og:url", content: `${SITE_URL}/projects` },
      {
        property: "og:title",
        content: "PEB & Warehouse Construction Projects | RK Roofing PEB Bangalore",
      },
      {
        property: "og:description",
        content:
          "PEB, warehouse & industrial projects for top companies across India. See our construction portfolio — RK Roofing PEB Pvt Ltd.",
      },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projects` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(projectsSchema), id: "schema-projects" },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Projects", path: "/projects" }])),
        id: "schema-breadcrumb-projects",
      },
    ],
  }),
});

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const allProjects = [
  { title: "Ruchi Soya Industries Ltd", location: "Bihar", size: "2,000 MT", tag: "Manufacturing", status: "Completed" },
  { title: "Prestige Group", location: "Malur, Karnataka", size: "1,500 MT", tag: "Commercial", status: "Completed" },
  { title: "Hatsun Agro", location: "Krishnagiri, Tamil Nadu", size: "1,000 MT", tag: "Food Processing", status: "Completed" },
  { title: "SRK Health Care", location: "Mysore, Karnataka", size: "800 MT", tag: "Healthcare", status: "Completed" },
  { title: "JSW", location: "Nandyal, Andhra Pradesh", size: "600 MT", tag: "Steel", status: "Completed" },
];

const scopeOfWork = [
  "Pre-engineered Buildings",
  "Structural Erection",
  "Standing Seam Roof Sheet",
  "Clip Lock Roof Sheet",
  "Kalzip Roof Sheet",
  "ACP Panels",
  "Insulated PUF Wall Panels",
  "Sandwich PUF Roof Panels",
  "Deck Sheet Roofing",
  "Double Skin Roof Sheeting",
];

function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-background border-b border-border/40 overflow-hidden" aria-label="PEB and warehouse construction project portfolio">
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
              Our Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeLuxury }}
            className="font-heading font-black text-4xl md:text-6xl text-foreground mb-5 leading-[1.05]"
          >
            150+ Projects <span className="text-gradient-gold">Across India</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-foreground/60 max-w-xl mx-auto leading-relaxed"
          >
            PEB, warehouse, and industrial steel construction projects delivered across India — manufacturing, logistics, healthcare, e-commerce, and energy sectors.
          </motion.p>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-16 md:py-20 border-b border-border" aria-label="Scope of work and construction capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[10px] uppercase tracking-[0.4em] text-cta text-center mb-8">Scope of Work</h2>
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Types of industrial construction work by RK Roofing PEB">
            {scopeOfWork.map((item) => (
              <li key={item} className="flex items-center gap-2 px-5 py-2.5 bg-secondary border border-border rounded-sm text-sm font-medium text-foreground/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-cta shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-28" aria-label="All PEB and warehouse construction projects">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Project Portfolio"
            title="Trusted by India's leading brands."
            description="We are proud applicators of high-quality and sophisticated building systems and have successfully executed major projects across India, including Ruchi Soya Industries Ltd, Prestige Group, Hatsun Agro, SRK Health Care, and JSW."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: easeLuxury }}
                className="group rounded-sm overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.21_0.04_265/0.6)] to-transparent" aria-hidden="true" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 bg-white text-cta text-[9px] font-heading font-bold uppercase tracking-[0.2em] rounded-sm shadow">
                      {project.tag}
                    </span>
                    <span className={`px-2.5 py-1 text-[9px] font-heading font-bold uppercase tracking-[0.2em] rounded-sm shadow ${
                      project.status === "Ongoing"
                        ? "bg-gold text-foreground"
                        : "bg-cta/90 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 tracking-tight">{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-foreground/55 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Weight className="w-3.5 h-3.5" aria-hidden="true" />
                      {project.size}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start Your Project Today"
        subtitle="Join 100+ industry leaders who trust RK Roofing PEB for industrial construction across Bangalore and India."
      />
    </>
  );
}

