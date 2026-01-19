import { motion } from "motion/react";
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { useRef } from "react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  badge: string;
  color: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    credentialId: "AWS-123456",
    badge: "☁️",
    color: "from-orange-400 to-red-500"
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "Oct 2023",
    credentialId: "GCP-789012",
    badge: "🌐",
    color: "from-blue-400 to-cyan-500"
  },
  {
    name: "Kubernetes Administrator",
    issuer: "CNCF",
    date: "Aug 2023",
    credentialId: "CKA-345678",
    badge: "⚙️",
    color: "from-cyan-400 to-blue-600"
  },
  {
    name: "React Advanced Certification",
    issuer: "Meta",
    date: "Jun 2023",
    credentialId: "META-901234",
    badge: "⚛️",
    color: "from-cyan-300 to-blue-500"
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "Apr 2023",
    credentialId: "MDB-567890",
    badge: "🍃",
    color: "from-green-400 to-emerald-600"
  },
  {
    name: "Cybersecurity Specialist",
    issuer: "CompTIA",
    date: "Feb 2023",
    credentialId: "SEC-234567",
    badge: "🔒",
    color: "from-purple-400 to-pink-500"
  }
];

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group cursor-pointer"
    >
      <div className="relative h-full">
        {/* Glowing effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
        
        <div className="relative h-full bg-[#161b22]/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300 overflow-hidden">
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />

          <div className="relative p-6 flex flex-col items-center text-center h-full">
            {/* Badge */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className={`w-24 h-24 rounded-full bg-gradient-to-br ${cert.color} p-1 mb-4 shadow-lg`}
            >
              <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center border-2 border-cyan-500/30">
                <span className="text-5xl">{cert.badge}</span>
              </div>
            </motion.div>

            {/* Content */}
            <h3 className="font-['Orbitron'] text-lg text-white mb-2 min-h-[3.5rem] flex items-center">
              {cert.name}
            </h3>
            
            <p className="font-['Space_Grotesk'] text-cyan-400 text-sm mb-2">
              {cert.issuer}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-['JetBrains_Mono']">
              <CheckCircle size={12} className="text-green-400" />
              Earned {cert.date}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-700/50 w-full">
              <div className="text-xs text-gray-500 mb-2 font-['JetBrains_Mono']">
                Credential ID
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-cyan-400 font-['JetBrains_Mono']">
                  {cert.credentialId}
                </span>
                <ExternalLink size={12} className="text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0d1117] via-[#0a0e17] to-[#1a1f2e] overflow-hidden">
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 217, 255, 0.1) 35px, rgba(0, 217, 255, 0.1) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(168, 85, 247, 0.1) 35px, rgba(168, 85, 247, 0.1) 70px)
          `
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
            {"<certifications />"}
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl mt-4 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4" />
          <p className="font-['Space_Grotesk'] text-gray-400 max-w-2xl mx-auto">
            Continuously expanding expertise through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certification Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.credentialId} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Certifications", value: "6+" },
            { label: "Training Hours", value: "500+" },
            { label: "Platforms", value: "10+" },
            { label: "Success Rate", value: "100%" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center p-6 rounded-xl bg-[#161b22]/50 border border-cyan-500/20"
            >
              <div className="font-['Orbitron'] text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="font-['Space_Grotesk'] text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
