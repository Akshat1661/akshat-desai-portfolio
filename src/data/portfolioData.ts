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
      "vLLM",
      "Google Cloud Run",
      "MLOps",
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
      title: "Serverless Inference Engine & Verilog AI Simulator",
      techStack: [
        "vLLM",
        "DeepSeek",
        "Google Cloud Run",
        "Docker",
        "Streamlit",
        "ChromaDB",
      ],
      description:
        "Architected a serverless inference backend to deploy a 14GB fine-tuned DeepSeek model. Features a custom Dockerized vLLM deployment on an Nvidia L4 GPU with a self-correcting RAG frontend.",
      keyFeatures: [
        "Bypassed Google Cloud Run's 240s serverless timeout limits by engineering custom baked Docker images, cutting cold-boot deployment times from 7 minutes to under 30 seconds.",
        "Profiled and resolved severe GPU Out-Of-Memory (OOM) crashes by aggressively tuning vLLM memory utilization to 0.85 and disabling CUDA Graph Warmup.",
        "Engineered an autonomous regex-based error parser that captures Icarus Verilog compiler logs and reinjects them into the LLM context, increasing first-pass compilation success by 65%.",
      ],
      technicalDetails: [
        "Backend Architecture: Google Cloud Run (Nvidia L4 GPU, 32GB RAM) → Custom Docker Image → vLLM (v0.15.1) Engine → DeepSeek 14GB Model.",
        "Frontend Architecture: Streamlit UI → ChromaDB RAG → Icarus Verilog Simulator → Error Parser → Self-Correction Loop.",
        "Memory Optimization: Dynamically injected runtime memory patches to fix tokenizer bugs in-memory milliseconds before engine ignition.",
        "Session Management: Implemented a sliding window approach (chat_history[-10:]) and optimized max-token buffers to 600 to prevent context overload crashes.",
      ],
      performanceMetrics: [
        { label: "Cold Boot Time", value: "<30s", trend: "Down from 7m", highlight: true },
        { label: "GPU Utilization", value: "0.85", trend: "OOM Prevented" },
        { label: "Model Size", value: "14GB", trend: "DeepSeek" },
        { label: "Auto-Correction", value: "65%", trend: "Success Rate" },
      ],
      architectureDiagram: [
        "User Prompt (Streamlit)",
        "Sliding Window Context Manager",
        "ChromaDB RAG Retrieval",
        "Google Cloud Run (Nvidia L4)",
        "Docker Container (Baked Weights)",
        "vLLM Inference Engine",
        "Icarus Verilog Simulation",
        "Regex Error Parser",
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
        "Engineered a multimodal RAG pipeline integrating Whisper STT and Streaming TTS to create seamless, natural voice interactions",
        "Architected a robust hardware bridge translating sentiment analysis into precise PWM motor control packets for 12 synchronized actuators",
        "Orchestrated real-time radar tracking to dynamically switch between 'Sassy' and 'Poetic' personalities based on crowd proximity",
      ],
      technicalDetails: [
        "Architecture: Radar Sensor → Python Parser → Whisper STT → ChromaDB RAG → Llama 3.2 (LLM) → Streaming TTS → Arduino Bridge",
        "Challenge: Synchronizing 12 stepper motors with LLM token streaming latency while maintaining sub-second response times.",
        "Solution: Implemented an asynchronous motor control queue with predictive buffering to mask inference delays.",
        "Impact: Achieved <1s end-to-end latency, creating an illusion of instant physical response to voice commands.",
        "RAG Implementation: Deployed ChromaDB with pre-embedded personality phrases to reduce hallucination rates by 40% in production.",
        "Hardware Bridge: Designed a custom serial protocol ensuring zero-packet-loss communication between the Python backend and Arduino controllers.",
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
        "mmWave Radar (Presence Detection)",
        "Whisper STT (Voice Input)",
        "Personality Mode Switch",
        "ChromaDB RAG (Context Retrieval)",
        "Llama 3.2 (Orchestrator)",
        "Streaming TTS (Low-Latency Audio)",
        "Arduino Bridge (Serial Comm)",
        "12x NEMA 17 Motors (Physical Actuation)",
      ],
    },
    {
      title: "Alzheimer's Disease Progression Analysis",
      techStack: [
        "Python",
        "PyTorch",
        "HPC Clusters (SLURM)",
        "PyRadiomics",
        "Linux",
      ],
      description:
        "Orchestrated a high-throughput deep learning pipeline processing 1,231 high-resolution 3D MRI scans on Linux HPC clusters to quantify spatial neurodegeneration patterns.",
      keyFeatures: [
        "Orchestrated parallel batch processing of 1,231 subjects on High-Performance Computing (HPC) clusters utilizing SLURM array jobs.",
        "Optimized CPU/GPU resource allocation to reduce per-subject processing and inference runtime by 50% (from 8 hours to 4 hours).",
        "Leveraged PyRadiomics and linear algebra to extract 100+ geometric features across 15 3D hippocampal subfields.",
      ],
      technicalDetails: [
        "Architecture: Linux HPC Cluster → SLURM Job Scheduler → FreeSurfer Segmentation → PyTorch Pipeline → PyRadiomics.",
        "Challenge: Processing 1,231 massive 3D voxel arrays (256x256x256) created severe computational bottlenecks on local machines.",
        "Solution: Migrated the architecture to distributed computing nodes, utilizing bash scripting and SLURM to execute massively parallel batch jobs.",
      ],
      performanceMetrics: [
        { label: "Processing Time", value: "4h", trend: "↓ 50% from 8h", highlight: true },
        { label: "Subjects Processed", value: "1,231", trend: "HPC Clusters" },
        { label: "Features/Subfield", value: "100+", trend: "Geometric" },
        { label: "Subfield Regions", value: "15+", trend: "3D Spatial" },
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
      title: "Dining Staffing Prediction System",
      techStack: [
        "LightGBM",
        "AWS Bedrock",
        "LangChain",
        "React",
        "Flask",
      ],
      description:
        "Enterprise predictive analytics dashboard for campus dining achieving R² > 0.96 accuracy. Combines sales forecasting with a natural language AI agent to drive $52k in projected annual labor savings.",
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
        "Data Ingestion (Sales + Weather API)",
        "Feature Engineering (39 Signals)",
        "LightGBM Regressor (Prediction)",
        "Flask API (Backend Service)",
        "AWS Bedrock Agent (NL Query)",
        "LangChain (Orchestrator)",
        "React Dashboard (Visualization)",
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
        "Spearheaded the integration of speech & radar fusion with RAG (ChromaDB), reducing hallucinations by 40% in production flows.",
        "Engineered a real-time input filtering system with sub-500ms gating, effectively eliminating false triggers from ambient movement.",
        "Orchestrated the optimization of the inference pipeline, achieving sub-second latency for seamless user interaction.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      company: "Cal State Fullerton (Medical Imaging Lab)",
      period: "Nov 2024 - Present",
      description: "Developing deep learning pipelines for neuroimaging. Specialized in segmentation and radiomics for Alzheimer's research.",
      achievements: [
        "Orchestrated the high-throughput batch processing of 1,231 3D MRI scans on Linux-based High-Performance Computing (HPC) clusters.",
        "Managed parallel batch processing and concurrency via SLURM array jobs, reducing per-subject runtime by 50% (8h to 4h).",
        "Architected a domain-specific RAG pipeline leveraging token-based PDF chunking to enhance retrieval efficiency within a secure data framework.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "SAC-ISRO (Space Applications Centre)",
      period: "Dec 2023 - May 2024",
      description: "Built production forecasting models and GenAI agents to optimize satellite imaging systems.",
      achievements: [
        "Engineered a rapid autofocus algorithm using Laplacian sharpness scoring and Fibonacci search, achieving the fastest convergence in the system.",
        "Implemented an ROI-based auto-exposure mechanism driven by object tracking, optimizing image clarity for satellite observation.",
        "Optimized computer vision pipelines to reduce imaging preprocessing time by 60%, significantly accelerating data throughput.",
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