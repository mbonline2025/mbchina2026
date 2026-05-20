import { TrendingUp, Building2, Ship, Cpu, Globe, Users, DollarSign, Sparkles, Play } from "lucide-react";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Shanghai() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const { t } = useLanguage();
  const shanghaiT = t.shanghai;

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <PageHeader title={shanghaiT.title} />

      <main className="container max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section with Video */}
        <section className="mb-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 animate-pulse-slow"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-fade-in">
                <Sparkles size={18} className="text-white" />
                <span className="text-sm">{shanghaiT.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-right animation-delay-200">
                {shanghaiT.hero_title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 animate-fade-in-up animation-delay-300">
                {shanghaiT.hero_desc}
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
                src="https://www.youtube.com/embed/tRjuZjGDUBU?autoplay=0&rel=0"
                title="Shanghai 4K Ultra HD"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#F5F1E8] to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{shanghaiT.video_title}</h3>
              <p className="text-gray-600">{shanghaiT.video_desc}</p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-20 animate-fade-in-up animation-delay-400">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{shanghaiT.indicators_title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <DollarSign className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{shanghaiT.gdp_label}</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">{shanghaiT.gdp_value}</p>
              <p className="text-gray-600">{shanghaiT.gdp_usd}</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <TrendingUp size={18} />
                <span className="text-sm font-semibold">{shanghaiT.gdp_growth}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Cpu className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{shanghaiT.rd_label}</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">{shanghaiT.rd_value}</p>
              <p className="text-gray-600">{shanghaiT.rd_desc}</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <Sparkles size={18} />
                <span className="text-sm font-semibold">{shanghaiT.rd_badge}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E5DFD0] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#B91C1C] rounded-xl animate-pulse-slow">
                  <Globe className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{shanghaiT.visits_label}</p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">{shanghaiT.visits_value}</p>
              <p className="text-gray-600">{shanghaiT.visits_desc}</p>
              <div className="mt-4 flex items-center gap-2 text-[#B91C1C]">
                <TrendingUp size={18} />
                <span className="text-sm font-semibold">{shanghaiT.visits_growth}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-lg border border-[#E5DFD0] animate-fade-in-up animation-delay-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{shanghaiT.ecosystem_title}</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {shanghaiT.ecosystem_p1}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {shanghaiT.ecosystem_p2}
          </p>
        </section>

        {/* Setores Econômicos */}
        <section className="mb-20 animate-fade-in-up animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{shanghaiT.sectors_title}</h3>
            <p className="text-xl text-gray-600">{shanghaiT.sectors_subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">{shanghaiT.finance_title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {shanghaiT.finance_desc}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5DFD0] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#B91C1C] rounded-lg">
                    <Cpu className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">{shanghaiT.ai_title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {shanghaiT.ai_desc}
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
