import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";
import { ArrowRight, Sparkles } from "lucide-react";

const bannerMessages = [
  "Mude de sistema e não pague a implementação",
  "Treinamento para você e toda sua equipe gratuito",
  "Teste nosso site ou aplicativo um mês grátis"
];

export default function Hero() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-16 px-6 md:px-12 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#00E5FF" strokeWidth="2" strokeDasharray="4 4"/>
              <circle cx="12" cy="12" r="4" fill="#00E5FF"/>
            </svg>
            <span className="text-[#00E5FF] font-bold uppercase tracking-widest text-sm">Tech & Security</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none mb-8">
            Código que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#007BFF]">
              vale a pena.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl leading-relaxed font-medium mb-12">
            Projeto focado em engenharia de software de alta performance. Desenvolvendo soluções digitais robustas, escaláveis e com a segurança como pilar central de cada linha de código.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <motion.a
              href="#projects"
              onClick={handleScrollToProjects}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="btn-metallic group relative inline-flex items-center justify-center px-8 py-4 bg-[#00E5FF] text-[#020c1b] font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
            >
              <span className="relative z-20">Explorar Projetos</span>
              <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            </motion.a>
            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <span className="block w-12 h-px bg-neutral-600"></span>
              Desenvolvedor de Software
            </div>
          </div>

          {/* Interactive Promo Banner */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="group relative flex items-center h-16 w-full max-w-2xl bg-white/5 border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 backdrop-blur-md cursor-pointer transition-all hover:bg-white/10 overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.05)] hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]"
          >
            {/* Left Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00E5FF]"></div>
            
            <div className="pl-6 pr-4 flex items-center justify-center w-full h-full relative">
              <div className="flex-shrink-0 mr-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all text-[#00E5FF]">
                <Sparkles className="w-5 h-5" />
              </div>
              
              <div className="relative w-full h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMessageIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full text-white font-bold uppercase tracking-widest text-[10px] md:text-xs"
                  >
                    {bannerMessages[currentMessageIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00E5FF] transform -translate-x-2 group-hover:translate-x-0 duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}

