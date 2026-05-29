import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — RK Roofing PEB Pvt Ltd" },
      {
        name: "description",
        content:
          "Privacy policy for RK Roofing PEB Pvt Ltd. Learn how we collect, use, and protect your personal information when you contact us for PEB and warehouse construction services.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])),
        id: "schema-breadcrumb-privacy",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <section className="py-24 md:py-32" aria-label="Privacy Policy">
      <div className="max-w-3xl mx-auto px-6 prose prose-gray">
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
        {[
          {
            title: "Information We Collect",
            text: "We collect personal information such as your name, phone number, email address, and project details when you fill out our contact or quote request forms. We also collect usage data through cookies and analytics tools.",
          },
          {
            title: "How We Use Your Information",
            text: "Your information is used to respond to your PEB, roofing, and warehouse construction inquiries, provide project estimates, improve our services, and send relevant communications with your consent. We never sell your personal data to third parties.",
          },
          {
            title: "Data Security",
            text: "We implement industry-standard security measures to protect your personal information from unauthorised access, alteration, or destruction.",
          },
          {
            title: "Cookies",
            text: "Our website uses cookies to enhance your browsing experience and analyse site traffic. You can manage cookie preferences through your browser settings.",
          },
          {
            title: "Contact Us",
            text: "For privacy-related inquiries, please contact us at rkroofingpeb@gmail.com or call +91 98806 91046.",
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
