import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Hero = () => {
  const hero = portfolioData.hero;

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 relative overflow-hidden"
    >
      {/* Barely-visible radial ambient light */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_60%_45%_at_50%_30%,_hsl(220_10%_7%)_0%,_transparent_100%)]" />
      {/* One very faint slow-drifting orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-white/[0.008] blur-[160px] animate-slow-drift pointer-events-none -z-10" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[11px] font-semibold text-white/30 tracking-[0.25em] uppercase mb-5"
        >
          AI/ML Engineer · LLM Systems · Applied ML
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-5 leading-none sm:whitespace-nowrap"
        >
          {hero.name}
        </motion.h1>

        {/* Main headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-lg md:text-xl text-white/65 font-medium mb-4 leading-snug"
        >
          Building AI systems that work beyond clean demos.
        </motion.p>

        {/* Short subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="text-sm md:text-base text-white/35 font-light mb-8 max-w-md mx-auto leading-relaxed"
        >
          I build practical AI tools across LLM systems, computer vision, medical imaging, forecasting, and deployment.
        </motion.p>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-8 h-px bg-white/12 mx-auto mb-8"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="relative z-50 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={hero.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 active:bg-white/80 transition-all duration-150 hover:-translate-y-0.5"
          >
            <Download size={15} />
            Download Resume
          </a>
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 text-white/55 text-sm font-semibold rounded-lg hover:bg-white/[0.04] hover:border-white/30 hover:text-white/75 transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
