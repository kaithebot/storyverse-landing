import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-3 text-sm font-medium">
        🎉 20% OFF your first book + FREE shipping across France
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl font-bold text-indigo-700">
              📚 StoryVerse Hub
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                How It Works
              </Link>
              <Link href="/examples" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                Examples
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                Pricing
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-indigo-600 font-medium transition">
                Reviews
              </Link>
              <Link 
                href="/create" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Create Your Book →
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
                Create a Book Where Your Child Is The Hero
              </h1>
              <p className="text-xl mb-8 text-white/90">
                AI-powered personalized stories that weave your child's name and photos into magical French adventures.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-300 text-xl">✓</span>
                  <span>85% of kids read their book 3+ times per week</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300 text-xl">✓</span>
                  <span>40% of families order 2+ books per year</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300 text-xl">✓</span>
                  <span>4.8/5 stars from 2,500+ French families</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/create"
                  className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition"
                >
                  Start Creating — 20% Off
                </Link>
                <Link 
                  href="/how-it-works"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm mx-auto transform hover:rotate-2 transition">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-center text-white aspect-[3/4] flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-bold mb-2">L'Histoire de Marie</h3>
                  <p className="text-white/80">et les Fées de Bretagne</p>
                  <div className="text-6xl mt-8">🧚‍♀️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Trusted by 2,500+ French families and featured in:</p>
          <div className="flex flex-wrap justify-center gap-8 font-semibold text-gray-500">
            <span>Maman Vogue</span>
            <span>Parents.fr</span>
            <span>Famili</span>
            <span>Magicmaman</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Create Your Book in 4 Easy Steps
            </h2>
            <p className="text-xl text-gray-600">From idea to delivery in just 5 minutes of your time</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '📝', title: 'Tell Your Story', desc: 'Share your child\'s name, age, and interests.' },
              { icon: '📸', title: 'Add Photos', desc: 'Upload family photos for the illustrations.' },
              { icon: '🎨', title: 'Choose Theme', desc: 'Breton fairies, Provençal legends, or Paris.' },
              { icon: '📦', title: 'Receive Book', desc: 'Delivered in 4-8 days with tracking.' },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">What French Parents Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { stars: '★★★★★', text: 'My daughter asks to read her book every night. She sees herself as the hero.', author: 'Marie Dubois', location: 'Mother of 2, Lyon' },
              { stars: '★★★★★', text: 'Finally, a book that understands French culture. Not translated English.', author: 'Philippe Leroy', location: 'Father of 1, Paris' },
              { stars: '★★★★★', text: 'Ordered Monday, received Friday. Quality is amazing!', author: 'Sophie Martin', location: 'Mother of 3, Toulouse' },
            ].map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-yellow-400 text-xl mb-4">{review.stars}</div>
                <p className="text-lg mb-6 italic">"{review.text}"</p>
                <div className="font-semibold">{review.author}</div>
                <div className="text-white/70 text-sm">{review.location}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-white/80">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-white/80">Read Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white">
            <h2 className="font-serif text-4xl font-bold mb-4">Ready to Create Your Child's Story?</h2>
            <p className="text-xl mb-8 text-white/90">Join 2,500+ families who transformed moments into magical books.</p>
            <Link 
              href="/create"
              className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition inline-block"
            >
              Create Your Book Now →
            </Link>
            <p className="mt-6 text-white/80 text-sm">🛡️ 30-Day Guarantee • 💳 Cash on Delivery • 🚚 Free Shipping</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">StoryVerse Hub</h3>
              <p className="text-gray-400">AI-powered personalized storytelling for French families.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="/examples" className="hover:text-white transition">Examples</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/create" className="hover:text-white transition">Create Book</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2026 StoryVerse Hub. Made with 💜 for French families.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
