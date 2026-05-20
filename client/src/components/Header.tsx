import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { useLocation } from "wouter";
import { navigate } from "wouter/use-browser-location";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/i18n";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const navT = t.nav;

  const [daysRemaining, setDaysRemaining] = useState(0);
  const [showChinese, setShowChinese] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-05-18T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysRemaining(days > 0 ? days : 0);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000 * 60 * 60);
    const toggleTimer = setInterval(() => setShowChinese(prev => !prev), 4000);

    return () => {
      clearInterval(timer);
      clearInterval(toggleTimer);
    };
  }, []);

  const formatChineseNumber = (num: number) => {
    const chineseNums = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    return num.toString().split('').map(d => chineseNums[parseInt(d)]).join('');
  };

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero") as HTMLElement | null;
      if (!hero) return;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setShowHeader(window.scrollY < heroBottom - 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: navT.home, action: () => location !== "/" ? navigate("/") : document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }) },
    { label: navT.about, action: () => navigate("/about") },
    { label: "Contato", action: () => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  const handleNavClick = (item: any) => {
    setIsOpen(false);
    item.action();
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full
        px-4 sm:px-6 py-4 sm:py-6 md:py-8
        transition-all duration-500 ease-out
        ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
      `}
    >
      <div className="flex items-center justify-between md:justify-center relative max-w-7xl mx-auto px-0 gap-4">
        
        {/* Mobile Menu Button - Left */}
        <div className="flex items-center gap-2 md:absolute md:left-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 sm:p-3 rounded-full hover:bg-white/10 transition"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item)}
              className="px-3 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-bold text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}

          {/* Language Selector Desktop */}
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full border border-white/5 ml-1 lg:ml-2">
            {(["br", "en", "zh"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-[9px] lg:text-[10px] font-black px-2 py-1 rounded-full transition-all ${
                  language === lang ? "bg-[#C8102E] text-white shadow-sm" : "text-white/40 hover:text-white"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Countdown Nav with Animation */}
          <div className="ml-1 lg:ml-2 flex items-center justify-center px-3 lg:px-4 py-1 bg-white/10 rounded-full border border-white/5 min-w-[90px] lg:min-w-[100px] h-9 overflow-hidden relative">
            <div className={`flex flex-col items-center justify-center transition-all duration-700 transform ${showChinese ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}`}>
              <span className="text-sm font-black text-white leading-none">{daysRemaining}</span>
              <span className="text-[8px] font-bold text-white/40 tracking-widest leading-none uppercase mt-0.5">{navT.days}</span>
            </div>
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 transform ${showChinese ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-sm font-black text-[#C8102E] leading-none">{formatChineseNumber(daysRemaining)}</span>
              <span className="text-[8px] font-bold text-white/40 tracking-widest leading-none uppercase mt-0.5">{navT.days_cn}</span>
            </div>
          </div>
        </nav>

        {/* Entrar Button - Right */}
        <div className="md:absolute md:right-0">
          <a
            href="https://app.mbchina2026.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5 sm:gap-2
              text-[10px] sm:text-xs font-black
              px-4 sm:px-6 py-2 sm:py-3 rounded-full
              bg-white text-[#C8102E]
              hover:bg-gray-100
              transition-all shadow-lg
              whitespace-nowrap
            "
          >
            <LogIn size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Área Exclusiva</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 sm:top-24 backdrop-blur-2xl bg-black/40 rounded-3xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Mobile Countdown & Languages */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-2">
             <div className="flex items-center gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden h-12 sm:h-14 min-w-[120px] sm:min-w-[140px] justify-center">
                <div className={`flex flex-col items-center transition-all duration-700 transform ${showChinese ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
                  <span className="text-lg sm:text-xl font-black text-white leading-none">{daysRemaining}</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white/40 tracking-widest uppercase mt-0.5 sm:mt-1">{navT.days}</span>
                </div>
                <div className={`absolute flex flex-col items-center transition-all duration-700 transform ${showChinese ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="text-lg sm:text-xl font-black text-[#C8102E] leading-none">{formatChineseNumber(daysRemaining)}</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white/40 tracking-widest uppercase mt-0.5 sm:mt-1">{navT.days_cn}</span>
                </div>
             </div>
             <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full border border-white/10">
                {(["br", "en", "zh"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all ${
                      language === lang ? "bg-[#C8102E] text-white" : "text-white/60"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
          </div>

          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item)}
              className="text-base sm:text-lg font-bold text-white hover:text-[#C8102E] transition-colors text-center py-2.5 sm:py-3 bg-white/5 rounded-xl border border-white/5"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
