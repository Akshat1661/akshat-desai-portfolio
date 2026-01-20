import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Layers, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";
import type { PortfolioData } from "@/data/portfolioData";

type Project = PortfolioData["projects"][0];

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glassmorphism Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />

              <div className="relative bg-slate-950/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-pink-400 to-transparent" />
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
                </div>

                {/* Header */}
                <div className="sticky top-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-8 rounded-t-3xl z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Cpu size={28} className="text-white" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                          {project.title}
                        </h2>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Close Button */}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/20 transition-colors flex-shrink-0"
                    >
                      <X size={20} className="text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-10">
                  {/* Performance Metrics Grid */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                      <h3 className="text-2xl font-bold text-white">Performance Metrics</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.performanceMetrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="group relative"
                        >
                          {/* Card Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                            {/* Metric Value - Large & Bold */}
                            <div className="mb-3">
                              <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {metric.value}
                              </p>
                            </div>

                            {/* Metric Label */}
                            <p className="text-gray-400 text-xs md:text-sm font-semibold mb-3">
                              {metric.label}
                            </p>

                            {/* Trend Indicator */}
                            <div className="flex items-center gap-1">
                              {metric.trend.includes("↑") || metric.trend.includes("↓") ? (
                                <>
                                  <TrendingUp size={14} className={metric.trend.includes("↑") ? "text-green-400" : "text-amber-400"} />
                                  <span className={`text-xs font-semibold ${metric.trend.includes("↑") ? "text-green-400" : "text-amber-400"}`}>
                                    {metric.trend}
                                  </span>
                                </>
                              ) : (
                                <span className="text-xs font-semibold text-blue-300">
                                  {metric.trend}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Flowchart - Block Diagram Style */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                      <h3 className="text-2xl font-bold text-white">System Architecture</h3>
                    </div>

                    {/* Wrapped Flow Diagram */}
                    <div className="flex flex-wrap justify-center items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                      {project.architectureDiagram.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center gap-4"
                        >
                          {/* Architecture Step - Block Card */}
                          <motion.div
                            whileHover={{ scale: 1.08, y: -5, boxShadow: "0 20px 25px -5px rgba(96, 165, 250, 0.3)" }}
                            className="group relative flex-shrink-0"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg px-5 py-3 hover:bg-white/15 hover:border-white/40 transition-all duration-300 whitespace-nowrap shadow-md">
                              <p className="text-xs md:text-sm font-bold text-blue-200 text-center">
                                {step}
                              </p>
                            </div>
                          </motion.div>

                          {/* Arrow Between Steps */}
                          {idx < project.architectureDiagram.length - 1 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.08 + 0.1 }}
                              className="flex-shrink-0 hidden sm:flex"
                            >
                              <ArrowRight size={24} className="text-blue-400" strokeWidth={2.5} />
                            </motion.div>
                          )}

                          {/* Mobile Arrow Down - Only show on very small screens when multiple rows */}
                          {idx < project.architectureDiagram.length - 1 && idx % 3 === 2 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.08 + 0.1 }}
                              className="flex-shrink-0 sm:hidden w-full text-center"
                            >
                              <ArrowDown size={24} className="text-blue-400 mx-auto" strokeWidth={2.5} />
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Architecture Flow Description */}
                    <p className="text-xs text-gray-500 mt-4 text-center italic">
                      Data flows sequentially through each component for optimal processing
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Layers size={20} className="text-blue-400" />
                      <h3 className="text-xl font-bold text-white">Technology Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-400/30 hover:border-blue-400/60 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Architecture Details */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu size={20} className="text-purple-400" />
                      <h3 className="text-xl font-bold text-white">Technical Implementation Details</h3>
                    </div>
                    <div className="space-y-4">
                      {project.technicalDetails.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.05 }}
                          className="relative pl-6"
                        >
                          {/* Gradient Line Indicator */}
                          <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                          
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {project.keyFeatures.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.05 }}
                          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="flex gap-3 items-start">
                            <span className="text-green-400 font-bold text-lg flex-shrink-0">✓</span>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-20 right-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 left-8 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};