import React, { useState } from 'react';
import { DERIVATIVE_PRODUCTS } from '../data/content';
import { ProductDerivative } from '../types';
import { Wheat, Droplet, Sparkles, GlassWater, Flame, Sprout, Filter, ChevronRight, Info, CheckCircle, Package } from 'lucide-react';

interface DerivativesSectionProps {
  onOpenValidation: (defaultTab?: 'interest' | 'more_info' | 'intent_to_buy') => void;
}

export const DerivativesSection: React.FC<DerivativesSectionProps> = ({ onOpenValidation }) => {
  const [filterCategory, setFilterCategory] = useState<string>('Todos');
  const [selectedDerivative, setSelectedDerivative] = useState<ProductDerivative | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat': return <Wheat className="w-5 h-5 text-amber-600" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-blue-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'GlassWater': return <GlassWater className="w-5 h-5 text-cyan-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-stone-700" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-600" />;
      default: return <Package className="w-5 h-5 text-emerald-700" />;
    }
  };

  const filteredProducts = DERIVATIVE_PRODUCTS.filter((product) => {
    if (filterCategory === 'Todos') return true;
    if (filterCategory === 'Alimenticios') return product.category === 'Alimenticio';
    if (filterCategory === 'Bio-materiales') return product.category === 'Bio-material';
    return true;
  });

  return (
    <section id="derivados" className="py-20 bg-[#FAF8F5] text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Package className="w-4 h-4 text-emerald-700" />
            <span>Portafolio de Economía Circular</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B4332] tracking-tight">
            Productos Derivados del Coco
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            Aprovechamiento integral de la biomasa: desde la pulpa hasta el capacho y la cáscara.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Feature Flatlay Banner */}
        <div className="mb-12 relative rounded-2xl overflow-hidden bg-stone-900 shadow-md aspect-21/9 max-h-72">
          <img
            src="/src/assets/images/circular_coconut_products_1786562425622.jpg"
            alt="Portafolio de Derivados del Coco CocoSweet Integral"
            className="w-full h-full object-cover filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/50 to-transparent flex items-center p-6 sm:p-10">
            <div className="max-w-xl text-white space-y-2">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                100% Cero Desperdicio
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Aprovechamiento Integral de la Biomasa
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                Cada componente del coco cosechado en el Pacífico se transforma en un producto con alto valor agregado alimenticio, cosmético o agroindustrial.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center gap-2 mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-stone-500 mr-2 font-medium">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrar:</span>
          </div>

          {['Todos', 'Alimenticios', 'Bio-materiales'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#1B4332] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderIcon(product.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                    Parte: {product.circularPart}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1B4332] group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mt-0.5">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  {product.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-stone-700">
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedDerivative(product)}
                  className="text-xs font-bold text-[#1B4332] hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver Ficha Completa</span>
                  <Info className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenValidation('more_info')}
                  className="text-xs text-stone-500 hover:text-stone-800 underline underline-offset-2"
                >
                  Validar Interés
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal for Derivative Product */}
      {selectedDerivative && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-stone-200 relative">
            
            <div className="flex items-start justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  {renderIcon(selectedDerivative.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 block">
                    {selectedDerivative.category} • {selectedDerivative.circularPart}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1B4332]">
                    {selectedDerivative.name}
                  </h3>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedDerivative(null)}
                className="text-stone-400 hover:text-stone-700 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-stone-700">
              <p className="text-sm font-medium text-stone-800">
                {selectedDerivative.subtitle}
              </p>
              
              <p className="leading-relaxed">
                {selectedDerivative.description}
              </p>

              <div className="p-3 bg-stone-50 rounded-xl space-y-2 border border-stone-200">
                <span className="font-bold text-[#1B4332] block">Aplicaciones Principales:</span>
                <p className="text-stone-600">{selectedDerivative.usage}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-[#1B4332] block">Destacados de Innovación:</span>
                <ul className="list-disc pl-4 space-y-1 text-stone-600">
                  {selectedDerivative.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setSelectedDerivative(null);
                  onOpenValidation('interest');
                }}
                className="w-full py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center"
              >
                Me interesa este derivado
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
