import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";
import { CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Envia o e-mail diretamente (por baixo dos panos) usando a API gratuita do FormSubmit
      await fetch("https://formsubmit.co/ajax/adonisruis07@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nome: formData.name,
            Email: formData.email,
            Mensagem: formData.message,
            _subject: `Novo Contato do Site: ${formData.name}`,
            _template: "box"
        })
      });

      // Sucesso
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reseta a mensagem de sucesso após 8 segundos
      setTimeout(() => setIsSuccess(false), 8000);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setIsSubmitting(false);
      // Fallback para mailto caso a API falhe
      const subject = encodeURIComponent(`Contato pelo site: ${formData.name}`);
      const body = encodeURIComponent(`Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`);
      window.location.href = `mailto:adonisruis07@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <footer id="contact" className="py-32 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start"
        >
          {/* Coluna de Texto e Redes */}
          <div className="flex flex-col text-left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
              <span>Vamos construir</span><br /> <span>algo </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">juntos?</span>
            </h2>
            <p className="max-w-md text-xl text-neutral-400 font-medium mb-12">
              Entre em contato para discutir oportunidades, arquitetura de software ou segurança em aplicações.
            </p>
            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="smoke-effect-wrapper self-start mb-16"
            >
              <a
                href="https://wa.me/5591987054880"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metallic group relative inline-flex items-center justify-center px-10 py-5 bg-[#00E5FF]/10 backdrop-blur-xl border border-[#00E5FF]/40 text-[#00E5FF] text-lg md:text-xl font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(0,229,255,0.2)] hover:shadow-[0_8px_32px_rgba(0,229,255,0.5)] hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/60"
              >
                <span className="relative z-20 group-hover:text-white transition-colors duration-300">Iniciar Conversa no WhatsApp</span>
                <div className="absolute inset-0 h-full w-0 bg-[#00E5FF]/30 backdrop-blur-md transition-all duration-300 ease-out group-hover:w-full z-0"></div>
              </a>
            </motion.div>

            <div className="flex flex-col gap-6 w-full mt-auto">
              <span className="text-sm font-bold tracking-widest uppercase text-[#00E5FF] border-b border-white/10 pb-2 max-w-[200px]">
                Redes Sociais
              </span>
              <div className="flex flex-wrap items-center gap-8">
                {personalInfo.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                    >
                      <Icon className="w-8 h-8 group-hover:-translate-y-1 transition-transform text-neutral-500 group-hover:text-[#00E5FF]" />
                      <span className="text-lg font-normal uppercase tracking-widest hidden sm:inline-block">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div className="w-full lg:pl-10">
            <div 
              className="flex flex-col p-8 md:p-10 bg-[#050505]/80 border border-white/10 rounded-2xl backdrop-blur-xl relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] min-h-[500px]"
            >
              {/* Efeito de brilho de fundo no card do formulário */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center h-full flex-grow text-center gap-4 absolute inset-0 px-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mb-2 border border-[#00E5FF]/40 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                      <CheckCircle className="w-10 h-10 text-[#00E5FF]" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-widest text-white">Enviado!</h3>
                    <p className="text-neutral-400 text-lg font-medium">
                      Muito obrigado pelo seu tempo.<br />Entraremos em contato.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6 w-full h-full"
                    onSubmit={handleSubmit}
                  >
                    <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Envie uma mensagem</h3>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm text-neutral-400 uppercase tracking-widest font-semibold">Nome</label>
                      <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/60 focus:bg-black transition-colors" 
                        placeholder="Como posso te chamar?" 
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm text-neutral-400 uppercase tracking-widest font-semibold">E-mail</label>
                      <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/60 focus:bg-black transition-colors" 
                        placeholder="seu@melhoremail.com" 
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm text-neutral-400 uppercase tracking-widest font-semibold">Mensagem</label>
                      <textarea 
                        id="message"
                        rows={5} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/60 focus:bg-black transition-colors resize-none" 
                        placeholder="Descreva seu projeto ou dúvida..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-metallic mt-4 group relative inline-flex items-center justify-center px-8 py-5 bg-[#00E5FF]/10 backdrop-blur-xl border border-[#00E5FF]/40 text-[#00E5FF] text-lg font-bold uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/60 hover:shadow-[0_8px_32px_rgba(0,229,255,0.3)] w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-20 group-hover:text-white transition-colors duration-300">
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      </span>
                      <div className="absolute inset-0 h-full w-0 bg-[#00E5FF]/30 backdrop-blur-md transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
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

