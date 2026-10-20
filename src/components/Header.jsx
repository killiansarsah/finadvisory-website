import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Linkedin, Facebook, ChevronDown, Menu, X, ArrowUpRight
} from 'lucide-react';
import { Logo } from './Logo';

export function Header({ onOpenContact, onSelectService }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-sticky' : ''}`} id="home">
      {/* Top Utility Bar (Desktop only - hidden completely on mobile/tablet) */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-contact-items">
            <span className="topbar-item">
              <MapPin className="topbar-icon" />
              <span>Accra, Ghana</span>
            </span>
            <span className="topbar-divider" />
            <a href="tel:0243663994" className="topbar-item topbar-link">
              <Phone className="topbar-icon" />
              <span>0243663994</span>
            </a>
            <span className="topbar-divider" />
            <a href="tel:0206768299" className="topbar-item topbar-link">
              <Phone className="topbar-icon" />
              <span>0206768299</span>
            </a>
            <span className="topbar-divider" />
            <a href="mailto:info@finadvisorycc.com" className="topbar-item topbar-link">
              <Mail className="topbar-icon" />
              <span>info@finadvisorycc.com</span>
            </a>
          </div>

          <div className="topbar-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FinAdvisory on LinkedIn"
              className="social-btn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FinAdvisory on Facebook"
              className="social-btn"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="nav-container">
        <div className="nav-inner">
          <Logo />

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Dimmed backdrop when mobile menu is active */}
          {menuOpen && (
            <div
              className="mobile-nav-backdrop"
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}

          {/* Navigation Menu / Mobile Drawer */}
          <nav
            className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}
            aria-label="Main Navigation"
          >
            {/* Header inside mobile drawer */}
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-brand">
                <span className="beacon-core" />
                <span className="mobile-drawer-title">FINADVISORY</span>
              </div>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>

              {/* Services with Desktop Hover & Mobile Accordion */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'services' ? 'dropdown-open' : ''}`}
                onMouseEnter={() => {
                  if (window.innerWidth > 900) setActiveDropdown('services');
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 900) setActiveDropdown(null);
                }}
              >
                <div className="nav-link-split">
                  <Link
                    to="/services"
                    className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className="dropdown-chevron-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown('services');
                    }}
                    aria-label="Toggle Services sub-menu"
                    aria-expanded={activeDropdown === 'services'}
                  >
                    <ChevronDown
                      className={`chevron-icon ${activeDropdown === 'services' ? 'rotated' : ''}`}
                      size={15}
                    />
                  </button>
                </div>

                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    <Link
                      to="/services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Audit & Assurance');
                      }}
                    >
                      <strong>Audit &amp; Assurance</strong>
                      <span>Independent statutory &amp; internal reviews</span>
                    </Link>
                    <Link
                      to="/services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Accountancy');
                      }}
                    >
                      <strong>Accountancy</strong>
                      <span>Accurate books &amp; periodic management accounts</span>
                    </Link>
                    <Link
                      to="/services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Payroll Management');
                      }}
                    >
                      <strong>Payroll Management</strong>
                      <span>Compliant SSNIT, PAYE &amp; benefits processing</span>
                    </Link>
                    <Link
                      to="/services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Tax Advisory');
                      }}
                    >
                      <strong>Tax Advisory</strong>
                      <span>Corporate tax optimization &amp; risk mitigation</span>
                    </Link>
                    <Link
                      to="/services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Management Consultancy');
                      }}
                    >
                      <strong>Management Consultancy</strong>
                      <span>Financial modeling &amp; sustainable corporate growth</span>
                    </Link>
                    <Link
                      to="/services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Regulatory & Statutory Compliance');
                      }}
                    >
                      <strong>Regulatory &amp; Statutory Compliance</strong>
                      <span>Ghana compliance oversight &amp; authority filings</span>
                    </Link>
                  </div>
                </div>
              </li>

              {/* Compliance with Desktop Hover & Mobile Accordion */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'compliance' ? 'dropdown-open' : ''}`}
                onMouseEnter={() => {
                  if (window.innerWidth > 900) setActiveDropdown('compliance');
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 900) setActiveDropdown(null);
                }}
              >
                <div className="nav-link-split">
                  <Link
                    to="/compliance"
                    className={`nav-link ${location.pathname === '/compliance' ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Compliance
                  </Link>
                  <button
                    type="button"
                    className="dropdown-chevron-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown('compliance');
                    }}
                    aria-label="Toggle Compliance sub-menu"
                    aria-expanded={activeDropdown === 'compliance'}
                  >
                    <ChevronDown
                      className={`chevron-icon ${activeDropdown === 'compliance' ? 'rotated' : ''}`}
                      size={15}
                    />
                  </button>
                </div>

                <div className="dropdown-menu dropdown-compact">
                  <Link to="/compliance" className="dropdown-item" onClick={closeMenu}>
                    <strong>GRA Tax Filings</strong>
                    <span>Quarterly &amp; Annual Ghana Revenue Authority filings</span>
                  </Link>
                  <Link to="/compliance" className="dropdown-item" onClick={closeMenu}>
                    <strong>Registrar-General (RGD) Filings</strong>
                    <span>Annual returns &amp; statutory secretarial maintenance</span>
                  </Link>
                  <Link to="/compliance" className="dropdown-item" onClick={closeMenu}>
                    <strong>Why Partner with Us</strong>
                    <span>Ghana regulatory intelligence &amp; zero-penalty guarantee</span>
                  </Link>
                </div>
              </li>

              {/* Insights with Desktop Hover & Mobile Accordion */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'insights' ? 'dropdown-open' : ''}`}
                onMouseEnter={() => {
                  if (window.innerWidth > 900) setActiveDropdown('insights');
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 900) setActiveDropdown(null);
                }}
              >
                <div className="nav-link-split">
                  <Link
                    to="/insights"
                    className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Insights
                  </Link>
                  <button
                    type="button"
                    className="dropdown-chevron-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown('insights');
                    }}
                    aria-label="Toggle Insights sub-menu"
                    aria-expanded={activeDropdown === 'insights'}
                  >
                    <ChevronDown
                      className={`chevron-icon ${activeDropdown === 'insights' ? 'rotated' : ''}`}
                      size={15}
                    />
                  </button>
                </div>

                <div className="dropdown-menu dropdown-compact">
                  <Link to="/insights" className="dropdown-item" onClick={closeMenu}>
                    <strong>2025/2026 Ghana Tax Deadlines</strong>
                    <span>Key filing dates for Corporate Tax &amp; e-VAT</span>
                  </Link>
                  <Link to="/insights" className="dropdown-item" onClick={closeMenu}>
                    <strong>RGD Annual Returns Guide</strong>
                    <span>Preventing company de-registration in Ghana</span>
                  </Link>
                  <Link to="/insights" className="dropdown-item" onClick={closeMenu}>
                    <strong>Corporate Withholding Tax</strong>
                    <span>Compliance best practices for SMEs &amp; enterprises</span>
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Quick Contact Info inside Mobile Drawer (Mobile/Tablet only) */}
            <div className="mobile-drawer-contact">
              <span className="mobile-contact-title">Direct Inquiries</span>
              <div className="mobile-contact-links">
                <a href="tel:0243663994" className="mobile-contact-item">
                  <Phone size={14} className="mobile-contact-icon" />
                  <span>0243663994</span>
                </a>
                <a href="tel:0206768299" className="mobile-contact-item">
                  <Phone size={14} className="mobile-contact-icon" />
                  <span>0206768299</span>
                </a>
                <a href="mailto:info@finadvisorycc.com" className="mobile-contact-item">
                  <Mail size={14} className="mobile-contact-icon" />
                  <span>info@finadvisorycc.com</span>
                </a>
                <div className="mobile-contact-item">
                  <MapPin size={14} className="mobile-contact-icon" />
                  <span>Accra, Ghana</span>
                </div>
              </div>
              <div className="mobile-drawer-socials">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
              </div>
            </div>

            {/* Request Consultation Button */}
            <div className="nav-cta-wrapper">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenContact && onOpenContact();
                }}
                className="gold-btn-compact"
              >
                <span>Request Consultation</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
