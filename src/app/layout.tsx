import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'New Era Furniture - Complete Product Catalog',
  description: 'Complete 150+ furniture products from newerafurniture.us with WhatsApp integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}