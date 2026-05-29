import { motion } from "framer-motion";

const clients = [
  { name: "ALFAA", sub: "PEB", accent: "from-cta to-gold" },
  { name: "CICON", sub: "Engineers", accent: "from-cta to-amber-500" },
  { name: "Halleys Blue", sub: "PEB", accent: "from-blue-400 to-blue-600", italic: true },
  { name: "FABEX", sub: "Steel Structures", accent: "from-blue-500 to-cta" },
  { name: "M&B", sub: "Group", accent: "from-foreground to-foreground/70" },
  { name: "PHENIX", sub: "Construction Tech", accent: "from-blue-500 to-blue-700" },
  { name: "ZAMIL STEEL", sub: "A step beyond", accent: "from-blue-500 to-blue-600" },
  { name: "KONART", sub: "Steel Buildings", accent: "from-blue-400 to-blue-600" },
];

function LogoCard({ name, sub, accent, italic }: { name: string; sub: string; accent: string; italic?: boolean }) {
  return (
    <div className="shrink-0 mx-4 md:mx-8 group">
      <div className="w-[200px] md:w-[240px] h-[110px] md:h-[130px] glass-strong rounded-sm border border-border/40 flex flex-col items-center justify-center px-6 transition-all duration-500 ease-luxury hover:border-cta/40 hover:-translate-y-1">
        <span
          className={`font-heading font-black text-xl md:text-2xl tracking-tight bg-gradient-to-r ${accent} bg-clip-text text-transparent ${italic ? "italic" : ""} text-center leading-tight`}
        >
          {name}
        </span>
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/55 mt-2 font-heading font-semibold">
          {sub}
        </span>
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  // Duplicate the list for seamless infinite scroll
  const loop = [...clients, ...clients];

  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden border-y border-border" aria-label="Our esteemed clients and industry partners">
      <div className="absolute inset-0 texture-grid opacity-25 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="flex items-center gap-3 justify-center mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cta" />
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-cta">
              Our Esteemed Clients
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cta" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground tracking-tight">
            Trusted by industry leaders across India
          </h2>
        </motion.div>
      </div>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-secondary to-transparent" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-secondary to-transparent" aria-hidden="true" />

      {/* Marquee */}
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee-slow" role="list" aria-label="Client logos">
          {loop.map((c, i) => (
            <div key={i} role="listitem">
              <LogoCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
