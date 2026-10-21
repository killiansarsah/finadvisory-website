import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Compass, Users2, ShieldAlert } from 'lucide-react';
import { benefitsList } from './Compliance';

export function About({ onOpenContact }) {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-heading">
      <div className="about-grid">
        {/* Left Column: Executive Reception Photo */}
        <div className="about-image-column reveal-left">
          <div className="office-photo-frame">
            <img
              src="/images/Modern-FinAdvisory-Reception-Lobby.jpg"
              alt="FinAdvisory Chartered Accountants modern office reception in Accra, Ghana"
              className="office-photo"
              loading="lazy"
            />
            <div className="photo-corner-accent" />
          </div>
        </div>

        {/* Center Column: Firm Story & Mission */}
        <div className="about-narrative-column reveal">
          <span className="section-kicker">ABOUT US</span>
          <h2 id="about-heading" className="about-title">
            Building Trust Through <br />
            <span className="gold-text">Expertise</span>
          </h2>

          <p className="about-lead">
            FinAdvisory Chartered Accountants is a Ghana-based professional services firm dedicated to
            delivering high-quality accounting, audit, tax and advisory services.
          </p>

          <p className="about-paragraph">
            We partner with ambitious startups, established mid-market enterprises, and non-profit
            organizations across Ghana to ensure flawless statutory compliance, eliminate fiscal risk,
            and create enduring commercial value.
          </p>

          <div className="about-action-row">
            <Link to="/about" className="gold-btn small-btn">
              <span>Learn More</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/compliance" className="text-link-subtle">
              <span>View Regulatory Accreditations</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Why Choose FinAdvisory Credentials */}
        <div className="about-credentials-column reveal-right">
          <div className="credentials-card">
            <div className="credentials-header">
              <Compass className="cred-icon" size={20} />
              <h3 className="credentials-title">Why Choose FinAdvisory?</h3>
            </div>

            <ul className="credentials-list" aria-label="FinAdvisory pillars">
              {benefitsList.map((item, idx) => (
                <li key={idx} className="cred-item">
                  <span className="gold-tick-mark" aria-hidden="true">
                    <Check size={14} strokeWidth={2.8} />
                  </span>
                  <span className="cred-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
