import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg" aria-label="RemoteRecruit home">
            <img src="/assets/small-logo.png" alt="" className="h-8 w-8" width="32" height="32" />
            <span className="text-sky-500 font-extrabold text-xl leading-none">Remote</span>
            <span className="text-gray-800 font-extrabold text-xl leading-none -ml-1">recruit</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-500 hover:text-sky-500 transition-colors text-sm font-medium"
              >
                {label}
              </a>
            ))}
            <button className="text-gray-500 hover:text-sky-500 transition-colors text-sm font-medium">
              Log In
            </button>
            <button className="bg-sky-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-sky-600 transition-all hover:shadow-md hover:shadow-sky-200 active:scale-95">
              Sign Up
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-gray-600 text-sm font-medium py-1"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <button className="text-gray-600 text-sm font-medium py-1 text-left">Log In</button>
          <button className="bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold w-full mt-1">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}
