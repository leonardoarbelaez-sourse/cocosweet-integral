import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ChevronRight, Award, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenValidation: (defaultTab?: 'interest' | 'more_info' | 'intent_to_buy') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenValidation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Empresa', href: '#empresa' },
    { name: 'Crema Gourmet', href: '#crema-gourmet' },
    { name: 'Derivados', href: '#derivados' },
    { name: 'Diferenciales', href: '#diferenciales' },
    { name: 'Pacífico Colombiano', href: '#pacifico' },
    { name: 'Economía Circular', href: '#circular' },
    { name: 'Validación', href: '#validacion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E5DFD5] py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
              scrolled ? 'bg-[#1B4332] text-white' : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
            }`}>
              <Leaf className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight ${
                  scrolled ? 'text-[#1B4332]' : 'text-white'
                }`}>
                  COCOSWEET
                </span>
                <span className="text-xs font-sans font-semibold tracking-widest px-1.5 py-0.5 rounded bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                  INTEGRAL
                </span>
              </div>
              <p className={`text-[10px] tracking-wide uppercase font-medium ${
                scrolled ? 'text-stone-500' : 'text-stone-200/80'
              }`}>
                Prototipo Universitario
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-200 hover:text-emerald-500 ${
                  scrolled ? 'text-stone-700' : 'text-stone-100 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Academic Tag */}
          <div className="hidden sm:flex items-center gap-3">
            <span className={`hidden xl:inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
              scrolled ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-white/20 bg-white/10 text-stone-100'
            }`}>
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              <span>Proyecto Universitario</span>
            </span>

            <button
              onClick={() => onOpenValidation('interest')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1B4332] hover:bg-[#2D6A4F] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Me Interesa</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E5DFD5] shadow-xl px-4 pt-4 pb-6 mt-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-2 border-b border-stone-200 text-stone-600 text-xs font-medium">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>Emprendimiento de Innovación Universitaria</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-800 hover:text-emerald-700 py-1.5 transition-colors border-b border-stone-100"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenValidation('interest');
                }}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1B4332] hover:bg-[#2D6A4F] rounded-lg text-center shadow"
              >
                Validar Interés de Producto
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
