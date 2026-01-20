import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectModal, type Project } from './ProjectModal';

const projects: Project[] = [
  {
    title: 'Alzheimer\'s Disease MRI Classification',
    description: 'Processed 1,231 MRI scans on SLURM/HPC, improving AD/MCI/CN classification accuracy to 85.45% from 69.11% using deep learning and radiomic features.',
    fullDescription: 'This project addresses the critical challenge of early Alzheimer\'s disease detection through advanced MRI analysis. Processed 1,231 MRI scans on SLURM/HPC infrastructure, extracting radiomic features using FreeSurfer and PyRadiomics. The deep learning pipeline combines convolutional neural networks with traditional radiomic features, improving AD/MCI/CN classification accuracy from 69.11% to 85.45%. The system enables automated, reproducible analysis for clinical research applications.',
    tech: ['PyTorch', 'FreeSurfer', 'PyRadiomics', 'SLURM/HPC'],
    metrics: '85.45% accuracy',
    category: 'Medical AI',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[MRI Scans] --> [FreeSurfer Processing]
[FreeSurfer Processing] --> [Feature Extraction]
[Feature Extraction] --> [PyRadiomics]
[PyRadiomics] --> [CNN Model]
[CNN Model] --> [AD/MCI/CN Classification]`
    }
  },
  {
    title: 'Lightwall LLM Agent',
    description: 'Built a proximity-aware LLM agent with adaptive personality and voice modes based on user distance. Designed parser for Arduino/C++ actuation commands.',
    fullDescription: 'Lightwall is an innovative proximity-aware LLM agent that adapts its personality and interaction style based on user distance. The system uses ultrasonic sensors to detect proximity and adjusts voice modes, response styles, and LED visualizations accordingly. A custom parser translates natural language commands into Arduino/C++ actuation commands for hardware control, enabling seamless human-AI-hardware interaction with 2.8-4.1s end-to-end latency.',
    tech: ['LLMs', 'RAG', 'Arduino', 'Python'],
    metrics: '2.8-4.1s latency',
    category: 'GenAI',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[Ultrasonic Sensors] --> [Distance Detection]
[Distance Detection] --> [Personality Selector]
[User Voice Input] --> [Speech-to-Text]
[Speech-to-Text] --> [LLM Processing]
[LLM Processing] --> [Command Parser]
[Command Parser] --> [Arduino Controller]
[Arduino Controller] --> [LED/Motor Actuation]`
    }
  },
  {
    title: 'Breast Cancer Histopathology Classification',
    description: 'ResNet-based classifier for 8 breast cancer subtypes using transfer learning. Published in J. Imaging.',
    fullDescription: 'This peer-reviewed research presents a deep learning framework for multi-class classification of breast cancer subtypes from histopathological images. Using transfer learning with ImageNet-pretrained ResNet architectures and extensive data augmentation, the system differentiates 8 histopathological subtypes with remarkable accuracy. ResNet-50 achieved 92.42% accuracy, 99.86% AUC-ROC, and 98.61% specificity, demonstrating clinical viability for automated cancer screening.',
    tech: ['PyTorch', 'ResNet-50', 'Transfer Learning'],
    metrics: '99.86% AUC-ROC, 98.61% specificity',
    category: 'Medical AI',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[Histopathology Images] --> [Data Augmentation]
[Data Augmentation] --> [ResNet-50 Encoder]
[ResNet-50 Encoder] --> [Transfer Learning]
[Transfer Learning] --> [Classification Head]
[Classification Head] --> [8-Class Output]`
    }
  },
  {
    title: 'YOLOv8 Waste Detection System',
    description: 'Anchor-free YOLOv8 waste detection system for 28 waste classes on WaRP dataset. Real-time inference for recycling plants.',
    fullDescription: 'This conference paper presents a YOLOv8-based deep convolutional neural network for automated waste segregation in recycling plants. Trained on the WaRP dataset to classify and detect 28 distinct waste classes, the anchor-free architecture enables real-time inference with mAP50 of 60% and 3-9ms processing time per frame. The system supports industrial deployment for automated recycling workflows.',
    tech: ['YOLOv8', 'OpenCV', 'Python'],
    metrics: 'mAP@50 = 0.60, 3-9ms inference',
    category: 'Computer Vision',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[Camera Feed] --> [Image Preprocessing]
[Image Preprocessing] --> [YOLOv8 Backbone]
[YOLOv8 Backbone] --> [Feature Pyramid]
[Feature Pyramid] --> [Anchor-Free Detection]
[Anchor-Free Detection] --> [28-Class Classification]
[28-Class Classification] --> [Bounding Box Output]`
    }
  },
  {
    title: 'Solar Power Forecasting Pipeline',
    description: '15-minute solar power forecasting using LightGBM with high-accuracy predictions for renewable energy optimization.',
    fullDescription: 'A machine learning pipeline for short-term solar power forecasting to optimize renewable energy grid integration. The system uses LightGBM gradient boosting with engineered temporal and weather features to predict solar power generation at 15-minute intervals. Achieving R² = 0.96, the model enables grid operators to balance supply and demand, reducing reliance on fossil fuel backup generation.',
    tech: ['LightGBM', 'Python', 'Pandas'],
    metrics: 'R² = 0.96',
    category: 'Time Series',
    github: 'https://github.com/Akshat1661',
  },
  {
    title: 'AI-Powered EDA Assistant',
    description: 'Built an AI-powered EDA assistant using ChromaDB retrieval and Vertex AI to ground design queries for chip design workflows.',
    fullDescription: 'An intelligent assistant for Electronic Design Automation (EDA) workflows that uses retrieval-augmented generation to answer complex chip design queries. The system indexes technical documentation in ChromaDB and uses Vertex AI for grounded responses, reducing time spent searching manuals and improving engineer productivity in VLSI design workflows.',
    tech: ['ChromaDB', 'Vertex AI', 'RAG', 'Python'],
    metrics: 'RAG-based grounding',
    category: 'GenAI',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[User Query] --> [Query Embedding]
[Query Embedding] --> [ChromaDB Retrieval]
[ChromaDB Retrieval] --> [Context Assembly]
[Context Assembly] --> [Vertex AI LLM]
[Vertex AI LLM] --> [Grounded Response]`
    }
  },
  {
    title: 'Satellite Imaging Auto-Focus',
    description: 'Implemented automated focusing for satellite imaging using Laplacian sharpness scoring and Fibonacci search at ISRO.',
    fullDescription: 'Developed at ISRO (Indian Space Research Organisation), this system automates the focusing process for satellite imaging cameras. Using Laplacian-based sharpness scoring to evaluate image quality and Fibonacci search optimization to find optimal focus positions, the system achieves real-time automated focusing for remote sensing applications, improving image quality and reducing manual intervention.',
    tech: ['Python', 'OpenCV', 'Image Processing'],
    metrics: 'Real-time processing',
    category: 'Computer Vision',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[Camera Image] --> [Laplacian Filter]
[Laplacian Filter] --> [Sharpness Score]
[Sharpness Score] --> [Fibonacci Search]
[Fibonacci Search] --> [Focus Position Update]
[Focus Position Update] --> [Motor Control]`
    }
  },
  {
    title: 'Auto-Exposure Control System',
    description: 'Real-time ROI-based auto-exposure control with object tracking and skewness feedback for satellite cameras.',
    fullDescription: 'A real-time auto-exposure control system for satellite imaging cameras developed at ISRO. The system uses region-of-interest (ROI) based analysis with object tracking to maintain optimal exposure across varying lighting conditions. Histogram skewness feedback enables precise exposure adjustment within -2/+0.2 stops, ensuring consistent image quality for remote sensing missions.',
    tech: ['Python', 'OpenCV', 'Control Systems'],
    metrics: '-2/+0.2 exposure steps',
    category: 'Computer Vision',
    github: 'https://github.com/Akshat1661',
  },
  {
    title: 'Image Caption Generator',
    description: 'CNN-RNN image captioning system using VGG16 encoder and GRU decoder with cached embeddings and Dash demo.',
    fullDescription: 'A deep learning system for automatic image captioning combining convolutional and recurrent neural networks. The architecture uses a pre-trained VGG16 encoder to extract visual features, which are then processed by a GRU decoder to generate natural language descriptions. Cached embeddings optimize training efficiency, and a Dash web application provides an interactive demonstration interface.',
    tech: ['TensorFlow/Keras', 'VGG16', 'GRU', 'Dash'],
    metrics: 'Optimized training pipeline',
    category: 'Deep Learning',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[Input Image] --> [VGG16 Encoder]
[VGG16 Encoder] --> [Feature Vector]
[Feature Vector] --> [Embedding Layer]
[Embedding Layer] --> [GRU Decoder]
[GRU Decoder] --> [Word Prediction]
[Word Prediction] --> [Caption Output]`
    }
  },
  {
    title: 'CSU GenAI Hackathon Winner',
    description: 'Built synthetic-data generator for sparse-signal forecasting and AWS Bedrock analytics agent with LangChain for real-time querying.',
    fullDescription: 'First-place winning project at the CSU GenAI Hackathon. Built a two-part system: (1) a synthetic data generator for sparse-signal time series forecasting using generative models, and (2) an AWS Bedrock-powered analytics agent with LangChain for natural language querying of complex datasets. The combination enables real-time business intelligence on generated and real data streams.',
    tech: ['AWS Bedrock', 'LangChain', 'Python'],
    metrics: '1st Place',
    category: 'GenAI',
    github: 'https://github.com/Akshat1661',
    architecture: {
      type: 'mermaid',
      diagram: `[Sparse Signal Data] --> [Synthetic Generator]
[Synthetic Generator] --> [Augmented Dataset]
[User Query] --> [LangChain Agent]
[LangChain Agent] --> [AWS Bedrock]
[AWS Bedrock] --> [Analytics Response]`
    }
  },
];

const categories = ['All', 'Medical AI', 'Computer Vision', 'GenAI', 'Deep Learning', 'Time Series'];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-background-secondary">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            A showcase of AI/ML projects spanning medical imaging, computer vision, and generative AI
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setActiveCategory(category); setShowAll(false); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden card-hover group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  {project.category}
                </span>
              </div>

              <div className="p-6 pt-2">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {project.metrics}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary/50 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-secondary/50 text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <button
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <Eye size={16} className="mr-1" />
                    View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        {/* Show More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <Button variant="hero-outline" onClick={() => setShowAll(true)}>
              View All Projects
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
