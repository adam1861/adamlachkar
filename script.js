let proofPoints = [];
let projects = [];
let aboutCards = [];
let certificates = [];
let sites = [];
let stack = [];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
let projectFilters = ["All"];
let activeProjectFilter = "All";
let expandedProjectIndex = null;
let activeStackFilter = "all";
let stackSearchTerm = "";

async function loadContent() {
  const response = await fetch("data/content.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Could not load portfolio content.");
  }

  const content = await response.json();
  proofPoints = content.proofPoints || [];
  projects = content.projects || [];
  aboutCards = content.aboutCards || [];
  certificates = content.certificates || [];
  sites = content.sites || [];
  stack = content.stack || [];
  projectFilters = ["All", ...new Set(projects.map((project) => project.type).filter(Boolean))];
}

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
        <article class="project-card ${expandedProjectIndex === project.index ? "expanded" : ""}">
          <button
            class="project-trigger"
            type="button"
            data-project="${project.index}"
            aria-expanded="${expandedProjectIndex === project.index ? "true" : "false"}"
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

function renderCertificates() {
  const container = $("#certificate-grid");
  if (!container) return;

  container.innerHTML = certificates
    .map(
      (item) => `
        <article class="certificate-card">
          <div class="certificate-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 3.75h7.25L19.25 8v12.25H7z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
              <path d="M14 3.75V8h5.25" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
              <path d="M10 12.25h6M10 15.25h6M10 18.25h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="certificate-copy">
            <span>${item.format}</span>
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
      expandedProjectIndex = null;
      renderProjectFilters();
      renderProjects();
      return;
    }

    const trigger = event.target.closest("[data-project]");
    if (trigger) {
      const projectIndex = Number(trigger.dataset.project);
      expandedProjectIndex = expandedProjectIndex === projectIndex ? null : projectIndex;
      renderProjects();
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

function renderContentError() {
  const grid = $("#projects-grid");
  if (!grid) return;

  grid.innerHTML = `
    <article class="stack-empty">
      <strong>Portfolio content could not be loaded.</strong>
      <p>Please refresh the page or try again in a moment.</p>
    </article>
  `;
}

async function init() {
  try {
    await loadContent();
    renderProofPoints();
    renderProjectFilters();
    renderProjects();
    renderAboutCards();
    renderCertificates();
    renderSites();
    renderStack();
    initStackControls();
    initSwitcher();
    initLightbox();
    initNav();
    initScrollSpy();
    initImages();
  } catch (error) {
    console.error(error);
    renderContentError();
    initNav();
  }
}

window.addEventListener("DOMContentLoaded", init);
