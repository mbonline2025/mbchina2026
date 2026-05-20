import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { language } = useLanguage();

  const content = {
    br: {
      title: "Termos de Uso",
      lastUpdated: "Última atualização: 17 de Abril de 2026",
      sections: [
        {
          title: "1. Aceitação dos Termos",
          text: "Ao acessar o site da MB China Executive Mission, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis."
        },
        {
          title: "2. Licença de Uso",
          text: "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site MB China, apenas para visualização transitória pessoal e não comercial."
        },
        {
          title: "3. Isenção de Responsabilidade",
          text: "Os materiais no site da MB China são fornecidos 'como estão'. MB China não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos."
        }
      ]
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last updated: April 17, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          text: "By accessing the MB China Executive Mission website, you agree to comply with these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws."
        },
        {
          title: "2. Use License",
          text: "Permission is granted to temporarily download one copy of the materials (information or software) on MB China's website for personal, non-commercial transitory viewing only."
        },
        {
          title: "3. Disclaimer",
          text: "The materials on MB China's website are provided on an 'as is' basis. MB China makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        }
      ]
    },
    zh: {
      title: "使用条款",
      lastUpdated: "最后更新：2026年4月17日",
      sections: [
        {
          title: "1. 接受条款",
          text: "访问 MB China Executive Mission 网站即表示您同意遵守这些服务条款、所有适用法律和法规，并同意您有责任遵守任何适用的当地法律。"
        },
        {
          title: "2. 使用许可",
          text: "允许临时下载 MB China 网站上的一份材料（信息或软件）副本，仅用于个人、非商业性的临时查看。"
        },
        {
          title: "3. 免责声明",
          text: "MB China 网站上的材料按“原样”提供。MB China 不作任何明示或暗示的保证，并特此声明并否认所有其他保证，包括但不限于适销性、特定用途的适用性或不侵犯知识产权或其他侵犯权利的暗示保证或条件。"
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
