import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#02040a] text-white">
      {/* Decorative Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6c76d]/50 to-transparent" />
      
      {/* Large subtle background branding */}
      <div className="absolute -bottom-12 -left-10 pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[15vw] font-black leading-none">BISF</h1>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Column 1: Brand Identity */}
          <div className="md:col-span-1 lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-6 bg-[#f6c76d]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f6c76d]">
                  Bharat Innovation
                </span>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">
                BISF Facilitator
              </h2>
              <p className="mt-4 max-w-sm text-sm text-white/50 leading-relaxed">
                Empowering Founders. Enabling Investors. Building the future of Bharat's startup ecosystem. 
                <span className="block mt-2 font-semibold text-white/70 italic">A Venture by iQue Global.</span>
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-widest text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f6c76d]" />
              Registered under MCA, Govt. of India
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-white/60 transition-all hover:translate-x-1 hover:text-[#f6c76d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & CTA */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a href="tel:+919035354833" className="block group">
                <p className="text-[10px] text-white/30 uppercase mb-1">Phone</p>
                <p className="text-lg font-medium group-hover:text-[#f6c76d] transition-colors">+91 9035354833</p>
              </a>
              <a href="https://www.bisf-india.com" className="block group">
                <p className="text-[10px] text-white/30 uppercase mb-1">Web</p>
                <p className="text-lg font-medium group-hover:text-[#f6c76d] transition-colors">bisf-india.com</p>
              </a>
            </div>
            <Motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-6 rounded-2xl bg-[#f6c76d]/10 border border-[#f6c76d]/20 p-4"
            >
              <p className="text-xs font-bold text-[#f6c76d]">
                Claim your position as a BISF Partner today.
              </p>
            </Motion.div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest text-white/20 md:flex-row">
          <p>© {currentYear} BISF — Build with conviction.</p>
          <div className="flex gap-6 italic">
            <span>An informed investor is the best partner.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}