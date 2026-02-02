import EmergencyContact from '../components/EmergencyContact'
import { contactImages, pageImageFolders } from '../data/pageImages'

const folder = pageImageFolders.contact
const images = contactImages.filter((f) => f !== 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg')

export default function ContactPage() {
  return (
    <>
      <EmergencyContact />
      
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy mb-6">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to support your next project. Reach out for product inquiries, quotes, or more information about our services.
            </p>
          </div>

          {/* Contact Info and Images Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
                <h2 className="text-2xl font-extrabold text-navy mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-2 text-lg">Email Address</h3>
                      <a
                        href="mailto:sales@smartgentrading.com"
                        className="text-primary hover:text-accent transition-colors font-semibold text-base break-all"
                      >
                        sales@smartgentrading.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-2 text-lg">Our Location</h3>
                      <p className="text-gray-600 text-base">Riyadh, Saudi Arabia</p>
                      <p className="text-gray-500 text-sm mt-1">Serving all of KSA</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-2 text-lg">Business Hours</h3>
                      <p className="text-gray-600 text-base">24/7 Support Available</p>
                      <p className="text-gray-500 text-sm mt-1">Quick response for urgent orders</p>
                    </div>
                  </div>
                </div>

                {/* Special Pricing Banner */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                    <h3 className="font-bold text-navy mb-3 flex items-center gap-2 text-lg">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                      </svg>
                      Special Pricing for Bulk Orders
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      We offer competitive prices for bulk purchases. Send us your inquiry to get a custom quote tailored to your project needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            {folder && images.length > 0 && (
              <div className="space-y-6">
                {images.map((filename, idx) => (
                  <div 
                    key={filename} 
                    className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white hover:shadow-2xl transition-all hover:-translate-y-1 transform duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <img
                      src={`/${folder}/${filename}`}
                      alt="Smart Generation Trading - Contact Us"
                      className="w-full h-80 lg:h-96 object-cover bg-gray-100"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#f3f4f6" width="400" height="300"/><text x="50%" y="50%" fill="#9ca3af" font-family="sans-serif" font-size="16" text-anchor="middle" dy=".3em">Contact Image</text></svg>')
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
