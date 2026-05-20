import { ArrowLeft, TrendingUp, Building2, Ship, Cpu, Globe, Users, DollarSign, Sparkles, Package, Factory, Landmark, Palette, Train } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Suzhou() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5DFD0]">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#B91C1C] animate-fade-in-left">
            苏州 Suzhou
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
          <div className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 animate-pulse-slow"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-fade-in">
                <Sparkles size={18} className="text-white" />
                <span className="text-sm">Polo de Manufatura Avançada 2026</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-right animation-delay-200">
                A Cidade da Prosperidade e Alta Tecnologia
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-300">
                Suzhou reafirma em 2026 sua posição como a maior economia urbana de nível prefeitura da China, equilibrando sua herança cultural milenar com uma base industrial de biotecnologia e manufatura inteligente de classe mundial.
              </p>
            </div>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="mb-20 animate-fade-in-up animation-delay-200">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5DFD0]">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/NS1YYm-9lfc?autoplay=0&rel=0"
                title="Suzhou Aerial Views 4K"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#F5F1E8] to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suzhou: Tradição e Inovação em 4K</h3>
              <p className="text-gray-600">Explore o contraste fascinante entre os canais históricos e os parques industriais de alta tecnologia.</p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-20 animate-fade-in-up animation-delay-400">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dados Econômicos de 2026</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Ship className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Comércio Exterior (SIP)</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">834,6 bi ¥</p>
              <p className="text-gray-600">Dados consolidados de 2025</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <TrendingUp size={18} />
                <span className="text-sm font-semibold">+20,8% de crescimento</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Globe className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Ranking Nacional</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">6º Lugar</p>
              <p className="text-gray-600">Entre as maiores economias urbanas</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <Building2 size={18} />
                <span className="text-sm font-semibold">Liderança em Jiangsu</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Factory className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Indústrias Líderes</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">65%</p>
              <p className="text-gray-600">Do output total da cidade</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <Cpu size={18} />
                <span className="text-sm font-semibold">Foco em Biotecnologia e Nano</span>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Evolution Section */}
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-lg border border-[#E5DFD0] animate-fade-in-up animation-delay-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#B91C1C] rounded-lg animate-pulse-slow">
              <Cpu className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">O Coração Industrial: Suzhou Industrial Park (SIP)</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Em 2026, o <strong>Suzhou Industrial Park (SIP)</strong> continua a ser o modelo global de cooperação internacional e desenvolvimento urbano inteligente. Com um crescimento expressivo de mais de 20% no comércio exterior em 2025, o parque consolidou-se como um hub de <strong>manufatura avançada, semicondutores e biomedicina</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A cidade integra de forma harmoniosa seus jardins clássicos, protegidos pela UNESCO, com zonas de desenvolvimento de alta tecnologia, oferecendo uma das maiores qualidades de vida na China e atraindo investimentos estratégicos de multinacionais que buscam um ecossistema industrial completo e eficiente.
          </p>
        </section>

        {/* Sectors */}
        <section className="mb-20 animate-fade-in-up animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Setores de Excelência</h3>
            <p className="text-xl text-gray-600">A força econômica diversificada de Suzhou em 2026</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Factory className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Manufatura Inteligente</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Suzhou lidera a transição para a indústria 4.0 na China, com fábricas altamente automatizadas e integradas por sistemas de IA que garantem eficiência e sustentabilidade.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Package className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Logística e Comércio Global</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Como um nó central no delta do Rio Yangtze, a cidade utiliza infraestrutura logística inteligente para conectar a produção local aos mercados globais com velocidade recorde.
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
