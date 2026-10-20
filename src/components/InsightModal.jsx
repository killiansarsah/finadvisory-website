import React from 'react';
import { X, Calendar, Clock, Tag, Share2, BookOpen } from 'lucide-react';

export function InsightModal({ article, onClose, onConsultationRequest }) {
  if (!article) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="insight-title">
      <div className="modal-card insight-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="insight-modal-meta">
            <span className="insight-tag">
              <Tag size={12} />
              <span>{article.tag}</span>
            </span>
            <span className="insight-meta-item">
              <Clock size={13} />
              <span>{article.readTime}</span>
            </span>
            <span className="insight-meta-item">
              <Calendar size={13} />
              <span>{article.date}</span>
            </span>
          </div>

          <h2 id="insight-title" className="insight-modal-title">{article.title}</h2>
        </div>

        <div className="modal-body insight-article-content">
          <div
            className="article-rich-text"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="insight-author-card">
            <BookOpen size={24} className="gold-text" />
            <div>
              <strong>Published by FinAdvisory Regulatory Practice Group</strong>
              <p>For bespoke tax counsel or statutory advisory, contact our Accra practice partners.</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="secondary-outline-btn"
            onClick={onClose}
          >
            Close Briefing
          </button>
          <button
            type="button"
            className="gold-btn"
            onClick={() => {
              onClose();
              onConsultationRequest && onConsultationRequest();
            }}
          >
            Speak to a Tax Partner
          </button>
        </div>
      </div>
    </div>
  );
}

export default InsightModal;
