import { useRef } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
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

// --- HELPER COMPONENTS ---
const RevealText = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </Motion.div>
    </div>
  );
};

const SectionWrapper = ({ children, className }) => (
  <section className={`relative min-h-screen flex flex-col justify-center py-32 ${className}`}>
    {children}
  </section>
);

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#02040a] text-white selection:bg-[#f6c76d] selection:text-black">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.2], [0, 0.15]) }}
          className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#f6c76d] blur-[150px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 mix-blend-overlay" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* SECTION: OUR SOLUTION */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
            <div className="lg:col-span-8">
              <p className="text-[#f6c76d] font-black tracking-[0.4em] text-sm uppercase mb-6">Our Solution</p>
              <RevealText className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                BUILDING THE <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>INFRASTRUCTURE</span> <br /> OF SUCCESS
              </RevealText>
            </div>
            <div className="lg:col-span-4">
              <Motion.p 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                className="text-xl text-white/50 leading-relaxed italic border-l-2 border-[#f6c76d] pl-6"
              >
                Building a startup is hard enough. Doing it without the right infrastructure is nearly impossible. BISF removes the barriers between potential and performance.
              </Motion.p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.map((item, i) => (
              <Motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-12 h-12 mb-12 rounded-full border border-[#f6c76d]/30 flex items-center justify-center text-[#f6c76d] group-hover:bg-[#f6c76d] group-hover:text-black transition-all">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">{item.text}</p>
              </Motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-white/30 text-sm max-w-2xl mx-auto uppercase tracking-widest">
            This is not a menu of services. It is a single, integrated model designed for the shortest responsible timeframe.
          </p>
        </SectionWrapper>

        {/* SECTION: OUR APPROACH */}
        <SectionWrapper>
          <div className="flex flex-col items-center text-center mb-32">
            <p className="text-[#f6c76d] font-black tracking-[0.4em] text-sm uppercase mb-6">Our Approach</p>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8">Sequential & <br />Accountable</h2>
            <p className="max-w-3xl text-2xl text-white/60 font-light">
              We don’t move to the next step until the current one is solid. Every founder goes through the same four-stage framework—because it works.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {approach.map((step, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#02040a] p-8 border border-white/10 rounded-3xl"
                >
                  <span className="text-6xl font-black text-white/5 block mb-4">{step.no}</span>
                  <h3 className="text-3xl font-bold text-[#f6c76d] mb-4">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.text}</p>
                </Motion.div>
              ))}
            </div>
          </div>
          <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-[#f6c76d]/10 to-transparent border border-[#f6c76d]/20">
             <p className="text-xl text-white/80 leading-relaxed italic text-center">
                Accountability is not an afterthought at BISF - it is built into the architecture. Every investor can see exactly where each portfolio company sits.
             </p>
          </div>
        </SectionWrapper>

        {/* SECTION: INVESTMENT & EXIT (THE SPLIT) */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-[4rem] overflow-hidden border border-white/10">
            {/* Left: Investment */}
            <div className="p-12 md:p-20 bg-[#02040a] space-y-12">
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

            {/* Right: Exit */}
            <div className="p-12 md:p-20 bg-white/[0.02] backdrop-blur-xl space-y-12">
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

        {/* SECTION: GROWTH POTENTIAL */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-8">
               <h2 className="text-6xl font-black uppercase leading-none tracking-tighter">Growth <br /><span className="text-[#f6c76d]">Potential</span></h2>
               <p className="text-white/50 text-lg">Structured returns are just the beginning. The underlying value grows in a way dividends alone can never capture.</p>
               
               <div className="space-y-4">
                 {["Early-stage positioning", "High scalability model", "Multiple revenue streams", "Compounding network effects"].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-white/70">
                     <div className="h-[1px] w-4 bg-[#f6c76d]" /> {item}
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="aspect-square bg-white/5 rounded-[3rem] p-12 flex flex-col justify-between border border-white/10">
                  <span className="text-xs tracking-[0.5em] text-[#f6c76d] uppercase">Valuation Floor</span>
                  <div className="text-7xl font-black uppercase">₹30L</div>
                  <p className="text-white/30 uppercase text-[10px] tracking-widest">Long-term Projection</p>
               </div>
               <div className="aspect-square bg-[#f6c76d] text-black rounded-[3rem] p-12 flex flex-col justify-between">
                  <span className="text-xs tracking-[0.5em] uppercase opacity-60">Valuation Ceiling</span>
                  <div className="text-7xl font-black uppercase">₹1Cr</div>
                  <p className="text-black/40 uppercase text-[10px] tracking-widest">Targeted Milestone</p>
               </div>
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION: BENEFITS & PRIVILEGES (HORIZONTAL) */}
        <SectionWrapper>
          <div className="mb-24">
             <h2 className="text-4xl md:text-6xl font-black text-center uppercase tracking-widest opacity-20">Investor Foundations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Motion.div 
                key={i} 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl"
              >
                <h4 className="text-[#f6c76d] font-bold mb-4 uppercase tracking-tighter">{b.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{b.text}</p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-40">
             <div className="flex flex-col items-center mb-20">
                <div className="h-20 w-[1px] bg-gradient-to-b from-transparent to-[#f6c76d] mb-8" />
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

             <div className="mt-32 text-center">
                <Motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-block p-12 border border-[#f6c76d]/20 rounded-[4rem] bg-gradient-to-t from-[#f6c76d]/5 to-transparent"
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