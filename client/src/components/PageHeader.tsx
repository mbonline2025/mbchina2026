import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/i18n";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5DFD0]">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#B91C1C] animate-fade-in-left">
          {title}
        </h1>
        
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full border border-gray-200">
            {(["br", "en", "zh"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs font-bold px-2 py-1 rounded-full transition-all ${
                  language === lang
                    ? "bg-[#B91C1C] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Home Button */}
          <Link href="/">
            <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#B91C1C] text-white rounded-full hover:bg-[#991B1B] transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap text-sm sm:text-base">
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span>Home</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
