import React, { useState } from 'react';
import {
  Search, Calculator, Users, FileText, TrendingUp, ShieldCheck, Landmark,
  ArrowRight, CheckCircle2, PhoneCall, HelpCircle
} from 'lucide-react';
import { servicesData } from '../components/Services';

export function ServicesPage({ onOpenContact, onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'assurance') return ['audit-assurance', 'accountancy'].includes(service.id);
    if (activeFilter === 'tax') return ['tax-advisory', 'gra-tax-filings'].includes(service.id);
    if (activeFilter === 'corporate') return ['payroll-management', 'management-consultancy', 'regulatory-statutory', 'rgd-filings'].includes(service.id);
    return true;
  });

  return (
    <div className="page-services">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-pad">
          <span className="section-kicker">OUR PRACTICE AREAS</span>
          <h1 className="page-header-title">
            Comprehensive Accounting &amp; <br />
            <span className="gold-text">Advisory Services</span>
          </h1>
          <p className="page-header-desc">
            We deliver rigorous financial engineering, independent audit assurance, and proactive tax
            management tailored to the unique economic realities of Ghana.
          </p>

          <div className="filter-pills-row">
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All 8 Services
            </button>
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'assurance' ? 'active' : ''}`}
              onClick={() => setActiveFilter('assurance')}
            >
              Audit &amp; Accountancy
            </button>
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'tax' ? 'active' : ''}`}
              onClick={() => setActiveFilter('tax')}
            >
              Tax &amp; GRA Filings
            </button>
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'corporate' ? 'active' : ''}`}
              onClick={() => setActiveFilter('corporate')}
            >
              Payroll &amp; Compliance
            </button>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="services-catalogue-section section-pad">
        <div className="catalogue-list">
          {filteredServices.map((service, index) => {
            const { id, title, subtitle, Icon, iconType, description, deliverables } = service;
            return (
              <article key={id} id={id} className="catalogue-card">
                <div className="catalogue-card-header">
                  <div className="catalogue-icon-wrap">
                    {iconType === 'gra-badge' ? (
                      <div className="gra-badge-circle">
                        <span className="gra-text-line">GRA</span>
                        <span className="gra-text-sub">GHANA</span>
                      </div>
                    ) : (
                      <Icon size={26} className="service-svg-icon" />
                    )}
                  </div>
                  <div>
                    <span className="catalogue-service-index">Practice Area 0{index + 1}</span>
                    <h2 className="catalogue-title">{title}</h2>
                    <p className="catalogue-tagline">{subtitle}</p>
                  </div>
                </div>

                <div className="catalogue-body">
                  <p className="catalogue-desc">{description}</p>

                  <div className="catalogue-deliverables-box">
                    <h4>Core Scope &amp; Client Deliverables</h4>
                    <div className="deliverables-grid-2">
                      {deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="deliverable-item-row">
                          <CheckCircle2 size={16} className="gold-text check-icon" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="catalogue-footer">
                  <button
                    type="button"
                    className="gold-btn small-btn"
                    onClick={() => onOpenContact && onOpenContact(title)}
                  >
                    <span>Engage for {title}</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    className="secondary-outline-btn small-btn"
                    onClick={() => onSelectService && onSelectService(service)}
                  >
                    View Quick Briefing
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="service-consult-callout section-pad">
        <div className="consult-box">
          <HelpCircle size={32} className="gold-text" />
          <div>
            <h3>Need a Custom Service Package?</h3>
            <p>
              Many of our corporate clients combine Bookkeeping, Monthly Payroll, and Quarterly GRA Tax
              Filings into a unified retainer package with dedicated partner oversight.
            </p>
          </div>
          <button
            type="button"
            className="gold-btn"
            onClick={() => onOpenContact && onOpenContact('Custom Advisory Package')}
          >
            <span>Request Custom Proposal</span>
            <PhoneCall size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;

