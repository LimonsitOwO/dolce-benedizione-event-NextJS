'use client';

import { FaBullseye, FaHandshake, FaChartLine, FaStar } from 'react-icons/fa';

export function ObjectivesSection() {
  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 48, style: { color: '#8B4513' } };
    switch(iconName) {
      case 'FaBullseye': return <FaBullseye {...iconProps} />;
      case 'FaHandshake': return <FaHandshake {...iconProps} />;
      case 'FaChartLine': return <FaChartLine {...iconProps} />;
      case 'FaStar': return <FaStar {...iconProps} />;
      default: return null;
    }
  };
  
  const objectives = [
    {
      icon: "FaBullseye",
      title: "Objetivo General",
      description: "Posicionar a Dolce Benedizione como referente de experiencias emocionales y regalos corporativos en el sector gastronómico"
    },
    {
      icon: "FaHandshake",
      title: "Conectar Aliados",
      description: "Establecer alianzas estratégicas con distribuidores, empresarios del sector gastronómico y restaurantes"
    },
    {
      icon: "FaChartLine",
      title: "Atraer Clientes",
      description: "Generar nuevas oportunidades de negocio y ampliar la red de clientes corporativos"
    },
    {
      icon: "FaStar",
      title: "Fortalecer Presencia",
      description: "Aumentar el reconocimiento de marca y consolidar nuestra posición en el mercado premium"
    }
  ];

  return (
    <section className="py-20 px-6 bg-theme-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-theme-dark-brown">
            Objetivos del Evento
          </h3>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-theme-brown"></div>
          <p className="text-lg max-w-3xl mx-auto text-theme-dark-brown/80">
            Sweet Connections está diseñado estratégicamente para alcanzar metas específicas que fortalezcan 
            nuestra presencia en el mercado y generen valor agregado para todos los participantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} 
                 className="text-center p-8 bg-theme-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-6">{getIconComponent(objective.icon)}</div>
              <h4 className="font-bold text-lg mb-4 text-theme-dark-brown">
                {objective.title}
              </h4>
              <p className="leading-relaxed text-theme-brown">
                {objective.description}
              </p>
              <div className="mt-6 w-12 h-1 mx-auto rounded-full bg-theme-accent"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-theme-accent rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-theme-dark-brown">
              ¿Por qué Sweet Connections?
            </h4>
            <p className="text-lg leading-relaxed text-theme-brown">
              Este evento representa una oportunidad única para fortalecer lazos comerciales en un ambiente 
              relajado y memorable. La combinación de networking profesional con experiencias gastronómicas 
              crea el escenario perfecto para generar conexiones duraderas y oportunidades de negocio mutuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}