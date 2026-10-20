import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Award, TrendingUp, CheckCircle2
} from 'lucide-react';

const rotatingPhrases = [
  'Financial Excellence',
  'Statutory Compliance',
  'Audit & Assurance',
  'Strategic Tax Advisory'
];

export function Hero({ onOpenContact }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  const heroRef = useRef(null);

  // Smooth rotation for core competencies
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setFadeState('fade-in');
      }, 350);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  // Subtle interactive mouse spotlight effect
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty('--mouse-x', `${x}px`);
    heroRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section
      ref={heroRef}
      className="hero-section"
      onMouseMove={handleMouseMove}
      aria-label="FinAdvisory Overview"
    >
      {/* Ambient Radial Spotlight */}
      <div className="hero-spotlight-layer" aria-hidden="true" />

      {/* Ambient Grid Lines Background */}
      <div className="hero-grid-ambient" aria-hidden="true" />

      <div className="hero-outer-container">
        {/* Left Content Column */}
        <div className="hero-content-column reveal-left">
          <div className="hero-badge">
            <span className="hero-badge-beacon" aria-hidden="true">
              <span className="beacon-core" />
              <span className="beacon-ring" />
            </span>
            <span className="hero-eyebrow">FINADVISORY CHARTERED ACCOUNTANTS</span>
          </div>

          <h1 className="hero-title">
            Your Trusted Partner <br />
            <span className={`hero-title-accent ${fadeState}`}>
              in {rotatingPhrases[phraseIndex]}
            </span>
          </h1>

          <p className="hero-description">
            We deliver objective audit, precision accounting, and strategic tax advisory to safeguard
            enterprises, guarantee statutory compliance, and unlock sustained growth across Ghana.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="gold-btn hero-cta-btn"
              onClick={() => onOpenContact && onOpenContact('General Advisory Consultation')}
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

        {/* Right Visual Column — Cinematic breathing zoom + floating live glassmorphism cards */}
        <div className="hero-visual-column reveal-right">
          <div className="hero-image-wrapper">
            <img
              src="/images/Audit-Tax-and-Advisory-Workspace.png"
              alt="FinAdvisory professional accounting desk with books on Audit, Tax, Advisory, Compliance, and Ghana flag"
              className="hero-desk-image hero-cinematic-zoom"
              loading="eager"
            />
            <div className="hero-image-overlay" />
            <div className="hero-image-sheen" />

            {/* Floating Glassmorphic Live Card 1: Compliance Guarantee */}
            <div className="hero-float-card card-compliance">
              <div className="float-icon-wrap icon-gold">
                <CheckCircle2 size={18} />
              </div>
              <div className="float-card-content">
                <span className="float-card-label">Statutory Guarantee</span>
                <strong className="float-card-val">Zero GRA &amp; RGD Penalties</strong>
              </div>
            </div>

            {/* Floating Glassmorphic Live Card 2: Track Record Metric */}
            <div className="hero-float-card card-advisory">
              <div className="float-icon-wrap icon-emerald">
                <TrendingUp size={18} />
              </div>
              <div className="float-card-content">
                <span className="float-card-label">Track Record</span>
                <strong className="float-card-val">GH¢ 150M+ Asset Audits</strong>
              </div>
              <span className="live-indicator-dot" title="Active Portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
