import { ArrowLeft, TrendingUp, Building2, Cpu, Globe, Users, DollarSign, Sparkles, Cloud, ShoppingBag, Smartphone, Brain, Wifi, Code } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Hangzhou() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5DFD0]">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#B91C1C] animate-fade-in-left">
            杭州 Hangzhou
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
              <span className="text-sm">Líder da Economia Digital 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Capital da Inteligência Artificial e Dados
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Hangzhou evoluiu em 2026 para se tornar o principal hub de inovação em IA da China, integrando infraestrutura de computação de ponta com um ecossistema digital vibrante.
            </p>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="mb-20 animate-fade-in-up animation-delay-200">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5DFD0]">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/FaVUt4rm47M?autoplay=0&rel=0"
                title="Heaven on Earth: Hangzhou em 4K HDR"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#F5F1E8] to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hangzhou: Harmonia entre Tradição e Tecnologia</h3>
              <p className="text-gray-600">Conheça a cidade que é o berço das gigantes digitais e o futuro da IA generativa.</p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Dados do Ecossistema Digital 2026</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Brain className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Valor dos Clusters Tech</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">530 bi ¥</p>
              <p className="text-gray-600">Meta projetada para 2027</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <TrendingUp size={18} />
                <span className="text-sm font-semibold">Crescimento acelerado em IA</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Globe className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Ranking Global</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">Top 5</p>
              <p className="text-gray-600">Cidades mais inovadoras da China</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <Building2 size={18} />
                <span className="text-sm font-semibold">Liderança em Economia Digital</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Wifi className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Infraestrutura</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">100%</p>
              <p className="text-gray-600">Cobertura de rede inteligente 5G-A/6G</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <TrendingUp size={18} />
                <span className="text-sm font-semibold">Pioneirismo em conectividade</span>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Hub Section */}
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-lg border border-[#E5DFD0]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#B91C1C] rounded-lg">
              <Cpu className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">O Ecossistema de Inovação de Hangzhou</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Em 2026, Hangzhou não é apenas o lar da <strong>Alibaba e do Ant Group</strong>, mas o epicentro de uma nova onda de startups focadas em <strong>IA Generativa, computação em nuvem e infraestrutura de dados</strong>. Através do seu plano estratégico para o período 2026-2030, a cidade está fortalecendo sua infraestrutura de computação para sustentar a próxima geração de serviços digitais globais.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A cidade integra de forma única a beleza natural do West Lake com distritos de alta tecnologia, atraindo talentos globais que buscam qualidade de vida e um ambiente empreendedor dinâmico. Empresas como <strong>NetEase e Hikvision</strong> continuam a expandir as fronteiras da tecnologia de entretenimento e segurança inteligente a partir deste polo.
          </p>
        </section>

        {/* Digital Sectors */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Pilares da Economia Digital</h3>
            <p className="text-xl text-gray-600">O motor tecnológico de Hangzhou em 2026</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Inteligência Artificial</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hangzhou estabeleceu-se como o laboratório nacional para aplicações de IA, desde cidades inteligentes até saúde digital, utilizando grandes modelos de dados para otimizar a vida urbana.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <ShoppingBag className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">E-commerce de Nova Geração</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  O comércio eletrônico em 2026 é impulsionado por experiências imersivas em realidade aumentada e transmissões ao vivo inteligentes, mantendo a cidade na vanguarda do varejo global.
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
