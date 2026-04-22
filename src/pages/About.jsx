import { Suspense, useMemo, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import {
  motion as Motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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

// --- CRED-STYLE SCROLL TEXT COMPONENTS (UNTOUCHED) ---
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-3 mt-2">
      <span className="absolute opacity-20">{children}</span>
      <Motion.span style={{ opacity }} className="text-white">
        {children}
      </Motion.span>
    </span>
  );
};

const ScrollRevealText = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");
  return (
    <p
      ref={element}
      className="flex flex-wrap text-2xl md:text-4xl font-light leading-tight"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const NetworkModel = memo(({ scrollProgress }) => {
  const group = useRef();
  const { scene } = useGLTF("/around_the_world_in_80_models_posts.glb");
  const model = useMemo(() => scene.clone(true), [scene]);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    const scrollValue = scrollProgress.get();
    const drift = scrollValue - 0.5;
    group.current.rotation.y = time * 0.08 + drift * 0.8;
    group.current.rotation.x = Math.sin(time * 0.08) * 0.05 + drift * 0.18;
    group.current.position.y = Math.sin(time * 0.12) * 0.03 + drift * 0.08;
  });

  return (
    <group ref={group}>
      <primitive object={model} />
    </group>
  );
});

function ModelLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="rounded-full border border-white/15 bg-[#02040a]/90 px-5 py-3 text-xs uppercase tracking-[0.35em] text-white/70">
        Loading model {Math.round(progress)}%
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
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://res.cloudinary.com/dlbv8j7p2/image/upload/v1683216828/noise_v1_fm3_q_80_s_2_a_1_v_1_u_1_z_1_r_1_t_1_b_1_c_1_f_1_g_1_h_1_i_1_j_1_k_1_l_1_m_1_n_1_o_1_p_1_q_1_r_1_s_1_t_1_u_1_v_1_w_1_x_1_y_1_z_1.png')]" />

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 space-y-28">
        {/* HERO SECTION (UNTOUCHED) */}
        <section className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center min-h-[78vh]">
          <Reveal>
            <div className="space-y-10 max-w-4xl">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#f6c76d]" />
                <p className="text-[#f6c76d] font-black tracking-[0.5em] text-sm uppercase">Facilitating Innovation</p>
              </div>
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase">
                About <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}>BISF</span>
              </h1>
              <ScrollRevealText value="BISF, Bharat Innovation & Startup Facilitator, is a venture-building ecosystem that brings founders, operators, and investors together." />
              <div className="pt-8">
                <p className="max-w-2xl text-lg text-white/40 leading-relaxed border-l-4 border-[#f6c76d] pl-8 italic">
                  We work with founders, not just around them. We identify high-potential talent early and give them the structure to grow with conviction.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="relative">
            <div className="relative h-[72vh] min-h-[520px] w-full">
              <Canvas camera={{ position: [0, 0, 12], fov: 32 }} gl={{ antialias: true, alpha: true }} className="h-full w-full">
                <Suspense fallback={<ModelLoader />}>
                  <Stage adjustCamera={1.08} intensity={0.9} environment="city" shadows={false} preset="rembrandt">
                    <group scale={1.18}>
                      <NetworkModel scrollProgress={smoothScroll} />
                    </group>
                  </Stage>
                  <OrbitControls makeDefault enablePan={false} enableZoom={false} enableDamping dampingFactor={0.08} rotateSpeed={0.55} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="relative py-20">
          <div className="relative z-10 space-y-24">
            <BouncyReveal>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-center">The Vision</h2>
            </BouncyReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {visionPillars.map((pillar, i) => (
                <BouncyReveal key={i} delay={i * 0.1}>
                  <Motion.div 
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full group p-10 rounded-[2.5rem] border border-white/10 bg-[#02040a]/35 backdrop-blur-xl transition-all duration-500"
                  >
                    <div className="mb-8 text-[#f6c76d] font-bold text-xs tracking-widest uppercase">0{i + 1} // Pillar</div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{pillar.text}</p>
                  </Motion.div>
                </BouncyReveal>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION SECTION (UNTOUCHED) */}
        <section className="relative overflow-hidden rounded-[4rem] border border-[#f6c76d]/20 bg-gradient-to-br from-[#f6c76d]/5 to-transparent p-12 md:p-24 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <BouncyReveal>
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                Our<br /><span className="text-[#f6c76d]">Mission</span>
              </h2>
            </BouncyReveal>
            <div className="space-y-6">
              {missionPoints.map((point, i) => (
                <BouncyReveal key={i} delay={0.2 + (i * 0.1)}>
                  <div className="flex items-start gap-6 group">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[#f6c76d] group-hover:scale-150 transition-transform" />
                    <p className="text-xl md:text-2xl font-medium text-white/70 group-hover:text-white transition-colors">
                      {point}
                    </p>
                  </div>
                </BouncyReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION (UNTOUCHED) */}
        <section className="text-center space-y-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest opacity-20">Why Choose BISF</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { l: "BACKED BY", v: "iQue Global" },
              { l: "PIPELINE", v: "Curated" },
              { l: "MODEL", v: "Execution" },
              { l: "TERMS", v: "Structured" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-12 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-[#f6c76d]/30 transition-colors">
                  <div className="text-[10px] tracking-[0.3em] text-white/30 mb-4">{s.l}</div>
                  <div className="text-2xl font-black text-[#f6c76d]">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="max-w-3xl mx-auto text-2xl text-white/40 italic font-light leading-relaxed">
              "The philosophy is human-first: investors are treated as partners, and their experience, confidence, and returns are part of the same commitment."
            </p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

useGLTF.preload("/around_the_world_in_80_models_posts.glb");
