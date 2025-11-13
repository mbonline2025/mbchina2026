import { useEffect, useRef, useState } from "react";
import { X, Download, CheckCircle } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot"; 
import InterestForm from "@/components/InterestForm";

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const ecos = [
    {
      id: "shanghai",
      title: "Shanghai",
      image: "/Card_1.png",
      content: (
        <>
          <h2 className="text-4xl md:text-5xl font-bold text-[#C8102E] mb-6">
           A Campeã Econômica e Financeira
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Shanghai é a maior economia urbana da China e o principal centro financeiro do país.
            Em 2024, seu PIB alcançou cerca de <strong>US$ 757 bilhões</strong> e o PIB per capita
            superou <strong>US$ 30.000</strong> — a renda per capita disponível mais alta da China continental.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Se Shanghai fosse um país, estaria entre as 20 maiores economias do mundo, aproximadamente
            em 18º lugar, à frente de Suécia, Bélgica e Argentina. Seu PIB é maior que o de mais de 170
            países reconhecidos pela ONU.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            A cidade abriga a <strong>Bolsa de Valores de Shanghai</strong> e o <strong>Porto de Shanghai</strong>,
            o mais movimentado do mundo em contêineres. Sua economia é diversificada — finanças, comércio,
            manufatura avançada, tecnologia e imobiliário são pilares. Graças à infraestrutura moderna e
            políticas pró-negócios, atrai empresas globais e lidera o desenvolvimento econômico do Delta
            do Rio Yangtzé.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Shanghai também está se posicionando fortemente como um <strong>hub global de IA</strong> — com
            infraestrutura, eventos, talentos e empresas voltadas à tecnologia. A cidade promove o
            desenvolvimento de modelos generativos, data centers massivos e aplicações em saúde e finanças.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Shanghai definiu como meta tornar-se uma "montanha" de inovação industrial em IA — reforçando
            que a inteligência artificial não é apenas software: exige hardware, dados, instalações e políticas.
          </p>
        </>
      ),
    },
    {
      id: "suzhou",
      title: "Suzhou",
      image: "/Card_3.png",
      content: (
        <>
          <h2 className="text-4xl md:text-5xl font-bold text-[#C8102E] mb-6">
            A Cidade da Prosperidade Sustentável
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Suzhou é considerada "a cidade-prefeitura mais próspera da China", com um PIB de cerca de
            <strong> US$ 375 bilhões</strong>, a sexta maior economia urbana da China continental. Com cerca
            de 13 milhões de habitantes, seu PIB per capita é de <strong>US$ 28.000</strong>, superior ao de
            todas as grandes economias emergentes.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Polo de manufatura avançada e inovação tecnológica, sua força vem da indústria de alta tecnologia —
            eletrônicos, semicondutores, farmacêuticos e componentes automotivos. Atrai investimentos
            estrangeiros graças à mão de obra qualificada e à proximidade com Shanghai.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            O <strong>Parque Industrial de Suzhou</strong>, criado em parceria com Singapura, é um exemplo
            desse modelo de sucesso — abrigando mais de 240 empresas listadas em bolsas de valores.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Suzhou é uma cidade que equilibra tradição e inovação — preservando seu patrimônio de 2.500 anos
            enquanto se torna referência em desenvolvimento tecnológico e prosperidade sustentável.
          </p>
        </>
      ),
    },
    {
      id: "hangzhou",
      title: "Hangzhou",
      image: "/Card_2.png",
      content: (
        <>
          <h2 className="text-4xl md:text-5xl font-bold text-[#C8102E] mb-6">
            A Pioneira da Economia Digital da China
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Hangzhou é uma das cidades mais vibrantes e emblemáticas da China contemporânea. Localizada
            próxima a Shanghai, transformou-se de um destino turístico em uma das capitais tecnológicas e
            digitais mais dinâmicas do mundo.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Essa revolução tem nome: <strong>Alibaba</strong>. Fundada por Jack Ma, fez de Hangzhou o
            epicentro da revolução digital chinesa. Também abriga a <strong>NetEase</strong>, a
            <strong> Hikvision</strong> e o <strong>Ant Group</strong> (Alipay), criando um ecossistema de
            inovação e startups que transformou a cidade em referência global.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Com PIB de <strong>US$ 307 bilhões</strong>, quase 30% vem de atividades digitais — reflexo de
            políticas públicas voltadas à digitalização e à criação de zonas francas para e-commerce.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Hangzhou é um símbolo do novo modelo de desenvolvimento chinês: conectado, criativo e humano.
            Uma cidade que uniu tradição, tecnologia e qualidade de vida — um verdadeiro laboratório da
            economia digital.
          </p>
        </>
      ),
    },
  ];

  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    
    if (videoRef.current) {
      if (!isAudioEnabled) {
        videoRef.current.play().catch(error => {
          console.log("Erro ao reproduzir vídeo:", error);
        });
      }
    }
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Seção 1 - Hero */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/noite-da-cidade-de-china.webp)',
            filter: 'brightness(0.2)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 w-full max-w-full">
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold tracking-wide mb-2 animate-fade-in overflow-hidden">
            MB CHINA
          </h1>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-wide animate-fade-in-delay-1 overflow-hidden">
            IA & INNOVATION
          </h2>
          <p className="text-sm md:text-lg lg:text-xl tracking-[0.3em] mt-6 animate-fade-in-delay-2 overflow-hidden">
            EXECUTIVE MISSION 2026
          </p>
        </div>
        
        {/* Mouse Scroll Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Seção 2 - Introdução */}
      <section className="bg-[#F5E6D3] py-20 px-4 relative overflow-hidden" id="intro">
        {/* Imagem esquerda */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/6 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url(/traditional-china.webp)",
            backgroundPosition: "center",
          }}
        />

        {/* Imagem direita (espelhada) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/6 bg-cover bg-center hidden md:block scale-x-[-1]"
          style={{
            backgroundImage: "url(/traditional-china.webp)",
            backgroundPosition: "center",
          }}
        />

        {/* Conteúdo principal */}
        <div className="container max-w-4xl mx-auto relative z-10 overflow-hidden">
          {/* Logo */}
          <div className="text-center mb-8" data-animate id="intro-logo">
            <img
              src="/logo_mb_china.webp"
              alt="MB China Logo"
              className={`h-24 md:h-32 mx-auto mb-8 transition-all duration-1000 ${
                isVisible["intro-logo"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            />
          </div>

          {/* Título */}
          <h2
            className="text-2xl md:text-4xl lg:text-5xl text-[#C8102E] text-center mb-8 font-bold leading-tight overflow-hidden"
            data-animate
            id="intro-title"
          >
            <span
              className={`inline-block transition-all duration-1000 delay-100 ${
                isVisible["intro-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Uma jornada estratégica
              <br /> de conhecimento rumo
              <br /> ao futuro
            </span>
          </h2>

          {/* Texto introdutório */}
          <p
            className="text-center text-base md:text-lg mb-12 text-gray-800 leading-relaxed max-w-3xl mx-auto overflow-hidden"
            data-animate
            id="intro-text"
          >
            <span
              className={`inline-block transition-all duration-1000 delay-200 ${
                isVisible["intro-text"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Há três décadas, a MB Consultoria transforma organizações por meio da
              educação executiva. Desde 2014, conecta líderes brasileiros aos
              principais ecossistemas internacionais de inovação.
            </span>
          </p>

          {/* Ícones e estatísticas */}
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-24 md:gap-32 overflow-hidden"
            data-animate
            id="intro-stats"
          >
            {/* Bloco 1 */}
            <div
              className={`text-center transition-all duration-1000 delay-300 overflow-hidden ${
                isVisible["intro-stats"]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  src="/people.webp"
                  alt="People"
                  className="h-20 md:h-28 mb-2"
                />
                <p className="text-2xl md:text-3xl font-bold text-[#C8102E] leading-none">
                  + DE 100
                </p>
                <p className="text-sm md:text-base text-gray-700 mt-1">
                  EXECUTIVOS
                </p>
              </div>
            </div>

            {/* Bloco 2 */}
            <div
              className={`text-center transition-all duration-1000 delay-400 overflow-hidden ${
                isVisible["intro-stats"]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  src="/predios.webp"
                  alt="Buildings"
                  className="h-20 md:h-28 mb-2"
                />
                <p className="text-2xl md:text-3xl font-bold text-[#C8102E] leading-none">
                  + DE 45
                </p>
                <p className="text-sm md:text-base text-gray-700 mt-1">
                  EMPRESAS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Onde o Futuro Já Acontece */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden" id="future">
        <div 
          className="bg-cover bg-center min-h-[400px] md:min-h-full order-2 md:order-1 overflow-hidden"
          style={{ backgroundImage: 'url(/02-china.webp)' }}
        />
        <div className="bg-[#C8102E] text-white p-8 md:p-16 lg:p-20 flex flex-col justify-center order-1 md:order-2 overflow-hidden">
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight overflow-hidden"
            data-animate 
            id="future-title"
          >
            <span className={`inline-block transition-all duration-1000 ${
              isVisible['future-title'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              ONDE O<br />FUTURO JÁ<br />ACONTECE
            </span>
          </h2>
          <p 
            className="text-base md:text-lg lg:text-xl leading-relaxed overflow-hidden"
            data-animate 
            id="future-text"
          >
            <span className={`inline-block transition-all duration-1000 delay-200 ${
              isVisible['future-text'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              Mais do que uma grande economia, a China é o ambiente perfeito para testar e escalar inovação. Seu mercado gigante, a infraestrutura avançada e a velocidade de implementação fazem do país um dos principais polos do mundo em inteligência artificial.
            </span>
          </p>
        </div>
      </section>

      {/* Seção 4 - O Que Irão Vivenciar */}
      <section className="relative py-20 px-4 text-white min-h-screen flex items-center overflow-hidden" id="vivenciar">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/chengdu-bridge.webp)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="container max-w-7xl mx-auto relative z-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div data-animate id="vivenciar-title">
              <h2 className={`text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight transition-all duration-1000 overflow-hidden ${
                isVisible['vivenciar-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                O QUE IRÃO<br />VIVENCIAR
              </h2>
            </div>
            <div className="space-y-6 overflow-hidden" data-animate id="vivenciar-items">
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-100 overflow-hidden ${
                isVisible['vivenciar-items'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold">Imersão em 03 Ecossistemas complementares de inovação:</span> Shanghai, Suzhou e Hangzhou
                </p>
              </div>
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-200 overflow-hidden ${
                isVisible['vivenciar-items'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold">Visitas técnicas</span> à empresas líderes com aplicação prática de IA e automação
                </p>
              </div>
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-300 overflow-hidden ${
                isVisible['vivenciar-items'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold">Desenvolvimento de visão global</span><br />
                  e adaptação da liderança
                </p>
              </div>
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-400 overflow-hidden ${
                isVisible['vivenciar-items'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold">Vivenciar</span> cases reais para ampliar o potencial de suas lideranças e negócios
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - Resultados Esperados */}
      <section className="relative py-20 px-4 text-white min-h-screen flex items-center overflow-hidden" id="resultados">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/01-china.webp)',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="container max-w-7xl mx-auto relative z-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div data-animate id="resultados-title">
              <h2
                className={`text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight transition-all duration-1000 overflow-hidden ${
                  isVisible['resultados-title']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                RESULTADOS<br />ESPERADOS
              </h2>
            </div>

            <div className="space-y-6 overflow-hidden" data-animate id="resultados-items">
              <div
                className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 overflow-hidden ${
                  isVisible['resultados-items']
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <p className="text-base md:text-lg leading-relaxed">
                  Compreensão profunda de modelos de inovação e execução em escala com IA e automação
                </p>
              </div>
              <div
                className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-100 overflow-hidden ${
                  isVisible['resultados-items']
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <p className="text-base md:text-lg leading-relaxed">
                  Rede de contatos qualificada e estratégica
                </p>
              </div>
              <div
                className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-200 overflow-hidden ${
                  isVisible['resultados-items']
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <p className="text-base md:text-lg leading-relaxed">
                  Insights práticos para aplicação imediata em suas organizações
                </p>
              </div>
              <div
                className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-300 overflow-hidden ${
                  isVisible['resultados-items']
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <p className="text-base md:text-lg leading-relaxed">
                  Capacidade ampliada da liderança na era da IA
                </p>
              </div>
              <div
                className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-400 overflow-hidden ${
                  isVisible['resultados-items']
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <p className="text-base md:text-lg leading-relaxed">
                  Transformação de conhecimento em vantagem competitiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 - Ecossistemas */}
      <section className="bg-[#F5E6D3] py-20 px-4 overflow-hidden" id="eco">
        <div className="container max-w-6xl mx-auto overflow-hidden">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl text-[#C8102E] text-center mb-12 md:mb-16 font-bold overflow-hidden"
            data-animate
            id="eco-title"
          >
            <span
              className={`inline-block transition-all duration-1000 ${
                isVisible["eco-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Ecossistemas
            </span>
          </h2>

          {/* Instrução interativa */}
          <div className="text-center mb-8 overflow-hidden" data-animate id="eco-instruction">
            <p
              className={`text-lg md:text-xl text-gray-700 italic transition-all duration-1000 delay-300 overflow-hidden ${
                isVisible["eco-instruction"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Clique nos cards para explorar cada ecossistema
            </p>
          </div>

          {/* Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 overflow-hidden"
            data-animate
            id="eco-cards"
          >
            {ecos.map((eco, index) => (
              <div
                key={eco.id}
                onClick={() => setSelected(eco.id)}
                className={`group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer relative ${
                  isVisible["eco-cards"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Imagem com overlay preto */}
                <div
                  className="relative h-64 md:h-72 bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${eco.image})` }}
                >
                  {/* Filtro preto com opacidade */}
                  <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/70" />

                  {/* Título acima do filtro */}
                  <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center px-2">
                    {eco.title}
                  </h3>

                  {/* Indicador de clique - Seta ou ícone */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      <svg 
                        className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Texto de instrução que aparece no hover */}
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  Clique para explorar
                    </span>
                  </div>
                </div>

                {/* Efeito de borda sutil no hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Indicador de interatividade no mobile */}
          <div className="md:hidden text-center mb-8 overflow-hidden">

          </div>

          {/* Logo */}
          <div className="text-center overflow-hidden" data-animate id="eco-logo">
            <img
              src="/logo_mb_china.webp"
              alt="MB China Logo"
              className={`h-28 md:h-40 mx-auto transition-all duration-1000 ${
                isVisible["eco-logo"]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            />
          </div>
        </div>

        {/* Modal Fullscreen: imagem em cima e texto abaixo */}
        {selected && (
          <>
            <style>{`body { overflow: hidden; }`}</style>

            <div
              className="fixed inset-0 z-[300] bg-[#F5E6D3] overflow-y-auto animate-fade-in"
              onClick={() => setSelected(null)}
            >
              {/* Conteúdo principal */}
              <div
                className="max-w-5xl mx-auto min-h-screen flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botão de fechar */}
                <div className="flex justify-end p-6 sticky top-0 bg-[#F5E6D3]/90 backdrop-blur-md z-50">
                  <button
                    onClick={() => setSelected(null)}
                    className="bg-[#C8102E] text-white hover:bg-[#a00d24] rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-300 group"
                    aria-label="Fechar"
                  >
                    <X className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </button>
                </div>

                {/* Imagem (em cima, sem cortes, sempre visível) */}
                <div className="w-full flex justify-center items-center px-4">
                  <img
                    src={
                      selected === "shanghai"
                        ? "/Shanghai_Modal.webp"
                        : selected === "suzhou"
                        ? "/Suzhou_Modal.webp"
                        : selected === "hangzhou"
                        ? "/Hangzhou_Modal.webp"
                        : ""
                    }
                    alt={selected}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-lg"
                  />
                </div>

                {/* Texto (logo abaixo da imagem) */}
                <div className="bg-white/95 rounded-2xl shadow-xl p-6 md:p-10 m-6 mt-10 text-gray-800">
                  {ecos.find((e) => e.id === selected)?.content}
                </div>

                {/* Botão de fechar no final também */}
                <div className="flex justify-center pb-10">
            
                </div>

                {/* Espaçamento inferior */}
                <div className="h-10" />
              </div>
            </div>
          </>
        )}
      </section>

   {/* Seção 7 - Líderes */}
<section className="bg-[#F5E6D3] py-16 md:py-20 px-4 overflow-hidden" id="leaders">
  <div className="container max-w-6xl mx-auto overflow-hidden">
    <h2
      className="text-3xl md:text-5xl lg:text-6xl text-[#C8102E] text-center mb-6 font-bold overflow-hidden"
      data-animate
      id="leaders-title"
    >
      <span
        className={`inline-block transition-all duration-1000 ${
          isVisible['leaders-title']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        LIDERANÇA COM PROPÓSITO E<br />ALCANCE GLOBAL
      </span>
    </h2>

    <p
      className="text-center text-base md:text-lg mb-16 md:mb-20 text-gray-800 leading-relaxed max-w-3xl mx-auto overflow-hidden"
      data-animate
      id="leaders-desc"
    >
      <span
        className={`inline-block transition-all duration-1000 delay-200 ${
          isVisible['leaders-desc']
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        A missão será conduzida por profissionais com ampla experiência em
        educação executiva, inovação e negócios com a China, garantindo uma
        jornada rica em conteúdo, conexões e inspiração.
      </span>
    </p>
  </div>
</section>

{/* Seção 7.1 - Marx Gabriel */}
<section className="bg-[#F5E6D3] py-16 md:py-20 px-4 border-t border-[#C8102E]/20 overflow-hidden" id="marx">
  <div className="container max-w-5xl mx-auto overflow-hidden">
    <div
      className={`flex flex-col items-center gap-6 md:gap-8 transition-all duration-1000 overflow-hidden ${
        isVisible['marx'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      data-animate
      id="marx"
    >
      <h3 className="text-2xl md:text-4xl font-bold text-[#C8102E] mb-4 md:mb-6 text-center">MARX GABRIEL</h3>

      {/* Foto abaixo do nome */}
      <img
        src="/marx.webp"
        alt="Marx Gabriel"
        className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-lg mb-6"
      />

      <div className="space-y-4 text-center md:text-left">
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          CEO da <span className="font-semibold">MB Consultoria</span>, conselheiro e consultor estratégico
          com foco em desenvolvimento de lideranças de alto desempenho.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Autor do livro <em>"Direto ao Ponto: Gestão sem Rodeios"</em> e
          <span className="font-semibold"> Conselheiro de Administração CCA+</span> pelo IBGC, Marx atua há mais de
          20 anos apoiando organizações em processos de transformação, sucessão
          e inovação empresarial.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Sua trajetória inclui a mentoria e consultoria para executivos e famílias empresárias
          em todo o Brasil, com destaque para empresas como Lojas Gazin, Lojas Bemol, Fogás,
          Transportes Bertolini, Grupo Apisul, Pneu Forte e diversas outras.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Reconhecido por sua abordagem direta, prática e humana na formação de lideranças,
          tem sido referência em <span className="font-semibold">governança, cultura organizacional e estratégia de crescimento sustentável.</span>
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Pós-graduado em Agronegócios e Mestre em Ciências Empresariais pela
          <span className="font-semibold"> Universidade Fernando Pessoa</span> (Portugal), possui formação executiva internacional pelas
          principais instituições globais.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Seção 7.2 - Ricardo Geromel */}
<section className="bg-[#F5E6D3] py-16 md:py-20 px-4 border-t border-[#C8102E]/20 overflow-hidden" id="geromel">
  <div className="container max-w-5xl mx-auto overflow-hidden">
    <div
      className={`flex flex-col items-center gap-6 md:gap-8 transition-all duration-1000 overflow-hidden ${
        isVisible['geromel'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      data-animate
      id="geromel"
    >
      <h3 className="text-2xl md:text-4xl font-bold text-[#C8102E] mb-4 md:mb-6 text-center">RICARDO GEROMEL</h3>

      {/* Foto abaixo do nome */}
      <img
        src="/geromel.webp"
        alt="Ricardo Geromel"
        className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-lg mb-6"
      />

      <div className="space-y-4 text-center md:text-left">
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Ricardo Geromel é empresário, investidor, autor e especialista
          brasileiro focado nas relações entre o Brasil e a China, bem como em
          inovação e tecnologia global.
        </p>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          <span className="font-semibold">Formação e trajetória:</span> formado
          em Administração de Empresas pela Fairleigh Dickinson University (EUA),
          com M.Sc. em Gestão, especialização em Inovação e Empreendedorismo pela
          ESCP Europe (França) e formação complementar na ESPM.
        </p>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Viveu em Pequim em 2011, onde fundou uma startup, e atua como palestrante,
          consultor e autor em temas de economia, inovação e relações Brasil–China.
        </p>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Sua vivência na China e compreensão do contexto global lhe dão uma visão
          estratégica única sobre como o Brasil se insere na dinâmica China–mundo,
          unindo experiência prática a uma visão transformadora de liderança e inovação.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Seção 8 - Depoimentos */}
      <section className="bg-[#C8102E] py-16 md:py-20 px-4 overflow-hidden" id="depo">
        <div className="container max-w-6xl mx-auto overflow-hidden">
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl text-white text-center mb-12 md:mb-16 font-bold overflow-hidden"
            data-animate 
            id="depo-title"
          >
            <span className={`inline-block transition-all duration-1000 ${
              isVisible['depo-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              DEPOIMENTOS
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-hidden" data-animate id="depo-cards">
            <div className={`bg-[#F5E6D3] p-6 md:p-8 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl delay-100 overflow-hidden ${
              isVisible['depo-cards'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img src="/aspas.webp" alt="Aspas" className="w-10 h-10 md:w-12 md:h-12 text-[#C8102E] mb-4" />
              <p className="text-gray-800 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Sua estrutura é estrategicamente alinhada com a dinâmica dos negócios contemporâneos, proporcionando oportunidades e exemplos inspiradores para enfrentar os desafios e transformações no mundo corporativo.
              </p>
              <p className="text-sm text-gray-600 font-bold">
                Luiz Alberto Nicolau | CEO Samel
              </p>
            </div>
            <div className={`bg-[#F5E6D3] p-6 md:p-8 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl delay-200 overflow-hidden ${
              isVisible['depo-cards'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img src="/aspas.webp" alt="Aspas" className="w-10 h-10 md:w-12 md:h-12 text-[#C8102E] mb-4" />
              <p className="text-gray-800 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                O programa nos proporcionou uma interação com profissionais e empresários, práticas nas visitas às empresas, que nos trouxeram informações ricas e que fomentaram debates muito proveitosos.
              </p>
              <p className="text-sm text-gray-600 font-bold">
                Sandra Fernandes, sócia diretora | Lojas COMEPI
              </p>
            </div>
            <div className={`bg-[#F5E6D3] p-6 md:p-8 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl delay-300 overflow-hidden ${
              isVisible['depo-cards'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img src="/aspas.webp" alt="Aspas" className="w-10 h-10 md:w-12 md:h-12 text-[#C8102E] mb-4" />
              <p className="text-gray-800 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                O Programa conseguiu aliar seu conteúdo e teoria de temas relevantes. A organização do programa desde a escolha do local, os seminários em sala de aula, os docentes foram feitos com muito cuidado e esmero
              </p>
              <p className="text-sm text-gray-600 font-bold">
                Socorro Canton, diretora de operação | BEMOL
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* Seção 9 - Informações Finais CORRIGIDA */}
<section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh] bg-[#F5E6D3] overflow-hidden">
  {/* Coluna do vídeo */}
  <div className="relative order-1 md:order-2 flex items-center justify-center p-6 md:p-12 overflow-hidden">
    <div className="w-full h-full max-h-[60vh] md:max-h-[70vh] relative overflow-hidden">
      <video
        className="w-full h-full object-contain"
        src="/MB_CHINA_2026.mp4"
        autoPlay
        muted={!isAudioEnabled}
        loop
        playsInline
        ref={videoRef}
      />
      
      {/* Botão de controle de áudio */}
      <button
        onClick={toggleAudio}
        className="absolute bottom-4 right-4 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all duration-300 backdrop-blur-sm z-10"
        aria-label={isAudioEnabled ? "Desativar áudio" : "Ativar áudio"}
      >
        {isAudioEnabled ? (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a8 8 0 010 12m-4.5-15.5a12 12 0 010 19m0-19l-3 3m3-3l3 3" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Coluna de texto CORRIGIDA */}
  <div className="bg-[#F5E6D3] text-gray-900 p-8 md:p-16 flex flex-col justify-center order-2 md:order-1 overflow-hidden">
    <div className="space-y-6 md:space-y-8 max-w-xl mx-auto">
      
      {/* Título e descrição CORRIGIDOS */}
      <div>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Pronto para a Jornada?
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Conheça mais sobre a <strong className="text-gray-900">Executive Mission 2026</strong> e prepare-se
          para uma experiência transformadora nos principais ecossistemas de
          inovação da China.
        </p>
      </div>

      {/* Datas e valores */}
      <div>
        <p className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          18 A 22 DE MAIO DE 2026
        </p>
        <p className="text-sm text-gray-600 mb-6 uppercase tracking-wide">
          Vagas Limitadas
        </p>
      </div>

      {/* Botão Tenho Interesse */}
      <div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="w-full bg-[#C8102E] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-lg hover:bg-[#a00d24] transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Tenho Interesse
        </button>
        
        <p className="text-xs text-gray-600 text-center mt-4">
          Entre em contato para mais informações sobre valores e condições
        </p>
      </div>

      
    </div>
  </div>
</section>

{/* Interest Form Modal */}
<InterestForm 
  isOpen={isFormOpen} 
  onClose={() => setIsFormOpen(false)} 
/>

      {/* Footer */}
      <Footer />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}