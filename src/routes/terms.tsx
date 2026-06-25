import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — RK Roofing PEB Pvt Ltd" },
      {
        name: "description",
        content:
          "Terms and conditions for RK Roofing PEB Pvt Ltd services. Governs PEB installation, warehouse construction, steel roofing, and related industrial construction contracts.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Terms & Conditions", path: "/terms" }])),
        id: "schema-breadcrumb-terms",
      },
    ],
  }),
});

function TermsPage() {
  return (
    <section className="py-24 md:py-32" aria-label="Terms and Conditions">
      <div className="max-w-3xl mx-auto px-6 prose prose-gray">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
        {[
          {
            title: "Services",
            text: "RK Roofing PEB Pvt Ltd provides PEB structure installation, industrial roofing, warehouse construction, structural erection, cladding, and related services across India. All projects are governed by individual contracts and work orders.",
          },
          {
            title: "Quotations & Pricing",
            text: "All quotations are valid for 30 days from the date of issue. Prices are subject to change based on material costs, site conditions, and scope modifications. Final pricing is confirmed upon contract signing.",
          },
          {
            title: "Payment Terms",
            text: "Standard payment terms include an advance payment upon order confirmation, stage-wise payments linked to project milestones, and final payment upon project completion and handover.",
          },
          {
            title: "Warranty",
            text: "We provide warranties on structural integrity, roofing, and workmanship as specified in individual project contracts. Warranty terms typically range from 5 to 25 years depending on the component.",
          },
          {
            title: "Limitation of Liability",
            text: "Our liability is limited to the contract value of the project. We are not responsible for delays caused by force majeure, client-side dependencies, or regulatory approvals.",
          },
          {
            title: "Governing Law",
            text: "These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in Bangalore, Karnataka.",
          },
        ].map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="font-heading font-bold text-xl text-foreground mb-3">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
