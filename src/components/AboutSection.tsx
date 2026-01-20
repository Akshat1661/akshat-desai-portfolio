import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Sparkles, Leaf } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'M.S. Computer Science, California State University Fullerton (2024-2026)',
  },
  {
    icon: Briefcase,
    title: 'Current Role',
    description: 'Graduate Research Assistant & Lead AI Developer',
  },
  {
    icon: Sparkles,
    title: 'Focus Areas',
    description: 'Deep Learning, Computer Vision, Medical AI, LLM Systems',
  },
  {
    icon: Leaf,
    title: 'Interests',
    description: 'AI for Healthcare, Sustainability Tech, Smart Cities',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-background-secondary">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            I'm a passionate AI engineer with a focus on building intelligent systems that solve real-world problems. 
            Currently pursuing my Master's at Cal State Fullerton, I combine academic research with hands-on 
            development to create impactful solutions in medical imaging, computer vision, and generative AI.
          </p>
        </motion.div>

        {/* Bio Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">Professional Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a <strong className="text-foreground">Lead AI Developer</strong> at Worthwhile Adventures LLC, 
                I'm building proximity-aware LLM agents with adaptive personality modes and hardware integration.
              </p>
              <p>
                My research experience at <strong className="text-foreground">CSUF</strong> includes processing 
                1,231+ MRI scans for Alzheimer's detection (85.45% accuracy) and developing AI-powered EDA assistants.
              </p>
              <p>
                Previously at <strong className="text-foreground">ISRO (Indian Space Research Organisation)</strong>, 
                I implemented automated focusing and exposure control systems for satellite imaging.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">What Drives Me</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I believe AI should be a force for good. My work in <strong className="text-foreground">medical imaging</strong> aims 
                to democratize early disease detection and improve patient outcomes.
              </p>
              <p>
                I'm fascinated by the intersection of <strong className="text-foreground">sustainability and technology</strong>—from 
                waste detection systems to solar power forecasting pipelines.
              </p>
              <p>
                My hackathon wins (including 1st Place at CSU Generative AI Hackathon) reflect my passion for 
                rapid prototyping and innovative problem-solving.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 rounded-xl card-hover text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
