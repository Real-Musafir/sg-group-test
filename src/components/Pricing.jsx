function CheckIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-dark flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function CrossIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3">
        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function Feature({ ok, children }) {
  return (
    <li className="flex items-center gap-3 text-[15px]">
      {ok ? <CheckIcon /> : <CrossIcon />}
      <span className={ok ? 'text-ink' : 'text-gray-400'}>{children}</span>
    </li>
  )
}

const FREE = [
  { ok: true, label: '1 Active Job' },
  { ok: true, label: 'Basic List Placement' },
  { ok: false, label: 'Unlimited Job Applicants' },
  { ok: false, label: 'Invite Anyone to Apply to Your Jobs' },
]

const PREMIUM = [
  { ok: true, label: 'Unlimited Job Posts' },
  { ok: true, label: 'Instant Job Post Approval' },
  { ok: true, label: 'Premium List Placement' },
  { ok: true, label: 'Unlimited Job Applicants' },
]

function Card({ children, button }) {
  return (
    <div className="bg-white rounded-[28px] shadow-[0_30px_60px_-20px_rgba(30,62,133,0.25)] p-7 flex flex-col">
      <div className="flex gap-6 mb-7">{children}</div>
      {button}
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 bg-white pt-16 lg:pt-24">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <h2 className="text-center text-ink font-bold text-3xl sm:text-4xl mb-14">
          Help Is One Click Away
        </h2>

        <div className="relative z-20 -mb-36 grid md:grid-cols-2 gap-7 lg:gap-10">
          {/* Free */}
          <Card
            button={
              <button className="w-full py-4 rounded-2xl border border-brand/50 text-royal font-semibold hover:bg-pill/30 transition-colors">
                Get Started
              </button>
            }
          >
            <div className="bg-lav rounded-2xl flex flex-col items-center justify-center px-7 py-8 min-w-[150px]">
              <span className="text-brand font-bold text-3xl leading-none">Free</span>
              <span className="text-body mt-1">Basic</span>
            </div>
            <ul className="flex flex-col justify-center gap-4 flex-1">
              {FREE.map((f) => (
                <Feature key={f.label} ok={f.ok}>
                  {f.label}
                </Feature>
              ))}
            </ul>
          </Card>

          {/* Premium */}
          <Card
            button={
              <button
                className="w-full py-4 rounded-2xl text-white font-semibold transition-all hover:brightness-105 active:scale-[0.99]"
                style={{ background: 'linear-gradient(90deg, #336cae 0%, #234a92 100%)' }}
              >
                Get Started
              </button>
            }
          >
            <div className="bg-lav rounded-2xl flex flex-col items-center justify-center px-7 py-6 min-w-[160px]">
              <img src="/assets/premium-tag.png" alt="Premium" className="h-8 mb-3" />
              <span className="text-brand font-bold text-3xl leading-none">$79.99</span>
              <span className="text-body mt-1">Per Month</span>
            </div>
            <ul className="flex flex-col justify-center gap-4 flex-1">
              {PREMIUM.map((f) => (
                <Feature key={f.label} ok={f.ok}>
                  {f.label}
                </Feature>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
