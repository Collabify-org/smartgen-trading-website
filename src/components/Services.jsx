import { useState } from 'react'

const coreServices = [
  'Comprehensive Routine Inspections',
  'Filter & Coolant Replacement',
  'Oil & Lubrication Services',
  'Belt & Hose Checks',
  'Electrical System Diagnostics',
]

const valueAdd = [
  '24/7 Emergency Support',
  'Genuine OEM Parts',
  'Technical Documentation',
  'Training & On-site Support',
]

export default function Services() {
  const [formData, setFormData] = useState({ name: '', phone: '', serviceType: 'Routine Maintenance', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:sales@smartgentrading.com?subject=Service Request&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.serviceType}\nMessage: ${formData.message}`)}`
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Our Services</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">Preventive Maintenance & Support</h2>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive support services to keep your construction and HVAC systems running at peak performance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {/* Core Services */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl text-navy mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Core Services
                </h3>
                <ul className="space-y-4">
                  {coreServices.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Value Add */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl text-navy mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Value Add
                </h3>
                <ul className="space-y-4">
                  {valueAdd.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="h-fit lg:sticky lg:top-32">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-navy mb-2">Schedule a Service</h3>
                <p className="text-sm text-gray-600">Our team will contact you to confirm your request</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                >
                  <option>Routine Maintenance</option>
                  <option>Inquiry / Quote</option>
                  <option>Bulk Order</option>
                </select>
                <textarea
                  placeholder="Brief Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-bold text-base hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-105 transform"
                >
                  Request Contact
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Trusted by industry leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
