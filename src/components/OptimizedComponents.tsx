'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaBullseye, FaStar, FaCheck, FaTicketAlt, FaPhoneAlt, FaClock, FaGift, FaTrophy, FaEnvelope, FaMobileAlt, FaComments, FaMapMarkerAlt } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';

export function OptimizedIntroductionSection() {
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
            <p className="text-lg mb-6 leading-relaxed" style={{ color: currentTheme.colors.textPrimary, opacity: 0.85 }}>
              <strong style={{ color: currentTheme.colors.textSecondary }}>Sweet Connections</strong> es un evento de networking 
              organizado por Dolce Benedizione que busca posicionar la marca de dulces artesanales como referente 
              de experiencias emocionales y regalos corporativos.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed" style={{ color: currentTheme.colors.textPrimary, opacity: 0.85 }}>
              Nuestro propósito es conectar con aliados estratégicos, atraer nuevos clientes y fortalecer nuestra 
              presencia en el mercado a través de una experiencia gastronómica única que combine networking profesional 
              con degustaciones exclusivas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: currentTheme.colors.button }}>
                  <FaCheck className="text-white text-sm" />
                </div>
                <span style={{ color: currentTheme.colors.textPrimary }}>
                  Más de 300 sabores artesanales únicos
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: currentTheme.colors.button }}>
                  <FaCheck className="text-white text-sm" />
                </div>
                <span style={{ color: currentTheme.colors.textPrimary }}>
                  Experiencias gastronómicas emocionales
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: currentTheme.colors.button }}>
                  <FaCheck className="text-white text-sm" />
                </div>
                <span style={{ color: currentTheme.colors.textPrimary }}>
                  Networking profesional de alta calidad
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: currentTheme.colors.secondary }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">
                  <FaBullseye style={{ color: currentTheme.colors.textPrimary }} />
                </div>
                <h4 className="text-xl font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                  Propósito
                </h4>
              </div>
              <p style={{ color: currentTheme.colors.textSecondary }}>
                Networking, alianzas estratégicas y posicionamiento de marca en el sector gastronómico empresarial.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: currentTheme.colors.accent }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">
                  <FaStar style={{ color: currentTheme.colors.textPrimary }} />
                </div>
                <h4 className="text-xl font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                  Experiencia Única
                </h4>
              </div>
              <p style={{ color: currentTheme.colors.textSecondary }}>
                Combinamos degustaciones artesanales con dinámicas de networking para crear conexiones memorables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OptimizedFooter() {
  const { currentTheme } = useTheme();

  return (
    <>
      {/* Final CTA Section */}
      <section className="py-20 px-6 text-center" 
               style={{ background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary}, ${currentTheme.colors.accent})` }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-6xl mb-6">
              <GiCakeSlice style={{ color: currentTheme.colors.textPrimary }} />
            </div>
            <h3 className="text-4xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
              ¿Listo para Sweet Connections?
            </h3>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
              No pierdas la oportunidad de ser parte de esta experiencia única que transformará 
              tu manera de hacer networking. Conecta, aprende, degusta y crea alianzas duraderas.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-12">
            <button className="w-full sm:w-auto font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{ backgroundColor: currentTheme.colors.button, color: currentTheme.colors.buttonText }}>
              <FaTicketAlt className="inline mr-2" /> Registrarme Ahora
            </button>
            
            <button className="w-full sm:w-auto bg-transparent font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 border-2 hover:shadow-lg"
                    style={{ color: currentTheme.colors.textPrimary, borderColor: currentTheme.colors.border }}>
              <FaPhoneAlt className="inline mr-2" /> Solicitar Información
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <div className="text-2xl mb-2">
                <FaClock style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>Registros Limitados</h4>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>Solo 100 cupos disponibles</p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <div className="text-2xl mb-2">
                <FaGift style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>Early Bird</h4>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>10% descuento primeros 50</p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <div className="text-2xl mb-2">
                <FaTrophy style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>Garantía Total</h4>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>100% satisfacción garantizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: currentTheme.colors.dark }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: currentTheme.colors.accent }}>
                  <GiCakeSlice className="text-2xl" style={{ color: currentTheme.colors.textPrimary }} />
                </div>
                <div>
                  <h4 className="text-xl font-bold" style={{ color: currentTheme.colors.textLight }}>
                    Dolce Benedizione
                  </h4>
                  <p className="text-sm" style={{ color: currentTheme.colors.textLight, opacity: 0.7 }}>
                    Sweet Connections
                  </p>
                </div>
              </div>
              <p className="mb-4 leading-relaxed" style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
                Endulzando momentos, creando conexiones. Más de 300 sabores artesanales para hacer 
                de cada experiencia un recuerdo inolvidable.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: currentTheme.colors.textLight }}>Contacto</h4>
              <div className="space-y-3 text-sm">
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
                  <FaEnvelope className="inline mr-2" /> info@dolcebendizione.com
                </p>
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
                  <FaMobileAlt className="inline mr-2" /> +57 300 123 4567
                </p>
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
                  <FaComments className="inline mr-2" /> WhatsApp Business
                </p>
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
                  <FaMapMarkerAlt className="inline mr-2" /> Bogotá, Colombia
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: currentTheme.colors.textLight }}>Información del Proyecto</h4>
              <div className="space-y-2 text-sm">
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}><strong>Integrantes:</strong></p>
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.6 }}>
                  [Nombre Estudiante 1]<br/>
                  [Nombre Estudiante 2]<br/>
                  [Nombre Estudiante 3]
                </p>
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}><strong>Docente:</strong> [Nombre del docente]</p>
                <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}><strong>Ficha:</strong> [Número de ficha]</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm" style={{ borderColor: currentTheme.colors.border }}>
            <p style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
              &copy; 2024 Dolce Benedizione - Sweet Connections. Todos los derechos reservados.
            </p>
            <p className="mt-2" style={{ color: currentTheme.colors.textLight, opacity: 0.6 }}>
              Proyecto de Aula - Networking Empresarial | Semestre IX
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}