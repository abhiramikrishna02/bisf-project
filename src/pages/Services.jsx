import { useRef, useEffect, useState } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  animate,
} from "framer-motion";

// --- DATA STRUCTURES ---
const solution = [
  { title: "Strategy", text: "Market analysis, business model architecture, competitive positioning, and long-term growth planning." },
  { title: "Execution", text: "Hands-on operational support - from team building to product development to customer acquisition." },
  { title: "Capital Access", text: "Structured pathways to investor capital at the right stage, on terms that protect both founders and backers." },
  { title: "Growth Acceleration", text: "A curated network of partners, mentors, and industry connections that compress the timeline to scale." },
];

const approach = [
  { no: "01", title: "Identify", text: "Find high-potential founders with the right fundamentals and the right hunger." },
  { no: "02", title: "Support", text: "Provide execution and operational scaffolding to turn ideas into traction." },
  { no: "03", title: "Scale", text: "Deploy resources, networks, and capital to accelerate proven models." },
  { no: "04", title: "Value", text: "Create structured investor returns through disciplined, transparent growth." },
];

const benefits = [
  { title: "Legal Agreement", text: "A formally drafted, legally binding investment agreement that protects your rights, defines your returns, and governs exit terms." },
  { title: "Share Certificate", text: "An official certificate documenting your ownership stake in the BISF ecosystem - your proof of participation." },
  { title: "Complete Onboarding Kit", text: "A premium welcome package delivered to you - covering your UIN, documentation, and everything you need to start your journey." },
  { title: "Transparent Reporting System", text: "Regular, structured updates on ecosystem performance, fund deployment, and portfolio progress. You are always informed." },
];

const privileges = [
  { title: "X9 Concierge Membership", val: "₹3,00,000", text: "Priority lifestyle, travel, and business services reserved for BISF partners." },
  { title: "Health Insurance Coverage", val: "₹50,00,000", text: "Comprehensive health cover for you and your family. Your wellbeing is part of the partnership." },
  { title: "X9 Club Access", val: "Exclusive", text: "Entry into the X9 Club network - events, connections, and curated experiences." },
];

// --- CRED STYLE BACKGROUND CIRCLES ---
const CredCircles = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Central Glow */}
      <div className="absolute w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
      
      {[1, 2, 3, 4, 5].map((i) => (
        <Motion.div
          key={i}
          initial={{ rotate: 0 }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border border-dashed border-white/10"
          style={{
            width: `${25 + i * 12}%`,
            height: `${25 + i * 12}%`,
            aspectRatio: "1/1",
          }}
        />
      ))}
    </div>
  );
};

// --- NEW COMPONENT: SEQUENTIAL ILLUMINATION ---
const SequentialIllumination = ({ text, className }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    visible: {
      color: ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.2)"],
      textShadow: [
        "0px 0px 0px rgba(255,255,255,0)",
        "0px 0px 12px rgba(255,255,255,0.4)",
        "0px 0px 0px rgba(255,255,255,0)"
      ],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      },
    },
    hidden: {
      color: "rgba(255, 255, 255, 0.1)",
      textShadow: "0px 0px 0px rgba(255,255,255,0)",
    },
  };

  return (
    <Motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <Motion.span key={index} variants={child} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {letter}
        </Motion.span>
      ))}
    </Motion.h1>
  );
};

// --- NEW: COUNTER ANIMATION COMPONENT ---
const RollingNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const SectionWrapper = ({ children, className }) => (
  <section className={`relative min-h-[70vh] flex flex-col justify-center py-16 overflow-visible ${className}`}>
    {children}
  </section>
);

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const heroScroll = scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const yGrid = useTransform(smoothProgress, [0, 1], [0, -400]);
  const yBlob1 = useTransform(smoothProgress, [0, 1], [0, -600]);
  const yBlob2 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const rotateBlob = useTransform(smoothProgress, [0, 1], [0, 45]);

  const opacityFade = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const backgroundShift = useTransform(smoothProgress, [0, 1], [0, -180]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
      transition: { delay: i * 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  return (
    <div className="relative bg-[#02040a] text-white selection:bg-[#f6c76d] selection:text-black">
      
      {/* --- PARALLAX BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Motion.div
          style={{ y: backgroundShift }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,199,109,0.15),transparent_40%),linear-gradient(180deg,rgba(5,8,22,1)_0%,rgba(2,4,10,1)_100%)]"
        />
        <Motion.div 
          style={{ y: yGrid }}
          className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#f6c76d26_1px,transparent_1px),linear-gradient(to_bottom,#f6c76d26_1px,transparent_1px)] bg-[size:72px_72px]"
        />
        <Motion.div 
          style={{ y: yBlob1, rotate: rotateBlob }}
          className="absolute top-[-6%] right-[-4%] w-[55vw] h-[55vw] bg-[#f6c76d]/10 blur-[110px] rounded-full"
        />
        <Motion.div
          style={{ y: yBlob2, rotate: useTransform(smoothProgress, [0, 1], [0, -30]) }}
          className="absolute bottom-[-10%] left-[-8%] w-[42vw] h-[42vw] bg-[#60a5fa]/8 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:14px_14px] opacity-10 mix-blend-overlay" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* SECTION: OUR SOLUTION (HERO) - CRED STYLE UPDATE */}
        <SectionWrapper className="perspective-1000">
          {/* CRED CIRCLES INTEGRATION */}
          <div className="absolute inset-0 -z-10 h-[120%] top-[-10%]">
              <CredCircles />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center mb-16 pt-20">
            <div className="lg:col-span-8">
              <Motion.p 
                style={{ opacity: opacityFade }}
                className="text-[#f6c76d] font-black tracking-[0.5em] text-xs uppercase mb-8"
              >
                Our Solution
              </Motion.p>
              
              <div className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] flex flex-col">
                <SequentialIllumination text="BUILDING THE" />
                <Motion.div
                   initial={{ opacity: 0.1 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.8, duration: 1 }}
                   className="text-transparent font-light py-2" 
                   style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                >
                  INFRASTRUCTURE
                </Motion.div> 
                <SequentialIllumination text="OF SUCCESS" />
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Motion.p 
                style={{ opacity: useTransform(heroScroll, [0, 0.3], [0.5, 1]) }}
                className="text-lg md:text-xl text-white/60 leading-relaxed border-l border-[#f6c76d]/50 pl-8 max-w-sm"
              >
                Building a startup is hard enough. Doing it without the right infrastructure is nearly impossible. BISF removes the barriers between potential and performance.
              </Motion.p>
            </div>
          </div>

          {/* ANIMATED SOLUTION CARDS */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.map((item, i) => (
              <Motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(246,199,109,0.3)",
                  transition: { duration: 0.3 }
                }}
                className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl transition-colors group relative overflow-hidden"
              >
                <div className="w-10 h-10 mb-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-white/40 group-hover:bg-[#f6c76d] group-hover:text-black group-hover:border-[#f6c76d] transition-all duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f6c76d] transition-colors tracking-tight">{item.title}</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/70 transition-colors text-sm">{item.text}</p>
              </Motion.div>
            ))}
          </div>
          
          <Motion.p 
            style={{ opacity: opacityFade }}
            className="relative z-10 mt-16 text-center text-white/20 text-[10px] max-w-2xl mx-auto uppercase tracking-[0.3em] font-medium"
          >
            This is not a menu of services. It is a single, integrated model designed for the shortest responsible timeframe.
          </Motion.p>
        </SectionWrapper>

        {/* SECTION: OUR APPROACH */}
        <SectionWrapper>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-[#f6c76d] font-black tracking-[0.4em] text-sm uppercase mb-6">Our Approach</p>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8">Sequential & <br />Accountable</h2>
            <p className="max-w-3xl text-2xl text-white/60 font-light">
              We don’t move to the next step until the current one is solid. Every founder goes through the same four-stage framework—because it works.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {approach.map((step, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#02040a]/80 backdrop-blur-md p-8 border border-white/10 rounded-3xl"
                >
                  <span className="text-6xl font-black text-white/5 block mb-4">{step.no}</span>
                  <h3 className="text-3xl font-bold text-[#f6c76d] mb-4">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.text}</p>
                </Motion.div>
              ))}
            </div>
          </div>
          <div className="mt-12 p-10 rounded-[3rem] bg-gradient-to-r from-[#f6c76d]/10 to-transparent border border-[#f6c76d]/20 backdrop-blur-sm">
              <p className="text-xl text-white/80 leading-relaxed italic text-center">
                Accountability is not an afterthought at BISF - it is built into the architecture. Every investor can see exactly where each portfolio company sits.
              </p>
          </div>
        </SectionWrapper>

        {/* SECTION: INVESTMENT & EXIT */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-[4rem] overflow-hidden border border-white/10">
            <div className="p-12 md:p-16 bg-[#02040a] space-y-8">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Investment Overview</h2>
                <p className="text-white/50 leading-relaxed text-lg">Ambiguity is the enemy of trust. Every financial aspect is governed with precision.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-white/5 rounded-3xl">
                  <div className="text-4xl font-black text-[#f6c76d]">₹10L</div>
                  <div className="text-xs uppercase tracking-widest opacity-40 mt-2">Amount</div>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl">
                  <div className="text-4xl font-black text-[#f6c76d]">8–12%</div>
                  <div className="text-xs uppercase tracking-widest opacity-40 mt-2">Annual Returns</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <h4 className="text-[#f6c76d] font-bold uppercase text-sm mb-2">Structure & Terms</h4>
                  <p className="text-white/40 group-hover:text-white/80 transition-colors">Structured participation - not a loan. A formal, documented investment with defined governance.</p>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-16 bg-white/[0.02] backdrop-blur-xl space-y-8">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Exit Strategy</h2>
                <p className="text-white/50 leading-relaxed text-lg">The exit is not an afterthought—it is part of the original design.</p>
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/40 uppercase text-xs tracking-widest">Exit Window</span>
                  <span className="text-2xl font-bold">~12 Months</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/40 uppercase text-xs tracking-widest">Buyback Range</span>
                  <span className="text-2xl font-bold text-[#f6c76d]">₹15L–₹25L</span>
                </div>
              </div>

              <p className="text-sm text-white/30 italic">
                Partners who wish to stay invested beyond the initial window are welcomed to do so. The ecosystem is built for long-term wealth compounding.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION: GROWTH POTENTIAL - UPDATED WITH HIGH ENERGY ANIMATIONS */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-8"
            >
               <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
                Growth <br />
                <span className="text-[#f6c76d] inline-block">
                  Potential
                  <Motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-2 bg-[#f6c76d] mt-2" 
                  />
                </span>
               </h2>
               <p className="text-white/60 text-xl font-light leading-relaxed">
                Structured returns are just the beginning. The underlying value grows in a way dividends alone can never capture.
               </p>
               
               <div className="space-y-6">
                 {["Early-stage positioning", "High scalability model", "Multiple revenue streams", "Compounding network effects"].map((item, i) => (
                   <Motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-4 text-white/80 group cursor-default"
                   >
                     <div className="h-2 w-2 rounded-full bg-[#f6c76d] shadow-[0_0_10px_rgba(246,199,109,0.5)] group-hover:scale-150 transition-transform" /> 
                     <span className="text-lg font-medium group-hover:text-[#f6c76d] transition-colors">{item}</span>
                   </Motion.div>
                 ))}
               </div>
            </Motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
               <Motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: -5, 
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square bg-white/5 rounded-[3.5rem] p-12 flex flex-col justify-between border border-white/10 backdrop-blur-md group overflow-hidden relative"
               >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm tracking-[0.5em] text-[#f6c76d] uppercase font-bold">Valuation Floor</span>
                  <div className="text-7xl font-black uppercase tracking-tighter">
                    ₹<RollingNumber value="30" suffix="L" />
                  </div>
                  <p className="text-white/40 uppercase text-xs tracking-widest font-medium">Long-term Projection</p>
               </Motion.div>

               <Motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5, 
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(246,199,109,0.2)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square bg-[#f6c76d] text-black rounded-[3.5rem] p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
               >
                  <Motion.div 
                    animate={{ 
                      x: ["-100%", "200%"], 
                      opacity: [0, 0.3, 0] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12"
                  />
                  <span className="text-sm tracking-[0.5em] uppercase opacity-60 font-bold">Valuation Ceiling</span>
                  <div className="text-7xl font-black uppercase tracking-tighter">
                    ₹<RollingNumber value="1" suffix="Cr" />
                  </div>
                  <p className="text-black/60 uppercase text-xs tracking-widest font-bold">Targeted Milestone</p>
               </Motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION: BENEFITS & PRIVILEGES */}
        <SectionWrapper>
          <div className="mb-12">
             <h2 className="text-4xl md:text-6xl font-black text-center uppercase tracking-widest opacity-20">Investor Foundations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Motion.div 
                key={i} 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl backdrop-blur-md"
              >
                <h4 className="text-[#f6c76d] font-bold mb-4 uppercase tracking-tighter">{b.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{b.text}</p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-20">
             <div className="flex flex-col items-center mb-12">
                <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-[#f6c76d] mb-8" />
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Exclusive Privileges</h2>
             </div>

             <div className="grid lg:grid-cols-3 gap-12">
               {privileges.map((p, i) => (
                 <div key={i} className="relative group">
                    <div className="text-6xl font-black mb-6 opacity-10 group-hover:opacity-100 transition-opacity text-[#f6c76d]">{p.val}</div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{p.title}</h3>
                    <p className="text-white/50 leading-relaxed">{p.text}</p>
                 </div>
               ))}
             </div>

             <div className="mt-24 text-center">
                <Motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-block p-12 border border-[#f6c76d]/20 rounded-[4rem] bg-gradient-to-t from-[#f6c76d]/5 to-transparent backdrop-blur-sm"
                >
                   <p className="text-3xl md:text-5xl font-light italic tracking-tight text-white/80">
                    “We invest in you as much as <br /> you <span className="text-[#f6c76d] font-bold">invest in us.</span>”
                   </p>
                </Motion.div>
             </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
