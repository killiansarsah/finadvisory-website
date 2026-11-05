import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

export const insightsArticles = [
  {
    id: 'gra-tax-calendar-2025',
    tag: 'GRA Tax Policy',
    date: 'February 2025',
    readTime: '4 min read',
    title: '2025/2026 Ghana Tax Deadlines: Key Dates for Corporate Tax & E-VAT Compliance',
    summary:
      'A consolidated statutory calendar outlining GRA provisional tax installment deadlines, withholding tax remittances, and the ongoing rollout of the Certified Invoicing System (E-VAT).',
    content: `
      <h3>1. Corporate Income Tax (CIT) Provisional Deadlines</h3>
      <p>Under the Income Tax Act 2015 (Act 896), companies operating in Ghana are required to pay income tax in quarterly installments based on their estimated chargeable income. For standard calendar-year businesses, payments are due on:</p>
      <ul>
        <li><strong>Quarter 1:</strong> On or before March 31</li>
        <li><strong>Quarter 2:</strong> On or before June 30</li>
        <li><strong>Quarter 3:</strong> On or before September 30</li>
        <li><strong>Quarter 4:</strong> On or before December 31</li>
      </ul>
      <p>Failure to submit provisional estimates or settle quarterly installments on time attracts statutory interest compounded monthly at 125% of the Bank of Ghana policy rate.</p>

      <h3>2. Value Added Tax (VAT) & E-Invoicing (E-VAT)</h3>
      <p>The Ghana Revenue Authority (GRA) continues the mandatory integration of taxpayers onto the Certified Invoicing System. All registered VAT taxpayers must ensure their accounting software or point-of-sale systems communicate in real-time with the GRA Commissioner-General's server.</p>
      <p>Monthly VAT returns, along with NHIL and GETFund, must be filed and paid no later than the last working day of the month following the accounting period.</p>
    `
  },
  {
    id: 'rgd-annual-returns-guide',
    tag: 'RGD / ORC Compliance',
    date: 'January 2025',
    readTime: '5 min read',
    title: 'Registrar-General (ORC) Annual Returns: How to Avoid Company De-Registration in Ghana',
    summary:
      'Essential guidelines under the Companies Act 2019 (Act 992) for submitting annual returns, updating Beneficial Ownership records, and maintaining good corporate standing.',
    content: `
      <h3>Understanding the Annual Return Mandate</h3>
      <p>Under Section 126 of the Companies Act, 2019 (Act 992), every company registered in Ghana must file an Annual Return with the Registrar of Companies (ORC) at least once every year, accompanied by certified financial statements audited by a qualified licensed auditor.</p>

      <h3>Key Compliance Requirements</h3>
      <ul>
        <li><strong>Filing Window:</strong> Annual returns must be lodged within 28 days after the annual general meeting of the company or not later than 18 months from the date of incorporation for new entities.</li>
        <li><strong>Beneficial Ownership (BO):</strong> Accurate disclosure of individuals who directly or indirectly exercise significant control or hold 10% or more equity/voting rights.</li>
        <li><strong>Audited Financial Statements:</strong> Certified copies of balance sheets, profit and loss statements, and the auditor's report must accompany filings for companies with shares.</li>
      </ul>
      <p>FinAdvisory assists companies with end-to-end statutory secretarial filings, avoiding heavy daily default penalties and name cancellation.</p>
    `
  },
  {
    id: 'withholding-tax-best-practices',
    tag: 'Financial Advisory',
    date: 'December 2024',
    readTime: '6 min read',
    title: 'Withholding Tax (WHT) Optimization: Common Pitfalls for Businesses in Ghana',
    summary:
      'How to navigate standard WHT rates on supply of goods (3%), general services (7.5%), and rent (8% or 15%), while securing timely Withholding Tax Credit Certificates.',
    content: `
      <h3>Navigating WHT Obligations in Ghana</h3>
      <p>Withholding Tax is an advance payment of income tax deducted by the withholding agent (payer) from payments made to payees for the supply of goods, works, or services.</p>
      
      <h3>Standard Withholding Rates to Note:</h3>
      <ul>
        <li><strong>Supply of Goods:</strong> 3% for resident persons</li>
        <li><strong>Supply of Works (Construction/Engineering):</strong> 5%</li>
        <li><strong>Supply of Services:</strong> 7.5% for general services, 15% for technical/management fees</li>
        <li><strong>Commercial Rent:</strong> 15% (8% for residential)</li>
      </ul>

      <h3>Securing Tax Credit Certificates (WHT Credit Notes)</h3>
      <p>A frequent pain point for Ghanaian businesses is withholding agents who deduct tax but delay issuing credit certificates on the GRA portal. Without these certificates, the deducted sums cannot be credited against your annual Corporate Income Tax obligation. FinAdvisory conducts periodic reconciliations to track and retrieve all eligible credit notes on your behalf.</p>
    `
  }
];

export function Insights({ onSelectArticle }) {
  return (
    <section className="insights-section section-pad" id="insights" aria-labelledby="insights-heading">
      <div className="section-header-block reveal">
        <span className="section-kicker">FINANCIAL &amp; REGULATORY INSIGHTS</span>
        <h2 id="insights-heading" className="section-title">
          Knowledge &amp; Regulatory Briefings
        </h2>
        <p className="section-subtitle">
          Authoritative updates on Ghanaian tax policies, company law compliance, and corporate finance strategies.
        </p>
      </div>

      <div className="insights-grid">
        {insightsArticles.map((article, index) => (
          <article
            key={article.id}
            className="insight-card reveal-stagger"
            style={{ '--stagger-delay': `${index * 0.12}s` }}
            onClick={() => onSelectArticle && onSelectArticle(article)}
            tabIndex={0}
            role="button"
            aria-label={`Read article: ${article.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectArticle && onSelectArticle(article);
              }
            }}
          >
            <div className="insight-card-inner">
              <div className="insight-meta-row">
                <span className="insight-tag">
                  <Tag size={12} className="tag-icon" />
                  <span>{article.tag}</span>
                </span>
                <span className="insight-read-time">
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h3 className="insight-card-title">{article.title}</h3>
              <p className="insight-card-excerpt">{article.summary}</p>

              <div className="insight-card-bottom">
                <span className="read-briefing-cta">
                  <span>Read Full Briefing</span>
                  <ArrowRight size={14} className="hover-arrow" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Insights;
