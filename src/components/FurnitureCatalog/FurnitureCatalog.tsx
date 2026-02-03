import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'
import { Product } from '@/types/product'
import SearchFilter from '../SearchFilter/SearchFilter'

interface FurnitureCatalogProps {
  products: Product[]
}

/**
 * FurnitureCatalog Component
 * Displays complete furniture catalog with 150+ products
 * Features: Search, filtering, pagination, WhatsApp ordering
 */
export const FurnitureCatalog: React.FC<FurnitureCatalogProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCollection, setSelectedCollection] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(20)
  const [isLoading, setIsLoading] = useState(false)

  // Filter products based on search and selections
  useEffect(() => {
    setIsLoading(true)
    
    let filtered = products.filter(product => {
      // Search term filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false
      }
      
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false
      }
      
      // Collection filter
      if (selectedCollection !== 'all' && product.collection !== selectedCollection) {
        return false
      }
      
      return true
    })

    setFilteredProducts(filtered)
    setCurrentPage(1) // Reset to first page when filtering
    setIsLoading(false)
  }, [products, searchTerm, selectedCategory, selectedCollection])

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const displayedProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of catalog
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const categories = ['all', 'sofas', 'sectionals', 'bedroom', 'dining', 'chairs']
  const collections = ['all', 'gia', 'elina', 'diamond', 'destin', 'adriana']

  return (
    <section id="furniture-catalog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Furniture Catalog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of 150+ premium furniture pieces. Every product available for WhatsApp ordering.
          </p>
          
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <span className="text-3xl font-bold text-amber-600">150+</span>
              <span className="text-sm text-gray-600 block">Products</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-amber-600">25+</span>
              <span className="text-sm text-gray-600 block">Collections</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-amber-600">WhatsApp</span>
              <span className="text-sm text-gray-600 block">Order</span>
            </div>
          </div>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          categories={categories}
          collections={collections}
        />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            <p className="ml-4 text-gray-600">Loading furniture catalog...</p>
          </div>
        ) : (
          <>
            {/* Results Info */}
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing {displayedProducts.length} of {filteredProducts.length} products
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  whatsappNumber="+17138089064"
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalProducts={filteredProducts.length}
              productsPerPage={productsPerPage}
              onPageChange={handlePageChange}
            />

            {/* Contact CTA */}
            <div className="text-center mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We have access to thousands more products. Contact our team for personalized assistance with our complete 150+ product inventory.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/17138089064?text=Hi! I would like to see your complete furniture catalog with all 150+ products. Can you help?"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Browse Complete Catalog
                </a>
                <a
                  href="tel:+17138089064"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2"
                >
                  📞 Call (713) 808-9064
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}