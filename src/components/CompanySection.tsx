'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaBullseye, FaStar, FaHeart, FaSeedling, FaHandshake } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa6';

export function CompanySection() {
  const { currentTheme } = useTheme();
  
  return (
    <section className="py-20 px-6" style={{ backgroundColor: currentTheme.colors.primary }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Sobre Dolce Benedizione
          </h3>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: currentTheme.colors.border }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.button }}>
                Nuestra Historia
              </h4>
              <p className="text-lg leading-relaxed mb-6" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
                Dolce Benedizione nació de la pasión por crear experiencias gastronómicas únicas que conecten 
                emociones con sabores. Especializados en dulces artesanales, hemos desarrollado más de 300 
                sabores únicos que transforman momentos especiales en recuerdos inolvidables.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
                Nuestro enfoque va más allá de la simple repostería; creamos experiencias emocionales que 
                fortalecen vínculos personales y profesionales.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: currentTheme.colors.secondary }}>
                <div className="text-3xl mb-3">
                  <FaBullseye style={{ color: currentTheme.colors.textPrimary }} />
                </div>
                <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  Misión
                </h5>
                <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  Crear experiencias gastronómicas que conecten emociones y fortalezcan relaciones.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: currentTheme.colors.accent }}>
                <div className="text-3xl mb-3">
                  <FaStar style={{ color: currentTheme.colors.textPrimary }} />
                </div>
                <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  Visión
                </h5>
                <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  Ser el referente en regalos corporativos y experiencias gastronómicas emocionales.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="p-8 rounded-2xl shadow-xl" style={{ backgroundColor: currentTheme.colors.accent }}>
              <h4 className="text-2xl font-bold mb-6 text-center" style={{ color: currentTheme.colors.textPrimary }}>
                Nuestros Valores
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: currentTheme.colors.button }}>
                    <FaGift className="text-xl" style={{ color: currentTheme.colors.buttonText }} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1" style={{ color: currentTheme.colors.textPrimary }}>
                      Calidad Artesanal
                    </h5>
                    <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                      Productos elaborados con ingredientes premium y técnicas tradicionales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: currentTheme.colors.button }}>
                    <FaHeart className="text-xl" style={{ color: currentTheme.colors.buttonText }} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1" style={{ color: currentTheme.colors.textPrimary }}>
                      Conexión Emocional
                    </h5>
                    <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                      Cada producto está diseñado para crear momentos memorables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: currentTheme.colors.button }}>
                    <FaSeedling className="text-xl" style={{ color: currentTheme.colors.buttonText }} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1" style={{ color: currentTheme.colors.textPrimary }}>
                      Innovación Constante
                    </h5>
                    <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                      Desarrollo continuo de nuevos sabores y experiencias únicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: currentTheme.colors.button }}>
                    <FaHandshake className="text-xl" style={{ color: currentTheme.colors.buttonText }} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1" style={{ color: currentTheme.colors.textPrimary }}>
                      Compromiso Social
                    </h5>
                    <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                      Responsabilidad con nuestros clientes, proveedores y comunidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="p-8 rounded-xl text-center shadow-lg" style={{ backgroundColor: currentTheme.colors.secondary }}>
            <h4 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
              Nuestros Clientes
            </h4>
            <p className="text-lg mb-6" style={{ color: currentTheme.colors.textSecondary }}>
              Empresas que confían en nosotros para sus eventos corporativos, regalos de empresa y celebraciones especiales
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full" 
                    style={{ backgroundColor: currentTheme.colors.button, color: currentTheme.colors.buttonText }}>
                Empresas de tecnología
              </span>
              <span className="px-4 py-2 rounded-full" 
                    style={{ backgroundColor: currentTheme.colors.button, color: currentTheme.colors.buttonText }}>
                Sector gastronómico
              </span>
              <span className="px-4 py-2 rounded-full" 
                    style={{ backgroundColor: currentTheme.colors.button, color: currentTheme.colors.buttonText }}>
                Eventos corporativos
              </span>
              <span className="px-4 py-2 rounded-full" 
                    style={{ backgroundColor: currentTheme.colors.button, color: currentTheme.colors.buttonText }}>
                Celebraciones especiales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}