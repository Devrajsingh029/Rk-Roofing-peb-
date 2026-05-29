import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop / tablet floating buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 max-w-[calc(100%-3rem)]">
        <a
          href="https://wa.me/919880691046"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[52px] h-[52px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300 ease-luxury"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </a>
        <a
          href="tel:+919880691046"
          className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-cta to-gold flex items-center justify-center shadow-[0_8px_30px_rgba(249,115,22,0.4)] hover:scale-110 hover:shadow-[0_8px_40px_rgba(249,115,22,0.6)] transition-all duration-300 ease-luxury"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5 text-cta-foreground" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid w-full max-w-full grid-cols-2 overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
        <a
          href="tel:+919880691046"
          className="flex items-center justify-center gap-2 py-3.5 text-cta-foreground bg-gradient-to-r from-cta to-gold font-heading font-bold text-xs uppercase tracking-[0.2em]"
          aria-label="Call Now"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a
          href="https://wa.me/919880691046"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-white bg-[#25D366] font-heading font-bold text-xs uppercase tracking-[0.2em]"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
      {/* Spacer so mobile fixed bar doesn't cover footer content */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
