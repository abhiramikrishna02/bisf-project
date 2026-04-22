import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const activeIndex = useMemo(() => {
    const index = navItems.findIndex((item) => item.to === location.pathname);
    return index !== -1 ? index : 0;
  }, [location.pathname]);

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-visible rounded-[1.6rem] border border-white/10 bg-[#050816]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:rounded-[2rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(246,199,109,0.15),transparent_50%)]" />

          <div className="relative flex items-center justify-between px-4 py-3 sm:px-5">
            <NavLink to="/" className="group relative flex items-center gap-3 sm:gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
                <div className="pointer-events-none absolute inset-1 rounded-2xl bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.45),transparent_18%),radial-gradient(circle_at_55%_55%,rgba(246,199,109,0.55),rgba(246,199,109,0.08)_48%,transparent_70%)] shadow-[inset_0_0_18px_rgba(246,199,109,0.18)]" />
                <div className="pointer-events-none absolute inset-2 animate-[spin_18s_linear_infinite] rounded-full border border-white/10 border-t-[#f6c76d]/70 border-r-transparent border-b-transparent border-l-white/10" />
                <span className="relative z-10 text-base font-black tracking-tighter text-white sm:text-lg">
                  B
                </span>
              </div>
              <div className="hidden flex-col sm:flex">
                <div className="text-xs font-bold uppercase tracking-[0.35em] text-white sm:text-sm sm:tracking-[0.4em]">
                  BISF
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/40 sm:tracking-[0.25em]">
                  facilitators
                </div>
              </div>
            </NavLink>

            <nav className="relative hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 lg:flex">
              <div
                className="absolute h-[80%] rounded-full bg-[#f6c76d] shadow-[0_0_24px_rgba(246,199,109,0.45)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  width: `calc(${100 / navItems.length}% - 12px)`,
                  left: `calc(${(activeIndex * 100) / navItems.length}% + 6px)`,
                }}
              />

              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative z-10 min-w-[100px] px-6 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                      isActive ? "text-[#050816]" : "text-white/70 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden sm:h-12 sm:w-12"
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <div className="flex flex-col gap-1.5">
                <div
                  className={`h-0.5 w-5 bg-current transition-all ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <div
                  className={`h-0.5 w-5 bg-current transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`h-0.5 w-5 bg-current transition-all ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            id="mobile-nav"
            className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#050816]/95 shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden ${
              open ? "max-h-[24rem] opacity-100 translate-y-0" : "pointer-events-none max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <div className="flex flex-col gap-2 p-3 sm:p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-5 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-all sm:px-6 sm:py-4 sm:tracking-[0.3em] ${
                      isActive ? "bg-white text-black" : "bg-white/5 text-white/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
