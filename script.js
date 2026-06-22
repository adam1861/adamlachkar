const projects = [
  {
    title: "Pricing Engine",
    type: "AI and data",
    image: "assets/pricing-engine.svg",
    url: "https://github.com/adam1861/Pricing-Engine",
    summary: "Machine learning pricing workflow for estimating stronger product pricing decisions.",
    details:
      "Built as an intelligent pricing engine that combines analytics and prediction to estimate optimal prices. The strength of the project is that it treats machine learning as a business decision tool, not just a notebook exercise."
  },
  {
    title: "Telecom Customer Churn Prediction",
    type: "AI and data",
    image: "assets/churn-prediction.svg",
    url: "https://github.com/adam1861/Telecom-Customer-Churn-Prediction",
    summary: "Retention-focused classification project built around churn signals and customer behavior.",
    details:
      "A structured churn modeling workflow covering cleaning, exploratory analysis, feature encoding, train-test splitting, and classification. It is a good example of end-to-end practical machine learning aimed at a real business problem."
  },
  {
    title: "Credit Card Fraud Detection",
    type: "AI and data",
    image: "assets/fraud-detection.svg",
    url: "https://github.com/adam1861/Credit-Card-Fraud-Detection",
    summary: "Fraud detection workflow centered on imbalance handling, feature work, and evaluation.",
    details:
      "This project walks through exploratory analysis, data cleaning, feature engineering, imbalance handling, and model comparison in Python notebooks. It shows careful attention to the practical challenges of anomaly-heavy classification."
  },
  {
    title: "Weather Forecasting System",
    type: "AI and data",
    image: "weather_forcasting.avif",
    url: "https://github.com/adam1861/weather_forcasting",
    summary: "Forecasting project using XGBoost, NASA weather data, and an interactive web layer.",
    details:
      "An AI-powered weather forecasting system built around time-aware signals, XGBoost modeling, and a location-based interface. It is one of the clearest examples of combining data work with a user-facing product."
  },
  {
    title: "E-Commerce Customer Segmentation",
    type: "AI and data",
    image: "assets/customer-segmentation.svg",
    url: "https://github.com/adam1861/E-Commerce-Customer-Segmentation",
    summary: "Clustering-driven segmentation project built to support sharper targeting decisions.",
    details:
      "Focused on exploratory analysis and customer clustering to identify groups with different behaviors. The project reflects a more business-aware use of machine learning, where the point is insight and action rather than prediction alone."
  },
  {
    title: "Metal Quality Control",
    type: "Computer vision",
    image: "assets/metal-quality.svg",
    url: "https://github.com/adam1861/metal_quality_control",
    summary: "Computer vision system for defect detection and segmentation in industrial parts.",
    details:
      "A more applied AI project focused on visual quality control for metal nuts, including segmentation of scratches and color anomalies. It adds a stronger computer vision and industrial quality angle to the portfolio."
  }
];

const experiences = [
  {
    role: "Founder",
    org: "EFAIX",
    summary:
      "Building an AI education ecosystem across the main brand, academy, LMS, and evaluation products.",
    focus: "Product direction, web execution, and AI-first learning workflows"
  },
  {
    role: "Engineering student",
    org: "EMINES - UM6P",
    summary:
      "Developing an industrial engineering foundation while leaning hard into applied AI, data science, and technical systems.",
    focus: "Benguerir, Morocco"
  },
  {
    role: "Community builder",
    org: "Club E-plusplus",
    summary:
      "Growing through programming workshops, collaborative projects, and student-led technical initiatives inside the EMINES ecosystem.",
    focus: "Student community, workshops, and technical collaboration"
  }
];

const sites = [
  {
    title: "Efaix",
    image: "efaix.png",
    url: "https://efaix.com/",
    summary: "Main brand presence for the EFAIX education ecosystem and company story."
  },
  {
    title: "Efaix Academy",
    image: "efaix_academy.png",
    url: "https://academy.efaix.com/",
    summary: "Structured digital learning experience built around training delivery."
  },
  {
    title: "Efaix LMS",
    image: "efaix_lms.png",
    url: "https://lms.efaix.com/",
    summary: "Learning management interface work for organized educational workflows."
  },
  {
    title: "Starteady",
    image: "starteady.png",
    url: "https://www.starteady.com/",
    summary: "Launch-focused web presence shaped for clarity, speed, and commercial trust."
  },
  {
    title: "Auramaking",
    image: "auramaking.png",
    url: "https://www.auramaking.com/",
    summary: "Brand-led website work built around presentation, credibility, and polish."
  },
  {
    title: "Icodex Academy",
    image: "icodex.png",
    url: "https://icodex.academy/",
    summary: "Education platform work for code, AI learning, and clearer course delivery."
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

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const projectFilters = ["All", ...new Set(projects.map((project) => project.type))];
let activeProjectFilter = "All";

function fallbackImage(image) {
  return image || "assets/placeholder.svg";
}

function getFilteredProjects() {
  return projects
    .map((project, index) => ({ ...project, index }))
    .filter((project) => activeProjectFilter === "All" || project.type === activeProjectFilter);
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
                  <strong>Open</strong>
                </div>
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
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
          <span>${item.role}</span>
          <h3>${item.org}</h3>
          <p>${item.summary}</p>
          <strong>${item.focus}</strong>
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
                <span>Website</span>
                <strong>Visit</strong>
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

function openLightbox(index) {
  const project = projects[index];
  const box = $("#lightbox");
  if (!project || !box) return;

  $("#lightbox-kicker").textContent = project.type;
  $("#lightbox-title").textContent = project.title;
  $("#lightbox-text").textContent = project.details;
  const image = $("#lightbox-image");
  image.src = fallbackImage(project.image);
  image.alt = project.title;
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
      threshold: 0.5,
      rootMargin: "-10% 0px -35% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initImages() {
  $$("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "assets/placeholder.svg";
    });
  });
}

function init() {
  renderProjectFilters();
  renderProjects();
  renderExperience();
  renderSites();
  renderStack();
  initSwitcher();
  initLightbox();
  initNav();
  initScrollSpy();
  initImages();
}

window.addEventListener("DOMContentLoaded", init);
