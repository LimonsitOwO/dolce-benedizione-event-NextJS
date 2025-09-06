'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaPalette, FaBriefcase, FaCamera, FaGraduationCap, FaMobileAlt, FaStar, FaBullseye, FaChartLine } from 'react-icons/fa';
import { GiCakeSlice, GiHoneyJar } from 'react-icons/gi';

export function ValueAddedSection() {
  const { currentTheme } = useTheme();
  
  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 48, style: { color: currentTheme.colors.textPrimary } };
    switch(iconName) {
      case 'FaPalette': return <FaPalette {...iconProps} />;
      case 'FaBriefcase': return <FaBriefcase {...iconProps} />;
      case 'GiHoney': return <GiHoneyJar {...iconProps} />;
      case 'FaCamera': return <FaCamera {...iconProps} />;
      case 'FaGraduationCap': return <FaGraduationCap {...iconProps} />;
      case 'FaMobileAlt': return <FaMobileAlt {...iconProps} />;
      default: return null;
    }
  };
  
  const activities = [
    {
      icon: "FaPalette",
      title: "Talleres de Sabores",
      description: "Experiencias prácticas e interactivas",
      details: "Participa en talleres en vivo donde aprenderás sobre la creación de sabores únicos y técnicas artesanales de repostería."
    },
    {
      icon: "FaBriefcase", 
      title: "Dinámicas de Networking",
      description: "Conecta con profesionales del sector",
      details: "Dinámicas gamificadas diseñadas para facilitar conexiones naturales y significativas entre participantes."
    },
    {
      icon: "GiHoney",
      title: "Degustaciones Exclusivas",
      description: "Prueba nuestros mejores productos",
      details: "Degusta una selección curada de nuestros productos más exclusivos, incluyendo sabores únicos no disponibles comercialmente."
    },
    {
      icon: "FaCamera",
      title: "Fotocabina Temática",
      description: "Captura momentos especiales",
      details: "Fotocabina profesional con props temáticos para inmortalizar tu experiencia y generar contenido para redes sociales."
    },
    {
      icon: "FaGraduationCap",
      title: "Certificados Digitales",
      description: "Reconocimiento de participación",
      details: "Certificado digital personalizado que valida tu participación en el evento y puede ser compartido en LinkedIn."
    },
    {
      icon: "FaMobileAlt",
      title: "Promoción en Redes",
      description: "Historias destacadas",
      details: "Cobertura completa del evento con historias destacadas en nuestras redes sociales, donde podrás ser protagonista."
    }
  ];

  const experienceHighlights = [
    {
      number: "300+",
      label: "Sabores Únicos",
      description: "Disponibles para degustación"
    },
    {
      number: "5+", 
      label: "Talleres Interactivos",
      description: "Experiencias prácticas"
    },
    {
      number: "50+",
      label: "Profesionales",
      description: "Del sector gastronómico"
    },
    {
      number: "100%",
      label: "Satisfacción",
      description: "Experiencia memorable garantizada"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: currentTheme.colors.secondary }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Valor Agregado del Evento
          </h3>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: currentTheme.colors.border }}></div>
          <p className="text-lg max-w-4xl mx-auto" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
            Sweet Connections va más allá del networking tradicional. Hemos diseñado una experiencia integral 
            que combina aprendizaje, degustación, diversión y oportunidades de negocio en un solo evento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {activities.map((activity, index) => (
            <div key={index} 
                 className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                 style={{ backgroundColor: currentTheme.colors.primary }}>
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{getIconComponent(activity.icon)}</div>
                <h4 className="text-xl font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  {activity.title}
                </h4>
                <p className="text-sm font-medium mb-4" style={{ color: currentTheme.colors.textSecondary }}>
                  {activity.description}
                </p>
                <div className="w-12 h-1 mx-auto rounded-full mb-4" style={{ backgroundColor: currentTheme.colors.accent }}></div>
              </div>
              <p className="text-sm leading-relaxed text-center" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
                {activity.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h4 className="text-2xl font-bold mb-12 text-center" style={{ color: currentTheme.colors.textPrimary }}>
            La Experiencia en Números
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceHighlights.map((highlight, index) => (
              <div key={index} 
                   className="text-center p-8 rounded-xl shadow-lg"
                   style={{ backgroundColor: currentTheme.colors.accent }}>
                <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.colors.button }}>
                  {highlight.number}
                </div>
                <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  {highlight.label}
                </h5>
                <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-2xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
              Una Experiencia Completa
            </h4>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
              Cada elemento del evento ha sido cuidadosamente diseñado para ofrecerte una experiencia 
              integral que va más allá del networking convencional.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: currentTheme.colors.button }}>
                  <span className="text-sm" style={{ color: currentTheme.colors.buttonText }}>✓</span>
                </div>
                <span style={{ color: currentTheme.colors.textPrimary }}>
                  Experiencias multisensoriales únicas
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: currentTheme.colors.button }}>
                  <span className="text-sm" style={{ color: currentTheme.colors.buttonText }}>✓</span>
                </div>
                <span style={{ color: currentTheme.colors.textPrimary }}>
                  Contenido exclusivo para redes sociales
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: currentTheme.colors.button }}>
                  <span className="text-sm" style={{ color: currentTheme.colors.buttonText }}>✓</span>
                </div>
                <span style={{ color: currentTheme.colors.textPrimary }}>
                  Networking estratégico y dirigido
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: currentTheme.colors.button }}>
                  <span className="text-sm" style={{ color: currentTheme.colors.buttonText }}>✓</span>
                </div>
                <span style={{ color: currentTheme.colors.textPrimary }}>
                  Recuerdos tangibles e intangibles duraderos
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl shadow-xl" style={{ backgroundColor: currentTheme.colors.primary }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">
                <FaStar style={{ color: currentTheme.colors.textPrimary }} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                Experiencia Premium Garantizada
              </h4>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.secondary }}>
                <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  <FaBullseye className="inline mr-2" /> Networking Dirigido
                </h5>
                <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  Facilitamos conexiones estratégicas basadas en intereses y objetivos empresariales.
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.accent }}>
                <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  <GiCakeSlice className="inline mr-2" /> Experiencia Gastronómica
                </h5>
                <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  Degustaciones curadas que despiertan los sentidos y crean momentos memorables.
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.secondary }}>
                <h5 className="font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  <FaChartLine className="inline mr-2" /> ROI Medible
                </h5>
                <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                  Cada actividad está diseñada para generar valor tangible para tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}