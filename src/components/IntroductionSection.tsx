'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaBullseye, FaStar, FaCheck } from 'react-icons/fa';

export function IntroductionSection() {
  const { currentTheme } = useTheme();
  return (
    <section className="py-20 px-6" style={{ backgroundColor: currentTheme.colors.primary }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Sobre el Evento
          </h3>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full" 
               style={{ backgroundColor: currentTheme.colors.border }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
              <strong style={{ color: currentTheme.colors.textSecondary }}>Sweet Connections</strong> es un evento de networking 
              organizado por Dolce Benedizione que busca posicionar la marca de dulces artesanales como referente 
              de experiencias emocionales y regalos corporativos.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
              Nuestro propósito es conectar con aliados estratégicos, atraer nuevos clientes y fortalecer nuestra 
              presencia en el mercado a través de una experiencia gastronómica única que combine networking profesional 
              con degustaciones exclusivas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-theme-brown rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-theme-dark-brown">
                  Más de 300 sabores artesanales únicos
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-theme-brown rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-theme-dark-brown">
                  Experiencias gastronómicas emocionales
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-theme-brown rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-theme-dark-brown">
                  Networking profesional de alta calidad
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-theme-secondary rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">
                  <FaBullseye style={{ color: currentTheme.colors.textPrimary }} />
                </div>
                <h4 className="text-xl font-semibold text-theme-dark-brown">
                  Propósito
                </h4>
              </div>
              <p className="text-theme-brown">
                Networking, alianzas estratégicas y posicionamiento de marca en el sector gastronómico empresarial.
              </p>
            </div>

            <div className="p-6 bg-theme-accent rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">
                  <FaStar style={{ color: currentTheme.colors.textPrimary }} />
                </div>
                <h4 className="text-xl font-semibold text-theme-dark-brown">
                  Experiencia Única
                </h4>
              </div>
              <p className="text-theme-brown">
                Combinamos degustaciones artesanales con dinámicas de networking para crear conexiones memorables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}