import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import type { PortfolioData } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";

type Project = PortfolioData["projects"][0];

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

// Neutral top accent line — same for all categories
const ACCENT: Record<string, string> = {
  "Thesis Project":                            "from-white/10 to-white/5",
  "AI Installation":                           "from-white/10 to-white/5",
  "Medical Research":                          "from-white/10 to-white/5",
  "Deep Learning":                             "from-white/10 to-white/5",
  "Industry ML":                               "from-white/10 to-white/5",
  "LLM Systems / Applied AI":                  "from-white/10 to-white/5",
  "Medical Imaging / Data Science":            "from-white/10 to-white/5",
  "Edge AI / Human-Centered AI":              "from-white/10 to-white/5",
  "Time-Series Forecasting / Energy Analytics": "from-white/10 to-white/5",
  "Applied ML / GenAI Dashboard":              "from-white/10 to-white/5",
  "Deep Learning / Medical Imaging":           "from-white/10 to-white/5",
};

// All pills use the same neutral gray — category shown by accent line only
const PILL = "bg-white/[0.06] text-white/45 border-white/[0.12]";

export const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accent = ACCENT[project.category] ?? "from-white/10 to-white/10";
  const pill   = PILL;
  const highlighted = project.performanceMetrics.filter(m => m.highlight);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32) }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -5 }}
        className="group relative cursor-pointer h-full"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/[0.015]" />

        <div className="relative h-full flex flex-col bg-zinc-950/80 backdrop-blur-xl border border-white/[0.09] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/[0.18] shadow-lg group-hover:shadow-xl group-hover:shadow-black/40">
          <div className={`h-px w-full bg-gradient-to-r ${accent} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

          {featured ? (
            /* Featured card — horizontal split on desktop */
            <div className="flex flex-col md:flex-row flex-1">
              <div className="flex flex-col flex-1 p-7 gap-4 md:border-r border-white/10">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${pill}`}>
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/20">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-white/90 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex-1" />

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10 font-medium">
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-white/40 border border-white/[0.1] font-medium">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-white/40 group-hover:text-white/70 transition-colors">
                    <span className="text-sm font-semibold">Explore Full Project</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white/80 transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Metrics panel */}
              <div className="md:w-64 shrink-0 p-7 flex flex-col">
                <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Key Metrics</p>
                <div className="grid grid-cols-2 gap-3 flex-1">
                  {project.performanceMetrics.slice(0, 4).map((m, i) => (
                    <div
                      key={i}
                      className={`rounded-xl p-3.5 border transition-colors ${
                        m.highlight
                          ? "bg-white/[0.06] border-white/[0.18]"
                          : "bg-white/[0.04] border-white/[0.09]"
                      }`}
                    >
                      <p className="text-xl font-black text-white leading-none">
                        {m.value}
                      </p>
                      <p className="text-xs text-white/35 mt-1.5 font-medium leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Regular card — vertical */
            <div className="flex flex-col flex-1 p-6 gap-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${pill}`}>
                  {project.category}
                </span>
                <span className="text-xs font-mono text-white/20">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug line-clamp-2 group-hover:text-white/90 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 -mt-1">
                {project.description}
              </p>

              {highlighted.length > 0 && (
                <div className={`grid gap-3 ${highlighted.slice(0, 2).length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                  {highlighted.slice(0, 2).map((m, i) => (
                    <div key={i} className="rounded-xl p-3 bg-white/5 border border-white/10">
                      <p className="text-xl font-black text-white leading-none">
                        {m.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 font-medium leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex-1" />

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((t, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10 font-medium">
                    {t}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-white/40 border border-white/[0.1] font-medium">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-1 text-white/40 group-hover:text-white/70 transition-colors">
                  <span className="text-xs font-semibold">View Details</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs font-semibold text-white/35 hover:text-white/75 transition-colors"
                  >
                    <Github size={12} />
                    Code
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
