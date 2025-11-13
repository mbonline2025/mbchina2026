import { useEffect, useRef, useState } from "react";
import { X, Download, CheckCircle } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot"; 

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
            Shanghai: A Campeã Econômica e Financeira
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
            Shanghai definiu como meta tornar-se uma “montanha” de inovação industrial em IA — reforçando
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
            Suzhou: A Cidade da Prosperidade Sustentável
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Suzhou é considerada “a cidade-prefeitura mais próspera da China”, com um PIB de cerca de
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
            Hangzhou: A Pioneira da Economia Digital da China
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

  // Dentro do seu componente, adicione:
const [isAudioEnabled, setIsAudioEnabled] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);

const toggleAudio = () => {
  setIsAudioEnabled(!isAudioEnabled);
  
  // Garante que o vídeo continue tocando quando o áudio for ativado
  if (videoRef.current) {
    if (!isAudioEnabled) {
      videoRef.current.play().catch(error => {
        console.log("Erro ao reproduzir vídeo:", error);
      });
    }
  }
};


  return (
    <div className="min-h-screen">
      <Header />

      {/* Seção 1 - Hero */}
      <section className="relative h-screen flex items-center justify-center pt-20" id="hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/noite-da-cidade-de-china.webp)',
            filter: 'brightness(0.2)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide mb-2 animate-fade-in">
            MB CHINA
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide animate-fade-in-delay-1">
            IA & INNOVATION
          </h2>
          <p className="text-base md:text-lg lg:text-xl tracking-[0.3em] mt-6 animate-fade-in-delay-2">
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
<section
  className="bg-[#F5E6D3] py-20 px-4 relative overflow-hidden"
  id="intro"
>
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
  <div className="container max-w-4xl mx-auto relative z-10">
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
      className="text-3xl md:text-4xl lg:text-5xl text-[#C8102E] text-center mb-8 font-bold leading-tight"
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
      className="text-center text-base md:text-lg mb-12 text-gray-800 leading-relaxed max-w-3xl mx-auto"
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
      className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-24 md:gap-32"
      data-animate
      id="intro-stats"
    >
      {/* Bloco 1 */}
      <div
        className={`text-center transition-all duration-1000 delay-300 ${
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
        className={`text-center transition-all duration-1000 delay-400 ${
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
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen" id="future">
        <div 
          className="bg-cover bg-center min-h-[400px] md:min-h-full order-2 md:order-1"
          style={{ backgroundImage: 'url(/02-china.webp)' }}
        />
        <div className="bg-[#C8102E] text-white p-12 md:p-16 lg:p-20 flex flex-col justify-center order-1 md:order-2">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
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
            className="text-base md:text-lg lg:text-xl leading-relaxed"
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
      <section className="relative py-20 px-4 text-white min-h-screen flex items-center" id="vivenciar">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/chengdu-bridge.webp)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div data-animate id="vivenciar-title">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 ${
                isVisible['vivenciar-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                O QUE IRÃO<br />VIVENCIAR
              </h2>
            </div>
            <div className="space-y-6" data-animate id="vivenciar-items">
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-100 ${
                isVisible['vivenciar-items'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold">Imersão em 03 Ecossistemas complementares de inovação:</span> Shanghai, Suzhou e Hangzhou
                </p>
              </div>
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-200 ${
                isVisible['vivenciar-items'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold">Visitas técnicas</span> à empresas líderes com aplicação prática de IA e automação
                </p>
              </div>
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-300 ${
                isVisible['vivenciar-items'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold">Desenvolvimento de visão global</span><br />
                  e adaptação da liderança
                </p>
              </div>
              <div className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-400 ${
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
<section
  className="relative py-20 px-4 text-white min-h-screen flex items-center"
  id="resultados"
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url(/01-china.webp)',
      filter: 'brightness(0.3)'
    }}
  />
  
  <div className="container max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div data-animate id="resultados-title">
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 ${
            isVisible['resultados-title']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          RESULTADOS<br />ESPERADOS
        </h2>
      </div>

      <div className="space-y-6" data-animate id="resultados-items">
        <div
          className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 ${
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
          className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-100 ${
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
          className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-200 ${
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
          className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-300 ${
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
          className={`border-t-2 border-[#C8102E] pt-4 transition-all duration-1000 delay-400 ${
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


{/* Seção 5.5 - Galeria */}
{/*
<section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#C8102E]">
  <div className="relative min-h-[400px] md:min-h-full flex items-center justify-center p-8">
 
  </div>
</section>
*/}
{/* Seção 6 - Ecossistemas */}
<section className="bg-[#F5E6D3] py-20 px-4" id="eco">
  <div className="container max-w-6xl mx-auto">
    <h2
      className="text-4xl md:text-5xl lg:text-6xl text-[#C8102E] text-center mb-16 font-bold"
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

    {/* Cards */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12"
      data-animate
      id="eco-cards"
    >
      {ecos.map((eco, index) => (
        <div
          key={eco.id}
          onClick={() => setSelected(eco.id)}
          className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer delay-${
            (index + 1) * 100
          } ${
            isVisible["eco-cards"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Imagem com overlay preto */}
          <div
            className="relative h-64 md:h-72 bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${eco.image})` }}
          >
            {/* Filtro preto com opacidade */}
            <div className="absolute inset-0 bg-black/50 transition-all duration-300 hover:bg-black/60" />

            {/* Título acima do filtro */}
            <h3 className="relative z-10 text-4xl font-bold text-white drop-shadow-lg text-center px-2">
              {eco.title}
            </h3>
          </div>
        </div>
      ))}
    </div>

    {/* Logo */}
    <div className="text-center" data-animate id="eco-logo">
      <img
        src="/logo_mb_china.webp"
        alt="MB China Logo"
        className={`h-32 md:h-40 mx-auto transition-all duration-1000 ${
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
      {/* Travar o scroll da página de fundo */}
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
              className="bg-[#C8102E] text-white hover:bg-[#a00d24] rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-300"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
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

          {/* Espaçamento inferior */}
          <div className="h-10" />
        </div>
      </div>
    </>
  )}
</section>



      {/* Seção 7 - Líderes */}
<section className="bg-[#F5E6D3] py-20 px-4" id="leaders">
  <div className="container max-w-6xl mx-auto">
    <h2
      className="text-4xl md:text-5xl lg:text-6xl text-[#C8102E] text-center mb-6 font-bold"
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
      className="text-center text-base md:text-lg mb-20 text-gray-800 leading-relaxed max-w-3xl mx-auto"
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
<section className="bg-[#F5E6D3] py-20 px-4 border-t border-[#C8102E]/20" id="marx">
  <div className="container max-w-5xl mx-auto">
    <div
      className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 ${
        isVisible['marx'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      data-animate
      id="marx"
    >
      <img
        src="/marx.webp"
        alt="Marx Gabriel"
        className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover shadow-lg"
      />
      <div className="text-center md:text-left">
        <h3 className="text-3xl font-bold text-[#C8102E] mb-4">MARX GABRIEL</h3>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          CEO da MB Consultoria, conselheiro e consultor estratégico com foco em
          desenvolvimento de lideranças de alto desempenho. Especialista em
          negócios, estratégia e transformação organizacional, conduzindo há
          mais de duas décadas programas de capacitação executiva e inovação no
          Brasil e no exterior.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Seção 7.2 - Ricardo Geromel */}
<section className="bg-[#F5E6D3] py-20 px-4 border-t border-[#C8102E]/20" id="geromel">
  <div className="container max-w-5xl mx-auto">
    <div
      className={`flex flex-col md:flex-row-reverse items-center gap-8 transition-all duration-1000 ${
        isVisible['geromel']
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      data-animate
      id="geromel"
    >
      <img
        src="/geromel.webp"
        alt="Ricardo Geromel"
        className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover shadow-lg"
      />
      <div className="text-center md:text-left">
        <h3 className="text-3xl font-bold text-[#C8102E] mb-4">RICARDO GEROMEL</h3>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Ricardo Geromel é empresário, investidor, autor e especialista
          brasileiro focado nas relações entre o Brasil e a China, bem como em
          inovação e tecnologia global. Atualmente, é o brasileiro com mais
          conhecimento sobre o ambiente de negócios, a cultura, economia e poder
          de mercado da China.
        </p>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed mt-4">
          <span className="font-semibold">Formação e trajetória:</span> formado
          em Administração de Empresas pela Fairleigh Dickinson University (EUA),
          com M.Sc. em Gestão, especialização em Inovação e Empreendedorismo pela
          ESCP Europe (França) e formação complementar na ESPM. Viveu em Pequim em 2011,
          onde fundou uma startup, e atua como palestrante, consultor e autor em
          temas de economia, inovação e relações Brasil–China.
        </p>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed mt-4">
          Sua vivência na China e compreensão do contexto global lhe dão uma visão
          estratégica única sobre como o Brasil se insere na dinâmica China–mundo,
          unindo experiência prática a uma visão transformadora de liderança e inovação.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Seção 8 - Depoimentos */}
      <section className="bg-[#C8102E] py-20 px-4" id="depo">
        <div className="container max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white text-center mb-16 font-bold"
            data-animate 
            id="depo-title"
          >
            <span className={`inline-block transition-all duration-1000 ${
              isVisible['depo-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              DEPOIMENTOS
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate id="depo-cards">
            <div className={`bg-[#F5E6D3] p-8 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl delay-100 ${
              isVisible['depo-cards'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img src="/aspas.webp" alt="Aspas" className="w-12 h-12 text-[#C8102E] mb-4" />
              <p className="text-gray-800 mb-6 leading-relaxed text-sm md:text-base">
                Sua estrutura é estrategicamente alinhada com a dinâmica dos negócios contemporâneos, proporcionando oportunidades e exemplos inspiradores para enfrentar os desafios e transformações no mundo corporativo.
              </p>
              <p className="text-sm text-gray-600 font-bold">
                Luiz Alberto Nicolau | CEO Samel
              </p>
            </div>
            <div className={`bg-[#F5E6D3] p-8 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl delay-200 ${
              isVisible['depo-cards'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img src="/aspas.webp" alt="Aspas" className="w-12 h-12 text-[#C8102E] mb-4" />
              <p className="text-gray-800 mb-6 leading-relaxed text-sm md:text-base">
                O programa nos proporcionou uma interação com profissionais e empresários, práticas nas visitas às empresas, que nos trouxeram informações ricas e que fomentaram debates muito proveitosos.
              </p>
              <p className="text-sm text-gray-600 font-bold">
                Sandra Fernandes, sócia diretora | Lojas COMEPI
              </p>
            </div>
            <div className={`bg-[#F5E6D3] p-8 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl delay-300 ${
              isVisible['depo-cards'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img src="/aspas.webp" alt="Aspas" className="w-12 h-12 text-[#C8102E] mb-4" />
              <p className="text-gray-800 mb-6 leading-relaxed text-sm md:text-base">
                O Programa conseguiu aliar seu conteúdo e teoria de temas relevantes. A organização do programa desde a escolha do local, os seminários em sala de aula, os docentes foram feitos com muito cuidado e esmero
              </p>
              <p className="text-sm text-gray-600 font-bold">
                Socorro Canton, diretora de operação | BEMOL
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Seção 9 - Informações Finais */}
<section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh] bg-[#F5E6D3]">
  {/* Coluna do vídeo */}
  <div className="relative order-1 md:order-2 flex items-center justify-center p-8 md:p-12">
    <div className="w-full h-full max-h-[70vh] relative">
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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a8 8 0 010 12m-4.5-15.5a12 12 0 010 19m0-19l-3 3m3-3l3 3" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Coluna de texto */}
  <div className="bg-[#F5E6D3] text-gray-900 p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
    <div className="space-y-8 max-w-xl mx-auto" data-animate id="info-content">
      
      {/* Título e descrição */}
      <div
        className={`transition-all duration-1000 ${
          isVisible["info-content"]
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Pronto para a Jornada?
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Conheça mais sobre a <strong className="text-gray-900">Executive Mission 2026</strong> e prepare-se
          para uma experiência transformadora nos principais ecossistemas de
          inovação da China.
        </p>
      </div>

      {/* Datas e valores */}
      <div
        className={`transition-all duration-1000 delay-200 ${
          isVisible["info-content"]
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          18 A 22 DE MAIO DE 2026
        </p>
        <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
          Investimento Individual
        </p>
        <p className="text-3xl md:text-4xl font-semibold text-gray-900 mt-1">
          R$ 45.800,00
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />

         {/* Chatbot - Adicione no final, antes de fechar a div principal */}
      <Chatbot />
    </div>
  );
}
