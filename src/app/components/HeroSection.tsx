import { motion } from "motion/react";
import { ChevronRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e17] via-[#0d1117] to-[#1a1f2e]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-cyan-400 font-['JetBrains_Mono'] text-sm tracking-wider">
                {"<hello_world />"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-['Orbitron'] text-5xl md:text-7xl leading-tight"
            >
              <span className="text-white">I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Alex Nova
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl text-gray-300">
                Full Stack Developer & UI/UX Designer
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-['Space_Grotesk'] text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              Crafting digital experiences with cutting-edge technologies. 
              Specializing in React, Node.js, and creating beautiful, 
              performant web applications that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-['Space_Grotesk'] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]">
                <span className="relative z-10 flex items-center gap-2 text-white">
                  View Projects
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-lg font-['Space_Grotesk'] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2 text-cyan-400 group-hover:text-white transition-colors">
                  <Download size={20} />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-8"
              >
                <div className="w-full h-full rounded-full border-2 border-cyan-400/30 border-dashed" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-12"
              >
                <div className="w-full h-full rounded-full border-2 border-purple-500/30 border-dotted" />
              </motion.div>

              {/* Glowing Avatar Container */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 217, 255, 0.3)",
                    "0 0 60px rgba(168, 85, 247, 0.4)",
                    "0 0 20px rgba(0, 217, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { icon: "⚛️", pos: "top-0 right-0" },
                { icon: "🚀", pos: "bottom-0 left-0" },
                { icon: "⚡", pos: "top-1/4 -left-8" },
                { icon: "💻", pos: "bottom-1/4 -right-8" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.pos} text-4xl`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
