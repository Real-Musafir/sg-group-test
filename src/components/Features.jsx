function Pill({ children }) {
  return (
    <span className="inline-flex items-center bg-pill text-royal text-[13px] font-semibold px-4 py-1.5 rounded-full mb-6">
      {children}
    </span>
  )
}

function Heading({ children }) {
  return (
    <h2 className="text-ink font-semibold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] mb-5 max-w-md">
      {children}
    </h2>
  )
}

function Body({ children }) {
  return <p className="text-body text-base sm:text-lg leading-relaxed max-w-md">{children}</p>
}

export default function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 lg:py-24 space-y-24 lg:space-y-32">
        {/* Feature 1 — text left, mockup right */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Pill>Global Reach</Pill>
            <Heading>The First Fully Global Job Board, Anywhere, Ever</Heading>
            <Body>
              RemoteRecruit connects candidates with opportunities around the world.
              With today&rsquo;s remote-first workforce, you need to be able to find the
              best jobs and the best people for them, wherever they may be.
            </Body>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/mockup-jobboard.png"
              alt="RemoteRecruit job board dashboard with developer profiles"
              className="w-full max-w-[540px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Feature 2 — mockup left, text right */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <img
              src="/assets/mockup-premium.png"
              alt="Premium membership tier with upcoming payment details"
              className="w-full max-w-[460px]"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <Pill>Actually Fee Free</Pill>
            <Heading>Fee-Free Forever</Heading>
            <Body>
              We don&rsquo;t charge you fees and we don&rsquo;t put up paywalls. We&rsquo;re the bridge
              that connects job opportunities with the best candidates, with no
              middleman involved.
            </Body>
          </div>
        </div>

        {/* Feature 3 — text left, mockup right */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Pill>Custom Profile</Pill>
            <Heading>Showcase Your Talents</Heading>
            <Body>
              Personalize your profile with everything that makes you unique. Add an
              introductory video and other media for a personal touch that stands out
              to employers and candidates.
            </Body>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/mockup-profile.png"
              alt="Talent profile with completed jobs, client feedback and skill tags"
              className="w-full max-w-[560px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
