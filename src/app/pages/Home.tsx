import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import {
  Star,
  Users,
  Shield,
  Globe,
  MapPin,
  Calendar,
  DollarSign,
  Award,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { AdvancedTravelSearchBar } from '../components/AdvancedTravelSearchBar';
import breadcumbsVideo from '../../assets/breadcumbsvideo.mp4';

const heroImage =
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
const vehicleImage =
  'https://images.unsplash.com/photo-1765739099920-81a456008253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0b3VyJTIwYnVzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NzI0NTk4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const goldenTempleImage =
  'https://images.unsplash.com/photo-1698380776884-25c2e6e426e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjB0ZW1wbGUlMjBhbXJpdHNhciUyMGluZGlhfGVufDF8fHx8MTc3MjQ1OTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080';
const guideImage =
  'https://images.unsplash.com/photo-1659100939687-a7c10b4d5841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0b3VyJTIwZ3VpZGV8ZW58MXx8fHwxNzcyNDQ0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080';
const familyImage =
  'https://images.unsplash.com/photo-1772179460495-08ad6ffac065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMHRyYXZlbCUyMGhhcHB5fGVufDF8fHx8MTc3MjQ1OTg0OXww&ixlib=rb-4.1.0&q=80&w=1080';

export function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [tourPlace, setTourPlace] = useState('');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
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

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto" data-reveal>
          <h1 className="text-5xl md:text-6xl mb-4">Explore the World with Bakiya Tours</h1>
          <p className="text-xl md:text-2xl mb-8">
            Premium Travel Experiences Across India, Sri Lanka & Beyond
          </p>

          {/* Search Bar */}
          <AdvancedTravelSearchBar
            initialDestination={destination}
            initialTourPlace={tourPlace}
            onSearch={(payload) => {
              setDestination(payload.destination);
              setTourPlace(payload.tourPlace);
              navigate('/packages', { state: payload });
            }}
          />
        </div>
      </section>

      {/* Featured Tour Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Tour Categories</h2>
            <p className="text-xl text-gray-600">Choose your perfect adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/inbound-tours"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={goldenTempleImage}
                alt="Inbound Tours"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl mb-2">Inbound Tours</h3>
                  <p className="text-lg">Discover India & Sri Lanka</p>
                </div>
              </div>
            </Link>

            <Link
              to="/outbound-tours"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={dubaiImage}
                alt="Outbound Tours"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl mb-2">Outbound Tours</h3>
                  <p className="text-lg">Singapore, Malaysia, UAE, Thailand & More</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-reveal>
            <h2 className="text-4xl mb-4">Popular Packages</h2>
            <p className="text-xl text-gray-600">Handpicked tours for unforgettable experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-stagger>
            {[
              {
                title: 'Golden Triangle Tour',
                location: 'India',
                days: '7 Days',
                price: '₹45,000',
                image: heroImage,
              },
              {
                title: 'Singapore Delight',
                location: 'Singapore',
                days: '5 Days',
                price: '₹75,000',
                image: singaporeImage,
              },
              {
                title: 'Magical Thailand',
                location: 'Thailand',
                days: '6 Days',
                price: '₹55,000',
                image: thailandImage,
              },
              {
                title: 'Sri Lanka Heritage',
                location: 'Sri Lanka',
                days: '8 Days',
                price: '₹50,000',
                image: sriLankaImage,
              },
              {
                title: 'Malaysia Explorer',
                location: 'Malaysia',
                days: '6 Days',
                price: '₹60,000',
                image: malaysiaImage,
              },
              {
                title: 'Dubai Luxury',
                location: 'UAE',
                days: '5 Days',
                price: '₹85,000',
                image: dubaiImage,
              },
            ].map((pkg, index) => (
              <div
                key={index}
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
                    {pkg.days}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.location}</span>
                  </div>
                  <h3 className="text-xl mb-3">{pkg.title}</h3>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(250 reviews)</span>
                  </div>
                  <Link
                    to="/packages/1"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/packages"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose Bakiya Tours</h2>
            <p className="text-xl text-purple-200">Your trusted travel partner since 2010</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Guides',
                desc: 'Multilingual professional guides with cultural expertise',
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                desc: 'Licensed and insured for your peace of mind',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                desc: 'Tours across India, Sri Lanka, and international destinations',
              },
              {
                icon: Award,
                title: 'Award Winning',
                desc: 'Recognized for excellence in travel services',
              },
              {
                icon: DollarSign,
                title: 'Best Prices',
                desc: 'Competitive pricing with no hidden costs',
              },
              {
                icon: Heart,
                title: 'Personalized Care',
                desc: 'Custom itineraries tailored to your preferences',
              },
              {
                icon: TrendingUp,
                title: '10+ Years Experience',
                desc: 'Serving thousands of happy travelers',
              },
              {
                icon: Calendar,
                title: 'Flexible Booking',
                desc: 'Easy customization and booking process',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-purple-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Premium Fleet</h2>
            <p className="text-xl text-gray-600">Travel in comfort and style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={vehicleImage} alt="Luxury Bus" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl mb-2">Luxury Coaches</h3>
                <p className="text-gray-600 mb-4">
                  35-50 seater air-conditioned coaches for group tours
                </p>
                <Link to="/vehicles" className="text-orange-500 hover:text-orange-600 transition">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={vehicleImage} alt="Tempo Traveller" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl mb-2">Tempo Travellers</h3>
                <p className="text-gray-600 mb-4">
                  12-17 seater vehicles perfect for family groups
                </p>
                <Link to="/vehicles" className="text-orange-500 hover:text-orange-600 transition">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={vehicleImage} alt="SUV" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl mb-2">Premium SUVs</h3>
                <p className="text-gray-600 mb-4">Luxury vehicles for private and VIP tours</p>
                <Link to="/vehicles" className="text-orange-500 hover:text-orange-600 transition">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Meet Our Expert Guides</h2>
            <p className="text-xl text-gray-600">Professional, knowledgeable, and multilingual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Raj Kumar', languages: 'English, Hindi, Tamil', experience: '12 years' },
              { name: 'Priya Sharma', languages: 'English, Hindi, French', experience: '8 years' },
              { name: 'Mohamed Ali', languages: 'English, Arabic, Urdu', experience: '10 years' },
              { name: 'Sarah Chen', languages: 'English, Mandarin, Tamil', experience: '6 years' },
            ].map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden text-center"
              >
                <img src={guideImage} alt={guide.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl mb-2">{guide.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{guide.languages}</p>
                  <p className="text-orange-500">{guide.experience} experience</p>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition"
            >
              Meet All Our Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                location: 'Singapore',
                review:
                  'Amazing experience! The tour was well organized and our guide was extremely knowledgeable. Highly recommend Bakiya Tours!',
              },
              {
                name: 'Meera Patel',
                location: 'Mumbai',
                review:
                  "Best travel company I've ever worked with. They took care of every detail and made our family vacation unforgettable.",
              },
              {
                name: 'Ahmed Hassan',
                location: 'Dubai',
                review:
                  'Professional service from start to finish. The custom tour they designed for us was perfect. Will definitely book again!',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={familyImage}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl mb-4">Looking for a Custom Tour?</h2>
          <p className="text-xl mb-8">Let us create the perfect itinerary just for you</p>
          <Link
            to="/custom-tour"
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full transition"
          >
            Plan Your Custom Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
