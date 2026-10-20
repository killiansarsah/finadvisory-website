import React from 'react';
import { X, Shield } from 'lucide-react';

export function LegalModal({ title, onClose }) {
  if (!title) return null;

  const isPrivacy = title.toLowerCase().includes('privacy');

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="legal-title">
      <div className="modal-card legal-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="flex-row-center gap-2">
            <Shield className="gold-text" size={18} />
            <span className="section-kicker">FINADVISORY STATUTORY GOVERNANCE</span>
          </div>
          <h2 id="legal-title" className="modal-title">{title}</h2>
        </div>

        <div className="modal-body legal-text-body">
          {isPrivacy ? (
            <>
              <p>
                FinAdvisory Chartered Accountants respects your statutory right to privacy and is committed
                to safeguarding confidential financial disclosures in accordance with the <strong>Ghana Data Protection Act, 2012 (Act 843)</strong> and the ethics standards of the Institute of Chartered Accountants Ghana (ICAG).
              </p>
              <h4>1. Information Collection</h4>
              <p>
                We collect personal and corporate financial data only to the extent required to execute accounting, statutory audit, tax representations, or corporate compliance filings requested by the client.
              </p>
              <h4>2. Confidentiality &amp; Professional Privilege</h4>
              <p>
                All proprietary client records, bank statements, ledger archives, and tax estimates are kept strictly confidential and will never be sold, leased, or disclosed to unauthorized third parties without prior written consent, except where mandated by statutory law.
              </p>
              <h4>3. Security &amp; Data Retention</h4>
              <p>
                We employ industry-grade encryption and secure access controls to prevent unauthorized access or disclosure of your corporate documentation.
              </p>
            </>
          ) : (
            <>
              <p>
                By accessing this website and engaging FinAdvisory Chartered Accountants, you agree to comply with and be bound by the terms and conditions of engagement outlined herein.
              </p>
              <h4>1. Scope of Online Information</h4>
              <p>
                The regulatory updates, tax guides, and briefings published on this website are provided for general educational purposes only. They do not constitute formal legal or certified accounting opinions until an engagement letter is officially executed.
              </p>
              <h4>2. Professional Engagement</h4>
              <p>
                Filing deadlines and tax computations are subject to statutory revisions by the Ghana Revenue Authority (GRA) and the Office of the Registrar of Companies (ORC). Formal advisory engagements require verified source documentation and partner sign-off.
              </p>
              <h4>3. Governing Law</h4>
              <p>
                These terms are governed by and construed in accordance with the statutory laws of the Republic of Ghana.
              </p>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="gold-btn small-btn" onClick={onClose}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

export default LegalModal;
