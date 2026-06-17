export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 90% at 75% 0%, #2c5d9a 0%, #244b8e 45%, #1e3e85 100%)',
      }}
    >
      {/* faint decorative rings, top-right */}
      <div
        className="absolute -top-40 right-[-10%] w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-8 pt-44 pb-56 text-center">
        <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight tracking-tight">
          RemoteRecruit&rsquo;s Difference
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-white/85 text-base sm:text-lg leading-relaxed">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to
          businesses that need them. With no paywalls, no fees, and no barriers, there&rsquo;s
          nothing but you, your talents, and the next step in your career.
        </p>
      </div>

      {/* Bottom wave (extracted from comp) */}
      <img
        src="/assets/hero-wave.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full select-none pointer-events-none"
      />
    </section>
  )
}
