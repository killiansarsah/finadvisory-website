import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export function ConsultationModal({ isOpen, onClose, initialService = '' }) {
  const isCompliance = Boolean(
    initialService && initialService.toLowerCase().includes('compliance')
  );

  const defaultService = initialService || (isCompliance
    ? 'Regulatory & Statutory Compliance Assessment'
    : 'General Advisory Consultation');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: defaultService,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: initialService
      }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceInterest: defaultService,
      message: ''
    });
    if (onClose) onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleModalClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(2, 18, 38, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div
        className="modal-card consultation-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '12px',
          maxWidth: '620px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 24px 60px rgba(2, 18, 38, 0.4)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          opacity: 1,
          visibility: 'visible',
          transform: 'none'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleModalClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#f1f5f9',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#0f172a',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div
          className="modal-header"
          style={{
            padding: '28px 28px 18px',
            borderBottom: '1px solid #e2e8f0',
            backgroundColor: '#ffffff'
          }}
        >
          <span
            className="section-kicker"
            style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1px',
              color: '#c59b27',
              marginBottom: '4px',
              textTransform: 'uppercase'
            }}
          >
            {isCompliance ? 'STATUTORY COMPLIANCE ASSESSMENT' : 'ADVISORY INQUIRY'}
          </span>
          <h2
            id="consultation-modal-title"
            className="modal-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '23px',
              fontWeight: 700,
              color: '#041a36',
              margin: '0 0 6px',
              lineHeight: 1.2
            }}
          >
            {isCompliance
              ? 'Request a Compliance Assessment'
              : 'Book an Advisory Consultation'}
          </h2>
          <p
            className="modal-subtitle"
            style={{
              fontSize: '13px',
              color: '#556578',
              margin: 0,
              lineHeight: 1.45
            }}
          >
            {isCompliance
              ? 'Receive an independent statutory compliance and filing risk assessment from certified chartered accountants in Accra, Ghana.'
              : 'Connect directly with a senior chartered partner at FinAdvisory in Accra, Ghana.'}
          </p>
        </div>

        {/* Modal Body / Form Container */}
        <div
          className="modal-body modal-form-body"
          style={{
            padding: '24px 28px 28px',
            backgroundColor: '#ffffff',
            opacity: 1,
            visibility: 'visible'
          }}
        >
          {isSubmitted ? (
            <div
              className="submission-success-state"
              role="status"
              style={{
                textAlign: 'center',
                padding: '30px 10px',
                opacity: 1
              }}
            >
              <CheckCircle2
                size={54}
                style={{ color: '#16a34a', margin: '0 auto 16px', display: 'block' }}
              />
              <h4 style={{ fontSize: '21px', color: '#041a36', margin: '0 0 10px' }}>
                Inquiry Received Successfully
              </h4>
              <p
                style={{
                  fontSize: '13.5px',
                  color: '#475569',
                  maxWidth: '440px',
                  margin: '0 auto 24px',
                  lineHeight: 1.55
                }}
              >
                Thank you, <strong>{formData.fullName}</strong>. A FinAdvisory Chartered Accountant
                will review your request regarding <strong>{formData.serviceInterest}</strong> and
                contact you within 2 business hours via {formData.phone || formData.email}.
              </p>
              <button
                type="button"
                className="gold-btn small-btn"
                onClick={handleModalClose}
                style={{
                  background: 'linear-gradient(135deg, #c59b27, #a77f19)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 24px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Row 1: Full Name & Company */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label
                    htmlFor="modal-fullName"
                    style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#041a36', marginBottom: '6px' }}
                  >
                    Full Name <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-fullName"
                    name="fullName"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      backgroundColor: '#ffffff',
                      boxSizing: 'border-box'
                    }}
                    autoFocus
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-companyName"
                    style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#041a36', marginBottom: '6px' }}
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="modal-companyName"
                    name="companyName"
                    placeholder="e.g. GoldCoast Ventures Ltd"
                    value={formData.companyName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      backgroundColor: '#ffffff',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label
                    htmlFor="modal-email"
                    style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#041a36', marginBottom: '6px' }}
                  >
                    Email Address <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    placeholder="kwame@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      backgroundColor: '#ffffff',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-phone"
                    style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#041a36', marginBottom: '6px' }}
                  >
                    Phone Number <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    required
                    placeholder="024 XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      backgroundColor: '#ffffff',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Row 3: Service Selection */}
              <div>
                <label
                  htmlFor="modal-serviceInterest"
                  style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#041a36', marginBottom: '6px' }}
                >
                  Primary Service / Assessment Need
                </label>
                <select
                  id="modal-serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 13px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    fontSize: '13.5px',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="Regulatory & Statutory Compliance Assessment">
                    Regulatory &amp; Statutory Compliance Assessment
                  </option>
                  <option value="GRA Corporate Tax & VAT Compliance">
                    GRA Corporate Tax &amp; VAT Compliance
                  </option>
                  <option value="Registrar-General (RGD) Annual Returns">
                    Registrar-General (RGD) Annual Returns
                  </option>
                  <option value="Audit & Assurance">
                    Audit &amp; Assurance
                  </option>
                  <option value="Accountancy">
                    Accountancy &amp; Bookkeeping
                  </option>
                  <option value="Payroll Management">
                    Payroll &amp; SSNIT Management
                  </option>
                  <option value="Tax Advisory">
                    Corporate Tax Advisory
                  </option>
                  <option value="Management Consultancy">
                    Management Consultancy
                  </option>
                  <option value="General Advisory Consultation">
                    General Advisory Consultation
                  </option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div>
                <label
                  htmlFor="modal-message"
                  style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#041a36', marginBottom: '6px' }}
                >
                  How Can We Assist Your Business?
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  placeholder="Briefly describe your statutory filing, audit, tax, or advisory requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 13px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    fontSize: '13.5px',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: 'linear-gradient(135deg, #c59b27, #a77f19)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '13px 20px',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '4px',
                  boxShadow: '0 4px 12px rgba(197, 155, 39, 0.25)',
                  transition: 'opacity 0.2s ease'
                }}
              >
                <span>{isSubmitting ? 'Submitting Request...' : 'Submit Assessment Request'}</span>
                <Send size={15} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '6px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#64748b' }}>
                  <Clock size={13} style={{ color: '#c59b27' }} />
                  2-Hour Response Time
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#64748b' }}>
                  <ShieldCheck size={13} style={{ color: '#c59b27' }} />
                  Strict Confidentiality
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultationModal;
