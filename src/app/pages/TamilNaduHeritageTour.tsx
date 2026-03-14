import { Star } from 'lucide-react';
import breadcumbsVideo from '../../assets/breadcumbsvideo.mp4';

const itinerary = [
  {
    day: 'Day 1 - Arrival in Chennai',
    details: [
      'Arrival at Chennai Airport or Railway Station',
      'Hotel check-in and local sightseeing',
      'Marina Beach',
      'Kapaleeshwarar Temple',
      'Overnight stay in Chennai',
    ],
  },
  {
    day: 'Day 2 - Chennai to Mahabalipuram',
    details: [
      'Travel to Mahabalipuram',
      'Group of Monuments at Mahabalipuram',
      'Shore Temple',
      'Pancha Rathas',
      "Arjuna's Penance",
      'Overnight stay in Mahabalipuram',
    ],
  },
  {
    day: 'Day 3 - Mahabalipuram to Thanjavur',
    details: [
      'Travel to Thanjavur',
      'Visit Brihadeeswarar Temple',
      'Part of the Great Living Chola Temples',
    ],
  },
  {
    day: 'Day 4 - Thanjavur to Gangaikonda Cholapuram',
    details: [
      'Travel to Gangaikonda Cholapuram',
      'Visit Gangaikonda Cholapuram Temple',
      'Continue to Darasuram',
    ],
  },
  {
    day: 'Day 5 - Darasuram Heritage Visit',
    details: [
      'Visit Airavatesvara Temple',
      'UNESCO monument from the Chola dynasty',
      'Return to Thanjavur / Kumbakonam for overnight stay',
    ],
  },
  {
    day: 'Day 6 - Departure',
    details: ['Return to Chennai or nearest airport / railway station for departure'],
  },
];

const inclusions = [
  '5 Nights accommodation in 4-star hotels',
  'Daily breakfast',
  'Private vehicle for all sightseeing',
  'Professional heritage guide',
  'Monument entry tickets',
  'All taxes and service charges',
];

const exclusions = [
  'Flights or train tickets',
  'Lunch and dinner',
  'Personal expenses',
  'Travel insurance',
  'Optional activities',
];

const facilities = ['Air Conditioning', 'Free WiFi', 'Restaurant', 'Parking', '24/7 Reception'];

export function TamilNaduHeritageTour() {
  return (
    <main>
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover">
            <source src={breadcumbsVideo} type="video/mp4" />
          </video>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-orange-300 text-sm mb-2">Heritage Tour - 6 Days Package</p>
          <h1 className="text-4xl md:text-5xl mb-4">UNESCO World Heritage Sites of Tamil Nadu</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Destinations: Chennai, Mahabalipuram, Thanjavur, Gangaikonda Cholapuram, Darasuram
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 px-3 py-2 rounded-full">6 Days / 5 Nights</span>
            <span className="bg-white/15 px-3 py-2 rounded-full">Minimum 2 Persons</span>
            <span className="bg-white/15 px-3 py-2 rounded-full inline-flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              Hotel Stay
            </span>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl mb-4">Tour Overview</h2>
            <p className="text-gray-700 mb-4">
              Discover the rich cultural and architectural heritage of Tamil Nadu through this
              immersive UNESCO heritage tour.
            </p>
            <p className="text-gray-700 mb-4">
              Visit ancient temples built by the Chola dynasty and explore magnificent stone
              architecture, historic sculptures, and sacred temple towns.
            </p>
            <p className="text-gray-700">
              Perfect for travelers who want to experience history, culture, and spirituality in
              South India.
            </p>
          </div>

          <div>
            <h2 className="text-3xl mb-6">Day-wise Itinerary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itinerary.map((item) => (
                <article key={item.day} className="bg-white rounded-2xl shadow p-6">
                  <h3 className="text-xl mb-3 text-purple-700">{item.day}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h2 className="text-2xl mb-4">Inclusions</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h2 className="text-2xl mb-4">Exclusions</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-3xl mb-3">Accommodation</h2>
            <p className="text-gray-700 mb-4">
              Comfortable 4-Star Hotels in Chennai, Mahabalipuram, and Thanjavur with modern
              amenities.
            </p>
            <h3 className="text-xl mb-2">Facilities include:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {facilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <article className="bg-white rounded-xl shadow p-5">
                <h3 className="text-lg mb-2">Best time to visit?</h3>
                <p className="text-gray-700">
                  The best time to visit Tamil Nadu heritage sites is October to March.
                </p>
              </article>
              <article className="bg-white rounded-xl shadow p-5">
                <h3 className="text-lg mb-2">Is this tour suitable for international travelers?</h3>
                <p className="text-gray-700">
                  Yes, this tour is perfect for travelers interested in South Indian culture and
                  temple architecture.
                </p>
              </article>
              <article className="bg-white rounded-xl shadow p-5">
                <h3 className="text-lg mb-2">Can the itinerary be customized?</h3>
                <p className="text-gray-700">
                  Yes, we can customize the tour according to your travel preferences.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
