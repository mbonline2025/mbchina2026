// Copyright (c) 2026-present, MB China AI & Innovation. All rights reserved.

import { DownloadCloud, Apple, Smartphone, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Download() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-black selection:bg-white/10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 text-white/50 hover:text-white transition-colors duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm">Voltar</span>
      </button>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] lg:max-w-[480px]">
                <img
                  src="/LOGOCHINA_preto.png"
                  alt="MB China AI & Innovation"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-8">
              {/* Título */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                  Baixe o App
                </h1>
                <p className="text-xl sm:text-2xl font-normal text-white/90">
                  MB CHINA AI & INNOVATION
                </p>
                <p className="text-base text-white/50 max-w-xl leading-relaxed">
                  Acesse conteúdo exclusivo, atualizações sobre a Executive Mission 2026 e muito mais. Disponível para iOS e Android.
                </p>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=co.median.android.krryaez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between sm:justify-start gap-4 px-5 py-3.5 bg-white/5 hover:bg-white/10 rounded-md transition-colors border border-white/10 min-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-white/50" />
                    <div>
                      <div className="text-xs text-white/40">Google Play</div>
                      <div className="text-sm text-white/90">Android</div>
                    </div>
                  </div>
                  <DownloadCloud className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
                </a>

                <a
                  href="https://apps.apple.com/br/app/mb-china-ai-innovation/id6758636227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between sm:justify-start gap-4 px-5 py-3.5 bg-white/5 hover:bg-white/10 rounded-md transition-colors border border-white/10 min-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <Apple className="w-4 h-4 text-white/50" />
                    <div>
                      <div className="text-xs text-white/40">App Store</div>
                      <div className="text-sm text-white/90">iOS</div>
                    </div>
                  </div>
                  <DownloadCloud className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
                </a>
              </div>

              {/* Features Grid - PURAMENTE TIPOGRÁFICO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {/* Recursos */}
                <div className="space-y-3">
                  <h3 className="text-white/30 text-xs uppercase tracking-[0.2em] font-normal">
                    Recursos
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="text-sm text-white/60">
                      Acesso exclusivo 
                    </li>
                    <li className="text-sm text-white/60">
                      Conteúdo VIP
                    </li>
                  </ul>
                </div>

                {/* Compatibilidade */}
                <div className="space-y-3">
                  <h3 className="text-white/30 text-xs uppercase tracking-[0.2em] font-normal">
                    Compatibilidade
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="text-sm text-white/60">
                      iOS 13.0+
                    </li>
                    <li className="text-sm text-white/60">
                      Android 8.0+
                    </li>
                  </ul>
                </div>

                {/* Diferenciais */}
                <div className="space-y-3">
                  <h3 className="text-white/30 text-xs uppercase tracking-[0.2em] font-normal">
                    Diferenciais
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="text-sm text-white/60">
                      Sem anúncios
                    </li>
                    <li className="text-sm text-white/60">
                      Suporte prioritário
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Linha sutil de rodapé */}
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-white/20 pt-4">
                Executive Mission 2026
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}