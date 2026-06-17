import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#1e3e85]/90 backdrop-blur-md shadow-lg shadow-black/10' : ''
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="RemoteRecruit home">
            <img src="/assets/logo.png" alt="RemoteRecruit" className="h-9 w-auto" />
          </a>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button className="text-white/90 hover:text-white transition-colors text-sm font-medium px-2">
              Sign In
            </button>
            <button className="bg-brand text-white px-6 py-2 rounded-full text-sm font-semibold hover:brightness-105 transition-all active:scale-95 shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
