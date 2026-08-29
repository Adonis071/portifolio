import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o seu processo de desenvolvimento?",
    answer: "Meu processo é dividido em etapas claras: Briefing e entendimento profundo das suas necessidades, Planejamento e Arquitetura, Desenvolvimento Ágil (com entregas e validações parciais), Testes rigorosos de qualidade e, finalmente, o Deploy em produção."
  },
  {
    question: "Quais tecnologias você costuma utilizar?",
    answer: "Trabalho focado no ecossistema JavaScript/TypeScript moderno, utilizando React, Next.js, Node.js e ferramentas como Tailwind CSS. Para banco de dados, possuo experiência tanto com bancos SQL (PostgreSQL) quanto NoSQL (Firebase, MongoDB), garantindo sempre a melhor escolha arquitetural."
  },
  {
    question: "Você assume projetos em andamento ou faz apenas do zero?",
    answer: "Ambos! Tenho forte experiência em assumir bases de código legadas para realizar refatorações estruturais, melhorar a segurança, otimizar a performance (SEO, tempo de carregamento) e, claro, adicionar novas funcionalidades com segurança."
  },
  {
    question: "Qual o prazo médio de entrega e como é feito o orçamento?",
    answer: "O prazo e o valor dependem totalmente do escopo e da complexidade de cada projeto. Após a nossa primeira conversa de alinhamento, elaboro uma proposta técnica detalhada com cronograma e estimativa de investimento, sem nenhum compromisso."
  },
  {
    question: "Você oferece suporte ou manutenção após o lançamento?",
    answer: "Com certeza. Todos os projetos entregues possuem um período de garantia para correções de bugs nativos. Além disso, ofereço planos de manutenção contínua para monitoramento, atualizações de segurança e evolução sustentável do sistema."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-6 md:px-12 text-white z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 mb-6">
            Perguntas Frequentes
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="w-24 h-1 bg-[#00E5FF]"></div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 bg-[#020c1b]/40 backdrop-blur-md rounded-sm overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:border-[#00E5FF]/30 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className="font-bold text-lg md:text-xl tracking-wide group-hover:text-[#00E5FF] transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-[#00E5FF] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-neutral-300 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
