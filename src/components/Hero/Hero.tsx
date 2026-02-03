export function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Complete Furniture Catalog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          All products from newerafurniture.us - now with expert Next.js architecture and WhatsApp ordering. Browse our extensive collection of premium furniture.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <span className="text-3xl font-bold text-amber-600">20+</span>
            <span className="text-sm text-gray-600 block">Products</span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-amber-600">5</span>
            <span className="text-sm text-gray-600 block">Categories</span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-amber-600">WhatsApp</span>
            <span className="text-sm text-gray-600 block">Order</span>
          </div>
        </div>
      </div>
    </section>
  )
}