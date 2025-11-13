import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "intro" },
    { label: "Futuro", id: "future" },
    { label: "Vivenciar", id: "vivenciar" },
    { label: "Resultados", id: "resultados" },
    { label: "Ecossistemas", id: "eco" },
    { label: "Líderes", id: "leaders" },
    { label: "Depoimentos", id: "depo" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      {/* Desktop Glass Nav */}
      <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-3 rounded-full shadow-md">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-white text-sm font-medium hover:text-[#F5E6D3] transition tracking-wide uppercase [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)]"
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={() => scrollToSection("info-content")}
          className="ml-2 bg-[#F5E6D3] text-gray-900 font-semibold text-sm rounded-full px-5 py-1.5 flex items-center gap-2 hover:bg-[#f8eede] transition"
        >
          Inscreva-se <ArrowRight size={14} />
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:bg-white/20 transition"
        aria-label="Abrir menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-xl font-medium uppercase tracking-wider hover:text-[#F5E6D3] transition [text-shadow:_0_2px_6px_rgba(0,0,0,0.7)]"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("info-content")}
            className="mt-6 bg-[#F5E6D3] text-[#C8102E] font-semibold text-lg rounded-full px-8 py-3 flex items-center gap-3 hover:bg-[#f8eede] transition"
          >
            Inscreva-se <ArrowRight size={18} />
          </button>
        </nav>
      )}
    </header>
  );
}