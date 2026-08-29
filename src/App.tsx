/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorSmoke from './components/CursorSmoke';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPosition = window.innerHeight + scrollY;
      const bodyHeight = document.documentElement.scrollHeight;
      
      // Update global scroll variable for metallic effect
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
      
      // Show button only when near the bottom (within 50px of the bottom)
      if (scrollPosition >= bodyHeight - 50) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#00E5FF]/30 selection:text-white overflow-x-hidden">
      {/* Global Technological Background Image with Parallax */}
      <motion.div 
        className="fixed inset-x-0 top-0 h-[120vh] z-0 pointer-events-none bg-[#020c1b]"
        style={{ y: backgroundY }}
      >
        <AnimatePresence>
          {!bgLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
            >
              {/* Animated pulse gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#020c1b] via-[#0a1930] to-[#020c1b] animate-pulse"></div>
              {/* Technological grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00E5FF15_1px,transparent_1px),linear-gradient(to_bottom,#00E5FF15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: bgLoaded ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80"
          alt="Technological Background"
          loading="lazy"
          onLoad={() => setBgLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/40 to-blue-950/90"></div>
      </motion.div>

      <CursorSmoke />

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Testimonials />
          <FAQ />
        </main>
        <Contact />
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="smoke-effect-wrapper">
              <button
                onClick={scrollToTop}
                className="btn-metallic p-4 bg-gradient-to-br from-[#00E5FF]/20 to-[#00E5FF]/5 backdrop-blur-2xl border-t border-l border-[#00E5FF]/60 border-b border-r border-[#00E5FF]/20 text-[#00E5FF] rounded-full shadow-[0_8px_32px_rgba(0,229,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,229,255,0.5),inset_0_1px_1px_rgba(255,255,255,0.5)] hover:bg-[#00E5FF]/20 hover:-translate-y-1 transition-all duration-300"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-6 h-6 relative z-20 hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


