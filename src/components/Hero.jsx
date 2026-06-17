import { useEffect, useState } from 'react'

function HeroMockup() {
  return (
    <div className="relative max-w-sm mx-auto lg:max-w-none">
      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-sky-100 p-5">
        {/* Search row */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-xs text-gray-400 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            Search job title...
          </div>
          <button className="bg-sky-500 text-white rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap hover:bg-sky-600 transition-colors">
            Search
          </button>
        </div>

        {/* Profile card */}
        <div className="bg-sky-50 rounded-xl p-3 flex items-center gap-3 mb-3">
          <img
            src="/assets/profile-image.png"
            alt="Job seeker profile"
            className="w-11 h-11 rounded-full object-cover flex-shrink-0"
            width="44" height="44"
            loading="lazy"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Alex Johnson</p>
            <p className="text-xs text-gray-500">UX Designer</p>
            <div className="flex items-center gap-0.5 mt-0.5" aria-label="Rating: 4.9 out of 5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-400 ml-1">4.9</span>
            </div>
          </div>
          <button className="ml-auto bg-sky-500 text-white text-xs px-3 py-1.5 rounded-full font-medium hover:bg-sky-600 transition-colors flex-shrink-0">
            Hire
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[['2.4K+', 'Jobs'], ['Free', 'Always'], ['Global', 'Reach']].map(([value, label]) => (
            <div key={label} className="bg-gray-50 rounded-xl p-2.5 text-center">
              <p className="text-sm font-bold text-gray-800">{value}</p>
              <p className="text-xs text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg shadow-gray-100 px-3 py-2 flex items-center gap-2">
        <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-xs font-bold flex-shrink-0">✓</span>
        <div>
          <p className="text-xs font-semibold text-gray-700 leading-tight">Job Posted!</p>
          <p className="text-xs text-gray-400 leading-tight">100% Free</p>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg shadow-gray-100 px-3 py-2 flex items-center gap-2">
        <span className="w-7 h-7 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 text-xs font-bold flex-shrink-0">🌍</span>
        <div>
          <p className="text-xs font-semibold text-gray-700 leading-tight">Worldwide</p>
          <p className="text-xs text-gray-400 leading-tight">No barriers</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #e0f2fe 0%, #f0f9ff 55%, #ffffff 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-24 right-0 w-96 h-96 bg-sky-200 rounded-full opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-15 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-36 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              RemoteRecruit's{' '}
              <span className="text-sky-500">Difference</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              RemoteRecruit is connecting the world with access to fair-pay jobs and
              linking businesses that need them. With no paywalls, no fees, and no
              barriers. There's nothing but you, your talents, and the next step in
              your career.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="bg-sky-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-sky-600 transition-all hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-0.5 active:scale-95"
              >
                Get Started Free
              </a>
              <a
                href="#features"
                className="border border-sky-300 text-sky-600 px-7 py-3 rounded-full font-semibold hover:bg-sky-50 transition-all hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Mockup */}
          <div
            className={`transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <HeroMockup />
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,60 C180,10 360,90 540,50 C720,10 900,90 1080,55 C1260,20 1380,70 1440,55 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  )
}
