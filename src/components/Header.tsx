import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const brandText = "text-foreground";
  const subText = "text-gold/80";
  const navInactive = "text-foreground/80 hover:text-foreground";
  const navActive = "text-cta";
  const mobileBtn = "text-foreground hover:bg-muted";

  return (
    <>
      {/* Skip to main content — accessibility + SEO */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-cta focus:text-cta-foreground focus:rounded focus:text-sm focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Main nav */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/60 transition-all duration-500 ease-luxury ${
          scrolled || mobileOpen ? "shadow-[0_4px_30px_rgba(15,23,42,0.08)]" : ""
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="RK Roofing PEB Pvt Ltd — Home">
            <div className="relative" aria-hidden="true">
              <div className="w-11 h-11 bg-gradient-to-br from-cta to-gold rounded-md flex items-center justify-center shadow-lg shadow-cta/20">
                <span className="text-cta-foreground font-heading font-black text-base tracking-tighter">RK</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1.5 leading-tight">
              <span className={`font-heading font-bold text-base tracking-tight uppercase transition-colors ${brandText}`}>RK ROOFING</span>
              <span className={`font-heading font-bold text-base tracking-tight uppercase transition-colors ${brandText}`}>PEB</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`link-underline text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.to ? navActive : navInactive
                }`}
                aria-current={location.pathname === link.to ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/quote"
              className="btn-glow hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cta to-gold text-cta-foreground font-heading font-bold text-xs uppercase tracking-widest rounded-sm"
              aria-label="Get a free PEB or warehouse construction quote"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${mobileBtn}`}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
            >
              <nav className="px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-sm font-medium tracking-wide rounded-md transition-colors ${
                      location.pathname === link.to
                        ? "text-cta bg-cta/10"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                    aria-current={location.pathname === link.to ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/quote"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-cta to-gold text-cta-foreground font-heading font-bold text-xs uppercase tracking-widest rounded-sm"
                  aria-label="Get a free PEB or warehouse construction quote"
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer so non-home pages don't hide content under fixed header */}
      {!isHome && <div className="h-20" aria-hidden="true" />}
    </>
  );
}
