import React, { useState } from 'react';
import {
  MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck
} from 'lucide-react';
import { servicesData } from './Services';

export function Contact({ prefilledService = '', isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: prefilledService || 'Audit & Assurance',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      {/* 4-Part Executive Horizontal Banner matching Reference Image */}
      <div className="contact-banner-row">
        {/* Block 1: Have a Question? */}
        <div className="contact-banner-col col-question reveal-left">
          <div className="question-icon-wrap" aria-hidden="true">
            <MessageCircle size={38} strokeWidth={1.8} />
          </div>
          <div className="banner-col-text">
            <h2 id="contact-heading" className="banner-col-title">Have a Question?</h2>
            <p className="banner-col-sub">We're here to help. Get in touch with our team today.</p>
          </div>
        </div>

        {/* Block 2: Call Us */}
        <div className="contact-banner-col col-detail reveal">
          <div className="detail-icon-wrap" aria-hidden="true">
            <Phone size={24} />
          </div>
          <div className="banner-col-text">
            <span className="banner-col-label">Call Us</span>
            <a href="tel:0243663994" className="banner-phone-link">0243663994</a>
            <a href="tel:0206768299" className="banner-phone-link">0206768299</a>
          </div>
        </div>

        {/* Block 3: Email / Domain */}
        <div className="contact-banner-col col-detail col-email reveal">
          <div className="detail-icon-wrap" aria-hidden="true">
            <Mail size={24} />
          </div>
          <div className="banner-col-text">
            <span className="banner-col-label">Email / Domain</span>
            <a href="mailto:info@finadvisorycc.com" className="banner-email-link">
              info@finadvisorycc.com
            </a>
            <small className="banner-note">
              (Official corporate advisory correspondence)
            </small>
          </div>
        </div>

        {/* Block 4: Independence Arch Photo with Slogan */}
        <div className="contact-banner-col col-photo reveal-right">
          <img
            src="/images/footer-building.jpg"
            alt="Independence Arch in Accra, Ghana"
            className="banner-arch-img"
            loading="lazy"
          />
          <div className="banner-photo-scrim" />
          <p className="banner-slogan">
            Supporting Ghana’s <br />
            Businesses. Building <br />
            a Stronger Tomorrow.
          </p>
        </div>
      </div>

      {/* Interactive Consultation Request Section */}
      <div className="consultation-container section-pad">
        <div className="consultation-split reveal">
          {/* Left Info Column */}
          <div className="consultation-info">
            <span className="section-kicker">GET STARTED</span>
            <h3 className="consultation-heading">
              Request a Confidential <br />
              <span className="gold-text">Consultation</span>
            </h3>
            <p className="consultation-intro">
              Whether you are facing upcoming GRA tax deadlines, require an independent statutory audit,
              or seek strategic management advice, our chartered accountants in Accra are prepared to assist.
            </p>

            <div className="consultation-perks">
              <div className="perk-item">
                <Clock className="perk-icon" size={18} />
                <div>
                  <strong>Rapid Response Time</strong>
                  <p>Our senior partners review and reply to inquiries within 2 business hours.</p>
                </div>
              </div>
              <div className="perk-item">
                <ShieldCheck className="perk-icon" size={18} />
                <div>
                  <strong>Strict Confidentiality</strong>
                  <p>All financial discussions are safeguarded by statutory professional privilege.</p>
                </div>
              </div>
            </div>

            <div className="office-location-card">
              <MapPin size={20} className="pin-icon" />
              <div>
                <strong>Accra Head Office</strong>
                <p>BG56 Abayateye Street, East Legon Hills, Accra</p>
                <p className="postal-address">P.O. Box MD 222, Madina, Accra</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="consultation-form-card">
            {isSubmitted ? (
              <div className="submission-success-state" role="status">
                <CheckCircle2 size={54} className="success-icon" />
                <h4>Inquiry Received</h4>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. A FinAdvisory Chartered Accountant
                  will review your request regarding <strong>{formData.serviceInterest}</strong> and
                  contact you shortly via {formData.phone || formData.email}.
                </p>
                <button
                  type="button"
                  className="gold-btn small-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      serviceInterest: 'Audit & Assurance',
                      message: ''
                    });
                    if (onClose) onClose();
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
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

                <div className="form-group">
                  <label htmlFor="serviceInterest" className="form-label">
                    Primary Service of Interest
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
                  <label htmlFor="message" className="form-label">
                    How Can We Assist Your Business?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your statutory filing, audit, or advisory needs..."
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
                  <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Consultation Request'}</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
