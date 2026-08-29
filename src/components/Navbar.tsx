import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for the navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 bg-[#020c1b]/60 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-bold text-xl tracking-widest uppercase text-white flex items-center gap-2"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="w-2 h-2 bg-[#00E5FF] rounded-full"></span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-400">
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-[#00E5FF] transition-colors">Projetos</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-[#00E5FF] transition-colors">Sobre</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-4 py-2 border border-neutral-700 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors">
            Contato
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

