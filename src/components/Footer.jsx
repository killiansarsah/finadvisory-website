import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { Logo } from './Logo';

export function Footer({ onOpenContact, onSelectService, onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-main-container">
        <div className="footer-columns-grid">
          {/* Column 1: Brand & Credo */}
          <div className="footer-col col-brand">
            <Logo light compact={false} />
            <p className="footer-firm-blurb">
              Chartered Accountants dedicated to delivering objective audit, strategic tax advisory,
              and seamless statutory compliance for organizations thriving in Ghana.
            </p>
            <div className="footer-trust-badge">
              <Shield size={14} className="gold-text" />
              <span>Registered Chartered Practitioners — Accra, Ghana</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2x2 Matrix Grid) */}
          <div className="footer-col col-links">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-nav-list footer-nav-2x2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/compliance">Compliance</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Directory (2x2 Matrix Grid) */}
          <div className="footer-col col-services">
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-nav-list footer-nav-2x2">
              <li>
                <Link
                  to="/services"
                  onClick={() => onSelectService && onSelectService('Audit & Assurance')}
                >
                  Audit &amp; Assurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => onSelectService && onSelectService('Accountancy')}
                >
                  Accountancy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => onSelectService && onSelectService('Payroll Management')}
                >
                  Payroll
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => onSelectService && onSelectService('Tax Advisory')}
                >
                  Tax Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => onSelectService && onSelectService('Management Consultancy')}
                >
                  Consultancy
                </Link>
              </li>
              <li>
                <Link to="/compliance">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="footer-col col-contact">
            <h3 className="footer-col-title">Contact</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <Phone size={15} className="footer-icon gold-text" />
                <div className="contact-links-group">
                  <a href="tel:0243663994">0243663994</a>
                  <span className="footer-sep">|</span>
                  <a href="tel:0206768299">0206768299</a>
                </div>
              </div>

              <div className="footer-contact-row">
                <Mail size={15} className="footer-icon gold-text" />
                <div>
                  <a href="mailto:info@finadvisorycc.com" className="email-link">
                    info@finadvisorycc.com
                  </a>
                  <small className="domain-subtext">
                    (Official inquiries &amp; corporate advisory)
                  </small>
                </div>
              </div>

              <div className="footer-contact-row">
                <MapPin size={15} className="footer-icon gold-text" />
                <div className="addresses-stack">
                  <span className="street-address">
                    BG56 Abayateye Street, East Legon Hills, Accra
                  </span>
                  <span className="postal-box">
                    P.O. Box MD 222, Madina, Accra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2025 FinAdvisory Chartered Accountants. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => onOpenLegal && onOpenLegal('Privacy Policy')}
            >
              Privacy Policy
            </button>
            <span className="footer-bar-divider" />
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => onOpenLegal && onOpenLegal('Terms of Service')}
            >
              Terms of Service
            </button>
            <span className="footer-bar-divider" />
            <button
              type="button"
              className="footer-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
