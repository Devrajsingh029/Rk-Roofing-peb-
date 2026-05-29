import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { SITE_URL, OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  "url": `${SITE_URL}/contact`,
  "name": "Contact RK Roofing PEB Pvt Ltd — PEB Contractors Bangalore",
  "description":
    "Contact RK Roofing PEB Pvt Ltd for PEB structure installation, industrial roofing, and warehouse construction enquiries in Bangalore. Email, call, or fill the contact form.",
  "breadcrumb": breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "RK Roofing PEB Pvt Ltd",
    "telephone": "+91-98806-91046",
    "email": "rkroofingpeb@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN",
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "url": SITE_URL,
  },
};

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      {
        title:
          "Contact RK Roofing PEB Pvt Ltd | PEB Contractors Bangalore | Get a Free Quote",
      },
      {
        name: "description",
        content:
          "Contact RK Roofing PEB Pvt Ltd for PEB structure installation, industrial roofing & warehouse construction in Bangalore. Call +91 98806 91046 or email rkroofingpeb@gmail.com — quote within 24 hours.",
      },
      {
        name: "keywords",
        content:
          "contact RK Roofing PEB, PEB contractors Bangalore contact, industrial roofing inquiry Karnataka, warehouse construction quote Bangalore",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
      {
        property: "og:title",
        content: "Contact RK Roofing PEB — Get a Free PEB & Warehouse Quote",
      },
      {
        property: "og:description",
        content:
          "Reach RK Roofing PEB Pvt Ltd for PEB & warehouse construction in Bangalore. Call +91 98806 91046 or request a detailed project quote within 24 hours.",
      },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(contactSchema), id: "schema-contact" },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Contact", path: "/contact" }])),
        id: "schema-breadcrumb-contact",
      },
    ],
  }),
});

const easeLuxury = [0.22, 1, 0.36, 1] as const;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1100);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-background border-b border-border/40 overflow-hidden" aria-label="Contact RK Roofing PEB Pvt Ltd">
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
              Get in Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeLuxury }}
            className="font-heading font-black text-4xl md:text-6xl text-foreground mb-5 leading-[1.05]"
          >
            Let's <span className="text-gradient-gold">Build Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-foreground/60 max-w-xl mx-auto leading-relaxed"
          >
            Share your PEB or warehouse construction project — our engineering team responds with a detailed proposal within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-28" aria-label="Contact details and enquiry form">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info column */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeLuxury }}
              className="lg:col-span-2 space-y-8"
              aria-label="Contact information"
            >
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3 tracking-tight">Contact Information</h2>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  Reach our engineering team for PEB, industrial roofing, and warehouse construction enquiries in Bangalore and across India.
                </p>
              </div>

              <div className="space-y-5">
                <address className="not-italic space-y-5">
                  <a
                    href="tel:+919880691046"
                    className="flex items-start gap-4 group"
                    aria-label="Call RK Roofing PEB at +91 98806 91046"
                  >
                    <div className="w-11 h-11 rounded-sm bg-cta/10 border border-cta/20 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors" aria-hidden="true">
                      <Phone className="w-4.5 h-4.5 text-cta" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-foreground/50 mb-1">Phone</span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-cta transition-colors">+91 98806 91046</span>
                    </div>
                  </a>

                  <a
                    href="mailto:rkroofingpeb@gmail.com"
                    className="flex items-start gap-4 group"
                    aria-label="Email RK Roofing PEB at rkroofingpeb@gmail.com"
                  >
                    <div className="w-11 h-11 rounded-sm bg-cta/10 border border-cta/20 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors" aria-hidden="true">
                      <Mail className="w-4.5 h-4.5 text-cta" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-foreground/50 mb-1">Email</span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-cta transition-colors">rkroofingpeb@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-sm bg-cta/10 border border-cta/20 flex items-center justify-center shrink-0" aria-hidden="true">
                      <MapPin className="w-4.5 h-4.5 text-cta" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-foreground/50 mb-1">Location</span>
                      <span className="text-sm font-semibold text-foreground">Bangalore, Karnataka, India</span>
                      <span className="block text-xs text-foreground/50 mt-0.5">Serving Pan India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-sm bg-cta/10 border border-cta/20 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Clock className="w-4.5 h-4.5 text-cta" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-foreground/50 mb-1">Working Hours</span>
                      <span className="text-sm font-semibold text-foreground">Mon – Sat: 9:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </address>
              </div>

              <div className="p-6 bg-secondary rounded-sm border border-border">
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">Quick Response Guarantee</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  All PEB and warehouse construction enquiries receive a detailed response within <strong className="text-foreground">24 hours</strong>. For urgent projects, call us directly.
                </p>
              </div>
            </motion.aside>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeLuxury }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="p-16 text-center bg-muted rounded-2xl" role="alert" aria-live="polite">
                  <div className="w-20 h-20 rounded-full bg-cta/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <span className="text-4xl text-cta">✓</span>
                  </div>
                  <p className="font-heading font-bold text-2xl text-foreground mb-3">Message Sent!</p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Our team will review your PEB or warehouse construction requirements and respond within 24 hours. For urgent inquiries, call <a href="tel:+919880691046" className="text-cta font-semibold">+91 98806 91046</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-card rounded-2xl border border-border shadow-lg" aria-label="Contact and project enquiry form">
                  <SectionHeading
                    label="Send a Message"
                    title="Tell us about your project"
                    description="Fill in your details and we'll respond with a free, detailed proposal for your PEB, roofing, or warehouse project."
                    center={false}
                  />
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input id="contact-name" required type="text" name="name" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="Your full name" autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                      <input id="contact-phone" required type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="+91 98806 91046" autoComplete="tel" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                    <input id="contact-email" required type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="your@email.com" autoComplete="email" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-medium text-foreground mb-1.5">Service Required</label>
                      <select id="contact-service" name="service" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition">
                        <option value="">Select a service</option>
                        <option value="peb-installation">PEB Structure Installation</option>
                        <option value="warehouse-construction">Warehouse Construction</option>
                        <option value="structural-erection">Structural Erection</option>
                        <option value="steel-roofing">Industrial Steel Roofing</option>
                        <option value="cladding-panels">Cladding & Panel Systems</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-location" className="block text-sm font-medium text-foreground mb-1.5">Project Location</label>
                      <input id="contact-location" type="text" name="location" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="City, State" autoComplete="address-level2" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">Project Details</label>
                    <textarea id="contact-message" name="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition resize-none" placeholder="Describe your PEB, roofing, or warehouse construction requirements..." />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-cta text-cta-foreground font-heading font-bold text-sm rounded-lg hover:bg-cta/90 transition-colors shadow-lg shadow-cta/20 disabled:opacity-70"
                    aria-label="Submit your project enquiry"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" aria-hidden="true" /> Send Message</>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-3">We respond within 24 hours</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
