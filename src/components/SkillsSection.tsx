import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

type SkillCategory = keyof typeof portfolioData.skills;

export const SkillsSection = () => {
  const categories = Object.keys(portfolioData.skills) as SkillCategory[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-20 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Technical <span className="text-blue-400">Arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {portfolioData.skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-blue-500/10 text-blue-300 border border-blue-400/20 hover:bg-blue-500/20 hover:text-white hover:border-blue-400/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};