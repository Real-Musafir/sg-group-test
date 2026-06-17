import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ── Shared sub-components ── */

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
      {children}
    </span>
  )
}

function Check({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-gray-600">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center text-xs font-bold">
        ✓
      </span>
      {children}
    </li>
  )
}

/* ── Feature 1 mockup ── */
function JobBoardMockup() {
  return (
    <div className="relative max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 overflow-hidden">
        {/* Header banner */}
        <div className="h-14 bg-gradient-to-r from-sky-400 to-blue-500 relative">
          <div className="absolute -bottom-7 left-5">
            <img
              src="/assets/profile-image.png"
              alt="Job seeker"
              className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-md"
              width="56" height="56"
              loading="lazy"
            />
          </div>
        </div>

        <div className="pt-10 px-5 pb-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-gray-800 text-base">Alex Johnson</h3>
              <p className="text-sm text-gray-500">Senior UX Designer</p>
              <p className="text-xs text-sky-500 mt-0.5">🌍 Available Worldwide</p>
            </div>
            <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-semibold">
              Available
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {['Figma', 'React', 'UI/UX', 'Branding', 'Webflow'].map((s) => (
              <span key={s} className="bg-sky-50 text-sky-600 text-xs px-2.5 py-1 rounded-lg">
                {s}
              </span>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/assets/paypal.png" alt="PayPal" className="h-5" loading="lazy" />
              <span className="text-xs text-gray-400">PayPal accepted</span>
            </div>
            <span className="text-xs font-semibold text-gray-700">Free – $79.99</span>
          </div>
        </div>
      </div>

      {/* Floating stat */}
      <div className="absolute -right-4 top-6 bg-white rounded-xl shadow-lg shadow-gray-100 px-4 py-2.5 text-center">
        <p className="text-lg font-extrabold text-sky-500">2.4K</p>
        <p className="text-xs text-gray-400">Global Jobs</p>
      </div>
    </div>
  )
}

/* ── Feature 2 mockup ── */
function FeeFreeMockup() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl shadow-gray-100 p-5">
      <div className="flex justify-between items-center mb-5">
        <p className="font-bold text-gray-800">Post a Job</p>
        <span className="bg-green-100 text-green-600 text-xs px-3 py-1.5 rounded-full font-semibold">
          FREE
        </span>
      </div>

      <div className="space-y-3 mb-5">
        {[
          { label: 'Job Title', value: 'Senior Developer' },
          { label: 'Location', value: 'Remote, Worldwide' },
          { label: 'Salary Range', value: '$80,000 – $120,000' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-gray-50 rounded-xl px-3.5 py-3">
            <p className="text-xs text-gray-400 mb-0.5">{label}</p>
            <p className="text-sm font-medium text-gray-700">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-sky-50 rounded-xl p-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400 mb-0.5">Posting Cost</p>
          <p className="text-2xl font-extrabold text-sky-500">$0.00</p>
        </div>
        <button className="bg-sky-500 text-white text-sm px-5 py-2.5 rounded-full font-semibold hover:bg-sky-600 transition-colors active:scale-95">
          Post Job
        </button>
      </div>

      <p className="text-center text-xs text-gray-400 mt-3">
        ✓ No credit card &nbsp;•&nbsp; ✓ Instant activation
      </p>
    </div>
  )
}

/* ── Feature 3 mockup ── */
function TalentMockup() {
  const skills = [
    { name: 'Designer', cls: 'bg-purple-100 text-purple-600' },
    { name: 'Developer', cls: 'bg-sky-100 text-sky-600' },
    { name: 'Writer', cls: 'bg-green-100 text-green-600' },
    { name: 'Marketing', cls: 'bg-orange-100 text-orange-600' },
    { name: 'Video Editor', cls: 'bg-pink-100 text-pink-600' },
    { name: 'Data Analyst', cls: 'bg-yellow-100 text-yellow-600' },
    { name: 'Translator', cls: 'bg-indigo-100 text-indigo-600' },
    { name: 'Animator', cls: 'bg-red-100 text-red-600' },
  ]

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl shadow-gray-100 p-5">
      <div className="flex items-center gap-3 mb-5">
        <img
          src="/assets/profile-image.png"
          alt="Talent profile"
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          width="48" height="48"
          loading="lazy"
        />
        <div>
          <p className="font-bold text-gray-800">Alex Johnson</p>
          <p className="text-xs text-gray-500">Multi-skilled Professional</p>
        </div>
      </div>

      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Skills &amp; Talents
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map(({ name, cls }) => (
          <span
            key={name}
            className={`${cls} text-xs px-3 py-1.5 rounded-full font-medium transition-transform hover:scale-105`}
          >
            {name}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs text-gray-400">Profile Views</span>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-gray-800">1,248</span>
          <span className="text-xs font-medium text-green-500">↑ 12%</span>
        </div>
      </div>
    </div>
  )
}

/* ── Individual feature blocks ── */

function Feature1() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div>
        <Tag>🌍 Global Jobs</Tag>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
          The First Fully Global Job Board, Anywhere, Ever
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          RemoteRecruit provides job opportunities around the world. Today's modern
          workforce deserves to find the best jobs and the best people for them —
          wherever they like.
        </p>
        <ul className="space-y-3 mb-7" role="list">
          <Check>Free to use for Employees</Check>
          <Check>Worldwide Job Listings</Check>
          <Check>Worldwide Applicants</Check>
          <Check>Free Applicants</Check>
        </ul>
        <div className="flex items-center gap-3">
          <img src="/assets/paypal.png" alt="PayPal" className="h-6" loading="lazy" />
          <span className="text-gray-300">|</span>
          <span className="text-sm font-semibold text-gray-600">Free – $79.99</span>
        </div>
      </div>

      <JobBoardMockup />
    </div>
  )
}

function Feature2() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="order-2 md:order-1">
        <FeeFreeMockup />
      </div>
      <div className="order-1 md:order-2">
        <Tag>💰 Hire Free</Tag>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
          Fee-Free Forever
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          RemoteRecruit charges no fees for finding great remote job opportunities.
          We believe the bridge that connects opportunities and the right candidates
          should never cost the jobs away that need it most.
        </p>
        <ul className="space-y-3" role="list">
          <Check>No employer posting fees</Check>
          <Check>No applicant charges</Check>
          <Check>Unlimited job listings</Check>
          <Check>Instant job activation</Check>
        </ul>
      </div>
    </div>
  )
}

function Feature3() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
          Showcase Your Talents
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          RemoteRecruit gives you a unique platform to showcase your skills and
          abilities. Add video introductions and personalised touches to make your
          profile stand out to employers worldwide.
        </p>
        <ul className="space-y-3" role="list">
          <Check>Video profile introductions</Check>
          <Check>Skill tags and categories</Check>
          <Check>Portfolio showcase</Check>
          <Check>Global visibility</Check>
        </ul>
      </div>
      <TalentMockup />
    </div>
  )
}

/* ── Section export ── */
export default function Features() {
  return (
    <section id="features" aria-label="Features">
      <div className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Feature1 />
        </div>
      </div>

      <div className="bg-sky-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Feature2 />
        </div>
      </div>

      <div className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Feature3 />
        </div>
      </div>
    </section>
  )
}
