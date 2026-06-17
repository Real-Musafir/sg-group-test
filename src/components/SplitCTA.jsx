export default function SplitCTA() {
  return (
    <section
      aria-label="Get started"
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(90% 120% at 15% 20%, #eef1fe 0%, #e6ecfd 45%, #dde4fb 100%)',
      }}
    >
      {/* soft decorative blob, right */}
      <div
        className="absolute top-1/2 right-[-8%] -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)' }}
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-0">
        {/* Dashboard mockup — flush to the left edge */}
        <div className="relative">
          <img
            src="/assets/mockup-dashboard.png"
            alt="RemoteRecruit job search dashboard with filters"
            className="w-full select-none"
            loading="lazy"
          />
        </div>

        {/* Text + CTA */}
        <div className="relative px-6 lg:px-12 pb-16 md:py-24 max-w-xl">
          <p className="text-royal font-semibold text-sm mb-3">Are you ready?</p>
          <h2 className="text-ink font-bold text-4xl sm:text-5xl leading-[1.1] mb-5">
            Help is only a few clicks away!
          </h2>
          <p className="text-body text-lg leading-relaxed mb-9 max-w-sm">
            Click Below to get set up super quickly and find help now!
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center gap-3 bg-[#d3e2f8] hover:bg-[#c7d9f4] transition-colors rounded-full pl-2 pr-7 py-2 group"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white shadow-md transition-transform group-hover:translate-x-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-royal font-semibold">Get Started</span>
          </a>
        </div>
      </div>
    </section>
  )
}
