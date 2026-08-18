import { motion } from "motion/react";
import { skills } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Sobre Mim</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Minha abordagem para o desenvolvimento de software une design de interface limpo com arquiteturas seguras. Acredito que a segurança não deve ser uma etapa final, mas sim a base de qualquer aplicação moderna.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Trabalho escrevendo código modular, testável e seguindo os padrões OWASP (Open Web Application Security Project) para garantir a integridade dos dados e a privacidade dos usuários.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Habilidades Principais</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
