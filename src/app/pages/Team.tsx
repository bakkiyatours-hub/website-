import { Star, Languages, Award, MapPin } from 'lucide-react';

const guideImage =
  'https://images.unsplash.com/photo-1659100939687-a7c10b4d5841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0b3VyJTIwZ3VpZGV8ZW58MXx8fHwxNzcyNDQ0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080';

export function Team() {
  const guides = [
    {
      name: 'Raj Kumar',
      role: 'Senior Tour Guide',
      languages: 'English, Hindi, Tamil, French',
      experience: '12 years',
      specialization: 'Heritage & Cultural Tours',
      rating: 4.9,
      tours: 450,
      bio: 'Raj is a passionate storyteller with deep knowledge of Indian history and culture. His engaging narratives bring historical sites to life.',
    },
    {
      name: 'Priya Sharma',
      role: 'International Tour Specialist',
      languages: 'English, Hindi, French, German',
      experience: '8 years',
      specialization: 'Europe & Asia Tours',
      rating: 4.8,
      tours: 320,
      bio: 'Priya specializes in international destinations with expertise in visa processes and cross-cultural communication.',
    },
    {
      name: 'Mohamed Ali',
      role: 'Adventure Tour Leader',
      languages: 'English, Arabic, Urdu, Malayalam',
      experience: '10 years',
      specialization: 'Adventure & Trekking',
      rating: 4.9,
      tours: 380,
      bio: 'An adventure enthusiast who has led numerous trekking expeditions and adventure tours across challenging terrains.',
    },
    {
      name: 'Sarah Chen',
      role: 'Cultural Experience Curator',
      languages: 'English, Mandarin, Tamil, Cantonese',
      experience: '6 years',
      specialization: 'Southeast Asia & China',
      rating: 4.7,
      tours: 250,
      bio: "Sarah's bilingual skills and cultural knowledge make her perfect for tours across China and Southeast Asia.",
    },
    {
      name: 'Arjun Menon',
      role: 'South India Specialist',
      languages: 'English, Malayalam, Tamil, Kannada',
      experience: '9 years',
      specialization: 'South Indian Heritage',
      rating: 4.8,
      tours: 340,
      bio: "Expert in South Indian temples, traditions, and cuisine. Arjun's tours are immersive cultural experiences.",
    },
    {
      name: 'Aisha Khan',
      role: 'Luxury Tour Coordinator',
      languages: 'English, Hindi, Urdu, Arabic',
      experience: '7 years',
      specialization: 'Luxury & VIP Tours',
      rating: 4.9,
      tours: 280,
      bio: 'Specialist in curating premium experiences with attention to every detail for discerning travelers.',
    },
    {
      name: 'David Wilson',
      role: 'International Tour Guide',
      languages: 'English, Spanish, Portuguese',
      experience: '11 years',
      specialization: 'Outbound Tours',
      rating: 4.8,
      tours: 410,
      bio: 'David brings international expertise to our team, specializing in tours to Europe and the Americas.',
    },
    {
      name: 'Lakshmi Iyer',
      role: 'Spiritual Tour Guide',
      languages: 'English, Hindi, Tamil, Sanskrit',
      experience: '15 years',
      specialization: 'Spiritual & Pilgrimage Tours',
      rating: 5.0,
      tours: 520,
      bio: 'With deep spiritual knowledge, Lakshmi guides transformative journeys to sacred sites across India.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={guideImage} alt="Our Team" className="w-full h-full object-cover" data-parallax="0.12" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4" data-reveal>
          <h1 className="text-5xl mb-4">Meet Our Expert Team</h1>
          <p className="text-xl">
            Professional, multilingual guides dedicated to making your journey unforgettable
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center" data-reveal-stagger>
            <div data-reveal>
              <div className="text-5xl mb-2">20+</div>
              <p className="text-purple-100">Expert Guides</p>
            </div>
            <div data-reveal>
              <div className="text-5xl mb-2">15+</div>
              <p className="text-purple-100">Languages</p>
            </div>
            <div data-reveal>
              <div className="text-5xl mb-2">5000+</div>
              <p className="text-purple-100">Tours Conducted</p>
            </div>
            <div data-reveal>
              <div className="text-5xl mb-2">4.9</div>
              <p className="text-purple-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-reveal>
            <h2 className="text-4xl mb-4">Our Professional Guides</h2>
            <p className="text-xl text-gray-600">
              Certified, experienced, and passionate about creating memorable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-stagger>
            {guides.map((guide, index) => (
              <div
                key={index}
                data-reveal
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition bk-hover-lift"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={guideImage} alt={guide.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="text-xl mb-1">{guide.name}</h3>
                    <p className="text-sm text-gray-200">{guide.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(guide.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm">{guide.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500">{guide.tours} tours</div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-sm">
                      <Languages className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" />
                      <span className="text-gray-600">{guide.languages}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Award className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" />
                      <span className="text-gray-600">{guide.experience} experience</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" />
                      <span className="text-gray-600">{guide.specialization}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{guide.bio}</p>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
                    Request {guide.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12" data-reveal>
            Why Our Guides Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-stagger>
            {[
              {
                title: 'Certified Professionals',
                desc: 'All our guides are certified by tourism authorities and undergo regular training.',
              },
              {
                title: 'Multilingual Experts',
                desc: 'Communicate in your preferred language with our diverse multilingual team.',
              },
              {
                title: 'Cultural Knowledge',
                desc: 'Deep understanding of local history, culture, and traditions.',
              },
              {
                title: 'Safety Trained',
                desc: 'First aid certified and trained in emergency response procedures.',
              },
              {
                title: 'Passionate Storytellers',
                desc: 'Making history and culture come alive through engaging narratives.',
              },
              {
                title: 'Customer Focused',
                desc: 'Dedicated to ensuring your comfort and satisfaction throughout the journey.',
              },
            ].map((item, index) => (
              <div key={index} data-reveal className="bg-white p-8 rounded-2xl shadow-lg text-center bk-hover-lift">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
          <h2 className="text-4xl mb-4">Want a Specific Guide for Your Tour?</h2>
          <p className="text-xl mb-8">Request your preferred guide when booking your package</p>
          <a
            href="/packages"
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full transition"
          >
            Browse Packages
          </a>
        </div>
      </section>
    </div>
  );
}
