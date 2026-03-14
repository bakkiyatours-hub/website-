import { Link } from 'react-router';
import { MapPin, Clock, Star } from 'lucide-react';
import breadcumbsVideo from '../../assets/breadcumbsvideo.mp4';

const tajMahalImage =
  'https://images.unsplash.com/photo-1623811852177-611cda0b372f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0YWolMjBtYWhhbCUyMGluZGlhJTIwdHJhdmVsfGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const goldenTempleImage =
  'https://images.unsplash.com/photo-1698380776884-25c2e6e426e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjB0ZW1wbGUlMjBhbXJpdHNhciUyMGluZGlhfGVufDF8fHx8MTc3MjQ1OTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080';
const keralaImage =
  'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrd2F0ZXJzJTIwa2VyYWxhJTIwaW5kaWF8ZW58MXx8fHwxNzcyNDU5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080';
const sriLankaImage =
  'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGthbmR5JTIwdGVtcGxlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const muruganTempleImage =
  'https://images.unsplash.com/photo-1615196451843-54c40a46d1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXJ1Z2FuJTIwdGVtcGxlJTIwdGFtaWwlMjBuYWR1JTIwaW5kaWF8ZW58MXx8fHwxNzcyODE0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080';
const kodaikanalImage =
  'https://images.unsplash.com/photo-1624981756765-af4114965bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2RhaWthbmFsJTIwaGlsbHMlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI4MTQ4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080';
const unescoHeritageImage =
  'https://images.unsplash.com/photo-1712954115679-7cf0f4af29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVTkVTQ08lMjB3b3JsZCUyMGhlcml0YWdlJTIwc2l0ZSUyMGluZGlhfGVufDF8fHx8MTc3MjgxNDgzNXww&ixlib=rb-4.1.0&q=80&w=1080';

export function InboundTours() {
  const indiaTours = [
    {
      id: 1,
      title: 'Golden Triangle Tour',
      location: 'Delhi, Agra, Jaipur',
      days: '7 Days',
      price: '₹45,000',
      image: tajMahalImage,
      theme: 'Heritage',
    },
    {
      id: 2,
      title: 'Spiritual North India',
      location: 'Varanasi, Haridwar, Rishikesh',
      days: '6 Days',
      price: '₹38,000',
      image: goldenTempleImage,
      theme: 'Spiritual',
    },
    {
      id: 3,
      title: 'Kerala Backwaters',
      location: 'Kochi, Munnar, Alleppey',
      days: '8 Days',
      price: '₹52,000',
      image: keralaImage,
      theme: 'Nature',
    },
    {
      id: 4,
      title: 'Rajasthan Royal Tour',
      location: 'Jaipur, Jodhpur, Udaipur',
      days: '9 Days',
      price: '₹58,000',
      image: tajMahalImage,
      theme: 'Heritage',
    },
    {
      id: 5,
      title: 'Golden Temple Experience',
      location: 'Amritsar',
      days: '4 Days',
      price: '₹28,000',
      image: goldenTempleImage,
      theme: 'Spiritual',
    },
    {
      id: 6,
      title: 'South India Temple Tour',
      location: 'Chennai, Madurai, Rameshwaram',
      days: '7 Days',
      price: '₹42,000',
      image: goldenTempleImage,
      theme: 'Spiritual',
    },
  ];

  const tamilNaduSpecialTours = [
    {
      id: 10,
      title: 'Six Padai Murugan Temples',
      location: 'Palani, Thiruchendur, Swamimalai',
      days: '4 Days',
      image: muruganTempleImage,
      theme: 'Spiritual',
      description: 'Visit all six sacred Murugan temples in Tamil Nadu',
    },
    {
      id: 11,
      title: 'Kodaikanal Hill Station & Wildlife',
      location: 'Kodaikanal, Palani Hills',
      days: '3 Days',
      image: kodaikanalImage,
      theme: 'Nature',
      description: 'Explore misty mountains, pristine lakes, and diverse wildlife',
    },
  ];

  const unescoTour = {
    id: 12,
    title: 'UNESCO World Heritage Sites of India',
    location: 'Agra, Jaipur, Delhi, Varanasi, Khajuraho',
    days: '10 Days',
    image: unescoHeritageImage,
    theme: 'Heritage',
    link: '/tamil-nadu-unesco',
    description:
      "Experience India's most iconic UNESCO World Heritage Sites including Taj Mahal, Amber Fort, Qutub Minar, and ancient temples",
  };

  const sriLankaTours = [
    {
      id: 7,
      title: 'Sri Lanka Heritage',
      location: 'Colombo, Kandy, Galle',
      days: '8 Days',
      price: '₹50,000',
      image: sriLankaImage,
      theme: 'Heritage',
    },
    {
      id: 8,
      title: 'Ceylon Tea Country',
      location: 'Nuwara Eliya, Ella',
      days: '6 Days',
      price: '₹48,000',
      image: sriLankaImage,
      theme: 'Nature',
    },
    {
      id: 9,
      title: 'Buddhist Circuit',
      location: 'Anuradhapura, Polonnaruwa',
      days: '7 Days',
      price: '₹46,000',
      image: sriLankaImage,
      theme: 'Spiritual',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            data-parallax="0.12"
          >
            <source src={breadcumbsVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4" data-reveal>
          <h1 className="text-5xl mb-4">Inbound Tours</h1>
          <p className="text-xl">Discover the Rich Heritage of India & Sri Lanka</p>
        </div>
      </section>

      {/* UNESCO Heritage Package - Featured */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center" data-reveal>
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm inline-block mb-4">
              Featured Package
            </span>
            <h2 className="text-4xl mb-4">UNESCO World Heritage Tour</h2>
            <p className="text-xl text-gray-600">Explore India's Most Iconic UNESCO Sites</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto" data-reveal>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <img
                  src={unescoTour.image}
                  alt={unescoTour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full">
                  {unescoTour.theme}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {unescoTour.days}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl mb-4">
                  <Link to={unescoTour.link} className="hover:text-purple-700 transition-colors">
                    {unescoTour.title}
                  </Link>
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>{unescoTour.location}</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{unescoTour.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mt-1" />
                    <span className="text-gray-700">Visit 7+ UNESCO World Heritage Sites</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mt-1" />
                    <span className="text-gray-700">Expert heritage guides included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mt-1" />
                    <span className="text-gray-700">4-star accommodations</span>
                  </div>
                </div>

                <Link
                  to={unescoTour.link}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition inline-block"
                >
                  Explore This Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tamil Nadu Special Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center" data-reveal>
            <h2 className="text-4xl mb-4">Tamil Nadu Special Tours</h2>
            <p className="text-xl text-gray-600">
              Discover the spiritual and natural beauty of Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal-stagger>
            {tamilNaduSpecialTours.map((tour) => (
              <div
                key={tour.id}
                data-reveal
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition bk-hover-lift"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                    {tour.theme}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {tour.days}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{tour.title}</h3>
                  <div className="flex items-start gap-2 text-gray-600 mb-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(180 reviews)</span>
                  </div>
                  <Link
                    to={`/packages/${tour.id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-reveal>
            <h2 className="text-4xl mb-4">India Tours</h2>
            <p className="text-xl text-gray-600">Experience the incredible diversity of India</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full">All Tours</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full transition">
              Heritage
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full transition">
              Spiritual
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full transition">
              Nature
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full transition">
              Adventure
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {indiaTours.map((tour) => (
              <div
                key={tour.id}
                data-reveal
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition bk-hover-lift"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {tour.theme}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.days}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <h3 className="text-xl mb-3">{tour.title}</h3>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(120 reviews)</span>
                  </div>
                  <Link
                    to={`/packages/${tour.id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sri Lanka Tours Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-reveal>
            <h2 className="text-4xl mb-4">Sri Lanka Tours</h2>
            <p className="text-xl text-gray-600">Explore the pearl of the Indian Ocean</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {sriLankaTours.map((tour) => (
              <div
                key={tour.id}
                data-reveal
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition bk-hover-lift"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {tour.theme}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.days}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <h3 className="text-xl mb-3">{tour.title}</h3>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(95 reviews)</span>
                  </div>
                  <Link
                    to={`/packages/${tour.id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
          <h2 className="text-4xl mb-4">Don't See What You're Looking For?</h2>
          <p className="text-xl mb-8">Let us create a custom itinerary just for you</p>
          <Link
            to="/custom-tour"
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full transition"
          >
            Request Custom Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
