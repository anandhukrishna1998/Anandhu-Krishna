/**
 * Bilingual Translation Matrix (English & French)
 * Tactile Craft Bento Portfolio — Anandhu Krishna
 */

const translations = {
  en: {
    // Accessibility & Navigation
    skip_to_content: "Skip to main content",
    nav_primary_aria: "Primary navigation",
    mobile_drawer_aria: "Mobile navigation menu",
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    theme_to_dark: "Switch to dark theme",
    theme_to_light: "Switch to light theme",
    sound_enable: "Enable interface audio",
    sound_mute: "Mute interface audio",
    menu_open: "Open navigation menu",
    menu_close: "Close navigation menu",
    lang_switch_aria: "Switch language to French",
    lang_switch_title: "Switch to French (FR)",

    // Hero Section (8/4 + 6/3/3)
    hero_kicker: "AI Engineer & Data Scientist · Paris",
    hero_headline: "Quantized LLM serving, verifiable RAG & graph pipelines.",
    hero_lead: "Architecting on-premise vLLM and llama.cpp runtimes, autonomous MCP workflows, and production machine learning systems across finance, customer insights, and telecom.",
    hero_explore: "Explore Work",
    hero_cv: "Curriculum Vitae",
    copy_email_btn: "Copy Email",
    email_copied: "Email copied",
    copy_failed: "Copy failed",
    r2_runtime_lbl: "Inference & Serving Runtime",
    r2_runtime_val: "vLLM · llama.cpp · GCP Model Garden",
    r2_runtime_desc: "AWQ and GGUF quantization, PagedAttention, speculative decoding, and EU AI Act compliant audit pipelines.",
    r2_metric_churn_lbl: "Telecom churn reduction",
    r2_metric_engage_lbl: "Customer engagement uplift",
    r2_coord_lbl: "Base & Profiles",
    r2_coord_val: "Paris, France",
    r2_coord_desc: "Available on-site in Île-de-France and for European remote collaborations.",
    portrait_loc: "Paris, France",

    // About Section (7/5 + 2x2 Specs)
    about_heading: "Engineering systems from research to sovereign production.",
    about_lead: "AI Engineer in Paris focused on sovereign LLM inference, verifiable retrieval pipelines, and graph-backed reasoning systems built to hold up in production.",
    story_kicker: "How I ship LLM systems",
    story_s1_title: "Serve",
    story_s1_desc: "Quantized vLLM and llama.cpp runtimes on-premise, with AWQ/GGUF, PagedAttention and speculative decoding.",
    story_s2_title: "Retrieve",
    story_s2_desc: "Verifiable RAG and MCP agents over graph-backed knowledge, so every answer traces to a source.",
    story_s3_title: "Verify",
    story_s3_desc: "PII masking guardrails and EU AI Act audit pipelines before anything reaches production.",
    about_secondary: "Master's graduate from <strong>EPITA Paris</strong> in Computer Science (Data Science & Analysis), with hands-on experience designing and operating production AI systems at <strong>Hubicus (Ipsos BVA)</strong>, <strong>AXA Group Operations</strong>, and <strong>6D Technologies</strong>.",
    spec_location_lbl: "Location",
    spec_location_val: "Paris, France",
    spec_specialization_lbl: "Specialization",
    spec_specialization_val: "LLMs & Agentic AI",
    spec_degree_lbl: "Master's Degree",
    spec_degree_val: "EPITA Paris (Bac +5)",
    spec_languages_lbl: "Languages",
    spec_languages_val: "English · French · Malayalam",

    // Experience & Education Section
    experience_heading: "Experience & Education",
    experience_subtitle: "Production AI engineering, applied research, and distributed ML roles across Paris and Bangalore.",

    // Hubicus Current Role
    role_hubicus_curr_title: "AI Engineer",
    role_hubicus_curr_company: "Hubicus (Ipsos BVA) · Paris, France",
    role_hubicus_curr_date: "06/2026 — Present",
    role_hubicus_curr_b1: "<strong>Local Model Deployment & Serving:</strong> Architecting sovereign on-premise and private cloud inference engines using <strong>vLLM</strong> and <strong>llama.cpp</strong> with AWQ and GGUF quantization for ultra-low latency and maximum token throughput.",
    role_hubicus_curr_b2: "<strong>GCP Model Garden & Vertex AI:</strong> Deploying, fine-tuning, and benchmarking foundational open-weight models via Google Cloud Platform Model Garden to power high-scale enterprise workflows.",
    role_hubicus_curr_b3: "<strong>Inference Optimization & Latency Reduction:</strong> Implementing continuous batching, PagedAttention, KV cache management, and speculative decoding to slash compute costs and deliver sub-second TTFT SLAs.",
    role_hubicus_curr_b4: "<strong>Production Sovereign AI Workflows:</strong> Delivering enterprise-grade LLM runtimes integrated into customer intelligence products with zero data leakage, audit logging, and EU AI Act compliance.",

    // Hubicus Intern Role
    role_hubicus_intern_title: "AI Engineer Intern",
    role_hubicus_intern_company: "Hubicus (Ipsos BVA, Customer Insights) · Paris, France",
    role_hubicus_intern_date: "11/2025 — 04/2026",
    role_hubicus_intern_b1: "<strong>AI Services Integration:</strong> Integrated multimodal AI evaluations across customer channels (chat, email, audio) into the flagship quality monitoring SaaS platform.",
    role_hubicus_intern_b2: "<strong>LLM-Agnostic Architecture:</strong> Decoupled vendor locks to allow dynamic model routing across Mistral, OpenAI, and Gemini models.",
    role_hubicus_intern_b3: "<strong>EU AI Act & Security:</strong> Implemented PII redaction pipelines, audit telemetry, and prompt-injection guardrails complying with the European AI Act.",
    role_hubicus_intern_b4: "<strong>MCP Server & RAG Agent:</strong> Developed a Model Context Protocol server exposing platform APIs and an internal knowledge retrieval agent.",

    // AXA Role
    role_axa_title: "AI/ML Engineer Intern",
    role_axa_company: "AXA Group Operations · Paris, France",
    role_axa_date: "03/2025 — 09/2025",
    role_axa_b1: "<strong>Computable Contracts Engine:</strong> Built the core ingestion entry point parsing intricate insurance contracts into structured semantic graphs.",
    role_axa_b2: "<strong>25+ Parser Benchmark & GPT-4o:</strong> Benchmarked over 25 document parsing architectures; adopted multimodal GPT-4o with custom scoring (NID, TEDS).",
    role_axa_b3: "<strong>Graph Intelligence:</strong> Modeled contractual obligations and entities using Kuzu and Neo4j graph databases for high-speed multi-hop queries.",
    role_axa_b4: "<strong>Production Observability:</strong> Introduced Langfuse for tracing LLM execution, token economics, and latency in Dockerized CI/CD workflows.",

    // 6D Technologies Role
    role_6d_title: "Data Scientist",
    role_6d_company: "6D Technologies · Bangalore, India",
    role_6d_date: "02/2021 — 08/2023",
    role_6d_b1: "<strong>Customer Churn Reduction:</strong> Engineered predictive retention pipeline reducing customer turnover by 15% for international telecom carriers.",
    role_6d_b2: "<strong>Upsell & Cross-Sell Systems:</strong> Raised customer engagement by 25% through market-basket analysis (Apriori, FP-Growth, Matrix Factorization).",
    role_6d_b3: "<strong>Forecasting & Similarity:</strong> Built XGBoost time-series pipeline predicting next-purchase intervals with 62% accuracy across millions of records.",

    // Education
    edu_degree: "MSc Computer Science — Data Science & Analysis",
    edu_school: "EPITA - School of Engineering and Computer Science · Paris, France (Bac +5)",
    edu_date: "2023 — 2025",
    edu_desc: "Deep theoretical and applied curriculum encompassing neural network architectures, distributed data engineering, cloud platforms, and statistical modeling.",

    // Projects Section (7/5 + 5/7)
    projects_heading: "Selected Engineering & Research",
    projects_subtitle: "Production AI systems, graph architectures, and empirical LLM research with interactive previews.",

    // Project 1
    proj_1_cat: "AXA Group Operations · Enterprise AI",
    proj_1_title: "Computable Contracts via Multimodal LLMs & Graphs",
    proj_1_desc: "Production-ready entry module for AXA's Computable Contracts platform. Evaluated 25+ document parsers and engineered a GPT-4o multimodal parsing pipeline with Neo4j/Kuzu graph database integration, Clean Architecture, and Langfuse observability.",
    proj_1_btn: "View Repository",

    // Project 2
    proj_2_cat: "Hubicus · Autonomous Agents",
    proj_2_title: "MCP Server & RAG Knowledge Agent",
    proj_2_desc: "Engineered an enterprise Model Context Protocol (MCP) server exposing SaaS platform endpoints and built an autonomous RAG-driven knowledge retrieval agent. Features prompt injection guardrails, PII redaction, and EU AI Act compliance.",
    proj_2_btn: "View Repository",

    // Project 3
    proj_3_cat: "Research · Deep Learning",
    proj_3_title: "Enhancing Zero-Shot Capabilities in Large Language Models",
    proj_3_desc: "In-depth research and experimental evaluation analyzing prompt heuristics, parameter-efficient fine-tuning (PEFT), and attention representations to maximize zero-shot generalization across domain-specific NLP benchmarks.",
    proj_3_btn: "View Research Repo",

    // Project 4
    proj_4_cat: "6D Technologies · Big Data",
    proj_4_title: "Predictive Churn & Upsell Recommendation Engine",
    proj_4_desc: "Architected telecom machine learning pipeline cutting churn by 15% and boosting engagement by 25%. Employed Matrix Factorization, FP-Growth, Apriori market-basket analysis, and XGBoost temporal purchase forecasting.",
    proj_4_btn: "Case Study Details",

    // Clause Explorer Micro-Demo
    demo_clause_title: "Clause → Graph Node Explorer",
    demo_clause_tab_liability: "Liability Clause",
    demo_clause_tab_deductible: "Deductible",
    demo_clause_tab_exclusions: "Exclusions",
    demo_clause_svg_liability: "CAP -> EUR 2.5M · TIER_A",
    demo_clause_svg_deductible: "RIDER -> SUB_B · EUR 25K",
    demo_clause_svg_exclusions: "EXCL -> CYBER_WAR · BLOCKED",
    demo_clause_out_liability: "MATCH (:Clause {id: \"CL-104\", type: \"LIABILITY\"})-[:CAPS]->(:Limit {amount: \"EUR 2,500,000\", scope: \"AGGREGATE\"}) // NID: 0.94",
    demo_clause_out_deductible: "MATCH (:Clause {id: \"CL-218\", type: \"DEDUCTIBLE\"})-[:APPLIES_TO]->(:Rider {code: \"SUB_B\", retention: \"EUR 25,000\"}) // TEDS: 0.91",
    demo_clause_out_exclusions: "MATCH (:Clause {id: \"CL-309\", type: \"EXCLUSION\"})-[:OVERRIDES]->(:Coverage {rider: \"CYBER_WAR\", status: \"EXCLUDED\"}) // Hop: 2",

    // PII Guardrail Toggle Micro-Demo
    demo_pii_label: "EU AI Act PII Masking",
    demo_pii_state_on: "ON",
    demo_pii_state_off: "OFF",
    demo_pii_prefix: "GET /mcp/rag?q=\"Ticket from ",
    demo_pii_person_raw: "Claire Dupont",
    demo_pii_person_masked: "[PERSON_1]",
    demo_pii_mid: " (",
    demo_pii_email_raw: "c.dupont@client.fr",
    demo_pii_email_masked: "[EMAIL_1]",
    demo_pii_suffix: ") -> SLA renewal policy\"",

    // Case Study 04 Modal
    modal_p4_kicker: "Case Study 04 · 6D Technologies",
    modal_p4_title: "Predictive Churn & Upsell Recommendation Engine",
    modal_p4_close: "Close",
    modal_p4_metric1_lbl: "Churn Reduction",
    modal_p4_metric2_lbl: "Customer Engagement",
    modal_p4_metric3_lbl: "Forecast Accuracy",
    modal_p4_problem_lbl: "Problem",
    modal_p4_problem_text: "International telecom carriers faced high subscriber attrition and low offer conversion across millions of billing and usage records, while static rule-based campaigns failed to capture changing purchase windows.",
    modal_p4_arch_lbl: "Architecture",
    modal_p4_arch_text: "Built an end-to-end machine learning pipeline combining churn scoring, market-basket association mining (Apriori, FP-Growth), Matrix Factorization for next-best-offer ranking, and XGBoost time-series models forecasting next-purchase intervals.",
    modal_p4_outcomes_lbl: "Production Outcomes",
    modal_p4_outcomes_text: "-15% Churn · +25% Engagement · 62% Accuracy across millions of telecom subscriber records in production.",
    modal_p4_stack_lbl: "Production Stack",
    modal_p4_cta: "Inquire via Contact",

    // Skills Section (2x2)
    skills_heading: "Technical Capabilities",
    skills_subtitle: "Production tooling across LLM inference, MLOps, graph modeling, and cloud platforms.",
    skill_cluster_ai: "LLMs & Deep Learning",
    skill_cluster_ops: "MLOps & Engineering",
    skill_cluster_graph: "Graph Databases & Data",
    skill_cluster_cloud: "Cloud & Infrastructure",

    // Contact Section (5/7)
    contact_heading: "Start a conversation",
    contact_subheading: "Direct channels & availability",
    contact_subtext: "Open to AI Engineering roles, sovereign LLM and agentic architecture projects, and technical consulting in Paris or remotely.",
    contact_channel_email_lbl: "Email",
    contact_channel_phone_lbl: "Phone",
    contact_channel_loc_lbl: "Location",
    contact_note: "Direct email or form submissions typically receive a reply within one business day.",
    form_sender_lbl: "Name / Organization",
    form_sender_ph: "Your name or company",
    form_email_lbl: "Email",
    form_email_ph: "name@company.com",
    form_subject_lbl: "Subject",
    form_subject_ph: "Role, AI advisory, or project scope",
    form_msg_lbl: "Message",
    form_msg_ph: "Share your context, timeline, or technical goals...",
    form_submit_btn: "Send Message",
    form_retry_btn: "Retry Sending",
    form_sending: "Sending...",
    form_sent: "Message sent — I will reply promptly.",
    form_failed: "Delivery failed — please email anandhukrishna091@gmail.com.",
    form_offline: "You appear offline — check your connection or email anandhukrishna091@gmail.com.",
    form_err_required: "Required field",
    form_err_email: "Enter a valid email",

    // Footer
    footer_rights: "All rights reserved."
  },

  fr: {
    // Accessibilité & Navigation
    skip_to_content: "Aller au contenu principal",
    nav_primary_aria: "Navigation principale",
    mobile_drawer_aria: "Menu de navigation mobile",
    nav_about: "À propos",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    theme_to_dark: "Passer au thème sombre",
    theme_to_light: "Passer au thème clair",
    sound_enable: "Activer l'audio de l'interface",
    sound_mute: "Couper l'audio de l'interface",
    menu_open: "Ouvrir le menu de navigation",
    menu_close: "Fermer le menu de navigation",
    lang_switch_aria: "Passer la langue en anglais",
    lang_switch_title: "Passer en anglais (EN)",

    // Section Héro (8/4 + 6/3/3)
    hero_kicker: "Ingénieur IA & Data Scientist · Paris",
    hero_headline: "Inférence LLM quantifiée, RAG vérifiable et graphes de connaissances.",
    hero_lead: "Conception de moteurs d'inférence locaux vLLM et llama.cpp, d'agents MCP autonomes et de systèmes de machine learning en production dans la finance, l'écoute client et les télécoms.",
    hero_explore: "Explorer les Projets",
    hero_cv: "Curriculum Vitae",
    copy_email_btn: "Copier l'email",
    email_copied: "Email copié",
    copy_failed: "Échec de copie",
    r2_runtime_lbl: "Exécution & Inférence LLM",
    r2_runtime_val: "vLLM · llama.cpp · GCP Model Garden",
    r2_runtime_desc: "Quantification AWQ et GGUF, PagedAttention, décodage spéculatif et pipelines d'audit conformes à l'EU AI Act.",
    r2_metric_churn_lbl: "Réduction du churn télécom",
    r2_metric_engage_lbl: "Hausse de l'engagement client",
    r2_coord_lbl: "Localisation & Profils",
    r2_coord_val: "Paris, France",
    r2_coord_desc: "Disponible en présentiel en Île-de-France et à distance en Europe.",
    portrait_loc: "Paris, France",

    // Section À propos (7/5 + Spécifications 2x2)
    about_heading: "Ingénierie IA, de la recherche à la production souveraine.",
    about_lead: "Ingénieur IA basé à Paris, spécialisé dans l'inférence LLM souveraine, le RAG vérifiable et les systèmes de raisonnement sur graphes pensés pour la production.",
    story_kicker: "Comment je mets les LLM en production",
    story_s1_title: "Servir",
    story_s1_desc: "Runtimes vLLM et llama.cpp quantifiés sur site, avec AWQ/GGUF, PagedAttention et décodage spéculatif.",
    story_s2_title: "Retrouver",
    story_s2_desc: "RAG vérifiable et agents MCP sur des connaissances structurées en graphe, pour que chaque réponse remonte à sa source.",
    story_s3_title: "Vérifier",
    story_s3_desc: "Garde-fous de masquage des données personnelles et pipelines d'audit conformes à l'AI Act avant toute mise en production.",
    about_secondary: "Diplômé de master de l'<strong>EPITA Paris</strong> en informatique (Science des Données & Analyse), avec une expérience concrète dans la conception et l'exploitation de systèmes d'IA en production chez <strong>Hubicus (Ipsos BVA)</strong>, <strong>AXA Group Operations</strong> et <strong>6D Technologies</strong>.",
    spec_location_lbl: "Localisation",
    spec_location_val: "Paris, France",
    spec_specialization_lbl: "Spécialisation",
    spec_specialization_val: "LLMs & IA Agentique",
    spec_degree_lbl: "Diplôme de Master",
    spec_degree_val: "EPITA Paris (Bac +5)",
    spec_languages_lbl: "Langues",
    spec_languages_val: "Anglais · Français · Malayalam",

    // Section Expérience & Formation
    experience_heading: "Expérience & Formation",
    experience_subtitle: "Ingénierie IA en production, recherche appliquée et machine learning distribué entre Paris et Bangalore.",

    // Poste actuel Hubicus
    role_hubicus_curr_title: "Ingénieur IA",
    role_hubicus_curr_company: "Hubicus (Ipsos BVA) · Paris, France",
    role_hubicus_curr_date: "06/2026 — Présent",
    role_hubicus_curr_b1: "<strong>Déploiement & Serving de Modèles Locaux :</strong> Conception de moteurs d'inférence souverains on-premise et cloud privé avec <strong>vLLM</strong> et <strong>llama.cpp</strong> (quantification AWQ et GGUF) pour une latence ultra-faible et un débit de tokens maximal.",
    role_hubicus_curr_b2: "<strong>GCP Model Garden & Vertex AI :</strong> Déploiement, fine-tuning et benchmarking de modèles ouverts via Google Cloud Platform Model Garden pour propulser des flux de travail d'entreprise à grande échelle.",
    role_hubicus_curr_b3: "<strong>Optimisation de l'Inférence & Réduction de Latence :</strong> Implémentation du continuous batching, PagedAttention, gestion du cache KV et décodage spéculatif pour réduire les coûts d'infrastructure et garantir des SLAs de TTFT inférieurs à la seconde.",
    role_hubicus_curr_b4: "<strong>Flux d'IA Souveraine en Production :</strong> Déploiement d'environnements d'exécution LLM de niveau entreprise intégrés aux produits de relation client, avec zéro fuite de données, traçabilité d'audit et conformité à l'EU AI Act.",

    // Stage Hubicus
    role_hubicus_intern_title: "Stagiaire Ingénieur IA",
    role_hubicus_intern_company: "Hubicus (Ipsos BVA, Customer Insights) · Paris, France",
    role_hubicus_intern_date: "11/2025 — 04/2026",
    role_hubicus_intern_b1: "<strong>Intégration de Services IA :</strong> Intégration d'évaluations d'IA multimodale sur tous les canaux clients (chat, email, audio) au sein de la plateforme SaaS de monitoring qualité.",
    role_hubicus_intern_b2: "<strong>Architecture Agnostique LLM :</strong> Élimination du verrouillage fournisseur avec routage dynamique entre les modèles Mistral, OpenAI et Gemini.",
    role_hubicus_intern_b3: "<strong>EU AI Act & Sécurité :</strong> Implémentation de pipelines d'anonymisation PII, télémétrie d'audit et garde-fous anti-injection de prompts conformes à la législation européenne sur l'IA.",
    role_hubicus_intern_b4: "<strong>Serveur MCP & Agent RAG :</strong> Développement d'un serveur Model Context Protocol exposant les APIs de la plateforme et création d'un agent RAG de recherche de connaissances internes.",

    // Stage AXA
    role_axa_title: "Stagiaire Ingénieur IA / ML",
    role_axa_company: "AXA Group Operations · Paris, France",
    role_axa_date: "03/2025 — 09/2025",
    role_axa_b1: "<strong>Moteur de Contrats Computables :</strong> Conception du module d'ingestion principal transformant des contrats d'assurance complexes en graphes sémantiques structurés.",
    role_axa_b2: "<strong>Benchmark de 25+ Parseurs & GPT-4o :</strong> Évaluation comparative de plus de 25 architectures d'extraction documentaire ; intégration de GPT-4o multimodal avec scoring sur mesure (NID, TEDS).",
    role_axa_b3: "<strong>Intelligence Graphique :</strong> Modélisation des obligations contractuelles et entités dans les bases orientées graphes Kuzu et Neo4j pour requêtes multi-sauts haute vitesse.",
    role_axa_b4: "<strong>Observabilité en Production :</strong> Déploiement de Langfuse pour le traçage des exécutions LLM, analyse des coûts en tokens et latence dans un workflow CI/CD conteneurisé Docker.",

    // Poste 6D Technologies
    role_6d_title: "Data Scientist",
    role_6d_company: "6D Technologies · Bangalore, Inde",
    role_6d_date: "02/2021 — 08/2023",
    role_6d_b1: "<strong>Réduction du Churn Client :</strong> Développement d'un pipeline prédictif de rétention ayant réduit l'attrition de 15% pour des opérateurs télécoms internationaux.",
    role_6d_b2: "<strong>Systèmes d'Upsell & Cross-Sell :</strong> Augmentation de l'engagement client de 25% via l'analyse du panier d'achat (Apriori, FP-Growth, factorisation matricielle).",
    role_6d_b3: "<strong>Prévision Temporelle & Similarité :</strong> Création d'un pipeline de séries temporelles XGBoost prédisant les réachats avec 62% de précision sur des millions d'enregistrements.",

    // Formation
    edu_degree: "Master of Science en Informatique — Science des Données & Analyse",
    edu_school: "EPITA - École d'Ingénieurs en Informatique · Paris, France (Bac +5)",
    edu_date: "2023 — 2025",
    edu_desc: "Programme théorique et appliqué approfondi couvrant les architectures de réseaux de neurones, l'ingénierie des données distribuées, les plateformes cloud et la modélisation statistique.",

    // Section Projets (7/5 + 5/7)
    projects_heading: "Sélection d'Ingénierie & Recherche",
    projects_subtitle: "Systèmes d'IA en production, architectures graphes et recherche empirique sur les LLMs avec aperçus interactifs.",

    // Projet 1
    proj_1_cat: "AXA Group Operations · IA d'Entreprise",
    proj_1_title: "Contrats Computables via LLMs Multimodaux & Graphes",
    proj_1_desc: "Module d'ingestion de production pour la plateforme de Contrats Computables d'AXA. Évaluation de plus de 25 extracteurs documentaires et développement d'un pipeline GPT-4o multimodal intégrant Neo4j/Kuzu, Clean Architecture et observabilité Langfuse.",
    proj_1_btn: "Voir le Répertoire",

    // Projet 2
    proj_2_cat: "Hubicus · Agents Autonomes",
    proj_2_title: "Serveur MCP & Agent RAG de Connaissances",
    proj_2_desc: "Développement d'un serveur Model Context Protocol (MCP) exposant les endpoints de la plateforme SaaS et création d'un agent RAG autonome. Inclut garde-fous anti-injection de prompts, anonymisation PII et conformité à l'EU AI Act.",
    proj_2_btn: "Voir le Répertoire",

    // Projet 3
    proj_3_cat: "Recherche · Deep Learning",
    proj_3_title: "Optimisation des Capacités Zero-Shot des LLMs",
    proj_3_desc: "Recherche approfondie et évaluation expérimentale analysant les heuristiques de prompt, le fine-tuning PEFT et les représentations d'attention pour maximiser la généralisation zero-shot sur des benchmarks NLP spécialisés.",
    proj_3_btn: "Voir le Répertoire de Recherche",

    // Projet 4
    proj_4_cat: "6D Technologies · Big Data",
    proj_4_title: "Moteur Prédictif de Churn & de Recommandation Upsell",
    proj_4_desc: "Architecture d'un pipeline ML télécom réduisant l'attrition de 15% et augmentant l'engagement de 25%. Utilisation de factorisation matricielle, FP-Growth, algorithme Apriori et prévision d'achat temporelle XGBoost.",
    proj_4_btn: "Détails de l'étude de cas",

    // Micro-démo Explorateur de Clauses
    demo_clause_title: "Explorateur Clause → Nœud Graphe",
    demo_clause_tab_liability: "Clause de responsabilité",
    demo_clause_tab_deductible: "Franchise",
    demo_clause_tab_exclusions: "Exclusions",
    demo_clause_svg_liability: "PLAFOND -> 2,5 M EUR · RANG_A",
    demo_clause_svg_deductible: "AVENANT -> SUB_B · 25 K EUR",
    demo_clause_svg_exclusions: "EXCL -> CYBER_GUERRE · BLOQUÉ",
    demo_clause_out_liability: "MATCH (:Clause {id: \"CL-104\", type: \"RESPONSABILITÉ\"})-[:PLAFONNE]->(:Limite {montant: \"2 500 000 EUR\", portee: \"AGRÉGÉE\"}) // NID: 0.94",
    demo_clause_out_deductible: "MATCH (:Clause {id: \"CL-218\", type: \"FRANCHISE\"})-[:APPLIQUE_A]->(:Avenant {code: \"SUB_B\", franchise: \"25 000 EUR\"}) // TEDS: 0.91",
    demo_clause_out_exclusions: "MATCH (:Clause {id: \"CL-309\", type: \"EXCLUSION\"})-[:DEROGE_A]->(:Garantie {avenant: \"CYBER_GUERRE\", statut: \"EXCLU\"}) // Sauts: 2",

    // Micro-démo Masquage PII
    demo_pii_label: "Anonymisation PII (EU AI Act)",
    demo_pii_state_on: "ACTIF",
    demo_pii_state_off: "INACTIF",
    demo_pii_prefix: "GET /mcp/rag?q=\"Ticket de ",
    demo_pii_person_raw: "Claire Dupont",
    demo_pii_person_masked: "[PERSONNE_1]",
    demo_pii_mid: " (",
    demo_pii_email_raw: "c.dupont@client.fr",
    demo_pii_email_masked: "[EMAIL_1]",
    demo_pii_suffix: ") -> politique de renouvellement SLA\"",

    // Modale Étude de Cas 04
    modal_p4_kicker: "Étude de cas 04 · 6D Technologies",
    modal_p4_title: "Moteur Prédictif de Churn & de Recommandation Upsell",
    modal_p4_close: "Fermer",
    modal_p4_metric1_lbl: "Réduction du Churn",
    modal_p4_metric2_lbl: "Engagement Client",
    modal_p4_metric3_lbl: "Précision de Prévision",
    modal_p4_problem_lbl: "Problématique",
    modal_p4_problem_text: "Les opérateurs télécoms internationaux faisaient face à une forte attrition et à une faible conversion des offres sur des millions de profils d'usage et de facturation, les campagnes à règles fixes ne captant pas les fenêtres d'achat.",
    modal_p4_arch_lbl: "Architecture",
    modal_p4_arch_text: "Développement d'un pipeline ML complet combinant scoring de rétention, analyse du panier d'achat (Apriori, FP-Growth), factorisation matricielle pour le classement des offres et modèles temporels XGBoost pour anticiper le prochain achat.",
    modal_p4_outcomes_lbl: "Résultats en Production",
    modal_p4_outcomes_text: "-15% de Churn · +25% d'Engagement · 62% de Précision sur des millions d'enregistrements télécoms en production.",
    modal_p4_stack_lbl: "Stack Technique",
    modal_p4_cta: "Discuter via le formulaire",

    // Section Compétences (2x2)
    skills_heading: "Compétences Techniques",
    skills_subtitle: "Technologies maîtrisées en inférence LLM, MLOps, bases graphes et infrastructure cloud.",
    skill_cluster_ai: "LLMs & Deep Learning",
    skill_cluster_ops: "MLOps & Ingénierie",
    skill_cluster_graph: "Bases de Données Graphiques & Données",
    skill_cluster_cloud: "Cloud & Infrastructure",

    // Section Contact (5/7)
    contact_heading: "Échanger sur un projet",
    contact_subheading: "Coordonnées directes & disponibilité",
    contact_subtext: "Disponible pour des postes d'Ingénieur IA, des projets d'architecture LLM souveraine ou agentique et du conseil technique à Paris ou à distance.",
    contact_channel_email_lbl: "Email",
    contact_channel_phone_lbl: "Téléphone",
    contact_channel_loc_lbl: "Localisation",
    contact_note: "Les messages envoyés par email ou via ce formulaire reçoivent généralement une réponse sous 24 heures ouvrées.",
    form_sender_lbl: "Nom / Organisation",
    form_sender_ph: "Votre nom ou organisation",
    form_email_lbl: "Email",
    form_email_ph: "nom@entreprise.com",
    form_subject_lbl: "Objet",
    form_subject_ph: "Poste, conseil en IA ou périmètre projet",
    form_msg_lbl: "Message",
    form_msg_ph: "Précisez votre contexte, calendrier ou objectifs techniques...",
    form_submit_btn: "Envoyer le message",
    form_retry_btn: "Réessayer l'envoi",
    form_sending: "Envoi en cours...",
    form_sent: "Message envoyé — je vous répondrai rapidement.",
    form_failed: "Échec de l'envoi — écrivez à anandhukrishna091@gmail.com.",
    form_offline: "Vous semblez hors ligne — vérifiez votre connexion ou écrivez à anandhukrishna091@gmail.com.",
    form_err_required: "Champ requis",
    form_err_email: "Saisissez un email valide",

    // Pied de page
    footer_rights: "Tous droits réservés."
  }
};
