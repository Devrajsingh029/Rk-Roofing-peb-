import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Build Something Enduring?",
  subtitle = "Request a complimentary site inspection and detailed engineering consultation from our Bangalore-based PEB and warehouse construction team. We respond within 24 hours.",
}: Props) {
  return (
    <section className="relative overflow-hidden border-y border-border" aria-label="Call to action — start your PEB or warehouse project">
      {/* Layered background — soft blue → white → soft blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-accent" aria-hidden="true" />
      <div className="absolute inset-0 texture-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.55 0.22 264 / 0.12), transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-gold mb-5" aria-hidden="true">
            — Let's Build —
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.05]">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient-gold">{title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="btn-glow inline-flex items-center justify-center gap-2 px-9 py-4 bg-gradient-to-r from-cta to-gold text-cta-foreground font-heading font-bold text-xs uppercase tracking-[0.2em] rounded-sm"
              aria-label="Get a free PEB or warehouse construction quote"
            >
              Get a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href="tel:+919880691046"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-foreground/20 text-foreground font-heading font-semibold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-foreground/5 hover:border-cta/50 transition-all"
              aria-label="Call RK Roofing PEB Pvt Ltd for a consultation"
            >
              <Phone className="w-4 h-4" aria-hidden="true" /> Request Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
