import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import logoImage from '../../assets/3db6d824847b35ca08fe8933be47b6fd1a194603.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={logoImage}
              alt="Bakiya Tours"
              className="h-20 w-45"
              loading="lazy"
            />
            <h2 className="text-3xl mb-4 text-white font-bold">Bakiya Tours</h2>
            <p className="text-purple-200 mb-4">
              Your trusted partner for unforgettable travel experiences across India, Sri Lanka, and
              international destinations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-purple-200 hover:text-white transition">
                About Us
              </Link>
              <Link to="/packages" className="text-purple-200 hover:text-white transition">
                Tour Packages
              </Link>
              <Link to="/custom-tour" className="text-purple-200 hover:text-white transition">
                Custom Tours
              </Link>
              <Link to="/team" className="text-purple-200 hover:text-white transition">
                Our Team
              </Link>
              <Link to="/blog" className="text-purple-200 hover:text-white transition">
                Blog
              </Link>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tours</h3>
            <div className="flex flex-col gap-2">
              <Link to="/inbound-tours" className="text-purple-200 hover:text-white transition">
                India Tours
              </Link>
              <Link to="/inbound-tours" className="text-purple-200 hover:text-white transition">
                Sri Lanka Tours
              </Link>
              <Link to="/outbound-tours" className="text-purple-200 hover:text-white transition">
                Singapore
              </Link>
              <Link to="/outbound-tours" className="text-purple-200 hover:text-white transition">
                Malaysia
              </Link>
              <Link to="/outbound-tours" className="text-purple-200 hover:text-white transition">
                UAE
              </Link>
              <Link to="/outbound-tours" className="text-purple-200 hover:text-white transition">
                Thailand
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-purple-200">
                  140, Junction Road, Near CSC Center, Virudhachalam - 606001, Tamil Nadu
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+919626488887"
                  className="text-purple-200 hover:text-white transition"
                >
                  +91 96264 88887
                </a>
                <a
                  href="https://wa.me/919626488887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition inline-flex items-center"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-purple-200">info@bakiyatours.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
          <p>&copy; {new Date().getFullYear()} Bakiya Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
