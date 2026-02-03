/**
 * Global constants and utilities for Next.js furniture catalog
 */

export const WHATSAPP_NUMBER = '+17138089064'
export const WHATSAPP_BUSINESS_URL = 'https://wa.me/17138089064'

export const BUSINESS_INFO = {
  phone: '(713) 808-9064',
  email: 'sales@newerafurniture.us',
  address: '13393 South Main St, Houston, TX',
  hours: 'Mon-Fri 8am-5pm, Sat 9am-2pm, Sun Closed'
} as const

export const CATEGORIES = [
  'all',
  'sofas',
  'sectionals',
  'bedroom',
  'dining',
  'chairs'
] as const

export const COLLECTIONS = [
  'all',
  'gia',
  'elina',
  'diamond',
  'destin',
  'adriana'
] as const