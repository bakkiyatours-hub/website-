import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import breadcumbsVideo from '../../assets/breadcumbsvideo.mp4';

export function Contact() {
  const phoneNumberE164 = '+919626488887';
  const whatsappNumber = '919626488887';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover">
            <source src={breadcumbsVideo} type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl mb-4">Get In Touch</h1>
          <p className="text-xl">We're here to help you plan your perfect journey</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as
                  soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Phone</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={`tel:${phoneNumberE164}`}
                        className="text-gray-600 hover:text-purple-700 transition"
                      >
                        +91 96264 88887
                      </a>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-700 transition inline-flex items-center"
                        aria-label="Chat on WhatsApp"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Email</h3>
                    <p className="text-gray-600">bakkiyatours@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      140, Junction Road,
                      <br />
                      Near CSC Center,
                      <br />
                      Virudhachalam - 606001,
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white p-3 rounded-full transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white p-3 rounded-full transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white p-3 rounded-full transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-8">Visit Our Office</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps?q=Virudhachalam%2C%20Tamil%20Nadu%20606001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href={`tel:${phoneNumberE164}`}
              className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 rounded-2xl text-center hover:shadow-2xl transition"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Call Us Now</h3>
              <p className="text-purple-100">Speak with our travel experts</p>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl text-center hover:shadow-2xl transition"
            >
              <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <h3 className="text-xl mb-2">Message Us</h3>
              <p className="text-green-100">Quick responses via chat</p>
            </a>

            <a
              href="mailto:bakkiyatours@gmail.com"
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl text-center hover:shadow-2xl transition"
            >
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Email Us</h3>
              <p className="text-orange-100">Send us your queries</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
