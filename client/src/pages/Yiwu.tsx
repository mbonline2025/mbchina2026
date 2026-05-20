import { ArrowLeft, TrendingUp, Building2, Cpu, Globe, Users, DollarSign, Sparkles, Cloud, ShoppingBag, Smartphone, Brain, Wifi, Code, Package, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Yiwu() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5DFD0]">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#B91C1C] animate-fade-in-left">
            义乌 Yiwu
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
              <span className="text-sm">Capital Global do Comércio de Pequenas Mercadorias 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Hub Digital do Comércio Global
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Yiwu consolidou-se em 2026 como o epicentro da transformação digital do comércio internacional, liderando a revolução do e-commerce transfronteiriço e da logística inteligente.
            </p>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="mb-20 animate-fade-in-up animation-delay-200">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5DFD0]">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/A4FfZW63_BI?autoplay=0&rel=0"
                title="Yiwu China - The Heart of Global Trade"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#F5F1E8] to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Yiwu: O Coração do Comércio Digital Global</h3>
              <p className="text-gray-600">Conheça a cidade que conecta milhões de fornecedores com compradores em todo o mundo através da inovação digital.</p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Dados do Ecossistema de Comércio Digital 2026</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <ShoppingBag className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Volume de Transações</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">320 bi ¥</p>
              <p className="text-gray-600">Mercado Internacional de Yiwu em 2025</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <TrendingUp size={18} />
                <span className="text-sm font-semibold">Crescimento de 26% ao ano</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Globe className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Alcance Global</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">210+</p>
              <p className="text-gray-600">Países e regiões conectados</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <Building2 size={18} />
                <span className="text-sm font-semibold">Maior mercado de pequenas mercadorias</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Package className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Portfólio de Produtos</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">400k+</p>
              <p className="text-gray-600">Categorias de produtos disponíveis</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <Zap size={18} />
                <span className="text-sm font-semibold">Diversidade sem precedentes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Commerce Hub Section */}
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-lg border border-[#E5DFD0]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#B91C1C] rounded-lg">
              <Cpu className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">O Ecossistema de Comércio Digital de Yiwu</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Em 2026, Yiwu transcendeu seu papel tradicional de mercado de pequenas mercadorias para se tornar o epicentro da transformação digital do comércio internacional. O <strong>Yiwu Global Digital Trade Center</strong> (Distrito 6) representa a sexta geração de inovação do mercado, integrando <strong>inteligência artificial, blockchain, logística inteligente e plataformas de e-commerce de última geração</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A cidade abriga mais de <strong>75 mil lojas e 400 mil produtos</strong>, conectando fornecedores chineses com compradores globais através de uma infraestrutura digital sofisticada. Plataformas como Alibaba, DHgate e centenas de startups de comércio digital operam a partir de Yiwu, transformando a forma como pequenas e médias empresas realizam negócios internacionais. O comércio exterior de Yiwu atingiu <strong>631,2 bilhões de yuans</strong> no período janeiro-setembro de 2025, com crescimento de 26,3%.
          </p>
        </section>

        {/* Digital Sectors */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Pilares do Comércio Digital</h3>
            <p className="text-xl text-gray-600">Os motores da economia de Yiwu em 2026</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <ShoppingBag className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">E-commerce Transfronteiriço</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Yiwu lidera a revolução do comércio eletrônico transfronteiriço, oferecendo plataformas integradas que permitem pequenos negócios acessar mercados globais com mínimas barreiras. A digitalização de todo o processo de sourcing, pagamento e logística elimina intermediários e reduz custos.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Package className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Logística Inteligente</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A infraestrutura logística de Yiwu integra rastreamento em tempo real, consolidação automática de cargas e roteamento otimizado por IA. Centros de distribuição inteligentes garantem que produtos cheguem aos clientes globais em prazos competitivos.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Inteligência de Mercado</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Algoritmos de IA analisam tendências globais em tempo real, ajudando fornecedores a identificar oportunidades de mercado e otimizar seus inventários. Análise preditiva garante que os produtos certos estejam disponíveis no momento certo.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Conectividade Global</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Yiwu opera como um nó central de uma rede global de comércio digital, com escritórios de representação em mais de 50 países. Parcerias estratégicas com plataformas internacionais amplificam o alcance dos fornecedores locais.
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
