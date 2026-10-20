import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

export function Hero({ onOpenContact }) {
  return (
    <section className="hero-section" aria-label="FinAdvisory Overview">
      <div className="hero-outer-container">
        {/* Left Content Column */}
        <div className="hero-content-column reveal-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-eyebrow">FINADVISORY CHARTERED ACCOUNTANTS</span>
          </div>

          <h1 className="hero-title">
            Your Trusted Partner <br />
            <span className="hero-title-accent">in Financial Excellence</span>
          </h1>

          <p className="hero-description">
            We provide professional, reliable and value-driven accounting, audit and advisory services
            to help businesses in Ghana achieve compliance, growth and long-term success.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="gold-btn hero-cta-btn"
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  const el = document.getElementById('contact');
                  el && el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Get in Touch</span>
              <ArrowRight className="btn-arrow" size={17} />
            </button>

            <Link to="/services" className="secondary-hero-btn">
              Explore Our Services
            </Link>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat-pill">
              <ShieldCheck size={16} className="stat-icon" />
              <span>100% Statutory Compliance</span>
            </div>
            <div className="hero-stat-pill">
              <Award size={16} className="stat-icon" />
              <span>Chartered Certified</span>
            </div>
          </div>
        </div>

        {/* Right Visual Column (Video Background with Fallback Poster) */}
        <div className="hero-visual-column reveal-right">
          <div className="hero-image-wrapper">
            <video
              className="hero-desk-image hero-video-media"
              autoPlay
              loop
              muted
              playsInline
              poster="/images/Audit-Tax-and-Advisory-Workspace.png"
              aria-label="FinAdvisory Chartered Accountants executive workspace and financial advisory"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              {/* Fallback image if video is not supported or not yet added */}
              <img
                src="/images/Audit-Tax-and-Advisory-Workspace.png"
                alt="FinAdvisory professional accounting desk with books on Audit, Tax, Advisory, Compliance, and Ghana flag"
                className="hero-desk-image"
                loading="eager"
              />
            </video>
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
