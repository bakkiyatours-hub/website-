import { Users, Shield, Zap, Star, Check } from 'lucide-react';

const vehicleImage =
  'https://images.unsplash.com/photo-1765739099920-81a456008253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0b3VyJTIwYnVzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NzI0NTk4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080';

export function Vehicles() {
  const vehicles = [
    {
      name: 'Luxury Coach',
      capacity: '35-50 seats',
      image: vehicleImage,
      features: [
        'Air Conditioning',
        'Reclining Seats',
        'Entertainment System',
        'Restroom',
        'WiFi',
        'USB Charging',
      ],
      idealFor: 'Large group tours, corporate trips, pilgrimage groups',
      description:
        'Our luxury coaches provide the ultimate comfort for long-distance travel with spacious seating and modern amenities.',
    },
    {
      name: 'Mini Coach',
      capacity: '20-25 seats',
      image: vehicleImage,
      features: [
        'Air Conditioning',
        'Comfortable Seating',
        'Music System',
        'Large Windows',
        'Storage Space',
      ],
      idealFor: 'Medium-sized groups, school trips, family reunions',
      description:
        'Perfect for medium-sized groups, offering the right balance of comfort and efficiency.',
    },
    {
      name: 'Tempo Traveller - Luxury',
      capacity: '12-17 seats',
      image: vehicleImage,
      features: [
        'Push Back Seats',
        'Air Conditioning',
        'LED TV',
        'Music System',
        'Reading Lights',
        'USB Charging',
      ],
      idealFor: 'Extended families, corporate teams, small group tours',
      description:
        'Ideal for family groups and small corporate teams seeking comfort on multi-day tours.',
    },
    {
      name: 'Tempo Traveller - Standard',
      capacity: '12-17 seats',
      image: vehicleImage,
      features: ['Air Conditioning', 'Comfortable Seating', 'Music System', 'Ample Luggage Space'],
      idealFor: 'Budget-conscious groups, short trips',
      description:
        'Reliable and comfortable option for groups on a budget without compromising safety.',
    },
    {
      name: 'Premium SUV',
      capacity: '6-7 seats',
      image: vehicleImage,
      features: [
        'Luxury Interiors',
        'Climate Control',
        'Premium Sound',
        'Captain Seats',
        'Tinted Windows',
        'Full Safety Features',
      ],
      idealFor: 'VIP tours, luxury travelers, private family trips',
      description:
        'Experience luxury travel with our premium SUVs, perfect for exclusive tours and VIP guests.',
    },
    {
      name: 'Sedan',
      capacity: '4-5 seats',
      image: vehicleImage,
      features: [
        'Air Conditioning',
        'Comfortable Seats',
        'Music System',
        'GPS Navigation',
        'Safety Features',
      ],
      idealFor: 'Airport transfers, city tours, business travel',
      description: 'Comfortable sedans ideal for airport pickups and city tours for small groups.',
    },
    {
      name: 'Innova Crysta',
      capacity: '6-7 seats',
      image: vehicleImage,
      features: [
        'Spacious Interiors',
        'Air Conditioning',
        'Entertainment System',
        'Captain Seats',
        'Ample Boot Space',
      ],
      idealFor: 'Families, airport transfers, short trips',
      description:
        'One of the most popular choices for families, combining comfort with practicality.',
    },
    {
      name: 'Force Urbania',
      capacity: '10-13 seats',
      image: vehicleImage,
      features: [
        'Luxury Seating',
        'Air Conditioning',
        'Entertainment',
        'Captain Chairs',
        'WiFi',
        'Ambient Lighting',
      ],
      idealFor: 'Premium small groups, luxury family tours',
      description:
        'The newest addition to our fleet, offering luxury van experience for discerning travelers.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={vehicleImage} alt="Our Fleet" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl mb-4">Our Premium Fleet</h1>
          <p className="text-xl">Travel in comfort and style with our well-maintained vehicles</p>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">50+</div>
              <p className="text-purple-100">Vehicles</p>
            </div>
            <div>
              <div className="text-5xl mb-2">100%</div>
              <p className="text-purple-100">Well Maintained</p>
            </div>
            <div>
              <div className="text-5xl mb-2">24/7</div>
              <p className="text-purple-100">Road Assistance</p>
            </div>
            <div>
              <div className="text-5xl mb-2">GPS</div>
              <p className="text-purple-100">Tracked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Vehicle Collection</h2>
            <p className="text-xl text-gray-600">Choose the perfect vehicle for your journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {vehicle.capacity}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{vehicle.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm mb-2">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {vehicle.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {vehicle.features.length > 4 && (
                        <p className="text-sm text-purple-600 mt-2">
                          +{vehicle.features.length - 4} more features
                        </p>
                      )}
                    </div>

                    <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm">
                        <span className="font-medium">Ideal for:</span> {vehicle.idealFor}
                      </p>
                    </div>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
                      Request This Vehicle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Safety & Maintenance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fully Insured',
                desc: 'All vehicles covered with comprehensive insurance',
              },
              {
                icon: Check,
                title: 'Regular Service',
                desc: 'Maintained as per manufacturer guidelines',
              },
              {
                icon: Zap,
                title: 'GPS Tracking',
                desc: 'Real-time tracking for safety and security',
              },
              {
                icon: Star,
                title: 'Quality Assured',
                desc: 'Thorough inspection before every trip',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Expert Drivers</h2>
              <p className="text-lg text-gray-600 mb-4">
                All our vehicles come with experienced, licensed drivers who are:
              </p>
              <ul className="space-y-3">
                {[
                  'Professionally trained and courteous',
                  'Well-versed with routes and destinations',
                  'Fluent in multiple languages',
                  'Background verified and trustworthy',
                  'Trained in defensive driving',
                  'Knowledgeable about local areas',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={vehicleImage}
                alt="Professional Drivers"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Need a Specific Vehicle?</h2>
          <p className="text-xl mb-8">Contact us to discuss your transportation needs</p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
