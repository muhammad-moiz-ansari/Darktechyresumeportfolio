import { motion } from "motion/react";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    company: "TechCorp Inc.",
    position: "Senior Full Stack Developer",
    period: "Jan 2023 - Present",
    location: "San Francisco, CA",
    description: "Leading development of cloud-native applications",
    achievements: [
      "Architected and deployed microservices handling 1M+ daily requests",
      "Reduced application load time by 65% through optimization",
      "Mentored team of 5 junior developers"
    ],
    techStack: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    logo: "🚀"
  },
  {
    company: "Digital Solutions Ltd",
    position: "Full Stack Developer",
    period: "Jun 2021 - Dec 2022",
    location: "New York, NY",
    description: "Developed enterprise web applications for Fortune 500 clients",
    achievements: [
      "Built custom CRM system serving 10,000+ users",
      "Implemented real-time analytics dashboard",
      "Improved test coverage from 45% to 90%"
    ],
    techStack: ["TypeScript", "Next.js", "GraphQL", "MongoDB"],
    logo: "💼"
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    period: "Jan 2020 - May 2021",
    location: "Remote",
    description: "Created responsive and accessible user interfaces",
    achievements: [
      "Redesigned product UI improving user engagement by 40%",
      "Established component library used across 5+ projects",
      "Led migration from Vue to React"
    ],
    techStack: ["React", "Tailwind", "Figma", "Jest"],
    logo: "⚡"
  }
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

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
    <div ref={cardRef} className="relative flex items-center mb-12">
      {/* Timeline Line and Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500 -z-10" />
      
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-20 shadow-[0_0_20px_rgba(0,217,255,0.5)]"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(0, 217, 255, 0.5)",
              "0 0 40px rgba(168, 85, 247, 0.8)",
              "0 0 20px rgba(0, 217, 255, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-full h-full rounded-full"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`w-full lg:w-[calc(50%-3rem)] ${isEven ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}
      >
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
          <div className="relative bg-[#161b22]/90 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
            {/* Company Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center text-4xl border border-cyan-500/30">
                {experience.logo}
              </div>
              <div className="flex-1">
                <h3 className="font-['Orbitron'] text-xl text-white mb-1">
                  {experience.position}
                </h3>
                <p className="font-['Space_Grotesk'] text-cyan-400 mb-2">
                  {experience.company}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span className="font-['JetBrains_Mono']">{experience.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-['Space_Grotesk'] text-gray-300 mb-4">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="font-['Space_Grotesk'] text-sm text-cyan-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="font-['Space_Grotesk'] text-gray-400 text-sm pl-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors"
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-['JetBrains_Mono'] text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0d1117] via-[#0a0e17] to-[#1a1f2e] overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-['JetBrains_Mono'] text-cyan-400 text-sm tracking-wider">
            {"<experience />"}
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl mt-4 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
