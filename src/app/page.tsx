import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-pink-200 rounded-full flex items-center justify-center">
              <span className="text-4xl">🍰</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Sweet Connections
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-6">
              Networking con Dolce Benedizione
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Un evento para conectar, compartir y endulzar tus relaciones empresariales
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg">
              Regístrate Ahora
            </button>
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Sobre el Evento</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Un evento de networking organizado por Dolce Benedizione que busca posicionar la marca 
            de dulces artesanales como referente de experiencias emocionales y regalos corporativos, 
            conectando con aliados estratégicos y atrayendo nuevos clientes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl mb-2">📅</div>
              <h4 className="font-semibold">Fecha</h4>
              <p className="text-gray-600">Por confirmar</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📍</div>
              <h4 className="font-semibold">Lugar</h4>
              <p className="text-gray-600">Por confirmar</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-semibold">Duración</h4>
              <p className="text-gray-600">Día completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Objectives */}
      <section className="py-16 px-6 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Objetivos del Evento</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-semibold text-lg mb-2">Posicionar la Marca</h4>
              <p className="text-gray-600">Como referente de experiencias emocionales y regalos corporativos</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-semibold text-lg mb-2">Conectar Aliados</h4>
              <p className="text-gray-600">Con distribuidores, empresarios y restaurantes estratégicos</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="font-semibold text-lg mb-2">Atraer Clientes</h4>
              <p className="text-gray-600">Nuevos y fortalecer presencia en el mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda / Value Added */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">¿Qué Incluye el Evento?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-yellow-50">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-semibold text-lg mb-2">Talleres en Vivo</h4>
              <p className="text-gray-600">Experiencias prácticas e interactivas</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-pink-50">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="font-semibold text-lg mb-2">Dinámicas de Networking</h4>
              <p className="text-gray-600">Conecta con profesionales del sector</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="text-4xl mb-4">🍯</div>
              <h4 className="font-semibold text-lg mb-2">Degustaciones Exclusivas</h4>
              <p className="text-gray-600">Prueba nuestros mejores productos</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="font-semibold text-lg mb-2">Certificados Digitales</h4>
              <p className="text-gray-600">Reconocimiento de participación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Types and Pricing */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Tipos de Entrada</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">General</h4>
              <div className="text-4xl font-bold text-pink-600 mb-4">$50.000</div>
              <p className="text-gray-600 mb-6">COP</p>
              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li>✓ Acceso completo al evento</li>
                <li>✓ Degustaciones</li>
                <li>✓ Certificado digital</li>
                <li>✓ Material del evento</li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Comprar Entrada
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-lg border-4 border-pink-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Premium</h4>
              <div className="text-4xl font-bold text-pink-600 mb-4">$100.000</div>
              <p className="text-gray-600 mb-6">COP</p>
              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li>✓ Todo lo de General</li>
                <li>✓ Acceso VIP a talleres</li>
                <li>✓ Kit premium de productos</li>
                <li>✓ Networking exclusivo</li>
                <li>✓ Certificado especial</li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Comprar Entrada
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Patrocinador</h4>
              <div className="text-4xl font-bold text-pink-600 mb-4">$1.500.000</div>
              <p className="text-gray-600 mb-6">COP</p>
              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li>✓ Todo lo de Premium</li>
                <li>✓ Stand promocional</li>
                <li>✓ Branding en materiales</li>
                <li>✓ Presentación empresarial</li>
                <li>✓ Paquete corporativo</li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Ser Patrocinador
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">¿Para Quién es Este Evento?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="font-semibold">Empresarios</h4>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-3">🚚</div>
              <h4 className="font-semibold">Distribuidores</h4>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-3">☕</div>
              <h4 className="font-semibold">Dueños de Cafés</h4>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold">Gerentes de Marketing</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Beneficios de Asistir</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="font-semibold text-lg mb-2">Oportunidad de Networking</h4>
              <p className="text-gray-600">Conecta con líderes de la industria</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👅</div>
              <h4 className="font-semibold text-lg mb-2">Nuevos Sabores</h4>
              <p className="text-gray-600">Descubre experiencias gastronómicas únicas</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-semibold text-lg mb-2">Alianzas Estratégicas</h4>
              <p className="text-gray-600">Construye relaciones comerciales duraderas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">¿Listo para Conectar?</h3>
          <p className="text-xl mb-8">No pierdas la oportunidad de ser parte de Sweet Connections</p>
          <button className="bg-white text-pink-600 font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Registrarme Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl mb-4">🍰 Dolce Benedizione</div>
              <p className="text-gray-400">Endulzando momentos, creando conexiones</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-gray-400 mb-2">info@dolcebendizione.com</p>
              <p className="text-gray-400">+57 300 123 4567</p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-2xl">📘</a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dolce Benedizione. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
