import { motion } from "framer-motion";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

/**
 * Animated SVG of a Pre-Engineered Building frame.
 * Lightweight, GPU-friendly, fully visible against light backgrounds.
 */
export default function PEBStructure() {
  // Stroke style for steel members
  const steel = {
    stroke: "oklch(0.30 0.18 265)", // deep navy
    strokeWidth: 6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };
  const accent = {
    stroke: "oklch(0.55 0.22 264)", // vivid blue
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  // Animation helper
  const draw = (delay: number, duration = 0.9) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration, delay, ease: easeLuxury },
  });

  return (
    <motion.svg
      viewBox="0 0 600 380"
      className="w-full h-auto"
      initial="hidden"
      animate="visible"
      aria-label="Animated Pre-Engineered Building frame"
    >
      {/* Ground line */}
      <motion.line
        x1="20" y1="340" x2="580" y2="340"
        stroke="oklch(0.42 0.03 257)" strokeWidth="2" strokeDasharray="6 6"
        {...draw(0.1, 1.0)}
      />

      {/* === Bay 1 === */}
      {/* Left column */}
      <motion.line x1="80" y1="340" x2="80" y2="160" {...steel} {...draw(0.3)} />
      {/* Right column */}
      <motion.line x1="300" y1="340" x2="300" y2="160" {...steel} {...draw(0.45)} />
      {/* Rafters (apex) */}
      <motion.line x1="80" y1="160" x2="190" y2="90" {...steel} {...draw(0.7)} />
      <motion.line x1="300" y1="160" x2="190" y2="90" {...steel} {...draw(0.85)} />

      {/* === Bay 2 === */}
      <motion.line x1="520" y1="340" x2="520" y2="160" {...steel} {...draw(0.55)} />
      <motion.line x1="300" y1="160" x2="410" y2="90" {...steel} {...draw(1.0)} />
      <motion.line x1="520" y1="160" x2="410" y2="90" {...steel} {...draw(1.15)} />

      {/* Ridge purlin connecting apexes */}
      <motion.line x1="190" y1="90" x2="410" y2="90" {...accent} {...draw(1.35, 0.7)} />

      {/* Eave purlins */}
      <motion.line x1="80" y1="160" x2="520" y2="160" {...accent} {...draw(1.45, 0.7)} />

      {/* Cross bracing - bay 1 */}
      <motion.line x1="80" y1="340" x2="300" y2="160" {...accent} strokeDasharray="4 6" {...draw(1.6, 0.6)} />
      <motion.line x1="300" y1="340" x2="80" y2="160" {...accent} strokeDasharray="4 6" {...draw(1.7, 0.6)} />

      {/* Cross bracing - bay 2 */}
      <motion.line x1="300" y1="340" x2="520" y2="160" {...accent} strokeDasharray="4 6" {...draw(1.8, 0.6)} />
      <motion.line x1="520" y1="340" x2="300" y2="160" {...accent} strokeDasharray="4 6" {...draw(1.9, 0.6)} />

      {/* Roof purlins (horizontal lines along rafters) */}
      {[0.25, 0.5, 0.75].map((t, i) => {
        // interpolate along rafter slope
        const y = 160 - (160 - 90) * t;
        const dx = 110 * t;
        return (
          <motion.line
            key={`purlin-${i}`}
            x1={80 + dx} y1={y} x2={520 - dx} y2={y}
            stroke="oklch(0.55 0.22 264 / 0.55)" strokeWidth="2"
            {...draw(2.0 + i * 0.1, 0.5)}
          />
        );
      })}

      {/* Base plates */}
      {[80, 300, 520].map((x, i) => (
        <motion.rect
          key={`base-${i}`}
          x={x - 14} y={338} width="28" height="6" rx="1"
          fill="oklch(0.30 0.18 265)"
          initial={{ opacity: 0, y: 350 }}
          animate={{ opacity: 1, y: 338 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.05, ease: easeLuxury }}
        />
      ))}

      {/* Subtle apex highlight dot */}
      <motion.circle
        cx="300" cy="90" r="5"
        fill="oklch(0.55 0.22 264)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.4, 1] }}
        transition={{ duration: 0.8, delay: 1.4, ease: easeLuxury }}
      />
    </motion.svg>
  );
}
