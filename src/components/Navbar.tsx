import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-base text-neutral-900 tracking-tight">
          {personalInfo.name.split(" ")[0]}<span className="text-neutral-400">.dev</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#about" className="hover:text-neutral-900 transition-colors">Sobre</a>
          <a href="#projects" className="hover:text-neutral-900 transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contato</a>
        </nav>
      </div>
    </motion.header>
  );
}
