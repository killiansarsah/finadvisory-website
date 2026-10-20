import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CompliancePage } from './pages/CompliancePage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceModal } from './components/ServiceModal';
import { InsightModal } from './components/InsightModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';
import { servicesData } from './components/Services';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  const [selectedService, setSelectedService] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const handleOpenContact = (serviceName = '') => {
    setPrefilledService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleSelectServiceByName = (name) => {
    const found = servicesData.find((s) => s.title.toLowerCase() === name.toLowerCase());
    if (found) {
      setSelectedService(found);
    }
  };

  return (
    <BrowserRouter>
      <div className="finadvisory-app-root">
        <ScrollToTop />

        {/* Global Multi-Page Header */}
        <Header onOpenContact={() => handleOpenContact()} />

        {/* Multi-Page Route Views */}
        <main id="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenContact={() => handleOpenContact()}
                  onSelectService={(service) => setSelectedService(service)}
                  onSelectArticle={(article) => setSelectedArticle(article)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenContact={() => handleOpenContact()} />}
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenContact={(svcName) => handleOpenContact(svcName)}
                  onSelectService={(service) => setSelectedService(service)}
                />
              }
            />
            <Route
              path="/compliance"
              element={<CompliancePage onOpenContact={() => handleOpenContact('Regulatory Compliance')} />}
            />
            <Route
              path="/insights"
              element={
                <InsightsPage
                  onSelectArticle={(article) => setSelectedArticle(article)}
                  onOpenContact={() => handleOpenContact('General Tax Advisory')}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Multi-Page Footer */}
        <Footer
          onOpenContact={() => handleOpenContact()}
          onSelectService={handleSelectServiceByName}
          onOpenLegal={(type) => setActiveLegalModal(type)}
        />

        {/* Reusable Modals & Dialogs */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={(title) => handleOpenContact(title)}
        />

        <InsightModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onConsultationRequest={() => handleOpenContact('General Tax Advisory')}
        />

        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          initialService={prefilledService}
        />

        <LegalModal
          title={activeLegalModal}
          onClose={() => setActiveLegalModal(null)}
        />
      </div>
    </BrowserRouter>
  );
}

