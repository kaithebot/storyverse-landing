import { FurnitureCatalog } from '@/components/FurnitureCatalog/FurnitureCatalog'
import { Hero } from '@/components/Hero/Hero'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { products } from '@/data/products'
import { WhatsAppService } from '@/services/WhatsAppService'

/**
 * Main Furniture Catalog Page
 * Renders complete furniture website with 150+ products
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <FurnitureCatalog products={products} />
      <Footer />
    </main>
  )
}