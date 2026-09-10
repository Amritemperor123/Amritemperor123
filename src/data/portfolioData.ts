import { Project, ExperienceItem, SkillCategory, ResearchContribution, HackathonRecognition, OpenSourceProject, ConferenceExperience } from '../types';

export const PERSONAL_INFO = {
  name: "Amrit Lal Paswan",
  handle: "amrit",
  title: "Full Stack & AI Engineer",
  education: "B.Tech in Computer Science & Engineering",
  location: "Noida, India",
  email: "amritpaswan5952@gmail.com",
  phone: "+91-7797486522",
  githubUrl: "https://github.com/Amritemperor123",
  githubUsername: "Amritemperor123",
  linkedinUrl: "https://linkedin.com/in/amrit-lal-paswan-a9363727b",
  huggingfaceUrl: "https://huggingface.co/Amritemperor123",
  status: "Open to opportunities (Full Stack, Backend, AI/ML)",
  positioning: "Engineers privacy-first LLM developer tools, containerized execution environments, and domain-adapted AI systems end-to-end.",
  summaryNarrative: [
    "I design smart solutions, not isolated scripts. I've worked across AI/ML & LLM engineering (RAG, autonomous agents, LoRA fine-tuning), backend infrastructure (Docker, Kubernetes, Kafka), computer vision (OpenCV, YOLO, edge deployment), and developer tooling (CLI agents, VS Code extensions, local-first LLM workflows).",
    "Driven by a strict Linux-first, portability-minded, and privacy-conscious philosophy where models execute on-device and infrastructure scales deterministically without cloud lock-in. Freshly graduated, I'm looking to build production-grade tools and systems for developers and researchers."
  ],
  roleRotations: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "DevOps"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    iconName: "Code2",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "Bash"]
  },
  {
    name: "AI / ML",
    iconName: "Cpu",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "TensorRT", "ONNX", "Transformers", "LoRA"]
  },
  {
    name: "LLM Engineering",
    iconName: "Terminal",
    skills: ["LangChain", "LangGraph", "llama.cpp", "RAG", "Vector Databases", "Local LLMs", "Ollama"]
  },
  {
    name: "Backend",
    iconName: "Server",
    skills: ["FastAPI", "Express.js", "Django", "Flask", "REST APIs", "Node.js"]
  },
  {
    name: "Frontend",
    iconName: "Layout",
    skills: ["React.js", "React Native", "Qt/QML", "Tailwind CSS", "HTML5", "CSS3", "TypeScript"]
  },
  {
    name: "Databases",
    iconName: "Database",
    skills: ["PostgreSQL", "PostGIS", "MongoDB", "SQLite", "Redis", "Supabase", "Firebase"]
  },
  {
    name: "Cloud & DevOps",
    iconName: "Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "NGINX", "Apache", "Kafka", "Linux"]
  },
  {
    name: "Embedded / Edge",
    iconName: "Microchip",
    skills: ["Jetson Nano", "ESP-32", "Arduino", "GPIO", "MQTT", "RTSP"]
  },
  {
    name: "Tools",
    iconName: "Wrench",
    skills: ["Git", "Blender 3D", "VS Code", "Figma", "Zed", "Prometheus", "Grafana"]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  // NCC Lab
  {
    id: "ncc-lab-iit-bhu",
    company: "NCC Lab, IIT BHU",
    role: "Research Intern",
    location: "Varanasi, India",
    duration: "1 Year",
    period: "August 2025 – May 2026",
    skills: [
      "React.js", "Express.js", "Node.js", "TypeScript", "Docker",
      "React Native", "Python", "C++", "Django", "FastAPI",
      "SQLite", "PostgreSQL", "Grafana", "GCP"
    ],
    achievements: [
      "Developed cross-platform React Native applications for telemetry monitoring, operational tracking, and GIS-enabled workflows, featuring real-time dashboards, historical analytics, and multi-stage status management systems.",
      "Contributed to digital twin and smart infrastructure projects involving edge AI, IoT telemetry pipelines, pattern recognition, hazard prediction, and distributed response systems across cloud and on-device environments.",
      "Designed and deployed backend and observability pipelines using Docker, Telegraf, InfluxDB, Grafana, and GCP, enabling scalable real-time data ingestion, monitoring, and analytics for sensor-driven systems.",
      "Evaluated and reverse-engineered microservice-based platforms across undocumented environments, performing deployment analysis, troubleshooting, infrastructure planning, and system workflow optimization for production-oriented deployments."
    ]
  },
  // Amogh
  {
    id: "amogh",
    company: "AMOGH – Ever Useful",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "6 Months",
    period: "May 2025 – November 2025",
    skills: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js", "AWS"],
    achievements: [
      "Led frontend development of the company website using React, architecting reusable components and optimizing UI responsiveness.",
      "Collaborated with backend team to design and implement RESTful APIs and service layers for core application features.",
      " Integrated AWS services (EC2, S3, IAM) for application hosting, storage management, and secure access configuration.",
      "Designed and architected an AI-powered system to assist medical personnel, defining model integration workflows, data pipelines, and deployment strategy."
    ]
  },
  // Zaalima
  {
    id: "zaalima",
    company: "Zaalima Development",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "1 Month",
    period: "June 2024 – July 2024",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    achievements: [
      "Led full-stack development for assigned e-commerce modules using React, Express.js, Node.js, and MongoDB.",
      "Architected MongoDB database schemas and relationships for product catalog management and backend services.",
      "Delivered production-ready deployments through GitHub Pages and Render, supporting stakeholder demonstrations and testing."
    ]
  },
  // TrustForm
  {
    id: "trustform",
    company: "TrustForm",
    role: "Data Entry Intern",
    location: "Remote",
    duration: "2 Months",
    period: "Jun 2023 – Jul 2023",
    skills: ["Python", "MS Excel"],
    achievements: [
      "Processed high-volume document datasets by extracting and organizing information from PDF files into structured Excel spreadsheets.",
      "Utilized advanced Microsoft Excel techniques to maintain accurate records, summarize data, and prepare deliverables for large-scale reporting."
    ]
  }
];

export const PROJECTS: Project[] = [
  // Top 6 Featured
  // LM Studio CLI
  {
    id: "lm-studio-cli-agent",
    title: "LM Studio CLI Agent",
    hook: "Local-first terminal AI coding agent with modular inference orchestration across LM Studio, llama.cpp, and Ollama. [Under rebuild in Rust to have native support to model hosting and binaries]",
    description: "A terminal-native autonomous coding assistant engineered for developers who demand zero external API dependency and strict local data sovereignty. Orchestrates local LLM runtimes with sub-millisecond dispatch, streaming responses, and AST-aware file patching.",
    category: "AI & LLM",
    tags: ["JavaScript", "LM Studio"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/LM-Studio-CLI",
    architectureHighlights: [
      "A pluggable inference backend abstraction supporting LM Studio local server, llama.cpp HTTP server, and Ollama endpoints.",
      "Built around a local-first CLI-based AI agent capable of executing iterative reasoning loops within any project directory, enabling context-aware code generation, file manipulation, and task automation without reliance on external APIs.",
      "Contains a modular inference orchestration layer integrating local LLM runtimes, with dynamic context injection and workspace-aware prompting to support multi-step task execution and autonomous agent behaviour."
    ],
    systemSpecs: {
      runtime: "JavaScript / Node.js",
      throughputOrLatency: "Sub-15ms local dispatch",
      licenseOrStatus: "MIT Open Source"
    }
  },
  // Multi Agent Orchestration
  {
    id: "multi-agent-orchestrator",
    title: "Multi-Agent AI Orchestration Platform",
    hook: "FastAPI-based multi-agent execution system with OpenTelemetry, Prometheus, and Grafana observability.",
    description: "A distributed agent runtime that choreographs specialized autonomous LLM agents across stateful DAG workflows. Designed for mission-critical enterprise tasks with strict fallback routing, structured tool execution, and granular telemetry.",
    category: "AI & LLM",
    tags: ["Python", "FastAPI", "Multi-Agent System", "OpenTelemetry", "Prometheus", "Grafana",],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/Multi-Agent-System",
    architectureHighlights: [
      "Developed a modular multi-agent AI system supporting coordinated task execution, inter-agent communication, and tool-augmented reasoning workflows through a scalable orchestration architecture.",
      "Integrated OpenTelemetry distributed tracing measuring per-step token consumption, agent decision entropy, and execution latency in Grafana dashboards.",
      "Engineered end-to-end observability pipelines using OpenTelemetry, Prometheus, and Grafana Tempo for distributed tracing, metrics collection, and real-time monitoring of agent interactions, inference flows, and system performance."
    ],
    systemSpecs: {
      runtime: "Python / FastAPI / Grafana",
      throughputOrLatency: "Full distributed trace logging",
      licenseOrStatus: "Production-ready infra"
    }
  },
  // Medical LLM Fine-Tuning
  {
    id: "medical-llm-fine-tuning",
    title: "Domain-Adaptive 8B Medical LLM Fine-Tuning",
    hook: "LoRA fine-tuning on ~1M clinical records with quantization and specialized diagnostic evaluation.",
    description: "Comprehensive domain adaptation pipeline transforming an 8B base model into a specialized clinical reasoning engine. Engineered synthetic data filtering, curated medical QA datasets, and executed parameter-efficient fine-tuning with 4-bit/8-bit quantization.",
    category: "AI & LLM",
    tags: ["PyTorch", "Hugging Face", "Transformers", "LoRA", "Unsloth", "Python"],
    featured: true,
    huggingfaceUrl: "https://huggingface.co/Amritemperor123/PoC-demo",
    architectureHighlights: [
      "Designed the end-to-end architecture for a medical AI assistant system, defining data pipelines, model integration workflows, and deployment strategy.",
      "Processed and filtered ~1M unstructured clinical records, discharge summaries, and medical QA pairs into structured instruction-tuning formats.",
      "Applied Low-Rank Adaptation (LoRA) on attention and MLP projection weights, decreasing memory overhead by 70% during training.",
      "Evaluated model outputs against standard medical reasoning benchmarks (MedQA, PubMedQA) with measurable accuracy improvements over base weights."
    ],
    systemSpecs: {
      runtime: "llama.cpp, Python",
      throughputOrLatency: "High-throughput edge serving",
      licenseOrStatus: "Hugging Face Model Weights"
    }
  },
  // Wordrobe
  {
    id: "wordrobe",
    title: "Wordrobe",
    hook: "AI-assisted desktop editor built on Qt/C++ for  multi-format live preview engine and local copilot.",
    description: "A native C++ desktop editing environment built for speed, memory efficiency, and offline-first workflows. Features a low-latency split-view AST rendering engine alongside an embedded local copilot running quantized models via llama.cpp.",
    category: "Systems & Infra",
    tags: ["C++", "Qt", "QML", "llama.cpp", "CMake", "Markdown"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/Wordrobe",
    architectureHighlights: [
      "A modern Qt 6 / QML application with native C++ controllers, achieving zero-lag keystroke latency even on files exceeding 100k lines.",
      "Integrated direct C++ bindings to llama.cpp for instant offline text generation and completion without invoking external Node/Python runtimes.",
      "A real-time multi-format preview engine enabling synchronized side by side rendering of Markdown, PDF, Word, and image outputs from raw text input."
    ],
    systemSpecs: {
      runtime: "Native C++ / Qt",
      throughputOrLatency: "<4ms keystroke buffer latency",
      licenseOrStatus: "MIT Open Source"
    }
  },
  // Sandwitch
  {
    id: "sandwitch-vscode",
    title: "Sandwitch",
    hook: "Privacy-first local-LLM VS Code extension eliminating external API dependencies and cloud telemetry leaks.",
    description: "A lightweight VS Code extension that connects editors directly to local inference endpoints (Ollama, llama.cpp, LM Studio). Provides streaming in-editor completions, contextual refactoring, and code explanations with absolute data isolation.",
    category: "Developer Tooling",
    tags: ["TypeScript", "VS Code Extension Development Toolkit"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/Sandwitch",
    architectureHighlights: [
      "Communicates over local Unix sockets and localhost HTTP streams, ensuring zero codebase bytes ever leave the developer's physical machine.",
      "Capable of workspace aware context aggregation supporting single-file and multi-file reasoning for intelligent code edits and refactoring assistance.",
      "Auto-detects active local models, context window capacities, and GPU acceleration status from the VS Code status bar."
    ],
    systemSpecs: {
      runtime: "VS Code Extension Development Toolkit",
      throughputOrLatency: "Instant streaming token delivery",
      licenseOrStatus: "MIT Open Source"
    }
  },
  // Kafka Microservice
  {
    id: "kafka-microservice",
    title: "Kafka-Microservice",
    hook: "Event-driven microservice architecture with Kafka producers, consumer groups, and idempotency guarantees.",
    description: "High-throughput asynchronous event streaming system demonstrating decoupled service communication, dead-letter recovery queues, and fault-tolerant message processing under high concurrency of a standard Microservice architecture.",
    category: "Systems & Infra",
    tags: ["Apache Kafka", "Docker", "Express.js", "React.js", "Node.js", "Redis", "Zookeeper"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/Microservice-Kafka",
    architectureHighlights: [
      "Built multi-partition Kafka producers with idempotent delivery semantics and configurable consumer group rebalancing.",
      "Architected an event-driven microservices system using Node.js and Apache Kafka, enabling high-throughput, loosely coupled service communication.",
      "Encapsulated multi-broker deployment with automated health checking and topic provisioning scripts in Docker Compose."
    ],
    systemSpecs: {
      runtime: "Apache Kafka / React.js / Node.js / Docker",
      throughputOrLatency: "10k+ msg/sec benchmarked throughput",
      licenseOrStatus: "System Architecture Template"
    }
  },

  // Additional Projects in Full Grid
  // Wafer Python IDE
  {
    id: "wafer-python-ide",
    title: "Wafer Python IDE",
    hook: "Containerized local AI-assisted web based python IDE eliminating cloud AI dependencies and telemetry leaks.",
    description: "A containerized Python IDE that connects directly to local inference endpoints (Ollama, llama.cpp, LM Studio). Provides Docker based python sandbox & execution environment, local AI based code generation & completions, contextual refactoring, and code explanations with absolute data isolation.",
    category: "Full-Stack",
    tags: ["Python", "Docker", "React.js", "Node.js", "llama.cpp"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/Wafer_web_editor",
    architectureHighlights: [
      "A browser-based Python IDE with React, featuring project-level file management and dynamic workspace handling, supported by Docker-based sandboxed environments for secure, isolated code execution.",
      "Integrated hybrid AI assistance through a modular inference orchestration layer, enabling seamless support for both local and cloud-based LLMs."
    ]
  },
  // Fuel Route Optimizer
  {
    id: "fuel-route-optimizer",
    title: "Fuel Route Optimizer API",
    hook: "Spatial routing and fueling optimization service computing cost-minimal transit corridors.",
    description: "A geospatial optimization service that solves constrained vehicle routing problems by factoring dynamic gas station fuel pricing, vehicle tank capacities, and regulatory highway corridors.",
    category: "Systems & Infra",
    tags: ["Django", "Python", "PostGIS", "PostgreSQL", "OSRM"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/Fuel-API-Optimizer",
    architectureHighlights: [
      "A geospatial route optimization system that combines routing, geocoding, and fuel-price analysis to generate optimal refuelling strategies for long-distance transportation.",
      "Implemented spatial indexing, corridor-based search, and caching mechanisms using PostGIS and Redis, improving query efficiency and reducing external API overhead."
    ]
  },
  // GIS Service Management
  {
    id: "gis-service-management",
    title: "GIS Service Management Application",
    hook: "Geospatial infrastructure management platform for tracking field assets and telemetry sensors.",
    description: "Interactive web platform enabling municipal engineers and field technicians to monitor spatial infrastructure, survey polygons, and sensor telemetry across map layers.",
    category: "Full-Stack",
    tags: ["React Native", "TypeScript", "SQLite"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/GIS-App",
    architectureHighlights: [
      "A cross-platform GIS mobile application featuring real-time map interaction, geospatial job tracking, and location-based workflow management.",
      "Provides dashboards, notification systems, and geofenced image uploads to support end-to-end task lifecycle monitoring in field environments."
    ]
  },
  // Game Dev
  {
    id: "opengl-game-development",
    title: "OpenGL 3D Game Development",
    hook: "Custom C++ 3D rendering engine with collision detection, lighting shaders, and scene graph.",
    description: "From-scratch 3D graphics engine written in modern C++ and OpenGL 3.3. Features deferred lighting shaders, shadow mapping, camera frustum culling, and rigid-body bounding volume hierarchies.",
    category: "Systems & Infra",
    tags: ["C++", "OpenGL", "GLSL", "CMake", "GLFW", "GLM"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/OpenGL-game-Development",
    architectureHighlights: [
      "An interactive 3D application using OpenGL and C++, implementing real-time rendering, object transformations, lighting, and camera controls.",
      "Developed core game/engine features including input handling, scene management, and animation logic, optimizing rendering pipeline for smooth performance."
    ]
  },
  // AI Notes
  {
    id: "ai-notes-workspace",
    title: "AI Notes Workspace",
    hook: "Local-first markdown knowledge base with automated semantic graph linking and vector retrieval.",
    description: "A web based note-taking environment that uses AI to link connected concepts and extract synthesized summaries from personal research notebooks.",
    category: "Full-Stack",
    tags: ["React.js", "TypeScript", "SQLite", "Tailwind CSS", "LM Studio"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/AI-Notes",
    architectureHighlights: [
      "Built a full-stack collaborative notes application with JWT authentication, Markdown support, advanced search, and real-time auto-save capabilities.",
      "Engineered an AI enrichment pipeline using LM Studio local models and similar runtimes, automatically generating summaries and actionable insights with graceful fallback handling."
    ]
  },
  // Chatbot
  {
    id: "web-local-chatbot",
    title: "Web Local Chatbot",
    hook: "Browser-driven local LLM interface running models purely on GPU via LM Studio.",
    description: "Browser-based private chat interface executing compact language models directly on client GPUs using LM Studio and similar runtime providers without forwarding any prompts to cloud servers.",
    category: "AI & LLM",
    tags: ["TypeScript", "WebGPU", "WebLLM", "React.js", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/Web-Local-Chatbot",
    architectureHighlights: [
      "Developed a locally hosted chatbot system using Flask, LangChain, and Hugging Face embeddings, enabling retrieval-augmented responses over custom datasets.",
      "Implemented backend APIs and frontend integration for real-time chat, document ingestion, and semantic search using vector storage."
    ]
  },
  // Blog Editor
  {
    id: "blog-editor",
    title: "Technical Blog Editor",
    hook: "User-friendly platform for writing and managing technical blog posts with draft management and publishing workflows.",
    description: "A focused writing environment engineered specifically for technical writers, researchers, and systems engineers needing rapid math typesetting and syntax-highlighted code blocks.",
    category: "Full-Stack",
    tags: ["React.js", "TypeScript", "Express.js"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/Blog-Editor",
    architectureHighlights: [
      "Built a full-stack blog platform with React and Node.js/Express, supporting draft management, publishing workflows, and REST API integration.",
      "Implemented auto-save with debounce logic and backend persistence, ensuring data consistency and improved user experience."
    ]
  },
  // Student Dashboard
  {
    id: "student-dashboard",
    title: "Student Academic Analytics Dashboard",
    hook: "Educational progress and performance tracking dashboard with predictive analytics.",
    description: "Full-stack institutional dashboard tracking student GPA trajectories, credit distribution, course milestones, and attendance patterns.",
    category: "Full-Stack",
    tags: ["Express.js", "Typescript", "JavaScript", "HTML"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/Student-dashboard",
    architectureHighlights: [
      "Interactive data visualizations displaying credit progress, semester grade comparisons, and graduation requirements.",
      "Role-based access control isolating faculty administrative oversight from student view credentials."
    ]
  },
  // Marketing Page
  {
    id: "marketing-page",
    title: "Developer Tooling Showcase",
    hook: "User-friendly marketing landing page.",
    description: "Minimalist, performance-oriented landing showcase featuring clean typography, instant loading, and zero layout shift.",
    category: "Full-Stack",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/Marketing-Page-Demo",
    architectureHighlights: [
      "Built a responsive marketing landing page with HTML, CSS, and JavaScript, emphasizing clean UI, accessibility, and user engagement.",
      "Optimized layout and styling using modular design principles and responsive techniques, ensuring seamless performance across devices."
    ]
  }
];

export const RESEARCH_OVERVIEW = {
  summary: "Conducts applied research at the intersection of real-time monitoring, edge computing, smart systems, and domain-adapted AI models. Focuses on architecting robust systems that ingest high-frequency sensor telemetry, execute edge inference under power constraints, and evaluate distributed microservices deterministically.",
  contributions: [
    {
      title: "Cross-Platform GIS Telemetry Systems",
      description: "Designed cross-platform geospatial applications and scalable ingestion backends capable of processing high-frequency sensor streams and spatial coordinate transformations.",
      tags: ["PostGIS", "PostgreSQL", "Express.js", "React Native"]
    },
    {
      title: "Distributed Microservice Benchmark Frameworks",
      description: "Evaluated microservice network topologies and data serialization overhead under synthetic latency spikes and burst network conditions.",
      tags: ["Kafka", "Docker", "Grafana"]
    },
    {
      title: "Containerized Edge Observability Pipelines",
      description: "Implemented lightweight observability pipelines linking OpenTelemetry, Prometheus, and Grafana to track edge runtime metrics without exhausting local compute resources.",
      tags: ["OpenTelemetry", "Grafana", "Prometheus", "Linux"]
    },
    {
      title: "Edge AI Acceleration & Quantized Inference",
      description: "Deployed and benchmarked computer vision and transformer inference pipelines on NVIDIA Jetson and power-constrained edge hardware utilizing TensorRT and ONNX Runtime.",
      tags: ["TensorRT", "Jetson Nano", "YOLO", "ONNX"]
    },
    {
      title: "Smart Traffic Monitoring & Digital Twins",
      description: "Architected real-time spatial pipelines supporting intelligent urban infrastructure monitoring, transit fleet tracking, and automated sensor health audits.",
      tags: ["Digital Twins", "RTSP", "Spatial Computing", "C++"]
    },
    {
      title: "[Patent] Multi Purpose Terrain Adaptive Autonomous Platform to Cleanup Accumulated Snow on Cold Regions.",
      description: "Designed a robitic system to clean up accumulated snow, encorporating both land and air based actuators sharing a common unified platform.",
      tags: ["Robotics", "Autonomous Systems", "Blender 3D"]
    }
  ],
  interests: [
    "AI Systems",
    "Edge AI",
    "Computer Vision",
    "Distributed Systems",
    "LLM Architecture",
    "Robotics",
    "Digital Twins",
    "GIS & Spatial Computing",
    "High Performance Computing (HPC)"
  ]
};

export const HACKATHON_RECOGNITION: HackathonRecognition = {
  title: "Google IntelliPlanet Hackathon",
  host: "Hosted by KFUPM (King Fahd University of Petroleum and Minerals) & Google",
  result: "Finalist (Top 4)",
  location: "Saudi Arabia (Global / Hybrid)",
  year: "2026",
  description: "Ranked in the top 4 finalists globally for developing an intelligent telemetry and road infrastructure monitoring system. Leveraged sensor/telemmetry data modeling and machine learning to analyze road hazards and predictive measures to reduce impacts on vehicle.",
  tags: ["Edge AI", "Google Cloud", "Machine Learning", "Telemetry"]
};

export const OPEN_SOURCE_PROJECTS: OpenSourceProject[] = [
  {
    title: "CAD Add-on for Blender 3D",
    tech: ["Python", "Blender Python API (bpy)", "Mathutils", "3D Geometry"],
    description: "An open-source CAD utility add-on for Blender engineered to accelerate mechanical drafting, mesh vertex alignment, parametric dimension measurement, and precision engineering modeling workflows.",
    githubUrl: "https://github.com/Amritemperor123/BlenderCAD",
    starsOrStatus: "Active Open Source Tool"
  }
];

export const WORKSHOPS_CONFERENCES: ConferenceExperience[] = [
  {
    role: "Startup Exhibitor",
    event: "India Mobile Congress (IMC) 2025",
    year: "2025",
    focus: "Edge AI driven airborne signature monitoring system",
    description: "Exhibited and demonstrated real-time edge AI-driven solutions to industry leaders, enterprise architects, and technology delegates at Asia's premier digital technology forum."
  }
];
