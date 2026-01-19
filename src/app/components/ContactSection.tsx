import { motion } from "motion/react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: <Github size={24} />, label: "GitHub", href: "#", color: "from-gray-400 to-gray-600" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "#", color: "from-blue-400 to-blue-600" },
    { icon: <Twitter size={24} />, label: "Twitter", href: "#", color: "from-cyan-400 to-blue-500" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0d1117] via-[#0a0e17] to-[#1a1f2e] overflow-hidden">
      {/* Particle Network Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
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
          className="text-center mb-16"
        >
          <span className="font-['JetBrains_Mono'] text-cyan-400 text-sm tracking-wider">
            {"<contact />"}
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl mt-4 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4" />
          <p className="font-['Space_Grotesk'] text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-['Orbitron'] text-2xl text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22]/50 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-['Space_Grotesk'] text-sm text-gray-400">Email</p>
                    <p className="font-['JetBrains_Mono'] text-white">alex.nova@email.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22]/50 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-['Space_Grotesk'] text-sm text-gray-400">Location</p>
                    <p className="font-['Space_Grotesk'] text-white">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-['Space_Grotesk'] text-lg text-white mb-4">
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`} />
                    <div className="relative w-14 h-14 rounded-full bg-[#161b22] border border-cyan-500/30 group-hover:border-cyan-500/60 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hidden lg:block mt-12 w-64 h-64 rounded-full border-2 border-dashed border-cyan-400/20"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-20 blur" />
              <form
                onSubmit={handleSubmit}
                className="relative bg-[#161b22]/90 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/30 space-y-6"
              >
                <div>
                  <label className="block font-['Space_Grotesk'] text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-lg font-['Space_Grotesk'] text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-['Space_Grotesk'] text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-lg font-['Space_Grotesk'] text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-['Space_Grotesk'] text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-lg font-['Space_Grotesk'] text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block font-['Space_Grotesk'] text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-lg font-['Space_Grotesk'] text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-['Orbitron'] text-white flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-['Space_Grotesk'] text-green-400 text-sm"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
