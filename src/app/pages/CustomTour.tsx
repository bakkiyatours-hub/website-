import { useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import breadcumbsVideo from '../../assets/breadcumbsvideo.mp4';

const tourGroupImage =
  'https://images.unsplash.com/photo-1768410318398-fcd1dc09dfc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0b3VyJTIwZ3JvdXAlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcyNDU5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080';

export function CustomTour() {
  const whatsappNumber = '919626488887';
  const formRef = useRef<HTMLFormElement>(null);

  function openWhatsAppWithFormDetails() {
    const form = formRef.current;
    const data = form ? new FormData(form) : new FormData();
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const lines = [
      'New Website Enquiry',
      'Type: Custom Tour',
      '',
      get('fullName') ? `Full Name: ${get('fullName')}` : '',
      get('email') ? `Email: ${get('email')}` : '',
      get('phone') ? `Phone: ${get('phone')}` : '',
      get('country') ? `Country: ${get('country')}` : '',
      get('destinations') ? `Destinations: ${get('destinations')}` : '',
      get('days') ? `Days: ${get('days')}` : '',
      get('adults') ? `Adults: ${get('adults')}` : '',
      get('children') ? `Children: ${get('children')}` : '',
      get('childrenAges') ? `Children Ages: ${get('childrenAges')}` : '',
      get('travelDates') ? `Travel Dates: ${get('travelDates')}` : '',
      get('budget') ? `Budget: ${get('budget')}` : '',
      get('accommodation') ? `Accommodation: ${get('accommodation')}` : '',
      get('requirements') ? `Requirements: ${get('requirements')}` : '',
    ].filter(Boolean);

    const text = lines.join('\n');
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover">
            <source src={breadcumbsVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl mb-4">Plan Your Custom Tour</h1>
          <p className="text-xl">
            Tell us your dream destination and we'll create the perfect itinerary just for you
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl mb-6">Custom Tour Inquiry Form</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below with your travel preferences, and our expert team will create
              a personalized itinerary tailored to your needs. We'll get back to you within 24
              hours.
            </p>

            <form ref={formRef} className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Full Name *</label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Country of Origin</label>
                  <select name="country" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
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
              </div>

              {/* Travel Details */}
              <div className="border-t pt-6">
                <h3 className="text-xl mb-4">Travel Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2">Preferred Destination(s) *</label>
                    <input
                      name="destinations"
                      type="text"
                      placeholder="e.g., India, Singapore, Thailand"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Number of Days</label>
                    <select name="days" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
                      <option>Select duration</option>
                      <option>3-5 days</option>
                      <option>6-8 days</option>
                      <option>9-12 days</option>
                      <option>13-15 days</option>
                      <option>15+ days</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2">Number of Adults</label>
                    <select name="adults" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Number of Children</label>
                    <select name="children" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Children Ages</label>
                    <input
                      name="childrenAges"
                      type="text"
                      placeholder="e.g., 5, 8"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2">Preferred Travel Dates</label>
                    <input
                      name="travelDates"
                      type="text"
                      placeholder="e.g., March 2026"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Budget Range (per person)</label>
                    <select name="budget" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
                      <option>Select budget</option>
                      <option>₹30,000 - ₹50,000</option>
                      <option>₹50,000 - ₹75,000</option>
                      <option>₹75,000 - ₹1,00,000</option>
                      <option>₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm mb-2">Accommodation Preference</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="accommodation"
                        value="3-star"
                        className="text-purple-600"
                      />
                      <span>3-Star Hotels</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="accommodation"
                        value="4-star"
                        className="text-purple-600"
                        defaultChecked
                      />
                      <span>4-Star Hotels</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="accommodation"
                        value="5-star"
                        className="text-purple-600"
                      />
                      <span>5-Star Hotels</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Special Requirements / Interests</label>
                  <textarea
                    name="requirements"
                    rows={5}
                    placeholder="Tell us about your interests, dietary restrictions, accessibility needs, or any special requests..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-full flex items-center justify-center gap-2 transition text-lg font-semibold shadow-lg hover:shadow-xl bk-hover-lift"
                  onClick={() => openWhatsAppWithFormDetails()}
                  aria-label="Open WhatsApp chat"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Chat
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  We'll respond to your inquiry within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Custom Tours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Why Choose Our Custom Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Itineraries',
                desc: 'Every tour is designed specifically for you based on your interests, budget, and preferences.',
              },
              {
                title: 'Flexibility',
                desc: 'Change your plans anytime. We adapt to your needs and ensure maximum flexibility.',
              },
              {
                title: 'Expert Guidance',
                desc: 'Our experienced travel consultants help you choose the best destinations and experiences.',
              },
              {
                title: 'Best Value',
                desc: 'Competitive pricing with no hidden costs. You only pay for what you want.',
              },
              {
                title: 'Local Expertise',
                desc: 'Benefit from our deep knowledge of local cultures, cuisines, and hidden gems.',
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock assistance before, during, and after your trip.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Prefer to Talk Directly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Call Us</h3>
              <p className="text-purple-100">We’re just a call away</p>
            </div>
            <div>
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Email Us</h3>
              <p className="text-purple-100">bakkiyatours@gmail.com</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Visit Us</h3>
              <p className="text-purple-100">Virudhachalam, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
