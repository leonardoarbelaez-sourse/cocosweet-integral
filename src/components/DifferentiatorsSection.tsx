import React from 'react';
import { DIFFERENTIATORS } from '../data/content';
import { MapPin, Award, RefreshCw, Users, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-700" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-teal-600" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-800" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-amber-700" />;
      default: return <CheckCircle className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="diferenciales" className="py-20 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 bg-emerald-100 rounded-full">
            Propuesta de Valor & Ventaja Competitiva
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B4332] tracking-tight">
            ¿Qué Nos Hace Diferentes?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            Seis pilares estratégicos que diferencian a CocoSweet Integral en la agroindustria nacional.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl text-[#1B4332] group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {item.description}
              </p>

              <div className="pt-2 flex items-center gap-1 text-[11px] font-semibold text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Valor Universitario Diferencial</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
