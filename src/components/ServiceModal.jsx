import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export function ServiceModal({ service, onClose, onBookService }) {
  if (!service) return null;

  const { title, subtitle, description, deliverables } = service;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card service-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="section-kicker">PRACTICE AREA</span>
          <h2 id="modal-title" className="modal-title">{title}</h2>
          <p className="modal-subtitle">{subtitle}</p>
        </div>

        <div className="modal-body">
          <p className="modal-description">{description}</p>

          <div className="modal-deliverables-block">
            <h4 className="deliverables-heading">Core Scope &amp; Client Deliverables</h4>
            <ul className="modal-deliverables-list">
              {deliverables && deliverables.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle size={16} className="deliverable-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-assurance-strip">
            <ShieldCheck size={18} className="gold-text" />
            <span>Conducted in accordance with IFRS, ISA, and Ghanaian Revenue Acts.</span>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="secondary-outline-btn"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="gold-btn modal-cta-btn"
            onClick={() => {
              onClose();
              onBookService && onBookService(title);
            }}
          >
            <span>Engage FinAdvisory for {title}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
