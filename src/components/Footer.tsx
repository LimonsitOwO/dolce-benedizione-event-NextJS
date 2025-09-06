'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { SweetConnectionsLogo } from './SweetConnectionsLogo';
import { MdEmail, MdPhone, MdLocationOn, MdWhatsapp } from 'react-icons/md';
import { GiCakeSlice } from 'react-icons/gi';
import { FaTicketAlt, FaPhoneAlt, FaClock, FaGift, FaTrophy, FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

export function Footer() {
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
                    style={{ 
                      backgroundColor: currentTheme.colors.button, 
                      color: currentTheme.colors.buttonText 
                    }}>
              <FaTicketAlt className="inline mr-2" /> Registrarme Ahora
            </button>
            
            <button className="w-full sm:w-auto bg-transparent font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:shadow-lg border-2"
                    style={{ 
                      color: currentTheme.colors.button,
                      borderColor: currentTheme.colors.button
                    }}>
              <FaPhoneAlt className="inline mr-2" /> Solicitar Información
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg backdrop-blur-sm shadow-lg"
                 style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <div className="text-2xl mb-2">
                <FaClock style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                Registros Limitados
              </h4>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                Solo 100 cupos disponibles
              </p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm shadow-lg"
                 style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <div className="text-2xl mb-2">
                <FaGift style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                Early Bird
              </h4>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                10% descuento primeros 50
              </p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm shadow-lg"
                 style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <div className="text-2xl mb-2">
                <FaTrophy style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                Garantía Total
              </h4>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                100% satisfacción garantizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6" style={{ backgroundColor: currentTheme.colors.dark }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <SweetConnectionsLogo 
                  size={56}
                  primaryColor={currentTheme.colors.textLight}
                  secondaryColor={currentTheme.colors.textLight}
                />
                <div>
                  <h4 className="text-2xl font-bold" style={{ color: currentTheme.colors.textLight }}>
                    Dolce Benedizione
                  </h4>
                  <p className="text-sm font-medium" style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
                    Sweet Connections
                  </p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
                Endulzando momentos, creando conexiones. Más de 300 sabores artesanales para hacer 
                de cada experiencia un recuerdo inolvidable.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl transition-all hover:scale-110 transform opacity-80 hover:opacity-100"
                   style={{ color: currentTheme.colors.textLight }}>
                  <FaFacebook />
                </a>
                <a href="#" className="text-2xl transition-all hover:scale-110 transform opacity-80 hover:opacity-100"
                   style={{ color: currentTheme.colors.textLight }}>
                  <FaInstagram />
                </a>
                <a href="#" className="text-2xl transition-all hover:scale-110 transform opacity-80 hover:opacity-100"
                   style={{ color: currentTheme.colors.textLight }}>
                  <FaTwitter />
                </a>
                <a href="#" className="text-2xl transition-all hover:scale-110 transform opacity-80 hover:opacity-100"
                   style={{ color: currentTheme.colors.textLight }}>
                  <FaTiktok />
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="font-bold mb-6 text-lg" style={{ color: currentTheme.colors.textLight }}>
                Contacto
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <MdEmail className="text-lg" style={{ color: currentTheme.colors.textLight, opacity: 0.8 }} />
                  <p style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
                    info@dolcebendizione.com
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdPhone className="text-lg" style={{ color: currentTheme.colors.textLight, opacity: 0.8 }} />
                  <p style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
                    +57 300 123 4567
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdWhatsapp className="text-lg" style={{ color: currentTheme.colors.textLight, opacity: 0.8 }} />
                  <p style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
                    WhatsApp Business
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdLocationOn className="text-lg" style={{ color: currentTheme.colors.textLight, opacity: 0.8 }} />
                  <p style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
                    Bogotá, Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h4 className="font-bold mb-6 text-lg" style={{ color: currentTheme.colors.textLight }}>
                Información Académica
              </h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold mb-2" style={{ color: currentTheme.colors.textLight }}>
                    Integrantes:
                  </p>
                  <div className="space-y-1" style={{ color: currentTheme.colors.textLight, opacity: 0.8 }}>
                    <p>Luis Carlos Ballén Chávez</p>
                    <p className="text-xs opacity-75">luis.ballenc@cun.edu.co</p>
                    <p>Emerson Andrés Barreto Duarte</p>
                    <p className="text-xs opacity-75">emerson.barreto@cun.edu.co</p>
                    <p>Deisy Carolina Beltrán Sandoval</p>
                    <p className="text-xs opacity-75">deisy.beltrans@cun.edu.co</p>
                    <p>Vanessa Alexandra Bello Cruz</p>
                    <p className="text-xs opacity-75">vanessa.bello@cun.edu.co</p>
                  </div>
                </div>
                <div className="border-t border-current opacity-20 pt-3 mt-4">
                  <p style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
                    <span className="font-semibold">Docente:</span> Rocío Calentura Pinilla
                  </p>
                  <p style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
                    <span className="font-semibold">Ficha:</span> NETWORKING/54414
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t pt-8 text-center text-sm"
               style={{ borderColor: currentTheme.colors.textLight + '30' }}>
            <p style={{ color: currentTheme.colors.textLight, opacity: 0.9 }}>
              &copy; 2024 Dolce Benedizione - Sweet Connections. Todos los derechos reservados.
            </p>
            <p className="mt-2" style={{ color: currentTheme.colors.textLight, opacity: 0.7 }}>
              Proyecto de Aula - Networking Empresarial | Semestre IX | Corporación Unificada Nacional de Educación Superior
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}