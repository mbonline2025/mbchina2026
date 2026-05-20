import { ArrowLeft, Castle, Users, Book, Home, Globe, Heart, Flower, Sparkles, Scale, Mountain, Building, Paintbrush, Library } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ChineseCulture() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5DFD0]">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#B91C1C] animate-fade-in-left">
            Cultura Chinesa 2026
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
              <span className="text-sm">Patrimônio Vivo 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Vitalidade da Cultura Chinesa Contemporânea
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Em 2026, a China celebra sua herança de 5.000 anos através de uma renascença cultural que une sabedoria ancestral com experiências imersivas de nova geração.
            </p>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="mb-20 animate-fade-in-up animation-delay-200">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5DFD0]">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/jhPog62tBbI?autoplay=0&rel=0"
                title="Cultura Chinesa: Tradição e Futuro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#F5F1E8] to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Renascença Cultural Chinesa</h3>
              <p className="text-gray-600">Explore como os valores milenares continuam a moldar a identidade e a inovação na China de 2026.</p>
            </div>
          </div>
        </section>

        {/* Immersive Culture Section */}
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-lg border border-[#E5DFD0]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#B91C1C] rounded-lg">
              <Castle className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Turismo de Imersão e Descoberta</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uma das tendências mais fortes em 2026 é o <strong>turismo cultural imersivo</strong>. A Geração Z chinesa e visitantes globais estão buscando experiências autênticas, como residências artísticas em vilas históricas e roteiros que exploram o patrimônio imaterial. A cultura não é apenas observada, mas vivida através de oficinas de caligrafia, cerimônias de chá e festivais regionais revitalizados.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A preservação histórica agora utiliza tecnologias avançadas para reconstruções digitais de monumentos, permitindo que a história da China seja contada de forma dinâmica e acessível, mantendo viva a continuidade de uma das civilizações mais antigas do mundo.
          </p>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Valores Fundamentais na Modernidade</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Users className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Família e Sociedade</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  O respeito filial e a coesão familiar permanecem como a base da estrutura social, adaptando-se às novas formas de vida urbana com um forte senso de comunidade.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Harmonia e Sustentabilidade</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A busca pela harmonia entre homem e natureza reflete-se no compromisso moderno com a sustentabilidade e o desenvolvimento verde, inspirado na filosofia Taoista.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Scale className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Equilíbrio Dinâmico</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  O conceito de Yin e Yang é aplicado hoje na busca pelo equilíbrio entre o avanço tecnológico acelerado e a preservação da paz interior e saúde mental.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophies */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 bg-[#B91C1C] rounded-xl mb-4">
              <Book className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pilares do Pensamento Chinês</h3>
            <p className="text-xl text-gray-600">Filosofias que guiam a China de 2026</p>
          </div>

          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Paintbrush className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Confucionismo e Ética Moderna</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A ênfase na educação, dever social e mérito continua a ser o motor do progresso individual e coletivo na sociedade chinesa contemporânea.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0]">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Mountain className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Taoismo e Bem-Estar</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A filosofia de viver em fluxo com o Tao influencia as práticas modernas de saúde, meditação e a busca por um estilo de vida equilibrado e natural.
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
