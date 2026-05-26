import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const chips = ["1st Place", "AWS", "Cal Poly DxHub", "Applied AI"];

export function HonorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="honors" className="py-20 px-6 md:px-20 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Honors &amp; Awards
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -3 }}
        >
          <div className="bg-zinc-950/80 border border-white/[0.09] rounded-2xl p-7 hover:border-white/[0.18] transition-all duration-300">
            {/* Label + year row */}
            <div className="flex items-center justify-between mb-5">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-white/45 border border-white/[0.1]">
                Award
              </span>
              <span className="text-zinc-600 text-xs font-medium">August 2025</span>
            </div>

            {/* Icon + title */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-white/[0.05] border border-white/[0.09] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <Trophy size={18} className="text-white/35" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug mb-1">
                  1st Place — CSU AI Summer Camp Hackathon
                </h3>
                <p className="text-zinc-500 text-sm">
                  Cal Poly Digital Transformation Hub · Amazon Web Services (AWS)
                </p>
              </div>
            </div>

            {/* Association */}
            <p className="text-zinc-600 text-xs mb-5 pl-14">
              Associated with California State University, Fullerton
            </p>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 pl-14">
              Won 1st place at the CSU AI Summer Camp Hackathon, hosted by the Cal Poly Digital Transformation Hub in partnership with AWS. Built an AI-powered campus dining staffing dashboard using XGBoost, Flask, AWS Bedrock, LangChain, and LangGraph to forecast demand, explain predictions, and optimize labor allocation.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 pl-14">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.05] text-white/40 border border-white/[0.09]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
