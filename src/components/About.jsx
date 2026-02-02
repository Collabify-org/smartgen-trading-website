export default function About() {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '15+', label: 'Years Experience' },
    { value: '200+', label: 'Happy Clients' },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy mb-6 leading-tight">
                Welcome to <span className="text-primary">Smart Generation</span> Trading Est.
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A leading supplier of construction materials based in <span className="font-semibold text-navy">Riyadh, Saudi Arabia</span>. With a solid reputation for reliability, quality, and excellence, we specialize in providing a wide range of high-quality construction materials to meet the needs of the growing construction industry in the Kingdom of Saudi Arabia.
              </p>
              <p>
                Founded with a vision to support the nation&apos;s rapid urban development, Smart Generation Trading Est. offers an extensive range of products like Thermal Insulations for Building and HVAC, Duct and Piping Accessories, Adhesives for Flooring, Waterproofing Sealants, Chemical Flushing and Disinfection service.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right video */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="aspect-video bg-navy">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/FLqhjdaRZJE"
                  title="Smart Generation Trading"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
