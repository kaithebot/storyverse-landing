import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose text-gray-600">
          <p className="mb-4">Last updated: February 2026</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide when creating a book, including your child's name, photos, and your contact information.</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to create your personalized book, process your order, and communicate with you about your order.</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">3. Data Security</h2>
          <p className="mb-4">We implement appropriate security measures to protect your personal information and your photos.</p>
          
          <h2 className="font-bold text-gray-900 mt-6 mb-3">4. Your Rights</h2>
          <p className="mb-4">You have the right to access, correct, or delete your personal information at any time.</p>
        </div>
      </div>
    </main>
  );
}
