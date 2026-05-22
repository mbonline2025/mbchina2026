// client/src/pages/Home.tsx

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ArrowRight, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

import Header from "@/components/Header";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";

import MissionActivities from "@/components/MissionActivities";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useLanguage } from "@/contexts/LanguageContext";

interface Leader {
  id: string;
  name: string;
  image: string;
  description: React.ReactNode[];
}

export default function Home() {
  const { t } = useLanguage();
  const heroT = t.hero;
  const vivenciarT = t.vivenciar;
  const resultadosT = t.resultados;
  const ecoSectionT = t.ecosystems_section;
  const leadersT = t.leaders;
  const aboutT = t.about_section;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const leaders: Leader[] = useMemo(() => [
    {
      id: "marx",
      name: leadersT.marx.name,
      image: "/marx_profile.webp",
      description: [
        <>{leadersT.marx.desc1}</>,
        <>{leadersT.marx.desc2}</>,
        <>{leadersT.marx.desc3}</>,
        <>{leadersT.marx.desc4}</>
      ]
    },
    {
      id: "geromel",
      name: leadersT.geromel.name,
      image: "/geromel_profile.webp",
      description: [
        <>{leadersT.geromel.desc1}</>,
        <>{leadersT.geromel.desc2}</>,
        <>{leadersT.geromel.desc3}</>,
        <>{leadersT.geromel.desc4}</>
      ]
    }
  ], [leadersT]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const options = { threshold: 0.15, rootMargin: '50px' };
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    };
    observerRef.current = new IntersectionObserver(handleIntersection, options);
    document.querySelectorAll("[data-animate]").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  const toggleAudio = useCallback(() => {
    setIsAudioEnabled(prev => {
      const newState = !prev;
      if (videoRef.current && newState) videoRef.current.play().catch(console.error);
      return newState;
    });
  }, []);

  const nextSlide = useCallback(() => setCurrentSlide(prev => (prev + 1) % leaders.length), [leaders.length]);
  const prevSlide = useCallback(() => setCurrentSlide(prev => (prev - 1 + leaders.length) % leaders.length), [leaders.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX), []);
  const handleTouchMove = useCallback((e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX), []);
  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  return (
    <div className={`min-h-screen overflow-x-hidden transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />

      {/* Seção 1 - Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
        <div className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} style={{ backgroundImage: "url(/noite-da-cidade-de-china.webp)" }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 w-full text-white">
          <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-300 mt-12 sm:mt-16 md:mt-20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="inline-flex flex-col items-center gap-3 sm:gap-4 md:gap-6 w-full">
                <h1 className="font-extrabold text-[clamp(1.8rem,8vw,4.5rem)] leading-[0.95] tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.28em] break-words uppercase">
                  {heroT.title}
                </h1>
                <h2>
                  <span className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 font-extrabold text-[clamp(1.1rem,6vw,2.2rem)] md:text-[clamp(1.8rem,4vw,3.1rem)] leading-[1.05] tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.16em]">
                    <span>AI</span><span className="-mx-0.5">&</span><span>INNOVATION</span>
                  </span>
                </h2>
                <h3 className="pt-2 sm:pt-4 font-medium text-[clamp(0.65rem,2.5vw,1rem)] tracking-[0.03em] sm:tracking-[0.1em] opacity-90 text-center px-2">
                  {heroT.date}
                </h3>

                <div className="mt-2 sm:mt-4 w-full px-2 sm:px-0">
                  <div className="bg-white/10 backdrop-blur-sm border border-white rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                    <p className="text-white font-bold text-xs sm:text-base lg:text-lg leading-snug">{heroT.status}</p>
                  </div>
                </div>

                <p className="text-white/90 text-sm sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">{heroT.description}</p>

                <div className="mt-3 sm:mt-6 w-full px-2">
                  <button onClick={() => setIsFormOpen(true)} className="group relative bg-[#C8102E] text-white font-bold text-xs sm:text-base lg:text-lg px-6 sm:px-12 py-2 sm:py-4 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative flex items-center justify-center gap-2">
                      <span>{heroT.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-2 sm:mt-3">{heroT.footnote}</p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center w-full px-2">
                  {heroT.diff.map((item, idx) => (
                    <div key={idx}>
                      <span className="block text-[10px] sm:text-xs text-white/50 uppercase tracking-widest">{item.label}</span>
                      <span className="block text-xs sm:text-sm font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                  <p className="text-xs sm:text-sm text-white/80 mb-2">
                    <span className="font-bold text-[#C8102E]">✓</span> {heroT.confirmed_title}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center text-[10px] sm:text-xs">
                    {heroT.sectors_1.map((item, idx) => (
                      <span key={idx} className="bg-white/10 px-2 py-1 rounded-full border border-white/20">{item}</span>
                    ))}
                    <div className="w-full" />
                    {heroT.sectors_2.map((item, idx) => (
                      <span key={idx} className="bg-white/10 px-2 py-1 rounded-full border border-white/20">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Vivenciar */}
      <section id="vivenciar" className="relative py-20 px-4 text-white min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/chengdu-bridge.webp)', filter: 'brightness(0.3)' }} />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-animate>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight animate-section uppercase">{vivenciarT.title}</h2>
            </div>
            <div className="space-y-6" data-animate>
              {vivenciarT.items.map((text, idx) => (
                <div key={idx} data-animate className="border-t-2 border-[#C8102E] pt-4 animate-section cursor-pointer hover:border-white transition-all">
                  <p className="text-base md:text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Resultados */}
      <section id="resultados" className="relative py-20 px-4 text-white min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/01-china.webp)', filter: 'brightness(0.3)' }} />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-animate>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight animate-section uppercase">{resultadosT.title}</h2>
            </div>
            <div className="space-y-6" data-animate>
              {resultadosT.items.map((text, idx) => (
                <div key={idx} data-animate className="border-t-2 border-[#C8102E] pt-4 animate-section cursor-pointer hover:border-white transition-all">
                  <p className="text-base md:text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Atividades da Missão */}
      <MissionActivities />

      {/* Seção Depoimentos */}
      <TestimonialsSection />

      {/* Seção Ecossistemas */}
      <section id="eco" className="bg-amber-50 py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 data-animate className="text-center text-[#C8102E] text-3xl md:text-5xl font-bold mb-16 animate-section uppercase">{ecoSectionT.title}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mb-20">
            {[
              { id: "shanghai", title: ecoSectionT.cities.shanghai, image: "/Card_1.png", route: "/shanghai" },
              { id: "hangzhou", title: ecoSectionT.cities.hangzhou, image: "/Card_3.png", route: "/hangzhou" },
              { id: "suzhou", title: ecoSectionT.cities.suzhou, image: "/Card_2.png", route: "/suzhou" },
              { id: "yiwu", title: ecoSectionT.cities.yiwu, image: "/Card_4.png", route: "/yiwu" },
            ].map((item, idx) => (
              <Link key={item.id} href={item.route} data-animate className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer block animate-section hover:scale-105 transition-all">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold group-hover:text-[#C8102E] transition-colors">{item.title}</span>
              </Link>
            ))}
          </div>

          <h2 data-animate className="text-center text-[#C8102E] text-3xl md:text-5xl font-bold mb-16 animate-section uppercase">{ecoSectionT.experiences_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {[
              { id: "comida", title: ecoSectionT.experiences.cuisine, image: "/Comida.webp", route: "/cuisine" },
              { id: "cultura", title: ecoSectionT.experiences.culture, image: "/Cultura.webp", route: "/culture" },
              { id: "curiosidades", title: ecoSectionT.experiences.facts, image: "/Curiosidades.webp", route: "/facts" },
            ].map((item, idx) => (
              <Link key={item.id} href={item.route} data-animate className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer block animate-section hover:scale-105 transition-all">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold group-hover:text-[#C8102E] transition-colors">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Líderes */}
      <section id="leaders" className="bg-amber-50 py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 data-animate className="text-2xl md:text-5xl text-[#C8102E] text-center mb-6 font-bold animate-section uppercase">{leadersT.title}</h2>
          <p data-animate className="text-center text-sm md:text-lg mb-12 text-gray-800 max-w-3xl mx-auto animate-section delay-100">{leadersT.description}</p>
          <div className="relative group">
            <button onClick={prevSlide} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-[#C8102E] text-white w-12 h-12 rounded-full items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft /></button>
            <button onClick={nextSlide} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-[#C8102E] text-white w-12 h-12 rounded-full items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"><ChevronRight /></button>
            <div className="overflow-hidden select-none" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {leaders.map((leader) => (
                  <div key={leader.id} className="min-w-full px-4 md:px-8">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                      <div className="flex-1 flex justify-center"><img src={leader.image} alt={leader.name} className="w-48 md:w-96 h-48 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white" /></div>
                      <div className="flex-1 w-full text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#C8102E] mb-6">{leader.name}</h3>
                        <div className="space-y-4 text-gray-800 text-sm md:text-lg">{leader.description.map((text, idx) => (<p key={idx}>{text}</p>))}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Info Final */}
      <section id="info" className="bg-amber-50 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="order-2 md:order-1 space-y-6">
              <h3 data-animate className="text-2xl md:text-5xl font-bold uppercase">{aboutT.title}</h3>
              <p data-animate className="text-base md:text-lg text-gray-700">{aboutT.description}</p>
              <button onClick={() => setIsFormOpen(true)} className="bg-[#C8102E] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                <span>{aboutT.cta}</span><ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2 relative group">
              <video className="w-full rounded-lg shadow-2xl" src="/MB_CHINA_2026.mp4" autoPlay muted={!isAudioEnabled} loop playsInline ref={videoRef} />
              <button onClick={toggleAudio} className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full">{isAudioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}</button>
            </div>
          </div>
        </div>
      </section>


      <Footer id="footer" />

      {isFormOpen && <InterestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-[#C8102E] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-50">
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </button>
      )}
    </div>
  );
}
