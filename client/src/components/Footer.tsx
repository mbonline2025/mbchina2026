import { MessageCircle, Linkedin, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F5E6D3]">
              Fale Conosco
            </h3>
            <p className="text-[#F5E6D3] text-lg leading-relaxed">
              Tem dúvidas sobre a Executive Mission 2026? Entre em contato 
              através dos nossos canais oficiais.
            </p>
          
          </div>

          {/* Right Column - Social Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#F5E6D3]">
              Nossos Canais
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5592981237488&text=Olá%20MB%20Consultoria%2C%20tudo%20bem%3F%20Gostaria%20de%20mais%20informações%20sobre%20a%20MB%20CHINA%20IA%20%26%20Innovation%20Executive%20Mission%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/company/5219997/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/mb_consultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.mbconsultoria.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-[#F5E6D3] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                <span>Site Oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C8102E]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F5E6D3] text-sm text-center md:text-left">
              © 2025 MB Consultoria. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-[#F5E6D3]">
              <a href="#" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}