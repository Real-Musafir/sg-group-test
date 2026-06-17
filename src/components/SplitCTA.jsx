import { useScrollAnimation } from '../hooks/useScrollAnimation'

function WorkMockup() {
  const jobs = ['Remote Developer', 'UI/UX Designer', 'Content Writer']

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Search */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
        <p className="text-white/70 text-xs font-medium mb-2">Find Your Next Role</p>
        <div className="flex gap-2">
          <div className="flex-1 bg-white/20 rounded-xl px-3 py-2.5 text-xs text-white/60">
            Job title...
          </div>
          <button className="bg-sky-400 hover:bg-sky-500 transition-colors rounded-xl px-4 py-2.5 text-xs text-white font-semibold">
            Go
          </button>
        </div>
      </div>

      {/* Job listings */}
      <div className="space-y-2.5">
        {jobs.map((job) => (
          <div
            key={job}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between hover:bg-white/15 transition-colors"
          >
            <div>
              <p className="text-white text-sm font-medium">{job}</p>
              <p className="text-white/50 text-xs">Worldwide • Remote</p>
            </div>
            <button className="text-xs bg-white/20 hover:bg-white/30 transition-colors text-white px-3 py-1.5 rounded-full font-medium">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SplitCTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Call to action"
    >
      <div className="grid md:grid-cols-2">
        {/* Dark left */}
        <div className="bg-navy py-20 px-8 flex items-center justify-center">
          <div className="text-center w-full">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
              Let's Find Work
            </h2>
            <WorkMockup />
          </div>
        </div>

        {/* White right */}
        <div className="bg-white py-20 px-8 flex items-center justify-center">
          <div className="max-w-xs">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Help is only a few clicks away!
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Get started and find great global opportunities. Connect with amazing
              talent from around the world — all for free.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-sky-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-sky-600 transition-all hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-0.5 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
