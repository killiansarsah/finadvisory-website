import React from 'react';
import { X } from 'lucide-react';
import { Contact } from './Contact';

export function ConsultationModal({ isOpen, onClose, initialService }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="consultation-modal-title">
      <div className="modal-card consultation-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="section-kicker">ADVISORY INQUIRY</span>
          <h2 id="consultation-modal-title" className="modal-title">
            Book an Advisory Consultation
          </h2>
          <p className="modal-subtitle">
            Connect with a senior partner at FinAdvisory Chartered Accountants in Accra, Ghana.
          </p>
        </div>

        <div className="modal-body modal-form-body">
          <Contact
            isModal={true}
            prefilledService={initialService}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultationModal;
