import React, { useState } from 'react';
import { Language, ActivePage, Doctor, OPToken } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { DoctorsSection } from './components/DoctorsSection';
import { AppointmentBookingSection } from './components/AppointmentBookingSection';
import { HealthPackagesSection } from './components/HealthPackagesSection';
import { AarogyasriSection } from './components/AarogyasriSection';
import { GallerySection } from './components/GallerySection';
import { LabReportsSection } from './components/LabReportsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { AmbulanceModal } from './components/AmbulanceModal';
import { FloatingActions } from './components/FloatingActions';
import { HOSPITAL_INFO } from './data/mockData';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isAmbulanceModalOpen, setIsAmbulanceModalOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<Doctor | null>(null);

  // Navigate to page and scroll top smoothly
  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open booking specifically for a doctor
  const handleBookDoctor = (doc: Doctor) => {
    setSelectedDoctorForBooking(doc);
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open generic booking
  const handleOpenBooking = () => {
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white relative">
      
      {/* 1. Header with Fixed 24/7 Emergency Highlight Top Bar */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenAmbulance={() => setIsAmbulanceModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* 2. Main Page Content according to active tab */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              language={language}
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onOpenAmbulance={() => setIsAmbulanceModalOpen(true)}
            />
            <DepartmentsSection
              language={language}
              onOpenBooking={handleOpenBooking}
            />
            <DoctorsSection
              language={language}
              onBookDoctor={handleBookDoctor}
            />
            <HealthPackagesSection
              language={language}
            />
            <AarogyasriSection
              language={language}
            />
            <TestimonialsSection
              language={language}
            />
            <GallerySection
              language={language}
            />
            <BlogSection
              language={language}
            />
            <ContactSection
              language={language}
            />
          </>
        )}

        {activePage === 'about' && (
          <>
            <AboutSection
              language={language}
              onOpenBooking={handleOpenBooking}
            />
            <GallerySection
              language={language}
            />
          </>
        )}

        {activePage === 'departments' && (
          <DepartmentsSection
            language={language}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'doctors' && (
          <DoctorsSection
            language={language}
            onBookDoctor={handleBookDoctor}
          />
        )}

        {activePage === 'booking' && (
          <AppointmentBookingSection
            language={language}
            preSelectedDoctor={selectedDoctorForBooking}
          />
        )}

        {activePage === 'packages' && (
          <HealthPackagesSection
            language={language}
          />
        )}

        {activePage === 'aarogyasri' && (
          <AarogyasriSection
            language={language}
          />
        )}

        {activePage === 'gallery' && (
          <GallerySection
            language={language}
          />
        )}

        {activePage === 'reports' && (
          <LabReportsSection
            language={language}
          />
        )}

        {activePage === 'blog' && (
          <BlogSection
            language={language}
          />
        )}

        {activePage === 'contact' && (
          <ContactSection
            language={language}
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* 4. Floating WhatsApp & Mobile Sticky Click-to-Call Bottom Bar */}
      <FloatingActions
        language={language}
        onOpenBooking={handleOpenBooking}
        onOpenAmbulance={() => setIsAmbulanceModalOpen(true)}
      />

      {/* 5. 24/7 Emergency Ambulance GPS Tracking & Responder Modal */}
      <AmbulanceModal
        isOpen={isAmbulanceModalOpen}
        onClose={() => setIsAmbulanceModalOpen(false)}
        language={language}
      />

    </div>
  );
}
