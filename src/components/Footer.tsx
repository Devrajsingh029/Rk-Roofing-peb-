import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark-section text-white relative overflow-hidden" aria-label="Site footer">
      <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-white rounded-md flex items-center justify-center shadow-lg" aria-hidden="true">
                <span className="text-cta font-heading font-black text-base tracking-tighter">RK</span>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-base text-white">RK Roofing</span>
                <span className="block text-[9px] text-blue-200 tracking-[0.25em] uppercase font-semibold">PEB Pvt Ltd</span>
              </div>
            </div>
            <p className="text-sm text-blue-100/80 leading-relaxed">
              Built Through Engineering. Bangalore's trusted partner for premium PEB roofing, industrial steel structures, and warehouse construction across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-[10px] uppercase tracking-[0.3em] mb-5 text-white">Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/projects", label: "Projects" },
                  { to: "/contact", label: "Contact" },
                  { to: "/quote", label: "Request Quote" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-[10px] uppercase tracking-[0.3em] mb-5 text-white">Capabilities</h3>
            <nav aria-label="Services navigation">
              <ul className="flex flex-col gap-3">
                {[
                  { label: "PEB Installation", anchor: "peb-structure-installation" },
                  { label: "Steel Roofing", anchor: "industrial-steel-roofing" },
                  { label: "Warehouse Build", anchor: "warehouse-construction-bangalore" },
                  { label: "Structural Erection", anchor: "structural-steel-erection" },
                  { label: "Cladding Systems", anchor: "cladding-panel-systems" },
                ].map((s) => (
                  <li key={s.label}>
                    <Link to="/services" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-[10px] uppercase tracking-[0.3em] mb-5 text-white">Connect</h3>
            <address className="not-italic flex flex-col gap-4">
              <a href="tel:+919880691046" className="flex items-start gap-3 text-sm text-blue-100/80 hover:text-white transition-colors" aria-label="Call RK Roofing PEB at +91 98806 91046">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-blue-200" aria-hidden="true" />
                <span>+91 98806 91046</span>
              </a>
              <a href="mailto:rkroofingpeb@gmail.com" className="flex items-start gap-3 text-sm text-blue-100/80 hover:text-white transition-colors" aria-label="Email RK Roofing PEB at rkroofingpeb@gmail.com">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-blue-200" aria-hidden="true" />
                <span>rkroofingpeb@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-blue-100/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-200" aria-hidden="true" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-100/60 tracking-wide">
            &copy; {year} RK Roofing PEB Pvt Ltd. All rights reserved. Engineered with precision.
          </p>
          <nav aria-label="Legal navigation">
            <div className="flex gap-8">
              <Link to="/privacy" className="text-xs text-blue-100/60 hover:text-white transition-colors uppercase tracking-widest">Privacy</Link>
              <Link to="/terms" className="text-xs text-blue-100/60 hover:text-white transition-colors uppercase tracking-widest">Terms</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
