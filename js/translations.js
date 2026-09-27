/**
 * Bilingual Translation Matrix (English & French)
 * Optimized for Avant-Garde Spatial Design System
 * Anandhu Krishna Portfolio
 */

const translations = {
  en: {
    // HUD Navigation
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",

    // Hero Section
    hero_status: "PARIS // 48.8566° N, 2.3522° E",
    hero_badge_vllm: "vLLM &bull; llama.cpp &bull; GCP",
    hero_badge_rag: "Agentic RAG &bull; Neo4j",
    hero_tagline: "<strong>AI Engineer &amp; Data Scientist</strong> architecting intelligent systems at the intersection of <em>Large Language Models</em>, <em>autonomous agentic workflows</em>, and <em>scalable machine learning</em>. Transforming complex research prototypes into high-performance, enterprise-grade production.",
    hero_explore: "<span>Explore Works</span> <i class=\"fa-solid fa-arrow-right\"></i>",
    hero_cv: "Curriculum Vitae",

    // About Section
    eyebrow_about: "01 // Neural Profile",
    about_heading: "Curating Knowledge.<br>Zero Syntax Errors.",
    about_active: "Active",
    about_location: "Paris, France",
    about_lead: "An AI engineer on a mission to explore the world and tick off a carefully curated bucket list executing goals without hitting any syntax errors.",
    about_secondary: "Master's graduate from <strong>EPITA Paris</strong> in Computer Science (Data Science &amp; Analysis), with hands-on experience designing and operating production AI systems at <strong>Hubicus (IPSOS)</strong>, <strong>AXA Group Operations</strong>, and <strong>6D Technologies</strong>.",
    spec_location_lbl: "Location",
    spec_location_val: "Paris, France",
    spec_specialization_lbl: "Specialization",
    spec_specialization_val: "LLMs &amp; Agentic AI",
    spec_degree_lbl: "Master's Degree",
    spec_degree_val: "EPITA Paris (Bac +5)",
    spec_languages_lbl: "Languages",
    spec_languages_val: "English &bull; French &bull; Malayalam",

    // Experience Section
    eyebrow_experience: "02 // Trajectory &amp; Research",
    experience_heading: "Engineering Trajectory",

    // Hubicus Current Role
    role_hubicus_curr_title: "AI Engineer",
    role_hubicus_curr_company: "Hubicus (Ipsos BVA) &bull; Paris, France",
    role_hubicus_curr_date: "06/2026 — Present",
    role_hubicus_curr_b1: "<strong>Local Model Deployment &amp; Serving:</strong> Architecting sovereign on-premise and private cloud inference engines using <strong>vLLM</strong> and <strong>llama.cpp</strong> with AWQ and GGUF quantization for ultra-low latency and maximum token throughput.",
    role_hubicus_curr_b2: "<strong>GCP Model Garden &amp; Vertex AI:</strong> Deploying, fine-tuning, and benchmarking foundational open-weight models via Google Cloud Platform Model Garden to power high-scale enterprise workflows.",
    role_hubicus_curr_b3: "<strong>Inference Optimization &amp; Latency Reduction:</strong> Implementing continuous batching, PagedAttention, KV cache management, and speculative decoding to slash compute costs and deliver sub-second TTFT SLAs.",
    role_hubicus_curr_b4: "<strong>Production Sovereign AI Workflows:</strong> Delivering enterprise-grade LLM runtimes integrated into customer intelligence products with zero data leakage, audit logging, and EU AI Act compliance.",

    // Hubicus Intern Role
    role_hubicus_intern_title: "AI Engineer Intern",
    role_hubicus_intern_company: "Hubicus (Ipsos BVA, Customer Insights) &bull; Paris, France",
    role_hubicus_intern_date: "11/2025 — 04/2026",
    role_hubicus_intern_b1: "<strong>AI Services Integration:</strong> Integrated multimodal AI evaluations across customer channels (chat, email, audio) into the flagship quality monitoring SaaS platform.",
    role_hubicus_intern_b2: "<strong>LLM-Agnostic Architecture:</strong> Decoupled vendor locks to allow dynamic model routing across Mistral, OpenAI, and Gemini models.",
    role_hubicus_intern_b3: "<strong>EU AI Act &amp; Security:</strong> Implemented PII redaction pipelines, audit telemetry, and prompt-injection guardrails complying with the European AI Act.",
    role_hubicus_intern_b4: "<strong>MCP Server &amp; RAG Agent:</strong> Developed a Model Context Protocol server exposing platform APIs and an internal knowledge retrieval agent.",

    // AXA Role
    role_axa_title: "AI/ML Engineer Intern",
    role_axa_company: "AXA Group Operations &bull; Paris, France",
    role_axa_date: "03/2025 — 09/2025",
    role_axa_b1: "<strong>Computable Contracts Engine:</strong> Built the core ingestion entry point parsing intricate insurance contracts into structured semantic graphs.",
    role_axa_b2: "<strong>25+ Parser Benchmark &amp; GPT-4o:</strong> Benchmarked over 25 document parsing architectures; adopted multimodal GPT-4o with custom scoring (NID, TEDS).",
    role_axa_b3: "<strong>Graph Intelligence:</strong> Modeled contractual obligations and entities using Kuzu and Neo4j graph databases for high-speed multi-hop queries.",
    role_axa_b4: "<strong>Production Observability:</strong> Introduced Langfuse for tracing LLM execution, token economics, and latency in Dockerized CI/CD workflows.",

    // 6D Technologies Role
    role_6d_title: "Data Scientist",
    role_6d_company: "6D Technologies &bull; Bangalore, India",
    role_6d_date: "02/2021 — 08/2023",
    role_6d_b1: "<strong>Customer Churn Reduction:</strong> Engineered predictive retention pipeline reducing customer turnover by 15% for international telecom carriers.",
    role_6d_b2: "<strong>Upsell &amp; Cross-Sell Systems:</strong> Raised customer engagement by 25% through market-basket analysis (Apriori, FP-Growth, Matrix Factorization).",
    role_6d_b3: "<strong>Forecasting &amp; Similarity:</strong> Built XGBoost time-series pipeline predicting next-purchase intervals with 62% accuracy across millions of records.",

    // Education
    edu_degree: "MSc Computer Science — Data Science &amp; Analysis",
    edu_school: "EPITA - School of Engineering and Computer Science &bull; Paris, France (Bac +5)",
    edu_date: "2023 — 2025",
    edu_desc: "Deep theoretical and applied curriculum encompassing neural network architectures, distributed data engineering, cloud platforms, and statistical modeling.",

    // Projects Section
    eyebrow_projects: "03 // Spatial Exhibition",
    projects_heading: "Selected Engineering &amp; Research",

    // Project 1
    proj_1_cat: "AXA Group Operations &bull; Enterprise AI",
    proj_1_title: "Computable Contracts via Multimodal LLMs &amp; Graphs",
    proj_1_desc: "Production-ready entry module for AXA's Computable Contracts platform. Evaluated 25+ document parsers and engineered a GPT-4o multimodal parsing pipeline with Neo4j/Kuzu graph database integration, Clean Architecture, and Langfuse observability.",
    proj_1_btn: "<span>View Repository</span> <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>",

    // Project 2
    proj_2_cat: "Hubicus &bull; Autonomous Agents",
    proj_2_title: "MCP Server &amp; RAG Knowledge Agent",
    proj_2_desc: "Engineered an enterprise Model Context Protocol (MCP) server exposing SaaS platform endpoints and built an autonomous RAG-driven knowledge retrieval agent. Features prompt injection guardrails, PII redaction, and EU AI Act compliance.",
    proj_2_btn: "<span>View Repository</span> <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>",

    // Project 3
    proj_3_cat: "Research &bull; Deep Learning",
    proj_3_title: "Enhancing Zero-Shot Capabilities in Large Language Models",
    proj_3_desc: "In-depth research and experimental evaluation analyzing prompt heuristics, parameter-efficient fine-tuning (PEFT), and attention representations to maximize zero-shot generalization across domain-specific NLP benchmarks.",
    proj_3_btn: "<span>View Research Repo</span> <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>",

    // Project 4
    proj_4_cat: "6D Technologies &bull; Big Data",
    proj_4_title: "Predictive Churn &amp; Upsell Recommendation Engine",
    proj_4_desc: "Architected telecom machine learning pipeline cutting churn by 15% and boosting engagement by 25%. Employed Matrix Factorization, FP-Growth, Apriori market-basket analysis, and XGBoost temporal purchase forecasting.",
    proj_4_btn: "<span>Case Study Details</span> <i class=\"fa-solid fa-arrow-right\"></i>",

    // Skills Section
    eyebrow_skills: "04 // Neural Constellation",
    skills_heading: "Technical Capabilities",
    skill_cluster_ai: "LLMs &amp; Deep Learning",
    skill_cluster_ops: "MLOps &amp; Engineering",
    skill_cluster_graph: "Graph Databases &amp; Data",
    skill_cluster_cloud: "Cloud &amp; Infrastructure",

    // Contact Section
    eyebrow_contact: "05 // Direct Uplink",
    contact_heading: "Initiate Transmission",
    contact_subheading: "Let's Build Intelligent Realities.",
    contact_subtext: "Open to high-impact AI Engineering opportunities, agentic architecture research, and technical consultancy in Paris and globally.",
    form_sender_lbl: "Sender Identifier",
    form_sender_ph: "Your Name or Organization",
    form_email_lbl: "Return Vector (Email)",
    form_email_ph: "name@domain.com",
    form_subject_lbl: "Transmission Subject",
    form_subject_ph: "Project / AI Consultation / Role",
    form_msg_lbl: "Payload Message",
    form_msg_ph: "Detail your parameters, timeline, or challenge...",
    form_submit_btn: "<span>Transmit Message</span> <i class=\"fa-solid fa-paper-plane\"></i>",

    // Footer
    footer_rights: "All rights reserved."
  },

  fr: {
    // HUD Navigation
    nav_about: "À propos",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_contact: "Contact",

    // Hero Section
    hero_status: "PARIS // 48.8566° N, 2.3522° E",
    hero_badge_vllm: "vLLM &bull; llama.cpp &bull; GCP",
    hero_badge_rag: "RAG Agentique &bull; Neo4j",
    hero_tagline: "<strong>Ingénieur IA &amp; Data Scientist</strong> concevant des systèmes intelligents à l'intersection des <em>grands modèles linguistiques (LLMs)</em>, des <em>architectures agentiques autonomes</em> et du <em>machine learning scalable</em>. De la recherche de pointe au déploiement en production industrielle.",
    hero_explore: "<span>Explorer les Projets</span> <i class=\"fa-solid fa-arrow-right\"></i>",
    hero_cv: "Curriculum Vitae",

    // About Section
    eyebrow_about: "01 // Profil Neural",
    about_heading: "Structurer le Savoir.<br>Zéro Erreur de Syntaxe.",
    about_active: "En ligne",
    about_location: "Paris, France",
    about_lead: "Ingénieur IA en mission pour explorer le monde et accomplir une bucket list soigneusement élaborée en atteignant chaque objectif sans la moindre erreur de syntaxe.",
    about_secondary: "Diplômé de master de l'<strong>EPITA Paris</strong> en informatique (Science des Données &amp; Analyse), avec une expérience concrète dans la conception et l'exploitation de systèmes d'IA en production chez <strong>Hubicus (IPSOS)</strong>, <strong>AXA Group Operations</strong> et <strong>6D Technologies</strong>.",
    spec_location_lbl: "Localisation",
    spec_location_val: "Paris, France",
    spec_specialization_lbl: "Spécialisation",
    spec_specialization_val: "LLMs &amp; IA Agentique",
    spec_degree_lbl: "Diplôme de Master",
    spec_degree_val: "EPITA Paris (Bac +5)",
    spec_languages_lbl: "Langues",
    spec_languages_val: "Anglais &bull; Français &bull; Malayalam",

    // Experience Section
    eyebrow_experience: "02 // Trajectoire &amp; Recherche",
    experience_heading: "Trajectoire d'Ingénierie",

    // Hubicus Current Role
    role_hubicus_curr_title: "Ingénieur IA",
    role_hubicus_curr_company: "Hubicus (Ipsos BVA) &bull; Paris, France",
    role_hubicus_curr_date: "06/2026 — Présent",
    role_hubicus_curr_b1: "<strong>Déploiement &amp; Serving de Modèles Locaux :</strong> Conception de moteurs d'inférence souverains on-premise et cloud privé avec <strong>vLLM</strong> et <strong>llama.cpp</strong> (quantification AWQ et GGUF) pour une latence ultra-faible et un débit de tokens maximal.",
    role_hubicus_curr_b2: "<strong>GCP Model Garden &amp; Vertex AI :</strong> Déploiement, fine-tuning et benchmarking de modèles ouverts via Google Cloud Platform Model Garden pour propulser des flux de travail d'entreprise à grande échelle.",
    role_hubicus_curr_b3: "<strong>Optimisation de l'Inférence &amp; Réduction de Latence :</strong> Implémentation du continuous batching, PagedAttention, gestion du cache KV et décodage spéculatif pour réduire les coûts d'infrastructure et garantir des SLAs de TTFT inférieurs à la seconde.",
    role_hubicus_curr_b4: "<strong>Flux d'IA Souveraine en Production :</strong> Déploiement d'environnements d'exécution LLM de niveau entreprise intégrés aux produits de relation client, avec zéro fuite de données, traçabilité d'audit et conformité à l'EU AI Act.",

    // Hubicus Intern Role
    role_hubicus_intern_title: "Stagiaire Ingénieur IA",
    role_hubicus_intern_company: "Hubicus (Ipsos BVA, Customer Insights) &bull; Paris, France",
    role_hubicus_intern_date: "11/2025 — 04/2026",
    role_hubicus_intern_b1: "<strong>Intégration de Services IA :</strong> Intégration d'évaluations d'IA multimodale sur tous les canaux clients (chat, email, audio) au sein de la plateforme SaaS de monitoring qualité.",
    role_hubicus_intern_b2: "<strong>Architecture Agnostique LLM :</strong> Élimination du verrouillage fournisseur avec routage dynamique entre les modèles Mistral, OpenAI et Gemini.",
    role_hubicus_intern_b3: "<strong>EU AI Act &amp; Sécurité :</strong> Implémentation de pipelines d'anonymisation PII, télémétrie d'audit et garde-fous anti-injection de prompts conformes à la législation européenne sur l'IA.",
    role_hubicus_intern_b4: "<strong>Serveur MCP &amp; Agent RAG :</strong> Développement d'un serveur Model Context Protocol exposant les APIs de la plateforme et création d'un agent RAG de recherche de connaissances internes.",

    // AXA Role
    role_axa_title: "Stagiaire Ingénieur IA / ML",
    role_axa_company: "AXA Group Operations &bull; Paris, France",
    role_axa_date: "03/2025 — 09/2025",
    role_axa_b1: "<strong>Moteur de Contrats Computables :</strong> Conception du module d'ingestion principal transformant des contrats d'assurance complexes en graphes sémantiques structurés.",
    role_axa_b2: "<strong>Benchmark de 25+ Parseurs &amp; GPT-4o :</strong> Évaluation comparative de plus de 25 architectures d'extraction documentaire ; intégration de GPT-4o multimodal avec scoring sur mesure (NID, TEDS).",
    role_axa_b3: "<strong>Intelligence Graphique :</strong> Modélisation des obligations contractuelles et entités dans les bases orientées graphes Kuzu et Neo4j pour requêtes multi-sauts haute vitesse.",
    role_axa_b4: "<strong>Observabilité en Production :</strong> Déploiement de Langfuse pour le traçage des exécutions LLM, analyse des coûts en tokens et latence dans un workflow CI/CD conteneurisé Docker.",

    // 6D Technologies Role
    role_6d_title: "Data Scientist",
    role_6d_company: "6D Technologies &bull; Bangalore, Inde",
    role_6d_date: "02/2021 — 08/2023",
    role_6d_b1: "<strong>Réduction du Churn Client :</strong> Développement d'un pipeline prédictif de rétention ayant réduit l'attrition de 15% pour des opérateurs télécoms internationaux.",
    role_6d_b2: "<strong>Systèmes d'Upsell &amp; Cross-Sell :</strong> Augmentation de l'engagement client de 25% via l'analyse du panier d'achat (Apriori, FP-Growth, factorisation matricielle).",
    role_6d_b3: "<strong>Prévision Temporelle &amp; Similarité :</strong> Création d'un pipeline de séries temporelles XGBoost prédisant les réachats avec 62% de précision sur des millions d'enregistrements.",

    // Education
    edu_degree: "Master of Science en Informatique — Science des Données &amp; Analyse",
    edu_school: "EPITA - École d'Ingénieurs en Informatique &bull; Paris, France (Bac +5)",
    edu_date: "2023 — 2025",
    edu_desc: "Programme théorique et appliqué approfondi couvrant les architectures de réseaux de neurones, l'ingénierie des données distribuées, les plateformes cloud et la modélisation statistique.",

    // Projects Section
    eyebrow_projects: "03 // Exposition Spatiale",
    projects_heading: "Sélection d'Ingénierie &amp; Recherche",

    // Project 1
    proj_1_cat: "AXA Group Operations &bull; IA d'Entreprise",
    proj_1_title: "Contrats Computables via LLMs Multimodaux &amp; Graphes",
    proj_1_desc: "Module d'ingestion de production pour la plateforme de Contrats Computables d'AXA. Évaluation de plus de 25 extracteurs documentaires et développement d'un pipeline GPT-4o multimodal intégrant Neo4j/Kuzu, Clean Architecture et observabilité Langfuse.",
    proj_1_btn: "<span>Voir le Répertoire</span> <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>",

    // Project 2
    proj_2_cat: "Hubicus &bull; Agents Autonomes",
    proj_2_title: "Serveur MCP &amp; Agent RAG de Connaissances",
    proj_2_desc: "Développement d'un serveur Model Context Protocol (MCP) exposant les endpoints de la plateforme SaaS et création d'un agent RAG autonome. Inclut garde-fous anti-injection de prompts, anonymisation PII et conformité à l'EU AI Act.",
    proj_2_btn: "<span>Voir le Répertoire</span> <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>",

    // Project 3
    proj_3_cat: "Recherche &bull; Deep Learning",
    proj_3_title: "Optimisation des Capacités Zero-Shot des LLMs",
    proj_3_desc: "Recherche approfondie et évaluation expérimentale analysant les heuristiques de prompt, le fine-tuning PEFT et les représentations d'attention pour maximiser la généralisation zero-shot sur des benchmarks NLP spécialisés.",
    proj_3_btn: "<span>Voir le Répertoire de Recherche</span> <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>",

    // Project 4
    proj_4_cat: "6D Technologies &bull; Big Data",
    proj_4_title: "Moteur Prédictif de Churn &amp; de Recommandation Upsell",
    proj_4_desc: "Architecture d'un pipeline ML télécom réduisant l'attrition de 15% et augmentant l'engagement de 25%. Utilisation de factorisation matricielle, FP-Growth, algorithme Apriori et prévision d'achat temporelle XGBoost.",
    proj_4_btn: "<span>Détails de l'Étude de Cas</span> <i class=\"fa-solid fa-arrow-right\"></i>",

    // Skills Section
    eyebrow_skills: "04 // Constellation Neurale",
    skills_heading: "Compétences Techniques",
    skill_cluster_ai: "LLMs &amp; Deep Learning",
    skill_cluster_ops: "MLOps &amp; Ingénierie",
    skill_cluster_graph: "Bases de Données Graphiques &amp; Données",
    skill_cluster_cloud: "Cloud &amp; Infrastructure",

    // Contact Section
    eyebrow_contact: "05 // Liaison Directe",
    contact_heading: "Initier la Transmission",
    contact_subheading: "Construisons des Réalités Intelligentes.",
    contact_subtext: "Ouvert aux opportunités d'ingénierie de l'IA à fort impact, à la recherche en architectures agentiques et au conseil technique à Paris et à l'international.",
    form_sender_lbl: "Identifiant de l'Expéditeur",
    form_sender_ph: "Votre Nom ou Organisation",
    form_email_lbl: "Vecteur de Retour (Email)",
    form_email_ph: "nom@domaine.com",
    form_subject_lbl: "Objet de la Transmission",
    form_subject_ph: "Projet / Conseil en IA / Poste",
    form_msg_lbl: "Message du Contenu",
    form_msg_ph: "Détaillez vos paramètres, calendrier ou défi...",
    form_submit_btn: "<span>Transmettre le Message</span> <i class=\"fa-solid fa-paper-plane\"></i>",

    // Footer
    footer_rights: "Tous droits réservés."
  }
};