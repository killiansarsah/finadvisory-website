import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Compliance } from '../components/Compliance';
import { About } from '../components/About';
import { Insights } from '../components/Insights';
import { Contact } from '../components/Contact';

export function HomePage({ onOpenContact, onSelectService, onSelectArticle }) {
  return (
    <div className="page-home">
      {/* 1. Executive Hero with Desktop Scene & Ghana Flag */}
      <Hero onOpenContact={onOpenContact} />

      {/* 2. Our Services Grid */}
      <Services onSelectService={onSelectService} />

      {/* 3. Statutory Compliance Tri-Panel */}
      <Compliance onOpenContact={onOpenContact} />

      {/* 4. About Us 3-Column Feature */}
      <About onOpenContact={onOpenContact} />

      {/* 5. Financial & Regulatory Insights */}
      <Insights onSelectArticle={onSelectArticle} />

      {/* 6. Contact Banner & Consultation Form */}
      <Contact />
    </div>
  );
}

export default HomePage;

