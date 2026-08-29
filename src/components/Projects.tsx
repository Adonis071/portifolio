import { motion } from "motion/react";
import { projects } from "../data";
import { ArrowRight, MapPin } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Projetos em Destaque
            </h2>
            <div className="w-24 h-1 bg-[#00E5FF]"></div>
          </div>

          <div className="flex flex-col gap-16 md:gap-24 pb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -200 : 200,
                  rotate: index % 2 === 0 ? -360 : 360,
                  scale: 0.5
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  rotate: 0,
                  scale: 1
                }}
                viewport={{ once: false, margin: "0px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full max-w-5xl mx-auto"
              >
                <article
                  className="group relative w-full aspect-[4/3] md:aspect-[16/9] bg-white/5 border border-white/10 overflow-hidden cursor-pointer block backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-[#00E5FF]/30"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                  
                  {/* Play Icon Placeholder (like reference) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#00E5FF] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 z-20">
                    <ArrowRight className="w-8 h-8 text-[#020c1b]" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      
                      <div className="text-[#00E5FF] font-bold text-sm uppercase tracking-widest mb-4">
                        {project.technologies.join(" • ")}
                      </div>
                      
                      <div className="flex items-center gap-2 text-neutral-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <MapPin className="w-4 h-4" />
                        <span>{project.githubUrl ? "Repositório Disponível" : "Projeto Fechado"}</span>
                      </div>

                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hover:text-[#00E5FF]"
                      >
                        Ler Case <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

