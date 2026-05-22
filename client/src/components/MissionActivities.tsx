import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Zap, Play, Calendar } from "lucide-react";

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

export default function MissionActivities() {
  const { language } = useLanguage();

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
      videoId: "jdXJbJzAAxQ",
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
      videoId: "ozHgwgRgO-4",
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

  return (
    <section id="diario" className="relative py-20 px-4 text-white min-h-[80vh] flex items-center overflow-hidden">
      {/* Background - matching other sections */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/wp10834624-suzhou-wallpapers.jpg)", filter: "brightness(0.3)" }} />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header - matching other sections style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div data-animate>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/30 rounded-full border border-[#C8102E]/40 mb-4">
              <Zap className="w-3 h-3 text-[#C8102E]" />
              <span className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest">
                {language === "br" ? "Missão Concluída" : "Mission Completed"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
              {language === "br" ? "Diário da Missão" : "Mission Diary"}
            </h2>
          </div>
          <div className="flex items-end md:justify-end" data-animate>
            <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#C8102E] pl-4 md:pl-0 md:pr-4">
              <p className="text-4xl font-bold text-[#C8102E]">40</p>
              <p className="text-sm font-bold text-white/70 uppercase tracking-widest">
                {language === "br" ? "Executivos" : "Executives"}
              </p>
            </div>
          </div>
        </div>

        {/* Activities Grid - improved cards to match the aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-black/40 backdrop-blur-md border-t-2 border-[#C8102E] p-6 hover:bg-black/60 transition-all duration-500"
              data-animate
            >
              {/* Day & Date */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-[#C8102E] px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  DIA {activity.day}
                </div>
                <div className="flex items-center gap-1 text-[#C8102E] text-[10px] font-bold uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  {activity.date}
                </div>
              </div>

              {/* Video/Thumbnail Area */}
              <div className="relative aspect-video bg-gray-900 mb-6 overflow-hidden rounded-sm">
                {activity.videoId ? (
                  <iframe
                    className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity"
                    src={`https://www.youtube.com/embed/${activity.videoId}?controls=0&modestbranding=1`}
                    title={activity.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/5">
                    <Play className="w-8 h-8 text-white/20" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 uppercase group-hover:text-[#C8102E] transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {activity.summary}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {activity.companies.map((company, cidx) => (
                      <span key={cidx} className="text-[10px] font-bold bg-white/5 text-white/60 px-2 py-1 rounded border border-white/10">
                        {company}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {activity.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex items-center gap-2 text-xs text-white/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
