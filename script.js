const proofPoints = [
  { value: "17+", label: "public repos" },
  { value: "6", label: "selected projects" },
  { value: "6", label: "live web builds shown" }
];

const projects = [
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

const certificates = [
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

const sites = [
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

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const projectFilters = ["All", ...new Set(projects.map((project) => project.type))];
let activeProjectFilter = "All";
let activeStackFilter = "all";
let stackSearchTerm = "";

function fallbackImage(image) {
  return image || "assets/images/ui/placeholder.svg";
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
    .filter((project) => activeProjectFilter === "All" || project.type === activeProjectFilter);
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
            aria-label="Open ${project.title} details"
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
            <img src="${item.logo}" alt="${item.provider} logo" loading="lazy" />
          </div>
          <div class="certificate-copy">
            <span>${item.provider} certificate</span>
            <h3>${item.title}</h3>
            <p>${item.note}</p>
          </div>
          <a class="button button-light certificate-link" href="${item.file}" target="_blank" rel="noopener">
            Open certificate
          </a>
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
          aria-label="Open ${site.title} website details"
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
    results.textContent = `${filteredStack.length} item${filteredStack.length === 1 ? "" : "s"} shown`;
  }

  if (!filteredStack.length) {
    container.innerHTML = `
      <article class="stack-empty">
        <strong>No matches found.</strong>
        <p>Try another keyword or tap the active filter again to reset the full list.</p>
      </article>
    `;
    return;
  }

  container.innerHTML = filteredStack
    .map(
      (item) => `
        <article class="stack-item" data-stack-type="${item.type}">
          <div class="stack-item-icon${item.iconClass ? ` ${item.iconClass}` : ""}" aria-hidden="true">
            <img src="${item.icon}" alt="" loading="lazy" />
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

function showDetailPage({ kicker, title, media, body, link, linkLabel }) {
  const main = $("#main");
  const page = $("#detail-page");
  const mediaContainer = $("#detail-page-media");
  const bodyContainer = $("#detail-page-body");
  const linkElement = $("#detail-page-link");
  if (!main || !page || !mediaContainer || !bodyContainer || !linkElement) return;

  $("#detail-page-kicker").textContent = kicker;
  $("#detail-page-title").textContent = title;
  mediaContainer.replaceChildren();
  if (media) mediaContainer.append(media);
  bodyContainer.innerHTML = body;

  if (link) {
    linkElement.href = link;
    linkElement.textContent = linkLabel || "Visit website";
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
    linkLabel: "View repo",
    description: project.summary,
    body: `
      <p class="lightbox-summary">${project.summary}</p>
      <div class="detail-grid">
        <div>
          <span>Year</span>
          <strong>${project.year}</strong>
        </div>
        <div>
          <span>Role</span>
          <strong>${project.role}</strong>
        </div>
      </div>
      <div class="detail-block">
        <h4>Problem</h4>
        <p>${project.problem}</p>
      </div>
      <div class="detail-block">
        <h4>Approach</h4>
        <p>${project.approach}</p>
      </div>
      <div class="detail-block">
        <h4>Result</h4>
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
    linkLabel: "Visit website",
    body: `
      <p class="detail-page-summary">${escapeHtml(site.summary)}</p>
      <div class="detail-grid">
        <div>
          <span>Category</span>
          <strong>${escapeHtml(site.category)}</strong>
        </div>
        <div>
          <span>Role</span>
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

  showDetailPage({
    type,
    kicker: role,
    title,
    media: logo,
    body: `
      <p class="detail-page-summary">${escapeHtml(description)}</p>
      <div class="detail-grid">
        <div>
          <span>Organisation</span>
          <strong>${escapeHtml(company)}</strong>
        </div>
        <div>
          <span>Dates</span>
          <strong>${escapeHtml(date)}</strong>
        </div>
        ${location ? `<div><span>Context</span><strong>${escapeHtml(location)}</strong></div>` : ""}
      </div>
    `
  });
}

function handleDetailHash() {
  const match = window.location.hash.match(/^#detail\/(project|experience|activity|site)\/([^/]+)$/);
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
  document.title = "Adam Lachkar | AI, Data Science, EdTech, Web Products";
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
  renderProofPoints();
  renderProjectFilters();
  renderProjects();
  renderCertificates();
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
