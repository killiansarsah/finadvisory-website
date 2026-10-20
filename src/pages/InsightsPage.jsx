import React, { useState } from 'react';
import {
  BookOpen, Calendar, Clock, Tag, ArrowRight, Search, Mail, CheckCircle
} from 'lucide-react';
import { insightsArticles } from '../components/Insights';

export function InsightsPage({ onSelectArticle, onOpenContact }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'GRA Tax Policy', 'RGD / ORC Compliance', 'Financial Advisory'];

  const filteredArticles = insightsArticles.filter((article) => {
    const matchesTag = selectedTag === 'All' || article.tag === selectedTag;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="page-insights">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="section-pad">
          <span className="section-kicker">FINANCIAL &amp; REGULATORY KNOWLEDGE</span>
          <h1 className="page-header-title">
            Ghana Business Insights &amp; <br />
            <span className="gold-text">Tax Briefings</span>
          </h1>
          <p className="page-header-desc">
            Stay ahead of statutory deadlines, regulatory updates from the GRA and ORC, and
            actionable corporate finance strategies crafted by our chartered practice partners.
          </p>

          <div className="insights-filter-toolbar">
            <div className="search-bar-wrap">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search tax topics, deadlines, or laws..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="insights-search-input"
              />
            </div>

            <div className="tag-pills-row">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`tag-pill ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="insights-catalogue-section section-pad">
        <div className="insights-grid">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="insight-card"
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

                <h2 className="insight-card-title">{article.title}</h2>
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

      {/* Tax Alert Newsletter */}
      <section className="tax-alert-callout section-pad">
        <div className="tax-alert-inner">
          <div>
            <span className="section-kicker">TAX &amp; REGULATORY BULLETINS</span>
            <h3>Receive Timely Ghana Statutory Alerts</h3>
            <p>
              Join 1,200+ Ghanaian business owners receiving our monthly executive briefing on GRA policy
              changes, budget highlights, and statutory deadlines.
            </p>
          </div>
          <div className="tax-alert-form-box">
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to FinAdvisory Regulatory Bulletins!'); }} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter corporate email address"
                className="newsletter-input"
              />
              <button type="submit" className="gold-btn small-btn">
                Subscribe
              </button>
            </form>
            <small>No spam. Unsubscribe at any time.</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InsightsPage;

