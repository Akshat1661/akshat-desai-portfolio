import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { PortfolioData } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";

type Project = PortfolioData["projects"][0];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ scale: 1.05, y: -8 }}
        className="group relative h-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Glassmorphism Background with Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full overflow-hidden hover:border-white/40 transition-colors duration-300 shadow-lg group-hover:shadow-2xl">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink-400/20 to-transparent blur-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 flex-1">
                {project.title}
              </h3>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex-shrink-0 ml-2"
              >
                <ChevronRight size={24} className="text-blue-400 group-hover:text-purple-400 transition-colors" />
              </motion.div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mb-6 space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-400 text-xs leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200 border border-blue-400/30 hover:border-blue-400/60 transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* View Architecture Button */}
            <motion.div
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-purple-400 transition-colors mt-2"
            >
              View Architecture
              <ChevronRight size={16} />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};