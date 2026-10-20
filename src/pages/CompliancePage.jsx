import React from 'react';
import {
  ShieldCheck, Landmark, FileCheck, AlertTriangle, Calendar, Clock,
  CheckCircle2, ArrowRight, Award, Building2
} from 'lucide-react';
import { benefitsList } from '../components/Compliance';

export function CompliancePage({ onOpenContact }) {
  const complianceDeadlines = [
    {
      period: 'Monthly (14th)',
      body: 'SSNIT / Private Pensions',
      obligation: 'Tier 1 Social Security & Tier 2 Mandatory Occupational Pension contributions',
      consequence: 'Penalty of 3% compounded monthly on unpaid balances'
    },
    {
      period: 'Monthly (15th)',
      body: 'Ghana Revenue Authority (GRA)',
      obligation: 'Pay-As-You-Earn (PAYE) employee income tax deduction returns',
      consequence: '20% statutory penalty plus interest'
    },
    {
      period: 'Monthly (Last Day)',
      body: 'Ghana Revenue Authority (GRA)',
      obligation: 'Value Added Tax (VAT), NHIL, GETFund, COVID-19 Health Recovery Levy',
      consequence: 'Automatic GHS 500 fixed fine + 125% policy rate interest'
    },
    {
      period: 'Quarterly',
      body: 'Ghana Revenue Authority (GRA)',
      obligation: 'Corporate Income Tax (CIT) provisional assessment installments (March, June, Sept, Dec)',
      consequence: 'Default interest on under-estimated payments'
    },
    {
      period: 'Annually',
      body: 'Office of the Registrar of Companies (ORC)',
      obligation: 'Annual Company Returns & Audited Financial Statements under Act 992',
      consequence: 'Daily default penalty and eventual company strike-off from registry'
    }
  ];

  return (
    <div className="page-compliance">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-pad">
          <span className="section-kicker">GHANA STATUTORY COMPLIANCE</span>
          <h1 className="page-header-title">
            Your Trusted Compliance Partner <br />
            <span className="gold-text">in Ghana</span>
          </h1>
          <p className="page-header-desc">
            We handle your statutory obligations so you can focus on running and growing your business.
            Zero fines, zero default notices, 100% peace of mind.
          </p>
        </div>
      </section>

      {/* Regulatory Bodies & Authorities Section */}
      <section className="authorities-depth-section section-pad">
        <div className="section-header-block">
          <span className="section-kicker">GOVERNMENT AUTHORITIES</span>
          <h2 className="section-title">Official Accreditation &amp; Statutory Oversight</h2>
          <p className="section-subtitle">
            FinAdvisory acts as certified filing liaison across Ghana’s primary regulatory agencies.
          </p>
        </div>

        <div className="regulatory-orgs-grid">
          {/* GRA Card */}
          <div className="regulatory-org-card">
            <div className="org-card-header">
              <div className="org-icon-badge">
                <span className="gra-text-line">GRA</span>
                <span className="gra-text-sub">GHANA</span>
              </div>
              <div>
                <h3>Ghana Revenue Authority (GRA)</h3>
                <p>Tax Administration &amp; Fiscal Compliance</p>
              </div>
            </div>
            <div className="org-card-body">
              <p>
                The Ghana Revenue Authority administers corporate taxes, excise duties, value-added taxes,
                and national levies. Our accredited tax practitioners manage your filings from submission
                to receipt of Tax Clearance Certificates.
              </p>
              <ul className="org-filing-list">
                <li><CheckCircle2 size={15} className="gold-text" /> <span>Corporate Income Tax (CIT) Quarterly &amp; Annual Submissions</span></li>
                <li><CheckCircle2 size={15} className="gold-text" /> <span>Monthly VAT, NHIL, GETFund &amp; COVID Levy Portals</span></li>
                <li><CheckCircle2 size={15} className="gold-text" /> <span>Withholding Tax (WHT) Credit Certificate Reconciliation</span></li>
                <li><CheckCircle2 size={15} className="gold-text" /> <span>E-VAT Certified Invoicing Integration &amp; Audits</span></li>
              </ul>
            </div>
          </div>

          {/* RGD / ORC Card */}
          <div className="regulatory-org-card">
            <div className="org-card-header">
              <div className="org-icon-badge landmark-badge">
                <Landmark size={24} className="service-svg-icon" />
              </div>
              <div>
                <h3>Registrar-General’s Department (ORC)</h3>
                <p>Company Law &amp; Statutory Maintenance</p>
              </div>
            </div>
            <div className="org-card-body">
              <p>
                Operating under the Companies Act 2019 (Act 992), the Office of the Registrar of Companies
                enforces strict annual return deadlines and beneficial ownership transparency for all entities
                registered in the Republic of Ghana.
              </p>
              <ul className="org-filing-list">
                <li><CheckCircle2 size={15} className="gold-text" /> <span>Annual Company Returns Filing &amp; Audited Accounts</span></li>
                <li><CheckCircle2 size={15} className="gold-text" /> <span>Beneficial Ownership (BO) Declarations &amp; Updates</span></li>
                <li><CheckCircle2 size={15} className="gold-text" /> <span>Director &amp; Company Secretary Official Amendments</span></li>
                <li><CheckCircle2 size={15} className="gold-text" /> <span>Good Standing Certificates &amp; Strike-off Prevention</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Authority Logos Showcase */}
        <div className="authority-showcase-box">
          <div className="showcase-img-wrap">
            <img
              src="/images/Ghana-Government-Authority-Logos.png"
              alt="Ghana Revenue Authority and Registrar-General's Department Republic of Ghana"
              className="showcase-logos-img"
            />
          </div>
          <div className="showcase-text">
            <h4>Accredited Corporate Filing Agents</h4>
            <p>
              We maintain direct electronic interfaces with the GRA Integrated Tax Administration System
              (e-Tax) and the ORC Portal, accelerating filing confirmations and official clearances.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Deadlines Table */}
      <section className="deadlines-section section-pad">
        <div className="section-header-block">
          <span className="section-kicker">STATUTORY TIMELINES</span>
          <h2 className="section-title">Critical Statutory Filing Deadlines in Ghana</h2>
          <p className="section-subtitle">
            Never incur penalties. Here are the core statutory windows every company must observe.
          </p>
        </div>

        <div className="table-responsive">
          <table className="compliance-table">
            <thead>
              <tr>
                <th>Filing Frequency</th>
                <th>Regulatory Body</th>
                <th>Statutory Obligation</th>
                <th>Consequence of Default</th>
              </tr>
            </thead>
            <tbody>
              {complianceDeadlines.map((item, idx) => (
                <tr key={idx}>
                  <td><strong>{item.period}</strong></td>
                  <td>{item.body}</td>
                  <td>{item.obligation}</td>
                  <td><span className="consequence-pill">{item.consequence}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose FinAdvisory & Guarantee */}
      <section className="compliance-why-section section-pad">
        <div className="compliance-why-split">
          <div className="why-content-col">
            <span className="section-kicker">THE FINADVISORY ADVANTAGE</span>
            <h2 className="section-title">Why Entrust Your Compliance to Us?</h2>
            <ul className="why-checks-list">
              {benefitsList.map((benefit, i) => (
                <li key={i}>
                  <span className="gold-check-bubble">
                    <CheckCircle2 size={14} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="guarantee-card-large">
            <Award size={42} className="gold-text" />
            <h3>The Zero-Penalty Guarantee</h3>
            <p>
              When FinAdvisory manages your statutory compliance retainer, we guarantee all filings and
              payment advices will be completed within statutory windows. We take full ownership of your
              regulatory peace of mind.
            </p>
            <button
              type="button"
              className="gold-btn"
              onClick={() => onOpenContact && onOpenContact('Compliance Retainer')}
            >
              <span>Schedule Compliance Review</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompliancePage;

