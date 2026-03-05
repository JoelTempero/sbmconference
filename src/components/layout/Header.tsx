import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigation, images } from '../../data/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On home page: always solid white. On other pages: transparent until scrolled.
  const useSolidBg = isHome || scrolled
  const useBlueText = isHome || scrolled

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        useSolidBg
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-0'
          : 'bg-gradient-to-b from-black/50 to-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={images.logo}
            alt="School Business Managers' Conference 2026"
            className={`transition-all duration-500 drop-shadow-lg ${
              scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navigation.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 font-heading text-lg tracking-wide transition-all duration-300 flex items-center gap-1 relative group ${
                  useBlueText
                    ? location.pathname === item.path
                      ? 'text-primary'
                      : 'text-dark hover:text-primary'
                    : location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-primary scale-x-100'
                      : useBlueText
                        ? 'bg-primary scale-x-0 group-hover:scale-x-100'
                        : 'bg-white scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg min-w-[260px] py-2 border-t-2 border-primary">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-5 py-2.5 text-sm text-dark hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:text-primary transition-all duration-200 hover:pl-7"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors ${
            useBlueText ? 'text-dark' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl overflow-y-auto">
            <div className="p-5 flex justify-between items-center bg-gradient-to-r from-primary to-primary-dark">
              <span className="font-heading text-xl text-white tracking-wide">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 flex flex-col gap-0.5">
              {navigation.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 font-heading text-lg tracking-wide rounded-lg transition-all ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/5'
                        : 'text-dark hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 px-8 text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
