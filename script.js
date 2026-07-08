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

const aboutCards = [
  {
    title: "Education",
    text:
      "Engineering student at EMINES - UM6P with a growing focus on AI, data science, and technical systems that have real users."
  },
  {
    title: "Best fit work",
    text:
      "AI and ML internships, product engineering, education technology systems, technical web builds, and collaborations that need both execution and range."
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
    url: "https://academy.efaix.com/",
    category: "Learning platform",
    role: "Training delivery experience",
    summary: "Structured digital learning surface built around clearer course access and delivery."
  },
  {
    title: "EFAIX LMS",
    image: "assets/images/sites/efaix_lms.png",
    url: "https://lms.efaix.com/",
    category: "Learning system",
    role: "LMS interface execution",
    summary: "Learning management experience focused on organizing educational workflows."
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
    url: "https://icodex.academy/",
    category: "Education platform",
    role: "Course and platform experience",
    summary: "Education platform work for code and AI learning with a more organized user path."
  }
];

const stack = [
  { name: "Python", icon: "assets/icons/stack/python.svg", group: "AI and ML", type: "language" },
  { name: "Pandas", icon: "assets/icons/stack/pandas.svg", group: "AI and ML", type: "library" },
  { name: "NumPy", icon: "assets/icons/stack/numpy.svg", group: "AI and ML", type: "library" },
  { name: "Scikit-learn", icon: "assets/icons/stack/scikitlearn.svg", group: "AI and ML", type: "library" },
  { name: "XGBoost", icon: "assets/icons/stack/xgboost.png", group: "AI and ML", type: "library", iconClass: "wide" },
  { name: "Matplotlib", icon: "assets/icons/stack/matplotlib.svg", group: "AI and ML", type: "library" },
  { name: "EDA", icon: "assets/icons/stack/eda.svg", group: "Data work", type: "skill" },
  { name: "Feature Engineering", icon: "assets/icons/stack/feature-engineering.svg", group: "Data work", type: "skill" },
  { name: "Classification", icon: "assets/icons/stack/classification.svg", group: "Data work", type: "skill" },
  { name: "Clustering", icon: "assets/icons/stack/clustering.svg", group: "Data work", type: "skill" },
  { name: "Forecasting", icon: "assets/icons/stack/forecasting.svg", group: "Data work", type: "skill" },
  { name: "Evaluation", icon: "assets/icons/stack/evaluation.svg", group: "Data work", type: "skill" },
  { name: "HTML", icon: "assets/icons/stack/html5.svg", group: "Web and product", type: "language" },
  { name: "CSS", icon: "assets/icons/stack/css.svg", group: "Web and product", type: "language" },
  { name: "JavaScript", icon: "assets/icons/stack/javascript.svg", group: "Web and product", type: "language" },
  { name: "TypeScript", icon: "assets/icons/stack/typescript.svg", group: "Web and product", type: "language" },
  { name: "WordPress", icon: "assets/icons/stack/wordpress.svg", group: "Web and product", type: "app" },
  { name: "Figma", icon: "assets/icons/stack/figma.svg", group: "Web and product", type: "app" },
  { name: "Git", icon: "assets/icons/stack/git.svg", group: "Engineering and workflow", type: "app" },
  { name: "Linux", icon: "assets/icons/stack/linux.svg", group: "Engineering and workflow", type: "app" },
  { name: "Power BI", icon: "assets/icons/stack/powerbi.svg", group: "Engineering and workflow", type: "app" },
  { name: "Arduino", icon: "assets/icons/stack/arduino.svg", group: "Engineering and workflow", type: "app" },
  { name: "SolidWorks", icon: "assets/icons/stack/solidworks.svg", group: "Engineering and workflow", type: "app" },
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

function formatStackType(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
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
          <button class="project-trigger" type="button" data-project="${project.index}">
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

function renderAboutCards() {
  const container = $("#about-cards");
  if (!container) return;

  container.innerHTML = aboutCards
    .map(
      (item) => `
        <article class="about-card">
          <span>${item.title}</span>
          <p>${item.text}</p>
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
        <article class="site-card">
          <a href="${site.url}" target="_blank" rel="noopener">
            <img src="${fallbackImage(site.image)}" alt="${site.title}" loading="lazy" />
              <div class="site-copy">
                <div class="site-meta">
                  <span>${site.category}</span>
                  <strong>${site.role}</strong>
                </div>
                <h3>${site.title}</h3>
                <p class="site-summary">${site.summary}</p>
              </div>
          </a>
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
          <span class="stack-item-meta">${item.group} / ${formatStackType(item.type)}</span>
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

function openLightbox(index) {
  const project = projects[index];
  const box = $("#lightbox");
  if (!project || !box) return;

  $("#lightbox-kicker").textContent = project.type;
  $("#lightbox-title").textContent = project.title;
  const image = $("#lightbox-image");
  image.src = fallbackImage(project.image);
  image.alt = project.title;

  const body = $("#lightbox-body");
  if (body) {
    body.innerHTML = `
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
    `;
  }

  const link = $("#lightbox-link");
  if (link && project.url) {
    link.href = project.url;
    link.hidden = false;
  } else if (link) {
    link.hidden = true;
    link.removeAttribute("href");
  }

  box.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".lightbox-close")?.focus();
}

function closeLightbox() {
  const box = $("#lightbox");
  if (!box) return;
  box.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
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
      const showProjects = view === "projects";

      projectsPanel.classList.toggle("active", showProjects);
      projectsPanel.hidden = !showProjects;
      sitesPanel.classList.toggle("active", !showProjects);
      sitesPanel.hidden = showProjects;
    });
  });
}

function initLightbox() {
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
      openLightbox(Number(trigger.dataset.project));
      return;
    }

    if (event.target.closest("[data-close-lightbox]")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
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
  renderAboutCards();
  renderSites();
  renderStack();
  initStackControls();
  initSwitcher();
  initLightbox();
  initNav();
  initScrollSpy();
  initImages();
}

window.addEventListener("DOMContentLoaded", init);
