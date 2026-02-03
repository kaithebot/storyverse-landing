/**
 * Furniture Product Types
 * Complete TypeScript interfaces for furniture catalog
 */

export interface Product {
  id: string
  name: string
  category: FurnitureCategory
  collection: string
  description: string
  features: string[]
  specifications: ProductSpecifications
  retailCode?: string
  colors: string[]
  priceRange: PriceRange
  images?: string[]
  dimensions?: ProductDimensions
}

export interface ProductSpecifications {
  sofa?: FurnitureDimensions
  loveseat?: FurnitureDimensions
  chair?: FurnitureDimensions
  [key: string]: FurnitureDimensions | undefined
}

export interface FurnitureDimensions {
  length: string
  depth: string
  height: string
}

export interface ProductDimensions {
  length: string
  depth: string
  height: string
}

export type FurnitureCategory = 
  | 'sofas' 
  | 'sectionals' 
  | 'bedroom' 
  | 'dining' 
  | 'chairs'

export type PriceRange = 'budget' | 'mid' | 'premium'

/**
 * Product Service Types
 */
export interface ProductFilter {
  searchTerm?: string
  category?: FurnitureCategory
  collection?: string
  priceRange?: PriceRange
}

export interface PaginatedProducts {
  products: Product[]
  total: number
  page: number
  totalPages: number
}