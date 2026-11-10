import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Building2, AlertCircle
} from 'lucide-react';
import { servicesData } from '../components/Services';
import { submitInquiry } from '../services/formService';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: 'Audit & Assurance',
    urgency: 'Standard (Within 2 business days)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitInquiry(formData, 'Contact Page Consultation Inquiry');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(err.message || 'Unable to submit your request. Please email info@finadvisorycc.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-contact">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-pad">
          <span className="section-kicker">GET IN TOUCH</span>
          <h1 className="page-header-title">
            Connect with Our Chartered Practice <br />
            <span className="gold-text">in Accra, Ghana</span>
          </h1>
          <p className="page-header-desc">
            Whether you require an independent audit, ongoing GRA tax management, or strategic advisory,
            our senior partners are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Contact Content Split */}
      <section className="contact-main-section section-pad">
        <div className="contact-split-grid">
          {/* Left Info & Channels */}
          <div className="contact-channel-info">
            <h2 className="channel-title">Direct Corporate Channels</h2>
            <p className="channel-desc">
              All client communications are handled with strict professional confidentiality and
              partner-level attention.
            </p>

            <div className="channel-cards-stack">
              {/* Phone Card */}
              <div className="channel-card">
                <div className="channel-icon-wrap">
                  <Phone size={22} className="gold-text" />
                </div>
                <div>
                  <strong>Telephone Direct Lines</strong>
                  <div className="phone-links-row">
                    <a href="tel:0243663994" className="channel-link">0243663994</a>
                    <span className="channel-sep">/</span>
                    <a href="tel:0206768299" className="channel-link">0206768299</a>
                  </div>
                  <small>Available Monday – Friday, 8:00 AM – 5:00 PM GMT</small>
                </div>
              </div>

              {/* Email Card */}
              <div className="channel-card">
                <div className="channel-icon-wrap">
                  <Mail size={22} className="gold-text" />
                </div>
                <div>
                  <strong>Corporate Email</strong>
                  <a href="mailto:info@finadvisorycc.com" className="channel-link">
                    info@finadvisorycc.com
                  </a>
                  <small>Inquiries reviewed within 2 business days</small>
                </div>
              </div>

              {/* Physical Office Card */}
              <div className="channel-card">
                <div className="channel-icon-wrap">
                  <MapPin size={22} className="gold-text" />
                </div>
                <div>
                  <strong>Head Office Location</strong>
                  <p className="address-text">
                    BG56 Abayateye Street, East Legon Hills, Accra, Ghana
                  </p>
                  <p className="postal-text">
                    Postal Address: P.O. Box MD 222, Madina, Accra
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="channel-card">
                <div className="channel-icon-wrap">
                  <Clock size={22} className="gold-text" />
                </div>
                <div>
                  <strong>Business Hours</strong>
                  <p className="hours-text">Monday – Friday: 8:00 AM – 5:00 PM GMT</p>
                  <small>Saturday &amp; Sunday: By prior partner appointment</small>
                </div>
              </div>
            </div>

            <div className="confidential-seal-card">
              <ShieldCheck size={24} className="gold-text" />
              <div>
                <strong>Statutory Professional Privilege</strong>
                <p>
                  All consultations and document disclosures are legally protected under the Professional
                  Ethics code of the Institute of Chartered Accountants Ghana (ICAG).
                </p>
              </div>
            </div>
          </div>

          {/* Right Consultation Form */}
          <div className="contact-form-wrapper">
            <div className="consultation-form-card">
              <h3 className="form-card-title">Schedule a Consultation</h3>
              <p className="form-card-subtitle">
                Please complete the form below. A senior practice partner will contact you promptly.
              </p>

              {isSubmitted ? (
                <div className="submission-success-state" role="status">
                  <CheckCircle2 size={54} className="success-icon" />
                  <h4>Inquiry Received Successfully</h4>
                  <p>
                    Thank you, <strong>{formData.fullName}</strong>. A Senior Partner / Officer at FinAdvisory Chartered Accountants
                    will review your request regarding <strong>{formData.serviceInterest}</strong> and
                    contact you promptly via {formData.phone || formData.email}.
                  </p>
                  <button
                    type="button"
                    className="gold-btn small-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        serviceInterest: 'Audit & Assurance',
                        urgency: 'Standard',
                        message: ''
                      });
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  {submitError && (
                    <div className="form-error-banner" style={{ background: '#fef2f2', border: '1px solid #f87171', color: '#991b1b', padding: '10px 14px', borderRadius: '6px', marginBottom: '14px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertCircle size={18} />
                      <span>{submitError}</span>
                    </div>
                  )}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="e.g. Kwame Mensah"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyName" className="form-label">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="e.g. GoldCoast Ventures Ltd"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="kwame@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="req-star">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="024 XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="serviceInterest" className="form-label">
                        Primary Service Needed
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="form-select"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="urgency" className="form-label">
                        Response Urgency
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Urgent (Imminent GRA/RGD deadline)">Urgent (Imminent GRA/RGD deadline)</option>
                        <option value="Standard (Within 2 business days)">Standard (Within 2 business days)</option>
                        <option value="Exploratory Consultation">Exploratory Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Brief Description of Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Outline your statutory filing needs, accounting records state, or advisory questions..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gold-btn full-width-btn"
                  >
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Consultation Request'}</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

