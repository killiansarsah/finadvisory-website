import React from 'react';
import { X } from 'lucide-react';
import { Contact } from './Contact';

export function ConsultationModal({ isOpen, onClose, initialService }) {
  if (!isOpen) return null;

  const isCompliance = initialService?.toLowerCase().includes('compliance');

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
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
          <span className="section-kicker">
            {isCompliance ? 'STATUTORY COMPLIANCE' : 'ADVISORY INQUIRY'}
          </span>
          <h2 id="consultation-modal-title" className="modal-title">
            {isCompliance
              ? 'Request a Compliance Assessment'
              : 'Book an Advisory Consultation'}
          </h2>
          <p className="modal-subtitle">
            {isCompliance
              ? 'Receive a comprehensive audit and statutory filing evaluation from certified chartered accountants in Accra, Ghana.'
              : 'Connect directly with a senior partner at FinAdvisory Chartered Accountants in Accra, Ghana.'}
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
