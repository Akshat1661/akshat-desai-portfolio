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
    category: string;
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
    title: "AI/ML Engineer building practical AI systems",
    bio: "I build AI tools that move from research into real workflows. My work spans LLM systems, RAG, computer vision, medical imaging, forecasting, and deployment — with a focus on making models useful, reliable, and usable.",
    resumeUrl: "/resume.pdf",
  },

  skills: {
    "Computer Vision & AI": [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "ResNet",
      "CNNs",
      "Transfer Learning",
      "Computer Vision",
      "NLP",
      "Grad-CAM",
      "Time-Series Forecasting",
      "Feature Engineering",
      "Model Evaluation",
    ],
    Languages: ["Python", "C++", "SQL", "Bash", "JavaScript/TypeScript", "Verilog"],
    "Tools & Platforms": [
      "Docker",
      "GCP Cloud Run",
      "AWS",
      "Firebase",
      "Flask",
      "FastAPI",
      "Streamlit",
      "Git/GitHub",
      "Linux",
      "HPC/SLURM",
      "FreeSurfer",
      "PyRadiomics",
      "Pandas",
      "NumPy",
    ],
    "Core Concepts": [
      "vLLM",
      "LoRA",
      "RAG",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "FAISS",
      "Embeddings",
      "Reranking",
      "LLM Evaluation",
      "Prompt Engineering",
    ],
  },

  projects: [
    {
      title: "Verilog AI Tutor & Simulator Sandbox",
      category: "LLM Systems / Applied AI",
      techStack: [
        "Python",
        "vLLM",
        "LoRA",
        "RAG",
        "ChromaDB",
        "Icarus Verilog",
        "Streamlit",
        "Firebase",
        "Docker",
        "GCP Cloud Run",
      ],
      description:
        "Built a browser-based Verilog AI tutoring platform for faculty and students to generate, verify, and simulate hardware designs from natural-language prompts. Fine-tuned a 32B code LLM on compiler-verified synthetic examples and integrated RAG-augmented retrieval, simulator validation, and correction-loop support.",
      keyFeatures: [
        "Fine-tuned a 32B code LLM on 1,000 compiler-verified synthetic Verilog examples using LoRA to improve hardware-design generation quality.",
        "Built RAG retrieval over 14,740 verified Verilog examples and theory documents using ChromaDB vector search to ground outputs in known-correct code.",
        "Added simulator-based validation with Icarus Verilog to capture compile logs and support a simulator-based correction loop when generated code fails to compile.",
        "Built a browser-based simulator sandbox with Firebase login, persistent chat history, compile logs, VCD file downloads, and waveform previews.",
        "Reduced model footprint by approximately 70% through quantization, enabling more efficient vLLM inference.",
      ],
      technicalDetails: [
        "Model: 32B code LLM fine-tuned with LoRA on 1,000 compiler-verified synthetic Verilog examples. Quantized to reduce model footprint by ~70% for efficient vLLM inference.",
        "RAG: ChromaDB vector store over 14,740 verified Verilog code examples and theory documents. Retrieval injected at inference time to ground outputs in known-correct references.",
        "Simulator validation: Icarus Verilog (iverilog + vvp) used as compiler oracle. Compile logs fed back into LLM context for correction loops on failed generation.",
        "Frontend/Auth: Streamlit UI with Firebase authentication. Users can view chat history, download VCD files, and preview waveforms in the browser.",
        "Deployment: Docker-containerized service designed for GCP Cloud Run deployment.",
      ],
      performanceMetrics: [
        { label: "Model Size", value: "32B", trend: "Code LLM", highlight: true },
        { label: "Training Examples", value: "1,000", trend: "Compiler-Verified" },
        { label: "RAG Documents", value: "14,740", trend: "Verilog Examples + Theory" },
        { label: "Model Footprint Reduction", value: "~70%", trend: "Via Quantization", highlight: true },
        { label: "Simulator", value: "Icarus Verilog", trend: "Compile + Correction Loop" },
        { label: "Auth & History", value: "Firebase", trend: "Browser-Based Sandbox" },
      ],
      architectureDiagram: [
        "User Prompt [Streamlit UI + Firebase Auth]",
        "ChromaDB RAG [14,740 Verilog Examples + Theory Docs]",
        "32B Code LLM [LoRA Fine-Tuned, ~70% Smaller via Quantization]",
        "vLLM Inference [Efficient Serving]",
        "Icarus Verilog Simulator [Compiler Oracle]",
        "Correction Loop [Compile Logs → LLM Context]",
        "VCD Downloads + Waveform Previews [Browser Sandbox]",
      ],
    },
    {
      title: "Alzheimer's MRI Radiomics Pipeline",
      category: "Medical Imaging / Data Science",
      techStack: [
        "Python",
        "FreeSurfer",
        "PyRadiomics",
        "XGBoost",
        "LASSO",
        "scikit-learn",
        "Linux",
        "SLURM",
        "Pandas",
        "NumPy",
      ],
      description:
        "Built a large-scale MRI radiomics pipeline to support Alzheimer's disease classification across CN, MCI, and AD patients using 3D brain scans from the ADNI dataset. Increased usable cohort size from 275 to 1,229 subjects, automated HPC processing, and achieved 92.73% accuracy after reducing 5,980 features to 77 biomarkers.",
      keyFeatures: [
        "Increased usable ADNI cohort size from 275 to 1,229 subjects by building a Subject Squashing pipeline that collapses fragmented PyRadiomics long-format output into single feature vectors per subject.",
        "Automated FreeSurfer segmentation and PyRadiomics feature extraction across Linux HPC clusters using Python and SLURM array jobs, reducing MRI processing runtime by 50%.",
        "Reduced 5,980 radiomics features to 77 biomarkers using LASSO regularization (5-fold CV), then trained XGBoost classifiers combined with clinical scores.",
        "Achieved 92.73% combined accuracy on CN/MCI/AD classification across 1,229 ADNI subjects.",
      ],
      technicalDetails: [
        "Data: 1,229 ADNI subjects (CN, MCI, AD) processed via FreeSurfer recon-all + hippocampal segmentation on SLURM HPC array jobs.",
        "Feature Extraction: PyRadiomics extracted 5,980 features per subject covering shape, first-order statistics, and texture descriptors (GLCM, GLRLM, GLSZM, NGTDM) across 56 brain sub-regions.",
        "Subject Squashing: Custom pipeline collapsed PyRadiomics long-format output (20–50 rows per subject) into single feature vectors per subject, recovering the full 1,229-subject cohort from a fragmented 275-subject extraction.",
        "ML Pipeline: StandardScaler normalization → LassoCV (5-fold, feature selection) → 77 biomarkers → XGBoost multi-class classifier. Strict 80/20 stratified train/test split.",
        "Runtime: 50% reduction in MRI processing time through parallelized SLURM array job scheduling.",
      ],
      performanceMetrics: [
        { label: "Combined Accuracy", value: "92.73%", trend: "CN / MCI / AD", highlight: true },
        { label: "ADNI Subjects", value: "1,229", trend: "↑ from 275 via Subject Squashing", highlight: true },
        { label: "Features Extracted", value: "5,980", trend: "Per Subject" },
        { label: "LASSO Biomarkers", value: "77", trend: "Feature Selection" },
        { label: "Runtime Reduction", value: "50%", trend: "HPC SLURM Automation" },
        { label: "Classification", value: "3-Class", trend: "CN / MCI / AD" },
      ],
      architectureDiagram: [
        "ADNI Database [1,229 T1-MRI Subjects: CN / MCI / AD]",
        "FreeSurfer [SLURM HPC: recon-all + Hippocampal Segmentation → 56 Sub-Regions]",
        "PyRadiomics [Shape + First-Order + Texture Features → 5,980 Per Subject]",
        "Subject Squashing [Long-Format → Feature Vectors: 275 → 1,229 Subjects]",
        "Z-Score Normalization [StandardScaler]",
        "LASSO L1-Regularization [5-Fold CV: 5,980 → 77 Biomarkers]",
        "XGBoost Classifier [Multi-Class: CN / MCI / AD]",
        "3-Class Output [92.73% Combined Accuracy]",
      ],
    },
    {
      title: "Lightwall Interactive AI Art Installation",
      category: "Edge AI / Human-Centered AI",
      techStack: [
        "Python",
        "Llama",
        "Speech Recognition",
        "Radar Sensing",
        "JSON Persona Loading",
        "Hardware-Control Tags",
        "Arduino/C++",
        "Local Inference",
      ],
      description:
        "Built the local AI system for Lightwall, an interactive museum art installation at the California Center for the Arts Museum in Escondido. Connected Llama inference, speech recognition, radar-based visitor sensing, persona loading, and hardware-control commands into a cohesive real-time pipeline.",
      keyFeatures: [
        "Connected Llama inference, speech recognition, radar-based visitor sensing, JSON persona loading, and hardware-control logic into a single real-time pipeline.",
        "Converted LLM responses into structured hardware-control tags that drove LED behavior, motor responses, AI mood states, and personality-state changes.",
        "Reduced hallucinations using project memory, live source scanning, grounded context injection, and JSON persona loading.",
        "Collaborated with artist Rita Sus, technologist Zach Rattner, and CSUF team members to integrate the AI system with physical installation hardware.",
      ],
      technicalDetails: [
        "Architecture: Radar proximity sensing → Python pipeline → speech recognition (STT) → Llama local inference → hardware-control tag parsing → Arduino/microcontroller actuation.",
        "Persona system: JSON persona files loaded at runtime to define AI personality, voice style, and behavioral constraints for different visitor interaction modes.",
        "Hallucination reduction: project_memory.json (static knowledge) + real-time directory scanning injected as grounded context into LLM system prompt at inference time.",
        "Hardware control: LLM outputs parsed for structured tags that mapped to LED arrays, motor control signals, mood state machines, and personality transitions.",
        "Deployment: Fully local inference — no cloud dependency during live installation operation.",
      ],
      performanceMetrics: [
        { label: "Inference", value: "Local", trend: "On-Device Runtime", highlight: true },
        { label: "Interaction", value: "Real-Time", trend: "Speech + Radar Sensing" },
        { label: "Personas", value: "JSON-Loaded", trend: "Runtime Swappable" },
        { label: "Hardware Control", value: "Structured Tags", trend: "LED + Motor + Mood" },
        { label: "Venue", value: "CCAM Escondido", trend: "Public Installation" },
      ],
      architectureDiagram: [
        "Radar Sensor [Visitor Proximity Detection]",
        "Speech Recognition [Voice Transcription (STT)]",
        "JSON Persona Loading [Runtime Personality Configuration]",
        "Grounded Context Injection [project_memory.json + Live Source Scan]",
        "Llama Local Inference [LLM Orchestrator]",
        "Hardware-Control Tag Parser [Structured Output]",
        "Arduino/C++ Microcontroller [LED Arrays + Motor Control]",
        "Physical Installation [Lightwall — CCAM, Escondido]",
      ],
    },
    {
      title: "Solar Power Forecasting System",
      category: "Time-Series Forecasting / Energy Analytics",
      techStack: [
        "Python",
        "LightGBM",
        "Pandas",
        "NumPy",
        "Feature Engineering",
        "Time-Series Forecasting",
      ],
      description:
        "Built a 15-minute solar power forecasting system using historical generation data, NASA weather data, and LightGBM gradient boosting for energy planning. Cleaned 210,000+ time-series records, engineered 39 features, and explained 96.02% of unseen 2024 solar-output variation.",
      keyFeatures: [
        "Cleaned 210,000+ time-series records by resampling NASA weather data, interpolating sensor gaps, aligning power and weather timestamps, and capping outliers.",
        "Engineered 39 lag, time, and weather features to capture intraday and seasonal solar generation patterns.",
        "Trained a LightGBM model that explained 96.02% of unseen 2024 solar-output variation on held-out test data.",
      ],
      technicalDetails: [
        "Data: 210,000+ 15-minute records combining historical solar generation with NASA weather data (irradiance, temperature, cloud cover).",
        "Preprocessing: resampling to 15-minute intervals, interpolation for sensor gaps, timestamp alignment between power and weather sources, outlier capping.",
        "Feature Engineering: 39 features covering lag values (prior generation), time-of-day, day-of-year, and weather variables.",
        "Model: LightGBM gradient boosting regressor trained on historical data and evaluated on held-out 2024 solar generation records.",
        "Evaluation: 96.02% explained variance (R²) on 2024 test data.",
      ],
      performanceMetrics: [
        { label: "Explained Variance", value: "96.02%", trend: "2024 Test Data", highlight: true },
        { label: "Records Processed", value: "210,000+", trend: "15-Minute Intervals" },
        { label: "Features Engineered", value: "39", trend: "Lag / Time / Weather" },
        { label: "Forecast Resolution", value: "15 Minutes", trend: "Intraday" },
        { label: "Model", value: "LightGBM", trend: "Gradient Boosting" },
      ],
      architectureDiagram: [
        "Historical Solar Generation [15-Minute Records]",
        "NASA Weather Data [Irradiance, Temperature, Cloud Cover]",
        "Data Cleaning [Resampling, Interpolation, Alignment, Outlier Capping]",
        "Feature Engineering [39 Lag, Time, and Weather Features]",
        "LightGBM Regressor [Gradient Boosting]",
        "2024 Test Set [96.02% Explained Variance]",
      ],
    },
    {
      title: "Cal Poly Pomona Dining AI Staffing Dashboard",
      category: "Applied ML / GenAI Dashboard",
      techStack: [
        "Python",
        "Flask",
        "XGBoost",
        "AWS Bedrock",
        "LangChain",
        "LangGraph",
        "Docker",
      ],
      description:
        "Won 1st place at the CSU AI Summer Camp / Cal Poly Pomona AWS Hackathon by building an AI-powered dining operations dashboard. Forecasted staffing demand across six dining roles using XGBoost, and integrated an AWS Bedrock/LangChain/LangGraph chatbot for prediction explanations and staffing insights.",
      keyFeatures: [
        "Forecasted transactions and staffing demand across six dining roles using XGBoost trained on weather, date, and campus event features.",
        "Reduced projected annual labor waste by $52,000 through staffing optimization recommendations.",
        "Integrated Flask APIs and an AWS Bedrock/LangChain/LangGraph chatbot for natural-language prediction explanations and staffing insights.",
        "Won 1st place at the CSU AI Summer Camp / Cal Poly Pomona AWS Hackathon.",
      ],
      technicalDetails: [
        "Model: XGBoost trained on historical transaction data, weather features, date/calendar features, and campus events to forecast staffing demand across six dining roles.",
        "Backend: Flask REST APIs serving model predictions. Containerized with Docker.",
        "LLM Integration: AWS Bedrock with LangChain and LangGraph for a chatbot that interprets staffing predictions and answers manager questions in natural language.",
        "Optimization: Staffing recommendations derived from predicted demand, projecting $52,000 in annual labor savings.",
      ],
      performanceMetrics: [
        { label: "Competition Result", value: "1st Place", trend: "CSU AI / AWS Hackathon", highlight: true },
        { label: "Proj. Annual Savings", value: "$52,000", trend: "Labor Optimization", highlight: true },
        { label: "Dining Roles", value: "6", trend: "Multi-Role Forecasting" },
        { label: "Model", value: "XGBoost", trend: "Demand Forecasting" },
        { label: "LLM Interface", value: "AWS Bedrock", trend: "LangChain + LangGraph" },
      ],
      architectureDiagram: [
        "Transaction History + Weather + Campus Events [Feature Sources]",
        "XGBoost Regressor [6-Role Staffing Demand Forecast]",
        "Flask REST API [Backend Service, Docker]",
        "AWS Bedrock + LangChain + LangGraph [Chatbot Agent]",
        "Staffing Insights Dashboard [Manager Interface]",
      ],
    },
    {
      title: "Multi-Class Breast Cancer Subtype Classification",
      category: "Deep Learning / Medical Imaging",
      techStack: [
        "PyTorch",
        "ResNet",
        "Grad-CAM",
        "Transfer Learning",
        "OpenCV",
      ],
      description:
        "Built a deep learning pipeline to classify 8 benign and malignant breast cancer subtypes from 7,909 biopsy images using PyTorch transfer learning on ImageNet-pretrained ResNet models.",
      keyFeatures: [
        "Trained ImageNet-pretrained ResNet models with preprocessing, augmentation, Adam optimization, and stratified train/test splits on 7,909 histopathological images across 8 classes.",
        "Achieved approximately 91.54% accuracy, 99.68% AUC-ROC, and 98.67% specificity on unseen test images.",
        "Applied Grad-CAM to highlight tumor-relevant image regions and improve model interpretability for clinical validation.",
      ],
      technicalDetails: [
        "Dataset: 7,909 biopsy images across 8 breast cancer subtypes (benign and malignant) at multiple magnifications (40×, 100×, 200×, 400×).",
        "Model: ImageNet-pretrained ResNet fine-tuned with Adam optimizer. Augmentation and stratified splits applied to handle class imbalance.",
        "Explainability: Grad-CAM visualizations highlight tumor-relevant regions to support pathologist interpretation.",
        "Performance: ~91.54% accuracy, 99.68% AUC-ROC, 98.67% specificity on held-out test images.",
      ],
      performanceMetrics: [
        { label: "Accuracy", value: "~91.54%", trend: "8-Class Test Set", highlight: true },
        { label: "AUC-ROC", value: "99.68%", trend: "Held-Out Test Set", highlight: true },
        { label: "Specificity", value: "98.67%", trend: "Test Set" },
        { label: "Images", value: "7,909", trend: "Histopathological" },
        { label: "Classes", value: "8", trend: "Benign + Malignant Subtypes" },
        { label: "Explainability", value: "Grad-CAM", trend: "Tumor Region Heatmaps" },
      ],
      architectureDiagram: [
        "Input [7,909 Biopsy Images, 8 Classes]",
        "Preprocessing + Augmentation [Normalization, Stratified Split]",
        "ImageNet-Pretrained ResNet [Transfer Learning Backbone]",
        "Adam Optimization [Fine-Tuning]",
        "Grad-CAM [Tumor Region Explainability]",
        "8-Class Output [~91.54% Accuracy | 99.68% AUC-ROC]",
      ],
    },
  ],

  experience: [
    {
      title: "AI/LLM Research Developer",
      company: "California State University, Fullerton",
      period: "Jun 2025 - May 2026",
      description: "Developed a Verilog AI tutor and simulator sandbox for faculty and students as part of ongoing research at CSUF.",
      achievements: [
        "Fine-tuned a 32B code LLM on 1,000 compiler-verified synthetic Verilog examples using LoRA to improve hardware-design generation quality.",
        "Built RAG retrieval over 14,740 verified Verilog examples and theory documents using ChromaDB.",
        "Built a browser-based simulator sandbox with Firebase login, persistent chat history, compile logs, VCD downloads, and waveform previews.",
        "Reduced model footprint by approximately 70% through quantization for efficient vLLM inference.",
      ],
    },
    {
      title: "Lead AI Developer",
      company: "Lightwall Interactive Art Installation",
      period: "Oct 2025 - Jan 2026",
      description: "Built the local AI system for Lightwall, a public interactive museum art installation at the California Center for the Arts Museum in Escondido.",
      achievements: [
        "Connected Llama inference, speech recognition, radar-based visitor sensing, and hardware-control logic into a real-time pipeline.",
        "Converted LLM output into structured hardware-control tags driving LED behavior, motor responses, AI mood states, and personality-state changes.",
        "Reduced hallucinations through project memory, live source scanning, grounded context injection, and JSON persona loading.",
      ],
    },
    {
      title: "Machine Learning Research Associate",
      company: "California State University, Fullerton",
      period: "Nov 2024 - May 2025",
      description: "Led Alzheimer's disease MRI radiomics research using 3D brain scans, automated HPC pipelines, and machine learning classification.",
      achievements: [
        "Increased usable ADNI cohort from 275 to 1,229 subjects by building a Subject Squashing pipeline to recover fragmented PyRadiomics output.",
        "Automated FreeSurfer segmentation and PyRadiomics feature extraction on Linux HPC clusters using Python and SLURM array jobs, reducing processing runtime by 50%.",
        "Achieved 92.73% accuracy on CN/MCI/AD classification after reducing 5,980 features to 77 biomarkers using LASSO and XGBoost.",
      ],
    },
    {
      title: "Computer Vision & Imaging Intern",
      company: "Space Applications Centre, ISRO",
      period: "Dec 2023 - May 2024",
      description: "Built a real-time satellite-camera exposure-control pipeline using Python, OpenCV, pyueye, and IDS live camera streaming.",
      achievements: [
        "Detected satellite-like objects using Haar Cascade object detection, ROI extraction, and histogram analysis on live camera frames.",
        "Adjusted camera exposure dynamically using skewness-based control to correct underexposed and overexposed frames in real time.",
        "Validated the algorithm in a dark-room setup using reflective satellite-like material against a space-like black background.",
      ],
    },
  ],

  publications: [
    {
      title: "Intelligent Shading Classification for Smart Reconfigurable Photovoltaic Panels in Residential Solar Systems",
      conference: "Applied Cognitive Computing and Artificial Intelligence, CSCE 2025, CCIS 2933, Springer",
      status: "Published",
      link: "https://doi.org/10.1007/978-3-032-22205-3_39",
      citations: 0,
      coAuthors: "V Yedavilli, Akshat Desai, J Olivares, et al.",
      year: 2026,
    },
    {
      title: "Multi-Class Classification of Breast Cancer Subtypes Using ResNet Architectures on Histopathological Images",
      conference: "Journal of Imaging 2025, 11, 284",
      status: "Published",
      link: "https://doi.org/10.3390/jimaging11080284",
      citations: 0,
      coAuthors: "Akshat Desai, Rakesh Mahto",
      year: 2025,
    },
    {
      title: "Automated Focusing and Exposure Control of Camera for Satellite Observation and Debris Survey",
      conference: "AIP Conference Proceedings 3255",
      status: "Published",
      link: "https://doi.org/10.1063/5.0254746",
      citations: 0,
      coAuthors: "J Desai, Akshat Desai, N Bhatt",
      year: 2025,
    },
    {
      title: "YOLOv8-Based Waste Detection System for Recycling Plants: A Deep Learning Approach",
      conference: "IEEE International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS), 2023",
      status: "Published",
      link: "https://doi.org/10.1109/ICSSAS57918.2023.10331643",
      citations: 0,
      coAuthors: "M Shroff, Akshat Desai, D Garg",
      year: 2023,
    },
  ],
};
