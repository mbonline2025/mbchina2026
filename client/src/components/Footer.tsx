import { MessageCircle, Linkedin, Instagram, Globe, Smartphone, Apple, DownloadCloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  id?: string;
}

export default function Footer({ id }: FooterProps) {
  const { t } = useLanguage();
  const footT = t.footer;

  return (
    <footer id={id} className="bg-black text-white py-12 md:py-16 px-4 overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12">
          
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#F5E6D3] tracking-tight">
              {footT.download_app}
            </h3>
            
            <div className="flex flex-col gap-3 max-w-md">
              <a
                href="https://play.google.com/store/apps/details?id=co.median.android.krryaez"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Smartphone className="w-5 h-5 text-white/70" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Google Play</div>
                    <div className="text-sm md:text-base text-white/90 font-bold">Android</div>
                  </div>
                </div>
                <DownloadCloud className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
              </a>

              <a
                href="https://apps.apple.com/br/app/mb-china-ai-innovation/id6758636227"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Apple className="w-5 h-5 text-white/70" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-medium">App Store</div>
                    <div className="text-sm md:text-base text-white/90 font-bold">iOS</div>
                  </div>
                </div>
                <DownloadCloud className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl md:text-2xl font-bold text-[#F5E6D3] tracking-tight">
              {footT.our_channels}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              <a
                href="https://api.whatsapp.com/send?phone=5592981237488&text=Olá%20MB%20Consultoria%2C%20tudo%20bem%3F%20Gostaria%20de%20mais%20informações%20sobre%20a%20MB%20CHINA%20IA%20%26%20Innovation%20Executive%20Mission%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-xl transition-all group"
              >
                <div className="p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-medium">WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/company/5219997/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-xl transition-all group"
              >
                <div className="p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/mb_consultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-xl transition-all group"
              >
                <div className="p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-medium">Instagram</span>
              </a>

              <a
                href="https://www.mbconsultoria.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-xl transition-all group"
              >
                <div className="p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-medium">{footT.site_mb}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-6">
            <p className="text-[#F5E6D3]/60 text-xs md:text-sm text-center max-w-xs md:max-w-none leading-relaxed">
              {footT.rights}
            </p>
            <div className="flex gap-8 text-xs md:text-sm font-bold text-[#F5E6D3]">
              <a href="/privacy" className="hover:text-white transition-colors uppercase tracking-widest">
                {footT.privacy}
              </a>
              <a href="/terms" className="hover:text-white transition-colors uppercase tracking-widest">
                {footT.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
