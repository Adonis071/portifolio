import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-[50vh]"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight text-white max-w-[45rem] text-center font-normal">
            Especialista em segurança da informação e performance web. Focado em construir soluções digitais robustas, escaláveis e seguras.
          </p>
          <div className="mt-12 flex gap-8">
            <span className="text-neutral-500 uppercase tracking-widest text-sm font-normal">74+ Projetos</span>
            <span className="text-neutral-500 uppercase tracking-widest text-sm font-normal">0 Vulnerabilidades</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

