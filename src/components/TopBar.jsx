export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-navy via-primary to-navy text-white py-3 px-4 text-center text-xs sm:text-sm sticky top-0 z-50 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        <p className="font-medium">
          <span className="hidden sm:inline">We offer </span>
          <span className="font-bold text-accent">Special Prices</span> for Bulk Orders
          <span className="hidden sm:inline"> — Contact us:</span>
          <span className="inline sm:hidden"> at </span>
          {' '}
          <a
            href="mailto:sales@smartgentrading.com"
            className="underline font-bold hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            sales@smartgentrading.com
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </p>
      </div>
    </div>
  )
}
