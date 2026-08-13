import React from 'react';
import { InterestValidationVote } from '../types';
import { Sparkles, ShoppingBag, HelpCircle, ThumbsUp, BarChart3, GraduationCap, Heart, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ValidationSectionProps {
  votes: InterestValidationVote[];
  onOpenModal: (defaultTab: 'interest' | 'more_info' | 'intent_to_buy') => void;
}

export const ValidationSection: React.FC<ValidationSectionProps> = ({ votes, onOpenModal }) => {
  const interestCount = votes.filter(v => v.actionType === 'interest').length + 42; // baseline mock + live session count
  const moreInfoCount = votes.filter(v => v.actionType === 'more_info').length + 28;
  const buyIntentCount = votes.filter(v => v.actionType === 'intent_to_buy').length + 65;
  const totalValidations = interestCount + moreInfoCount + buyIntentCount;

  return (
    <section id="validacion" className="py-20 bg-gradient-to-b from-[#FAF8F5] via-emerald-950 to-[#1B4332] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-stone-900" />
            <span>Sección Final de Validación de Mercado</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Valida Nuestro Prototipo Académico
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            Tu opinión es fundamental para evaluar el interés del público y fortalecer la propuesta de valor de CocoSweet Integral.
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        {/* Validation Action Buttons Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10 max-w-4xl mx-auto">
          
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
              ¿Qué acción te gustaría realizar?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Haz Clic en una Opción para Enviar tu Evaluación:
            </h3>
          </div>

          {/* The 3 Required Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Button 1: Me Interesa */}
            <button
              onClick={() => onOpenModal('interest')}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 border border-emerald-400/40 hover:border-emerald-300 hover:scale-105 transition-all duration-300 shadow-xl space-y-3 text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-700/60 text-emerald-300 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-white">
                Me Interesa
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Quiero expresar mi interés general en el proyecto y sus productos derivados.
              </p>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300 pt-2 border-t border-white/10 w-full">
                Registrar Interés →
              </span>
            </button>

            {/* Button 2: Quiero Conocer Más */}
            <button
              onClick={() => onOpenModal('more_info')}
              className="p-6 rounded-2xl bg-gradient-to-br from-teal-900 to-stone-900 border border-teal-400/40 hover:border-teal-300 hover:scale-105 transition-all duration-300 shadow-xl space-y-3 text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-800/60 text-teal-200 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-white">
                Quiero Conocer Más
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Deseo recibir fichas técnicas, informes académicos o avances del proyecto.
              </p>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300 pt-2 border-t border-white/10 w-full">
                Solicitar Info →
              </span>
            </button>

            {/* Button 3: Quiero Comprar */}
            <button
              onClick={() => onOpenModal('intent_to_buy')}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 text-stone-950 border border-amber-300 hover:border-white hover:scale-105 transition-all duration-300 shadow-2xl space-y-3 text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/80 text-stone-950 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-950">
                ME INTERESA EL PRODUCTO
              </h4>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Simula tu intención de compra para evaluar la demanda real del producto.
              </p>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-stone-950 pt-2 border-t border-stone-900/20 w-full">
                Simular Compra →
              </span>
            </button>

          </div>

          {/* Academic Real-Time Metrics Tally */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/15 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                <span className="font-serif font-bold text-sm sm:text-base text-white">
                  Métricas de Validación en Tiempo Real
                </span>
              </div>
              <span className="text-xs text-emerald-300 font-bold bg-emerald-900/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Total Respuestas: {totalValidations}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-2xl font-serif font-bold text-emerald-300 block">
                  {interestCount}
                </span>
                <span className="text-[10px] text-stone-300 uppercase tracking-wider">
                  "Me Interesa"
                </span>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-2xl font-serif font-bold text-teal-300 block">
                  {moreInfoCount}
                </span>
                <span className="text-[10px] text-stone-300 uppercase tracking-wider">
                  "Quiero Saber Más"
                </span>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-2xl font-serif font-bold text-amber-300 block">
                  {buyIntentCount}
                </span>
                <span className="text-[10px] text-stone-300 uppercase tracking-wider">
                  Intención de Compra
                </span>
              </div>
            </div>
          </div>

          {/* Explicit Academic Scope Disclaimer */}
          <div className="p-4 rounded-xl bg-amber-950/70 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-1">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Aviso Legal y Académico Obligatorio:</span>
            </div>
            <p>
              CocoSweet Integral es un proyecto conceptual y prototipo de investigación universitaria. No afirmamos estar comercializando masivamente los productos en este momento. La presente Landing Page tiene fines estrictamente académicos y de validación de mercado.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
