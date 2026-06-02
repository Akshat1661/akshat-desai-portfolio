import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Layers, GitBranch, Github } from "lucide-react";
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-zinc-950 border border-white/[0.1] rounded-2xl shadow-2xl">
                {/* Single thin top rule */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.1] rounded-t-2xl" />

                {/* Header */}
                <div className="sticky top-0 bg-zinc-950/98 backdrop-blur-xl border-b border-white/[0.08] px-8 py-6 rounded-t-2xl z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Cpu size={18} className="text-white/50" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-2">
                          {project.title}
                        </h2>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white/70 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg transition-colors"
                        >
                          <Github size={13} />
                          View on GitHub
                        </a>
                      )}
                      <button
                        onClick={onClose}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors"
                      >
                        <X size={16} className="text-white/60" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 py-8 space-y-10">

                  {/* Performance Metrics */}
                  <div>
                    <h3 className="text-base font-semibold text-white/70 uppercase tracking-widest text-xs mb-5">
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {project.performanceMetrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className={`border rounded-xl p-5 transition-colors duration-200 ${
                            metric.highlight
                              ? "bg-white/[0.06] border-white/[0.18]"
                              : "bg-white/[0.03] border-white/[0.09] hover:bg-white/[0.06] hover:border-white/[0.15]"
                          }`}
                        >
                          <p className="text-3xl md:text-4xl font-black text-white mb-2 leading-none">
                            {metric.value}
                          </p>
                          <p className="text-white/45 text-xs font-medium mb-1.5">
                            {metric.label}
                          </p>
                          <p className="text-white/25 text-xs">
                            {metric.trend}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* System Architecture */}
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <GitBranch size={14} className="text-white/30" />
                      <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                        System Architecture
                      </h3>
                    </div>

                    {Array.isArray(project.architectureDiagram) && project.architectureDiagram.length > 0 ? (
                      <div className="p-6 bg-white/[0.02] rounded-xl border border-white/[0.08]">
                        <div className="flex flex-col items-center max-w-2xl mx-auto">
                          {project.architectureDiagram.map((step, idx) => {
                            const total = project.architectureDiagram.length;

                            const bracketMatch = step.match(/^(.*?)\s*\[(.+)\]$/);
                            const mainLabel = bracketMatch ? bracketMatch[1].trim() : step;
                            const subDetail = bracketMatch ? bracketMatch[2].trim() : null;

                            return (
                              <div key={idx} className="flex flex-col items-center w-full">
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="w-full flex items-start gap-3 border border-white/[0.09] rounded-xl px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.16] transition-all duration-150"
                                >
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-white/[0.12] bg-white/[0.05] text-[10px] font-bold text-white/30 flex items-center justify-center mt-0.5">
                                    {idx + 1}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white/75 leading-snug">
                                      {mainLabel}
                                    </p>
                                    {subDetail && (
                                      <p className="text-xs text-white/35 mt-0.5 leading-relaxed">
                                        {subDetail}
                                      </p>
                                    )}
                                  </div>
                                </motion.div>

                                {idx < total - 1 && (
                                  <div className="w-px h-4 bg-white/[0.1] my-0.5" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 bg-white/[0.03] rounded-xl border border-white/[0.08] text-center">
                        <p className="text-white/30 text-sm italic">No architecture diagram available.</p>
                      </div>
                    )}
                  </div>

                  {/* Technology Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Layers size={14} className="text-white/30" />
                      <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                        Technology Stack
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.03 }}
                          className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-white/[0.05] text-white/55 border border-white/[0.09] hover:bg-white/[0.09] hover:text-white/75 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu size={14} className="text-white/30" />
                      <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                        Technical Implementation
                      </h3>
                    </div>
                    <div className="space-y-3 border-l border-white/[0.08] pl-5">
                      {project.technicalDetails.map((detail, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.04 }}
                          className="text-white/50 text-sm leading-relaxed"
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-4">
                      Key Achievements
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {project.keyFeatures.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.04 }}
                          className="flex gap-3 items-start px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] transition-colors"
                        >
                          <span className="text-white/25 font-medium text-sm flex-shrink-0 mt-0.5">→</span>
                          <p className="text-white/55 text-sm leading-relaxed">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
