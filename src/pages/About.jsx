import { Component, Suspense, useEffect, useMemo, useRef, memo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  OrbitControls,
  Html,
} from "@react-three/drei";
import {
  motion as Motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";

const MODEL_URL = `${import.meta.env.BASE_URL}around_the_world_in_80_models_posts.glb`;

// --- REFINED CONTENT DATA (UNTOUCHED) ---
const visionPillars = [
  {
    title: "Structured Support",
    text: "Providing the frameworks and systems needed to turn raw ambition into a functioning business entity.",
  },
  {
    title: "Strategic Capital",
    text: "Ensuring founders have access to capital that is aligned with their long-term growth, not just short-term noise.",
  },
  {
    title: "Execution Mentorship",
    text: "Mentorship that doesn't just advise from the sidelines but builds alongside founders in the trenches.",
  },
];

const missionPoints = [
  "Bridge the gap between raw ideas and investable, scalable businesses.",
  "Create a founder-first ecosystem where support is structural, not transactional.",
  "Deliver sustainable, transparent, and defined value to our investor partners.",
  "Cultivate a new breed of entrepreneurs who are backed to win from day zero.",
];

// --- BOUNCY REVEAL WRAPPER ---
const BouncyReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay 
      }}
    >
      {children}
    </Motion.div>
  );
};

const ScrollRevealText = ({ value }) => {
  const element = useRef(null);
  const isInView = useInView(element, { once: true, margin: "-15%" });

  const words = value.split(" ");
  return (
    <p
      ref={element}
      className="relative flex flex-wrap text-2xl md:text-4xl font-light leading-tight"
    >
      {words.map((word, i) => {
        return (
          <Motion.span
            key={i}
            initial={{ opacity: 0.2, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 10 }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
            className="relative mr-3 mt-2"
          >
            <span className="absolute opacity-20">{word}</span>
            <Motion.span className="text-white">{word}</Motion.span>
          </Motion.span>
        );
      })}
    </p>
  );
};

const NetworkModel = memo(({ scrollProgress }) => {
  const group = useRef();
  const elapsed = useRef(0);
  const { scene } = useGLTF(MODEL_URL);
  const model = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    let rafId = 0;
    const tick = () => {
      if (group.current) {
        elapsed.current = performance.now() / 1000;
        const time = elapsed.current;
        const scrollValue = scrollProgress.get();
        const drift = scrollValue - 0.5;
        group.current.rotation.y = time * 0.08 + drift * 0.8;
        group.current.rotation.x = Math.sin(time * 0.08) * 0.05 + drift * 0.18;
        group.current.position.y = Math.sin(time * 0.12) * 0.03 + drift * 0.08;
      }
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [scrollProgress]);

  return (
    <group ref={group}>
      <primitive object={model} />
    </group>
  );
});

class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <div className="rounded-2xl border border-white/15 bg-[#02040a]/95 px-6 py-4 text-center text-sm text-white/70 shadow-2xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-[#f6c76d]">
              3D model unavailable
            </p>
            <p className="mt-2 max-w-xs">
              The About page will still load. The model asset was not available,
              so we are showing the content without the 3D scene.
            </p>
          </div>
        </Html>
      );
    }

    return this.props.children;
  }
}

function ModelLoader() {
  return (
    <Html center>
      <div className="rounded-full border border-white/15 bg-[#02040a]/90 px-5 py-3 text-xs uppercase tracking-[0.35em] text-white/70">
        Loading model...
      </div>
    </Html>
  );
}

const Reveal = ({ children, delay = 0, width = "100%" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 75, filter: "blur(10px)" }}
      transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
      style={{ width }}
    >
      {children}
    </Motion.div>
  );
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
    mass: 0.2,
  });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#02040a] text-white selection:bg-[#f6c76d] selection:text-black">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(246,199,109,0.08),transparent_42%),radial-gradient(circle_at_right,rgba(96,165,250,0.08),transparent_32%),linear-gradient(180deg,#02040a_0%,#050816_100%)]" />
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.06] bg-[radial-gradient(circle,rgba(255,255,255,0.11)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-16 space-y-20 sm:px-6 md:py-24 md:space-y-28">
        {/* HERO SECTION (UNTOUCHED) */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center min-h-[70vh] md:gap-14 md:min-h-[78vh]">
          <Reveal>
            <div className="max-w-4xl space-y-8 md:space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#f6c76d]" />
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f6c76d] sm:text-sm sm:tracking-[0.5em]">Facilitating Innovation</p>
              </div>
              <h1 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] sm:text-6xl md:text-[10rem] md:leading-[0.85]">
                About <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}>BISF</span>
              </h1>
              <ScrollRevealText value="BISF, Bharat Innovation & Startup Facilitator, is a venture-building ecosystem that brings founders, operators, and investors together." />
              <div className="pt-4 sm:pt-8">
                <p className="max-w-2xl border-l-4 border-[#f6c76d] pl-4 text-base leading-relaxed text-white/40 italic sm:pl-8 sm:text-lg">
                  We work with founders, not just around them. We identify high-potential talent early and give them the structure to grow with conviction.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="relative">
            <div className="relative h-[56vh] min-h-[360px] w-full sm:h-[62vh] md:h-[72vh] md:min-h-[520px]">
              <Canvas camera={{ position: [0, 0, 12], fov: 32 }} gl={{ antialias: true, alpha: true }} className="h-full w-full">
                <Suspense fallback={<ModelLoader />}>
                  <ModelErrorBoundary>
                    <Stage adjustCamera={1.08} intensity={0.9} environment="city" shadows={false} preset="rembrandt">
                      <group scale={1.18}>
                        <NetworkModel scrollProgress={smoothScroll} />
                      </group>
                    </Stage>
                    <OrbitControls makeDefault enablePan={false} enableZoom={false} enableDamping dampingFactor={0.08} rotateSpeed={0.55} />
                  </ModelErrorBoundary>
                </Suspense>
              </Canvas>
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="relative py-12 md:py-20">
          <div className="relative z-10 space-y-14 md:space-y-24">
            <BouncyReveal>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-center sm:text-5xl md:text-8xl">The Vision</h2>
            </BouncyReveal>
            <div className="grid gap-5 md:grid-cols-3 md:gap-8">
              {visionPillars.map((pillar, i) => (
                <BouncyReveal key={i} delay={i * 0.1}>
                  <Motion.div 
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full group rounded-[2rem] border border-white/10 bg-[#02040a]/35 p-6 backdrop-blur-xl transition-all duration-500 sm:p-8 md:rounded-[2.5rem] md:p-10"
                  >
                    <div className="mb-6 text-xs font-bold uppercase tracking-widest text-[#f6c76d] md:mb-8">0{i + 1} // Pillar</div>
                    <h3 className="mb-4 text-xl font-bold md:text-2xl">{pillar.title}</h3>
                    <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{pillar.text}</p>
                  </Motion.div>
                </BouncyReveal>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION SECTION (UNTOUCHED) */}
        <section className="relative overflow-hidden rounded-[2rem] border border-[#f6c76d]/20 bg-gradient-to-br from-[#f6c76d]/5 to-transparent p-6 backdrop-blur-md sm:p-10 md:rounded-[4rem] md:p-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <BouncyReveal>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none sm:text-5xl md:text-9xl">
                Our<br /><span className="text-[#f6c76d]">Mission</span>
              </h2>
            </BouncyReveal>
            <div className="space-y-4 sm:space-y-6">
              {missionPoints.map((point, i) => (
                <BouncyReveal key={i} delay={0.2 + (i * 0.1)}>
                  <div className="group flex items-start gap-4 sm:gap-6">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[#f6c76d] group-hover:scale-150 transition-transform" />
                    <p className="text-lg font-medium text-white/70 transition-colors group-hover:text-white md:text-2xl">
                      {point}
                    </p>
                  </div>
                </BouncyReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION (UNTOUCHED) */}
        <section className="space-y-10 text-center md:space-y-16">
          <Reveal>
            <h2 className="text-3xl font-black uppercase tracking-widest opacity-20 sm:text-4xl md:text-6xl">Why Choose BISF</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { l: "BACKED BY", v: "iQue Global" },
                { l: "PIPELINE", v: "Curated" },
                { l: "MODEL", v: "Execution" },
                { l: "TERMS", v: "Structured" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.03] p-6 transition-colors hover:border-[#f6c76d]/30 sm:p-8 md:rounded-[2rem] md:p-12">
                    <div className="mb-4 text-[10px] tracking-[0.3em] text-white/30">{s.l}</div>
                    <div className="text-xl font-black text-[#f6c76d] sm:text-2xl">{s.v}</div>
                  </div>
                </Reveal>
              ))}
          </div>
          <Reveal>
            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-white/40 italic sm:text-2xl">
              "The philosophy is human-first: investors are treated as partners, and their experience, confidence, and returns are part of the same commitment."
            </p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
