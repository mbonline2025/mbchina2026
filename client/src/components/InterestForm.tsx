import { useState, useEffect } from "react";
import { X, Send, User, Building, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/contexts/LanguageContext";

interface InterestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// SUAS CREDENCIAIS DO EMAILJS
const EMAILJS_SERVICE_ID = '7XA3EFSOfwX7TllDr';
const EMAILJS_TEMPLATE_ID = 'template_3c4ht2c';
const EMAILJS_PUBLIC_KEY = '7XA3EFSOfwX7TllDr';

export default function InterestForm({ isOpen, onClose }: InterestFormProps) {
  const { t } = useLanguage();
  const formT = t.form;

  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    missionType: "next_mission"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Bloquear scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setError("");

    try {
      const missionTypeLabel = formT.next_mission_option;

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'contato@mbconsultoria.com',
          from_name: formData.nome,
          from_company: formData.empresa,
          from_phone: formData.telefone,
          from_email: formData.email,
          interesse: missionTypeLabel,
          subject: `Interesse Missão MB China - ${formData.nome} / ${formData.empresa} (${missionTypeLabel})`,
          message: `Interesse registrado via site MB China:

Nome: ${formData.nome}
Empresa: ${formData.empresa}
Telefone: ${formData.telefone}
Email: ${formData.email}
Tipo de Interesse: ${missionTypeLabel}

Data do cadastro: ${new Date().toLocaleString('pt-BR')}

O executivo demonstrou interesse na MB China Executive Mission.`,
          date: new Date().toLocaleString('pt-BR')
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({
          nome: "",
          empresa: "",
          telefone: "",
          email: "",
          missionType: "next_mission"
        });
        
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (err) {
      console.error('Erro ao enviar email:', err);
      setError(formT.error_message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[calc(100%-1rem)] sm:max-w-md mx-auto overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[95vh] sm:max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#C8102E] text-white p-4 sm:p-6 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-all z-10"
            disabled={isSubmitting}
            aria-label={formT.close_modal}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="text-center px-4 sm:pr-2">
            <h2 className="text-lg sm:text-2xl font-bold leading-tight">
              {formT.title}
            </h2>
            <p className="text-white/90 mt-1 sm:mt-2 text-[12px] sm:text-sm font-medium">
              {formT.subtitle}
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-200">
          {isSubmitted ? (
            <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {formT.success_title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {formT.success_message}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Info: Próxima Missão 2027 */}
              <div
                className="flex items-start gap-3 p-3 sm:p-4 border-2 rounded-xl"
                style={{
                  borderColor: "#C8102E",
                  backgroundColor: "rgba(200, 16, 46, 0.05)"
                }}
              >
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{formT.next_mission_option}</p>
                  <p className="text-sm text-gray-600">{formT.next_mission_desc}</p>
                </div>
              </div>

              {/* Campos do Formulário */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "nome", icon: User, placeholder: formT.full_name, type: "text" },
                  { name: "empresa", icon: Building, placeholder: formT.company_position, type: "text" },
                  { name: "telefone", icon: Phone, placeholder: formT.phone_whatsapp, type: "tel" },
                  { name: "email", icon: Mail, placeholder: formT.corporate_email, type: "email" }
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <field.icon className="h-5 w-5 text-gray-400 group-focus-within:text-[#C8102E] transition-colors" />
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full pl-12 pr-4 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm sm:text-base focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] focus:bg-white outline-none transition-all placeholder:text-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                ))}
              </div>

              {/* Mensagem de Erro */}
              {error && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center gap-2 animate-in shake-200">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <p className="text-red-600 text-xs font-medium">{error}</p>
                </div>
              )}

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C8102E] text-white py-3 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base hover:bg-[#a00d24] active:scale-[0.98] transition-all shadow-lg shadow-[#C8102E]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{formT.processing}</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{formT.submit_button}</span>
                  </>
                )}
              </button>

              {/* Rodapé do Form */}
              <p className="text-[10px] sm:text-[11px] text-gray-400 text-center leading-tight px-2 sm:px-4">
                {formT.privacy_notice}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
