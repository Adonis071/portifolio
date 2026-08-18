import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Projetos em Destaque</h2>
            <p className="text-neutral-600 max-w-2xl">
              Uma seleção de trabalhos recentes. Cada projeto foi desenvolvido com atenção rigorosa aos detalhes e práticas de desenvolvimento seguro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-between p-6 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{project.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                    aria-label={`Ver código fonte de ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                    aria-label={`Visitar projeto ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visitar</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
