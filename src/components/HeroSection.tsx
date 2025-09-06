'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaTicketAlt, FaClipboardList, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';

export function HeroSection() {
  const { currentTheme } = useTheme();
  
  return (
    <section className="pt-32 pb-20 px-6 text-center" 
             style={{ background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary}, ${currentTheme.colors.accent})` }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
               style={{ backgroundColor: currentTheme.colors.accent }}>
            <GiCakeSlice className="text-6xl" style={{ color: currentTheme.colors.textPrimary }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4"
              style={{ color: currentTheme.colors.textPrimary }}>
            Sweet Connections
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: currentTheme.colors.textSecondary }}>
            Networking con Dolce Benedizione
          </h2>
          
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed"
             style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
            Una experiencia única que combina networking, degustaciones artesanales y alianzas estratégicas. 
            Conecta, comparte y endulza tus relaciones empresariales en un ambiente cálido y profesional.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{
                      backgroundColor: currentTheme.colors.button,
                      color: currentTheme.colors.buttonText
                    }}>
              <FaTicketAlt className="inline mr-2" /> Regístrate Ahora
            </button>
            
            <button className="w-full sm:w-auto bg-transparent font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 hover:shadow-lg"
                    style={{
                      color: currentTheme.colors.textPrimary,
                      borderColor: currentTheme.colors.border
                    }}>
              <FaClipboardList className="inline mr-2" /> Ver Agenda
            </button>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg backdrop-blur-sm bg-theme-secondary/50">
              <div className="text-2xl mb-2">
                <FaCalendarAlt style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold text-theme-dark-brown">
                Fecha
              </h4>
              <p className="text-theme-brown">
                Por confirmar
              </p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm bg-theme-secondary/50">
              <div className="text-2xl mb-2">
                <FaMapMarkerAlt style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold text-theme-dark-brown">
                Lugar
              </h4>
              <p className="text-theme-brown">
                Por confirmar
              </p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm bg-theme-secondary/50">
              <div className="text-2xl mb-2">
                <FaClock style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold text-theme-dark-brown">
                Duración
              </h4>
              <p className="text-theme-brown">
                Día completo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}