import { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Clock, Star, SlidersHorizontal } from 'lucide-react';
import breadcumbsVideo from '../../assets/breadcumbsvideo.mp4';

const tajMahalImage =
  'https://images.unsplash.com/photo-1623811852177-611cda0b372f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0YWolMjBtYWhhbCUyMGluZGlhJTIwdHJhdmVsfGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const singaporeImage =
  'https://images.unsplash.com/photo-1727880676753-9ba90268d3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBza3lsaW5lJTIwbWFyaW5hJTIwYmF5fGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const dubaiImage =
  'https://images.unsplash.com/photo-1735320864933-601d2cac9371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const thailandImage =
  'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzI0NTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080';
const sriLankaImage =
  'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGthbmR5JTIwdGVtcGxlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const malaysiaImage =
  'https://images.unsplash.com/photo-1553383398-c40c57291c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxheXNpYSUyMHBldHJvbmFzJTIwdG93ZXJzfGVufDF8fHx8MTc3MjQ0NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080';
const muruganTempleImage =
  'https://images.unsplash.com/photo-1615196451843-54c40a46d1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXJ1Z2FuJTIwdGVtcGxlJTIwdGFtaWwlMjBuYWR1JTIwaW5kaWF8ZW58MXx8fHwxNzcyODE0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080';
const kodaikanalImage =
  'https://images.unsplash.com/photo-1624981756765-af4114965bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2RhaWthbmFsJTIwaGlsbHMlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI4MTQ4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080';
const unescoHeritageImage =
  'https://images.unsplash.com/photo-1712954115679-7cf0f4af29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVTkVTQ08lMjB3b3JsZCUyMGhlcml0YWdlJTIwc2l0ZSUyMGluZGlhfGVufDF8fHx8MTc3MjgxNDgzNXww&ixlib=rb-4.1.0&q=80&w=1080';

export function Packages() {
  const [showFilters, setShowFilters] = useState(false);

  const allPackages = [
    {
      id: 1,
      title: 'Golden Triangle Tour',
      location: 'India',
      destination: 'Delhi, Agra, Jaipur',
      days: '7 Days',
      price: '₹45,000',
      image: tajMahalImage,
      type: 'Group',
      budget: 'Mid Range',
    },
    {
      id: 2,
      title: 'Singapore Delight',
      location: 'Singapore',
      destination: 'Marina Bay, Sentosa',
      days: '5 Days',
      price: '₹75,000',
      image: singaporeImage,
      type: 'Family',
      budget: 'Luxury',
    },
    {
      id: 3,
      title: 'Magical Thailand',
      location: 'Thailand',
      destination: 'Bangkok, Pattaya',
      days: '6 Days',
      price: '₹55,000',
      image: thailandImage,
      type: 'Group',
      budget: 'Mid Range',
    },
    {
      id: 4,
      title: 'Sri Lanka Heritage',
      location: 'Sri Lanka',
      destination: 'Colombo, Kandy, Galle',
      days: '8 Days',
      price: '₹50,000',
      image: sriLankaImage,
      type: 'Cultural',
      budget: 'Mid Range',
    },
    {
      id: 5,
      title: 'Malaysia Explorer',
      location: 'Malaysia',
      destination: 'KL, Genting, Malacca',
      days: '6 Days',
      price: '₹60,000',
      image: malaysiaImage,
      type: 'Family',
      budget: 'Mid Range',
    },
    {
      id: 6,
      title: 'Dubai Luxury',
      location: 'UAE',
      destination: 'Dubai, Abu Dhabi',
      days: '5 Days',
      price: '₹85,000',
      image: dubaiImage,
      type: 'Luxury',
      budget: 'Luxury',
    },
    {
      id: 7,
      title: 'Kerala Backwaters',
      location: 'India',
      destination: 'Kochi, Munnar, Alleppey',
      days: '8 Days',
      price: '₹52,000',
      image: tajMahalImage,
      type: 'Nature',
      budget: 'Mid Range',
    },
    {
      id: 8,
      title: 'Phuket Paradise',
      location: 'Thailand',
      destination: 'Phuket, Phi Phi Island',
      days: '5 Days',
      price: '₹62,000',
      image: thailandImage,
      type: 'Beach',
      budget: 'Luxury',
    },
    {
      id: 9,
      title: 'Rajasthan Royal',
      location: 'India',
      destination: 'Jaipur, Jodhpur, Udaipur',
      days: '9 Days',
      price: '₹58,000',
      image: tajMahalImage,
      type: 'Heritage',
      budget: 'Luxury',
    },
    {
      id: 10,
      title: 'Murugan Temple Tour',
      location: 'India',
      destination: 'Tiruchirappalli, Madurai',
      days: '4 Days',
      price: '₹35,000',
      image: muruganTempleImage,
      type: 'Cultural',
      budget: 'Budget Friendly',
    },
    {
      id: 11,
      title: 'Kodaikanal Hill Station',
      location: 'India',
      destination: 'Kodaikanal, Coonoor',
      days: '3 Days',
      price: '₹25,000',
      image: kodaikanalImage,
      type: 'Nature',
      budget: 'Budget Friendly',
    },
    {
      id: 12,
      title: 'Tamil Nadu UNESCO Heritage Tour',
      location: 'India',
      destination: 'Mahabalipuram, Thanjavur, Darasuram, Chennai',
      days: '5 Days',
      price: '₹52,000',
      image: unescoHeritageImage,
      type: 'Heritage',
      budget: 'Mid Range',
      link: '/tamil-nadu-unesco',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 opacity-30">
          <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover">
            <source src={breadcumbsVideo} type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-reveal>
          <h1 className="text-5xl mb-4">Tour Packages</h1>
          <p className="text-xl">Find your perfect getaway from our curated collection</p>
        </div>
      </section>

      {/* Filters and Packages */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden w-full bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 mb-4"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>

                <div
                  className={`bg-white rounded-2xl shadow-lg p-6 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
                >
                  <div>
                    <h3 className="text-lg mb-3">Destination</h3>
                    <div className="space-y-2">
                      {[
                        'All',
                        'India',
                        'Sri Lanka',
                        'Singapore',
                        'Malaysia',
                        'UAE',
                        'Thailand',
                      ].map((dest) => (
                        <label key={dest} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-gray-700">{dest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg mb-3">Budget</h3>
                    <div className="space-y-2">
                      {['Budget Friendly', 'Mid Range', 'Luxury'].map((budget) => (
                        <label key={budget} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-gray-700">{budget}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg mb-3">Duration</h3>
                    <div className="space-y-2">
                      {['1-3 Days', '4-6 Days', '7-9 Days', '10+ Days'].map((duration) => (
                        <label key={duration} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-gray-700">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg mb-3">Travel Type</h3>
                    <div className="space-y-2">
                      {['Family', 'Group', 'Honeymoon', 'Adventure', 'Cultural', 'Beach'].map(
                        (type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span className="text-gray-700">{type}</span>
                          </label>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg mb-3">Hotel Category</h3>
                    <div className="space-y-2">
                      {['3 Star', '4 Star', '5 Star'].map((hotel) => (
                        <label key={hotel} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-gray-700">{hotel}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{allPackages.length} packages found</p>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Sort by: Recommended</option>
                  <option>Duration: Short to Long</option>
                  <option>Duration: Long to Short</option>
                  <option>Name: A to Z</option>
                  <option>Name: Z to A</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" data-reveal-stagger>
                {allPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    data-reveal
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition bk-hover-lift"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                        {pkg.type}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pkg.days}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{pkg.destination}</span>
                      </div>
                      <h3 className="text-xl mb-3">
                        <Link
                          to={pkg.link ?? `/packages/${pkg.id}`}
                          className="hover:text-purple-700 transition-colors"
                        >
                          {pkg.title}
                        </Link>
                      </h3>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">(156 reviews)</span>
                      </div>
                      <Link
                        to={`/packages/${pkg.id}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition inline-block"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">1</button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
                  2
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
                  3
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us create a personalized tour package tailored to your preferences, budget, and
              schedule
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/custom-tour"
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full transition text-lg font-medium"
              >
                Plan Your Custom Tour
              </Link>
              <a
                href="tel:+919626488887"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full transition text-lg"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
