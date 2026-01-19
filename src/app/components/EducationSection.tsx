import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Education {
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
  honors: string[];
  coursework: string[];
  logo: string;
}

const education: Education[] = [
  {
    institution: "Massachusetts Institute of Technology",
    degree: "Master of Science",
    major: "Computer Science",
    period: "2018 - 2020",
    gpa: "3.9/4.0",
    honors: ["Dean's List", "Outstanding Graduate Award"],
    coursework: [
      "Advanced Algorithms",
      "Distributed Systems",
      "Machine Learning",
      "Computer Graphics",
      "Database Systems"
    ],
    logo: "🎓"
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science",
    major: "Software Engineering",
    period: "2014 - 2018",
    gpa: "3.8/4.0",
    honors: ["Summa Cum Laude", "Hackathon Winner 2017"],
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Web Development",
      "Software Architecture",
      "Mobile Development"
    ],
    logo: "🏛️"
  }
];

function EducationCard({ edu, index }: { edu: Education; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Holographic border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative bg-[#161b22]/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden">
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        />

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center text-5xl border-2 border-cyan-500/30 shadow-[0_0_20px_rgba(0,217,255,0.3)]"
            >
              {edu.logo}
            </motion.div>
            <div className="flex-1">
              <h3 className="font-['Orbitron'] text-xl text-white mb-1">
                {edu.degree}
              </h3>
              <p className="font-['Space_Grotesk'] text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {edu.major}
              </p>
              <p className="font-['Space_Grotesk'] text-gray-400 mb-1">
                {edu.institution}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1 font-['JetBrains_Mono']">
                  <Calendar size={14} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1 font-['JetBrains_Mono']">
                  <Award size={14} />
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>
          </div>

          {/* Honors */}
          <div className="mb-4">
            <h4 className="font-['Space_Grotesk'] text-sm text-cyan-400 mb-2 flex items-center gap-2">
              <GraduationCap size={16} />
              Honors & Awards
            </h4>
            <div className="flex flex-wrap gap-2">
              {edu.honors.map((honor, i) => (
                <motion.span
                  key={honor}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs font-['Space_Grotesk'] text-purple-300"
                >
                  {honor}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Expandable Coursework */}
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
            >
              <span className="font-['Space_Grotesk'] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                Relevant Coursework
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2 pt-2">
                {edu.coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 text-sm text-gray-400 font-['Space_Grotesk']"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full" />
                    {course}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  return (
    <section className="relative py-24 bg-[#0a0e17] overflow-hidden">
      {/* Binary Rain Background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-['JetBrains_Mono'] text-xs"
            style={{
              left: `${i * 5}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '120vh'],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
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
            {"<education />"}
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl mt-4 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Academic Excellence
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
