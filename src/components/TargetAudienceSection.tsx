import React from 'react';
import { TARGET_PERSONAS } from '../data/content';
import { Users, ChefHat, HeartPulse, Heart, Check, Quote, Star } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const getAvatarIcon = (seed: string) => {
    switch (seed) {
      case 'chef_persona': return <ChefHat className="w-6 h-6 text-amber-700" />;
      case 'health_persona': return <HeartPulse className="w-6 h-6 text-emerald-700" />;
      default: return <Heart className="w-6 h-6 text-rose-600" />;
    }
  };

  return (
    <section className="py-20 bg-[#FAF8F5] text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4 text-emerald-700" />
            <span>Público Objetivo & Perfiles de Usuario</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B4332] tracking-tight">
            ¿A Quién va Dirigido CocoSweet?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            Diseñado para atender las necesidades exigentes del sector gastronómico, nutricional y consumidor socialmente responsable.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Personas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TARGET_PERSONAS.map((persona) => (
            <div
              key={persona.id}
              className="bg-white rounded-2xl p-7 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getAvatarIcon(persona.avatarSeed)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {persona.matchScore}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-xl text-[#1B4332]">
                    {persona.role}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 mt-1">
                    {persona.tagline}
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {persona.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-[#1B4332] uppercase tracking-wider block">
                    Necesidades Clave:
                  </span>
                  {persona.keyNeeds.map((need, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Quote Block */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 italic text-xs text-stone-700">
                <Quote className="w-4 h-4 text-amber-600 opacity-60" />
                <p>"{persona.quote}"</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
