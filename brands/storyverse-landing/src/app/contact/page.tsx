import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center mb-12">We're here to help!</p>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">bonjour@storyversehub.fr</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">+33 (0)1 76 54 12 34</p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
