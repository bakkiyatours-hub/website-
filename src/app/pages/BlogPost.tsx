import { Link } from 'react-router';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const tajMahalImage =
  'https://images.unsplash.com/photo-1623811852177-611cda0b372f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0YWolMjBtYWhhbCUyMGluZGlhJTIwdHJhdmVsfGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const singaporeImage =
  'https://images.unsplash.com/photo-1727880676753-9ba90268d3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBza3lsaW5lJTIwbWFyaW5hJTIwYmF5fGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const keralaImage =
  'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrd2F0ZXJzJTIwa2VyYWxhJTIwaW5kaWF8ZW58MXx8fHwxNzcyNDU5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080';

export function BlogPost() {
  const relatedPosts = [
    {
      id: 2,
      title: 'Complete Singapore Visa Guide',
      image: singaporeImage,
      category: 'Visa Guide',
    },
    { id: 7, title: 'Kerala Backwaters Travel Guide', image: keralaImage, category: 'Destination' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="pt-8 pb-4 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[500px]">
        <img src={tajMahalImage} alt="Blog Post" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full">
              Travel Tips
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              March 1, 2026
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Priya Sharma
            </span>
            <span>5 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl mb-8">
            10 Must-Visit Places in India for First-Time Travelers
          </h1>

          {/* Social Share */}
          <div className="flex items-center gap-4 pb-8 border-b mb-8">
            <span className="text-gray-600">Share:</span>
            <button className="text-gray-600 hover:text-blue-600 transition">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-blue-400 transition">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-blue-700 transition">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              India is a land of incredible diversity, rich history, and vibrant culture. For
              first-time travelers, choosing where to go can be overwhelming. This guide highlights
              the must-visit destinations that showcase the best of what India has to offer.
            </p>

            <h2 className="text-3xl mt-12 mb-4">1. The Taj Mahal, Agra</h2>
            <p className="text-gray-700 mb-6">
              No trip to India is complete without visiting the iconic Taj Mahal. This UNESCO World
              Heritage site is a testament to eternal love and one of the Seven Wonders of the
              World. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, the white
              marble mausoleum is breathtaking at sunrise.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Best time to visit:</strong> October to March for pleasant weather
            </p>

            <h2 className="text-3xl mt-12 mb-4">2. Jaipur - The Pink City</h2>
            <p className="text-gray-700 mb-6">
              Jaipur, the capital of Rajasthan, is known for its stunning palaces, forts, and
              vibrant bazaars. Visit the Amber Fort, City Palace, and the iconic Hawa Mahal. Don't
              miss shopping for traditional textiles and jewelry in the old city markets.
            </p>

            <h2 className="text-3xl mt-12 mb-4">3. Varanasi - The Spiritual Heart</h2>
            <p className="text-gray-700 mb-6">
              One of the world's oldest living cities, Varanasi offers a profound spiritual
              experience. Witness the evening Ganga Aarti ceremony on the ghats and take a sunrise
              boat ride on the holy Ganges River.
            </p>

            <h2 className="text-3xl mt-12 mb-4">4. Kerala Backwaters</h2>
            <p className="text-gray-700 mb-6">
              Experience the serene beauty of Kerala's backwaters on a traditional houseboat. Cruise
              through palm-fringed canals, witness rural life, and enjoy delicious Kerala cuisine
              prepared onboard.
            </p>

            <h2 className="text-3xl mt-12 mb-4">5. Goa - Beach Paradise</h2>
            <p className="text-gray-700 mb-6">
              India's smallest state packs a big punch with its beautiful beaches, Portuguese
              heritage, and vibrant nightlife. Perfect for both relaxation and adventure, Goa offers
              something for every traveler.
            </p>

            <h2 className="text-3xl mt-12 mb-4">Travel Tips for First-Time Visitors</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Respect local customs and dress modestly when visiting religious sites</li>
              <li>Stay hydrated and stick to bottled water</li>
              <li>Book accommodations and trains in advance during peak season</li>
              <li>Bargain respectfully in local markets</li>
              <li>Try local street food but choose busy, popular stalls</li>
              <li>Keep copies of important documents</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> Consider hiring a professional guide for major historical
                sites. Their insights will greatly enhance your understanding and appreciation of
                India's rich heritage.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              India is a country that awakens all your senses. From the architectural marvels of the
              Golden Triangle to the tranquil backwaters of Kerala, each destination offers unique
              experiences. Start planning your Indian adventure today, and don't hesitate to reach
              out to us for customized tour packages!
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                PS
              </div>
              <div>
                <h3 className="text-xl mb-2">Priya Sharma</h3>
                <p className="text-gray-600 mb-3">
                  Priya is an international tour specialist with 8 years of experience. She has
                  traveled to over 30 countries and specializes in creating memorable cultural
                  experiences.
                </p>
                <Link to="/team" className="text-purple-600 hover:text-purple-700 transition">
                  View Profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl group-hover:text-purple-600 transition">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Ready to Explore India?</h2>
          <p className="text-xl mb-8">
            Let us create the perfect itinerary for your Indian adventure
          </p>
          <Link
            to="/packages"
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full transition"
          >
            Browse Tour Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
