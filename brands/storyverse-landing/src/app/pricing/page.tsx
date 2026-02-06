import Link from 'next/link';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Choose the perfect book for your little hero</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-2">Starter</h3>
            <div className="text-4xl font-bold text-indigo-600 mb-4">€35</div>
            <p className="text-gray-600 mb-6">Perfect for trying us out</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">✓ 20-page softcover book</li>
              <li className="flex items-center gap-2">✓ Child's name in story</li>
              <li className="flex items-center gap-2">✓ 2 illustration styles</li>
              <li className="flex items-center gap-2">✓ Digital preview</li>
            </ul>
            <Link href="/create" className="block w-full text-center bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get Started
            </Link>
          </div>

          {/* Popular */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-600 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">Classic</h3>
            <div className="text-4xl font-bold text-indigo-600 mb-4">€45</div>
            <p className="text-gray-600 mb-6">Our bestselling option</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">✓ 32-page hardcover book</li>
              <li className="flex items-center gap-2">✓ Child's name & photos</li>
              <li className="flex items-center gap-2">✓ 5 illustration styles</li>
              <li className="flex items-center gap-2">✓ Dedication page</li>
              <li className="flex items-center gap-2">✓ Free shipping</li>
            </ul>
            <Link href="/create" className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Get Started
            </Link>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-2">Premium</h3>
            <div className="text-4xl font-bold text-indigo-600 mb-4">€65</div>
            <p className="text-gray-600 mb-6">The ultimate experience</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">✓ 48-page hardcover book</li>
              <li className="flex items-center gap-2">✓ Everything in Classic</li>
              <li className="flex items-center gap-2">✓ Audio narration</li>
              <li className="flex items-center gap-2">✓ Gift box included</li>
              <li className="flex items-center gap-2">✓ Priority support</li>
            </ul>
            <Link href="/create" className="block w-full text-center bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 text-center">
          <p className="text-gray-600">
            🎉 <strong>First-time customers:</strong> Use code <strong>Bienvenue20</strong> for 20% off your first order!
          </p>
        </div>
      </div>
    </main>
  );
}
