export default function Contact() {
  return (
    <div className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            Contact Details
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
            Reach BISF
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-white/75">
            Use the details below to get in touch with BISF.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0a1023] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                Phone
              </p>
              <a
                href="tel:+919035354833"
                className="mt-3 block text-2xl font-semibold text-white transition-colors hover:text-[#f6c76d]"
              >
                +91 9035354833
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0a1023] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                Website
              </p>
              <a
                href="https://www.bisf-india.com"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-2xl font-semibold text-white transition-colors hover:text-[#f6c76d]"
              >
                www.bisf-india.com
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[#050816] p-6 text-white/70">
            BISF - Bharat Innovation &amp; Startup Facilitator
          </div>
        </section>
      </div>
    </div>
  );
}
