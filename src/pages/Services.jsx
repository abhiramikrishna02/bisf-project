import { motion as Motion } from "framer-motion";

const solution = [
  {
    title: "Strategy",
    text: "Market analysis, business model architecture, competitive positioning, and long-term growth planning.",
  },
  {
    title: "Execution",
    text: "Hands-on operational support — from team building to product development to customer acquisition.",
  },
  {
    title: "Capital Access",
    text: "Structured pathways to investor capital at the right stage, on terms that protect both founders and backers.",
  },
  {
    title: "Growth Acceleration",
    text: "A curated network of partners, mentors, and industry connections that compress the timeline to scale.",
  },
];

const approach = [
  {
    no: "01",
    title: "Identify",
    text: "Find high-potential founders with the right fundamentals and the right hunger.",
  },
  {
    no: "02",
    title: "Support",
    text: "Provide execution and operational scaffolding to turn ideas into traction.",
  },
  {
    no: "03",
    title: "Scale",
    text: "Deploy resources, networks, and capital to accelerate proven models.",
  },
  {
    no: "04",
    title: "Value",
    text: "Create structured investor returns through disciplined, transparent growth.",
  },
];

const investmentCards = [
  ["₹10L", "Investment Amount"],
  ["8–12%", "Targeted Annual Returns"],
  ["~12 months", "Planned Exit Window"],
];

const growthCards = [
  ["₹30L", "Valuation Floor (Long-Term)"],
  ["₹1Cr", "Valuation Ceiling (Long-Term)"],
  ["Multi", "Revenue Streams"],
];

const benefits = [
  {
    title: "Legal Agreement",
    text: "A formally drafted, legally binding investment agreement that protects your rights, defines your returns, and governs exit terms.",
  },
  {
    title: "Share Certificate",
    text: "An official certificate documenting your ownership stake in the BISF ecosystem — your proof of participation.",
  },
  {
    title: "Complete Onboarding Kit",
    text: "A premium welcome package delivered to you — covering your UIN, documentation, and everything you need to start your journey.",
  },
  {
    title: "Transparent Reporting System",
    text: "Regular, structured updates on ecosystem performance, fund deployment, and portfolio progress. You are always informed.",
  },
];

const privileges = [
  {
    title: "X9 Concierge Membership",
    text: "Valued at ₹3,00,000 — X9 Concierge offers priority lifestyle, travel, and business services reserved for BISF partners.",
  },
  {
    title: "Health Insurance Coverage",
    text: "Comprehensive health cover up to ₹50,00,000 for you and your family. Your wellbeing is part of the partnership.",
  },
  {
    title: "X9 Club Access",
    text: "Exclusive entry into the X9 Club network — events, connections, and curated experiences for high-net-worth professionals.",
  },
];

export default function Services() {
  return (
    <div className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            PAGE 6 · OUR SOLUTION
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
            One Ecosystem. Every Tool a Startup Needs to Win.
          </h1>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            Building a startup is hard enough. Doing it without the right
            infrastructure is nearly impossible. BISF provides a fully integrated
            startup ecosystem that removes the barriers between potential and
            performance.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {solution.map((item, index) => (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[#0a1023] p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </Motion.div>
            ))}
          </div>

          <p className="mt-6 leading-7 text-white/70">
            This is not a menu of services. It is a single, integrated model —
            designed to take a founder from early-stage uncertainty to
            investable, scalable business in the shortest responsible timeframe.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            PAGE 7 · OUR APPROACH
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            How We Turn Potential Into Scalable Value.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            The BISF approach is sequential, deliberate, and accountable. We
            don&apos;t move to the next step until the current one is solid.
            Every founder in our ecosystem goes through the same four-stage
            framework — because we know it works.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {approach.map((item) => (
              <div
                key={item.no}
                className="rounded-3xl border border-white/10 bg-[#0a1023] p-6"
              >
                <div className="text-2xl font-semibold text-[#f6c76d]">
                  {item.no}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-7 text-white/70">
            This is not theory. Every founder we back is tracked against this
            framework. Every investor we partner with can see exactly where each
            portfolio company sits within this journey. Accountability is not an
            afterthought at BISF — it is built into the architecture.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              PAGE 8 · INVESTMENT OVERVIEW
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Your Investment. Clearly Structured.
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              At BISF, we believe that ambiguity is the enemy of trust. Every
              financial aspect of your partnership is documented, communicated,
              and governed with precision. Here is exactly what your investment
              looks like:
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {investmentCards.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-[#0a1023] p-5 text-center"
                >
                  <div className="text-2xl font-semibold text-[#f6c76d]">
                    {value}
                  </div>
                  <div className="mt-2 text-sm text-white/70">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 leading-7 text-white/75">
              <p>
                Structure &amp; Terms. Your participation is structured as a
                formal investment with full legal documentation, a clear timeline,
                and defined return targets. This is not a speculative play — it is
                a governed, transparent financial participation in a high-conviction
                ecosystem.
              </p>
              <p>
                <strong>Investment Type</strong>
                <br />
                Structured participation — not a loan, not a donation. A formal,
                documented investment with defined governance.
              </p>
              <p>
                <strong>Return Target</strong>
                <br />
                8% to 12% per annum (indicative, targeted). Returns are tied to
                ecosystem performance and reported transparently.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              PAGE 9 · EXIT STRATEGY
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              You Always Have a Way Out. A Planned One.
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              One of the most overlooked aspects of any investment is the exit.
              At BISF, the exit is not an afterthought — it is part of the
              original design. Before you invest a single rupee, you know exactly
              how and when you can exit, and what you can expect when you do.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["~12", "Months to Exit Window"],
                ["₹15L–₹25L", "Indicative Buyback Range"],
                ["₹5–15L", "Indicative Upside on ₹10L Entry"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-[#0a1023] p-5 text-center"
                >
                  <div className="text-2xl font-semibold text-[#f6c76d]">
                    {value}
                  </div>
                  <div className="mt-2 text-sm text-white/70">{label}</div>
                </div>
              ))}
            </div>

            <p className="mt-6 leading-7 text-white/75">
              Structured Buyback Mechanism. At approximately 12 months, BISF
              initiates a structured buyback process. Partners who wish to exit
              receive a buyback at an indicative range of ₹15,00,000 to
              ₹25,00,000 on a ₹10,00,000 entry — representing a meaningful premium
              on invested capital.
            </p>
            <p className="mt-4 leading-7 text-white/75">
              Partners who wish to stay invested beyond the initial window are
              welcomed to do so. The BISF ecosystem is designed for both short-term
              structured returns and long-term wealth compounding.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              PAGE 10 · GROWTH POTENTIAL
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              The Bigger Picture: Compounding Value in a Growing Ecosystem.
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              The structured returns are just the beginning. As the BISF portfolio
              matures — as our startups cross inflection points, as our ecosystem
              deepens — the underlying value of your participation grows in a way
              that dividends alone can never capture.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {growthCards.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-[#0a1023] p-5 text-center"
                >
                  <div className="text-2xl font-semibold text-[#f6c76d]">
                    {value}
                  </div>
                  <div className="mt-2 text-sm text-white/70">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 leading-7 text-white/75">
              <p>Why This Model Scales</p>
              <p>› Early-stage positioning — we enter before valuations reflect the full potential.</p>
              <p>› High scalability model — the ecosystem serves multiple startups simultaneously, amplifying impact.</p>
              <p>› Multiple revenue streams — across consulting, equity, and structured products.</p>
              <p>› Compounding network effects — each successful startup strengthens the BISF brand and deal pipeline.</p>
            </div>
            <p className="mt-4 leading-7 text-white/75">
              This is not a single-bet investment. It is a stake in a maturing
              ecosystem that is built to deliver value across cycles, across
              companies, and across time.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              PAGE 11 · INVESTOR BENEFITS
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              What You Receive When You Join BISF.
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              From the moment your investment is formalized, BISF ensures you
              have everything you need to feel confident, informed, and valued.
              These are not perks — they are foundations of a professional
              investment relationship.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0a1023] p-5"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/75">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            PAGE 12 · EXCLUSIVE PRIVILEGES
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Membership in Something Greater Than an Investment.
          </h2>
          <p className="mt-5 leading-8 text-white/75">
            BISF partners don&apos;t just receive financial returns. They gain
            access to an exclusive ecosystem of privileges, curated for
            individuals who operate at the highest levels of ambition. These
            privileges are not available through any other channel — they are
            exclusive to BISF partners.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {privileges.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0a1023] p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-7 text-white/75">
            These privileges exist because BISF believes that the best investment
            relationships are holistic ones. Your partnership with us should
            enrich every dimension of your life — not just your portfolio.
          </p>
          <p className="mt-4 font-medium">
            &quot;We invest in you as much as you invest in us.&quot;
          </p>
        </section>
      </div>
    </div>
  );
}
