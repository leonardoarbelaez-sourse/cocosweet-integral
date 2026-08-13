/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StarProductSection } from './components/StarProductSection';
import { DerivativesSection } from './components/DerivativesSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { PacificProducersSection } from './components/PacificProducersSection';
import { CircularEconomySection } from './components/CircularEconomySection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ValuePropSection } from './components/ValuePropSection';
import { ValidationSection } from './components/ValidationSection';
import { ValidationModal } from './components/ValidationModal';
import { Footer } from './components/Footer';
import { InterestValidationVote } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [defaultAction, setDefaultAction] = useState<'interest' | 'more_info' | 'intent_to_buy'>('interest');
  const [votes, setVotes] = useState<InterestValidationVote[]>(() => {
    try {
      const saved = localStorage.getItem('cocosweet_validation_votes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cocosweet_validation_votes', JSON.stringify(votes));
    } catch {
      // Ignore local storage errors if restricted
    }
  }, [votes]);

  const handleOpenValidation = (action: 'interest' | 'more_info' | 'intent_to_buy' = 'interest') => {
    setDefaultAction(action);
    setModalOpen(true);
  };

  const handleAddVote = (newVote: InterestValidationVote) => {
    setVotes((prev) => [newVote, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Top Navbar */}
      <Navbar onOpenValidation={handleOpenValidation} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Portada con COCOSWEET INTEGRAL & Slogan */}
        <HeroSection onOpenValidation={handleOpenValidation} />

        {/* 3. Presentación breve de la empresa */}
        <AboutSection />

        {/* 4. Sección destacada de la Crema de Coco Gourmet */}
        <StarProductSection onOpenValidation={handleOpenValidation} />

        {/* 5. Sección de productos derivados */}
        <DerivativesSection onOpenValidation={handleOpenValidation} />

        {/* 6. Sección "¿Qué nos hace diferentes?" */}
        <DifferentiatorsSection />

        {/* 7. Sección sobre productores del Pacífico colombiano */}
        <PacificProducersSection />

        {/* 8. Sección sobre sostenibilidad y economía circular */}
        <CircularEconomySection />

        {/* 9. Público objetivo */}
        <TargetAudienceSection />

        {/* 10. Propuesta de valor */}
        <ValuePropSection />

        {/* 11. Sección final para validar interés ("Me interesa", "Quiero conocer más", "Quiero comprar") */}
        <ValidationSection votes={votes} onOpenModal={handleOpenValidation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Validation Survey Modal */}
      <ValidationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultAction={defaultAction}
        onSubmitVote={handleAddVote}
      />

    </div>
  );
}
