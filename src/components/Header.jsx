import { useState } from 'react'
import { Link } from 'react-router-dom'

const productItems = [
  { id: 1, label: 'Thermal & Acoustic Insulations' },
  { id: 2, label: 'Duct Accessories' },
  { id: 3, label: 'Vibration Isolators' },
  { id: 4, label: 'Hangers & Supports' },
  { id: 5, label: 'Copper & Fittings' },
  { id: 6, label: 'VAV and Dampers' },
  { id: 7, label: 'ESP and Ecology' },
  { id: 8, label: 'Identification Labels and tags' },
  { id: 9, label: 'Silent Pipes And Fittings' },
  { id: 10, label: 'Decoduct Conduits and Fittings' },
  { id: 11, label: 'Plumping' },
  { id: 12, label: 'Water Proofing Chemicals and Flooring Adhesives' },
  { id: 13, label: 'Water Treatment Chemicals' },
  { id: 14, label: 'Miscellaneous Products' },
  { id: 15, label: 'Air Conditioners' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  const closeDropdown = () => {
    setProductsOpen(false)
  }

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileProductsOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-[42px] md:top-[42px] z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src="/images/home/smartgen-logo-dOqygyGy7QHB2GZQ.jpeg"
              alt="Smart Generation Trading"
              className="h-11 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null
                e.target.style.display = 'none'
              }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-navy hover:text-primary font-semibold transition-colors text-sm xl:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Home</Link>
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-navy hover:text-primary font-semibold transition-colors flex items-center gap-1.5 bg-transparent border-0 cursor-pointer p-0 text-sm xl:text-base"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <svg className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 transition-all duration-200 ${productsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                role="menu"
              >
                <div className="max-h-[400px] overflow-y-auto py-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {productItems.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={closeDropdown}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/service" className="text-navy hover:text-primary font-semibold transition-colors text-sm xl:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Services</Link>
            <Link to="/about" className="text-navy hover:text-primary font-semibold transition-colors text-sm xl:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">About</Link>
            <Link to="/contact" className="text-navy hover:text-primary font-semibold transition-colors text-sm xl:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Contact</Link>
            <Link to="/blog" className="text-navy hover:text-primary font-semibold transition-colors text-sm xl:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Blog</Link>
            <Link to="/buy-online" className="bg-gradient-to-r from-primary to-accent text-white px-5 xl:px-7 py-2.5 rounded-full hover:shadow-lg transition-all font-bold text-sm xl:text-base hover:scale-105 transform">Buy Online</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all text-sm hover:scale-105 transform">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg rounded-b-lg overflow-hidden">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block py-3 text-navy font-medium" onClick={closeMobile}>Home</Link>
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between py-3 text-navy font-medium text-left"
                aria-expanded={mobileProductsOpen}
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="ml-4 mt-1 mb-2 bg-white rounded-b-lg border border-gray-100 shadow-sm overflow-hidden max-h-[300px] overflow-y-auto">
                  {productItems.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={closeMobile}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-bg hover:text-primary transition border-b border-gray-50 last:border-b-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/service" className="block py-3 text-navy font-medium" onClick={closeMobile}>Services</Link>
            <Link to="/about" className="block py-3 text-navy font-medium" onClick={closeMobile}>About</Link>
            <Link to="/contact" className="block py-3 text-navy font-medium" onClick={closeMobile}>Contact</Link>
            <Link to="/blog" className="block py-3 text-navy font-medium" onClick={closeMobile}>Blog</Link>
            <Link to="/buy-online" className="block py-3 bg-primary text-white text-center rounded-lg font-medium" onClick={closeMobile}>Buy Online</Link>
          </div>
        </div>
      )}
    </header>
  )
}
