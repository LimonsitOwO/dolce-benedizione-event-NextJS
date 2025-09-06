'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaUsers, FaTruck, FaChartBar, FaGlobe, FaBuilding, FaRocket, FaBullseye, FaMobileAlt, FaStar, FaHandshake, FaGraduationCap, FaCoffee } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';

export function EventInfoSection() {
  const { currentTheme } = useTheme();
  
  const getIconComponent = (iconName: string, size = 24) => {
    const iconProps = { size, style: { color: currentTheme.colors.textPrimary } };
    switch(iconName) {
      case 'FaUsers': return <FaUsers {...iconProps} />;
      case 'FaTruck': return <FaTruck {...iconProps} />;
      case 'FaCoffee': return <FaCoffee {...iconProps} />;
      case 'FaChartBar': return <FaChartBar {...iconProps} />;
      case 'FaGlobe': return <FaGlobe {...iconProps} />;
      case 'FaBuilding': return <FaBuilding {...iconProps} />;
      case 'FaRocket': return <FaRocket {...iconProps} />;
      case 'FaBullseye': return <FaBullseye {...iconProps} />;
      default: return null;
    }
  };
  
  const targetAudience = [
    {
      icon: "FaUsers",
      title: "Empresarios",
      description: "Del sector gastronómico y emprendedores"
    },
    {
      icon: "FaTruck",
      title: "Distribuidores",
      description: "Interesados en productos artesanales premium"
    },
    {
      icon: "☕",
      title: "Dueños de Cafés",
      description: "Y restaurantes que busquen diferenciación"
    },
    {
      icon: "FaChartBar",
      title: "Gerentes",
      description: "De marketing y compras en PYMEs"
    }
  ];

  const benefits = [
    {
      icon: "FaGlobe",
      title: "Expansión de Red",
      description: "Conecta con líderes de la industria gastronómica y amplía tu red de contactos profesionales"
    },
    {
      icon: "FaBuilding",
      title: "Fortalecimiento de Imagen",
      description: "Asocia tu marca con experiencias premium y diferenciación en el mercado"
    },
    {
      icon: "FaRocket",
      title: "Nuevas Oportunidades",
      description: "Descubre alianzas estratégicas y oportunidades de negocio mutuo"
    },
    {
      icon: "FaBullseye",
      title: "Posicionamiento",
      description: "Posiciona tu empresa en el sector de experiencias gastronómicas corporativas"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: currentTheme.colors.secondary }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Información del Evento
          </h3>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: currentTheme.colors.border }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h4 className="text-2xl font-bold mb-8 text-center" style={{ color: currentTheme.colors.textPrimary }}>
              ¿Para Quién es Este Evento?
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} 
                     className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                     style={{ backgroundColor: currentTheme.colors.primary }}>
                  <div className="text-4xl mb-4">{getIconComponent(audience.icon, 48)}</div>
                  <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                    {audience.title}
                  </h5>
                  <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-8 text-center" style={{ color: currentTheme.colors.textPrimary }}>
              Justificación - ¿Por Qué Asistir?
            </h4>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} 
                     className="flex items-start space-x-4 p-6 rounded-lg shadow-md"
                     style={{ backgroundColor: currentTheme.colors.accent }}>
                  <div className="text-3xl flex-shrink-0">{getIconComponent(benefit.icon, 32)}</div>
                  <div>
                    <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                      {benefit.title}
                    </h5>
                    <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h4 className="text-2xl font-bold mb-8 text-center" style={{ color: currentTheme.colors.textPrimary }}>
            Estrategia de Promoción
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg shadow-lg" style={{ backgroundColor: currentTheme.colors.primary }}>
              <div className="text-3xl mb-4">
                <FaMobileAlt style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                Redes Sociales
              </h5>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                Campañas digitales estratégicas en todas las plataformas
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg" style={{ backgroundColor: currentTheme.colors.accent }}>
              <div className="text-3xl mb-4">
                <FaStar style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                Influencers
              </h5>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                Colaboración con influencers gastronómicos especializados
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg" style={{ backgroundColor: currentTheme.colors.primary }}>
              <div className="text-3xl mb-4">
                <FaHandshake style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                Alianzas
              </h5>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                Partnerships con cafés y restaurantes estratégicos
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg" style={{ backgroundColor: currentTheme.colors.accent }}>
              <div className="text-3xl mb-4">
                <FaGraduationCap style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                Storytelling
              </h5>
              <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                Narrativa emocional que conecte con nuestra audiencia
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg" style={{ backgroundColor: currentTheme.colors.primary }}>
            <div className="text-5xl mb-6">
              <GiCakeSlice style={{ color: currentTheme.colors.textPrimary }} />
            </div>
            <h4 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
              Sweet Connections: Más que un Evento
            </h4>
            <p className="text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
              Es una plataforma de conexión donde el networking se vuelve memorable, las relaciones comerciales 
              se fortalecen y las oportunidades de negocio se multiplican. Ven y forma parte de una experiencia 
              que transformará tu manera de hacer networking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}