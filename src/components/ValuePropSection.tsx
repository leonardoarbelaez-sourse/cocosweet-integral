import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/content';
import { Sparkles, RefreshCw, MapPin, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const ValuePropSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-teal-600" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-700" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-rose-500" />;
      default: return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#FAF8F5] to-white text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 bg-emerald-100 rounded-full">
            Síntesis Estratégica
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B4332] tracking-tight">
            Nuestra Propuesta de Valor
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            Combinamos excelencia sensorial, impacto socioambiental positivo e innovación con identidad colombiana.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPOSITIONS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1B4332]">
                  {pillar.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{pillar.benefit}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
