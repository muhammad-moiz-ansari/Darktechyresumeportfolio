import { motion } from "motion/react";
import { ArrowUp, Heart, Code2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0e17] border-t border-cyan-500/20 overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-['Orbitron'] text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AlexNova
              </span>
            </div>
            <p className="font-['Space_Grotesk'] text-gray-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Orbitron'] text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-['Space_Grotesk'] text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-['Orbitron'] text-white mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Motion'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs font-['JetBrains_Mono'] text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Space_Grotesk'] text-gray-500 text-sm flex items-center gap-2">
            © 2026 Alex Nova. Made with{' '}
            <Heart size={14} className="text-red-500 inline animate-pulse" fill="currentColor" />
            {' '}and lots of coffee
          </p>
          
          <div className="flex items-center gap-4">
            <span className="font-['JetBrains_Mono'] text-xs text-gray-600">
              v1.0.0
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-shadow"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
