export const portfolioData = {
  personalInfo: {
    name: "V Harsha Vardhan",
    title: "Data Science Enthusiast & AI Developer",
    location: "Chennai, Tamil Nadu, India",
    email: "harishvenkat2004@gmail.com",
    phone: "+91 8098242708",
    github: "https://github.com/H234Arsh",
    summary: "Welcome to my digital space! I'm a passionate data scientist with expertise in Explainable AI and deep learning. I solve real-world problems through data-driven solutions and build intelligent systems that make a difference.",
    profileImage: "/api/placeholder/400/400" // This will be replaced with actual image
  },
  
  education: [
    {
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "B.Tech in Computer & Communications Engineering",
      cgpa: "CGPA: 8.79/10.0",
      location: "Chennai, India",
      duration: "2022 – 2026"
    },
    {
      institution: "Prasan Vidya Mandir",
      degree: "Higher Secondary Education",
      percentage: "91.8%",
      location: "Chengalpattu, India",
      duration: "2021"
    },
    {
      institution: "Prasan Vidya Mandir",
      degree: "Secondary Education",
      percentage: "90.4%",
      location: "Chengalpattu, India",
      duration: "2019"
    }
  ],
  
  skills: {
    programming: [
      "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", 
      "MATLAB", "SQL", "FastAPI", "Flask", "Java", "C", "Bash", "MySQL", 
      "Statsmodels", "SciPy", "Vaex", "Matplotlib", "Plotly", "Tableau", 
      "PowerBI", "SHAP", "LIME", "ELI5", "Gradio", "GitHub", "GitLab", "MS Excel"
    ],
    dataScience: [
      "Explainable AI", "Deep Learning", "Machine Learning", "Predictive Modeling", 
      "Time Series Analysis", "Statistical Modeling", "Data Visualization", 
      "Feature Engineering", "Model Tuning", "Data Analysis", "Data Storytelling", 
      "Dashboard Development", "Predictive Analytics", "KPI Visualization", 
      "Model Performance Testing", "Continuous Model Improvement"
    ],
    devops: [
      "Docker", "Kubernetes", "Terraform", "Google Cloud Platform (GCP)"
    ],
    genAI: [
      "Amazon Polly", "LangChain", "Gemini API", "Microsoft Phi-3", "FlanT5 XL", "AI Prompting"
    ]
  },
  
  workExperience: [
    {
      company: "C-DAC (Center for Development of Advanced Computing)",
      position: "Web Scraping & LLM Intern",
      location: "Chennai",
      duration: "Dec 2024 – Jan 2025",
      responsibilities: [
        "Built geological data extraction system using Playwright and Scrapy with SERP-API integration",
        "Developed automated QA system with Microsoft Phi-3, improving response efficiency by 35%",
        "Led team collaboration and model validation using evaluation metrics"
      ]
    },
    {
      company: "Feynn Labs Services",
      position: "ML Intern",
      location: "Remote",
      duration: "May 2024 – Jul 2024",
      responsibilities: [
        "Created Flask-based healthcare insurance cost prediction application",
        "Performed market segmentation analysis to optimize predictive modeling accuracy",
        "Engineered end-to-end real estate price prediction website for Bengaluru market"
      ]
    }
  ],
  
  projects: [
    {
      title: "XAI for Healthcare: Pes-planus Disease Classification",
      duration: "Apr 2025 – Jun 2025",
      description: "Hybrid classifier using LBP and CNN embeddings (InceptionV3, Xception) with 98.56% accuracy. Enhanced explainability via SHAP pixel-level insights, deployed as Flask API in Docker.",
      technologies: ["Python", "TensorFlow", "SHAP", "Docker", "Flask"]
    },
    {
      title: "NEWCAST AI: AI Newspaper OCR with Military TTS",
      duration: "Mar 2025",
      description: "OCR + neural TTS pipeline using OpenCV and Google Gemini 1.5 Flash. Integrated Amazon Polly for military-style voice synthesis with Flask backend.",
      technologies: ["OpenCV", "Google Gemini", "Amazon Polly", "Flask"]
    },
    {
      title: "HealthSightAI: Mobile Medical Image Analysis",
      duration: "Feb 2025",
      description: "Android app with TensorFlow Lite for offline real-time fracture and foot disorder detection. Trained models via Teachable Machine for immediate diagnostics.",
      technologies: ["Android", "TensorFlow Lite", "Teachable Machine"]
    },
    {
      title: "Lumpy Skin Disease Classifier",
      duration: "Dec 2023 – Mar 2024",
      description: "Deep learning ensembles (InceptionV3, Xception + RF at 95.6%). Extensive preprocessing, augmentation, tuning with Gradio UI deployed on Colab Pro.",
      technologies: ["Deep Learning", "InceptionV3", "Xception", "Gradio"]
    }
  ],
  
  publications: [
    {
      title: "Mel Spectrogram-Based Fish Feeding Intensity Classification",
      conference: "ICCCNT Conference, IIT Indore",
      date: "July 2025",
      description: "Achieved 98.3% accuracy using Xception with RMSProp. Engineered lightweight DL model with <2.5M parameters, delivering real-time inference (<50ms) on Raspberry Pi 4."
    },
    {
      title: "Wearable Plantar Pressure Monitoring System",
      conference: "WiSPNET Conference, SSNCE",
      date: "March 2025",
      description: "IoT-based foot pressure monitoring using Arduino MKR Zero and piezoelectric sensors. BLE-based transmission with MATLAB 30×30 dynamic heatmap generation."
    }
  ],
  
  certifications: [
    { name: "Cisco Python Essentials", issuer: "Cisco" },
    { name: "Cisco Cybersecurity Essentials", issuer: "Cisco" },
    { name: "Power BI Data Analysis", issuer: "Microsoft" },
    { name: "Python for Data Science", issuer: "IBM" },
    { name: "Advanced SQL", issuer: "Various" }
  ],
  
  awards: [
    {
      name: "Dream Student Award",
      issuer: "Dr. Abdul Kalam Trust",
      date: "Oct 2019",
      description: "Exceptional academic performance and extracurricular participation"
    }
  ]
};