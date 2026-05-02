const projects = [
  {
    title: "Football Match Prediction",
    type: "AI and data",
    image: "football_prediction.jpg",
    summary: "A classification workflow using structured sports data and model evaluation.",
    details:
      "Built around feature engineering, model comparison, and result interpretation. The project was less about chasing novelty and more about turning raw match context into a cleaner prediction pipeline."
  },
  {
    title: "Weather Forecast Modeling",
    type: "AI and data",
    image: "weather_forcasting.avif",
    summary: "Forecast-oriented modeling work using weather signals and time-aware reasoning.",
    details:
      "This project focused on preparing data carefully, shaping useful forecasting signals, and testing how predictive models respond when the structure of time actually matters."
  },
  {
    title: "Heart Disease Classification",
    type: "AI and data",
    image: "heart_desease.jpg",
    summary: "Clinical data classification with emphasis on readable modeling choices.",
    details:
      "The interesting part here was not only the prediction result, but keeping the workflow understandable, structured, and grounded in interpretable features."
  },
  {
    title: "Line-Following Robot",
    type: "Robotics",
    image: "robotic_1.png",
    summary: "Embedded robotics build using sensing and control for stable path tracking.",
    details:
      "A practical project that connected hardware, control tuning, and iteration. It lived in that useful space where small engineering decisions become visible immediately."
  },
  {
    title: "4-DOF Robotic Arm",
    type: "Robotics",
    image: "robotic_2.jpg",
    summary: "Mechanical and control exploration around movement, geometry, and servo behavior.",
    details:
      "This work combined physical build constraints with kinematic reasoning. It pushed on the relationship between ideal motion and what hardware actually allows."
  },
  {
    title: "Autonomous Mobile Robot",
    type: "Robotics",
    image: "robotic_3.jpg",
    summary: "Navigation-oriented robot concept centered on autonomy and sensor-based movement.",
    details:
      "A more system-level robotics project exploring how navigation logic, environmental awareness, and movement decisions can be coordinated into one coherent behavior."
  },
  {
    title: "Electromagnetic Induction Analysis",
    type: "Physics",
    image: "physique_1.jpg",
    summary: "Experimental study of field behavior, induction, and measurement discipline.",
    details:
      "This project was about making theory observable. The work emphasized setup quality, instrumentation, and the ability to explain what the measurements were really saying."
  },
  {
    title: "Solar Energy Test Bench",
    type: "Physics",
    image: "physique_2.jpg",
    summary: "Performance testing setup for solar behavior under changing operating conditions.",
    details:
      "A physically grounded project where the value came from comparing system response under different loads and conditions rather than settling for one static read."
  }
];

const sites = [
  {
    title: "Starteady",
    image: "starteady.png",
    url: "https://www.starteady.com/",
    summary: "Launch-focused web presence with a clearer commercial tone."
  },
  {
    title: "Auramaking",
    image: "auramaking.png",
    url: "https://www.auramaking.com/",
    summary: "Brand-led website work shaped around presentation and credibility."
  },
  {
    title: "Icodex Academy",
    image: "icodex.png",
    url: "https://icodex.academy/",
    summary: "Education platform work for code and AI learning."
  },
  {
    title: "Efaix Academy",
    image: "efaix_academy.png",
    url: "https://academy.efaix.com/",
    summary: "Structured digital learning experience for training delivery."
  },
  {
    title: "Efaix LMS",
    image: "efaix_lms.png",
    url: "https://lms.efaix.com/",
    summary: "Learning management interface work for organized educational flows."
  },
  {
    title: "Efaix",
    image: "efaix.png",
    url: "https://efaix.com/",
    summary: "Main brand presence tying the ecosystem together."
  }
];

const stack = [
  {
    title: "AI and data",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
  },
  {
    title: "Programming",
    items: ["Python", "C", "Java", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Engineering",
    items: ["Arduino", "SolidWorks", "MATLAB", "Scilab", "Processing"]
  },
  {
    title: "Workflow",
    items: ["Git", "Linux", "Figma", "WordPress", "Notion", "Power BI"]
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
  renderSites();
  renderStack();
  initSwitcher();
  initLightbox();
  initNav();
  initScrollSpy();
  initImages();
}

window.addEventListener("DOMContentLoaded", init);
