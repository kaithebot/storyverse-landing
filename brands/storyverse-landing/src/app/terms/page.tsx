import Link from 'next/link';

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose text-gray-600">
          <p className="mb-4">Last updated: February 2026</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">By using our service, you agree to these terms. Please read them carefully.</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">2. Our Service</h2>
          <p className="mb-4">We create personalized books for children using AI technology. You provide the content (names, photos) and we create the book.</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">3. Ordering and Payment</h2>
          <p className="mb-4">Orders are processed upon payment confirmation. We accept various payment methods including cash on delivery.</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">4. Returns and Refunds</h2>
          <p className="mb-4">We offer a 30-day satisfaction guarantee. If you're not happy with your book, contact us for a refund or reprint.</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">5. Intellectual Property</h2>
          <p className="mb-4">The stories we create are for your personal use. You may not resell or distribute the content commercially.</p>
        </div>
      </div>
    </main>
  );
}
