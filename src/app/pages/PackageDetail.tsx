import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Calendar, Check, ChevronDown, ChevronUp, Clock, MapPin, MessageCircle, Star, Users, X } from 'lucide-react';

type FAQItem = { q: string; a: string };
type ItineraryItem = { day: number; title: string; activities: string };
type PackageInfo = {
  title: string;
  location: string;
  duration: string;
  minTravelers: string;
  rating: number;
  reviews: number;
  price: string;
  overview: string;
  highlights: string[];
  images: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  accommodation: string;
  faqs: FAQItem[];
};

const commonInclusions = [
  'Hotel accommodation',
  'Daily breakfast',
  'Private/scheduled transfers',
  'Sightseeing as per itinerary',
  'All taxes and service charges',
];

const commonExclusions = [
  'Flight/train tickets',
  'Lunch and dinner',
  'Personal expenses',
  'Travel insurance',
  'Optional activities',
];

const packagesById: Record<string, PackageInfo> = {
  '1': {
    title: 'Golden Triangle Tour',
    location: 'Delhi, Agra, Jaipur',
    duration: '7 Days / 6 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.8,
    reviews: 245,
    price: 'INR 45,000',
    overview: 'Classic North India heritage journey across forts, palaces, and Mughal landmarks.',
    highlights: ['India Gate', 'Taj Mahal', 'Amber Fort'],
    images: [
      'https://images.unsplash.com/photo-1623811852177-611cda0b372f?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Delhi', activities: 'Pickup, hotel check-in, local orientation' },
      { day: 2, title: 'Delhi City Tour', activities: 'Red Fort, Qutub Minar, heritage sites' },
      { day: 3, title: 'Delhi to Agra', activities: 'Road transfer and evening leisure' },
      { day: 4, title: 'Agra to Jaipur', activities: 'Sunrise Taj Mahal and transfer' },
      { day: 5, title: 'Jaipur Tour', activities: 'Amber Fort, City Palace, local market' },
      { day: 6, title: 'Jaipur Leisure', activities: 'Culture and shopping experiences' },
      { day: 7, title: 'Departure', activities: 'Drop for onward travel' },
    ],
    inclusions: [...commonInclusions, 'Major monument entry support'],
    exclusions: commonExclusions,
    accommodation: '4-Star city hotels in Delhi, Agra, and Jaipur.',
    faqs: [
      { q: 'Best season?', a: 'October to March is ideal.' },
      { q: 'Family friendly?', a: 'Yes, this is a popular family package.' },
      { q: 'Can hotels be upgraded?', a: 'Yes, upgrades are available.' },
    ],
  },
  '2': {
    title: 'Singapore Delight',
    location: 'Marina Bay, Sentosa',
    duration: '5 Days / 4 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.7,
    reviews: 198,
    price: 'INR 75,000',
    overview: 'Modern city, iconic skyline, and family attractions in Singapore.',
    highlights: ['Marina Bay Sands', 'Sentosa', 'Gardens by the Bay'],
    images: [
      'https://images.unsplash.com/photo-1727880676753-9ba90268d3ce?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1496939376851-89342e90adcd?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival', activities: 'Airport pickup and Marina Bay evening walk' },
      { day: 2, title: 'Universal Studios', activities: 'Full day at theme park' },
      { day: 3, title: 'Sentosa Island', activities: 'Island attractions and leisure' },
      { day: 4, title: 'City & Shopping', activities: 'Gardens by the Bay and Orchard Road' },
      { day: 5, title: 'Departure', activities: 'Transfer to airport' },
    ],
    inclusions: [...commonInclusions, 'Universal Studios ticket'],
    exclusions: [...commonExclusions, 'Visa fees'],
    accommodation: '4-Star hotel with city access and modern amenities.',
    faqs: [
      { q: 'Visa required?', a: 'Yes, visa is required for Indian passport holders.' },
      { q: 'Suitable for kids?', a: 'Yes, very family friendly.' },
      { q: 'Can itinerary be customized?', a: 'Yes, customization is available.' },
    ],
  },
  '3': {
    title: 'Magical Thailand',
    location: 'Bangkok, Pattaya',
    duration: '6 Days / 5 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.6,
    reviews: 154,
    price: 'INR 55,000',
    overview: 'Beach fun, nightlife, city temples, and entertainment.',
    highlights: ['Coral Island', 'Grand Palace', 'Night Markets'],
    images: [
      'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Bangkok', activities: 'Transfer and check-in' },
      { day: 2, title: 'Pattaya Day', activities: 'Coral Island and beach activities' },
      { day: 3, title: 'Leisure', activities: 'Optional shows and free time' },
      { day: 4, title: 'Bangkok Transfer', activities: 'Travel and evening markets' },
      { day: 5, title: 'Bangkok Tour', activities: 'Temples and city landmarks' },
      { day: 6, title: 'Departure', activities: 'Airport transfer' },
    ],
    inclusions: commonInclusions,
    exclusions: [...commonExclusions, 'Visa fees'],
    accommodation: '4-Star hotels in Pattaya and Bangkok.',
    faqs: [
      { q: 'Best time to go?', a: 'November to February is best.' },
      { q: 'Good for couples?', a: 'Yes, very popular for couples and groups.' },
      { q: 'Can I add Phuket?', a: 'Yes, add-on options are available.' },
    ],
  },
  '4': {
    title: 'Sri Lanka Heritage',
    location: 'Colombo, Kandy, Galle',
    duration: '8 Days / 7 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.7,
    reviews: 128,
    price: 'INR 50,000',
    overview: 'Temple heritage, tea hills, and coastal beauty across Sri Lanka.',
    highlights: ['Temple of the Tooth', 'Tea Estates', 'Galle Fort'],
    images: [
      'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Colombo', activities: 'Pickup and city orientation' },
      { day: 2, title: 'Colombo to Kandy', activities: 'Temple and cultural visit' },
      { day: 3, title: 'Kandy Local', activities: 'Gardens and cultural show' },
      { day: 4, title: 'Tea Country', activities: 'Nuwara Eliya scenic route' },
      { day: 5, title: 'Southbound', activities: 'Travel to coastal belt' },
      { day: 6, title: 'Galle Tour', activities: 'Fort and beach areas' },
      { day: 7, title: 'Leisure', activities: 'Local experience day' },
      { day: 8, title: 'Departure', activities: 'Airport transfer' },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    accommodation: '4-Star stays across city, hill, and coastal regions.',
    faqs: [
      { q: 'Is vegetarian food available?', a: 'Yes, it is widely available.' },
      { q: 'Is visa needed?', a: 'ETA/e-visa is typically required.' },
      { q: 'Can it be shortened?', a: 'Yes, 6-day options are available.' },
    ],
  },
  '5': {
    title: 'Malaysia Explorer',
    location: 'KL, Genting, Malacca',
    duration: '6 Days / 5 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.5,
    reviews: 112,
    price: 'INR 60,000',
    overview: 'Urban landmarks, highland attractions, and heritage streets.',
    highlights: ['Petronas Towers', 'Genting Highlands', 'Malacca Walk'],
    images: [
      'https://images.unsplash.com/photo-1553383398-c40c57291c60?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1526483360412-f4dbaf036963?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival KL', activities: 'Airport pickup and check-in' },
      { day: 2, title: 'KL Tour', activities: 'City attractions and skyline spots' },
      { day: 3, title: 'Genting Day', activities: 'Cable car and hill activities' },
      { day: 4, title: 'Malacca', activities: 'Heritage district and local cuisine' },
      { day: 5, title: 'Return KL', activities: 'Shopping and leisure' },
      { day: 6, title: 'Departure', activities: 'Airport transfer' },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    accommodation: '4-Star hotels in KL and Malacca.',
    faqs: [
      { q: 'Senior citizen friendly?', a: 'Yes, with moderate pacing.' },
      { q: 'Can I add Langkawi?', a: 'Yes, extension options are available.' },
      { q: 'Is airport transfer included?', a: 'Yes, both-way transfers are included.' },
    ],
  },
  '6': {
    title: 'Dubai Luxury',
    location: 'Dubai, Abu Dhabi',
    duration: '5 Days / 4 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.8,
    reviews: 173,
    price: 'INR 85,000',
    overview: 'Premium city break with iconic landmarks and desert adventure.',
    highlights: ['Burj Khalifa', 'Desert Safari', 'Grand Mosque'],
    images: [
      'https://images.unsplash.com/photo-1735320864933-601d2cac9371?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Dubai', activities: 'Check-in and marina evening' },
      { day: 2, title: 'City Tour', activities: 'Downtown attractions and Burj area' },
      { day: 3, title: 'Desert Safari', activities: 'Dune and camp experience' },
      { day: 4, title: 'Abu Dhabi', activities: 'Grand Mosque and city visit' },
      { day: 5, title: 'Departure', activities: 'Airport transfer' },
    ],
    inclusions: commonInclusions,
    exclusions: [...commonExclusions, 'Visa fees'],
    accommodation: '4-Star/5-Star premium hotels in Dubai.',
    faqs: [
      { q: 'Is safari included?', a: 'Yes, in standard plan.' },
      { q: 'Suitable for kids?', a: 'Yes, with family-friendly pacing.' },
      { q: 'Can shopping time be added?', a: 'Yes, we can adjust the schedule.' },
    ],
  },
  '7': {
    title: 'Kerala Backwaters',
    location: 'Kochi, Munnar, Alleppey',
    duration: '8 Days / 7 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.7,
    reviews: 138,
    price: 'INR 52,000',
    overview: 'Tea hills, backwater cruise, and coastal heritage in Kerala.',
    highlights: ['Munnar Tea Gardens', 'Houseboat Cruise', 'Fort Kochi'],
    images: [
      'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1593691509543-c55fb32e8b9b?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Kochi', activities: 'Pickup and local heritage walk' },
      { day: 2, title: 'To Munnar', activities: 'Scenic hill drive and check-in' },
      { day: 3, title: 'Munnar Tour', activities: 'Tea gardens and viewpoints' },
      { day: 4, title: 'To Alleppey', activities: 'Transfer to backwater region' },
      { day: 5, title: 'Houseboat', activities: 'Cruise with local cuisine' },
      { day: 6, title: 'Leisure', activities: 'Village visit and relaxation' },
      { day: 7, title: 'Return Kochi', activities: 'Shopping and free time' },
      { day: 8, title: 'Departure', activities: 'Drop for onward journey' },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    accommodation: '4-Star hotels and houseboat stay.',
    faqs: [
      { q: 'Private houseboat?', a: 'Private and shared options are available.' },
      { q: 'Best season?', a: 'September to March.' },
      { q: 'Honeymoon friendly?', a: 'Yes, highly recommended.' },
    ],
  },
  '8': {
    title: 'Phuket Paradise',
    location: 'Phuket, Phi Phi Island',
    duration: '5 Days / 4 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.6,
    reviews: 97,
    price: 'INR 62,000',
    overview: 'Island-focused Thailand holiday with beaches and water activities.',
    highlights: ['Phi Phi', 'Patong Beach', 'Sunset Views'],
    images: [
      'https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1526483360412-f4dbaf036963?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Phuket', activities: 'Transfer and beach time' },
      { day: 2, title: 'Phi Phi Tour', activities: 'Island hopping and snorkeling' },
      { day: 3, title: 'Local Tour', activities: 'Temple and viewpoints' },
      { day: 4, title: 'Leisure', activities: 'Optional water sports' },
      { day: 5, title: 'Departure', activities: 'Airport transfer' },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    accommodation: '4-Star beachside accommodation.',
    faqs: [
      { q: 'Is snorkeling included?', a: 'Included in island tours.' },
      { q: 'Can Krabi be added?', a: 'Yes, add-on package available.' },
      { q: 'Nightlife options?', a: 'Yes, major beach zones have nightlife.' },
    ],
  },
  '9': {
    title: 'Rajasthan Royal',
    location: 'Jaipur, Jodhpur, Udaipur',
    duration: '9 Days / 8 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.8,
    reviews: 142,
    price: 'INR 58,000',
    overview: 'Forts, palaces, and royal heritage experiences across Rajasthan.',
    highlights: ['Amber Fort', 'Mehrangarh Fort', 'Udaipur Lakes'],
    images: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1615731414532-6b26976cc153?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Jaipur', activities: 'Check-in and local market' },
      { day: 2, title: 'Jaipur Tour', activities: 'Fort and palace visits' },
      { day: 3, title: 'To Jodhpur', activities: 'Road transfer and check-in' },
      { day: 4, title: 'Jodhpur Tour', activities: 'Mehrangarh and old city' },
      { day: 5, title: 'To Udaipur', activities: 'Scenic route transfer' },
      { day: 6, title: 'Udaipur Tour', activities: 'Palace and lake experiences' },
      { day: 7, title: 'Leisure', activities: 'Optional local activities' },
      { day: 8, title: 'Shopping', activities: 'Textile and crafts' },
      { day: 9, title: 'Departure', activities: 'Drop for onward travel' },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    accommodation: '4-Star heritage-style hotels.',
    faqs: [
      { q: 'Summer travel?', a: 'Winter months are most comfortable.' },
      { q: 'Can desert camp be added?', a: 'Yes, Jaisalmer add-on is possible.' },
      { q: 'Is this culture focused?', a: 'Yes, this package is heritage rich.' },
    ],
  },
  '10': {
    title: 'Murugan Temple Tour',
    location: 'Tiruchirappalli, Madurai',
    duration: '4 Days / 3 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.7,
    reviews: 88,
    price: 'INR 35,000',
    overview: 'Spiritual temple circuit with focused Tamil Nadu religious sites.',
    highlights: ['Temple Rituals', 'Madurai Heritage', 'Pilgrim Route'],
    images: [
      'https://images.unsplash.com/photo-1615196451843-54c40a46d1e9?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1599582902546-f05676d1e5ba?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Trichy', activities: 'Temple visits and check-in' },
      { day: 2, title: 'To Madurai', activities: 'Enroute darshan stops' },
      { day: 3, title: 'Madurai Circuit', activities: 'Guided temple route' },
      { day: 4, title: 'Departure', activities: 'Return transfer' },
    ],
    inclusions: [...commonInclusions, 'Temple guide support'],
    exclusions: commonExclusions,
    accommodation: 'Comfort hotels near temple areas.',
    faqs: [
      { q: 'Senior friendly?', a: 'Yes, with paced itinerary.' },
      { q: 'Dress code?', a: 'Traditional modest wear is recommended.' },
      { q: 'Can other temples be added?', a: 'Yes, customizations are available.' },
    ],
  },
  '11': {
    title: 'Kodaikanal Hill Station',
    location: 'Kodaikanal, Coonoor',
    duration: '3 Days / 2 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.5,
    reviews: 73,
    price: 'INR 25,000',
    overview: 'Quick mountain getaway with cool weather and scenic viewpoints.',
    highlights: ['Kodaikanal Lake', 'Pillar Rocks', 'Coakers Walk'],
    images: [
      'https://images.unsplash.com/photo-1624981756765-af4114965bf6?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1586502200910-5c0b8b1db2a3?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival', activities: 'Check-in and lake visit' },
      { day: 2, title: 'Sightseeing', activities: 'Viewpoints and gardens' },
      { day: 3, title: 'Departure', activities: 'Return transfer' },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    accommodation: 'Hill-view 3/4-star hotels with modern amenities.',
    faqs: [
      { q: 'Weekend friendly?', a: 'Yes, this is a compact short tour.' },
      { q: 'Can trekking be added?', a: 'Yes, optional activities can be added.' },
      { q: 'Can Ooty be combined?', a: 'Yes, extension option available.' },
    ],
  },
  '12': {
    title: 'Tamil Nadu UNESCO Heritage Tour',
    location: 'Chennai, Mahabalipuram, Thanjavur, Gangaikonda Cholapuram, Darasuram',
    duration: '6 Days / 5 Nights',
    minTravelers: 'Min 2 Persons',
    rating: 4.9,
    reviews: 184,
    price: 'INR 52,000',
    overview:
      'Immersive heritage route across UNESCO-listed architecture and Chola temple history in Tamil Nadu.',
    highlights: ['Shore Temple', 'Brihadeeswarar Temple', 'Airavatesvara Temple'],
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1582972236019-ea9dbe1945c6?auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1666170652146-0fa59ef2f558?auto=format&fit=crop&w=1080&q=80',
    ],
    itinerary: [
      { day: 1, title: 'Arrival Chennai', activities: 'Marina Beach and Kapaleeshwarar Temple' },
      { day: 2, title: 'Mahabalipuram', activities: 'Shore Temple, Pancha Rathas, Arjunas Penance' },
      { day: 3, title: 'Thanjavur', activities: 'Brihadeeswarar Temple visit' },
      { day: 4, title: 'Gangaikonda Cholapuram', activities: 'Temple visit and transfer' },
      { day: 5, title: 'Darasuram', activities: 'Airavatesvara Temple and local heritage walk' },
      { day: 6, title: 'Departure', activities: 'Transfer to Chennai/nearest station' },
    ],
    inclusions: [...commonInclusions, 'Monument entry tickets', 'Heritage guide'],
    exclusions: commonExclusions,
    accommodation: '4-Star hotels in Chennai, Mahabalipuram, and Thanjavur.',
    faqs: [
      { q: 'Best time to visit?', a: 'October to March is ideal.' },
      { q: 'International traveler friendly?', a: 'Yes, very suitable for global travelers.' },
      { q: 'Can itinerary be customized?', a: 'Yes, customization is available.' },
    ],
  },
};

export function PackageDetail() {
  const { id = '1' } = useParams();
  const pkg = useMemo(() => packagesById[id] ?? packagesById['1'], [id]);
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setCurrentImage(0);
    setExpandedDay(1);
  }, [id]);

  const stars = Math.round(pkg.rating);
  const whatsappNumber = '919626488887';

  function openWhatsAppWithFormDetails() {
    const form = formRef.current;
    const data = form ? new FormData(form) : new FormData();
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const lines = [
      'New Website Enquiry',
      `Package: ${pkg.title}`,
      `Duration: ${pkg.duration}`,
      '',
      get('fullName') ? `Full Name: ${get('fullName')}` : '',
      get('email') ? `Email: ${get('email')}` : '',
      get('phone') ? `Phone: ${get('phone')}` : '',
      get('country') ? `Country: ${get('country')}` : '',
      get('destination') ? `Destination: ${get('destination')}` : '',
      get('days') ? `Days: ${get('days')}` : '',
      get('travelDate') ? `Travel Date: ${get('travelDate')}` : '',
      get('travelers') ? `Travelers: ${get('travelers')}` : '',
      get('requirements') ? `Requirements: ${get('requirements')}` : '',
    ].filter(Boolean);

    const text = lines.join('\n');
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div>
      <section className="relative h-[500px]">
        <img src={pkg.images[currentImage]} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-20 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <p className="text-sm mb-2">{pkg.location}</p>
            <h1 className="text-4xl mb-4">
              {pkg.title} - {pkg.duration}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {pkg.duration}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="w-4 h-4" />
                {pkg.minTravelers}
              </span>
              <span className="inline-flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-white/50'}`}
                  />
                ))}
                <span>({pkg.reviews} reviews)</span>
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto">
              {pkg.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${currentImage === index ? 'border-white' : 'border-transparent'}`}
                >
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl mb-4">Tour Overview</h2>
                <p className="text-gray-600 leading-relaxed">{pkg.overview}</p>
              </div>

              <div>
                <h2 className="text-2xl mb-4">Top Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {pkg.highlights.map((item) => (
                    <div key={item} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl mb-4">Day-wise Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                            {day.day}
                          </div>
                          <h3 className="text-lg text-left">{day.title}</h3>
                        </div>
                        {expandedDay === day.day ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {expandedDay === day.day && <div className="p-4 bg-white text-gray-600">{day.activities}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl mb-4">Inclusions</h2>
                  <div className="space-y-2">
                    {pkg.inclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl mb-4">Exclusions</h2>
                  <div className="space-y-2">
                    {pkg.exclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl mb-4">Accommodation</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-3">{pkg.accommodation}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Air Conditioning', 'Free WiFi', 'Restaurant', 'Parking'].map((tag) => (
                      <span key={tag} className="bg-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {pkg.faqs.map((faq) => (
                    <div key={faq.q} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg mb-2">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-6 space-y-6">
                <div className="border-b pb-6">
                  <h3 className="text-2xl mb-2">Custom Tour Inquiry Form</h3>
                  <p className="text-gray-600">
                    Share your travel preferences and we will build a personalized plan for this package.
                  </p>
                </div>

                <form
                  ref={formRef}
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-sm mb-2">Full Name *</label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Country of Origin</label>
                    <select
                      name="country"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                      <option>Select country</option>
                      <option>India</option>
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>UAE</option>
                      <option>Thailand</option>
                      <option>Sri Lanka</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="border-t pt-4">
                    <label className="block text-sm mb-2">Preferred Destination(s) *</label>
                    <input
                      name="destination"
                      type="text"
                      defaultValue={pkg.title}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Number of Days</label>
                    <select
                      name="days"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                      <option>{pkg.itinerary.length} days</option>
                      <option>3-5 days</option>
                      <option>6-8 days</option>
                      <option>9-12 days</option>
                      <option>13+ days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Preferred Travel Date</label>
                    <div className="relative">
                      <input
                        name="travelDate"
                        type="date"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                      <option>2 persons</option>
                      <option>3 persons</option>
                      <option>4 persons</option>
                      <option>5+ persons</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Special Requirements</label>
                    <textarea
                      name="requirements"
                      rows={4}
                      placeholder="Tell us your preferences..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full py-3 rounded-full transition flex items-center justify-center gap-2 text-lg font-semibold text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 bk-hover-lift"
                    aria-label="Open WhatsApp chat"
                    onClick={() => openWhatsAppWithFormDetails()}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Message Inquiry
                  </button>
                </form>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <div className="flex items-center justify-between mb-1">
                    <span>Selected Place</span>
                    <span className="font-medium inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {pkg.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
