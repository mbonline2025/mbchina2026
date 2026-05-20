import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Zap, Play, Calendar, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Activity {
  day: number;
  date: string;
  title: string;
  location: string;
  companies: string[];
  highlights: string[];
  videoId?: string;
  summary: string;
}

interface InstagramPost {
  day: number;
  url: string;
  postNum: number;
}

export default function MissionActivities() {
  const { language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const activities: Activity[] = [
    {
      day: 1,
      date: language === "br" ? "18 Mai · Shanghai" : "May 18 · Shanghai",
      title: language === "br" ? "Abertura em Shanghai" : "Opening in Shanghai",
      location: "Shanghai",
      companies: ["Yingke Law Firm", "JIDU", "SCDI", "Qianwa Technology"],
      highlights: [
        language === "br" ? "Palestra Samuel Liao" : "Samuel Liao Lecture",
        language === "br" ? "Test drive autônomo" : "Autonomous test drive",
        language === "br" ? "Contexto Geopolítico" : "Geopolitical Context"
      ],
      videoId: "-3eOBbRHWic",
      summary: language === "br"
        ? "Do escritório jurídico de ponta da Yingke ao test drive autônomo da JIDU, passando pela gestão urbana inteligente da SCDI e Qianwa — Shanghai na largada."
        : "From Yingke's cutting-edge law firm to JIDU's autonomous test drive, through smart urban management at SCDI and Qianwa — Shanghai at the starting line."
    },
    {
      day: 2,
      date: language === "br" ? "19 Mai · Hangzhou" : "May 19 · Hangzhou",
      title: language === "br" ? "E-commerce & IoT" : "E-commerce & IoT",
      location: "Hangzhou",
      companies: ["Alibaba Group", "Dahua Technology"],
      highlights: [
        language === "br" ? "Tour Sede Alibaba" : "Alibaba HQ Tour",
        language === "br" ? "Showroom 10k+ IA" : "10k+ AI Showroom",
        language === "br" ? "Fábrica Inteligente" : "Smart Factory"
      ],
      videoId: "B3aEwEqL4Xo",
      summary: language === "br"
        ? "Headquarters da Alibaba com IA em escala e o showroom de 10.000+ dispositivos conectados da Dahua — o futuro do e-commerce e da vigilância inteligente em Hangzhou."
        : "Alibaba headquarters with AI at scale and Dahua's 10,000+ connected device showroom — the future of e-commerce and smart surveillance in Hangzhou."
    },
    {
      day: 3,
      date: language === "br" ? "20 Mai · Suzhou" : "May 20 · Suzhou",
      title: language === "br" ? "Smart Cities" : "Smart Cities",
      location: "Suzhou",
      companies: ["Zeron", "SSIP · Suzhou-Singapore Park", "Zelos · Robovans L4"],
      highlights: [
        language === "br" ? "Gestão de Energia" : "Energy Management",
        language === "br" ? "Parque Sino-Singapura" : "Sino-Singapore Park",
        language === "br" ? "Robovans Autônomos L4" : "L4 Autonomous Robovans"
      ],
      summary: language === "br"
        ? "Zeron em gestão de energia, o icônico Parque Suzhou-Singapura e os robovans autônomos L4 da Zelos em operação real — Suzhou como laboratório de cidades inteligentes."
        : "Zeron in energy management, the iconic Suzhou-Singapore Park, and Zelos' L4 autonomous robovans in real operation — Suzhou as a smart cities laboratory."
    },
    {
      day: 4,
      date: language === "br" ? "21 Mai · Yiwu" : "May 21 · Yiwu",
      title: language === "br" ? "Manufatura & Mercado" : "Manufacturing & Market",
      location: "Yiwu",
      companies: ["Hfun-tech", "Yiwu Futian Market"],
      highlights: [
        language === "br" ? "Indústria 4.0" : "Industry 4.0",
        language === "br" ? "Maior mercado do mundo" : "World's largest market",
        language === "br" ? "Cadeia de suprimentos" : "Supply chain"
      ],
      summary: language === "br"
        ? "Tecnologia industrial de ponta na Hfun-tech e o maior mercado de commodities do mundo no Yiwu Futian Market — os bastidores da produção global revelados."
        : "Cutting-edge industrial technology at Hfun-tech and the world's largest commodity market at Yiwu Futian Market — the backstage of global production revealed."
    },
    {
      day: 5,
      date: language === "br" ? "22 Mai · Shanghai" : "May 22 · Shanghai",
      title: language === "br" ? "Saúde & Mídia" : "Healthcare & Media",
      location: "Shanghai",
      companies: ["Parkway Hospital", "Focus Media", "Longrich"],
      highlights: [
        language === "br" ? "Saúde premium" : "Premium healthcare",
        language === "br" ? "Mídia out-of-home" : "Out-of-home media",
        language === "br" ? "Indústria de consumo" : "Consumer industry"
      ],
      summary: language === "br"
        ? "Encerramento em Shanghai: saúde premium no Parkway Hospital, mídia de massa na Focus Media e a potência da indústria de consumo com a Longrich."
        : "Closing in Shanghai: premium healthcare at Parkway Hospital, mass media at Focus Media, and the power of consumer industry with Longrich."
    }
  ];

  const instagramPosts: InstagramPost[] = [
    { day: 1, postNum: 1, url: "https://www.instagram.com/p/DYfNm9fgPhu/?img_index=1" },
    { day: 1, postNum: 2, url: "https://www.instagram.com/p/DYfldFRD8JI/?img_index=1" },
    { day: 1, postNum: 3, url: "https://www.instagram.com/p/DYflxJvjzBY/?img_index=1" },
    { day: 2, postNum: 1, url: "https://www.instagram.com/p/DYgC6XEvCYN/" },
    { day: 2, postNum: 2, url: "https://www.instagram.com/p/DYh7slikZwP/?img_index=1" }
  ];

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden">
      {/* Imagem de fundo — padrão igual ao Resultados */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/wp10834624-suzhou-wallpapers.jpg)", filter: "brightness(0.3)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/20 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/30 rounded-full border border-[#C8102E]/40 mb-4">
              <Zap className="w-3 h-3 text-[#C8102E]" />
              <span className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest">
                {language === "br" ? "Em Andamento" : "In Progress"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
              {language === "br" ? "Diário da Missão" : "Mission Diary"}
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-2xl font-bold text-[#C8102E]">40</p>
              <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Executivos</p>
            </div>
          </div>
        </div>

        {/* Grid de Atividades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 flex flex-col overflow-hidden"
              data-animate
            >
              {/* Thumbnail/Video */}
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                {activity.videoId ? (
                  <iframe
                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                    src={`https://www.youtube.com/embed/${activity.videoId}?controls=0&modestbranding=1`}
                    title={activity.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/5">
                    <Play className="w-8 h-8 text-white/30" />
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#C8102E]" />
                  DIA {activity.day}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-3">
                  <div className="flex items-center gap-1 text-[#C8102E] text-[10px] font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-3 h-3" />
                    {activity.date}
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight group-hover:text-[#C8102E] transition-colors mb-2 uppercase">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {activity.summary}
                  </p>
                </div>

                <div className="space-y-3 mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {activity.companies.map((company, cidx) => (
                      <span key={cidx} className="text-[9px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded border border-white/10">
                        {company}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {activity.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex items-center gap-2 text-xs text-white/50">
                        <div className="w-1 h-1 rounded-full bg-[#C8102E]/60 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Carrossel */}
        <div className="mt-16 border-t border-white/20 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-[#C8102E]" />
              <h3 className="text-xl font-bold text-[#C8102E] uppercase">
                {language === "br" ? "Bastidores no Instagram" : "Behind the Scenes on Instagram"}
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#C8102E] hover:border-[#C8102E] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#C8102E] hover:border-[#C8102E] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {instagramPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-52 flex flex-col items-center justify-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#C8102E]/40 hover:-translate-y-1 transition-all duration-300"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">
                    {language === "br" ? `DIA 0${post.day}` : `DAY 0${post.day}`}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-[#C8102E] transition-colors">
                    Post {post.postNum}
                  </p>
                </div>
                <span className="text-[10px] text-[#C8102E] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {language === "br" ? "Ver post ↗" : "View post ↗"}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C8102E] flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-current" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">
                {language === "br" ? "Acompanhe em tempo real" : "Follow in real time"}
              </p>
              <p className="text-white/50 text-xs">
                {language === "br" ? "Bastidores exclusivos no nosso Instagram" : "Exclusive behind the scenes on our Instagram"}
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/mb_consultoria/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-gray-900 font-bold text-xs rounded-full hover:bg-[#C8102E] hover:text-white transition-all"
          >
            @MB_CONSULTORIA
          </a>
        </div>
      </div>
    </section>
  );
}
