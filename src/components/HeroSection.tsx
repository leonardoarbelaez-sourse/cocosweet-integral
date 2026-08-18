import React from 'react';
import { HERO_DATA } from '../data/content';
import { Sparkles, GraduationCap, ChevronDown, CheckCircle2, HeartHandshake, RefreshCw, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenValidation: (defaultTab?: 'interest' | 'more_info' | 'intent_to_buy') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenValidation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FAF8F5]">
      {/* Background Image Container with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_coconut_pacific_1786562394954.jpg"
          alt="CocoSweet Integral - Crema de Coco Gourmet del Pacífico Colombiano"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if asset loading
            e.currentTarget.src = "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        {/* Soft tropical dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/65 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Academic Prototype Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-200 border border-emerald-400/30 text-xs font-semibold tracking-wide shadow-lg">
              <GraduationCap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>{HERO_DATA.academicBadge}</span>
            </div>

            {/* Brand Title */}
            <div className="space-y-2">
              <span className="block text-emerald-400 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                Pacífico Colombiano • Economía Circular
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.08]">
                COCOSWEET <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-emerald-200 to-emerald-400">
                  INTEGRAL
                </span>
              </h1>
            </div>

            {/* Main Slogan */}
            <blockquote className="text-xl sm:text-2xl font-serif italic text-amber-100/95 border-l-4 border-amber-400 pl-4 py-1 max-w-2xl">
              "{HERO_DATA.tagline}"
            </blockquote>

            {/* Sub-description */}
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed font-sans font-light">
              {HERO_DATA.subtagline}
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-2xl">
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-stone-200">Crema de Coco Gourmet (Prototipo)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <HeartHandshake className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-xs font-medium text-stone-200">Comercio Justo en el Pacífico</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <RefreshCw className="w-5 h-5 text-teal-300 shrink-0" />
                <span className="text-xs font-medium text-stone-200">Aprovechamiento Integral Cero-Residuo</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenValidation('intent_to_buy')}
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold text-sm rounded-xl shadow-xl hover:shadow-emerald-900/50 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
               <span>ME INTERESA EL PRODUCTO</span>
          
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenValidation('more_info')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm rounded-xl border border-white/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Quiero Conocer Más</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </button>

              <a
                href="#crema-gourmet"
                className="text-xs text-stone-300 hover:text-white underline underline-offset-4 font-medium transition-colors ml-2"
              >
                Explorar Producto Principal ↓
              </a>
            </div>

            {/* Academic Prototype Disclaimer Note */}
            <div className="pt-2 text-xs text-amber-200/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Prototipo conceptual de validación de mercado para proyecto de emprendimiento universitario.</span>
            </div>

          </div>

          {/* Side Card Highlight Component */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-stone-900/80 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-2xl space-y-5 text-stone-200">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                    PRODUCTO ESTRELLA
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">Crema de Coco Gourmet</h3>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  PROTOTIPO ACADÉMICO
                </span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-stone-300">
                <p className="italic">
                  "Propuesta de Crema de Coco Gourmet elaborada a partir de coco colombiano, actualmente en etapa de prototipado y validación."
                </p>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 space-y-1.5">
                  <div className="flex justify-between font-medium text-white">
                    <span>CALIDAD:</span>
                    <span className="text-emerald-300 font-semibold">Propuesta gourmet</span>
                  </div>
                  <div className="flex justify-between font-medium text-white">
                    <span>ORIGEN:</span>
                    <span className="text-amber-200">Pacífico colombiano</span>
                  </div>
                  <div className="flex justify-between font-medium text-white">
                    <span>CARACTERÍSTICAS:</span>
                    <span className="text-emerald-400 font-bold">Versátil y diferenciada</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenValidation('interest')}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors text-center cursor-pointer shadow-md"
              >
                ME INTERESA EL PRODUCTO
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/70 animate-bounce">
        <a href="#empresa" aria-label="Ir a presentación de la empresa">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
