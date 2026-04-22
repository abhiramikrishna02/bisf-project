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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6c76d]/50 to-transparent" />

      <div className="absolute -bottom-12 -left-10 pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[18vw] font-black leading-none sm:text-[15vw]">BISF</h1>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-6 md:col-span-1 lg:col-span-2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="h-px w-6 bg-[#f6c76d]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f6c76d]">
                  Bharat Innovation
                </span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter sm:text-3xl">
                BISF Facilitator
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                Empowering founders. Enabling investors. Building the future of
                Bharat's startup ecosystem.
                <span className="mt-2 block font-semibold text-white/70 italic">
                  A venture by iQue Global.
                </span>
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-widest text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f6c76d]" />
              Registered under MCA, Govt. of India
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-white/60 transition-all hover:translate-x-1 hover:text-[#f6c76d] sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a href="tel:+919035354833" className="block group">
                <p className="mb-1 text-[10px] uppercase text-white/30">Phone</p>
                <p className="text-base font-medium transition-colors group-hover:text-[#f6c76d] sm:text-lg">
                  +91 9035354833
                </p>
              </a>

              <a href="https://www.bisf-india.com" className="block group">
                <p className="mb-1 text-[10px] uppercase text-white/30">Web</p>
                <p className="text-base font-medium transition-colors group-hover:text-[#f6c76d] sm:text-lg">
                  bisf-india.com
                </p>
              </a>
            </div>

            <Motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6 rounded-2xl border border-[#f6c76d]/20 bg-[#f6c76d]/10 p-4"
            >
              <p className="text-xs font-bold text-[#f6c76d]">
                Claim your position as a BISF Partner today.
              </p>
            </Motion.div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-[10px] uppercase tracking-widest text-white/20 md:flex-row md:text-left">
          <p>© {currentYear} BISF - Build with conviction.</p>
          <div className="flex flex-wrap justify-center gap-3 italic md:justify-end md:gap-6">
            <span>An informed investor is the best partner.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
