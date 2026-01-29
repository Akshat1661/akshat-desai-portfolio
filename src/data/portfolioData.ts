export type PortfolioData = {
  hero: {
    name: string;
    title: string;
    bio: string;
    resumeUrl: string;
  };
  skills: {
    "Computer Vision & AI": string[];
    Languages: string[];
    "Tools & Platforms": string[];
    "Core Concepts": string[];
  };
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    keyFeatures: string[];
    technicalDetails: string[];
    performanceMetrics: Array<{
      label: string;
      value: string;
      trend: string;
      highlight?: boolean;
    }>;
    architectureDiagram: string[];
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
  publications: Array<{
    title: string;
    conference: string;
    status: string;
    link: string;
    citations: number;
    coAuthors: string;
    year: number;
  }>;
};

export const portfolioData: PortfolioData = {
  hero: {
    name: "Akshat Desai",
    title: "Computer Vision & LLM Systems Engineer",
    bio: "I build AI systems that leave the lab. From processing 1,200+ brain MRIs to synchronizing 12 motors with LLM outputs in real-time, I specialize in deploying computer vision and generative AI where hardware meets intelligence. Currently researching medical imaging at CSUF with 17+ peer-reviewed citations.",
    resumeUrl: "/resume.pdf",
  },

  skills: {
    "Computer Vision & AI": [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "YOLOv8",
      "ResNet",
      "Medical Image Analysis",
      "3D Segmentation",
      "Transformers",
      "RAG Pipelines",
      "Whisper (STT)",
    ],
    Languages: ["Python", "C++", "TypeScript", "Verilog", "SQL"],
    "Tools & Platforms": [
      "Docker",
      "AWS Bedrock",
      "Git",
      "Linux/Bash",
      "HPC Clusters (SLURM)",
      "LangChain",
      "ChromaDB",
    ],
    "Core Concepts": [
      "Object Detection",
      "Explainable AI (Grad-CAM)",
      "Neuroimaging",
      "Signal Processing",
      "Time Series Forecasting",
      "Embedded AI",
    ],
  },

  projects: [
    {
      title: "Multi-Class Breast Cancer Subtype Classification",
      techStack: [
        "PyTorch",
        "ResNet-50",
        "Grad-CAM",
        "Transfer Learning",
        "OpenCV",
      ],
      description:
        "Deep learning framework classifying 8 histopathological tumor subtypes with near-perfect discrimination, outperforming standard binary benchmarks.",
      keyFeatures: [
        "Architected a ResNet-50 transfer learning pipeline achieving 92.42% accuracy across 8 distinct tumor subtypes",
        "Integrated Gradient-weighted Class Activation Mapping (Grad-CAM) to provide explainable AI visual heatmaps for pathologists",
        "Orchestrated extensive data augmentation strategies to overcome severe class imbalance in the BreaKHis dataset",
      ],
      technicalDetails: [
        "Architecture: Pre-trained ResNet-50 backbone → Bottleneck Residual Blocks → Global Average Pooling → Fully Connected Classification Layer",
        "Optimization: Leveraged Adam optimizer and Focal Loss to maximize performance on under-represented classes like Lobular Carcinoma",
        "Explainability: Implemented Grad-CAM to visualize decision boundaries, highlighting acinar units and cellular structures for clinical validation",
        "Performance: Achieved 0.9979 AUC score, demonstrating exceptional capability in distinguishing benign vs. malignant subtypes",
        "Data Handling: Processed multi-magnification histopathological images (40X, 100X, 200X, 400X) with normalization and resizing pipelines",
        "Impact: Validated that deep residual learning captures fine-grained features better than traditional Shallow CNNs or SVM approaches",
      ],
      performanceMetrics: [
        { label: "Accuracy", value: "92.42%", trend: "ResNet-50", highlight: true },
        { label: "AUC Score", value: "0.9979", trend: "Near Perfect", highlight: true },
        { label: "Precision", value: ">93%", trend: "Top Classes" },
        { label: "Classes", value: "8", trend: "Multi-Type" },
        { label: "Explainability", value: "Grad-CAM", trend: "Heatmaps" },
        { label: "Sensitivity", value: "98.6%", trend: "High Recall" },
      ],
      architectureDiagram: [
        "Input (Histopathological Images)",
        "Preprocessing (Normalization)",
        "Data Augmentation",
        "ResNet-50 Backbone",
        "Grad-CAM (Explainability)",
        "Classification (8 Subtypes)",
      ],
    },
    {
      title: "Lightwall: Interactive AI Art Installation",
      techStack: [
        "Python 3.11",
        "Llama 3.2",
        "Whisper (STT)",
        "Streaming TTS",
        "Hardware-Software Integration",
        "Arduino C++",
      ],
      description:
        "The backend 'brain' for a physical art installation. Uses radar-based presence detection to switch AI personalities and control 12 physical motors via LLM outputs.",
      keyFeatures: [
        "Engineered a multimodal RAG pipeline integrating Whisper STT and Streaming TTS for natural, voice-driven interaction",
        "Architected a hardware bridge translating text sentiment into RGB lighting and motor control packets (12x NEMA 17)",
        "Implemented real-time radar tracking to trigger 'Sassy' vs 'Poetic' personality modes based on crowd proximity",
      ],
      technicalDetails: [
        "Architecture: Radar Sensor → Python Parser → Whisper STT → ChromaDB RAG → Llama 3.2 (LLM) → Streaming TTS → Arduino Bridge",
        "Latency Optimization: Replaced standard generation with token streaming and TTS chunking to achieve <1s response time",
        "Data Flow: mmWave Radar (60 GHz) → Distance Detection → Personality Mode Switch → Voice Input → Context Injection → LLM Generation → Motor Control",
        "Challenge: Synchronizing 12 stepper motors with LLM token streaming latency while maintaining sub-second response time",
        "Solution: Implemented asynchronous motor control queue with predictive buffering to mask LLM inference delays",
        "RAG Implementation: ChromaDB vector store with pre-embedded personality phrases, reducing hallucination rate significantly",
        "Hardware Bridge: Custom serial protocol translating sentiment scores (-1 to +1) into PWM motor speeds and RGB color temperatures",
      ],
      performanceMetrics: [
        { label: "Latency", value: "<1s", trend: "Streaming TTS", highlight: true },
        { label: "Response Time", value: "Real-time", trend: "Optimized" },
        { label: "Hallucination Rate", value: "Low", trend: "RAG" },
        { label: "Motors Controlled", value: "12", trend: "Synchronized" },
        { label: "RAG Embeddings", value: "2,000+", trend: "Phrases" },
        { label: "Input Gating", value: "<500ms", trend: "Radar" },
      ],
      architectureDiagram: [
        "mmWave Radar (60GHz)",
        "Whisper STT (Audio)",
        "Personality Mode Switch",
        "ChromaDB (RAG)",
        "Llama 3.2 (LLM)",
        "Streaming TTS (Audio Out)",
        "Arduino Bridge",
        "12x NEMA 17 Motors + RGB LEDs",
      ],
    },
    {
      title: "Alzheimer's Disease Progression Analysis",
      techStack: [
        "Python",
        "PyRadiomics",
        "FreeSurfer",
        "HPC Clusters",
        "Medical Imaging",
      ],
      description:
        "Large-scale medical imaging pipeline processing 1,231+ MRI subjects. Automated hippocampal subfield segmentation and feature extraction to quantify neurodegeneration patterns.",
      keyFeatures: [
        "Orchestrated processing of 1,231 subjects on HPC clusters, reducing processing time from 8h to 4h per subject",
        "Extracted 100+ radiomic features per subfield to identify biomarkers for early Alzheimer's detection",
        "Built a HIPAA-compliant automated data harmonization pipeline for clinical research datasets",
      ],
      technicalDetails: [
        "Architecture: SLURM Job Scheduler → FreeSurfer Segmentation → PyRadiomics Feature Extraction → Statistical Analysis Pipeline",
        "Data Flow: Raw DICOM MRI → Skull Stripping → Hippocampal Subfield Segmentation (15+ regions) → Radiomic Feature Computation",
        "Challenge: Processing 1,231 high-resolution 3D MRI scans (each 256x256x256 voxels) required distributed computing across HPC nodes",
        "Solution: Implemented parallel batch processing with SLURM array jobs, reducing wall-clock time from 8 hours to 4 hours per subject",
        "Feature Engineering: Extracted radiomic features per hippocampal subfield including shape, texture, and intensity statistics",
        "Validation: Cross-validated feature stability across scanner manufacturers (Siemens, GE, Philips) to ensure generalizability",
        "Impact: Identified subfield-specific biomarkers with statistical significance for early Alzheimer's detection",
      ],
      performanceMetrics: [
        { label: "Processing Time", value: "4h", trend: "↓ 50% from 8h", highlight: true },
        { label: "Accuracy Gain", value: "+16%", trend: "Improvement", highlight: true },
        { label: "Subjects Processed", value: "1,231", trend: "Large Scale" },
        { label: "Features/Subfield", value: "100+", trend: "Radiomic" },
        { label: "Biomarkers", value: "Identified", trend: "Statistical Sig." },
        { label: "Subfield Regions", value: "15+", trend: "Hippocampal" },
      ],
      architectureDiagram: [
        "DICOM MRI Scans",
        "SLURM Job Scheduler",
        "FreeSurfer Segmentation",
        "Hippocampal Subfields (15+)",
        "PyRadiomics Feature Extraction",
        "Statistical Analysis",
        "Biomarker Identification",
      ],
    },
    {
      title: "Verilog AI Assistant & Simulator",
      techStack: [
        "Streamlit",
        "ChromaDB",
        "RAG",
        "Verilog",
        "Regex",
      ],
      description:
        "An educational platform that generates and simulates hardware code. Features a self-correcting loop where the AI fixes its own syntax errors based on simulator logs.",
      keyFeatures: [
        "Implemented an autonomous error-correction loop achieving high first-try compilation success",
        "Built a dual-mode RAG system that answers conceptual questions vs. generating synthesizeable code",
        "Integrated real-time waveform visualization for immediate feedback on generated circuit designs",
      ],
      technicalDetails: [
        "Architecture: Streamlit UI → ChromaDB RAG (Verilog documentation) → LLM Code Generator → Icarus Verilog Simulator → Error Parser → Self-Correction Loop",
        "Data Flow: User Query → RAG Retrieval → Code Generation → Syntax Validation → iverilog Compilation → VCD Waveform Generation → Visualization",
        "Challenge: LLMs frequently generate syntactically incorrect Verilog (missing semicolons, incorrect port declarations, improper blocking assignments)",
        "Solution: Implemented autonomous error correction where regex-based error parser extracts compiler messages and feeds them back to LLM with 'Fix this error:' prompt",
        "RAG System: Dual-mode retrieval with separate ChromaDB collections for conceptual Q&A (IEEE 1364 standard docs) vs. code synthesis (GitHub Verilog examples)",
        "Compilation Pipeline: iverilog for synthesis → vvp for simulation → VCD file generation → GTKWave-compatible waveform parsing",
        "Self-Correction Logic: Parses iverilog error logs with regex patterns, extracts line numbers and error types, re-prompts LLM with contextual error information",
        "Educational Features: Real-time waveform visualization, testbench auto-generation, side-by-side code comparison showing before/after error correction",
      ],
      performanceMetrics: [
        { label: "Success Rate", value: "High", trend: "Error Correction", highlight: true },
        { label: "Correction Time", value: "Fast", trend: "Per Retry" },
        { label: "Max Retries", value: "2", trend: "Auto-Correction" },
        { label: "RAG Collections", value: "2", trend: "Dual-Mode" },
        { label: "Error Parsing", value: "Regex", trend: "Contextual" },
        { label: "Waveform Output", value: "VCD", trend: "Real-Time" },
      ],
      architectureDiagram: [
        "User Query",
        "ChromaDB (RAG)",
        "LLM Code Generator",
        "Syntax Validation",
        "Icarus Verilog (iverilog)",
        "Error Parser (Regex)",
        "Self-Correction Loop",
        "VCD Waveform Output",
        "Streamlit Visualization",
      ],
    },
    {
      title: "Dining Staffing Prediction System",
      techStack: [
        "LightGBM",
        "AWS Bedrock",
        "LangChain",
        "React",
        "Flask",
      ],
      description:
        "Enterprise predictive analytics dashboard for campus dining. Combines sales forecasting with a natural language AI agent for operational insights.",
      keyFeatures: [
        "Achieved R² > 0.96 accuracy in staffing demand prediction with potential for significant labor cost optimization",
        "Engineered 39 features (weather, academic calendar) to predict rush hours with high precision",
        "Deployed an AWS Bedrock agent allowing managers to query 'Will we be busy next Tuesday?' in plain English",
      ],
      technicalDetails: [
        "Model: LightGBM Gradient Boosting with 39 engineered features including weather API (OpenWeather), academic calendar events, and historical transaction patterns",
        "Architecture: Flask Backend → LightGBM Model → AWS Bedrock (LLM) → LangChain Agent → React Dashboard",
        "Feature Engineering: Time-based features (hour, day, week), weather conditions (temp, precipitation), academic events (finals week, holidays), lag features (sales from previous 3 days)",
        "Challenge: Campus dining has extreme variance (finals week: 2.3x normal traffic; winter break: 15% capacity)",
        "Solution: Implemented multi-target regression predicting hourly demand across 6 dining locations simultaneously with location-specific feature importance",
        "Performance: R² = 0.962 on test set with low prediction error across all locations",
        "AWS Bedrock Integration: Natural language interface for query interpretation ('Will Tuesday be busy?' → prediction visualization)",
        "Deployment: Containerized Flask API with Docker, deployed on AWS EC2 with auto-scaling based on prediction load",
      ],
      performanceMetrics: [
        { label: "Prediction Accuracy", value: "96%", trend: "R² Score", highlight: true },
        { label: "Margin of Error", value: "±2.5%", trend: "Rush Hours" },
        { label: "Proj. Savings", value: "$52k", trend: "Annual" },
        { label: "Features", value: "39", trend: "Engineered" },
        { label: "Locations", value: "6", trend: "Multi-Target" },
        { label: "Query Interface", value: "NL", trend: "AWS Bedrock" },
      ],
      architectureDiagram: [
        "Historical Data + Weather API",
        "Feature Engineering (39 Features)",
        "LightGBM Model",
        "Flask Backend",
        "AWS Bedrock (LLM)",
        "LangChain Agent",
        "React Dashboard",
        "Manager Query Interface",
      ],
    },
  ],

  experience: [
    {
      title: "Lead AI Developer",
      company: "Lightwall Art Installation",
      period: "Oct 2025 - Jan 2026",
      description: "Leading backend architecture for a physical AI installation. Integrated Llama 3.2 with radar sensors and motor control systems.",
      achievements: [
        "Integrated speech & radar fusion with RAG (ChromaDB) to reduce hallucinations in production flows.",
        "Implemented real-time input filtering with sub-500ms gating and quiet window to cut false triggers.",
        "Optimized inference pipeline for responsive user interaction in art installation environment.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      company: "Cal State Fullerton (Medical Imaging Lab)",
      period: "Nov 2024 - Present",
      description: "Developing deep learning pipelines for neuroimaging. Specialized in segmentation and radiomics for Alzheimer's research.",
      achievements: [
        "Processed 1,231 MRI scans on HPC (SLURM) clusters, improving Alzheimer's detection model performance significantly.",
        "Built a textbook-grounded RAG pipeline with token-based PDF chunking and relevance grading.",
        "Implemented automated self-correction loops for code generation with multi-retry enforcement.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "SAC-ISRO (Space Applications Centre)",
      period: "Dec 2023 - May 2024",
      description: "Built production forecasting models and GenAI agents to optimize satellite imaging systems.",
      achievements: [
        "Developed autofocus using Laplacian sharpness scoring and Fibonacci search optimization (fastest convergence).",
        "Implemented ROI-based auto-exposure using object tracking and skewness-driven adjustment for satellite imagery.",
        "Reduced imaging preprocessing time by 60% through optimized computer vision pipelines.",
      ],
    },
  ],

  publications: [
    {
      title: "Multi-Class Classification of Breast Cancer Subtypes Using ResNet Architectures on Histopathological Images",
      conference: "Journal of Imaging 2025, 11, 284",
      status: "Published",
      link: "https://doi.org/10.3390/jimaging11080284",
      citations: 4,
      coAuthors: "A Desai, R Mahto",
      year: 2025,
    },
    {
      title: "Automated focusing and exposure control of camera for satellite observation",
      conference: "AIP Conference Proceedings 3255",
      status: "Published",
      link: "https://doi.org/10.1063/5.0254746",
      citations: 0,
      coAuthors: "J Desai, A Desai, N Bhatt",
      year: 2025,
    },
    {
      title: "YOLOv8-based Waste Detection System for Recycling Plants: A Deep Learning Approach",
      conference: "International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS)",
      status: "Published",
      link: "https://doi.org/10.1109/ICSSAS57918.2023.10331643",
      citations: 13,
      coAuthors: "M Shroff, A Desai, D Garg",
      year: 2023,
    },
  ],
};