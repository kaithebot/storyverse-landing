import Link from 'next/link';

export default function Reviews() {
  const reviews = [
    { name: "Marie Dubois", location: "Lyon", rating: 5, text: "My daughter asks to read her book every night. She sees herself as the hero and it's magical. The Breton fairy theme is perfect!" },
    { name: "Philippe Leroy", location: "Paris", rating: 5, text: "Finally, a personalized book that actually understands French culture. Not some translated English story. Worth every euro." },
    { name: "Sophie Martin", location: "Toulouse", rating: 5, text: "Ordered on Monday, received on Friday. The quality is amazing and my son's face when he saw his name... priceless!" },
    { name: "Claire Bernard", location: "Marseille", rating: 5, text: "We've ordered 3 books now. Each one is unique and special. The kids love seeing themselves in the stories." },
    { name: "Thomas Petit", location: "Bordeaux", rating: 5, text: "Customer service is excellent. Had a question about delivery and they responded within hours. Highly recommend!" },
    { name: "Isabelle Roux", location: "Nantes", rating: 5, text: "The attention to detail is incredible. Even the dedication page is beautifully designed. A perfect gift." },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">📚 StoryVerse Hub</Link>
          <Link href="/" className="text-gray-600 hover:text-indigo-600">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl font-bold text-center mb-4">Customer Reviews</h1>
        <p className="text-xl text-gray-600 text-center mb-12">See what French families are saying</p>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-yellow-400 text-lg mb-3">{'★'.repeat(review.rating)}</div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div className="font-semibold text-gray-900">{review.name}</div>
              <div className="text-sm text-gray-500">{review.location}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Join 2,500+ Happy Families</h2>
          <Link href="/create" className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition inline-block">
            Create Your Book →
          </Link>
        </div>
      </div>
    </main>
  );
}
