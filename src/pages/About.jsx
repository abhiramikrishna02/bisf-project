import { Suspense, useLayoutEffect, useMemo, useRef, memo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import {
  motion as Motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

// --- REFINED CONTENT DATA (UNTOUCHED) ---
const visionPillars = [
  { title: "Structured Support", text: "Providing the frameworks and systems needed to turn raw ambition into a functioning business entity." },
  { title: "Strategic Capital", text: "Ensuring founders have access to capital that is aligned with their long-term growth, not just short-term noise." },
  { title: "Execution Mentorship", text: "Mentorship that doesn't just advise from the sidelines but builds alongside founders in the trenches." },
];

const missionPoints = [
  "Bridge the gap between raw ideas and investable, scalable businesses.",
  "Create a founder-first ecosystem where support is structural, not transactional.",
  "Deliver sustainable, transparent, and defined value to our investor partners.",
  "Cultivate a new breed of entrepreneurs who are backed to win from day zero.",
];

function TechParticles({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    let seed = 1234567;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
    for (let i = 0; i < count; i++) {
      p[i * 3] = (random() - 0.5) * 20;
      p[i * 3 + 1] = (random() - 0.5) * 20;
      p[i * 3 + 2] = (random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial transparent color="#f6c76d" size={0.02} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

const NetworkModel = memo(({ interactionRef }) => {
  const group = useRef();
  const { scene } = useGLTF("/knowledge_network.glb");
  
  // FAIL-SAFE 1: Fresh clone on every mount
  const model = useMemo(() => scene.clone(), [scene]);

  // FAIL-SAFE 2: Immediate bounding box calculation
  useLayoutEffect(() => {
    if (model) {
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const scaleFactor = 5.0 / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scaleFactor);
    }
  }, [model]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const pointer = interactionRef.current;
    
    // Smooth interaction physics
    pointer.rotY += (pointer.targetRotY - pointer.rotY) * 0.05;
    pointer.rotX += (pointer.targetRotX - pointer.rotX) * 0.05;
    
    // Combine slow auto-rotation with user input
    group.current.rotation.y = (t * 0.12) + pointer.rotY;
    group.current.rotation.x = (Math.sin(t * 0.1) * 0.1) + pointer.rotX;
    group.current.position.y = Math.sin(t * 0.14) * 0.1;
  });

  return <group ref={group}><primitive object={model} /></group>;
});

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
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgShift = useTransform(smoothScroll, [0, 1], ["0%", "20%"]);
  
  const interactionRef = useRef({
    dragging: false,
    lastX: 0,
    lastY: 0,
    targetRotX: 0,
    targetRotY: 0,
    rotX: 0,
    rotY: 0,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // FAIL-SAFE 3: Global pointer events mapped specifically to the interaction state
  const handlePointerDown = (e) => {
    interactionRef.current.dragging = true;
    interactionRef.current.lastX = e.clientX;
    interactionRef.current.lastY = e.clientY;
  };

  const handlePointerMove = (e) => {
    if (!interactionRef.current.dragging) return;
    const dx = e.clientX - interactionRef.current.lastX;
    const dy = e.clientY - interactionRef.current.lastY;
    interactionRef.current.targetRotY += dx * 0.005;
    interactionRef.current.targetRotX += dy * 0.005;
    interactionRef.current.lastX = e.clientX;
    interactionRef.current.lastY = e.clientY;
  };

  const stopDragging = () => {
    interactionRef.current.dragging = false;
  };

  return (
    <div 
      className="relative min-h-screen w-full bg-[#02040a] text-white selection:bg-[#f6c76d] selection:text-black overflow-x-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      onPointerCancel={stopDragging}
    >
      
      {/* 3D BACKGROUND - FIXED TO RIGHT SIDE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {isMounted && (
          <Canvas camera={{ position: [0, 0, 10], fov: 40 }} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#f6c76d" />
            <Suspense fallback={null}>
              <TechParticles />
              {/* Force Right-Side Positioning */}
              <group position={[window.innerWidth > 1024 ? 4.5 : 0, 0, 0]}>
                <NetworkModel interactionRef={interactionRef} />
              </group>
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        )}
      </div>

      {/* NOISE OVERLAY */}
      <Motion.div style={{ y: bgShift }} className="fixed inset-0 z-[1] opacity-20 pointer-events-none bg-[url('https://res.cloudinary.com/dlbv8j7p2/image/upload/v1683216828/noise_v1_fm3_q_80_s_2_a_1_v_1_u_1_z_1_r_1_t_1_b_1_c_1_f_1_g_1_h_1_i_1_j_1_k_1_l_1_m_1_n_1_o_1_p_1_q_1_r_1_s_1_t_1_u_1_v_1_w_1_x_1_y_1_z_1.png')] opacity-[0.03]" />

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-32 space-y-64 pointer-events-none">
        
        <section className="min-h-[80vh] flex flex-col justify-center pointer-events-auto">
          <Reveal>
            <div className="space-y-12 max-w-4xl">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#f6c76d]" />
                <p className="text-[#f6c76d] font-black tracking-[0.5em] text-sm uppercase">Facilitating Innovation</p>
              </div>
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase">
                About <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}>BISF</span>
              </h1>
              <p className="text-2xl md:text-4xl font-light text-white/80 leading-tight">
                BISF, Bharat Innovation & Startup Facilitator, is a venture-building ecosystem that brings founders, operators, and investors together.
              </p>
              <div className="pt-8">
                 <p className="max-w-2xl text-lg text-white/40 leading-relaxed border-l-4 border-[#f6c76d] pl-8 italic">
                   We work with founders, not just around them. We identify high-potential talent early and give them the structure to grow with conviction.
                 </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="space-y-24 pointer-events-auto">
          <Reveal>
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">The Vision</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full group p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.05] transition-all duration-500">
                  <div className="mb-8 text-[#f6c76d] font-bold text-xs tracking-widest uppercase">0{i+1} // Pillar</div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-white/50 leading-relaxed">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-12 md:p-24 pointer-events-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <Reveal>
                <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">Our<br/><span className="text-[#f6c76d]">Mission</span></h2>
              </Reveal>
              <div className="space-y-6">
                {missionPoints.map((point, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex items-start gap-6 group">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#f6c76d] group-hover:scale-150 transition-transform" />
                      <p className="text-xl md:text-2xl font-medium text-white/70 group-hover:text-white transition-colors">{point}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
           </div>
        </section>

        <section className="text-center space-y-16 pointer-events-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest opacity-20">Why Choose BISF</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { l: "BACKED BY", v: "iQue Global" },
                { l: "PIPELINE", v: "Curated" },
                { l: "MODEL", v: "Execution" },
                { l: "TERMS", v: "Structured" }
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

useGLTF.preload("/knowledge_network.glb");