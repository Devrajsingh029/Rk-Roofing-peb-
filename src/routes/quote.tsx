import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { SITE_URL, OG_IMAGE, breadcrumbSchema } from "@/lib/seo";

const quoteSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/quote#webpage`,
  "url": `${SITE_URL}/quote`,
  "name": "Get a Free PEB & Warehouse Construction Quote — RK Roofing PEB Bangalore",
  "description":
    "Request a free, no-obligation quote for PEB structure installation, warehouse construction, or industrial roofing in Bangalore. RK Roofing PEB responds within 24 hours.",
  "breadcrumb": breadcrumbSchema([{ name: "Get a Quote", path: "/quote" }]),
  "publisher": { "@id": `${SITE_URL}/#organization` },
};

export const Route = createFileRoute("/quote")({
  component: QuotePage,
  head: () => ({
    meta: [
      {
        title:
          "Get a Free PEB & Warehouse Construction Quote | RK Roofing PEB Bangalore",
      },
      {
        name: "description",
        content:
          "Request a free, no-obligation quote for PEB structure installation, industrial roofing, or warehouse construction in Bangalore. RK Roofing PEB Pvt Ltd responds within 24 hours.",
      },
      {
        name: "keywords",
        content:
          "free PEB quote Bangalore, warehouse construction estimate Karnataka, industrial roofing quote, pre engineered building cost estimate India",
      },
      { property: "og:url", content: `${SITE_URL}/quote` },
      {
        property: "og:title",
        content: "Free PEB & Warehouse Construction Quote | RK Roofing PEB",
      },
      {
        property: "og:description",
        content:
          "Get a free detailed estimate for PEB, warehouse, or industrial roofing projects in Bangalore. Fast response within 24 hours — RK Roofing PEB Pvt Ltd.",
      },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/quote` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(quoteSchema), id: "schema-quote" },
    ],
  }),
});

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative py-24 md:py-32 bg-primary" aria-label="Request a free PEB construction quote">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4"
          >
            Request a Free Quote
          </motion.h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Fill in your PEB, warehouse, or industrial roofing project details and our team will respond with a detailed estimate within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28" aria-label="Free quote request form">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="p-16 text-center bg-muted rounded-2xl" role="alert" aria-live="polite">
              <div className="w-20 h-20 rounded-full bg-cta/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <span className="text-4xl text-cta">✓</span>
              </div>
              <p className="font-heading font-bold text-2xl text-foreground mb-3">Quote Request Received!</p>
              <p className="text-muted-foreground max-w-md mx-auto">
                Our team will review your PEB or warehouse construction requirements and provide a detailed quotation within 24 hours. For urgent inquiries, call us at{" "}
                <a href="tel:+919880691046" className="text-cta font-semibold">+91 98806 91046</a>.
              </p>
            </div>
          ) : (
            <>
              <SectionHeading
                label="Request a Quote"
                title="Tell Us About Your Project"
                description="Share your PEB, industrial roofing, or warehouse construction details and our engineering team will respond with a detailed proposal within 24 hours."
              />
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="p-8 md:p-10 bg-card rounded-2xl border border-border shadow-lg"
                aria-label="PEB and warehouse construction quote request form"
              >
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input id="quote-name" required type="text" name="name" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="Your full name" autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                    <input id="quote-phone" required type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="+91 98806 91046" autoComplete="tel" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="quote-email" className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                  <input id="quote-email" required type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="your@email.com" autoComplete="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="quote-type" className="block text-sm font-medium text-foreground mb-1.5">Project Type *</label>
                    <select id="quote-type" required name="projectType" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition">
                      <option value="">Select project type</option>
                      <option value="peb-installation">PEB Structure Installation</option>
                      <option value="warehouse-construction">Warehouse Construction</option>
                      <option value="structural-erection">Structural Erection</option>
                      <option value="steel-roofing">Industrial Steel Roofing</option>
                      <option value="cladding-panels">Cladding & Panels</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-area" className="block text-sm font-medium text-foreground mb-1.5">Approx. Area (sq ft)</label>
                    <input id="quote-area" type="text" name="area" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="e.g. 20,000 sq ft" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="quote-location" className="block text-sm font-medium text-foreground mb-1.5">Project Location</label>
                  <input id="quote-location" type="text" name="location" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition" placeholder="City, State (e.g. Bangalore, Karnataka)" autoComplete="address-level2" />
                </div>
                <div className="mb-6">
                  <label htmlFor="quote-details" className="block text-sm font-medium text-foreground mb-1.5">Project Details</label>
                  <textarea id="quote-details" name="details" rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition resize-none" placeholder="Describe your PEB, roofing, or warehouse construction requirements, timeline, special needs..." />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-cta text-cta-foreground font-heading font-bold text-base rounded-lg hover:bg-cta/90 transition-colors shadow-lg shadow-cta/20"
                  aria-label="Submit your free PEB quote request"
                >
                  Submit Quote Request
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3">We respond within 24 hours — no obligation</p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
