import { useState } from "react";
import { X, Send, User, Building, Phone, Mail, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

interface InterestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// SUAS CREDENCIAIS DO EMAILJS
const EMAILJS_SERVICE_ID = '7XA3EFSOfwX7TllDr';
const EMAILJS_TEMPLATE_ID = 'template_3c4ht2c'; // Template ID atualizado
const EMAILJS_PUBLIC_KEY = '7XA3EFSOfwX7TllDr';

export default function InterestForm({ isOpen, onClose }: InterestFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'contato@mbconsultoria.com',
          from_name: formData.nome,
          from_company: formData.empresa,
          from_phone: formData.telefone,
          from_email: formData.email,
          subject: 'Novo Interesse - MB China Executive Mission 2026',
          message: `Novo interesse registrado no site MB China & Innovation:

Nome: ${formData.nome}
Empresa: ${formData.empresa}
Telefone: ${formData.telefone}
Email: ${formData.email}

Data: ${new Date().toLocaleString('pt-BR')}`,
          date: new Date().toLocaleString('pt-BR')
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ nome: "", empresa: "", telefone: "", email: "" });
        
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setError("Erro ao enviar o formulário. Tente novamente ou entre em contato diretamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto animate-scale-in">
        <div className="bg-[#C8102E] text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            disabled={isSubmitting}
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-center">Tenho Interesse</h2>
          <p className="text-white/80 text-center mt-2 text-sm">
            Preencha o formulário e entraremos em contato
          </p>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Interesse Registrado!
              </h3>
              <p className="text-gray-600">Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Empresa"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Telefone/WhatsApp"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail corporativo"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent outline-none transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C8102E] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#a00d24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Interesse
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Seus dados estão seguros. Não compartilhamos suas informações.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}