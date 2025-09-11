'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { SweetConnectionsLogo } from './SweetConnectionsLogo';
import { 
  MdEvent, 
  MdLocationOn, 
  MdSchedule,
  MdConfirmationNumber,
  MdViewAgenda,
  MdGpsFixed as MdTarget,
  MdHandshake,
  MdTrendingUp,
  MdStar,
  MdPalette,
  MdBrush,
  MdWork,
  MdTrendingUp as MdGrowth,
  MdWorkspaces as MdCertificate,
  MdCamera,
  MdShare,
  MdPeople,
  MdLocalShipping,
  MdCoffee,
  MdBarChart,
  MdPublic,
  MdBusiness,
  MdRocket,
  MdGpsFixed,
  MdSmartphone,
  MdGroups,
  MdStore,
  MdAutoAwesome,
  MdEmail,
  MdPhone,
  MdMessage as MdWhatsApp,
  MdPlace,
  MdGroup as MdFacebook,
  MdCamera as MdInstagram,
  MdShare as MdTwitter,
  MdMusicNote
} from 'react-icons/md';

export function UpdatedHeroSection() {
  const { currentTheme } = useTheme();
  
  return (
    <section className="pt-32 pb-20 px-6 text-center" 
             style={{ background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary}, ${currentTheme.colors.accent})` }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <SweetConnectionsLogo 
              size={256}
            />
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
            <button className="w-full sm:w-auto font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                    style={{
                      backgroundColor: currentTheme.colors.button,
                      color: currentTheme.colors.buttonText
                    }}>
              <MdConfirmationNumber className="text-xl" />
              <span>Regístrate Ahora</span>
            </button>
            
            <button className="w-full sm:w-auto bg-transparent font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 hover:shadow-lg flex items-center justify-center space-x-2"
                    style={{
                      color: currentTheme.colors.textPrimary,
                      borderColor: currentTheme.colors.border
                    }}>
              <MdViewAgenda className="text-xl" />
              <span>Ver Agenda</span>
            </button>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg backdrop-blur-sm"
                 style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <MdEvent className="text-3xl mb-2 mx-auto" style={{ color: currentTheme.colors.button }} />
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                Fecha
              </h4>
              <p style={{ color: currentTheme.colors.textSecondary }}>
                Por confirmar
              </p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm"
                 style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <MdLocationOn className="text-3xl mb-2 mx-auto" style={{ color: currentTheme.colors.button }} />
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                Lugar
              </h4>
              <p style={{ color: currentTheme.colors.textSecondary }}>
                Por confirmar
              </p>
            </div>
            
            <div className="p-4 rounded-lg backdrop-blur-sm"
                 style={{ backgroundColor: currentTheme.colors.secondary + '80' }}>
              <MdSchedule className="text-3xl mb-2 mx-auto" style={{ color: currentTheme.colors.button }} />
              <h4 className="font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                Duración
              </h4>
              <p style={{ color: currentTheme.colors.textSecondary }}>
                Día completo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UpdatedObjectivesSection() {
  const { currentTheme } = useTheme();

  const objectives = [
    {
      icon: MdTarget,
      title: "Objetivo General",
      description: "Posicionar a Dolce Benedizione como referente de experiencias emocionales y regalos corporativos en el sector gastronómico"
    },
    {
      icon: MdHandshake,
      title: "Conectar Aliados",
      description: "Establecer alianzas estratégicas con distribuidores, empresarios del sector gastronómico y restaurantes"
    },
    {
      icon: MdTrendingUp,
      title: "Atraer Clientes",
      description: "Generar nuevas oportunidades de negocio y ampliar la red de clientes corporativos"
    },
    {
      icon: MdStar,
      title: "Fortalecer Presencia",
      description: "Aumentar el reconocimiento de marca y consolidar nuestra posición en el mercado premium"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: currentTheme.colors.secondary }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Objetivos del Evento
          </h3>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full" 
               style={{ backgroundColor: currentTheme.colors.border }}></div>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: currentTheme.colors.textPrimary, opacity: 0.8 }}>
            Sweet Connections está diseñado estratégicamente para alcanzar metas específicas que fortalezcan 
            nuestra presencia en el mercado y generen valor agregado para todos los participantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <div key={index} 
                   className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                   style={{ backgroundColor: currentTheme.colors.primary }}>
                <IconComponent className="text-6xl mb-6 mx-auto" style={{ color: currentTheme.colors.button }} />
                <h4 className="font-bold text-lg mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                  {objective.title}
                </h4>
                <p className="leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                  {objective.description}
                </p>
                <div className="mt-6 w-12 h-1 mx-auto rounded-full" 
                     style={{ backgroundColor: currentTheme.colors.accent }}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg" 
               style={{ backgroundColor: currentTheme.colors.accent }}>
            <h4 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
              ¿Por qué Sweet Connections?
            </h4>
            <p className="text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
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

// Componente con todos los iconos para fácil reutilización
export const IconMap = {
  // Eventos y tiempo
  calendar: MdEvent,
  location: MdLocationOn,
  schedule: MdSchedule,
  ticket: MdConfirmationNumber,
  agenda: MdViewAgenda,
  
  // Objetivos y metas
  target: MdTarget,
  handshake: MdHandshake,
  trending: MdTrendingUp,
  star: MdStar,
  
  // Actividades
  palette: MdPalette,
  brush: MdBrush,
  work: MdWork,
  growth: MdGrowth,
  certificate: MdCertificate,
  camera: MdCamera,
  share: MdShare,
  
  // Audiencia
  people: MdPeople,
  shipping: MdLocalShipping,
  coffee: MdCoffee,
  chart: MdBarChart,
  
  // Beneficios
  public: MdPublic,
  business: MdBusiness,
  rocket: MdRocket,
  gps: MdGpsFixed,
  
  // Promoción
  smartphone: MdSmartphone,
  groups: MdGroups,
  store: MdStore,
  awesome: MdAutoAwesome,
  
  // Contacto
  email: MdEmail,
  phone: MdPhone,
  whatsapp: MdWhatsApp,
  place: MdPlace,
  
  // Redes sociales
  facebook: MdFacebook,
  instagram: MdInstagram,
  twitter: MdTwitter,
  music: MdMusicNote
};