import { Link } from 'react-router';
import { MapPin, Clock, Star, Plane } from 'lucide-react';

const singaporeImage =
  'https://images.unsplash.com/photo-1727880676753-9ba90268d3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBza3lsaW5lJTIwbWFyaW5hJTIwYmF5fGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const dubaiImage =
  'https://images.unsplash.com/photo-1735320864933-601d2cac9371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const thailandImage =
  'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzI0NTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080';
const malaysiaImage =
  'https://images.unsplash.com/photo-1553383398-c40c57291c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxheXNpYSUyMHBldHJvbmFzJTIwdG93ZXJzfGVufDF8fHx8MTc3MjQ0NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080';

export function OutboundTours() {
  const destinations = [
    {
      country: 'Singapore',
      image: singaporeImage,
      description: 'Experience the futuristic city-state where modernity meets tradition',
      tours: [
        {
          id: 10,
          title: 'Singapore Delight',
          days: '5 Days',
          price: '₹75,000',
          highlights: 'Marina Bay, Sentosa, Gardens by the Bay',
        },
        {
          id: 11,
          title: 'Singapore Family Fun',
          days: '6 Days',
          price: '₹85,000',
          highlights: 'Universal Studios, Night Safari, Shopping',
        },
      ],
    },
    {
      country: 'Malaysia',
      image: malaysiaImage,
      description: 'Discover diverse cultures, stunning islands, and vibrant cities',
      tours: [
        {
          id: 12,
          title: 'Malaysia Explorer',
          days: '6 Days',
          price: '₹60,000',
          highlights: 'Kuala Lumpur, Genting, Malacca',
        },
        {
          id: 13,
          title: 'Langkawi Beach Paradise',
          days: '5 Days',
          price: '₹68,000',
          highlights: 'Island hopping, Cable car, Beaches',
        },
      ],
    },
    {
      country: 'UAE',
      image: dubaiImage,
      description: 'Luxury, adventure, and Arabian hospitality in the desert metropolis',
      tours: [
        {
          id: 14,
          title: 'Dubai Luxury',
          days: '5 Days',
          price: '₹85,000',
          highlights: 'Burj Khalifa, Desert Safari, Dubai Mall',
        },
        {
          id: 15,
          title: 'Dubai & Abu Dhabi',
          days: '7 Days',
          price: '₹95,000',
          highlights: 'Sheikh Zayed Mosque, Ferrari World, Palm Jumeirah',
        },
      ],
    },
    {
      country: 'Thailand',
      image: thailandImage,
      description: 'Tropical beaches, ancient temples, and vibrant nightlife',
      tours: [
        {
          id: 16,
          title: 'Magical Thailand',
          days: '6 Days',
          price: '₹55,000',
          highlights: 'Bangkok, Pattaya, Coral Island',
        },
        {
          id: 17,
          title: 'Phuket Beach Escape',
          days: '5 Days',
          price: '₹62,000',
          highlights: 'Phi Phi Island, James Bond Island, Beach resorts',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={dubaiImage} alt="Outbound Tours" className="w-full h-full object-cover" data-parallax="0.12" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4" data-reveal>
          <h1 className="text-5xl mb-4">Outbound Tours</h1>
          <p className="text-xl">Explore Amazing International Destinations</p>
        </div>
      </section>

      {/* Visa Information Banner */}
      <section className="bg-orange-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <Plane className="w-6 h-6" />
            <p className="text-lg">
              We provide complete visa assistance for all destinations • Flight bookings included •
              Travel insurance available
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      {destinations.map((destination, index) => (
        <section key={index} className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''} data-reveal>
                <h2 className="text-4xl mb-4">{destination.country}</h2>
                <p className="text-xl text-gray-600 mb-6">{destination.description}</p>

                {/* Visa Information */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                  <h3 className="text-lg mb-2">Visa Information</h3>
                  <p className="text-gray-700">
                    We assist with visa processing. Tourist visa typically takes 5-7 working days.
                    Requirements and fees vary by nationality.
                  </p>
                </div>

                <Link
                  to="/custom-tour"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                >
                  Request Custom Itinerary
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''} data-reveal>
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Tour Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal-stagger>
              {destination.tours.map((tour) => (
                <div
                  key={tour.id}
                  data-reveal
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition bk-hover-lift"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.days}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-3">{tour.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tour.highlights}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">(180 reviews)</span>
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
      ))}

      {/* More Destinations */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Looking for Other Destinations?</h2>
          <p className="text-xl mb-8">
            We also arrange tours to Maldives, Bali, Vietnam, and more!
          </p>
          <Link
            to="/custom-tour"
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full transition"
          >
            Inquire About Other Destinations
          </Link>
        </div>
      </section>
    </div>
  );
}
