import { motion } from "motion/react";
import { Code2, Database, Layers, Wrench, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: "React", level: 95, icon: <Code2 />, category: "Frontend" },
  { name: "TypeScript", level: 90, icon: <Code2 />, category: "Frontend" },
  { name: "Next.js", level: 88, icon: <Code2 />, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, icon: <Layers />, category: "Frontend" },
  { name: "Node.js", level: 85, icon: <Database />, category: "Backend" },
  { name: "PostgreSQL", level: 80, icon: <Database />, category: "Backend" },
  { name: "MongoDB", level: 82, icon: <Database />, category: "Backend" },
  { name: "GraphQL", level: 78, icon: <Zap />, category: "Backend" },
  { name: "Docker", level: 75, icon: <Wrench />, category: "Tools" },
  { name: "Git", level: 90, icon: <Wrench />, category: "Tools" },
  { name: "AWS", level: 70, icon: <Wrench />, category: "Tools" },
  { name: "Figma", level: 85, icon: <Layers />, category: "Tools" },
  { name: "Leadership", level: 88, icon: <Users />, category: "Soft Skills" },
  { name: "Communication", level: 92, icon: <Users />, category: "Soft Skills" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      <div className="relative bg-[#161b22]/80 backdrop-blur-xl p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
            {skill.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-['Space_Grotesk'] text-white">{skill.name}</h3>
            <p className="font-['JetBrains_Mono'] text-xs text-gray-500">{skill.category}</p>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="flex items-center justify-center">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="rgba(100, 100, 100, 0.2)"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="48"
                cy="48"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                animate={
                  isVisible
                    ? {
                        strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100),
                      }
                    : {}
                }
                transition={{ duration: 1.5, delay: index * 0.05 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d9ff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="font-['Orbitron'] text-xl text-cyan-400"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.05 + 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const categories = ["Frontend", "Backend", "Tools", "Soft Skills"];

  return (
    <section className="relative py-24 bg-[#0a0e17] overflow-hidden">
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 40% 20%, rgba(0, 217, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-['JetBrains_Mono'] text-cyan-400 text-sm tracking-wider">
            {"<skills />"}
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl mt-4 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="font-['Space_Grotesk'] text-2xl text-white mb-6 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              {category}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={catIndex * 4 + index}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
