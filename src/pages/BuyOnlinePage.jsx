import { useState, useEffect } from 'react'

const STORE = 'store_01JCEM1TPQ6PPMFKGVEACB57Z8'
const BASE = `https://api-ecommerce.hostinger.com/store/${STORE}`

function toDateParam() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, '.000Z')
}

export default function BuyOnlinePage() {
  const [collections, setCollections] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [offset, setOffset] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const limit = 6

  useEffect(() => {
    let cancelled = false
    async function fetchCollections() {
      try {
        const res = await fetch(`${BASE}/collections`)
        const data = await res.json()
        if (!cancelled) setCollections(data.collections || [])
      } catch (e) {
        if (!cancelled) setError('Could not load categories.')
      }
    }
    fetchCollections()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    async function fetchProducts() {
      try {
        const url = `${BASE}/products?offset=${offset}&limit=${limit}&to_date=${encodeURIComponent(toDateParam())}`
        const res = await fetch(url)
        const data = await res.json()
        if (!cancelled) {
          setProducts(data.products || [])
          setTotalCount(data.count != null ? data.count : 0)
        }
      } catch (e) {
        if (!cancelled) setError('Could not load products.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchProducts()
    return () => { cancelled = true }
  }, [offset])

  return (
    <main className="py-16 lg:py-24 bg-gray-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-2">Buy Online</h1>
        <p className="text-gray-600 mb-8">Products from Smart Generation Trading store.</p>

        {collections.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-navy mb-4">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {collections.map((c) => (
                <span key={c.id} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                  {c.title}
                </span>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-navy">Products</h2>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                disabled={offset <= 0}
                onClick={() => setOffset((o) => Math.max(0, o - limit))}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {Math.floor(offset / limit) + 1} ({totalCount} total)
              </span>
              <button
                type="button"
                disabled={offset + limit >= totalCount}
                onClick={() => setOffset((o) => o + limit)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>

          {error && <p className="text-red-600 py-4">{error}</p>}
          {loading && <p className="text-gray-500 py-8">Loading products…</p>}
          {!loading && !error && products.length === 0 && (
            <p className="text-gray-500 py-8">No products found.</p>
          )}
          {!loading && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => {
                const img = p.thumbnail || (p.images?.[0]?.url) || ''
                const price = p.variants?.[0]?.prices?.[0]
                  ? `${p.variants[0].prices[0].currency?.symbol || 'SR'} ${(p.variants[0].prices[0].amount / 100).toFixed(2)}`
                  : 'Price on request'
                return (
                  <div key={p.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
                    <div className="aspect-square bg-gray-100">
                      {img ? (
                        <img src={img} alt={p.title || 'Product'} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <span className="text-4xl">📦</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-navy line-clamp-2">{p.title || 'Product'}</h3>
                      <p className="text-primary font-medium mt-1">{price}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
