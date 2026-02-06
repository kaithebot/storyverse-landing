import Link from 'next/link';

export default function Examples() {
  const examples = [
    { title: "L'Histoire de Marie", subtitle: "et les Fées de Bretagne", theme: "Breton Fairies", age: "5-7 years", emoji: "🧚‍♀️" },
    { title: "Le Voyage de Lucas", subtitle: "à travers la Provence", theme: "Provençal Legends", age: "6-8 years", emoji: "🌻" },
    { title: "Emma à Paris", subtitle: "Une Aventure Magique", theme: "Paris Adventure", age: "4-6 years", emoji: "🗼" },
    { title: "Les Secrets d'Alex", subtitle: "dans les Vosges", theme: "Alsace Tales", age: "7-9 years", emoji: "🏔️" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-4">Book Examples</h1>
        <p className="text-xl text-gray-600 text-center mb-12">See what your personalized book could look like</p>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((book, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="flex gap-6">
                <div className="w-32 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-4xl shrink-0">
                  {book.emoji}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-1">{book.title}</h3>
                  <p className="text-gray-600 italic mb-3">{book.subtitle}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="bg-white px-3 py-1 rounded-full">{book.theme}</span>
                    <span className="bg-white px-3 py-1 rounded-full">{book.age}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/create" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-block">
            Create Your Own Book →
          </Link>
        </div>
      </div>
    </main>
  );
}
