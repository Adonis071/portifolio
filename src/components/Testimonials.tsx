import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Almeida",
    role: "CTO, Tech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    text: "Profissional excepcional. A entrega do projeto superou todas as nossas expectativas, especialmente no cuidado com a arquitetura de software e a escalabilidade das funções."
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Product Manager, InovaWeb",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "O nível de comprometimento e a qualidade do código são impecáveis. Conseguiu transformar nossos requisitos complexos em uma interface extremamente fluida e intuitiva."
  },
  {
    id: 3,
    name: "Roberto Silveira",
    role: "Fundador, StartUp X",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Trabalhar com este nível de engenharia fez toda a diferença para o nosso lançamento. O sistema não apresentou nenhuma falha desde o dia 1 de produção."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Changes every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 mb-6">
            O Que Dizem
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="w-24 h-1 bg-[#00E5FF]"></div>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glassmorphism Card */}
          <div className="bg-[#020c1b]/40 border border-[#00E5FF]/20 backdrop-blur-md p-8 md:p-14 shadow-[0_0_40px_rgba(0,229,255,0.05)] text-center relative rounded-sm">
            <Quote className="w-12 h-12 text-[#00E5FF]/40 absolute top-8 left-8 md:top-12 md:left-12 rotate-180" />
            
            <div className="relative z-10 min-h-[200px] md:min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center w-full"
                >
                  <p className="text-lg md:text-2xl font-medium leading-relaxed text-neutral-200 italic mb-8 max-w-3xl">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-white text-base md:text-lg tracking-wide uppercase">
                        {testimonials[currentIndex].name}
                      </h4>
                      <span className="text-[#00E5FF] text-xs font-bold uppercase tracking-widest">
                        {testimonials[currentIndex].role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 h-1.5 ${
                    currentIndex === index 
                      ? "w-8 bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)]" 
                      : "w-2 bg-neutral-600 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
