import React from 'react';
import { HERO_DATA } from '../data/content';
import { GraduationCap, Heart, Sparkles, MapPin, Recycle, Compass, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="empresa" className="py-20 bg-[#FAF8F5] text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>Iniciativa de Emprendimiento Universitario</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B4332] tracking-tight">
            Presentación de CocoSweet Integral
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-sans">
            Un proyecto académico transformador que une la ciencia de alimentos, el desarrollo territorial y la economía circular en Colombia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#E5DFD5] space-y-5">
              <h3 className="text-2xl font-serif font-bold text-[#1B4332] flex items-center gap-3">
                <Compass className="w-6 h-6 text-amber-600 shrink-0" />
                <span>Nuestra Historia & Propósito</span>
              </h3>
              
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base font-sans">
                <strong className="text-[#1B4332]">CocoSweet Integral</strong> nace en las aulas universitarias como una respuesta innovadora para dignificar y agregar alto valor a la cadena agroindustrial del coco en Colombia. 
              </p>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base font-sans">
                Históricamente, la comercialización del coco en el Pacífico colombiano se ha centrado en la venta del fruto entero o en derivados de bajo procesamiento, desaprovechando más del 60% de la biomasa del fruto (capacho, agua y cáscara dura).
              </p>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base font-sans">
                Nuestra propuesta busca cambiar esta realidad mediante la <strong className="text-emerald-800">transformación integral y la economía circular</strong>: convertir la pulpa en una exquisita Crema de Coco Gourmet y harina nutricional, mientras aprovechamos los subproductos para bio-materiales y carbón activado, asegurando precios justos a los pequeños agricultores de la región.
              </p>

              {/* Academic Disclaimer Box */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-1">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Aviso de Prototipo de Investigación:</span>
                </div>
                <p>
                  {HERO_DATA.academicDisclaimer}
                </p>
              </div>
            </div>
          </div>

          {/* Pillars & Values Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white p-6 rounded-2xl shadow-md space-y-3">
              <div className="flex items-center gap-3 text-emerald-300">
                <MapPin className="w-5 h-5" />
                <h4 className="font-serif font-bold text-lg text-white">Identidad del Pacífico Colombiano</h4>
              </div>
              <p className="text-xs text-stone-200 leading-relaxed">
                Nuestra materia prima crece en tierras fértiles alimentadas por los ríos y brisas del Pacífico (Nariño, Cauca y Valle del Cauca), otorgándole un perfil sensorial único.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD5] shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-amber-700">
                <Recycle className="w-5 h-5" />
                <h4 className="font-serif font-bold text-lg text-[#1B4332]">Modelo Cero Desperdicio</h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Inspirados en la economía circular, diseñamos procesos que transforman cada fracción del fruto en productos de consumo o bio-insumos de alto rendimiento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD5] shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-teal-700">
                <Heart className="w-5 h-5" />
                <h4 className="font-serif font-bold text-lg text-[#1B4332]">Impacto Social & Equidad</h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Priorizamos la compra directa a asociaciones de pequeños agricultores y mujeres cabeza de hogar, promoviendo el bienestar de las comunidades rurales.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
