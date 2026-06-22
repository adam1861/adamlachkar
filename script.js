const proofPoints = [
  { value: "17+", label: "public GitHub repositories" },
  { value: "6", label: "recent AI and data projects highlighted here" },
  { value: "6", label: "live web builds and product surfaces featured" }
];

const focusAreas = [
  {
    title: "Applied AI",
    text: "Classification, forecasting, segmentation, and decision-support projects that stay readable and testable."
  },
  {
    title: "Education products",
    text: "Building EFAIX across brand, academy, and LMS surfaces with product-minded execution."
  },
  {
    title: "Opportunity fit",
    text: "Looking for internships and collaborations where AI, product thinking, and shipping discipline all matter."
  }
];

const featuredProject = {
  kicker: "Current venture",
  title: "EFAIX",
  image: "assets/images/sites/efaix.png",
  summary:
    "EFAIX is the strongest expression of where I want to grow: education technology, product execution, and systems that turn ideas into something real and visible.",
  role: "Founder, product direction, and web execution",
  period: "Current",
  scope: "Brand, academy, LMS, and connected education workflows",
  challenge:
    "Build a more coherent learning ecosystem instead of a single disconnected website.",
  approach:
    "Shape the product story, ship the public-facing surfaces, and keep the learning experience organized across multiple properties.",
  outcome:
    "Turned an idea into a visible education ecosystem with live surfaces that make the venture legible to users, partners, and collaborators.",
  stack: ["Product direction", "Web execution", "Education workflows", "Brand systems"],
  links: [
    { label: "Main site", url: "https://efaix.com/" },
    { label: "Academy", url: "https://academy.efaix.com/" },
    { label: "LMS", url: "https://lms.efaix.com/" }
  ]
};

const projects = [
  {
    title: "Pricing Engine",
    type: "AI and data",
    year: "2026",
    role: "Pricing modeling and decision support",
    image: "assets/images/projects/generated/pricing-engine.svg",
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
    image: "assets/images/projects/generated/churn-prediction.svg",
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
    type: "AI and data",
    year: "2026",
    role: "Imbalanced classification and evaluation",
    image: "assets/images/projects/generated/fraud-detection.svg",
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
    type: "AI and data",
    year: "2026",
    role: "Forecast modeling plus interactive interface",
    image: "assets/images/projects/weather_forcasting.avif",
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
    image: "assets/images/projects/generated/customer-segmentation.svg",
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
    image: "assets/images/projects/generated/metal-quality.svg",
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

const experiences = [
  {
    period: "Current",
    track: "Venture",
    role: "Founder",
    org: "EFAIX",
    summary:
      "Building an education-focused product ecosystem and helping shape how the venture shows up across its public web surfaces.",
    highlights: [
      "Guide product direction across the main brand, academy, and LMS surfaces.",
      "Translate product ideas into visible web experiences that people can actually navigate and understand.",
      "Operate at the intersection of execution, structure, and education workflow thinking."
    ]
  },
  {
    period: "Current",
    track: "Education",
    role: "Engineering student",
    org: "EMINES - UM6P",
    summary:
      "Developing an industrial engineering base while leaning strongly into AI, data science, and technical systems work outside the classroom.",
    highlights: [
      "Use coursework as a base, but push most learning through shipped work and self-driven technical exploration.",
      "Build across machine learning, web systems, and product thinking instead of staying inside one narrow lane.",
      "Treat clarity and execution as important skills, not only technical output."
    ]
  },
  {
    period: "Current",
    track: "Community",
    role: "Community builder",
    org: "Club E-plusplus",
    summary:
      "Growing through workshops, collaborative projects, and student-led technical activity inside the EMINES ecosystem.",
    highlights: [
      "Contribute to the programming and technical learning culture around the club.",
      "Value community work because it sharpens leadership, coordination, and teaching instincts.",
      "Use collaboration as another way to get better at building."
    ]
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
  {
    title: "AI and ML",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib"]
  },
  {
    title: "Data work",
    items: ["EDA", "Feature Engineering", "Classification", "Clustering", "Forecasting", "Evaluation"]
  },
  {
    title: "Web and product",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "WordPress", "Figma"]
  },
  {
    title: "Engineering and workflow",
    items: ["Git", "Linux", "Power BI", "Arduino", "SolidWorks", "MATLAB"]
  }
];

const principles = [
  {
    title: "Useful over flashy",
    text: "I prefer systems that can be tested, explained, and improved after launch."
  },
  {
    title: "Product thinking matters",
    text: "Even in technical projects, I care about the user path, the structure, and whether the result is legible."
  },
  {
    title: "Range with discipline",
    text: "I work across AI, web, and systems work, but I still want each project to feel coherent and grounded."
  },
  {
    title: "Build in public",
    text: "GitHub projects, shipped sites, club work, and startup execution all help me learn faster and show real progress."
  }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const projectFilters = ["All", ...new Set(projects.map((project) => project.type))];
let activeProjectFilter = "All";

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

function renderFocusAreas() {
  const container = $("#focus-grid");
  if (!container) return;

  container.innerHTML = focusAreas
    .map(
      (item) => `
        <article class="focus-card">
          <span>${item.title}</span>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderFeaturedProject() {
  const container = $("#featured-project");
  if (!container) return;

  container.innerHTML = `
    <article class="feature-shell">
      <div class="feature-media">
        <img src="${fallbackImage(featuredProject.image)}" alt="${featuredProject.title}" loading="lazy" />
      </div>
      <div class="feature-copy">
        <p class="kicker">${featuredProject.kicker}</p>
        <h3>${featuredProject.title}</h3>
        <p class="feature-summary">${featuredProject.summary}</p>
        <div class="feature-metrics">
          <div>
            <span>Role</span>
            <strong>${featuredProject.role}</strong>
          </div>
          <div>
            <span>Period</span>
            <strong>${featuredProject.period}</strong>
          </div>
          <div>
            <span>Scope</span>
            <strong>${featuredProject.scope}</strong>
          </div>
        </div>
        <div class="feature-block">
          <h4>Challenge</h4>
          <p>${featuredProject.challenge}</p>
        </div>
        <div class="feature-block">
          <h4>Approach</h4>
          <p>${featuredProject.approach}</p>
        </div>
        <div class="feature-block">
          <h4>Outcome</h4>
          <p>${featuredProject.outcome}</p>
        </div>
        ${renderChipList(featuredProject.stack)}
        <div class="inline-links">
          ${featuredProject.links
            .map(
              (link) => `
                <a href="${link.url}" target="_blank" rel="noopener">
                  ${link.label}
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
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
                <p>${project.summary}</p>
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

function renderExperience() {
  const grid = $("#experience-grid");
  if (!grid) return;

  grid.innerHTML = experiences
    .map(
      (item) => `
        <article class="experience-card">
          <div class="experience-meta">
            <span>${item.period}</span>
            <strong>${item.track}</strong>
          </div>
          <h3>${item.role}</h3>
          <p class="experience-org">${item.org}</p>
          <p>${item.summary}</p>
          <ul>
            ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
          </ul>
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
              <p>${site.summary}</p>
            </div>
          </a>
        </article>
      `
    )
    .join("");
}

function renderStack() {
  const container = $("#stack-cards");
  if (!container) return;

  container.innerHTML = stack
    .map(
      (group) => `
        <article class="stack-card">
          <h3>${group.title}</h3>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderPrinciples() {
  const container = $("#principles-grid");
  if (!container) return;

  container.innerHTML = principles
    .map(
      (item) => `
        <article>
          <span>${item.title}</span>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
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
  renderFocusAreas();
  renderFeaturedProject();
  renderProjectFilters();
  renderProjects();
  renderExperience();
  renderAboutCards();
  renderSites();
  renderStack();
  renderPrinciples();
  initSwitcher();
  initLightbox();
  initNav();
  initScrollSpy();
  initImages();
}

window.addEventListener("DOMContentLoaded", init);
