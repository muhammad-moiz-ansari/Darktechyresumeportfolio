import { motion } from "motion/react";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string;
  featured: boolean;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with ML-driven insights and predictive analytics. Handles 1M+ events per day with sub-second query performance.",
    image: "📊",
    techStack: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
    category: "Web App",
    featured: true,
    github: "#",
    live: "#"
  },
  {
    title: "Blockchain DeFi Platform",
    description: "Decentralized finance platform for crypto trading with smart contract integration and real-time market data.",
    image: "🪙",
    techStack: ["Next.js", "Solidity", "Web3.js", "Node.js"],
    category: "Blockchain",
    featured: true,
    github: "#",
    live: "#"
  },
  {
    title: "Social Media Automation Tool",
    description: "Multi-platform social media management tool with AI-powered content scheduling and analytics.",
    image: "📱",
    techStack: ["React", "Node.js", "MongoDB", "Redis"],
    category: "Web App",
    featured: true,
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Marketplace",
    description: "Full-featured marketplace with payment processing, inventory management, and seller analytics.",
    image: "🛒",
    techStack: ["Vue.js", "GraphQL", "Stripe", "AWS"],
    category: "Web App",
    featured: false,
    github: "#"
  },
  {
    title: "Developer Portfolio Builder",
    description: "No-code platform for developers to create stunning portfolio websites in minutes.",
    image: "🎨",
    techStack: ["React", "Tailwind", "Supabase"],
    category: "Tool",
    featured: false,
    github: "#",
    live: "#"
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable chat app with end-to-end encryption, file sharing, and video calls.",
    image: "💬",
    techStack: ["Socket.io", "WebRTC", "Express", "MongoDB"],
    category: "Web App",
    featured: false,
    github: "#"
  }
];

function ProjectCard({ project, index, isFeatured }: { project: Project; index: number; isFeatured: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative ${isFeatured ? 'md:col-span-1' : ''}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      <div className="relative h-full bg-[#161b22]/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center overflow-hidden">
          {/* Matrix effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
            <div className="font-['JetBrains_Mono'] text-cyan-400 text-xs leading-tight">
              {[...Array(20)].map((_, i) => (
                <div key={i}>
                  {Math.random().toString(36).substring(2, 15)}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-8xl z-10"
          >
            {project.image}
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent opacity-60" />
          
          {/* Category badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-xs font-['JetBrains_Mono'] text-cyan-400">
            {project.category}
          </div>

          {isFeatured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-xs font-['Space_Grotesk'] text-purple-400 flex items-center gap-1">
              <Sparkles size={12} />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-['Orbitron'] text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="font-['Space_Grotesk'] text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs font-['JetBrains_Mono'] text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.github && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-cyan-500/50 rounded-lg font-['Space_Grotesk'] text-sm text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <Github size={16} />
                Code
              </motion.button>
            )}
            {project.live && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-['Space_Grotesk'] text-sm text-white hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-shadow"
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Web App", "Blockchain", "Tool"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section className="relative py-24 bg-[#0a0e17] overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-['JetBrains_Mono'] text-cyan-400 text-sm tracking-wider">
            {"<projects />"}
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl mt-4 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4" />
          <p className="font-['Space_Grotesk'] text-gray-400 max-w-2xl mx-auto">
            Showcasing cutting-edge projects built with modern technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-['Space_Grotesk'] text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(0,217,255,0.5)]'
                  : 'bg-transparent border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-['Space_Grotesk'] text-2xl text-white mb-6 flex items-center gap-2"
            >
              <Sparkles size={20} className="text-purple-400" />
              Featured Projects
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isFeatured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-['Space_Grotesk'] text-2xl text-white mb-6 flex items-center gap-2"
            >
              <Code2 size={20} className="text-cyan-400" />
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index + featuredProjects.length}
                  isFeatured={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
