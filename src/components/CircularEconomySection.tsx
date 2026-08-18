import React, { useState } from 'react';
import { CIRCULAR_STEPS } from '../data/content';
import { RefreshCw, Flame, GlassWater, Sparkles, Sprout, CheckCircle2, ArrowRight } from 'lucide-react';
import heroCoconut from '../assets/images/hero_coconut_pacific_1786562394954.jpg';
import circularCoconut from '../assets/images/circular_coconut_products_1786562425622.jpg';
import pacificProducers from '../assets/images/pacific_producers_1786562410732.jpg';

export const CircularEconomySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3);
  const currentStep = CIRCULAR_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-5 h-5 text-amber-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-stone-300" />;
      case 'GlassWater': return <GlassWater className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-300" />;
      default: return <RefreshCw className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="circular" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            <span>Modelo Cero Desperdicio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Sostenibilidad & Economía Circular
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            Aprovechamos el 100% de la anatomía del coco para cerrar el ciclo biológico sin generar residuos agroindustriales.
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">
              Haz clic en cada componente del coco:
            </span>

            {CIRCULAR_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-900/90 to-teal-900/90 border-emerald-400 text-white shadow-lg shadow-emerald-950 scale-[1.02]'
                      : 'bg-stone-800/60 border-stone-700/60 text-stone-300 hover:bg-stone-800 hover:border-stone-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif font-bold text-sm ${
                      isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-700 text-stone-300'
                    }`}>
                      {step.stepNumber}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm sm:text-base text-white">{step.part}</h3>
                      <p className="text-[11px] text-stone-400 line-clamp-1">{step.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStepIcon(step.iconName)}
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-amber-300' : 'text-stone-500'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="bg-stone-800/90 border border-stone-700 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-stone-700 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">Componente {currentStep.stepNumber} de 4</span>
                  <h3 className="font-serif text-2xl font-bold text-white">{currentStep.part}</h3>
                </div>
                <div className="p-3 bg-stone-900 rounded-2xl border border-stone-700">{getStepIcon(currentStep.iconName)}</div>
              </div>

              {currentStep.stepNumber === 1 && (
                <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 shadow-lg aspect-[16/7]">
                  <img
                    src={circularCoconut}
                    alt="Aprovechamiento de biomasa del coco: fibra y materiales sostenibles"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white text-sm font-semibold">
                    Aprovechamiento de biomasa
                  </span>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-serif text-lg text-amber-300 font-bold">{currentStep.title}</h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">{currentStep.description}</p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">Valorización & Productos Obtenidos:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStep.derivedProducts.map((p, i) => (
                    <div key={i} className="p-3 bg-stone-900/80 rounded-xl border border-stone-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs text-stone-200 font-medium">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/20 text-xs text-stone-300 flex items-center justify-between">
                <span>Indicador de Impacto Ambiental:</span>
                <span className="font-bold text-emerald-400">0% Desecho Orgánico Redundante</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Conoce nuestro proyecto</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">Del coco al valor</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl aspect-[4/3]">
              <img src={heroCoconut} alt="Coco del Pacífico colombiano" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-semibold">Origen del coco</span>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl aspect-[4/3]">
              <img src={circularCoconut} alt="Aprovechamiento integral del coco" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-semibold">Aprovechamiento integral</span>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl aspect-[4/3]">
              <img src={pacificProducers} alt="Productores del Pacífico colombiano" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-semibold">Comunidades productoras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
