import { blogImages, pageImageFolders } from '../data/pageImages'

const folder = pageImageFolders.blog

// Sample blog posts - will be replaced with actual content
const blogPosts = [
  {
    id: 1,
    title: 'MEP Material Supply Solutions for Modern Construction',
    excerpt: 'Comprehensive guide to selecting the right MEP materials for your construction projects in Saudi Arabia. Learn about thermal insulation, HVAC accessories, and more.',
    category: 'MEP Solutions',
    date: 'Coming Soon',
    readTime: '5 min read',
    image: folder ? `/images/blog/smartgen-logo-dOqygyGy7QHB2GZQ.jpeg` : null,
  },
  {
    id: 2,
    title: 'Thermal Insulation Best Practices in KSA',
    excerpt: 'Expert insights on thermal insulation materials and installation techniques for optimal energy efficiency in Saudi Arabia\'s climate.',
    category: 'Insulation',
    date: 'Coming Soon',
    readTime: '6 min read',
    image: folder ? `/images/blog/smartgen-logo-dOqygyGy7QHB2GZQ.jpeg` : null,
  },
  {
    id: 3,
    title: 'HVAC System Optimization Tips',
    excerpt: 'Essential tips for maintaining and optimizing HVAC systems in commercial and industrial facilities across Riyadh.',
    category: 'HVAC',
    date: 'Coming Soon',
    readTime: '7 min read',
    image: folder ? `/images/blog/smartgen-logo-dOqygyGy7QHB2GZQ.jpeg` : null,
  },
]

const categories = ['All', 'MEP Solutions', 'Insulation', 'HVAC']

export default function BlogPage() {
  return (
    <main className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy mb-6">
            News & Updates
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest in thermal insulation, HVAC solutions, and construction materials from Smart Generation Trading
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
              Blog Content Coming Soon
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              We're preparing valuable content about MEP materials, thermal insulation, HVAC systems, and construction best practices. Check back soon for expert insights and industry updates.
            </p>
            <a
              href="mailto:sales@smartgentrading.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Updates via Email
            </a>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                category === 'All'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Upcoming Topics Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-navy text-center mb-10">
            Upcoming Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Coming Soon
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-3">
                  Get Notified
                </h3>
                <p className="text-white/90 mb-6">
                  Be the first to know when we publish new articles about MEP materials and construction solutions.
                </p>
                <a
                  href="mailto:sales@smartgentrading.com?subject=Blog Updates Subscription"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 transform"
                >
                  Subscribe via Email
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-navy mb-3">
                Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help with any inquiries about our products, services, or upcoming blog content.
              </p>
              <a
                href="mailto:sales@smartgentrading.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 transform"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
