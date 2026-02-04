const items = [
  { icon: 'flask', title: 'Construction Chemicals & Materials', desc: 'Waterproofing solutions for all your construction needs', iconClass: 'bg-blue-100 text-blue-600' },
  { icon: 'fire', title: 'Thermal & Acoustic Insulations', desc: 'Premium insulation materials for optimal energy efficiency', iconClass: 'bg-purple-100 text-purple-600' },
  { icon: 'wind', title: 'HVAC Insulations', desc: 'Complete HVAC solutions for commercial and residential', iconClass: 'bg-green-100 text-green-600' },
  { icon: 'tools', title: 'Duct Accessories', desc: 'High-quality accessories for duct systems', iconClass: 'bg-yellow-100 text-yellow-600' },
  { icon: 'layer-group', title: 'Metallic Cladding/Jacketing', desc: 'Durable aluminum cladding and jacketing solutions', iconClass: 'bg-red-100 text-red-600' },
  { icon: 'tint', title: 'Water Treatment Chemicals', desc: 'Disinfection and odor control solutions', iconClass: 'bg-indigo-100 text-indigo-600' },
]

const iconMap = {
  flask: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  fire: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
  wind: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.242 4.243 3 3 0 004.242-4.243zm0-5.758a3 3 0 10-4.242-4.243 3 3 0 004.242 4.243z',
  tools: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  'layer-group': 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  tint: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
}

import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            What We Supply
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy mb-6">
            Leading Material Supplier
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of premium construction and HVAC materials for your projects
          </p>
        </div>

        {/* Product cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.iconClass} group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconMap[item.icon] || iconMap.flask} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12 lg:mt-16">
          <Link
            to="/buy-online"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            View All Products
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
