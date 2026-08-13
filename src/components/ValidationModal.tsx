import React, { useState } from 'react';
import { InterestValidationVote } from '../types';
import { CheckCircle2, Sparkles, X, Heart, Send, GraduationCap, ShoppingBag, HelpCircle, ThumbsUp } from 'lucide-react';

interface ValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAction: 'interest' | 'more_info' | 'intent_to_buy';
  onSubmitVote: (vote: InterestValidationVote) => void;
}

export const ValidationModal: React.FC<ValidationModalProps> = ({
  isOpen,
  onClose,
  defaultAction,
  onSubmitVote
}) => {
  const [actionType, setActionType] = useState<'interest' | 'more_info' | 'intent_to_buy'>(defaultAction);
  const [presentationPref, setPresentationPref] = useState<string>('Tarro Gourmet 250g');
  const [consumptionFreq, setConsumptionFreq] = useState<string>('Semanal');
  const [valuedAspect, setValuedAspect] = useState<string>('Fórmula Gourmet sin Aditivos');
  const [userRole, setUserRole] = useState<string>('Consumidor Consciente / Fit');
  const [comments, setComments] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVote: InterestValidationVote = {
      id: `vote_${Date.now()}`,
      actionType,
      presentationPreference: presentationPref,
      consumptionFrequency: consumptionFreq,
      valuedAspect,
      userRole,
      comments,
      timestamp: new Date().toISOString()
    };
    onSubmitVote(newVote);
    setSubmitted(true);
  };

  const getActionTitle = () => {
    switch (actionType) {
      case 'intent_to_buy': return 'Validar Intención de Compra';
      case 'more_info': return 'Solicitar Más Información';
      default: return 'Registrar Interés de Producto';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] max-w-xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-[#E5DFD5] relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 text-xl font-bold p-1 rounded-full hover:bg-stone-200/50 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">
                ¡Validación Registrada Exitosamente!
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B4332]">
                ¡Muchas Gracias por Apoyar Nuestro Proyecto!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Tus respuestas alimentan las métricas de investigación de nuestro emprendimiento universitario CocoSweet Integral.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 text-left space-y-1">
              <span className="font-bold block text-amber-950 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                Nota de investigación académica:
              </span>
              <p>
                Como este es un prototipo universitario en fase de desarrollo, nos pondremos en contacto tan pronto iniciemos las pruebas piloto de producción en planta.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Volver a la Landing Page
            </button>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="space-y-2 pr-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                <span>Encuesta de Validación Académica</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1B4332]">
                {getActionTitle()}
              </h3>
              <p className="text-xs text-stone-600">
                Tu opinión nos ayuda a validar la viabilidad comercial y la aceptación de la Crema de Coco Gourmet en el mercado colombiano.
              </p>
            </div>

            {/* Selector for Action Type */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setActionType('interest')}
                className={`p-2.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  actionType === 'interest'
                    ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                <span>Me Interesa</span>
              </button>

              <button
                type="button"
                onClick={() => setActionType('more_info')}
                className={`p-2.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  actionType === 'more_info'
                    ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Conocer Más</span>
              </button>

              <button
                type="button"
                onClick={() => setActionType('intent_to_buy')}
                className={`p-2.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  actionType === 'intent_to_buy'
                    ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Quiero Comprar</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Presentation Preference */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#1B4332] block">
                  ¿Qué presentación te gustaría encontrar en el mercado?
                </label>
                <select
                  value={presentationPref}
                  onChange={(e) => setPresentationPref(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  <option value="Tarro Gourmet 250g">Tarro Gourmet 250g (Uso Doméstico / Repostería)</option>
                  <option value="Tarro Gourmet 500g">Tarro Gourmet 500g (Familiar / Fit)</option>
                  <option value="Presentación Institucional 1kg">Presentación Institucional 1kg (Chefs & Restaurantes)</option>
                  <option value="Pack de Degustación Derivados">Pack de Degustación de Derivados del Coco</option>
                </select>
              </div>

              {/* Consumption Frequency */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#1B4332] block">
                  ¿Con qué frecuencia consumirías Crema de Coco Gourmet?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Semanal', 'Quincenal', 'Mensual', 'Ocasional'].map((freq) => (
                    <label
                      key={freq}
                      className={`p-2 rounded-xl border text-center font-medium cursor-pointer transition-colors ${
                        consumptionFreq === freq
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="frequency"
                        value={freq}
                        checked={consumptionFreq === freq}
                        onChange={() => setConsumptionFreq(freq)}
                        className="sr-only"
                      />
                      <span>{freq}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Valued Aspect */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#1B4332] block">
                  ¿Qué atributo es el más importante para ti?
                </label>
                <select
                  value={valuedAspect}
                  onChange={(e) => setValuedAspect(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  <option value="Fórmula Gourmet sin Aditivos">Fórmula Gourmet sin Aditivos Químicos</option>
                  <option value="100% Origen del Pacífico Colombiano">100% Origen del Pacífico Colombiano</option>
                  <option value="Economía Circular Cero Desperdicio">Economía Circular & Modelo Cero Desperdicio</option>
                  <option value="Apoyo Directo a Productores">Apoyo Directo a Productores del Pacífico</option>
                </select>
              </div>

              {/* User Profile */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#1B4332] block">
                  Perfil del usuario / Encuestado:
                </label>
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  <option value="Consumidor Consciente / Fit">Consumidor Consciente / Fit</option>
                  <option value="Chef / Repostero Profesional">Chef / Repostero Profesional</option>
                  <option value="Amante de Productos Colombianos">Amante de Productos Colombianos con Impacto Social</option>
                  <option value="Estudiante / Docente / Investigador">Estudiante / Docente / Investigador Agroindustrial</option>
                </select>
              </div>

              {/* Comments */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#1B4332] block">
                  Sugerencia o Comentario para el equipo universitario (Opcional):
                </label>
                <textarea
                  rows={2}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Escribe aquí algún comentario o sugerencia sobre empaque, sabor o receta..."
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none resize-none"
                />
              </div>

              {/* Disclaimer */}
              <p className="text-[10px] text-stone-500 italic">
                * Este registro es únicamente para la validación cuantitativa y cualitativa del prototipo académico de CocoSweet Integral.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enviar Respuesta de Validación</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </>
        )}

      </div>
    </div>
  );
};
