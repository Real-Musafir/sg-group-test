import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FREE_FEATURES = [
  'Unlimited Job Postings',
  'Instant Job Approval',
  'Access to Global Candidates',
  'Basic Profile Creation',
  'Community Support',
]

const PREMIUM_FEATURES = [
  'Everything in Free',
  'Priority Job Listings',
  'Featured Employer Badge',
  'Advanced Analytics',
  'Video Profile Showcase',
  'Priority 24/7 Support',
]

function PlanCard({ name, price, features, highlight = false, badge = false }) {
  return (
    <div
      className={`relative rounded-2xl p-7 flex flex-col transition-transform hover:-translate-y-1 duration-300 ${
        highlight
          ? 'bg-sky-500 shadow-2xl shadow-sky-500/40 scale-[1.03]'
          : 'bg-white/10 backdrop-blur-sm border border-white/20'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <img src="/assets/premium-tag.png" alt="Premium" className="h-8" loading="lazy" />
        </div>
      )}

      <div className={badge ? 'mt-3' : ''}>
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-2 ${
            highlight ? 'text-sky-100' : 'text-white/60'
          }`}
        >
          {name}
        </p>
        <div className="flex items-baseline gap-1 mb-6">
          <span className={`text-4xl font-extrabold ${highlight ? 'text-white' : 'text-white'}`}>
            {price}
          </span>
          {price !== 'Free' && (
            <span className={`text-sm ${highlight ? 'text-sky-100' : 'text-white/50'}`}>/month</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8" role="list">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                highlight ? 'bg-white text-sky-500' : 'bg-white/20 text-white'
              }`}
              aria-hidden="true"
            >
              ✓
            </span>
            <span className={highlight ? 'text-white' : 'text-white/75'}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all active:scale-95 ${
          highlight
            ? 'bg-white text-sky-600 hover:bg-sky-50 hover:shadow-lg'
            : 'border border-white/40 text-white hover:bg-white/10'
        }`}
      >
        Get Started
      </button>
    </div>
  )
}

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="bg-navy py-20 lg:py-28" aria-labelledby="pricing-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-14">
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Help Is One Click Away
            </h2>
            <p className="text-white/50 max-w-md mx-auto">
              Choose the plan that works for you. Start free and upgrade any time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start max-w-2xl mx-auto">
            <PlanCard name="Free" price="Free" features={FREE_FEATURES} />
            <PlanCard name="Premium" price="$79.99" features={PREMIUM_FEATURES} highlight badge />
          </div>
        </div>
      </div>
    </section>
  )
}
