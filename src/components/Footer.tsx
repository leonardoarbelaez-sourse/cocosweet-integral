import React from 'react';
import { Leaf, GraduationCap, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      
      {/* Subtle Colombian Flag Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 mb-8 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-serif text-lg font-bold tracking-tight">
                COCOSWEET <span className="text-emerald-400">INTEGRAL</span>
              </span>
            </div>

            <p className="text-stone-400 leading-relaxed max-w-md font-sans">
              "El coco colombiano que se transforma en nuevas experiencias."
            </p>

            <p className="text-stone-500 text-[11px] leading-relaxed">
              Iniciativa universitaria de innovación agroindustrial centrada en la valorización integral del coco, el impulso de la economía circular y el desarrollo sostenible del Pacífico colombiano.
            </p>
          </div>

          {/* Quick Nav Column */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif font-bold text-white uppercase tracking-wider text-xs">
              Navegación del Prototipo
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#empresa" className="hover:text-white transition-colors">Presentación de la Empresa</a></li>
              <li><a href="#crema-gourmet" className="hover:text-white transition-colors">Crema de Coco Gourmet</a></li>
              <li><a href="#derivados" className="hover:text-white transition-colors">Portafolio de Derivados</a></li>
              <li><a href="#pacifico" className="hover:text-white transition-colors">Productores del Pacífico</a></li>
              <li><a href="#circular" className="hover:text-white transition-colors">Economía Circular</a></li>
              <li><a href="#validacion" className="hover:text-white transition-colors">Validación de Mercado</a></li>
            </ul>
          </div>

          {/* Academic Disclaimer Column */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Marco Académico & Validación</span>
            </div>
            <p className="text-stone-500 text-[11px] leading-relaxed">
              Este sitio web es un prototipo académico de investigación y diseño de experiencia de usuario. No pretende simular comercialización activa ni publicar registros comerciales falsos.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Volver al Inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© 2026 CocoSweet Integral • Emprendimiento Universitario de Colombia.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con visión sostenible para el Pacífico Colombiano</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};
