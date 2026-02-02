import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/generated-m7VwQ5GMgyc3b7gp.png"
          alt="SmartGen - Construction materials"
          className="w-full h-full object-cover bg-navy"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect fill="#1a2a4b" width="1200" height="800"/><text x="50%" y="50%" fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="24" text-anchor="middle" dy=".3em">SmartGen</text></svg>')
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Professional Support
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                Reliable Construction Solutions
                <span className="block text-accent mt-2 animate-pulse">For Every Project</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                Leading supplier of thermal insulations, duct accessories, and construction materials in Riyadh. From industrial sites to commercial complexes, we ensure quality and timely delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-primary-light transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Get a Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:sales@smartgentrading.com"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 hover:border-white/50 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Sales
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-white/20" />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Trusted by 500+ clients</p>
                <p className="text-gray-300 text-xs">Contractors & developers across Saudi Arabia</p>
              </div>
            </div>
          </div>

          {/* Right side image/card for desktop */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 backdrop-blur">
              <img
                src="/images/home/generated-m7VwQ5GMgyc3b7gp.png"
                alt="SmartGen products"
                className="w-full h-96 object-cover bg-navy"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-primary/95 backdrop-blur-sm text-white px-6 py-4 rounded-2xl shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">Premium Solutions</p>
                  <p className="text-lg font-bold">Thermal & HVAC Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  )
}
