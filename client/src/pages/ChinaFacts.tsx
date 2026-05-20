import { ArrowLeft, Map, Users, Clock, Globe, Book, Compass, Flame, Coins, Shield, Calendar, Trophy, Eye, Sparkles, Cpu } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ChinaFacts() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5DFD0]">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#B91C1C] animate-fade-in-left">
            Curiosidades da China 2026
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
              <span className="text-sm">Inovação e Mistério 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fatos Fascinantes da China Contemporânea
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Descubra informações surpreendentes que mostram como a China de 2026 lidera o futuro sem esquecer suas raízes milenares.
            </p>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="mb-20 animate-fade-in-up animation-delay-200">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5DFD0]">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/yrgFi-c-X3Q?autoplay=0&rel=0"
                title="CHINA: Os Lugares Mais Irreais da Terra"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#F5F1E8] to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maravilhas Naturais e Tecnológicas</h3>
              <p className="text-gray-600">Um olhar sobre os lugares mais surreais e os avanços que desafiam a imaginação em 2026.</p>
            </div>
          </div>
        </section>

        {/* Tech and Innovation Facts */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Liderança Tecnológica em 2026</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Cpu className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Revolução dos Humanoides</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Em 2026, a China consolidou-se como líder global em robótica humanoide, detendo mais de <strong>7.700 patentes</strong> registradas nos últimos cinco anos, superando largamente qualquer outra nação e integrando robôs em serviços públicos e industriais.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Flame className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Energia do Futuro: Sol Artificial</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  O reator de fusão nuclear chinês, conhecido como <strong>"Sol Artificial" (EAST)</strong>, alcançou novos recordes de estabilidade em 2025, aproximando o mundo da energia limpa e inesgotável através de tecnologia de fusão magnética de ponta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geography and Population Updated */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Geografia e População</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Users className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Qualidade Demográfica</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Com cerca de <strong>1,4 bilhão de pessoas</strong>, a China foca agora na "qualidade demográfica", investindo massivamente em educação superior e qualificação tecnológica para sustentar sua economia de alta tecnologia.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Tempo Unificado</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Apesar de cobrir cinco fusos horários geográficos, a China continua a operar sob uma única zona horária oficial (Horário de Pequim), um símbolo de unidade nacional em um território vasto.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Mosaico Étnico</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A China reconhece oficialmente <strong>56 grupos étnicos</strong>, cada um contribuindo para a rica tapeçaria cultural que define a identidade nacional chinesa na era moderna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ancient and Modern Inventions */}
        <section className="mb-20 bg-white rounded-3xl p-12 shadow-lg border border-[#E5DFD0]">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 bg-[#B91C1C] rounded-xl mb-4">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Legado de Inovação</h3>
            <p className="text-xl text-gray-600">Das invenções antigas à computação quântica</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#F5F1E8] rounded-2xl border border-[#E5DFD0]">
              <h4 className="font-bold text-gray-900 mb-2">Papel e Impressão</h4>
              <p className="text-gray-600 text-sm">Bases da comunicação global, nascidas na China antiga.</p>
            </div>
            <div className="text-center p-6 bg-[#F5F1E8] rounded-2xl border border-[#E5DFD0]">
              <h4 className="font-bold text-gray-900 mb-2">Bússola e Pólvora</h4>
              <p className="text-gray-600 text-sm">Invenções que mudaram a navegação e a história mundial.</p>
            </div>
            <div className="text-center p-6 bg-[#F5F1E8] rounded-2xl border border-[#E5DFD0]">
              <h4 className="font-bold text-gray-900 mb-2">Computação Quântica</h4>
              <p className="text-gray-600 text-sm">Em 2026, a China lidera em comunicações quânticas seguras.</p>
            </div>
            <div className="text-center p-6 bg-[#F5F1E8] rounded-2xl border border-[#E5DFD0]">
              <h4 className="font-bold text-gray-900 mb-2">IA e Big Data</h4>
              <p className="text-gray-600 text-sm">O novo "motor" da sociedade chinesa contemporânea.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
