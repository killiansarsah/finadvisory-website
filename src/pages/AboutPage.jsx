import React from 'react';
import {
  ShieldCheck, Award, Users, Target, CheckCircle2, ArrowRight, Building, BookOpen, Clock
} from 'lucide-react';
import { benefitsList } from '../components/Compliance';

export function AboutPage({ onOpenContact }) {
  const leadershipTeam = [];

  const firmValues = [
    {
      title: 'Accuracy',
      desc: 'Meticulous attention to detail ensures your financial statements and tax filings are mathematically sound and legally airtight.'
    },
    {
      title: 'Integrity',
      desc: 'Client records and financial discussions are safeguarded by strict professional privilege and unwavering ethical standards.'
    },
    {
      title: 'Professionalism',
      desc: 'Senior partner accessibility on every engagement, providing proactive counsel before statutory deadlines arrive.'
    },
    {
      title: 'Ghanaian Fluency',
      desc: 'In-depth mastery of the Ghanaian regulatory landscape, from GRA electronic systems to Registrar-General (ORC) corporate law.'
    }
  ];

  return (
    <div className="page-about">
      {/* Page Hero Header */}
      <section className="page-header-banner">
        <div className="section-pad">
          <span className="section-kicker">ABOUT FINADVISORY</span>
          <h1 className="page-header-title">
            Building Trust Through <br />
            <span className="gold-text">Expertise &amp; Integrity</span>
          </h1>
          <p className="page-header-desc">
            Accredited Chartered Accountants in Accra delivering uncompromising audit clarity,
            proactive tax advisory, and total statutory compliance across Ghana.
          </p>
        </div>
      </section>

      {/* Main Firm Narrative & Office Visual */}
      <section className="about-depth-section section-pad">
        <div className="about-split-row">
          <div className="about-depth-visual">
            <div className="office-photo-frame">
              <img
                src="/images/Modern-FinAdvisory-Reception-Lobby.jpg"
                alt="FinAdvisory modern executive office in East Legon Hills, Accra"
                className="office-photo"
              />
            </div>
            <div className="reception-stat-box">
              <Building size={20} className="gold-text" />
              <div>
                <strong>Accra Head Office</strong>
                <span>East Legon Hills, Greater Accra Region</span>
              </div>
            </div>
          </div>

          <div className="about-depth-content">
            <span className="section-kicker">OUR HERITAGE &amp; MISSION</span>
            <h2 className="depth-title">A Foundation of Dependability in Ghanaian Commerce</h2>
            
            <p className="depth-p">
              FinAdvisory Chartered Accountants was established to address a vital need in the Ghanaian
              business ecosystem: providing businesses with the sophisticated advisory standards of global
              firms combined with the agility, personal responsiveness, and deep local regulatory fluency
              of local practitioners.
            </p>

            <p className="depth-p">
              As licensed members of the <strong>Institute of Chartered Accountants Ghana (ICAG)</strong>,
              our partners bring decades of combined leadership in corporate audit, tax policy negotiations,
              and statutory governance. We don’t just record past financial history; we engineer fiscal clarity
              for your commercial future.
            </p>

            <div className="accreditation-badges-row">
              <div className="accred-badge">
                <Award size={18} className="gold-text" />
                <span>ICAG Accredited Firm</span>
              </div>
              <div className="accred-badge">
                <BookOpen size={18} className="gold-text" />
                <span>IFRS &amp; ISA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-pad">
        <div className="section-header-block text-center">
          <span className="section-kicker">OUR PILLARS</span>
          <h2 className="section-title">The Principles Guiding Every Audit &amp; Advisory</h2>
          <p className="section-subtitle">
            Our reputation is built upon four cardinal commitments to our clients.
          </p>
        </div>

        <div className="values-grid">
          {firmValues.map((val, i) => (
            <div key={i} className="value-card">
              <span className="value-num">0{i + 1}</span>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="leadership-section section-pad">
        <div className="section-header-block">
          <span className="section-kicker">PRACTICE LEADERSHIP</span>
          <h2 className="section-title">Experienced Partners Dedicated to Your Growth</h2>
          <p className="section-subtitle">
            Every client engagement is overseen directly by a certified partner.
          </p>
        </div>

        <div className="leadership-grid">
          {/* Partner profiles kept blank for now as requested */}
        </div>
      </section>

      {/* Credentials Banner */}
      <section className="about-cta-banner section-pad">
        <div className="about-cta-inner">
          <div>
            <h2>Partner with Ghana’s Leading Advisory Practice</h2>
            <p>Schedule an introductory consultation with our senior partners today.</p>
          </div>
          <button
            type="button"
            className="gold-btn"
            onClick={onOpenContact}
          >
            <span>Book Partner Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

