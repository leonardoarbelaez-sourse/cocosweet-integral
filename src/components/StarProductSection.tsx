import React from 'react';
import { STAR_PRODUCT } from '../data/content';
import { Sparkles, ChevronRight, GraduationCap } from 'lucide-react';

interface StarProductSectionProps {
  onOpenValidation: (defaultTab?: 'interest' | 'more_info' | 'intent_to_buy') => void;
}

export const StarProductSection: React.FC<StarProductSectionProps> = ({ onOpenValidation }) => {
  return (
    <section id="crema-gourmet" className="py-20 bg-gradient-to-b from-[#F7F4EF] via-white to-[#F7F4EF] text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>PRODUCTO ESTRELLA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B4332] tracking-tight">
            Crema de Coco Gourmet
          </h2>
          <div className="w-24 h-1 bg-[#1B4332] mx-auto rounded-full" />
        </div>

        {/* Product Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#E5DFD5]">
          
          {/* Left Column: Product Card Image & Academic Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl bg-stone-900 aspect-4/3 shadow-md">
              <img
                src="/src/assets/images/hero_coconut_pacific_1786562394954.jpg"
                alt="Crema de Coco Gourmet CocoSweet Integral"
                className="w-full h-full object-cover transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-emerald-900/90 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-400/30 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{STAR_PRODUCT.academicBadge}</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                  Pacífico colombiano
                </p>
                <h3 className="font-serif text-xl font-bold">Crema de Coco Gourmet</h3>
              </div>
            </div>

            {/* Academic Validation Disclaimer Note */}
            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs flex items-center gap-3 shadow-xs">
              <GraduationCap className="w-5 h-5 text-amber-700 shrink-0" />
              <p className="font-semibold leading-snug">
                PROTOTIPO ACADÉMICO DE VALIDACIÓN
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Product Card Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                {STAR_PRODUCT.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                {STAR_PRODUCT.name}
              </h3>
            </div>

            {/* Description */}
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-800 text-base leading-relaxed font-sans italic shadow-xs">
              "{STAR_PRODUCT.description}"
            </div>

            {/* Key Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {STAR_PRODUCT.attributes.map((attr, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-100/80 space-y-1">
                  <span className="text-[11px] font-bold text-emerald-900 block uppercase tracking-wider">
                    {attr.label}
                  </span>
                  <span className="text-sm font-semibold text-stone-800 block">
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenValidation('intent_to_buy')}
                className="px-6 py-3.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>{STAR_PRODUCT.buttonText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
