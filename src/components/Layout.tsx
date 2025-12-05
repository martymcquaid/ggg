import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [dark, setDark] = useState<boolean>(false)
  const [cookieVisible, setCookieVisible] = useState<boolean>(false)
  const [chatOpen, setChatOpen] = useState<boolean>(false)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    } else if (saved === 'light') {
      setDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      // default based on media query (prefer light for previews)
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        setDark(true)
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  // Cookie banner shows once per session unless accepted
  useEffect(() => {
    const seen = localStorage.getItem('cookie-consent')
    if (!seen) {
      setCookieVisible(true)
    }
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setCookieVisible(false)
  }

  return (
    <div className={dark ? 'dark' : ''}>
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200/60 dark:border-slate-700/60">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-extrabold text-blue-600">Apex IT</span>
            <span className="text-sm text-slate-500 hidden sm:inline">Solutions</span>
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-sm hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-sm hover:text-blue-600">Services</Link>
            <Link to="/industries" className="text-sm hover:text-blue-600">Industries</Link>
            <Link to="/pricing" className="text-sm hover:text-blue-600">Pricing</Link>
            <Link to="/about" className="text-sm hover:text-blue-600">About</Link>
            <Link to="/blog" className="text-sm hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-sm hover:text-blue-600">Contact</Link>
            <button aria-label="Toggle dark mode" className="p-2 rounded-full bg-slate-100 dark:bg-slate-700" onClick={toggleDark}>
              {dark ? '🌞' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile nav placeholder (not functional in this minimal setup) */}
      <div className="md:hidden h-4" />

      <main>{children}</main>

      {/* Footer */}
      <Footer />

      {/* Cookie Banner */}
      {cookieVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-700 p-4 md:p-6 flex items-center justify-between gap-4 shadow-lg z-50">
          <div className="text-sm md:text-base text-slate-700 dark:text-slate-100">
            We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={acceptCookies}>Accept</button>
          </div>
        </div>
      )}

      {/* Live chat placeholder */}
      <div className="fixed bottom-6 right-6 z-40">
        <div>
          <button
            onClick={() => setChatOpen((s) => !s)}
            aria-label="Open live chat"
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          >
            💬
          </button>
          {chatOpen && (
            <div className="mt-2 w-72 max-w-xs bg-white dark:bg-slate-800 shadow-lg rounded-xl p-4">
              <div className="font-semibold mb-2">Live Chat</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">We’re online. How can we help you today?</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 pt-12 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold mb-2">Apex IT Solutions</div>
          <p className="text-slate-400 text-sm">Enterprise-grade IT services for modern businesses.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>Managed IT</li>
            <li>Cybersecurity</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Industries</h4>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Retail</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-slate-400">1234 Street Ave, City, Country</p>
          <p className="text-sm text-slate-400">Email: contact@example.com</p>
        </div>
      </div>
      <div className="text-center text-slate-400 text-xs mt-6">© {new Date().getFullYear()} Apex IT Solutions. All rights reserved.</div>
    </footer>
  )
}
