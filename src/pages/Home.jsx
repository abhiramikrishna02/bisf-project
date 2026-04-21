import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    title: "Structured Support",
    text: "A founder gets more than funding. BISF brings strategy, operating rhythm, and execution support into one system.",
  },
  {
    title: "Strategic Capital",
    text: "We connect the right capital to the right founder with transparent terms, clear milestones, and long-term alignment.",
  },
  {
    title: "Execution Mentorship",
    text: "Guidance from operators who have built real businesses, with practical support that moves the company forward.",
  },
];

const missionPoints = [
  "Bridge raw ideas into scalable and investable businesses.",
  "Create a founder-first ecosystem where support is structural, not transactional.",
  "Deliver sustainable, transparent value to investors.",
  "Back entrepreneurs with clarity, confidence, and momentum.",
];

const stats = [
  { value: "01", label: "Founder-first systems" },
  { value: "02", label: "Capital alignment" },
  { value: "03", label: "Execution support" },
];

const journey = [
  {
    title: "Discover",
    text: "We identify promising founders and opportunities that fit the BISF ecosystem.",
  },
  {
    title: "Structure",
    text: "We shape the operating plan, investor logic, and execution roadmap around the venture.",
  },
  {
    title: "Scale",
    text: "We stay close as the business grows, helping translate ambition into measurable outcomes.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden">
      <section className="relative isolate min-h-[calc(100vh-5rem)] px-4 py-10 md:px-8 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(246,199,109,0.28),_transparent_62%)] blur-3xl" />
          <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#60a5fa]/20 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#8b5cf6]/15 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0)_0%,rgba(5,8,22,0.35)_60%,rgba(5,8,22,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] opacity-25" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <Motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.34em] text-white/70 backdrop-blur-md"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#f6c76d] shadow-[0_0_18px_rgba(246,199,109,0.75)]" />
              Investor Brochure
            </Motion.div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.5em] text-white/50">
                BISF
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Bharat Innovation &amp; Startup Facilitator
              </h1>
              <p className="max-w-2xl text-lg text-white/75 md:text-2xl">
                A venture by iQue Global designed to empower founders, align
                capital, and build businesses with lasting momentum.
              </p>
              <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                BISF is not a brochure-only concept. It is a premium venture
                ecosystem that blends strategy, capital access, and execution
                support into one focused operating model.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-[#f6c76d] px-6 py-3 text-sm font-semibold text-[#050816] shadow-[0_18px_45px_rgba(246,199,109,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start the conversation
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur-md transition hover:border-white/25 hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((item, index) => (
                <Motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={0.1 + index * 0.08}
                  className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                >
                  <div className="text-2xl font-semibold text-[#f6c76d]">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/72">
                    {item.label}
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={
              reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.98 }
            }
            animate={
              reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(246,199,109,0.22),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.18),_transparent_45%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
              <div className="relative grid gap-5">
                <Motion.div
                  animate={reduceMotion ? {} : { y: [0, -10, 0] }}
                  transition={
                    reduceMotion
                      ? {}
                      : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="rounded-[1.6rem] border border-white/12 bg-[#0a1023]/85 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.34em] text-white/45">
                        Venture OS
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                        Built for founders who want real momentum.
                      </h2>
                    </div>
                    <div className="rounded-full border border-[#f6c76d]/25 bg-[#f6c76d]/10 px-4 py-2 text-xs font-medium text-[#f6c76d]">
                      Live ecosystem
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm text-white/45">Founder support</div>
                      <div className="mt-2 text-xl font-semibold">
                        Strategy + execution
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/68">
                        We help founders move from vision to operational
                        readiness with a clear plan.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm text-white/45">Investor alignment</div>
                      <div className="mt-2 text-xl font-semibold">
                        Governed participation
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/68">
                        The capital model is structured, transparent, and
                        designed for trust.
                      </p>
                    </div>
                  </div>
                </Motion.div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Motion.div
                    whileHover={reduceMotion ? {} : { y: -6, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
                  >
                    <div className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Vision
                    </div>
                    <p className="mt-3 text-lg leading-8 text-white/78">
                      To build the next generation of Indian entrepreneurs
                      through structured support, strategic capital access, and
                      execution-driven mentorship.
                    </p>
                  </Motion.div>

                  <Motion.div
                    whileHover={reduceMotion ? {} : { y: -6, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    className="rounded-[1.5rem] border border-white/10 bg-[#f6c76d]/10 p-5 text-[#fff6e3] backdrop-blur-xl"
                  >
                    <div className="text-xs uppercase tracking-[0.35em] text-[#f6c76d]">
                      Promise
                    </div>
                    <p className="mt-3 text-lg leading-8">
                      We do not just advise. We build alongside founders until
                      the business is ready to scale.
                    </p>
                  </Motion.div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-white/45">
                Three Pillars
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                A sharper system for founder growth.
              </h2>
            </div>
            <p className="max-w-2xl text-white/65">
              The platform is built around a simple idea: support should be
              visible, capital should be structured, and execution should be
              continuous.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((item, index) => (
              <Motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                custom={index * 0.08}
                whileHover={reduceMotion ? {} : { y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 170, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,199,109,0.15),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f6c76d]/20 bg-[#f6c76d]/10 text-[#f6c76d]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.text}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1023]/88 p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.45em] text-white/45">
                How We Build
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                A clear path from idea to scale.
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                BISF is designed to remove friction. Instead of isolated advice,
                founders get an operating flow that compounds clarity, speed,
                and investor confidence.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:w-[52%]">
              {journey.map((item, index) => (
                <Motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={0.05 + index * 0.08}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.35em] text-white/45">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold">
                What We Are Here to Do
              </h3>
              <div className="mt-5 grid gap-4">
                {missionPoints.map((point, index) => (
                  <Motion.div
                    key={point}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={0.05 + index * 0.06}
                    className="rounded-2xl border border-white/10 bg-[#050816]/55 px-5 py-4 text-white/80"
                  >
                    <span className="mr-3 text-[#f6c76d]">›</span>
                    {point}
                  </Motion.div>
                ))}
              </div>
            </div>

            <Motion.div
              whileHover={reduceMotion ? {} : { y: -6 }}
              className="rounded-[1.6rem] border border-[#f6c76d]/20 bg-[linear-gradient(180deg,rgba(246,199,109,0.12),rgba(255,255,255,0.04))] p-6"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-[#f6c76d]">
                Operating principle
              </div>
              <p className="mt-4 text-2xl font-semibold leading-[1.35] text-white">
                We don&apos;t just advise. We build alongside founders.
              </p>
              <p className="mt-4 leading-8 text-white/72">
                Every engagement is designed to create traction, trust, and
                repeatable value. When a founder wins, the ecosystem wins. When
                the ecosystem grows, investors participate in compounding
                upside.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Clarity", "Momentum", "Trust", "Scale"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
