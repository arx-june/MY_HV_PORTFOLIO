export const portfolioData = {
  personalInfo: {
    name: "V Harsha Vardhan",
    title: "Data Science Enthusiast",
    location: "Chennai, Tamil Nadu, India 600087",
    email: "harishvenkat2004@gmail.com",
    phone: "+91 8098242708",
    github: "https://github.com/H234Arsh",
    summary: "Detail-oriented undergraduate and data science enthusiast with a strong grasp of Explainable AI and deep learning methodologies. Deeply committed to solving real-world problems through data-driven solutions and persistent learning. Experienced in developing and deploying machine learning models with a focus on operational efficiency.",
    profileImage: "/api/placeholder/400/400" // This will be replaced with actual image
  },
  
  education: [
    {
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "Bachelor of Technology in Computer and Communications Engineering",
      cgpa: "8.79/10.0",
      location: "Chennai, India",
      duration: "Oct 2022 – May 2026"
    },
    {
      institution: "Prasan Vidya Mandir",
      degree: "Higher Secondary School Examination",
      percentage: "91.8%",
      location: "Chengalpattu, India",
      duration: "May 2021"
    },
    {
      institution: "Prasan Vidya Mandir",
      degree: "Secondary School Examination",
      percentage: "90.4%",
      location: "Chengalpattu, India",
      duration: "Mar 2019"
    }
  ],
  
  skills: {
    programming: [
      "C", "MATLAB", "Java", "Python", "SQL", "Bash", "Scikit-learn", "TensorFlow", 
      "PyTorch", "Statsmodels", "SciPy", "Vaex", "Researchpy", "Pandas", "NumPy", 
      "Matplotlib", "Plotly", "Tableau", "PowerBI", "MS Excel", "MySQL", "SHAP", 
      "LIME", "ELI5", "Flask", "FastAPI", "Gradio", "GitHub", "GitLab"
    ],
    dataScience: [
      "Explainable AI", "Deep Learning", "Predictive Modeling", "Time Series Analysis", 
      "Statistical Modeling", "Data Visualization", "Machine Learning", "Data Analysis", 
      "Data Interpretation", "Data Storytelling", "Feature Engineering", "Feature Selection", 
      "Model Tuning", "Model Performance Testing", "Continuous Model Improvement", 
      "Dashboard Development", "Predictive Analytics", "Data Services", "KPI Visualization"
    ],
    devops: [
      "Docker", "Kubernetes", "Terraform", "Google Cloud Platform (GCP—Student Tier)"
    ],
    genAI: [
      "Amazon Polly", "LangChain", "Gemini API", "Microsoft Phi-3", "FlanT5 XL", "AI Prompting"
    ]
  },
  
  workExperience: [
    {
      company: "Center for Development of Advanced Computing (C-DAC)",
      position: "Web Scraping and LLM Intern",
      location: "Tidel Park, Chennai",
      duration: "Dec 2024 – Jan 2025",
      responsibilities: [
        "Geological Data Extraction: Employed Playwright and Scrapy to extract geological data from various Indian sources. Implemented SERP-API to gather pertinent links and extract data from websites.",
        "QA System Development: Developed an automated question-answering system leveraging NVIDIA's Microsoft Phi-3, significantly enhancing response efficiency and accuracy by 35%.",
        "Collaboration & Innovation: Led team collaboration and innovation initiatives, including ideation and model validation using evaluation metrics, while ensuring compliance with operational objectives and alignment with business goals."
      ]
    },
    {
      company: "Feynn Labs Services",
      position: "ML Intern",
      location: "Remote",
      duration: "May 2024 – Jul 2024",
      responsibilities: [
        "Python Application Development: Acquired Python programming skills and created a Flask-based application for predicting healthcare insurance costs.",
        "Market Segmentation Analysis: Performed an in-depth market segmentation analysis to optimize predictive modeling accuracy.",
        "Real Estate Price Prediction: Engineered an end-to-end website for real estate price estimation in Bengaluru using data-driven machine learning techniques."
      ]
    }
  ],
  
  projects: [
    {
      title: "XAI for Healthcare: Pes-planus Disease Classification",
      duration: "Apr 2025 – Jun 2025",
      description: "Developed a hybrid classifier using LBP and CNN embeddings (InceptionV3, Xception) achieving 98.56% accuracy. Enhanced explainability via SHAP pixel-level insights, deployed as a Flask API in Docker for scalable inference.",
      technologies: ["Python", "TensorFlow", "SHAP", "Docker", "Flask"]
    },
    {
      title: "NEWCAST AI: AI Newspaper OCR with Military TTS",
      duration: "Mar 2025",
      description: "Engineered an OCR + neural TTS pipeline using OpenCV and Google Gemini 1.5 Flash. Integrated Amazon Polly for military-style voice synthesis and deployed with a lightweight Flask backend.",
      technologies: ["OpenCV", "Google Gemini", "Amazon Polly", "Flask"]
    },
    {
      title: "HealthSightAI: Mobile Medical Image Analysis App",
      duration: "Feb 2025",
      description: "Built an Android app with TensorFlow Lite for offline real-time fracture and foot disorder detection. Trained models via Teachable Machine and delivered immediate diagnostics through image capture/upload.",
      technologies: ["Android", "TensorFlow Lite", "Teachable Machine"]
    },
    {
      title: "Lumpy Skin Disease Classifier",
      duration: "Dec 2023 – Mar 2024",
      description: "Constructed deep learning ensembles (InceptionV3, Xception + RF at 95.6%; DenseNet121 + SVM at 93.2%). Performed extensive preprocessing, augmentation, tuning, and delivered a Gradio UI deployed on Colab Pro.",
      technologies: ["Deep Learning", "InceptionV3", "Xception", "DenseNet121", "Gradio"]
    },
    {
      title: "Sea Weather Buoy RTOS Monitoring System",
      duration: "Dec 2023 – Mar 2024",
      description: "Developed an Arduino + FreeRTOS prototype to collect wave height, temperature, humidity, turbidity, and pH data. Implemented RTOS queue scheduling and real-time alerts for effective task prioritization.",
      technologies: ["Arduino", "FreeRTOS", "IoT", "Real-time Systems"]
    }
  ],
  
  publications: [
    {
      title: "Mel Spectrogram-Based Fish Feeding Intensity Classification",
      conference: "ICCCNT Conference, IIT Indore",
      date: "July 2025",
      description: "Achieved 98.3% test accuracy using Xception with RMSProp on Mel spectrograms across 4 audio classes, outperforming MFCC-based baselines by 11%. Engineered a lightweight DL model with under 2.5M parameters, delivering real-time inference (<50ms) on Raspberry Pi 4."
    },
    {
      title: "Wearable Plantar Pressure Monitoring System",
      conference: "WiSPNET Conference, SSNCE",
      date: "March 2025",
      description: "Developed an IoT-based foot pressure monitoring system using Arduino MKR Zero and piezoelectric sensors (zones A0–A3). Enabled BLE-based real-time wireless transmission and MATLAB-based 30×30 dynamic heatmap generation with a 1s response."
    }
  ],
  
  certifications: [
    { name: "Cisco Python 1 and 2 Essentials", issuer: "Cisco" },
    { name: "Cisco Cybersecurity Essentials", issuer: "Cisco" },
    { name: "Cisco ITN, SRWE, ENSA", issuer: "Cisco" },
    { name: "Analyze Data with Power BI", issuer: "Microsoft" },
    { name: "Software Conceptual Design", issuer: "Various" },
    { name: "Python for Data Science", issuer: "IBM" },
    { name: "Advanced SQL", issuer: "Various" }
  ],
  
  awards: [
    {
      name: "Dream Student Award",
      issuer: "Dr. Abdul Kalam Trust for Educational & Greenery",
      date: "Oct 2019",
      description: "Awarded for exceptional academic performance and active participation in extracurricular activities."
    }
  ]
};