import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Contact() {
  return (
    <footer id="contact" className="py-24 bg-neutral-900 text-neutral-400">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Vamos construir algo juntos?</h2>
            <p className="max-w-md mb-8">
              Sinta-se à vontade para entrar em contato para discutir oportunidades, segurança em aplicações ou apenas para dar um alô.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white outline-none"
            >
              Diga Olá
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-neutral-500">
              Redes Sociais
            </span>
            <div className="flex flex-col gap-3">
              {personalInfo.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-neutral-800 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com foco em segurança (rel="noopener noreferrer" em uso).
          </p>
        </div>
      </div>
    </footer>
  );
}
