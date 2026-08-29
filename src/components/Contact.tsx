import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Contact() {
  return (
    <footer id="contact" className="py-32 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:items-start md:text-left gap-16 mb-24"
        >
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Vamos construir<br/>algo <span className="text-[#00E5FF]">juntos?</span>
            </h2>
            <p className="max-w-md text-xl text-neutral-400 font-medium mb-10">
              Entre em contato para discutir oportunidades, arquitetura de software ou segurança em aplicações.
            </p>
            <motion.a
              href="https://wa.me/5591987054880"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#00E5FF] text-[#020c1b] text-xl font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
            >
              <span className="relative z-10">Iniciar Conversa</span>
              <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            </motion.a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
            <span className="text-sm font-bold tracking-widest uppercase text-[#00E5FF] border-b border-white/10 pb-2">
              Redes Sociais
            </span>
            <div className="flex flex-col gap-4">
              {personalInfo.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group"
                  >
                    <Icon className="w-8 h-8 group-hover:-translate-y-1 transition-transform text-neutral-500 group-hover:text-[#00E5FF]" />
                    <span className="text-xl font-normal uppercase tracking-widest">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="pt-10 border-t-2 border-neutral-900 text-sm font-bold uppercase tracking-widest text-neutral-600 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.</p>
          <p className="text-neutral-500">
            Design Seguro e Escalável.
          </p>
        </div>
      </div>
    </footer>
  );
}

