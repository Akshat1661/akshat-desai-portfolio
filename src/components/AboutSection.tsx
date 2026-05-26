import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const chips = ["Debugging", "Reliable AI Systems", "Real-World Deployment"];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 pt-28 px-6 md:px-20 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[11px] font-semibold text-white/25 tracking-[0.25em] uppercase mb-5">
            About
          </p>
          <div className="section-divider mb-0 mx-0 w-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-10"
        >
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            I've been the person people come to when something breaks on a computer since I was a kid. Gaming, building PCs, fixing Windows issues, tuning settings, and debugging random errors pushed me toward what I do now: building AI systems that work outside a clean demo.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            I'm an M.S. Computer Science student at CSU Fullerton focused on AI/ML engineering, LLM systems, computer vision, medical imaging, and MLOps. I'm most interested in the space where models meet real software: data pipelines, APIs, inference, evaluation loops, deployment, debugging, and user-facing tools.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            I like practical AI systems where reliability matters: outputs need to be tested, latency needs to be reasonable, memory needs to fit, and users should not need to understand the backend to get value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-white/[0.05] text-white/40 border border-white/[0.09]"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
