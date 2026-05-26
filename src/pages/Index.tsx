import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HonorsSection } from "@/components/HonorsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ContactSection } from "@/components/ContactSection";
import { portfolioData } from "@/data/portfolioData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AboutSection />
        <div id="skills">
          <SkillsSection />
        </div>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 md:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-6">
            {/* Featured thesis project — full width */}
            <ProjectCard project={portfolioData.projects[0]} index={0} featured />

            {/* Remaining projects — 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.slice(1).map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx + 1} />
              ))}
            </div>
          </div>
        </section>

        <ExperienceSection />
        <HonorsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
