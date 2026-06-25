/**
 * SEO Constants — RK Roofing PEB Pvt Ltd
 * Update SITE_URL when deploying to production domain.
 */
export const SITE_URL = "https://www.rkroofingpeb.com";
export const SITE_NAME = "RK Roofing PEB Pvt Ltd";
export const BUSINESS_PHONE = "+91-98806-91046";
export const BUSINESS_PHONE_RAW = "+919880691046";
export const BUSINESS_EMAIL = "rkroofingpeb@gmail.com";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const TWITTER_HANDLE = "@rkroofingpeb";

/**
 * Global Organization + WebSite JSON-LD schema.
 * Injected once in the root shell — applies to every page.
 */
export const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "GeneralContractor"],
      "@id": `${SITE_URL}/#organization`,
      "name": "RK Roofing PEB Pvt Ltd",
      "alternateName": ["RK Roofing", "RK Roofing PEB", "RK Roofing PEB Private Limited"],
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/og-image.jpg`,
        "width": 200,
        "height": 60,
      },
      "image": `${SITE_URL}/og-image.jpg`,
      "description":
        "India's trusted PEB roofing, steel structures, and warehouse construction company in Bangalore, Karnataka. 150+ projects delivered across South India with 15+ years of engineering excellence.",
      "telephone": BUSINESS_PHONE,
      "email": BUSINESS_EMAIL,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946",
      },
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "City", "name": "Mysore" },
        { "@type": "State", "name": "Karnataka" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "State", "name": "Andhra Pradesh" },
        { "@type": "State", "name": "Telangana" },
        { "@type": "Country", "name": "India" },
      ],
      "foundingDate": "2016",
      "priceRange": "₹₹₹",
      "openingHours": "Mo-Sa 09:00-18:00",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PEB & Industrial Construction Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PEB Structure Installation",
              "description":
                "Expert pre-engineered building structure installation in Bangalore and across South India",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Industrial Steel Roofing",
              "description":
                "Premium steel roofing solutions including Standing Seam, Clip Lock, Kalzip systems",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Warehouse Construction Bangalore",
              "description":
                "End-to-end industrial warehouse construction in Bangalore and Karnataka",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Structural Steel Erection",
              "description": "Professional structural erection for industrial and commercial buildings",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cladding & Panel Systems",
              "description": "ACP, PUF, and Sandwich panel cladding systems for industrial buildings",
            },
          },
        ],
      },
      "sameAs": [`https://wa.me/${BUSINESS_PHONE_RAW}`],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "RK Roofing PEB Pvt Ltd",
      "description":
        "India's trusted PEB contractors, industrial roofing company, and warehouse construction experts in Bangalore",
      "publisher": {
        "@id": `${SITE_URL}/#organization`,
      },
      "inLanguage": "en-IN",
    },
  ],
};

/** BreadcrumbList JSON-LD helper */
export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.name,
        "item": `${SITE_URL}${item.path}`,
      })),
    ],
  };
}
