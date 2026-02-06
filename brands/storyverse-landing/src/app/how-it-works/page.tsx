import Link from 'next/link';

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-8">How It Works</h1>
        <p className="text-xl text-gray-600 text-center mb-16">Create your personalized book in 4 simple steps</p>

        <div className="space-y-12">
          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">1</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Tell Your Story</h2>
              <p className="text-gray-600">Share your child's name, age, interests, and family details. Our AI uses this to create a unique story.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">2</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Add Your Photos</h2>
              <p className="text-gray-600">Upload family photos that our AI seamlessly integrates into the story illustrations.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">3</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Choose Cultural Theme</h2>
              <p className="text-gray-600">Select from Breton fairies, Provençal legends, Parisian adventures, or Alsace tales.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">4</div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Receive Your Book</h2>
              <p className="text-gray-600">Premium hardcover book delivered to your door in 4-8 days with tracking.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block">
            Start Creating Your Book →
          </Link>
        </div>
      </div>
    </main>
  );
}
