import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ContactSection } from "@/components/ContactSection";
import { portfolioData } from "@/data/portfolioData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div id="skills">
          <SkillsSection />
        </div>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 md:px-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <ExperienceSection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;