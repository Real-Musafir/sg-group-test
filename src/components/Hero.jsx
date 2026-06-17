export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[480px] md:min-h-[716px]"
      style={{
        background:
          'linear-gradient(180deg, #1e3f84 0%, #244c8e 52%, #2c5896 100%)',
      }}
    >
      {/* faint light circle, center-right (matches comp decoration) */}
      <div
        className="absolute top-[120px] left-1/2 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(195,222,245,0.22) 0%, rgba(195,222,245,0) 60%)' }}
        aria-hidden="true"
      />
      {/* soft glow, upper-left */}
      <div
        className="absolute -top-32 -left-28 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 text-center pt-36 md:pt-[210px] pb-40">
        <h1 className="text-white font-bold text-4xl md:text-[2.9rem] leading-tight tracking-tight">
          RemoteRecruit&rsquo;s Difference
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-white/85 text-base md:text-[17px] leading-relaxed">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to
          businesses that need them. With no paywalls, no fees, and no barriers, there&rsquo;s
          nothing but you, your talents, and the next step in your career.
        </p>
      </div>

      {/* Bottom wave — top edge alpha-fades into the gradient, bottom is fully white */}
      <img
        src="/assets/hero-wave.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full select-none pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0, #000 70px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 70px)',
        }}
      />
    </section>
  )
}
