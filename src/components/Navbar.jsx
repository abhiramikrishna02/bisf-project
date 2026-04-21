import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-white/55">
            BISF
          </div>
          <div className="text-xs text-white/70">
            Bharat Innovation & Startup Facilitator
          </div>
        </div>

        <nav className="flex items-center gap-5 md:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm md:text-[15px] tracking-wide transition-colors duration-300 ${
                  isActive ? "text-[#f6c76d]" : "text-white/80 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}