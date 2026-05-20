import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { language } = useLanguage();

  const content = {
    br: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: 17 de Abril de 2026",
      sections: [
        {
          title: "1. Coleta de Informações",
          text: "Coletamos informações que você nos fornece diretamente ao preencher formulários de interesse em nosso site, incluindo nome, empresa, telefone e e-mail."
        },
        {
          title: "2. Uso das Informações",
          text: "As informações coletadas são utilizadas para processar seu interesse na MB China Executive Mission, enviar comunicações relacionadas e melhorar nossos serviços."
        },
        {
          title: "3. Proteção de Dados",
          text: "Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 17, 2026",
      sections: [
        {
          title: "1. Information Collection",
          text: "We collect information you provide directly to us when filling out interest forms on our website, including name, company, phone, and email."
        },
        {
          title: "2. Use of Information",
          text: "The information collected is used to process your interest in MB China Executive Mission, send related communications, and improve our services."
        },
        {
          title: "3. Data Protection",
          text: "We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction."
        }
      ]
    },
    zh: {
      title: "隐私政策",
      lastUpdated: "最后更新：2026年4月17日",
      sections: [
        {
          title: "1. 信息收集",
          text: "我们收集您在填写网站上的意向表时直接提供给我们的信息，包括姓名、公司、电话 e 电子邮件。"
        },
        {
          title: "2. 信息使用",
          text: "收集的信息用于处理您对 MB China Executive Mission 的兴趣，发送相关通信并改进我们的服务。"
        },
        {
          title: "3. 数据保护",
          text: "我们实施安全措施，保护您的个人信息免受未经授权的访问、更改、披露或破坏。"
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.br;

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-gray-900 font-cy-wide">
      <PageHeader title={t.title} />

      <main className="pt-8 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
            {t.title}
          </h1>
          <p className="text-gray-500 mb-12 font-medium">
            {t.lastUpdated}
          </p>

          <div className="space-y-12">
            {t.sections.map((section, idx) => (
              <section key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#C8102E] mb-4 uppercase">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
