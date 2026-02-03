/**
 * Furniture Product Data
 * Complete product catalog data for Next.js furniture website
 */

import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'diamond-collection',
    name: 'Diamond Collection - Luxury 3-Piece Set',
    category: 'sofas',
    collection: 'diamond',
    description: 'Ultimate luxury 3-piece set with premium upholstery, geometric detailing, and gold-tone accents for sophisticated interiors.',
    features: [
      '3-piece living room set (sofa and matching accent chairs)',
      'Premium upholstery with soft, durable texture',
      'Elegant geometric side panel design',
      'Gold-tone metal accents for a luxury finish'
    ],
    specifications: {
      sofa: { length: '94.5', depth: '35.4', height: '30.7' },
      loveseat: { length: '82.6', depth: '35.4', height: '29.9' },
      chair: { length: '31.5', depth: '31.5', height: '30.7' }
    },
    retailCode: 'diamond-collection-3pc',
    colors: ['Black', 'Navy', 'Cream'],
    priceRange: 'premium'
  },
  
  {
    id: 'gia-sofa-black',
    name: 'Gia Sofa & Loveseat - Black',
    category: 'sofas',
    collection: 'gia',
    description: 'Contemporary styling meets exceptional comfort with premium black upholstery and clean lines.',
    features: [
      'Premium black upholstery',
      'Contemporary clean lines',
      'Matching 2-piece sofa and loveseat',
      'Exceptional comfort and support'
    ],
    specifications: {
      sofa: { length: '84', depth: '36', height: '34' },
      loveseat: { length: '60', depth: '36', height: '34' }
    },
    retailCode: 's300-gia-black',
    colors: ['Black', 'Blue', 'Brown', 'Grey', 'Chocolate', 'Ivory', 'Light Grey', 'Mocha'],
    priceRange: 'mid'
  },

  {
    id: 'elina-sofa-grey',
    name: 'Elina Sofa & Loveseat - Grey',
    category: 'sofas',
    collection: 'elina',
    description: 'Elegant curved arms and sophisticated grey upholstery define this premium collection for upscale interiors.',
    features: [
      'Elegant curved arms',
      'Sophisticated grey upholstery',
      'Premium construction quality',
      'Comfortable upscale styling'
    ],
    specifications: {
      sofa: { length: '86', depth: '37', height: '36' },
      loveseat: { length: '62', depth: '37', height: '36' }
    },
    retailCode: 's150-elina-grey',
    colors: ['Grey', 'Black', 'White'],
    priceRange: 'mid'
  },

  {
    id: 'texan-oversized-black',
    name: 'Texan Oversized Sofa & Loveseat - Black',
    category: 'sofas',
    collection: 'texan',
    description: 'Oversized comfort for maximum relaxation. Extra-deep seating and plush cushions make this perfect for family rooms.',
    features: [
      'Oversized deep seating with 42" depth',
      'Extra plush cushions for maximum comfort',
      'Perfect for family rooms and entertainment',
      'Sturdy construction for everyday use'
    ],
    specifications: {
      sofa: { length: '96', depth: '42', height: '38' },
      loveseat: { length: '72', depth: '42', height: '38' }
    },
    retailCode: 's320-texan-oversize-black',
    priceRange: 'premium'
  }
]