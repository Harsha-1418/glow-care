import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import ConsultationForm from './components/ConsultationForm';
import FaceScannerModal from './components/FaceScannerModal';
import GlowPlanDashboard from './components/GlowPlanDashboard';
import SalonBookingModal from './components/SalonBookingModal';
import DashboardView from './components/DashboardView';
import AIChatAssistant from './components/AIChatAssistant';
import Footer from './components/Footer';

import { SAMPLE_SELFIES, generateGlowPlan } from './data/mockData';

export default function App() {
  // Navigation State: 'home' | 'consultation' | 'glow-plan' | 'salon' | 'dashboard'
  const [currentTab, setCurrentTab] = useState('home');
  
  // Scanning overlay state
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [pendingProfile, setPendingProfile] = useState(null);

  // Active Glow Plan (preloaded with College Farewell Demo for instant working prototype)
  const initialDemoPlan = generateGlowPlan({
    occasion: 'College',
    style: 'Elegant',
    budget: '2000',
    skinType: 'Combination',
    concerns: ['Uneven appearance', 'Oiliness'],
    image: SAMPLE_SELFIES[0].avatar,
    faceShape: 'Oval'
  });

  const [activeGlowPlan, setActiveGlowPlan] = useState(initialDemoPlan);
  
  // Salon Booking Modal state
  const [isSalonModalOpen, setIsSalonModalOpen] = useState(false);
  const [salonCategoryFilter, setSalonCategoryFilter] = useState(null);
  
  // Confirmed appointments list
  const [appointments, setAppointments] = useState([
    {
      id: 'GC-BOOK-882194',
      service: {
        id: 's-1',
        title: 'Signature Blowdry & Style',
        category: 'Hair Styling',
        price: 500,
        duration: '45 mins'
      },
      date: '2026-09-28',
      time: '02:30 PM',
      stylist: 'Aaria Sharma (Master Stylist)',
      location: 'GlowCare Flagship Salon & Spa, Bandra West, Mumbai',
      status: 'Confirmed'
    }
  ]);

  // Form submission handler -> Triggers face scanner
  const handleConsultationSubmit = (profileData) => {
    setPendingProfile(profileData);
    setIsScannerOpen(true);
  };

  // Face Scanner complete -> Generates new Glow Plan and switches to Glow Plan tab
  const handleScanComplete = () => {
    setIsScannerOpen(false);
    if (pendingProfile) {
      const newPlan = generateGlowPlan(pendingProfile);
      setActiveGlowPlan(newPlan);
    }
    setCurrentTab('glow-plan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // One-click demo scenario loader
  const handleLoadDemoPreset = (preset) => {
    const demoProfile = {
      occasion: preset.occasion,
      style: preset.style,
      budget: preset.budget,
      skinType: preset.skinType,
      concerns: preset.concerns,
      image: preset.avatar,
      faceShape: preset.faceShape
    };

    const newPlan = generateGlowPlan(demoProfile);
    setActiveGlowPlan(newPlan);
    setCurrentTab('glow-plan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Optimize My Glow button handler
  const handleOptimizeGlow = () => {
    if (!activeGlowPlan) return;

    // Re-run engine with optimized dupes / re-balanced basket
    const updatedPlan = generateGlowPlan({
      ...activeGlowPlan.userProfile,
      budget: activeGlowPlan.userProfile.budget
    });

    setActiveGlowPlan(updatedPlan);
  };

  // Live Chat Update plan handler
  const handleUpdatePlanFromChat = (overrides) => {
    const currentProf = activeGlowPlan?.userProfile || {};
    const updatedProf = {
      ...currentProf,
      ...overrides
    };

    const newPlan = generateGlowPlan(updatedProf);
    setActiveGlowPlan(newPlan);
  };

  // Open Salon booking modal with optional category filter
  const handleOpenSalonModal = (category = null) => {
    setSalonCategoryFilter(category);
    setIsSalonModalOpen(true);
  };

  const handleConfirmAppointment = (bookingObj) => {
    setAppointments(prev => [bookingObj, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 font-outfit selection:bg-rose-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        activePlan={activeGlowPlan}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <Hero
              onStartConsultation={() => setCurrentTab('consultation')}
              onLoadDemoPreset={handleLoadDemoPreset}
              onExploreServices={() => {
                const el = document.getElementById('agents-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <div id="agents-section">
              <ServicesOverview
                onStartConsultation={() => setCurrentTab('consultation')}
              />
            </div>
          </>
        )}

        {currentTab === 'consultation' && (
          <ConsultationForm
            onSubmitForm={handleConsultationSubmit}
            initialProfile={activeGlowPlan?.userProfile}
          />
        )}

        {currentTab === 'glow-plan' && activeGlowPlan && (
          <GlowPlanDashboard
            glowPlan={activeGlowPlan}
            onOptimizeGlow={handleOptimizeGlow}
            onOpenSalonBooking={(cat) => handleOpenSalonModal(cat)}
          />
        )}

        {currentTab === 'salon' && (
          <div className="py-8 px-4 max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest">
                Luxury Partner Salons
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
                Book <span className="gradient-text-rose">Salon Services</span>
              </h1>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Sync your personalized Glow Plan directly with certified master stylists and estheticians.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleOpenSalonModal()}
                className="px-8 py-4 rounded-2xl font-bold text-white gradient-btn-primary shadow-xl hover:scale-105 transition-all"
              >
                ✨ Launch Salon Booking Assistant
              </button>
            </div>
          </div>
        )}

        {currentTab === 'dashboard' && (
          <DashboardView
            activePlan={activeGlowPlan}
            appointments={appointments}
            onNavigateToPlan={() => setCurrentTab('glow-plan')}
            onStartNewPlan={() => setCurrentTab('consultation')}
            onOpenSalon={() => handleOpenSalonModal()}
          />
        )}
      </main>

      {/* Face Scanner Full-screen HUD Modal */}
      {isScannerOpen && pendingProfile && (
        <FaceScannerModal
          userProfile={pendingProfile}
          onScanComplete={handleScanComplete}
        />
      )}

      {/* Salon Booking Modal */}
      {isSalonModalOpen && (
        <SalonBookingModal
          initialServiceCategory={salonCategoryFilter}
          onClose={() => setIsSalonModalOpen(false)}
          onConfirmAppointment={handleConfirmAppointment}
        />
      )}

      {/* Floating AI Chat Assistant */}
      <AIChatAssistant
        activePlan={activeGlowPlan}
        onUpdatePlanFromChat={handleUpdatePlanFromChat}
      />

      {/* Footer */}
      <Footer onNavigate={(tab) => setCurrentTab(tab)} />

    </div>
  );
}
