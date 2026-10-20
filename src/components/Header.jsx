import React, { useState, useEffect } from 'react';
import {
  MapPin, Phone, Mail, Linkedin, Facebook, ChevronDown, Menu, X, ArrowUpRight
} from 'lucide-react';
import { Logo } from './Logo';

export function Header({ onOpenContact, onSelectService }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-sticky' : ''}`} id="home">
      {/* Top Utility Bar */}
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

      {/* Main Navigation */}
      <div className="nav-container">
        <div className="nav-inner">
          <Logo />

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`} aria-label="Main Navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link active" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={closeMenu}>
                  About Us
                </a>
              </li>

              {/* Services with Dropdown */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'services' ? 'dropdown-open' : ''}`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#services"
                  className="nav-link"
                  onClick={(e) => {
                    if (window.innerWidth <= 900) {
                      e.preventDefault();
                      handleDropdownClick('services');
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  <span>Services</span>
                  <ChevronDown className="chevron-icon" size={14} />
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    <a
                      href="#services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Audit & Assurance');
                      }}
                    >
                      <strong>Audit &amp; Assurance</strong>
                      <span>Independent statutory & internal reviews</span>
                    </a>
                    <a
                      href="#services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Accountancy');
                      }}
                    >
                      <strong>Accountancy</strong>
                      <span>Accurate books & periodic management accounts</span>
                    </a>
                    <a
                      href="#services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Payroll Management');
                      }}
                    >
                      <strong>Payroll Management</strong>
                      <span>Compliant SSNIT, PAYE & benefits processing</span>
                    </a>
                    <a
                      href="#services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Tax Advisory');
                      }}
                    >
                      <strong>Tax Advisory</strong>
                      <span>Corporate tax optimization & risk mitigation</span>
                    </a>
                    <a
                      href="#services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Management Consultancy');
                      }}
                    >
                      <strong>Management Consultancy</strong>
                      <span>Financial modeling & sustainable corporate growth</span>
                    </a>
                    <a
                      href="#services"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenu();
                        onSelectService && onSelectService('Regulatory & Statutory Compliance');
                      }}
                    >
                      <strong>Regulatory &amp; Statutory Compliance</strong>
                      <span>Ghana compliance oversight & authority filings</span>
                    </a>
                  </div>
                </div>
              </li>

              {/* Compliance with Dropdown */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'compliance' ? 'dropdown-open' : ''}`}
                onMouseEnter={() => setActiveDropdown('compliance')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#compliance"
                  className="nav-link"
                  onClick={(e) => {
                    if (window.innerWidth <= 900) {
                      e.preventDefault();
                      handleDropdownClick('compliance');
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  <span>Compliance</span>
                  <ChevronDown className="chevron-icon" size={14} />
                </a>
                <div className="dropdown-menu dropdown-compact">
                  <a href="#compliance" className="dropdown-item" onClick={closeMenu}>
                    <strong>GRA Tax Filings</strong>
                    <span>Quarterly &amp; Annual Ghana Revenue Authority filings</span>
                  </a>
                  <a href="#compliance" className="dropdown-item" onClick={closeMenu}>
                    <strong>Registrar-General (RGD) Filings</strong>
                    <span>Annual returns &amp; statutory secretarial maintenance</span>
                  </a>
                  <a href="#compliance" className="dropdown-item" onClick={closeMenu}>
                    <strong>Why Partner with Us</strong>
                    <span>Ghana regulatory intelligence &amp; zero-penalty guarantee</span>
                  </a>
                </div>
              </li>

              {/* Insights with Dropdown */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'insights' ? 'dropdown-open' : ''}`}
                onMouseEnter={() => setActiveDropdown('insights')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#insights"
                  className="nav-link"
                  onClick={(e) => {
                    if (window.innerWidth <= 900) {
                      e.preventDefault();
                      handleDropdownClick('insights');
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  <span>Insights</span>
                  <ChevronDown className="chevron-icon" size={14} />
                </a>
                <div className="dropdown-menu dropdown-compact">
                  <a href="#insights" className="dropdown-item" onClick={closeMenu}>
                    <strong>2025/2026 Ghana Tax Deadlines</strong>
                    <span>Key filing dates for Corporate Tax &amp; e-VAT</span>
                  </a>
                  <a href="#insights" className="dropdown-item" onClick={closeMenu}>
                    <strong>RGD Annual Returns Guide</strong>
                    <span>Preventing company de-registration in Ghana</span>
                  </a>
                  <a href="#insights" className="dropdown-item" onClick={closeMenu}>
                    <strong>Corporate Withholding Tax</strong>
                    <span>Compliance best practices for SMEs &amp; enterprises</span>
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>

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
