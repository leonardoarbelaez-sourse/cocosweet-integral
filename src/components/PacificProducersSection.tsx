import React, { useState } from 'react';
import { PRODUCER_ZONES } from '../data/content';
import { MapPin, Users, HeartHandshake, ShieldCheck, ArrowRight, Anchor } from 'lucide-react';

export const PacificProducersSection: React.FC = () => {
  const [activeZoneId, setActiveZoneId] = useState<string>('tumaco');
  const activeZone = PRODUCER_ZONES.find((z) => z.id === activeZoneId) || PRODUCER_ZONES[0];

  return (
    <section id="pacifico" className="py-20 bg-[#1B4332] text-white relative overflow-hidden">
      
      {/* Decorative background leaf accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/80 text-emerald-200 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>Impacto Social & Territorial</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Productores del Pacífico Colombiano
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            Comercio justo y alianza directa con asociaciones afrodescendientes y pequeños agricultores de la costa pacífica.
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        {/* Grid: Image & Regional Interactive Map/Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Community Portrait Image */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
              <img
                src="/src/assets/images/pacific_producers_1786562410732.jpg"
                alt="Agricultores de coco del Pacífico Colombiano"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-400/30">
                  Comunidad Recolectora de Coco
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Raíces, Sabiduría & Dignidad Campesina
                </h3>
                <p className="text-xs text-stone-200 leading-relaxed font-light">
                  En el Pacífico colombiano, el coco no es solo un fruto: es cultura, tradición de ríos y sustento diario para miles de familias afrocolombianas e indígenas.
                </p>
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-950/60 backdrop-blur-md p-4 rounded-xl border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Cultura & Tradición</span>
                </div>
                <p className="text-[11px] text-stone-300 leading-snug">
                  Cosecha respetuosa con el ritmo natural de la selva húmeda tropical.
                </p>
              </div>

              <div className="bg-emerald-950/60 backdrop-blur-md p-4 rounded-xl border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Pago Justo</span>
                </div>
                <p className="text-[11px] text-stone-300 leading-snug">
                  Garantía de precio remunerativo libre de intermediación especulativa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Zone Interactive Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Selecciona una región del Pacífico:
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                {PRODUCER_ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZoneId(zone.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      activeZoneId === zone.id
                        ? 'bg-amber-400 text-stone-950 font-bold border-amber-300 shadow-lg scale-[1.02]'
                        : 'bg-emerald-900/40 text-stone-200 border-emerald-700/50 hover:bg-emerald-800/50'
                    }`}
                  >
                    <div>
                      <span className="text-xs block font-serif font-bold">{zone.region}</span>
                      <span className="text-[10px] opacity-80 block">{zone.department}</span>
                    </div>
                    <MapPin className="w-4 h-4 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Active Region Detail Card */}
            <div className="bg-emerald-950/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-emerald-500/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                    Territorio Seleccionado
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    {activeZone.region} ({activeZone.department})
                  </h4>
                </div>
                <Anchor className="w-6 h-6 text-amber-300" />
              </div>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                {activeZone.description}
              </p>

              <div className="p-3 bg-black/40 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  Enfoque de Impacto Social:
                </span>
                <p className="text-xs text-stone-300 font-medium">
                  {activeZone.impactFocus}
                </p>
              </div>

              <div className="p-3 bg-emerald-900/50 rounded-xl border border-emerald-700/50 space-y-1">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                  Redes Comunitarias:
                </span>
                <p className="text-xs text-stone-200 font-medium">
                  {activeZone.communityPartners}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
