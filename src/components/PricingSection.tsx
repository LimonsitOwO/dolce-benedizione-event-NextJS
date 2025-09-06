'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaLightbulb, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export function PricingSection() {
  const { currentTheme } = useTheme();
  
  const tickets = [
    {
      name: "General",
      price: "$50.000",
      currency: "COP",
      popular: false,
      features: [
        "Acceso completo al evento",
        "Degustaciones de productos exclusivos",
        "Kit de bienvenida con productos",
        "Certificado digital de participación",
        "Material del evento",
        "Dinámicas de networking",
        "Acceso a talleres básicos"
      ],
      buttonText: "Comprar Entrada",
      description: "Perfecto para conocer nuestros productos y hacer networking"
    },
    {
      name: "Premium",
      price: "$100.000", 
      currency: "COP",
      popular: true,
      features: [
        "Todo lo incluido en General",
        "Acceso VIP a talleres especializados",
        "Kit premium con productos exclusivos",
        "Sesión de networking exclusivo",
        "Certificado especial de participación",
        "Obsequio limitado personalizado",
        "Acceso prioritario a degustaciones",
        "Fotocabina con props temáticos"
      ],
      buttonText: "Comprar Premium",
      description: "La experiencia completa con beneficios exclusivos"
    },
    {
      name: "Patrocinador",
      price: "$1.500.000",
      currency: "COP", 
      popular: false,
      features: [
        "Todo lo incluido en Premium",
        "Stand promocional personalizado",
        "Branding en materiales del evento",
        "Presentación empresarial (15 min)",
        "Paquete corporativo completo",
        "Promoción digital pre y post evento",
        "Historias destacadas en redes sociales",
        "Red de contactos VIP",
        "Certificado de patrocinio"
      ],
      buttonText: "Ser Patrocinador",
      description: "Máximo visibilidad y networking para tu empresa"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: currentTheme.colors.primary }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Precios de Participación
          </h3>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: currentTheme.colors.border }}></div>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
            Elige la experiencia que mejor se adapte a tus necesidades. Todas las entradas incluyen acceso 
            completo al networking y degustaciones exclusivas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tickets.map((ticket, index) => (
            <div key={index} 
                 className={`rounded-2xl p-8 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative ${ticket.popular ? 'transform -translate-y-4' : ''}`}
                 style={{ backgroundColor: currentTheme.colors.secondary }}>
              
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                     style={{ backgroundColor: currentTheme.colors.button, color: currentTheme.colors.buttonText }}>
                  ⭐ MÁS POPULAR
                </div>
              )}

              <h4 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                {ticket.name}
              </h4>
              
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.colors.button }}>
                  {ticket.price}
                </div>
                <p className="text-sm" style={{ color: currentTheme.colors.textPrimary, opacity: 0.7 }}>
                  {ticket.currency}
                </p>
                <p className="text-sm mt-2" style={{ color: currentTheme.colors.textSecondary }}>
                  {ticket.description}
                </p>
              </div>

              <ul className="text-left mb-8 space-y-3">
                {ticket.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                         style={{ backgroundColor: currentTheme.colors.button }}>
                      <span className="text-xs" style={{ color: currentTheme.colors.buttonText }}>✓</span>
                    </div>
                    <span className="text-sm" style={{ color: currentTheme.colors.textPrimary }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:shadow-lg ${
                ticket.popular 
                  ? 'transform hover:scale-105' 
                  : ''
              }`}
              style={{ 
                backgroundColor: ticket.popular ? currentTheme.colors.button : currentTheme.colors.accent,
                color: ticket.popular ? currentTheme.colors.buttonText : currentTheme.colors.textPrimary
              }}>
                {ticket.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg" style={{ backgroundColor: currentTheme.colors.accent }}>
            <h4 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
              <FaLightbulb className="inline mr-2" /> ¿Necesitas más información?
            </h4>
            <p className="text-lg mb-6" style={{ color: currentTheme.colors.textSecondary }}>
              Nuestro equipo está disponible para ayudarte a elegir la mejor opción para tus necesidades. 
              También ofrecemos descuentos especiales para grupos y empresas.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <button className="w-full bg-transparent font-bold py-3 px-6 rounded-lg border-2 transition-colors hover:opacity-80"
                      style={{ 
                        color: currentTheme.colors.button, 
                        borderColor: currentTheme.colors.button 
                      }}>
                <FaPhoneAlt className="inline mr-2" /> Contactar por Teléfono
              </button>
              <button className="w-full bg-transparent font-bold py-3 px-6 rounded-lg border-2 transition-colors hover:opacity-80"
                      style={{ 
                        color: currentTheme.colors.button, 
                        borderColor: currentTheme.colors.button 
                      }}>
                <FaEnvelope className="inline mr-2" /> Enviar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}