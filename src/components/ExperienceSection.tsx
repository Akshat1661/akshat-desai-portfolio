import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 relative overflow-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/[0.08] hidden md:block" />

            <div className="space-y-10">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                  className="relative"
                >
                  {/* Timeline dot — desktop */}
                  <div className="absolute left-0 top-8 hidden md:flex">
                    <div className="w-16 h-16 bg-zinc-900 border border-white/[0.12] rounded-full flex items-center justify-center z-10">
                      <Briefcase size={20} className="text-white/40" />
                    </div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="md:ml-28 bg-zinc-950/80 border border-white/[0.09] rounded-2xl p-7 hover:border-white/[0.18] transition-all duration-300"
                  >
                    {/* Mobile icon */}
                    <div className="flex md:hidden items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-zinc-900 border border-white/[0.12] rounded-xl flex items-center justify-center">
                        <Briefcase size={16} className="text-white/40" />
                      </div>
                    </div>

                    {/* Header */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">
                      {exp.title}
                    </h3>
                    <p className="text-zinc-400 font-medium text-base mb-4">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-2 mb-5 pb-5 border-b border-white/[0.07]">
                      <Calendar size={14} className="text-zinc-600" />
                      <p className="text-zinc-500 text-sm">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <span className="text-white/20 font-medium text-sm flex-shrink-0 mt-0.5">→</span>
                          <p className="text-zinc-500 text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
