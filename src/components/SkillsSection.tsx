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
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-white/[0.09] bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:border-white/[0.18]"
            >
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-5">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/[0.05] text-white/60 border border-white/[0.09] hover:bg-white/[0.1] hover:text-white/85 transition-colors"
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
