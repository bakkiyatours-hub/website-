import { Award, Users, Globe, Shield, Heart, TrendingUp } from 'lucide-react';

const aboutImage =
  'https://images.unsplash.com/photo-1768410318398-fcd1dc09dfc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0b3VyJTIwZ3JvdXAlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcyNDU5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl mb-4">About Bakiya Tours</h1>
          <p className="text-xl">Your Trusted Travel Partner Since 2010</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Bakiya Tours is a premier travel company specializing in creating unforgettable
                travel experiences across India, Sri Lanka, and international destinations including
                Singapore, Malaysia, UAE, and Thailand.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With over a decade of experience in the travel industry, we have successfully served
                thousands of satisfied travelers from around the world. Our commitment to
                excellence, personalized service, and attention to detail sets us apart.
              </p>
              <p className="text-lg text-gray-600">
                We believe that travel is not just about visiting places, but about creating
                memories, experiencing cultures, and transforming perspectives. Our expert team
                works tirelessly to ensure every journey with us is exceptional.
              </p>
            </div>
            <div>
              <img src={aboutImage} alt="Our Team" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="text-lg">
                To provide exceptional, culturally immersive travel experiences that exceed
                expectations while maintaining the highest standards of safety, comfort, and
                personalized service. We strive to make every journey memorable and transformative
                for our travelers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl">
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-lg">
                To become the most trusted and preferred travel partner globally, known for our
                expertise in cultural tourism, commitment to sustainability, and dedication to
                creating meaningful connections between travelers and destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              {
                year: '2010',
                title: 'Foundation',
                desc: 'Started with a vision to redefine travel experiences',
              },
              {
                year: '2013',
                title: 'Expansion',
                desc: 'Expanded operations to Sri Lanka and international destinations',
              },
              { year: '2016', title: 'Recognition', desc: 'Received Excellence in Tourism Award' },
              {
                year: '2019',
                title: 'Growth',
                desc: 'Reached milestone of 10,000 satisfied travelers',
              },
              { year: '2022', title: 'Innovation', desc: 'Launched custom tour planning platform' },
              {
                year: '2026',
                title: 'Leadership',
                desc: 'Established as a leading premium travel company',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2">{milestone.title}</h3>
                  <p className="text-lg text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Guides',
                desc: 'Multilingual professionals with deep cultural knowledge',
              },
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'Licensed, insured, and committed to your security',
              },
              {
                icon: Globe,
                title: 'Global Network',
                desc: 'Strong partnerships across multiple countries',
              },
              {
                icon: Heart,
                title: 'Personalization',
                desc: 'Custom itineraries tailored to your preferences',
              },
              {
                icon: Award,
                title: 'Quality Assured',
                desc: 'Handpicked hotels, restaurants, and experiences',
              },
              {
                icon: TrendingUp,
                title: 'Value for Money',
                desc: 'Competitive pricing with no hidden costs',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-purple-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Countries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['India', 'Sri Lanka', 'Singapore', 'Malaysia', 'UAE', 'Thailand'].map(
              (country, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-12 h-12 text-purple-600" />
                  </div>
                  <p className="text-lg">{country}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Certifications & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'ISO Certified', desc: 'Quality Management' },
              { title: 'Tourism Award', desc: 'Excellence 2023' },
              { title: 'Licensed Operator', desc: 'Government Approved' },
              { title: 'Safety Certified', desc: 'International Standards' },
            ].map((badge, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <Award className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Let us help you create unforgettable memories</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/packages"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full transition"
            >
              Browse Packages
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-full transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
