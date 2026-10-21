import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

function AppContent() {
  const location = useLocation();

  // Observes route changes and reveals on-screen and below-fold elements
  useScrollReveal();

  // Dynamic Route-Specific SEO Titles
  useEffect(() => {
    const titles = {
      '/': 'FinAdvisory | Chartered Accountants & Tax Advisory Firm in Ghana',
      '/about': 'About Us | FinAdvisory Chartered Accountants Accra',
      '/services': 'Audit, Tax & Accountancy Services | FinAdvisory Ghana',
      '/compliance': 'GRA & Registrar-General Compliance | FinAdvisory Ghana',
      '/insights': 'Tax & Regulatory Insights 2025/2026 | FinAdvisory Ghana',
      '/contact': 'Request Consultation | FinAdvisory Chartered Accountants',
    };
    document.title = titles[location.pathname] || 'FinAdvisory Chartered Accountants';
  }, [location.pathname]);

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
    <div className="finadvisory-app-root">
      <ScrollToTop />

      {/* Global Multi-Page Header */}
      <Header
        onOpenContact={() => handleOpenContact()}
        onSelectService={handleSelectServiceByName}
      />

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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
