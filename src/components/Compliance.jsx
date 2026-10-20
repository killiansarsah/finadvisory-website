import React from 'react';
import { Check, Shield, FileCheck, Award, Building2 } from 'lucide-react';

export const benefitsList = [
  'Experienced and qualified professionals',
  'Personalised service and attention to detail',
  'Proactive advice and practical solutions',
  'Commitment to integrity and confidentiality',
  'Deep understanding of the Ghanaian business environment and regulatory landscape'
];

export function Compliance({ onOpenContact }) {
  return (
    <section className="compliance-section" id="compliance" aria-labelledby="compliance-heading">
      <div className="compliance-triad-grid">
        {/* Panel 1: Deep Navy Statutory Overview */}
        <div className="compliance-panel panel-navy reveal-left">
          <div className="panel-inner">
            <div className="panel-badge">
              <Shield size={16} />
              <span>STATUTORY ASSURANCE</span>
            </div>
            
            <h2 id="compliance-heading" className="panel-title-white">
              Your Compliance Partner <br />
              <span className="gold-text">in Ghana</span>
            </h2>

            <p className="panel-copy-white">
              We handle your statutory obligations so you can focus on what matters most — running and
              growing your business.
            </p>

            <ul className="compliance-checks-list" aria-label="Statutory commitments">
              <li>
                <span className="gold-check-bubble">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>Quarterly and annual GRA tax filings</span>
              </li>
              <li>
                <span className="gold-check-bubble">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>Annual Registrar-General’s Department (RGD) filings</span>
              </li>
              <li>
                <span className="gold-check-bubble">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>Timely, accurate and hassle-free support</span>
              </li>
            </ul>

            <button
              type="button"
              className="gold-btn-outline"
              onClick={onOpenContact}
            >
              Get Compliance Assessment
            </button>
          </div>
        </div>

        {/* Panel 2: Official Ghanaian Regulatory Bodies */}
        <div className="compliance-panel panel-authorities reveal">
          <div className="authorities-content">
            <div className="authorities-header">
              <span className="authority-kicker">GOVERNMENT COMPLIANCE</span>
              <p className="authority-caption">Liaison &amp; accredited filing representative</p>
            </div>

            <div className="authority-card-stack">
              {/* GRA Box */}
              <div className="authority-entity-box">
                <div className="entity-logo-frame">
                  <img
                    src="/images/regulatory-logos.jpg"
                    alt="Official Ghanaian Authorities: Ghana Revenue Authority and Registrar-General's Department"
                    className="authorities-composite-image"
                  />
                </div>
              </div>
            </div>

            <div className="authorities-footer-note">
              <FileCheck size={15} className="note-icon" />
              <span>Registered Chartered Practitioners in Ghana</span>
            </div>
          </div>
        </div>

        {/* Panel 3: Why Choose FinAdvisory? */}
        <div className="compliance-panel panel-why reveal-right">
          <div className="panel-inner">
            <h2 className="panel-title-navy">Why Choose FinAdvisory?</h2>
            
            <ul className="why-checks-list" aria-label="Reasons to choose FinAdvisory">
              {benefitsList.map((item, i) => (
                <li key={i}>
                  <span className="gold-check-bubble">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="guarantee-box">
              <Award size={18} className="guarantee-icon" />
              <div>
                <strong>Zero-Penalty Commitment</strong>
                <p>We ensure all filings meet statutory deadlines without default fines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compliance;
