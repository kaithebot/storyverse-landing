/**
 * WhatsApp Service for furniture ordering
 * Handles WhatsApp integration and message generation
 */

export const WHATSAPP_NUMBER = '+17138089064'
export const WHATSAPP_BASE_URL = 'https://wa.me/17138089064'

/**
 * Generate WhatsApp message for furniture inquiry
 */
export function generateWhatsAppMessage(productName: string): string {
  return `Hi! I'm interested in the ${productName}. Can you provide pricing and availability information?`
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `${WHATSAPP_BASE_URL}?text=${encodedMessage}`
}

/**
 * Quick WhatsApp link for general catalog inquiry
 */
export function generateCatalogMessage(): string {
  return `Hi! I would like to see your complete furniture catalog. Can you help me find the right pieces for my home?`
}

/**
 * Business WhatsApp contact URL
 */
export const BUSINESS_WHATSAPP_URL = generateWhatsAppUrl(generateCatalogMessage())