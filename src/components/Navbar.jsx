import { useState, useMemo, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function LogoOrb() {
  const mesh = useRef(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = state.clock.getElapsedTime() * 0.5;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={1}>
      <Sphere ref={mesh} args={[1, 32, 32]} scale={1.8}>
        <MeshDistortMaterial
          color="#f6c76d"
          distort={0.6}
          speed={2}
          transparent
          opacity={0.12}
        />
      </Sphere>
    </Float>
  );
}

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
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(246,199,109,0.15),transparent_50%)]" />

          <div className="relative flex items-center justify-between px-5 py-3">
            <NavLink to="/" className="group relative flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform group-hover:scale-105">
                <Canvas className="pointer-events-none absolute inset-0">
                  <ambientLight intensity={1} />
                  <LogoOrb />
                </Canvas>
                <span className="relative z-10 text-lg font-black tracking-tighter text-white">
                  B
                </span>
              </div>
              <div className="hidden flex-col sm:flex">
                <div className="text-sm font-bold uppercase tracking-[0.4em] text-white">
                  BISF
                </div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-white/40">
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
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
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
            className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 border-t border-white/5 p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-6 py-4 text-xs font-bold uppercase tracking-[0.3em] transition-all ${
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
