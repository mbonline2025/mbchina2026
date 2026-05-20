import React from "react";
import { Map, Users, Clock, Globe, Book, Compass, Flame, Coins, Shield, Calendar, Trophy, Eye, Sparkles, Cpu } from "lucide-react";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();
  const aboutT = t.about;

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <PageHeader title={aboutT.title} />

      {/* Conteúdo Principal */}
      <>
        {/* Sobre */}
        <section
          id="intro"
          className="bg-amber-50 py-12 md:py-16 lg:py-20 overflow-hidden relative"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="lg:pr-[480px] xl:pr-[520px]">
              <h2
                data-animate
                className="text-[#C8102E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 md:mb-12 text-center lg:text-left animate-section"
              >
                {aboutT.journey_title}
              </h2>

              <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                <div className="space-y-4">
                  <p
                    data-animate
                    className="text-base sm:text-lg text-gray-800 leading-relaxed text-center lg:text-left animate-section delay-100"
                  >
                    {aboutT.journey_p1}
                  </p>
                  <p
                    data-animate
                    className="text-base sm:text-lg text-gray-800 leading-relaxed text-center lg:text-left animate-section delay-200"
                  >
                    {aboutT.journey_p2}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center justify-center lg:justify-start">
                  <div
                    data-animate
                    className="flex flex-col items-center text-center w-full sm:w-auto animate-section delay-300"
                  >
                    <img
                      src="/people.webp"
                      className="h-12 mb-3"
                      alt="Ícone de executivos"
                    />
                    <p className="text-xs font-black text-[#C8102E] uppercase mb-2 tracking-wide">
                      {aboutT.executives}
                    </p>
                    <p className="text-2xl font-semibold text-[#C8102E]">
                      {aboutT.executives_count}
                    </p>
                  </div>

                  <div
                    data-animate
                    className="flex flex-col items-center text-center w-full sm:w-auto animate-section delay-400"
                  >
                    <img
                      src="/predios.webp"
                      className="h-12 mb-3"
                      alt="Ícone de empresas"
                    />
                    <p className="text-xs font-black text-[#C8102E] uppercase mb-2 tracking-wide">
                      {aboutT.companies}
                    </p>
                    <p className="text-2xl font-semibold text-[#C8102E]">
                      {aboutT.companies_count}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem mobile */}
            <div className="mt-12 lg:hidden">
              <div
                data-animate
                className="overflow-hidden rounded-xl shadow-lg group max-w-2xl mx-auto animate-section delay-300"
              >
                <img
                  src="/foto_side.png"
                  alt="MB Consultoria"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Imagem desktop */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[45%] max-w-[800px]">
            <div
              data-animate
              className="h-[85vh] max-h-[600px] overflow-hidden rounded-l-[40px] shadow-2xl group animate-section"
            >
              <img
                src="/foto_side.png"
                alt="MB Consultoria"
                className="w-full h-full object-cover object-left transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Seção 3 - Onde o Futuro Já Acontece */}
        <section id="future" className="bg-amber-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Coluna da Esquerda - Imagem */}
              <div
                data-animate
                className="lg:w-1/2 w-full relative overflow-hidden group order-1 animate-section"
              >
                <div className="h-full overflow-hidden rounded-t-[40px] lg:rounded-t-[40px] lg:rounded-b-none shadow-2xl">
                  <img
                    src="/02-china.webp"
                    alt="China Futuro"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-50/0 to-amber-50/10 transition-all duration-500 group-hover:opacity-0" />
              </div>

              {/* Coluna da Direita - Texto */}
              <div className="lg:w-1/2 w-full flex items-center px-0 lg:px-0 py-12 lg:py-16 order-2">
                <div className="max-w-xl mx-auto lg:mx-0 lg:pl-12">
                  <h2
                    data-animate
                    className="text-[#C8102E] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-section delay-100"
                  >
                    {aboutT.future_title}
                  </h2>
                  <p
                    data-animate
                    className="text-lg md:text-xl text-gray-900 leading-relaxed animate-section delay-200"
                  >
                    {aboutT.future_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
};

export default About;
