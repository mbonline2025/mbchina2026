import { ArrowLeft, Utensils, Heart, Apple, Wheat, Carrot, Beef, MapPin, Flame, ChefHat, Users, Calendar, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ChineseCuisine() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5DFD0]">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#B91C1C] animate-fade-in-left">
            Culinária Chinesa 2026
          </h1>
          <Link href="/">
            <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#B91C1C] text-white rounded-full hover:bg-[#991B1B] transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap text-sm sm:text-base">
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span>Home</span>
            </button>
          </Link>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} className="text-white" />
              <span className="text-sm">Tendências Gastronômicas 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Evolução da Arte Culinária Chinesa
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Em 2026, a gastronomia chinesa vive uma era de "Localização Premium", unindo tradições ancestrais com inovações sustentáveis e novos perfis de sabor.
            </p>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="mb-20 animate-fade-in-up animation-delay-200">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5DFD0]">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/B3wckqSFzbw?autoplay=0&rel=0"
                title="A Bite of China - O Sabor do Tempo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#F5F1E8] to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">A Bite of China: Sabores em Evolução</h3>
              <p className="text-gray-600">Descubra como a culinária chinesa mantém sua essência enquanto se adapta às tendências globais de 2026.</p>
            </div>
          </div>
        </section>

        {/* Philosophy and Trends */}
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-lg border border-[#E5DFD0]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#B91C1C] rounded-lg">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Novas Tendências e Filosofia</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            O conceito tradicional de <strong>"民以食为天"</strong> (Comida é o céu) expandiu-se em 2026 para incluir a <strong>sustentabilidade e a rastreabilidade</strong>. A nova geração de chefs chineses está focada na "Localização", valorizando ingredientes regionais premium e técnicas de "snacking nostálgico" que reinterpretam sabores de infância com toques modernos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Uma tendência marcante em 2026 é o uso de <strong>ingredientes salgados em sobremesas</strong>, como miso, molho de soja e especiarias tradicionais, criando contrastes sofisticados que estão conquistando o paladar global. A comida continua sendo vista como uma forma de equilíbrio energético e saúde preventiva.
          </p>
        </section>

        {/* Four Food Groups */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Pilares da Dieta em 2026</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Wheat className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Grãos Ancestrais</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Além do arroz e trigo, grãos ancestrais e variedades orgânicas ganham destaque pela busca por saúde e nutrição funcional.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Carrot className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Vegetais Orgânicos</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A agricultura vertical urbana em metrópoles como Shanghai fornece vegetais fresquíssimos e livres de agrotóxicos para os restaurantes.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Apple className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Frutas Funcionais</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Frutas sazonais são integradas em pratos principais e sobremesas, valorizadas por suas propriedades antioxidantes e medicinais.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Beef className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Proteínas Sustentáveis</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A carne é consumida de forma consciente, com foco em qualidade e procedência, muitas vezes servindo como complemento aromático.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Cuisines */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 bg-[#B91C1C] rounded-xl mb-4">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">As Grandes Cozinhas Regionais</h3>
            <p className="text-xl text-gray-600">Diversidade que se renova a cada geração</p>
          </div>

          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Utensils className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Culinária do Delta do Yangtze (Shanghai/Suzhou)</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Caracterizada pelo sabor adocicado e uso refinado de frutos do mar e peixes de água doce. Em 2026, destaca-se pela fusão entre técnicas tradicionais e apresentação minimalista contemporânea.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Flame className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Culinária de Sichuan</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Famosa pelo seu tempero "Mala" (picante e anestesiante). Atualmente, explora a complexidade dos óleos de pimenta artesanais e a fermentação de longa duração.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
