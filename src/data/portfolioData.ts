import { Project, ExperienceItem, SkillCategory, ResearchContribution, HackathonRecognition, OpenSourceProject, ConferenceExperience } from '../types';

export const PERSONAL_INFO = {
  name: "Amrit Lal Paswan",
  handle: "amrit@dev",
  title: "Software Developer & AI Systems Engineer",
  education: "B.Tech in Computer Science & Engineering",
  location: "Noida, India",
  email: "amritpaswan5952@gmail.com",
  phone: "+91-7797486522",
  githubUrl: "https://github.com/Amritemperor123",
  githubUsername: "Amritemperor123",
  linkedinUrl: "https://linkedin.com/in/amrit-lal-paswan-a9363727b",
  huggingfaceUrl: "https://huggingface.co/Amritemperor123",
  status: "Open to opportunities (AI Infra, Systems, LLM Tooling)",
  positioning: "Engineers privacy-first LLM developer tools, containerized execution environments, and domain-adapted AI systems end-to-end.",
  summaryNarrative: [
    "Designs complete systems architecture-first, not isolated scripts. Works across AI/LLM engineering (RAG, autonomous agents, LoRA fine-tuning), backend infrastructure (Docker, Kubernetes, Kafka), computer vision (OpenCV, YOLO, edge deployment), and developer tooling (CLI agents, VS Code extensions, local-first LLM workflows).",
    "Driven by a strict Linux-first, portability-minded, and privacy-conscious philosophy where models execute on-device and infrastructure scales deterministically without cloud lock-in. Currently pursuing B.Tech in Noida, India, building production-grade tools and systems for developers and researchers."
  ],
  roleRotations: [
    "AI Systems Engineer",
    "LLM Tooling Builder",
    "Backend & Infra Developer",
    "Computer Vision Engineer"
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
    skills: ["PostgreSQL", "PostGIS", "MongoDB", "SQLite", "Redis", "Firebase"]
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
  {
    id: "ncc-lab-iit-bhu",
    company: "NCC Lab, IIT BHU",
    role: "Research Intern",
    location: "Varanasi, India",
    duration: "1 Year",
    period: "May 2024 – May 2025",
    skills: [
      "React.js", "Express.js", "Node.js", "TypeScript", "Docker", 
      "React Native", "Python", "C++", "Django", "FastAPI", 
      "SQLite", "PostgreSQL", "Grafana", "GCP"
    ],
    achievements: [
      "Architected real-time telemetry and spatial monitoring backends for high-frequency IoT sensor streams and environmental monitoring networks.",
      "Engineered cross-platform GIS applications incorporating PostGIS spatial queries, polygon bounding evaluations, and asynchronous map layer rendering.",
      "Designed and containerized microservice architectures with comprehensive observability pipelines using Grafana, Prometheus, and Google Cloud Platform.",
      "Benchmarked edge computer vision inference pipelines on NVIDIA Jetson embedded hardware, optimizing memory footprints and FPS throughput."
    ]
  },
  {
    id: "amogh",
    company: "AMOGH – Ever Useful",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "6 Months",
    period: "Nov 2023 – Apr 2024",
    skills: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js", "AWS"],
    achievements: [
      "Engineered high-performance user interfaces and responsive web modules using React.js and Tailwind CSS with strict accessibility compliance.",
      "Built resilient RESTful API endpoints in Express.js with MongoDB indexing strategies, reducing query latency by over 35%.",
      "Configured automated deployment workflows and compute container hosting on AWS EC2, bolstering infrastructure uptime and CI/CD pipelines."
    ]
  },
  {
    id: "zaalima",
    company: "Zaalima Development",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "1 Month",
    period: "Sep 2023 – Oct 2023",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    achievements: [
      "Built and deployed full-stack MERN application modules with JWT authentication, RBAC authorization, and state persistence.",
      "Audited and refactored asynchronous API controllers, standardizing structured JSON payloads and error logging."
    ]
  },
  {
    id: "trustform",
    company: "TrustForm",
    role: "Data Entry Intern",
    location: "Remote",
    duration: "2 Months",
    period: "Jun 2023 – Jul 2023",
    skills: ["Python", "MS Excel"],
    achievements: [
      "Automated complex tabular data verification workflows utilizing custom Python data parsing scripts, eliminating manual reconciliation overhead.",
      "Audited and cleaned high-volume database records with 99.8% precision, establishing reproducible data ingestion pipelines."
    ]
  }
];

export const PROJECTS: Project[] = [
  // Top 6 Featured
  {
    id: "lm-studio-cli-agent",
    title: "LM Studio CLI Agent",
    hook: "Local-first terminal AI coding agent with modular inference orchestration across LM Studio, llama.cpp, and Ollama.",
    description: "A terminal-native autonomous coding assistant engineered for developers who demand zero external API dependency and strict local data sovereignty. Orchestrates local LLM runtimes with sub-millisecond dispatch, streaming responses, and AST-aware file patching.",
    category: "AI & LLM",
    tags: ["Python", "LM Studio API", "llama.cpp", "Ollama", "Bash", "Linux", "AsyncIO"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/lm-studio-cli-agent",
    architectureHighlights: [
      "Engineered pluggable inference backend abstraction supporting LM Studio local server, llama.cpp HTTP server, and Ollama endpoints.",
      "Built an AST-based workspace analyzer that inspects directory trees, reads active buffers, and applies surgical diff patches without hallucinating file content.",
      "Implemented a persistent session memory buffer with token budget tracking and configurable context window compaction."
    ],
    systemSpecs: {
      runtime: "Python 3.11+ / C++ Backends",
      throughputOrLatency: "Sub-15ms local dispatch",
      licenseOrStatus: "MIT Open Source"
    }
  },
  {
    id: "multi-agent-orchestrator",
    title: "Multi-Agent AI Orchestration Platform",
    hook: "FastAPI-based multi-agent execution system with OpenTelemetry, Prometheus, and Grafana observability.",
    description: "A distributed agent runtime that choreographs specialized autonomous LLM agents across stateful DAG workflows. Designed for mission-critical enterprise tasks with strict fallback routing, structured tool execution, and granular telemetry.",
    category: "AI & LLM",
    tags: ["FastAPI", "Python", "LangGraph", "LangChain", "OpenTelemetry", "Prometheus", "Grafana", "Docker", "Redis"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/multi-agent-orchestration-platform",
    architectureHighlights: [
      "Designed DAG execution engine with parallel branch evaluation, conditional node routing, and cyclic re-try loops on validation failure.",
      "Integrated OpenTelemetry distributed tracing measuring per-step token consumption, agent decision entropy, and execution latency in Grafana dashboards.",
      "Built asynchronous state persistence layer backed by Redis and PostgreSQL for long-running human-in-the-loop workflows."
    ],
    systemSpecs: {
      runtime: "FastAPI / Docker / Redis",
      throughputOrLatency: "Full distributed trace logging",
      licenseOrStatus: "Production-ready infra"
    }
  },
  {
    id: "medical-llm-fine-tuning",
    title: "Domain-Adaptive 8B Medical LLM Fine-Tuning",
    hook: "LoRA fine-tuning on ~1M clinical records with quantization and specialized diagnostic evaluation.",
    description: "Comprehensive domain adaptation pipeline transforming an 8B base model into a specialized clinical reasoning engine. Engineered synthetic data filtering, curated medical QA datasets, and executed parameter-efficient fine-tuning with 4-bit/8-bit quantization.",
    category: "AI & LLM",
    tags: ["PyTorch", "Hugging Face", "Transformers", "LoRA", "PEFT", "Unsloth", "vLLM", "Python"],
    featured: true,
    huggingfaceUrl: "https://huggingface.co/Amritemperor123/domain-adaptive-8b-medical-llm",
    architectureHighlights: [
      "Processed and filtered ~1M unstructured clinical records, discharge summaries, and medical QA pairs into structured instruction-tuning formats.",
      "Applied Low-Rank Adaptation (LoRA) on attention and MLP projection weights, decreasing memory overhead by 70% during training.",
      "Evaluated model outputs against standard medical reasoning benchmarks (MedQA, PubMedQA) with measurable accuracy improvements over base weights."
    ],
    systemSpecs: {
      runtime: "PyTorch / vLLM / 4-bit AWQ",
      throughputOrLatency: "High-throughput edge serving",
      licenseOrStatus: "Hugging Face Model Weights"
    }
  },
  {
    id: "wordrobe",
    title: "Wordrobe",
    hook: "Qt/C++ AI-assisted desktop editor with multi-format live preview engine and local copilot.",
    description: "A native C++ desktop editing environment built for speed, memory efficiency, and offline-first workflows. Features a low-latency split-view AST rendering engine alongside an embedded local copilot running quantized models via llama.cpp.",
    category: "Systems & Infra",
    tags: ["C++", "Qt 6", "QML", "llama.cpp", "CMake", "Markdown", "LaTeX"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/wordrobe",
    architectureHighlights: [
      "Architected using modern Qt 6 / QML with native C++ controllers, achieving zero-lag keystroke latency even on files exceeding 100k lines.",
      "Integrated direct C++ bindings to llama.cpp for instant offline code and prose completion without invoking external Node/Python runtimes.",
      "Engineered multi-format preview engine supporting synchronous Markdown, KaTeX mathematical typesetting, and custom syntax themes."
    ],
    systemSpecs: {
      runtime: "Native C++20 / Qt 6",
      throughputOrLatency: "<4ms keystroke buffer latency",
      licenseOrStatus: "Desktop Application"
    }
  },
  {
    id: "sandwitch-vscode",
    title: "Sandwitch",
    hook: "Privacy-first local-LLM VS Code extension eliminating external API dependencies and cloud telemetry leaks.",
    description: "A lightweight VS Code extension that connects editors directly to local inference endpoints (Ollama, llama.cpp, LM Studio). Provides streaming in-editor completions, contextual refactoring, and code explanations with absolute data isolation.",
    category: "Developer Tooling",
    tags: ["TypeScript", "VS Code API", "Ollama", "llama.cpp", "Webview", "Node.js"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/sandwitch-vscode",
    architectureHighlights: [
      "Communicates over local Unix sockets and localhost HTTP streams, ensuring zero codebase bytes ever leave the developer's physical machine.",
      "Custom diff-view reconciliation applying proposed AI edits directly to active editor buffers with single-click accept/reject controls.",
      "Auto-detects active local models, context window capacities, and GPU acceleration status from the VS Code status bar."
    ],
    systemSpecs: {
      runtime: "Node.js / VS Code Extension Host",
      throughputOrLatency: "Instant streaming token delivery",
      licenseOrStatus: "VS Code Marketplace / Open Source"
    }
  },
  {
    id: "kafka-microservice",
    title: "Kafka-Microservice",
    hook: "Event-driven microservice architecture with Kafka producers, consumer groups, and idempotency guarantees.",
    description: "High-throughput asynchronous event streaming system demonstrating decoupled service communication, dead-letter recovery queues, and fault-tolerant message processing under high concurrency.",
    category: "Systems & Infra",
    tags: ["Apache Kafka", "Docker", "Express.js", "Node.js", "Redis", "Zookeeper"],
    featured: true,
    githubUrl: "https://github.com/Amritemperor123/kafka-microservice",
    architectureHighlights: [
      "Built multi-partition Kafka producers with idempotent delivery semantics and configurable consumer group rebalancing.",
      "Created transactional inbox/outbox patterns backed by Redis to prevent duplicate event ingestion during broker failovers.",
      "Encapsulated multi-broker deployment with automated health checking and topic provisioning scripts in Docker Compose."
    ],
    systemSpecs: {
      runtime: "Apache Kafka / Node.js / Docker",
      throughputOrLatency: "10k+ msg/sec benchmarked throughput",
      licenseOrStatus: "System Architecture Template"
    }
  },

  // Additional Projects in Full Grid
  {
    id: "wafer-defect-detection",
    title: "Wafer Defect Detection Pipeline",
    hook: "Automated semiconductor wafer surface defect classification and localization system using YOLO and OpenCV.",
    description: "Computer vision inspection pipeline designed for semiconductor manufacturing inspection. Detects scratching, pitting, and particle contamination on silicon wafer SEM micrographs.",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "PyTorch", "YOLO", "ONNX", "Flask"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/wafer-defect-detection",
    architectureHighlights: [
      "Trained YOLO object detector on augmented wafer SEM datasets, achieving >94% mAP across fine defect classes.",
      "Exported optimized ONNX weights for sub-40ms batch inference execution on commodity edge GPUs."
    ]
  },
  {
    id: "fuel-route-optimizer",
    title: "Fuel Route Optimizer API",
    hook: "Spatial routing and fueling optimization service computing cost-minimal transit corridors.",
    description: "A geospatial optimization service that solves constrained vehicle routing problems by factoring dynamic gas station fuel pricing, vehicle tank capacities, and regulatory highway corridors.",
    category: "Systems & Infra",
    tags: ["FastAPI", "Python", "PostGIS", "PostgreSQL", "OSRM", "Docker"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/fuel-route-optimizer",
    architectureHighlights: [
      "Integrated OSRM routing engine with PostGIS spatial buffer indexing to locate optimal refueling points along multi-thousand-kilometer paths.",
      "Packaged into containerized REST API with interactive Swagger OpenAPI documentation and sub-second route calculation."
    ]
  },
  {
    id: "gis-service-management",
    title: "GIS Service Management Platform",
    hook: "Geospatial infrastructure management platform for tracking field assets and telemetry sensors.",
    description: "Interactive web platform enabling municipal engineers and field technicians to monitor spatial infrastructure, survey polygons, and sensor telemetry across map layers.",
    category: "Full-Stack",
    tags: ["React.js", "TypeScript", "PostgreSQL", "PostGIS", "Express.js", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/gis-service-management",
    architectureHighlights: [
      "Implemented vector tile map visualizers with spatial query clustering and real-time attribute editing.",
      "Created structured database schemas linking hardware assets, inspection logs, and spatial bounding boxes in PostGIS."
    ]
  },
  {
    id: "opengl-game-development",
    title: "OpenGL 3D Graphics & Physics Engine",
    hook: "Custom C++ 3D rendering engine with collision detection, lighting shaders, and scene graph.",
    description: "From-scratch 3D graphics engine written in modern C++ and OpenGL 4.5. Features deferred lighting shaders, shadow mapping, camera frustum culling, and rigid-body bounding volume hierarchies.",
    category: "Systems & Infra",
    tags: ["C++", "OpenGL", "GLSL", "CMake", "GLFW", "GLM"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/opengl-game-engine",
    architectureHighlights: [
      "Engineered custom GLSL shader pipelines including Blinn-Phong lighting, directional shadow cascades, and normal mapping.",
      "Built spatial octree partitioning for accelerated ray-casting and collision queries in dynamic 3D environments."
    ]
  },
  {
    id: "ai-notes-workspace",
    title: "AI Notes Workspace",
    hook: "Local-first markdown knowledge base with automated semantic graph linking and vector retrieval.",
    description: "A desktop-grade note-taking environment that embeds local vector similarity to link connected concepts and extract synthesized summaries from personal research notebooks.",
    category: "Full-Stack",
    tags: ["React.js", "TypeScript", "SQLite", "Vector Embeddings", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/ai-notes-workspace",
    architectureHighlights: [
      "Generates on-device semantic embeddings to construct dynamic knowledge graph connections between disparate markdown entries.",
      "Stores all user notes in plain standard Markdown files on the local filesystem with zero proprietary lock-in."
    ]
  },
  {
    id: "web-local-chatbot",
    title: "Web Local Chatbot",
    hook: "Browser-driven local LLM interface running models purely on WebGPU via WebLLM.",
    description: "Browser-based private chat interface executing compact language models directly on client GPUs using WebGPU without forwarding any prompts to cloud servers.",
    category: "AI & LLM",
    tags: ["TypeScript", "WebGPU", "WebLLM", "React.js", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/web-local-chatbot",
    architectureHighlights: [
      "Zero server hosting overhead: model weights download directly to IndexedDB cache and execute via shader instructions in-browser.",
      "Clean terminal-style chat UI with adjustable temperature, system prompts, and memory compaction."
    ]
  },
  {
    id: "blog-editor",
    title: "Technical Blog Editor",
    hook: "Developer-centric publication tool with live LaTeX math, code highlighting, and export capabilities.",
    description: "A focused writing environment engineered specifically for technical writers, researchers, and systems engineers needing rapid math typesetting and syntax-highlighted code blocks.",
    category: "Developer Tooling",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "KaTeX", "Shiki"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/blog-editor",
    architectureHighlights: [
      "Instant dual-pane synchronous scrolling with live AST rendering for complex mathematical equations and multi-language snippets.",
      "Exports clean, un-obfuscated HTML, GitHub-flavored Markdown, and printable PDF formats."
    ]
  },
  {
    id: "student-dashboard",
    title: "Student Academic Analytics Dashboard",
    hook: "Educational progress and performance tracking dashboard with predictive analytics.",
    description: "Full-stack institutional dashboard tracking student GPA trajectories, credit distribution, course milestones, and attendance patterns.",
    category: "Full-Stack",
    tags: ["React.js", "Express.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/student-dashboard",
    architectureHighlights: [
      "Interactive data visualizations displaying credit progress, semester grade comparisons, and graduation requirements.",
      "Role-based access control isolating faculty administrative oversight from student view credentials."
    ]
  },
  {
    id: "marketing-page",
    title: "Developer Tooling Showcase",
    hook: "High-contrast, keyboard-navigable landing page for developer productivity tools.",
    description: "Minimalist, performance-oriented landing showcase featuring clean typography, instant loading, and zero layout shift.",
    category: "Full-Stack",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Motion"],
    featured: false,
    githubUrl: "https://github.com/Amritemperor123/marketing-page",
    architectureHighlights: [
      "Designed with strict dark-first aesthetics, high contrast ratios, and accessible ARIA keyboard navigation.",
      "Achieved 100/100 Lighthouse performance metrics with minimal bundle footprint."
    ]
  }
];

export const RESEARCH_OVERVIEW = {
  summary: "Conducts applied research at the intersection of real-time monitoring, embedded computing, intelligent infrastructure, and domain-adapted AI models. Focuses on architecting robust systems that ingest high-frequency sensor telemetry, execute edge inference under power constraints, and evaluate distributed microservices deterministically.",
  contributions: [
    {
      title: "Cross-Platform GIS Telemetry Systems",
      description: "Designed cross-platform geospatial applications and scalable ingestion backends capable of processing high-frequency sensor streams and spatial coordinate transformations.",
      tags: ["PostGIS", "GIS", "FastAPI", "React Native"]
    },
    {
      title: "Distributed Microservice Benchmark Frameworks",
      description: "Evaluated microservice network topologies and data serialization overhead under synthetic latency spikes and burst network conditions.",
      tags: ["Kafka", "Docker", "Prometheus", "Networking"]
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
      title: "Intelligent Transportation & Digital Twins",
      description: "Architected real-time spatial pipelines supporting intelligent urban infrastructure monitoring, transit fleet tracking, and automated sensor health audits.",
      tags: ["Digital Twins", "RTSP", "Spatial Computing", "C++"]
    }
  ],
  interests: [
    "AI Systems",
    "Edge AI",
    "Computer Vision",
    "Distributed Systems",
    "LLM Architecture",
    "Robotics",
    "Intelligent Transportation Systems",
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
  year: "2024",
  description: "Ranked in the top 4 finalists globally for developing an intelligent planetary telemetry and environmental monitoring system. Leveraged geospatial data modeling and machine learning to analyze environmental risks and predictive infrastructure impacts.",
  tags: ["Geospatial AI", "Google Cloud", "Computer Vision", "Environmental Telemetry"]
};

export const OPEN_SOURCE_PROJECTS: OpenSourceProject[] = [
  {
    title: "Blender 3D CAD Add-on",
    tech: ["Python", "Blender Python API (bpy)", "Mathutils", "3D Geometry"],
    description: "An open-source CAD utility add-on for Blender engineered to accelerate mechanical drafting, mesh vertex alignment, parametric dimension measurement, and precision engineering modeling workflows.",
    githubUrl: "https://github.com/Amritemperor123/blender-cad-addon",
    starsOrStatus: "Active Open Source Tool"
  }
];

export const WORKSHOPS_CONFERENCES: ConferenceExperience[] = [
  {
    role: "Startup Exhibitor",
    event: "India Mobile Congress (IMC) 2025",
    year: "2025",
    focus: "AI-driven Edge Infrastructure & Intelligent Telemetry",
    description: "Exhibited and demonstrated real-time AI-driven edge infrastructure solutions and spatial telemetry pipelines to telecom leaders, enterprise architects, and technology delegates at Asia's premier digital technology forum."
  }
];
