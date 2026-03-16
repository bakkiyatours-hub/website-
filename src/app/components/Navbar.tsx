import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from '../../assets/logo-cropped.png';
import './Navbar.css';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const desktopLinkClass = 'bk-navbar__link';
  const mobileLinkClass = 'bk-navbar__mobile-link';

  return (
    <nav className="bk-navbar">
      <div className="bk-navbar__container">
        <div className="bk-navbar__header">
          <Link to="/" className="bk-navbar__brand" aria-label="Bakkiya Tours & Travels Home">
            <img src={logoImage} alt="Bakkiya Tours & Travels" className="bk-navbar__logo" />
          </Link>

          <div className="bk-navbar__desktop-nav">
            <Link to="/" className={desktopLinkClass}>
              Home
            </Link>
            <Link to="/about" className={desktopLinkClass}>
              About Us
            </Link>

            <div className="bk-navbar__dropdown">
              <button type="button" className="bk-navbar__link bk-navbar__dropdown-trigger">
                Tours <ChevronDown className="bk-navbar__chevron" />
              </button>
              <div className="bk-navbar__dropdown-menu">
                <Link
                  to="/inbound-tours"
                  className="bk-navbar__dropdown-link"
                >
                  Inbound Tours
                </Link>
                <Link
                  to="/outbound-tours"
                  className="bk-navbar__dropdown-link"
                >
                  Outbound Tours
                </Link>
              </div>
            </div>

            <Link to="/packages" className={desktopLinkClass}>
              Packages
            </Link>
            <Link to="/custom-tour" className={desktopLinkClass}>
              Custom Tour
            </Link>
            <Link to="/team" className={desktopLinkClass}>
              Our Team
            </Link>
            <Link to="/vehicles" className={desktopLinkClass}>
              Vehicles
            </Link>
            <Link to="/gallery" className={desktopLinkClass}>
              Gallery
            </Link>
            <Link to="/blog" className={desktopLinkClass}>
              Blog
            </Link>
            <Link to="/contact" className="bk-navbar__cta">
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bk-navbar__menu-button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="bk-navbar__menu-icon" /> : <Menu className="bk-navbar__menu-icon" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="bk-navbar__mobile-panel">
            <div className="bk-navbar__mobile-links">
              <Link
                to="/"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/inbound-tours"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Inbound Tours
              </Link>
              <Link
                to="/outbound-tours"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Outbound Tours
              </Link>
              <Link
                to="/packages"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                to="/custom-tour"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Custom Tour
              </Link>
              <Link
                to="/team"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                to="/vehicles"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Vehicles
              </Link>
              <Link
                to="/gallery"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className={mobileLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="bk-navbar__mobile-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
