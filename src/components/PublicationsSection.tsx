import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { FileText, ExternalLink, BookOpen, Award } from "lucide-react";

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
        >
          Research & <span className="text-blue-400">Publications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {portfolioData.publications.map((pub, index) => (
            <motion.div
              key={`${pub.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group relative h-full"
            >
              {/* Glassmorphism Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-pink-400 to-transparent" />
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with Icon and Status */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 20 }}
                      transition={{ duration: 0.4 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 relative"
                    >
                      <BookOpen size={32} className="text-white" />
                      {/* Sparkle Effect */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-400/30 rounded-2xl"
                      />
                    </motion.div>
                    
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-green-400" />
                      <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-400/50 shadow-lg">
                        {pub.status}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-5 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {pub.title}
                  </h3>

                  {/* Conference Badge */}
                  <div className="flex items-center gap-2 mb-6 pb-5 border-b border-white/10">
                    <FileText size={18} className="text-blue-400" />
                    <p className="text-blue-300 font-bold text-sm">
                      {pub.conference}
                    </p>
                  </div>

                  {/* Year and Co-Authors */}
                  <p className="text-gray-500 text-xs mb-4">
                    <span className="text-gray-400 font-semibold">{pub.year}</span> • Co-authors: {pub.coAuthors}
                  </p>

                  {/* Research Highlights */}
                  <div className="space-y-2 mb-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-gray-500 text-xs">Peer-reviewed research</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      viewport={{ once: false, amount: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-gray-500 text-xs">{pub.citations} citations</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: false, amount: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span className="text-gray-500 text-xs">Deep learning & computer vision</span>
                    </motion.div>
                  </div>

                  {/* View Paper Button */}
                  <div className="mt-auto">
                    {pub.link !== "#" ? (
                      <motion.a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 text-white font-bold text-sm rounded-xl border border-blue-400/50 hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40 hover:border-blue-400/70 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                      >
                        <ExternalLink size={18} />
                        View Full Paper
                      </motion.a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-500/10 text-gray-500 font-bold text-sm rounded-xl border border-gray-500/30 cursor-not-allowed">
                        <FileText size={18} />
                        Link Coming Soon
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute bottom-8 left-8 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};