import { motion } from "motion/react";
import { personalInfo } from "../data";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-sm font-medium text-neutral-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Focado em Segurança & Performance</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          Olá, eu sou <span className="text-neutral-500">{personalInfo.name}</span>.<br />
          {personalInfo.role}.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="pt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 outline-none"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-neutral-900 border border-neutral-200 font-medium rounded-lg hover:bg-neutral-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 outline-none"
          >
            Entrar em Contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}
