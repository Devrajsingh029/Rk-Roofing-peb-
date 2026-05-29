import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ label, title, description, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      {label && (
        <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-cta" />
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-cta">
            {label}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-cta" />
        </div>
      )}
      <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-base md:text-[17px] leading-relaxed text-foreground/60 ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
