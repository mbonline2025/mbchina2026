import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, Linkedin } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  linkedinUrl: string;
}

export default function TestimonialsSection() {
  const { language } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      name: "Marx Gabriel",
      role: "CEO MB Consultoria",
      content: language === "br"
        ? "Uma empresa de quatro anos com frota de 20.000 veículos autônomos e 300 milhões de entregas. Isso resume bem o ritmo com que a China executa."
        : "A four-year-old company with a fleet of 20,000 autonomous vehicles and 300 million deliveries. This sums up the pace at which China executes.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEZtmjdn3EDUw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689072833766?e=2147483647&v=beta&t=-2PWBmg3zVQMoAJ1P_V07NvHmxVCTf2M4hjEUALm7T4",
      linkedinUrl: "https://www.linkedin.com/posts/marxgabriel_mbchina2026-inteligaeanciaartificial-inovaaexaeto-ugcPost-7462812955177324544-sDqZ"
    },
    {
      name: "Joseph Levinthal",
      role: "Synkar Autonomous",
      content: language === "br"
        ? "A China leva a hospitalidade tão a sério quanto a inovação. Da recepção pelos CEOs à atenção aos detalhes em cada parada, a experiência é impressionante."
        : "China takes hospitality as seriously as innovation. From being received by CEOs to the attention to detail at every stop, the experience is impressive.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFEasvoFI99Pw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677276263423?e=2147483647&v=beta&t=xZE1xIwn_HJ__v7gXOf7cuE56clF2IH8P9tq5tVhO-E",
      linkedinUrl: "https://www.linkedin.com/posts/josephlevinthal_ai-innovation-shanghai-activity-7462833256309374976-lrNA"
    },
    {
      name: "Tiago S. Oliveira",
      role: "M&A & Advisory Financeiro",
      content: language === "br"
        ? "Vi fábricas que operam literalmente no escuro. IA integrada à operação não como projeto piloto, mas como realidade. O método e a disciplina são cirúrgicos."
        : "I saw factories that operate literally in the dark. AI integrated into the operation not as a pilot project, but as a reality. The method and discipline are surgical.",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFsKFAHpAkGlA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715220668102?e=2147483647&v=beta&t=k85pDyrwrV1DmKGVWAfD1ATkNqhYsftoqpx_O4zxHMo",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7462530208882122752/"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[#C8102E] text-3xl md:text-5xl font-bold uppercase mb-6">
            {language === "br" ? "Vozes da Missão 2026" : "Voices of the 2026 Mission"}
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            {language === "br"
              ? "O que os líderes brasileiros estão vivenciando nos maiores polos de inovação do mundo."
              : "What Brazilian leaders are experiencing in the world's largest innovation hubs."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500"
              data-animate
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-[#C8102E]/20 group-hover:text-[#C8102E]/40 transition-colors" />

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C8102E] mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{testimonial.name}</h4>
                    <p className="text-[#C8102E] font-bold text-sm uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold group/link"
                  >
                    <Linkedin className="w-4 h-4 group-hover/link:text-[#0077B5] transition-colors" />
                    <span>{language === "br" ? "Ver post original" : "View original post"}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
