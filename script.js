const currentLanguage = /^\/fr(?:\/|$)/i.test(window.location.pathname) ? "fr" : "en";
const resumeFile = currentLanguage === "fr" ? "/CV%20-%201P%20-%20FR.pdf" : "/CV%20-%201P%20-%20EN.pdf";

const baseProofPoints = [
  { value: "17+", label: "public repos" },
  { value: "6", label: "selected projects" },
  { value: "6", label: "live web builds shown" }
];

const baseProjects = [
  {
    title: "Pricing Engine",
    type: "AI and data",
    year: "2026",
    role: "Pricing modeling and decision support",
    image: "assets/images/projects/thumbnails/pricing-engine.jpg",
    url: "https://github.com/adam1861/Pricing-Engine",
    summary: "Machine learning pricing workflow focused on turning model output into better pricing decisions.",
    problem: "Estimate stronger product price points from structured business signals.",
    approach:
      "Combined analytics, prediction, and feature thinking into a workflow designed to support pricing choices rather than just produce a score.",
    result:
      "Framed pricing as a practical decision-support system instead of a notebook-only exercise.",
    stack: ["Python", "Pandas", "Scikit-learn"]
  },
  {
    title: "Telecom Customer Churn Prediction",
    type: "AI and data",
    year: "2026",
    role: "End-to-end churn classification workflow",
    image: "assets/images/projects/thumbnails/telecom-churn.jpg",
    url: "https://github.com/adam1861/Telecom-Customer-Churn-Prediction",
    summary: "Retention-focused classification project built around churn signals and customer behavior.",
    problem: "Identify which customers are most likely to churn and why.",
    approach:
      "Worked through cleaning, exploratory analysis, feature encoding, train-test splitting, and classification to build a usable churn pipeline.",
    result:
      "Produced a clearer retention-oriented workflow that ties business context to modeling choices.",
    stack: ["Python", "EDA", "Classification"]
  },
  {
    title: "Credit Card Fraud Detection",
    type: "Cyber security",
    year: "2026",
    role: "Imbalanced classification and evaluation",
    image: "assets/images/projects/thumbnails/credit-card-fraud.jpg",
    url: "https://github.com/adam1861/Credit-Card-Fraud-Detection",
    summary: "Fraud detection workflow centered on imbalance handling, feature work, and evaluation.",
    problem: "Detect suspicious transactions in a highly imbalanced classification setting.",
    approach:
      "Used notebooks to walk through cleaning, feature engineering, class-imbalance handling, and model comparison in a structured way.",
    result:
      "Showed careful treatment of anomaly-heavy data instead of treating fraud detection as a generic classification task.",
    stack: ["Python", "Feature engineering", "Model evaluation"]
  },
  {
    title: "Weather Forecasting System",
    type: "Software",
    year: "2026",
    role: "Forecast modeling plus interactive interface",
    image: "assets/images/projects/thumbnails/weather-forecasting.jpg",
    url: "https://github.com/adam1861/weather_forcasting",
    summary: "Forecasting project using XGBoost, NASA weather data, and an interactive web layer.",
    problem: "Turn weather signals into forecasts that are both modeled and user-facing.",
    approach:
      "Combined time-aware modeling, XGBoost, location-based inputs, and a web interface to move the work beyond raw predictions.",
    result:
      "One of the clearest examples in the portfolio of combining machine learning with product-minded delivery.",
    stack: ["XGBoost", "NASA weather data", "JavaScript"]
  },
  {
    title: "E-Commerce Customer Segmentation",
    type: "AI and data",
    year: "2026",
    role: "Clustering and exploratory analysis",
    image: "assets/images/projects/thumbnails/customer-segmentation.jpg",
    url: "https://github.com/adam1861/E-Commerce-Customer-Segmentation",
    summary: "Clustering-driven segmentation project built to support sharper targeting decisions.",
    problem: "Group customers by behavior to support better targeting and marketing decisions.",
    approach:
      "Used exploratory analysis and clustering to identify meaningful behavior segments instead of focusing only on prediction.",
    result:
      "Shifted the work toward insight and action, not just model output.",
    stack: ["Clustering", "EDA", "Customer analysis"]
  },
  {
    title: "Metal Quality Control",
    type: "Computer vision",
    year: "2025",
    role: "Defect detection and segmentation",
    image: "assets/images/projects/thumbnails/metal-quality-control.jpg",
    url: "https://github.com/adam1861/metal_quality_control",
    summary: "Computer vision workflow for defect detection and segmentation in industrial parts.",
    problem: "Spot color anomalies and scratches in metal nut inspection scenarios.",
    approach:
      "Built a more applied visual quality-control workflow around defect detection and segmentation rather than a purely academic image task.",
    result:
      "Added a stronger industrial computer-vision angle to the portfolio.",
    stack: ["Computer vision", "Segmentation", "TypeScript"]
  }
];

const baseCertificates = [
  {
    title: "ML Specialisation",
    file: "assets/docs/certificates/ML%20Specialisation.pdf",
    provider: "Coursera",
    providerKey: "coursera",
    logo: "assets/images/providers/coursera-logo.svg",
    note: "Machine learning specialization certificate available to open directly."
  },
  {
    title: "Pre Security",
    file: "assets/docs/certificates/Pre-security.pdf",
    provider: "TryHackMe",
    providerKey: "tryhackme",
    logo: "assets/images/providers/tryhackme-logo.svg",
    note: "Pre-security learning path certificate available to open directly."
  },
  {
    title: "Security 101",
    file: "assets/docs/certificates/Security%20101.pdf",
    provider: "TryHackMe",
    providerKey: "tryhackme",
    logo: "assets/images/providers/tryhackme-logo.svg",
    note: "Security 101 certificate available to open directly."
  },
  {
    title: "RAG",
    file: "assets/docs/certificates/RAG.pdf",
    provider: "Coursera",
    providerKey: "coursera",
    logo: "assets/images/providers/coursera-logo.svg",
    note: "Retrieval-augmented generation certificate available to open directly."
  }
];

const baseSites = [
  {
    title: "EFAIX",
    image: "assets/images/sites/efaix.png",
    url: "https://efaix.com/",
    category: "Education ecosystem",
    role: "Brand site and product positioning",
    summary: "Main public-facing site for the EFAIX story, positioning, and ecosystem overview."
  },
  {
    title: "EFAIX Academy",
    image: "assets/images/sites/efaix_academy.png",
    url: "https://academy-six-umber.vercel.app/",
    category: "Learning platform",
    role: "Training delivery experience",
    summary: "Structured digital learning surface built around clearer course access and delivery."
  },
  {
    title: "E++",
    image: "assets/images/sites/eplusplus.png",
    url: "https://eplusplus.vercel.app/",
    category: "Student tech community",
    role: "Community website and identity",
    summary: "A student technology community website built around events, workshops, leadership, and hands-on impact."
  },
  {
    title: "Starteady",
    image: "assets/images/sites/starteady.png",
    url: "https://www.starteady.com/",
    category: "Client website",
    role: "Launch-focused web execution",
    summary: "Commercial web presence shaped for clarity, speed, and stronger trust."
  },
  {
    title: "Auramaking",
    image: "assets/images/sites/auramaking.png",
    url: "https://www.auramaking.com/",
    category: "Client website",
    role: "Brand presentation and polish",
    summary: "Brand-led site work built around presentation, credibility, and cleaner storytelling."
  },
  {
    title: "Icodex Academy",
    image: "assets/images/sites/icodex.png",
    url: "https://icodex-frontend.onrender.com/",
    category: "Education platform",
    role: "Course and platform experience",
    summary: "Education platform work for code and AI learning with a more organized user path."
  },
  {
    title: "Twisted Circus",
    image: "assets/images/sites/twisted-circus.png",
    url: "https://bde-kxts.vercel.app/",
    category: "Student event platform",
    role: "BDE website and event experience",
    summary: "A dark, story-led BDE 2026 website built around the Twisted Circus theme, events, leaderboard, and student community."
  }
];

const stack = [
  { name: "Python", icon: "assets/icons/stack/python.svg", group: "AI and ML", type: "language" },
  { name: "C", icon: "assets/icons/stack/c.svg", group: "AI and ML", type: "language" },
  { name: "Java", icon: "assets/icons/stack/java.svg", group: "AI and ML", type: "language" },
  { name: "SQL", icon: "assets/icons/stack/sql.svg", group: "AI and ML", type: "language" },
  { name: "Pandas", icon: "assets/icons/stack/pandas.svg", group: "AI and ML", type: "library" },
  { name: "NumPy", icon: "assets/icons/stack/numpy.svg", group: "AI and ML", type: "library" },
  { name: "Scikit-learn", icon: "assets/icons/stack/scikitlearn.svg", group: "AI and ML", type: "library" },
  { name: "XGBoost", icon: "assets/icons/stack/xgboost.svg", group: "AI and ML", type: "library", iconClass: "wide" },
  { name: "Matplotlib", icon: "assets/icons/stack/matplotlib.svg", group: "AI and ML", type: "library" },
  { name: "TensorFlow", icon: "assets/icons/stack/tensorflow.svg", group: "AI and ML", type: "library" },
  { name: "Seaborn", icon: "assets/icons/stack/seaborn.svg", group: "AI and ML", type: "library" },
  { name: "EDA", icon: "assets/icons/stack/eda.svg", group: "Data work", type: "skill" },
  { name: "Feature Engineering", icon: "assets/icons/stack/feature-engineering.svg", group: "Data work", type: "skill" },
  { name: "Classification", icon: "assets/icons/stack/classification.svg", group: "Data work", type: "skill" },
  { name: "Clustering", icon: "assets/icons/stack/clustering.svg", group: "Data work", type: "skill" },
  { name: "Forecasting", icon: "assets/icons/stack/forecasting.svg", group: "Data work", type: "skill" },
  { name: "Evaluation", icon: "assets/icons/stack/evaluation.svg", group: "Data work", type: "skill" },
  { name: "RAG", icon: "assets/icons/stack/rag.svg", group: "Data work", type: "skill" },
  { name: "HTML", icon: "assets/icons/stack/html5.svg", group: "Web and product", type: "language" },
  { name: "CSS", icon: "assets/icons/stack/css.svg", group: "Web and product", type: "language" },
  { name: "JavaScript", icon: "assets/icons/stack/javascript.svg", group: "Web and product", type: "language" },
  { name: "TypeScript", icon: "assets/icons/stack/typescript.svg", group: "Web and product", type: "language" },
  { name: "WordPress", icon: "assets/icons/stack/wordpress.svg", group: "Web and product", type: "software" },
  { name: "Figma", icon: "assets/icons/stack/figma.svg", group: "Web and product", type: "software" },
  { name: "GitHub", icon: "assets/icons/stack/github.svg", group: "Web and product", type: "software" },
  { name: "Vercel", icon: "assets/icons/stack/vercel.svg", group: "Web and product", type: "software" },
  { name: "Render", icon: "assets/icons/stack/render.svg", group: "Web and product", type: "software" },
  { name: "Processing", icon: "assets/icons/stack/processing.svg", group: "Web and product", type: "software" },
  { name: "n8n", icon: "assets/icons/stack/n8n.svg", group: "Engineering and workflow", type: "software" },
  { name: "Hydra", icon: "assets/icons/stack/hydra.ico", group: "Tools", type: "tools" },
  { name: "John the Ripper", icon: "assets/icons/stack/john-the-ripper.svg", group: "Tools", type: "tools" },
  { name: "Hashcat", icon: "assets/icons/stack/hashcat.svg", group: "Tools", type: "tools" },
  { name: "Gobuster", icon: "assets/icons/stack/gobuster.svg", group: "Tools", type: "tools" },
  { name: "Burp Suite", icon: "assets/icons/stack/burpsuite.svg", group: "Tools", type: "software" },
  { name: "Wireshark", icon: "assets/icons/stack/wireshark.svg", group: "Tools", type: "software" },
  { name: "Metasploit", icon: "assets/icons/stack/metasploit.svg", group: "Tools", type: "software" },
  { name: "tcpdump", icon: "assets/icons/stack/tcpdump.svg", group: "Tools", type: "tools", iconClass: "wide" },
  { name: "sqlmap", icon: "assets/icons/stack/sqlmap.png", group: "Tools", type: "tools", iconClass: "wide" },
  { name: "Splunk", icon: "assets/icons/stack/splunk.png", group: "Engineering and workflow", type: "software", iconClass: "wide" },
  { name: "Git", icon: "assets/icons/stack/git.svg", group: "Engineering and workflow", type: "software" },
  { name: "Linux", icon: "assets/icons/stack/linux.svg", group: "Engineering and workflow", type: "software" },
  { name: "Power BI", icon: "assets/icons/stack/powerbi.svg", group: "Engineering and workflow", type: "software" },
  { name: "Arduino", icon: "assets/icons/stack/arduino.svg", group: "Engineering and workflow", type: "software" },
  { name: "SolidWorks", icon: "assets/icons/stack/solidworks.svg", group: "Engineering and workflow", type: "software" },
  { name: "Aspen", icon: "assets/icons/stack/aspen.svg", group: "Engineering and workflow", type: "software" },
  { name: "MATLAB", icon: "assets/icons/stack/matlab.svg", group: "Engineering and workflow", type: "language" }
];

const ui = {
  en: {
    title: "Adam Lachkar | AI, Data Science, EdTech, Web Products",
    description: "Adam Lachkar is an engineering student at UM6P and founder at EFAIX, building practical AI projects, education products, and product-minded web experiences.",
    skip: "Skip to content",
    explore: "Explore portfolio",
    openResume: "Open resume",
    resume: "Resume",
    openCv: "Open CV",
    heroKicker: "UM6P engineering student, founder at EFAIX, and applied AI builder",
    heroText: "I am an engineering student at EMINES - UM6P and the founder of EFAIX. My recent work spans applied AI projects on GitHub, education product execution across multiple live surfaces, and shipped web builds for real users and teams.",
    primaryLinks: "Primary profile links",
    location: "Benguerir, Morocco",
    availability: "Open to AI and product internships, freelance web work, and serious technical collaborations.",
    exploreKicker: "Explore",
    chooseChapter: "Choose a chapter.",
    portfolioNote: "A focused view of the work, experience, tools, and proof behind the portfolio.",
    sectionsLabel: "Portfolio sections",
    sections: ["Projects", "Experience", "Education", "Tools", "Certifications", "Activities"],
    workViews: "Work views",
    work: ["AI Projects", "Web Builds"],
    experienceKicker: "Experience",
    experienceHeading: "Building across AI, education, and the web.",
    experienceIntro: "The work I keep returning to: turning technical ideas into useful, public-facing systems.",
    educationKicker: "Education",
    educationHeading: "Learning the foundations behind the work.",
    educationIntro: "The engineering, industrial systems, and mathematics studies shaping how I build.",
    toolsKicker: "Tools",
    toolsHeading: "Tools I reach for.",
    toolsIntro: "Search or filter the software, languages, libraries, and working skills behind the projects.",
    searchTools: "Search tools and skills",
    searchPlaceholder: "Search Python, GitHub, RAG...",
    stackFilters: "Stack filters",
    stackFilterLabels: { software: "Software", language: "Language", library: "Library", tools: "Tools", skill: "Skill" },
    stackCaption: "Search by name or use the filters to narrow the list.",
    certificatesKicker: "Certifications",
    certificatesHeading: "Coursework and credentials I can point to directly.",
    certificatesIntro: "A compact archive of certificate documents tied to the learning paths behind the work.",
    activitiesKicker: "Activities",
    activitiesHeading: "Leading communities and creating practical learning spaces.",
    activitiesIntro: "The student leadership, teaching, and community work that complements my technical experience.",
    contactKicker: "Contact",
    contactHeading: "Let's talk",
    contactIntro: "For AI or product internships, freelance web projects, or technical collaborations, email is the fastest route.",
    bestFit: "Best fit: AI/ML internships, product engineering internships, education technology systems, and serious technical collaborations.",
    contactLinks: "Contact links",
    footerTagline: "Applied AI, education products, and web experiences built with follow-through.",
    footerNavigation: "Footer navigation",
    footerNav: ["Projects", "Experience", "Education", "Tools", "Certifications", "Activities", "Contact", "GitHub", "LinkedIn"],
    all: "All",
    items: "items",
    item: "item",
    shown: "shown",
    noMatches: "No matches found.",
    noMatchesText: "Try another keyword or tap the active filter again to reset the full list.",
    certificate: "certificate",
    openCertificate: "Open certificate",
    viewRepo: "View repo",
    visitWebsite: "Visit website",
    back: "← Back to portfolio",
    year: "Year",
    role: "Role",
    problem: "Problem",
    approach: "Approach",
    result: "Result",
    category: "Category",
    organisation: "Organisation",
    dates: "Dates",
    context: "Context",
    copyright: "All rights reserved."
  },
  fr: {
    title: "Adam Lachkar | IA, Data Science, EdTech, Produits web",
    description: "Adam Lachkar est étudiant ingénieur à l'UM6P et fondateur d'EFAIX. Il conçoit des projets d'IA appliquée, des produits éducatifs et des expériences web utiles.",
    skip: "Aller au contenu",
    explore: "Explorer le portfolio",
    openResume: "Ouvrir le CV",
    resume: "CV",
    openCv: "Ouvrir le CV",
    heroKicker: "Étudiant ingénieur à l'UM6P, fondateur d'EFAIX et créateur de solutions d'IA appliquée",
    heroText: "Je suis étudiant ingénieur à l'EMINES - UM6P et fondateur d'EFAIX. Mes travaux récents couvrent des projets d'IA appliquée sur GitHub, la réalisation de produits éducatifs et des sites web livrés pour de vrais utilisateurs et équipes.",
    primaryLinks: "Liens principaux",
    location: "Benguerir, Maroc",
    availability: "Ouvert aux stages en IA et produit, aux missions web freelance et aux collaborations techniques ambitieuses.",
    exploreKicker: "Explorer",
    chooseChapter: "Choisissez un chapitre.",
    portfolioNote: "Une vue ciblée du travail, de l'expérience, des outils et des preuves présentés dans ce portfolio.",
    sectionsLabel: "Sections du portfolio",
    sections: ["Projets", "Expérience", "Formation", "Outils", "Certifications", "Activités"],
    workViews: "Vues du travail",
    work: ["Projets IA", "Créations web"],
    experienceKicker: "Expérience",
    experienceHeading: "Construire entre IA, éducation et web.",
    experienceIntro: "Le fil conducteur de mon travail : transformer des idées techniques en systèmes utiles et accessibles au public.",
    educationKicker: "Formation",
    educationHeading: "Les fondations académiques derrière mon travail.",
    educationIntro: "Les études d'ingénierie, de systèmes industriels et de mathématiques qui façonnent ma manière de construire.",
    toolsKicker: "Outils",
    toolsHeading: "Les outils que j'utilise.",
    toolsIntro: "Recherchez ou filtrez les logiciels, langages, bibliothèques et compétences mobilisés dans les projets.",
    searchTools: "Rechercher des outils et compétences",
    searchPlaceholder: "Rechercher Python, GitHub, RAG...",
    stackFilters: "Filtres des outils",
    stackFilterLabels: { software: "Logiciels", language: "Langages", library: "Bibliothèques", tools: "Outils", skill: "Compétences" },
    stackCaption: "Recherchez par nom ou utilisez les filtres pour réduire la liste.",
    certificatesKicker: "Certifications",
    certificatesHeading: "Des formations et certifications vérifiables.",
    certificatesIntro: "Une archive concise des certificats liés aux parcours d'apprentissage derrière mon travail.",
    activitiesKicker: "Activités",
    activitiesHeading: "Animer des communautés et créer des espaces d'apprentissage concrets.",
    activitiesIntro: "Les responsabilités étudiantes, l'enseignement et le travail communautaire qui complètent mon expérience technique.",
    contactKicker: "Contact",
    contactHeading: "Parlons-en",
    contactIntro: "Pour un stage en IA ou produit, un projet web freelance ou une collaboration technique, l'e-mail est le moyen le plus rapide.",
    bestFit: "Collaboration idéale : stages en IA/ML, ingénierie produit, systèmes éducatifs et collaborations techniques ambitieuses.",
    contactLinks: "Liens de contact",
    footerTagline: "IA appliquée, produits éducatifs et expériences web réalisés avec exigence.",
    footerNavigation: "Navigation du pied de page",
    footerNav: ["Projets", "Expérience", "Formation", "Outils", "Certifications", "Activités", "Contact", "GitHub", "LinkedIn"],
    all: "Tous",
    items: "éléments",
    item: "élément",
    shown: "affichés",
    noMatches: "Aucun résultat.",
    noMatchesText: "Essayez un autre mot-clé ou touchez à nouveau le filtre actif pour réinitialiser la liste.",
    certificate: "certificat",
    openCertificate: "Ouvrir le certificat",
    viewRepo: "Voir le dépôt",
    visitWebsite: "Visiter le site",
    back: "← Retour au portfolio",
    year: "Année",
    role: "Rôle",
    problem: "Problème",
    approach: "Approche",
    result: "Résultat",
    category: "Catégorie",
    organisation: "Organisation",
    dates: "Dates",
    context: "Contexte",
    copyright: "Tous droits réservés."
  }
}[currentLanguage];

const frenchProjectCopy = [
  { title: "Moteur de tarification", type: "IA et données", role: "Modélisation des prix et aide à la décision", summary: "Workflow de tarification par machine learning pour transformer les sorties d'un modèle en décisions de prix plus pertinentes.", problem: "Estimer de meilleurs niveaux de prix à partir de signaux métier structurés.", approach: "J'ai combiné analyse, prédiction et réflexion produit dans un workflow destiné à éclairer les choix de prix, pas seulement à produire un score.", result: "La tarification est abordée comme un système concret d'aide à la décision plutôt que comme un simple notebook.", stack: ["Python", "Pandas", "Scikit-learn"] },
  { title: "Prédiction du churn client télécom", type: "IA et données", role: "Workflow complet de classification du churn", summary: "Projet de classification orienté rétention, construit autour des signaux de départ et du comportement client.", problem: "Identifier les clients les plus susceptibles de partir et comprendre pourquoi.", approach: "J'ai travaillé sur le nettoyage, l'analyse exploratoire, l'encodage des variables, la séparation entraînement-test et la classification pour construire un pipeline exploitable.", result: "Un workflow de rétention plus lisible relie le contexte métier aux choix de modélisation.", stack: ["Python", "EDA", "Classification"] },
  { title: "Détection de fraude par carte bancaire", type: "Cybersécurité", role: "Classification déséquilibrée et évaluation", summary: "Workflow de détection de fraude centré sur le déséquilibre des classes, les variables et l'évaluation.", problem: "Détecter les transactions suspectes dans un contexte de classification fortement déséquilibré.", approach: "J'ai structuré le nettoyage, la création de variables, la gestion du déséquilibre et la comparaison des modèles dans des notebooks.", result: "Le projet traite les données riches en anomalies avec soin au lieu de réduire la fraude à une classification générique.", stack: ["Python", "Feature engineering", "Évaluation des modèles"] },
  { title: "Système de prévision météo", type: "Logiciel", role: "Modélisation de prévisions et interface interactive", summary: "Projet de prévision utilisant XGBoost, des données météo de la NASA et une couche web interactive.", problem: "Transformer des signaux météo en prévisions modélisées et accessibles à l'utilisateur.", approach: "J'ai combiné une modélisation temporelle, XGBoost, des entrées géographiques et une interface web pour dépasser la simple prédiction brute.", result: "Un exemple clair de lien entre machine learning et livraison orientée produit.", stack: ["XGBoost", "Données météo NASA", "JavaScript"] },
  { title: "Segmentation clients e-commerce", type: "IA et données", role: "Clustering et analyse exploratoire", summary: "Projet de segmentation par clustering pour soutenir des décisions de ciblage plus précises.", problem: "Regrouper les clients par comportement afin d'améliorer le ciblage et les décisions marketing.", approach: "J'ai utilisé l'analyse exploratoire et le clustering pour identifier des segments comportementaux utiles plutôt que de me concentrer uniquement sur la prédiction.", result: "Le projet met l'accent sur l'insight et l'action, pas seulement sur la sortie du modèle.", stack: ["Clustering", "EDA", "Analyse client"] },
  { title: "Contrôle qualité des métaux", type: "Vision par ordinateur", role: "Détection et segmentation des défauts", summary: "Workflow de vision par ordinateur pour détecter et segmenter les défauts sur des pièces industrielles.", problem: "Repérer les anomalies de couleur et les rayures dans des scénarios d'inspection d'écrous métalliques.", approach: "J'ai construit un workflow de contrôle qualité visuel appliqué autour de la détection et de la segmentation des défauts.", result: "Le portfolio gagne un volet industriel et concret en vision par ordinateur.", stack: ["Vision par ordinateur", "Segmentation", "TypeScript"] }
];

const frenchCertificateCopy = [
  { title: "Spécialisation Machine Learning", note: "Certificat de spécialisation en machine learning, consultable directement." },
  { title: "Pre Security", note: "Certificat du parcours d'apprentissage Pre-security, consultable directement." },
  { title: "Security 101", note: "Certificat Security 101, consultable directement." },
  { title: "RAG", note: "Certificat sur la génération augmentée par récupération, consultable directement." }
];

const frenchSiteCopy = [
  { category: "Écosystème éducatif", role: "Site de marque et positionnement produit", summary: "Site public principal présentant l'histoire, le positionnement et l'écosystème EFAIX." },
  { category: "Plateforme d'apprentissage", role: "Expérience de diffusion de formations", summary: "Surface d'apprentissage numérique structurée autour d'un accès aux cours plus clair." },
  { category: "Communauté tech étudiante", role: "Site communautaire et identité", summary: "Site d'une communauté technologique étudiante autour des événements, ateliers, responsabilités et projets concrets." },
  { category: "Site client", role: "Exécution web orientée lancement", summary: "Présence commerciale conçue pour la clarté, la rapidité et une confiance renforcée." },
  { category: "Site client", role: "Présentation de marque et finition", summary: "Site guidé par la marque, construit autour de la présentation, de la crédibilité et d'un récit plus net." },
  { category: "Plateforme éducative", role: "Expérience de cours et de plateforme", summary: "Travail sur une plateforme d'apprentissage du code et de l'IA avec un parcours utilisateur plus organisé." },
  { category: "Plateforme événementielle étudiante", role: "Site BDE et expérience événementielle", summary: "Site BDE 2026 sombre et narratif autour du thème Twisted Circus, des événements, du classement et de la communauté étudiante." }
];

const experienceCopy = currentLanguage === "fr" ? [
  { role: "Fondateur et PDG", company: "EFAIX · Indépendant", date: "sept. 2025 - aujourd'hui · 1 an", location: "Maroc", description: "Je construis EFAIX, une plateforme éducative propulsée par l'IA pour rendre l'apprentissage plus personnalisé, accessible et sécurisé. Je dirige le développement de systèmes intelligents d'apprentissage, d'évaluation et d'automatisation en intégrant la confidentialité, le contrôle d'accès et la gestion responsable des données. Je travaille entre ingénierie IA, développement logiciel, conception produit et architecture sécurisée pour transformer des idées innovantes en solutions éducatives concrètes.", aria: "Ouvrir les détails de l'expérience EFAIX" },
  { role: "Stagiaire", company: "Thales · Stage", date: "juil. 2026 · 1 mois", location: "Rabat, Rabat-Salé-Kénitra, Maroc · Sur site", description: "Je contribue au développement de SecureGRC, une plateforme de gouvernance, risque et conformité assistée par l'IA, conçue pour simplifier la conformité cybersécurité grâce à l'analyse intelligente de documents et au traitement automatisé des preuves. Je travaille sur l'ensemble de la stack et sur des fonctions IA de compréhension documentaire, de correspondance des contrôles, de gestion des risques et de workflows de conformité.", aria: "Ouvrir les détails de l'expérience Thales" },
  { role: "Stagiaire", company: "EDGEFLOW PRICING · Stage", date: "juin 2026 · 1 mois", location: "Ben Guerir, Marrakech-Safi, Maroc · Sur site", description: "J'ai contribué à l'adaptation d'un moteur de tarification piloté par l'IA pour le secteur agricole en transformant des données de marché brutes en informations de prix fiables et actionnables. J'ai travaillé sur la préparation des données, la création de variables, l'analyse concurrentielle, le développement de modèles et l'optimisation des prix, en veillant à la qualité et à la cohérence des données.", aria: "Ouvrir les détails de l'expérience EdgeFlow Pricing" }
] : [
  { role: "Founder & CEO", company: "EFAIX · Self-employed", date: "Sep 2025 - Present · 1 yr", location: "Morocco", description: "Building EFAIX, an AI-powered educational platform designed to make learning more personalised, accessible, and secure. Leading the development of intelligent learning, assessment, and automation systems while considering data privacy, access control, and the responsible handling of user information. Working across AI engineering, software development, product design, and secure system architecture to transform innovative ideas into practical educational solutions.", aria: "Open EFAIX experience details" },
  { role: "Intern", company: "Thales · Internship", date: "Jul 2026 · 1 mo", location: "Rabat, Rabat-Salé-Kénitra, Morocco · On-site", description: "Contributing to the development of SecureGRC, an AI-assisted Governance, Risk, and Compliance platform designed to streamline cybersecurity compliance through intelligent document analysis and automated evidence processing. Working across the full stack while developing AI features for document understanding, control mapping, risk management, and compliance workflows. Combining artificial intelligence and cybersecurity governance to improve traceability, decision-making, and the secure management of compliance data.", aria: "Open Thales experience details" },
  { role: "Intern", company: "EDGEFLOW PRICING · Internship", date: "Jun 2026 · 1 mo", location: "Ben Guerir, Marrakesh-Safi, Morocco · On-site", description: "Contributed to the adaptation of an AI-driven pricing engine for the agricultural sector by transforming raw market data into reliable and actionable pricing insights. Worked on data preparation, feature engineering, competitor analysis, model development, and pricing optimisation to support data-driven business decisions. Strengthened my ability to build practical machine-learning solutions while ensuring data quality, consistency, and responsible processing throughout the analytical workflow.", aria: "Open EdgeFlow Pricing experience details" }
];

const educationCopy = currentLanguage === "fr" ? [
  { label: "Étudiant ingénieur", title: "UM6P - Université Mohammed VI Polytechnique", degree: "Diplôme d'ingénieur, Génie industriel et management", date: "2023 - 2028", details: [], aria: "Formation à l'UM6P" },
  { label: "Étudiant ingénieur", title: "EMINES - École de management industriel / Université Mohammed VI Polytechnique", degree: "Diplôme d'ingénieur, Génie des procédés et systèmes industriels", date: "sept. 2023 - juil. 2028", details: ["Simulation des procédés", "Aspen Plus", "Programmation Python", "Systèmes industriels", "Robotique et automatisation", "Gestion de projet"], aria: "Formation à l'EMINES" },
  { label: "Études secondaires", title: "Lycée Ali Ben Berry", degree: "Baccalauréat, Sciences mathématiques", date: "sept. 2022 - juil. 2023", details: ["Mention : Très bien"], aria: "Formation au lycée Ali Ben Berry" }
] : [
  { label: "Engineering student", title: "UM6P - University Mohammed VI Polytechnic University", degree: "Engineer's Degree, Engineering/Industrial Management", date: "2023 - 2028", details: [], aria: "UM6P education" },
  { label: "Engineering student", title: "EMINES - School of Industrial Management / Mohammed VI Polytechnic University", degree: "Engineer's degree, process Engineering & Industrial Systems", date: "Sep 2023 - Jul 2028", details: ["Process Simulation", "Aspen Plus", "Python Programming", "Industrial Systems", "Robotics & Automation", "Project Management"], aria: "EMINES education" },
  { label: "Secondary education", title: "Ali Ben Berry School", degree: "Baccalaureate, Mathematical Sciences", date: "Sep 2022 - Jul 2023", details: ["Grade: High Honors"], aria: "Ali Ben Berry School education" }
];

const activityCopy = currentLanguage === "fr" ? [
  { role: "Président", date: "mai 2026 - aujourd'hui · 4 mois", location: "Sciences et technologie", description: "J'ai rejoint E++ comme Event Manager, puis été Vice-Président, et je dirige aujourd'hui le club comme Président. Je travaille avec une équipe pluridisciplinaire pour organiser des ateliers techniques, événements et initiatives autour de la programmation, du développement web, de l'intelligence artificielle et de la data science. Notre objectif est de créer des occasions d'apprentissage pratiques qui aident les étudiants à développer des compétences d'ingénierie concrètes.", aria: "Ouvrir les détails de l'activité Club E-plusplus" },
  { role: "Responsable matériel", date: "mai 2024 - juin 2025 · 1 an 2 mois", location: "Sciences et technologie", description: "Je gère les outils, composants électroniques et équipements mécaniques du club afin qu'ils soient disponibles et correctement entretenus pour les projets de robotique. Je coordonne les demandes de matériel, organise l'inventaire et accompagne les équipes pendant les ateliers et compétitions.", aria: "Ouvrir les détails de l'activité Emines Technology Club" },
  { role: "Responsable des ateliers", date: "juin 2026 - aujourd'hui · 3 mois", location: "Sciences et technologie", description: "J'anime des ateliers qui initient les étudiants à la programmation, à la data science et à l'intelligence artificielle à travers des projets pratiques. Je conçois du contenu pédagogique et des exercices accessibles aux débutants, afin de développer la confiance et les compétences nécessaires pour résoudre des problèmes d'ingénierie réels.", aria: "Ouvrir les détails de l'activité datalab emines" },
  { role: "Vice-Président (BDE)", date: "juin 2026 - aujourd'hui · 3 mois", location: "", description: "En tant que Vice-Président du BDE à l'EMINES, je contribue à coordonner les initiatives étudiantes, à accompagner les clubs et associations et à planifier des événements qui renforcent la vie du campus. Je travaille avec les étudiants et l'administration pour améliorer la communication et créer un environnement plus engageant et collaboratif.", aria: "Ouvrir les détails de l'activité EMINES - UM6P" },
  { role: "Membre de la communauté", date: "avr. 2024 - aujourd'hui · 2 ans 5 mois", location: "Éducation", description: "Je contribue à des initiatives qui promeuvent les mathématiques et l'éducation scientifique au Maroc. Je collabore avec des bénévoles pour organiser des événements éducatifs et des actions de sensibilisation qui encouragent la curiosité, l'esprit critique et la résolution de problèmes.", aria: "Ouvrir les détails de l'activité Math&Maroc" }
] : [
  { role: "President", date: "May 2026 - Present · 4 mos", location: "Science and Technology", description: "Joined E++ as Event Manager, later served as Vice President, and currently lead the club as President. Working with a multidisciplinary team to organize technical workshops, events, and initiatives focused on programming, web development, artificial intelligence, and data science. Our goal is to create practical learning opportunities that help students develop real-world engineering skills.", aria: "Open Club E-plusplus activity details" },
  { role: "Materials Manager", date: "May 2024 - Jun 2025 · 1 yr 2 mos", location: "Science and Technology", description: "Managing the club's tools, electronic components, and mechanical equipment to ensure they are available and properly maintained for robotics projects. Coordinating material requests, organising inventory, and supporting teams during workshops and competitions. Helping members work efficiently by providing the resources needed to design, build, and test robotic systems.", aria: "Open Emines Technology Club activity details" },
  { role: "Workshop Lead", date: "Jun 2026 - Present · 3 mos", location: "Science and Technology", description: "Leading workshops that introduce students to programming, data science, and artificial intelligence through hands-on projects. Designing educational content and practical exercises that make technical concepts accessible to beginners. Helping participants build confidence while developing the skills needed to tackle real-world engineering problems.", aria: "Open datalab emines activity details" },
  { role: "Vice President (BDE)", date: "Jun 2026 - Present · 3 mos", location: "", description: "As Vice President of the BDE at EMINES, I help coordinate student initiatives, support clubs and associations, and contribute to the planning of events that strengthen campus life. I work closely with the student body and school administration to improve communication, organize projects, and create a more engaging and collaborative environment for students.", aria: "Open EMINES - UM6P activity details" },
  { role: "Community member", date: "Apr 2024 - Present · 2 yrs 5 mos", location: "Education", description: "Contributing to initiatives that promote mathematics and scientific education across Morocco. Collaborating with volunteers to organize educational events and outreach activities that encourage curiosity, critical thinking, and problem-solving. Supporting a community dedicated to making STEM more accessible to students.", aria: "Open Math and Maroc activity details" }
];

const proofPoints = baseProofPoints.map((item, index) => ({
  ...item,
  label: currentLanguage === "fr" ? ["dépôts publics", "projets sélectionnés", "créations web en ligne"][index] : item.label
}));
const projects = currentLanguage === "fr" ? baseProjects.map((project, index) => ({ ...project, ...frenchProjectCopy[index] })) : baseProjects;
const certificates = currentLanguage === "fr" ? baseCertificates.map((certificate, index) => ({ ...certificate, ...frenchCertificateCopy[index] })) : baseCertificates;
const sites = currentLanguage === "fr" ? baseSites.map((site, index) => ({ ...site, ...frenchSiteCopy[index] })) : baseSites;
const projectFilters = [ui.all, ...new Set(projects.map((project) => project.type))];
let activeProjectFilter = ui.all;
let activeStackFilter = "all";
let stackSearchTerm = "";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function fallbackImage(image) {
  return image?.startsWith("/") ? image : `/${image || "assets/images/ui/placeholder.svg"}`;
}

function applyStaticLocale() {
  const setText = (selector, value, scope = document) => {
    const element = selector ? $(selector, scope) : scope;
    if (element) element.textContent = value;
  };
  const setAttr = (selector, attribute, value) => {
    const element = $(selector);
    if (element) element.setAttribute(attribute, value);
  };

  document.documentElement.lang = currentLanguage;
  document.title = ui.title;
  setAttr('meta[name="description"]', "content", ui.description);
  setAttr('meta[property="og:title"]', "content", ui.title);
  setAttr('meta[property="og:description"]', "content", ui.description);
  setAttr('meta[property="og:url"]', "content", `https://www.adamlachkar.com/${currentLanguage}/`);
  setAttr('meta[name="twitter:title"]', "content", ui.title);
  setAttr('meta[name="twitter:description"]', "content", ui.description);
  setAttr('link[rel="canonical"]', "href", `https://www.adamlachkar.com/${currentLanguage}/`);

  setText(".skip-link", ui.skip);
  setText(".topbar-link", ui.explore);
  setText(".topbar-resume", ui.openResume);
  setText(".hero-copy .kicker", ui.heroKicker);
  setText(".hero-text", ui.heroText);
  setAttr(".hero-links", "aria-label", ui.primaryLinks);
  setText(".hero-note strong", ui.location);
  setText(".hero-note span", ui.availability);
  setText(".portfolio-heading .kicker", ui.exploreKicker);
  setText(".portfolio-heading h2", ui.chooseChapter);
  setText(".portfolio-heading-note", ui.portfolioNote);
  setAttr(".section-switcher", "aria-label", ui.sectionsLabel);
  $$(".section-tab").forEach((tab, index) => setText("span:last-child", ui.sections[index], tab));
  setAttr(".work-switcher", "aria-label", ui.workViews);
  $$(".work-switcher .switch").forEach((button, index) => setText("", ui.work[index], button));

  setText("#panel-experience .section-head .kicker", ui.experienceKicker);
  setText("#panel-experience .section-head h2", ui.experienceHeading);
  setText("#panel-experience .section-intro", ui.experienceIntro);
  setText("#panel-tools .section-head .kicker", ui.toolsKicker);
  setText("#panel-tools .section-head h2", ui.toolsHeading);
  setText("#panel-tools .section-intro", ui.toolsIntro);
  setText('label[for="stack-search"]', ui.searchTools);
  setAttr("#stack-search", "placeholder", ui.searchPlaceholder);
  setAttr("#stack-filters", "aria-label", ui.stackFilters);
  $$("#stack-filters .stack-filter").forEach((button) => {
    setText("", ui.stackFilterLabels[button.dataset.stackFilter], button);
  });
  setText(".stack-caption", ui.stackCaption);
  setText("#panel-certificates .section-head .kicker", ui.certificatesKicker);
  setText("#panel-certificates .section-head h2", ui.certificatesHeading);
  setText("#panel-certificates .section-intro", ui.certificatesIntro);
  setText("#panel-activities .section-head .kicker", ui.activitiesKicker);
  setText("#panel-activities .section-head h2", ui.activitiesHeading);
  setText("#panel-activities .section-intro", ui.activitiesIntro);

  const experienceCards = $$('.experience-card[data-detail-type="experience"]');
  experienceCards.forEach((card, index) => {
    const content = experienceCopy[index];
    if (!content) return;
    setText(".experience-label", content.role, card);
    setText(".experience-company", content.company, card);
    setText(".experience-date", content.date, card);
    setText(".experience-location", content.location, card);
    setText(".experience-description", content.description, card);
    card.setAttribute("aria-label", content.aria);
  });

  setText("#panel-education .section-head .kicker", ui.educationKicker);
  setText("#panel-education .section-head h2", ui.educationHeading);
  setText("#panel-education .section-intro", ui.educationIntro);

  const activityCards = $$('.experience-card[data-detail-type="activity"]');
  activityCards.forEach((card, index) => {
    const content = activityCopy[index];
    if (!content) return;
    setText(".experience-label", content.role, card);
    setText(".experience-date", content.date, card);
    setText(".experience-location", content.location, card);
    setText(".experience-description", content.description, card);
    card.setAttribute("aria-label", content.aria);
  });

  setText("#contact .contact-copy .kicker", ui.contactKicker);
  setText("#contact-title", ui.contactHeading);
  const contactIntro = $("#contact .contact-copy p:not(.kicker):not(.contact-note)");
  if (contactIntro) contactIntro.textContent = ui.contactIntro;
  setText("#contact .contact-note", ui.bestFit);
  setAttr(".contact-icons", "aria-label", ui.contactLinks);
  setText(".contact-actions .button-dark", "Email");
  setText(".contact-actions .button-light", ui.openResume);
  setText(".detail-back", ui.back);
  setText("#detail-page-link", ui.viewRepo);
  setText(".footer-tagline", ui.footerTagline);
  setText(".footer-resume", ui.openCv);
  setAttr(".footer-nav", "aria-label", ui.footerNavigation);
  $$(".footer-nav .footer-link").forEach((link, index) => setText("", ui.footerNav[index], link));
  const copyright = $(".footer-bottom > p");
  if (copyright) copyright.innerHTML = `© <span id="footer-year">2026</span> Adam Lachkar. ${ui.copyright}`;

  const resumeLinks = $$(".topbar-resume, .hero-links .text-link:last-child, .contact-actions .button-light, .footer-resume");
  resumeLinks.forEach((link) => {
    link.href = resumeFile;
    link.textContent = link.classList.contains("footer-resume") ? ui.openCv : link.classList.contains("topbar-resume") || link.classList.contains("button-light") ? ui.openResume : ui.resume;
  });

  $$('[data-language-link]').forEach((link) => {
    const active = link.dataset.languageLink === currentLanguage;
    link.classList.toggle("active", active);
    link.setAttribute("aria-current", active ? "page" : "false");
  });
}

function renderChipList(items) {
  return `
    <div class="chip-list">
      ${items.map((item) => `<span class="chip">${item}</span>`).join("")}
    </div>
  `;
}

function getFilteredStack() {
  const query = stackSearchTerm.trim().toLowerCase();

  return stack.filter((item) => {
    const matchesFilter = activeStackFilter === "all" || item.type === activeStackFilter;
    const matchesQuery =
      !query ||
      [item.name, item.group, item.type]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesFilter && matchesQuery;
  });
}

function getFilteredProjects() {
  return projects
    .map((project, index) => ({ ...project, index }))
    .filter((project) => activeProjectFilter === ui.all || project.type === activeProjectFilter);
}

function renderProofPoints() {
  const container = $("#proof-grid");
  if (!container) return;

  container.innerHTML = proofPoints
    .map(
      (item) => `
        <article class="proof-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");
}

function renderProjectFilters() {
  const container = $("#project-filters");
  if (!container) return;

  container.innerHTML = projectFilters
    .map(
      (filter) => `
        <button
          class="filter-chip ${filter === activeProjectFilter ? "active" : ""}"
          type="button"
          data-project-filter="${filter}"
          aria-selected="${filter === activeProjectFilter ? "true" : "false"}"
        >
          ${filter}
        </button>
      `
    )
    .join("");
}

function renderProjects() {
  const grid = $("#projects-grid");
  if (!grid) return;

  grid.innerHTML = getFilteredProjects()
    .map(
      (project) => `
        <article class="project-card">
          <button
            class="project-trigger"
            type="button"
            data-project="${project.index}"
            aria-label="${currentLanguage === "fr" ? "Ouvrir les détails de" : "Open"} ${project.title} ${currentLanguage === "fr" ? "" : "details"}"
          >
            <div class="project-layout">
              <img src="${fallbackImage(project.image)}" alt="${project.title}" loading="lazy" />
              <div class="project-copy">
                <div class="project-meta">
                  <span>${project.type}</span>
                  <strong>${project.year}</strong>
                </div>
                <h3>${project.title}</h3>
                <p class="project-role">${project.role}</p>
                <p class="project-summary">${project.summary}</p>
                <p class="project-result">${project.result}</p>
                ${renderChipList(project.stack)}
              </div>
            </div>
          </button>
        </article>
      `
    )
    .join("");
}

function renderCertificates() {
  const container = $("#certificate-grid");
  if (!container) return;

  container.innerHTML = certificates
    .map(
      (item) => `
        <article class="certificate-card">
          <div class="certificate-icon certificate-icon-${item.providerKey}">
          <img src="${fallbackImage(item.logo)}" alt="${item.provider} logo" loading="lazy" />
          </div>
          <div class="certificate-copy">
            <span>${item.provider} ${ui.certificate}</span>
            <h3>${item.title}</h3>
            <p>${item.note}</p>
          </div>
          <a class="button button-light certificate-link" href="${fallbackImage(item.file)}" target="_blank" rel="noopener">
            ${ui.openCertificate}
          </a>
        </article>
      `
    )
    .join("");
}

function renderEducation() {
  const container = $("#education-grid");
  if (!container) return;

  const logoTypes = ["um6p", "emines", "school"];
  container.innerHTML = educationCopy
    .map(
      (item, index) => `
        <article
          class="experience-card education-card"
          data-detail-type="education"
          data-detail-id="${slugify(item.title)}"
          tabindex="0"
          role="button"
          aria-label="${item.aria}"
        >
          <div class="experience-logo education-logo education-logo-${logoTypes[index]}">
            ${index === 0
              ? '<img src="/assets/images/education/um6p-logo.png" alt="UM6P logo" loading="lazy" />'
              : index === 1
                ? '<img src="/assets/images/education/emines-logo.jpg" alt="EMINES logo" loading="lazy" />'
                : `<span>ABB</span>`}
          </div>
          <div class="experience-card-content">
            <div class="experience-card-head">
              <div>
                <p class="experience-label">${item.label}</p>
                <h3>${item.title}</h3>
                <p class="experience-company">${item.degree}</p>
              </div>
              <span class="experience-date">${item.date}</span>
            </div>
            ${item.details.length ? `<ul class="education-details">${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>` : ""}
          </div>
        </article>
      `
    )
    .join("");
}

function renderSites() {
  const grid = $("#sites-grid");
  if (!grid) return;

  grid.innerHTML = sites
    .map(
      (site) => `
        <article
          class="site-card"
          data-detail-type="site"
          data-detail-id="${slugify(site.title)}"
          tabindex="0"
          role="button"
          aria-label="${currentLanguage === "fr" ? "Ouvrir les détails du site" : "Open website details for"} ${site.title}"
        >
          <img src="${fallbackImage(site.image)}" alt="${site.title}" loading="lazy" />
          <div class="site-copy">
            <h3>${site.title}</h3>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStack() {
  const container = $("#stack-cards");
  const results = $("#stack-results");
  if (!container) return;

  const filteredStack = getFilteredStack();

  if (results) {
    results.textContent = `${filteredStack.length} ${filteredStack.length === 1 ? ui.item : ui.items} ${ui.shown}`;
  }

  if (!filteredStack.length) {
    container.innerHTML = `
      <article class="stack-empty">
        <strong>${ui.noMatches}</strong>
        <p>${ui.noMatchesText}</p>
      </article>
    `;
    return;
  }

  container.innerHTML = filteredStack
    .map(
      (item) => `
        <article class="stack-item" data-stack-type="${item.type}">
          <div class="stack-item-icon${item.iconClass ? ` ${item.iconClass}` : ""}" aria-hidden="true">
            <img src="${fallbackImage(item.icon)}" alt="" loading="lazy" />
          </div>
          <span class="stack-item-name">${item.name}</span>
        </article>
      `
    )
    .join("");
}

function renderStackFilters() {
  $$("[data-stack-filter]").forEach((button) => {
    const active = button.dataset.stackFilter === activeStackFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function initStackControls() {
  const search = $("#stack-search");
  const filters = $("#stack-filters");

  if (search) {
    search.addEventListener("input", (event) => {
      stackSearchTerm = event.target.value;
      renderStack();
    });
  }

  if (filters) {
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-stack-filter]");
      if (!button) return;

      const nextFilter = button.dataset.stackFilter;
      activeStackFilter = activeStackFilter === nextFilter ? "all" : nextFilter;
      renderStackFilters();
      renderStack();
    });
  }

  renderStackFilters();
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
    return entities[character];
  });
}

function setDetailHash(type, id) {
  window.history.pushState({}, "", `#detail/${type}/${id}`);
}

function showDetailPage({ type, kicker, title, media, body, link, linkLabel }) {
  const main = $("#main");
  const page = $("#detail-page");
  const mediaContainer = $("#detail-page-media");
  const bodyContainer = $("#detail-page-body");
  const linkElement = $("#detail-page-link");
  if (!main || !page || !mediaContainer || !bodyContainer || !linkElement) return;

  if (type) page.dataset.detailType = type;
  $("#detail-page-kicker").textContent = kicker;
  $("#detail-page-title").textContent = title;
  mediaContainer.replaceChildren();
  if (media) mediaContainer.append(media);
  bodyContainer.innerHTML = body;

  if (link) {
    linkElement.href = link;
    linkElement.textContent = linkLabel || ui.visitWebsite;
    linkElement.hidden = false;
  } else {
    linkElement.hidden = true;
    linkElement.removeAttribute("href");
  }

  main.hidden = true;
  page.hidden = false;
  document.title = `${title} | Adam Lachkar`;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function createImage(src, alt) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "eager";
  return image;
}

function openProjectDetails(index, updateHash = true) {
  const project = projects[index];
  if (!project) return;

  if (updateHash) setDetailHash("project", slugify(project.title));

  showDetailPage({
    type: "project",
    kicker: project.type,
    title: project.title,
    media: createImage(fallbackImage(project.image), project.title),
    link: project.url,
    linkLabel: ui.viewRepo,
    description: project.summary,
    body: `
      <p class="lightbox-summary">${project.summary}</p>
      <div class="detail-grid">
        <div>
          <span>${ui.year}</span>
          <strong>${project.year}</strong>
        </div>
        <div>
          <span>${ui.role}</span>
          <strong>${project.role}</strong>
        </div>
      </div>
      <div class="detail-block">
        <h4>${ui.problem}</h4>
        <p>${project.problem}</p>
      </div>
      <div class="detail-block">
        <h4>${ui.approach}</h4>
        <p>${project.approach}</p>
      </div>
      <div class="detail-block">
        <h4>${ui.result}</h4>
        <p>${project.result}</p>
      </div>
      ${renderChipList(project.stack)}
    `
  });
}

function openSiteDetails(id, updateHash = true) {
  const site = sites.find((item) => slugify(item.title) === id);
  if (!site) return;

  if (updateHash) setDetailHash("site", id);

  showDetailPage({
    kicker: site.category,
    title: site.title,
    media: createImage(fallbackImage(site.image), site.title),
    link: site.url,
    linkLabel: ui.visitWebsite,
    body: `
      <p class="detail-page-summary">${escapeHtml(site.summary)}</p>
      <div class="detail-grid">
        <div>
          <span>${ui.category}</span>
          <strong>${escapeHtml(site.category)}</strong>
        </div>
        <div>
          <span>${ui.role}</span>
          <strong>${escapeHtml(site.role)}</strong>
        </div>
      </div>
    `
  });
}

function openCardDetails(type, id, updateHash = true) {
  const card = $$(`[data-detail-type="${type}"]`).find((item) => item.dataset.detailId === id);
  if (!card) return;

  if (updateHash) setDetailHash(type, id);

  const role = card.querySelector(".experience-label")?.textContent.trim() || "Details";
  const title = card.querySelector("h3")?.textContent.trim() || "";
  const company = card.querySelector(".experience-company")?.textContent.trim() || "";
  const date = card.querySelector(".experience-date")?.textContent.trim() || "";
  const location = card.querySelector(".experience-location")?.textContent.trim() || "";
  const description = card.querySelector(".experience-description")?.textContent.trim() || "";
  const logo = card.querySelector(".experience-logo")?.cloneNode(true);
  const details = [...card.querySelectorAll(".education-details li")]
    .map((item) => item.textContent.trim())
    .filter(Boolean);
  const detailsHeading = currentLanguage === "fr" ? "Domaines étudiés" : "Areas of study";
  const organisationLabel = type === "education"
    ? (currentLanguage === "fr" ? "Diplôme" : "Degree")
    : ui.organisation;

  showDetailPage({
    type,
    kicker: role,
    title,
    media: logo,
    body: `
      ${description ? `<p class="detail-page-summary">${escapeHtml(description)}</p>` : ""}
      <div class="detail-grid">
        <div>
          <span>${organisationLabel}</span>
          <strong>${escapeHtml(company)}</strong>
        </div>
        <div>
          <span>${ui.dates}</span>
          <strong>${escapeHtml(date)}</strong>
        </div>
        ${location ? `<div><span>${ui.context}</span><strong>${escapeHtml(location)}</strong></div>` : ""}
      </div>
      ${details.length ? `<div class="detail-block"><h4>${detailsHeading}</h4><ul class="detail-list">${details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul></div>` : ""}
    `
  });
}

function handleDetailHash() {
  const match = window.location.hash.match(/^#detail\/(project|experience|education|activity|site)\/([^/]+)$/);
  if (!match) {
    hideDetailPage();
    return;
  }

  const [, type, id] = match;
  if (type === "project") {
    const index = projects.findIndex((project) => slugify(project.title) === id);
    if (index >= 0) {
      openProjectDetails(index, false);
      return;
    }
  } else if (type === "site") {
    openSiteDetails(id, false);
    if (!$("#detail-page")?.hidden) return;
  } else {
    openCardDetails(type, id, false);
    if (!$("#detail-page")?.hidden) return;
  }

  hideDetailPage();
}

function hideDetailPage() {
  const main = $("#main");
  const page = $("#detail-page");
  if (!main || !page) return;

  main.hidden = false;
  page.hidden = true;
  page.removeAttribute("data-detail-type");
  document.title = ui.title;
}

function setActiveSection(section, shouldScroll = false) {
  const tab = document.querySelector(`[data-section-tab="${section}"]`);
  const panel = document.querySelector(`#panel-${section}`);
  if (!tab || !panel) return;

  $$('[data-section-tab]').forEach((item) => {
    const active = item === tab;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
  });

  $$(".section-panel").forEach((item) => {
    const active = item === panel;
    item.classList.toggle("active", active);
    item.hidden = !active;
  });

  if (shouldScroll) {
    $("#portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function initSectionTabs() {
  const tabs = $$('[data-section-tab]');
  if (!tabs.length) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      setActiveSection(tab.dataset.sectionTab, true);
    });

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;

      tabs[nextIndex].focus();
      setActiveSection(tabs[nextIndex].dataset.sectionTab, true);
    });
  });

  $$('[data-section-target]').forEach((trigger) => {
    trigger.addEventListener("click", () => {
      setActiveSection(trigger.dataset.sectionTarget, true);
    });
  });
}

function initSwitcher() {
  $$(".switch").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      $$(".switch").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });

      const projectsPanel = $("#projects-panel");
      const sitesPanel = $("#sites-panel");
      const projectFilters = $("#project-filters");
      const showProjects = view === "projects";

      projectsPanel.classList.toggle("active", showProjects);
      projectsPanel.hidden = !showProjects;
      sitesPanel.classList.toggle("active", !showProjects);
      sitesPanel.hidden = showProjects;
      if (projectFilters) projectFilters.hidden = !showProjects;
    });
  });
}

function initDetailRoutes() {
  document.addEventListener("click", (event) => {
    const filter = event.target.closest("[data-project-filter]");
    if (filter) {
      activeProjectFilter = filter.dataset.projectFilter;
      renderProjectFilters();
      renderProjects();
      return;
    }

    const trigger = event.target.closest("[data-project]");
    if (trigger) {
      const projectIndex = Number(trigger.dataset.project);
      openProjectDetails(projectIndex);
      return;
    }

    const detailTrigger = event.target.closest("[data-detail-type]");
    if (detailTrigger) {
      if (detailTrigger.dataset.detailType === "site") {
        openSiteDetails(detailTrigger.dataset.detailId);
      } else {
        openCardDetails(detailTrigger.dataset.detailType, detailTrigger.dataset.detailId);
      }
      return;
    }

  });

  document.addEventListener("keydown", (event) => {
    const detailTrigger = event.target.closest?.("[data-detail-type]");
    if (detailTrigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      if (detailTrigger.dataset.detailType === "site") {
        openSiteDetails(detailTrigger.dataset.detailId);
      } else {
        openCardDetails(detailTrigger.dataset.detailType, detailTrigger.dataset.detailId);
      }
      return;
    }

    if (event.key === "Escape" && window.location.hash.startsWith("#detail/")) {
      window.history.back();
    }
  });

  window.addEventListener("hashchange", handleDetailHash);
  handleDetailHash();
}

function initNav() {
  const toggle = $(".menu-toggle");
  const nav = $("#site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });

  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

function initScrollSpy() {
  const links = $$(".site-nav a");
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      const id = `#${visible.target.id}`;

      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === id);
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-12% 0px -35% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initImages() {
  $$("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "assets/images/ui/placeholder.svg";
    });
  });
}

function init() {
  applyStaticLocale();
  renderProofPoints();
  renderProjectFilters();
  renderProjects();
  renderCertificates();
  renderEducation();
  renderSites();
  renderStack();
  initStackControls();
  initSectionTabs();
  initSwitcher();
  initDetailRoutes();
  initNav();
  initScrollSpy();
  initImages();
}

window.addEventListener("DOMContentLoaded", init);
