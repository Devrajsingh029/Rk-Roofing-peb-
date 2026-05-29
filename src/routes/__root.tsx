import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { globalSchema, SITE_URL, OG_IMAGE, TWITTER_HANDLE, SITE_NAME } from "@/lib/seo";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-heading">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-lg bg-cta px-6 py-3 text-sm font-bold text-cta-foreground transition-colors hover:bg-cta/90 font-heading">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "RK Roofing PEB Pvt Ltd | PEB Contractors Bangalore | Warehouse Construction",
      },
      {
        name: "description",
        content:
          "RK Roofing PEB Pvt Ltd — trusted PEB contractors in Bangalore for industrial roofing, warehouse construction & steel building solutions. 150+ projects, 15+ years. Call +91 98806 91046.",
      },
      { name: "author", content: "RK Roofing PEB Private Limited" },
      {
        name: "keywords",
        content:
          "PEB contractors Bangalore, industrial roofing company, warehouse construction Bangalore, pre engineered building contractors, steel building solutions Karnataka, commercial roofing Karnataka, industrial shed construction, PEB structure installation, steel roofing Bangalore, warehouse roofing services",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { name: "theme-color", content: "#1e3a5f" },
      /* Geo tags for Local SEO */
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Bangalore, Karnataka" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      /* Open Graph */
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      {
        property: "og:title",
        content: "RK Roofing PEB Pvt Ltd | PEB Contractors Bangalore",
      },
      {
        property: "og:description",
        content:
          "Trusted PEB contractors in Bangalore for industrial roofing, warehouse construction & steel building solutions. 150+ projects across India.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "RK Roofing PEB Pvt Ltd — PEB Contractors Bangalore" },
      /* Twitter Card */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_HANDLE },
      { name: "twitter:creator", content: TWITTER_HANDLE },
      {
        name: "twitter:title",
        content: "RK Roofing PEB Pvt Ltd | PEB Contractors Bangalore",
      },
      {
        name: "twitter:description",
        content:
          "Trusted PEB contractors in Bangalore for industrial roofing, warehouse & steel building construction. 150+ projects, 15+ years.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "RK Roofing PEB Pvt Ltd — Industrial Construction Experts" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
        {/* Global Organization + WebSite structured data — injected on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
