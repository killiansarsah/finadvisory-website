import React from 'react';
import {
  Search, Calculator, Users, FileText, TrendingUp, ShieldCheck, Landmark,
  ArrowRight, CheckCircle2
} from 'lucide-react';

export const servicesData = [
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    subtitle: 'Independent, objective and trusted assurance services.',
    Icon: Search,
    iconType: 'icon',
    description:
      'We conduct independent financial audits, internal controls assessments, and compliance reviews designed to provide lenders, shareholders, and regulatory authorities with absolute confidence in your financial reporting.',
    deliverables: [
      'Statutory Annual Audits according to IFRS and Ghana Companies Act',
      'Internal Control & Operational Risk Assessments',
      'Special Purpose Audits & Due Diligence for M&A',
      'Forensic Accounting & Investigation'
    ]
  },
  {
    id: 'accountancy',
    title: 'Accountancy',
    subtitle: 'Accurate records. Better decisions.',
    Icon: Calculator,
    iconType: 'icon',
    description:
      'From day-to-day bookkeeping to comprehensive monthly management accounts, our chartered accountants ensure your financial records are pristine, timely, and aligned with statutory standards.',
    deliverables: [
      'Cloud Bookkeeping (QuickBooks, Xero, Sage)',
      'Monthly Management Accounts & Financial Summaries',
      'Bank Reconciliation & Cash Flow Forecasting',
      'Annual Financial Statement Preparation'
    ]
  },
  {
    id: 'payroll-management',
    title: 'Payroll Management',
    subtitle: 'Reliable, compliant and efficient payroll solutions.',
    Icon: Users,
    iconType: 'icon',
    description:
      'Ensure hassle-free salary disbursements, accurate statutory deductions (SSNIT Tier 1 & Tier 2, PAYE, Tier 3), and full compliance with Ghanaian labor regulations.',
    deliverables: [
      'Monthly Payslip Generation & Direct Net Pay Advice',
      'Ghana GRA PAYE Calculations and Submissions',
      'SSNIT Tier 1 & Private Pension Tier 2/3 Remittances',
      'Year-End Form P9 Preparation and Reconciliation'
    ]
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory',
    subtitle: 'Minimise risk. Optimise your tax position.',
    Icon: FileText,
    iconType: 'icon',
    description:
      'Proactive tax planning and advisory that ensures your enterprise legally minimizes tax liabilities while staying 100% compliant with evolving Ghanaian revenue legislation.',
    deliverables: [
      'Corporate Income Tax (CIT) Strategic Planning',
      'Withholding Tax (WHT) Audits and Exemption Applications',
      'Value Added Tax (VAT), NHIL, GETFund & COVID Levy Advisory',
      'Representation during GRA Audits & Tax Clearance Certificates (TCC)'
    ]
  },
  {
    id: 'management-consultancy',
    title: 'Management Consultancy',
    subtitle: 'Strategic insights for sustainable growth.',
    Icon: TrendingUp,
    iconType: 'icon',
    description:
      'We partner with executives and entrepreneurs to formulate robust business strategies, design scalable financial architectures, and identify profit optimization opportunities.',
    deliverables: [
      'Business Plans & Financial Projections for Investors',
      'Cost Reduction & Margin Improvement Strategies',
      'Capital Structure & Working Capital Advisory',
      'Corporate Restructuring and Business Valuation'
    ]
  },
  {
    id: 'regulatory-statutory',
    title: 'Regulatory & Statutory Compliance',
    subtitle: 'Stay compliant. Build confidence.',
    Icon: ShieldCheck,
    iconType: 'icon',
    description:
      'We protect your business from statutory penalties, operating license revocation, and legal entanglements across all statutory oversight bodies in Ghana.',
    deliverables: [
      'Statutory Calendar Management & Early Deadline Tracking',
      'Ghana Investment Promotion Centre (GIPC) Filings',
      'Data Protection Commission (DPC) Compliance',
      'Industry-Specific Licensing Renewals'
    ]
  },
  {
    id: 'gra-tax-filings',
    title: 'GRA Tax Filings',
    subtitle: 'Quarterly and annual GRA tax filings.',
    iconType: 'gra-badge',
    description:
      'Dedicated handling of all Ghana Revenue Authority (GRA) filing obligations, including periodic VAT returns, quarterly corporate tax estimates, and annual return submissions.',
    deliverables: [
      'Monthly VAT / NHIL / GETFund Electronic Returns Filing',
      'Quarterly Corporate Provisional Tax Returns (ITR)',
      'Annual Corporate Income Tax Returns and Financial Statements',
      'GRA Portal (e-Tax) Reconciliation & Tax Clearance Processing'
    ]
  },
  {
    id: 'rgd-filings',
    title: 'RGD Filings',
    subtitle: "Annual filings with the Registrar-General's Department.",
    Icon: Landmark,
    iconType: 'icon',
    description:
      "Maintain active, good-standing corporate status with the Registrar-General's Department (now Office of the Registrar of Companies - ORC) in Ghana, eliminating risk of company strikes.",
    deliverables: [
      'Annual Company Returns Filing and Fee Settlement',
      'Beneficial Ownership (BO) Declarations and Updates',
      'Changes in Directors, Auditors, or Corporate Address',
      'Increase in Stated Capital and Company Constitution Amendments'
    ]
  }
];

export function Services({ onSelectService }) {
  return (
    <section className="services-section section-pad" id="services" aria-labelledby="services-heading">
      <div className="section-header-block reveal">
        <span className="section-kicker">OUR SERVICES</span>
        <h2 id="services-heading" className="section-title">
          Comprehensive Accounting &amp; Advisory Services
        </h2>
        <p className="section-subtitle">
          We offer a full range of professional services tailored to meet your business needs in Ghana.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => {
          const { id, title, subtitle, Icon, iconType } = service;
          return (
            <article
              key={id}
              className="service-card reveal-stagger"
              style={{ '--stagger-delay': `${(index % 4) * 0.1}s` }}
              onClick={() => onSelectService && onSelectService(service)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService && onSelectService(service);
                }
              }}
            >
              <div className="service-card-inner">
                <div className="service-icon-box" aria-hidden="true">
                  {iconType === 'gra-badge' ? (
                    <div className="gra-badge-circle">
                      <span className="gra-text-line">GRA</span>
                      <span className="gra-text-sub">GHANA</span>
                    </div>
                  ) : (
                    <Icon className="service-svg-icon" size={24} />
                  )}
                </div>

                <div className="service-text-group">
                  <h3 className="service-card-title">{title}</h3>
                  <p className="service-card-copy">{subtitle}</p>
                </div>

                <div className="service-card-footer">
                  <span className="learn-more-link">
                    <span>Learn details</span>
                    <ArrowRight size={14} className="hover-arrow" />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
