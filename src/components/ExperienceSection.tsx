import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
        >
          Work <span className="text-blue-400">Experience</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block shadow-lg shadow-blue-500/50" />

            {/* Experience Items */}
            <div className="space-y-16">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.title}-${index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="absolute left-0 top-10 hidden md:flex">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-slate-950 shadow-2xl shadow-blue-500/50 z-10"
                    >
                      <Briefcase size={28} className="text-white" />
                    </motion.div>
                    {/* Pulsing Ring Effect */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 w-16 h-16 bg-blue-500/30 rounded-full"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-32">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      {/* Glassmorphism Background with Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                        </div>

                        {/* Mobile Icon */}
                        <div className="flex md:hidden items-center gap-3 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                            <Briefcase size={24} className="text-white" />
                          </div>
                        </div>

                        {/* Header */}
                        <div className="relative z-10">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {exp.title}
                          </h3>
                          
                          <p className="text-blue-400 font-bold text-lg md:text-xl mb-4">
                            {exp.company}
                          </p>

                          {/* Period with Icon */}
                          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                            <Calendar size={18} className="text-blue-300" />
                            <p className="text-blue-300 text-sm font-semibold">
                              {exp.period}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 text-base leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          {/* Key Achievements/Responsibilities */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-bold text-white/80 uppercase tracking-wide mb-3">
                              Key Achievements
                            </h4>
                            {exp.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="flex gap-3 items-start"
                              >
                                <CheckCircle size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  {achievement}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};