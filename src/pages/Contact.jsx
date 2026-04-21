export default function Contact() {
  return (
    <div className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            PAGE 13 · WHY BISF?
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
            Five Reasons Discerning Investors Choose BISF.
          </h1>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            You have choices. There are thousands of investment platforms, funds,
            and opportunities competing for your capital. Here is why the most
            thoughtful investors consistently choose BISF:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "iQue Global Backing",
                text: "BISF is a venture by iQue Global — a credible, established ecosystem with a track record in venture building and strategic investment.",
              },
              {
                title: "Curated Startup Pipeline",
                text: "We don't back every idea. Our rigorous selection process ensures investors are exposed only to startups with genuine high-growth potential.",
              },
              {
                title: "Execution-First Model",
                text: "Unlike platforms that pitch and disappear, BISF stays operational — working inside the business until scale is achieved.",
              },
              {
                title: "Defined Entry & Exit Structure",
                text: "Every investment has a clear entry point, a defined exit pathway, and transparent terms. No guesswork. No surprises.",
              },
              {
                title: "Strong Scalability Potential",
                text: "The BISF model is designed to grow — across startups, across investors, and across value milestones. You are joining something built to scale.",
              },
              {
                title: "Human-First Philosophy",
                text: "We treat investors as partners, not sources of capital. Your experience, your confidence, and your returns are all part of the same commitment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0a1023] p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            PAGE 14 · WHO SHOULD INVEST?
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            This Opportunity is Built for People Who Think Differently.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            BISF is not for everyone — and that is by design. Our model is built
            for a specific kind of investor: one who values structure over
            speculation, partnership over passivity, and long-term value over
            short-term noise.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "High Net Worth Individuals (HNIs)",
                text: "Investors seeking meaningful diversification into India's startup economy with a structured, governed framework.",
              },
              {
                title: "First-Time Startup Investors",
                text: "Individuals who want startup exposure without navigating it alone — BISF provides the structure and guidance to invest with confidence.",
              },
              {
                title: "Business Professionals",
                text: "Senior professionals and entrepreneurs who understand that the startup ecosystem is where India's next wealth creation cycle is happening.",
              },
              {
                title: "Strategic Ecosystem Partners",
                text: "Individuals who want to do more than invest — who want to be part of building, mentoring, and growing the next wave of Indian startups.",
              },
            ].map((item) => (
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
            If you are the kind of person who asks the right questions, reads
            the fine print, and believes in the power of structured ambition —
            you are exactly who BISF was built for.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            PAGE 15 · RISK &amp; TRANSPARENCY · IMPORTANT
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            We Believe in Complete Honesty. Every Time.
          </h2>
          <div className="mt-6 space-y-4 leading-8 text-white/75">
            <p>
              At BISF, transparency is not a legal obligation — it is a core
              value. We believe that the strongest investment relationships are
              built on honest communication, especially about risk. This page
              exists not to discourage you, but to ensure that your decision to
              invest with BISF is made with complete information.
            </p>
            <p>
              We share these disclosures not because we lack confidence in our
              model — but because we respect yours. The greatest gift we can
              give a potential partner is clarity. BISF earns your trust through
              honesty, not hype.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-[#f6c76d]/20 bg-[#f6c76d]/10 p-6">
            <p className="font-medium">
              &quot;An informed investor is the best partner we could ask for.&quot;
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#0a1023] p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            PAGE 16 · YOUR INVITATION
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            BISF is not just an investment.
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-white/75">
            It is an opportunity to build, empower, and participate in India&apos;s
            growth story.
          </p>
          <p className="mt-3 text-lg leading-8 text-white/75">
            Join us in creating the next wave of innovation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Build Businesses",
                text: "Every rupee you invest powers a real founder building a real company. Your capital creates jobs, products, and futures.",
              },
              {
                title: "Empower Entrepreneurs",
                text: "You become part of the support system that gives India's boldest founders the chance they deserve.",
              },
              {
                title: "Participate in India's Story",
                text: "This decade belongs to India. Be part of the investment infrastructure that makes it happen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[#050816] p-6">
            <p className="text-white/80">
              To claim your position as a BISF Partner, reach us today.
            </p>
            <div className="mt-4 space-y-2 text-lg">
              <div>+91 9035354833</div>
              <div>www.bisf-india.com</div>
            </div>
            <div className="mt-6 text-white/60">
              BISF — Bharat Innovation &amp; Startup Facilitator · A Venture by iQue Global
            </div>
            <div className="mt-2 text-white/45">
              Registered under the Ministry of Corporate Affairs, Government of India
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}