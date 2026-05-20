import { Instagram, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InstagramSection() {
  const { t } = useLanguage();
  const instaT = t.instagram;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden group bg-black">
      {/* Background com Imagem Otimizada */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-20"
        style={{ backgroundImage: "url(/noite-da-cidade-de-china.webp)" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Texto e Call to Action */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
              <Instagram className="w-4 h-4 text-[#C8102E]" />
              <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Instagram</span>
            </div>
            
            <h2 className="text-white mb-6">
              <span className="block text-lg md:text-xl font-medium text-white/70 mb-2 tracking-tight">
                {instaT.follow}
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                MB CHINA<br />AI & INNOVATION
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              {instaT.desc}
            </p>

            <a 
              href="https://www.instagram.com/mb_consultoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C8102E] hover:bg-[#E31837] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-105 group/btn"
            >
              <span>{instaT.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card do Post Otimizado */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative p-1 bg-white/10 rounded-[2.5rem] shadow-2xl">
              <div className="overflow-hidden rounded-[2.2rem] bg-zinc-900 aspect-square relative group/post">
                <img 
                  src="/noite-da-cidade-de-china.webp" 
                  alt="Instagram Post Preview" 
                  className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover/post:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* Overlay de info do post */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#C8102E] flex items-center justify-center text-[10px] font-black text-white">MB</div>
                    <span className="text-white font-bold text-sm">mb_consultoria</span>
                  </div>
                  <p className="text-white/70 text-xs line-clamp-2">
                    Explorando o futuro da IA em Shanghai. Acompanhe nossa jornada executiva 2026. #MBChina #Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
