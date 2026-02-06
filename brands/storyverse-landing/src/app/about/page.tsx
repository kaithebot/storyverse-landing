import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold mb-8">About StoryVerse Hub</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            StoryVerse Hub was founded with a simple mission: to create personalized books that celebrate French culture 
            and make every child feel like the hero of their own story.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">Our Story</h2>
          <p className="mb-6">
            It all started when our founder couldn't find a personalized book that truly understood French culture 
            for their niece. Everything was either poorly translated or completely ignored the rich traditions of 
            Bretagne, Provence, and other French regions.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">Made in France</h2>
          <p className="mb-6">
            We're proud to be based in France, with all books printed locally. This means faster delivery 
            (4-8 days instead of 2-3 weeks) and support for local artisans.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Cultural Authenticity:</strong> Stories that truly represent French heritage</li>
            <li><strong>Quality:</strong> Premium hardcover books that last generations</li>
            <li><strong>Sustainability:</strong> Eco-friendly printing and packaging</li>
            <li><strong>Customer Satisfaction:</strong> 30-day guarantee on every book</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
