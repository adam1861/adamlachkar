<<<<<<< HEAD
/*
  script.js — Adam Lachkar Portfolio
  - Dynamic rendering for Projects & Websites
  - Filter logic for Projects
  - Accessible modal for project details
  - Theme toggle with localStorage and prefers-color-scheme
  - Copy email to clipboard with feedback toast
  - Scroll spy, back-to-top, smooth anchor behavior
  - Print-to-PDF via window.print()
*/

// ---------- Data (edit here) ----------
const projects = [
  {
    id: 'proj-rf-matches',
    title: 'Prédiction de matchs (Random Forest)',
    blurb: 'Modèle de prédiction des résultats de matchs de football via Random Forest.',
    details: 'Construction de features (forme des équipes, domicile/extérieur, historiques) et entraînement d’un Random Forest pour prédire les résultats des matchs. Évaluation via validation croisée et métriques de précision/recall.',
    tags: ['ML/AI', 'Classification'],
    image: 'football_prediction.jpg'
  },
  {
    id: 'proj-xgb-weather',
    title: 'Prévision météo (XGBoost)',
    blurb: 'Modèle XGBoost pour prévision météorologique (features météo).',
    details: 'Pré-traitement des données météo et ingénierie de variables (tendances, moyennes mobiles) pour entraîner un XGBoost sur des séries temporelles. Validation glissante et optimisation d’hyperparamètres.',
    tags: ['ML/AI', 'Time Series'],
    image: 'weather_forcasting.avif'
  },
  {
    id: 'proj-heart-dtree',
    title: 'Détection maladie cardiaque (Decision Trees)',
    blurb: 'Classification du risque cardiovasculaire à partir de variables cliniques.',
    details: 'Nettoyage de données cliniques, encodage de variables, et entraînement d’arbres de décision pour estimer le risque cardiovasculaire. Interprétabilité via importance des features.',
    tags: ['ML/AI', 'Classification'],
    image: 'heart_desease.jpg'
  },
  {
    id: 'proj-spaceship-logreg',
    title: 'Spaceship Titanic (Logistic Regression)',
    blurb: 'Projet Kaggle : régression logistique pour la classification des passagers.',
    details: 'Participation Kaggle : pipeline de prétraitement (imputation, standardisation) et régression logistique avec validation croisée. Analyse des coefficients et tuning du seuil.',
    tags: ['ML/AI', 'Classification'],
    image: 'titanic_space.jpg'
  },
  // Robotics
  {
    id: 'proj-line-follower',
    title: 'Robot suiveur de ligne (Arduino)',
    blurb: "Robot mobile suivant une ligne via capteurs IR et PID.",
    details: "Conception d’un robot différentiel basé sur Arduino avec capteurs infrarouges, commande PID pour l’asservissement et réglage des gains. Châssis léger et essais sur pistes complexes.",
    tags: ['Robotics'],
    image: 'robotic_1.png'
  },
  {
    id: 'proj-robotic-arm',
    title: 'Bras robotique 4‑DOF ( cinématique inverse )',
    blurb: "Bras 4 axes avec servomoteurs, calcul de cinématique inverse.",
    details: "Modélisation DH, résolution de la cinématique inverse et génération de trajectoires lissées. Pilotage joystick/série, calibration mécanique et limites de couple.",
    tags: ['Robotics'],
    image: 'robotic_2.jpg'
  },
  {
    id: 'proj-ros-nav',
    title: 'Robot mobile autonome (ROS)',
    blurb: "Navigation autonome avec ROS: odométrie, LIDAR et évitement d’obstacles.",
    details: "Intégration ROS (mapping/SLAM), planification locale (DWA) et suivi de trajectoires. Simulation Gazebo et validation terrain avec capteurs LIDAR/IMU.",
    tags: ['Robotics'],
    image: 'robotic_3.jpg'
  },
  {
    id: 'proj-vision-sorter',
    title: 'Tri d’objets par vision',
    blurb: "Système de vision détectant formes/couleurs pour un convoyeur de tri.",
    details: "Acquisition caméra, segmentation couleur et détection de contours pour classer les objets; commande des actionneurs pour aiguillage. Mesure du débit et de la précision.",
    tags: ['Robotics'],
    image: 'robotic_4.jpg'
  },
  // Physics
  {
    id: 'phys-double-pendulum',
    title: 'Electromagnetic Induction Analysis',
    blurb: "Induction électromagnétique : solénoïde, champ magnétique et loi de Faraday-Lenz.",
    details: "Comprehensive study of electromagnetic induction phenomena through systematic experimentation and measurement. This project involved analyzing magnetic field interactions, inductance characteristics, and electromagnetic wave propagation to validate theoretical principles and explore practical applications.",
    tags: ['Physics'],
    image: 'physique_1.jpg'
  },
  {
    id: 'phys-projectile-drag',
    title: 'Solar Energy Testing System',
    blurb: "mesures, rendement, charge variable et conditions lumineuses",
    details: "Comprehensive photovoltaic analysis setup with data acquisition systems. Features load testing equipment and precision measurement instruments for efficiency optimization studies and performance characterization of solar panels under various conditions.",
    tags: ['Physics'],
    image: 'physique_2.jpg'
  },
  {
    id: 'phys-ray-tracing',
    title: 'Solénoïde & Induction : Analyse expérimentale',
    blurb: "flux magnétique, tension induite et validation théorique",
    details: "Montage expérimental complet destiné à étudier l’induction électromagnétique à l’aide d’un solénoïde de grande dimension, d’un oscilloscope et de bancs de résistances/inductances. Ce système permet de générer, mesurer et analyser les variations du champ magnétique, la réponse inductive du circuit, ainsi que les signaux induits. Les mesures sont réalisées sous différentes charges et conditions d’excitation afin de valider les lois de Faraday-Lenz et d’explorer le comportement dynamique des circuits inductifs.",
    tags: ['Physics'],
    image: 'physique_3.jpg'
  },
  {
    id: 'phys-coupled-oscillators',
    title: 'Acoustic Properties Analysis',
    blurb: "chambre anéchoïque, absorption sonore, réflexion et réponses fréquentielles",
    details: "Modèle masses–ressorts; résolution des EDO analytiquement et numériquement (RK4) pour extraire fréquences propres et modes normaux. Visualisation des battements et du transfert d’énergie.",
    tags: ['Physics'],
    image: 'physique_4.jpg'
  }
];

const websites = [
  { title: 'Starteady', url: 'https://www.starteady.com/', desc: 'Plateforme de lancement et de croissance.', image: 'starteady.png' },
  { title: 'Auramaking', url: 'https://www.auramaking.com/', desc: 'Création de marques et de sites web.', image: 'auramaking.png' },
  { title: 'Icodex Academy', url: 'https://icodex.academy/', desc: 'Apprentissage du code et de l’IA.', image: 'icodex.png' },
];

// ---------- Helpers ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function showToast(message, timeout = 2400) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  window.setTimeout(() => el.classList.remove('show'), timeout);
}

// ---------- Theme toggle ----------
function applyTheme(theme) {
  // theme: 'light' | 'dark' | 'auto'
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  const initial = saved || 'auto';
  document.documentElement.setAttribute('data-theme', initial);
  const btn = $('#theme-toggle');
  const icons = { light: '🌞', dark: '🌚', auto: '🌗' };
  const setIcon = () => { btn.textContent = icons[document.documentElement.getAttribute('data-theme')] || '🌗'; };
  setIcon();
  btn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'auto';
    const next = current === 'auto' ? 'dark' : current === 'dark' ? 'light' : 'auto';
    applyTheme(next);
    setIcon();
  });
}

// ---------- Render Projects & Websites ----------
function renderProjects(filter = 'All') {
  const grid = $('#projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = projects.filter(p => filter === 'All' || p.tags.includes(filter));
  grid.classList.toggle('single', list.length === 1);
  for (const p of list) {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-tags', p.tags.join(','));
    const imgSrc = p.image || 'assets/placeholder.svg';
    card.innerHTML = `
      <img class="thumb-image" src="${imgSrc}" alt="Thumbnail for ${p.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='assets/placeholder.svg'" />
      <h3>${p.title}</h3>
      <p class="muted">${p.blurb}</p>
      <div class="chips" aria-label="Tags">${p.tags.map(t => `<span class="chip" aria-label="Tag ${t}">${t}</span>`).join('')}</div>
      <div class="card-footer">
        <button class="btn btn-primary" data-project-id="${p.id}">View details</button>
      </div>
    `;
    grid.appendChild(card);
  }
}

function renderWebsites() {
  const grid = $('#websites-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (const w of websites) {
    const card = document.createElement('article');
    card.className = 'card';
    const imgSrc = w.image || 'assets/placeholder.svg';
    card.innerHTML = `
      <img class="thumb-image" src="${imgSrc}" alt="Screenshot of ${w.title}" loading="lazy" />
      <h3>${w.title}</h3>
      <p class="muted">${w.desc}</p>
      <div class="card-footer">
        <a class="external" href="${w.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${w.title} in a new tab">
          <span>Visit</span>
          <img src="assets/external-link.svg" alt="External link" width="16" height="16" />
        </a>
      </div>
    `;
    grid.appendChild(card);
  }
}

// ---------- Filters ----------
function initFilters() {
  const chips = $$('.filters .chip');
  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(c => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');
    renderProjects(chip.dataset.filter);
  }));
}

// ---------- Modal ----------
const modal = {
  el: null,
  lastFocus: null,
  focusables: [],
  open(project) {
    this.el = this.el || document.getElementById('project-modal');
    if (!this.el) return;
    this.lastFocus = document.activeElement;
    $('#modal-title').textContent = project.title;
    $('#modal-desc').textContent = project.details;
    const tags = project.tags.map(t => `<span class="chip">${t}</span>`).join('');
    $('#modal-tags').innerHTML = tags;
    const img = $('#modal-img');
    img.src = project.image;
    img.alt = `Image for ${project.title}`;
    img.onerror = () => { img.onerror = null; img.src = 'assets/placeholder.svg'; };
    this.el.setAttribute('open', '');
    this.el.setAttribute('aria-hidden', 'false');
    // simple focus trap
    this.focusables = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', this.el)
      .filter(el => !el.hasAttribute('disabled'));
    const toFocus = this.focusables[0] || $('.modal-close', this.el);
    toFocus?.focus();
  },
  close() {
    if (!this.el) return;
    this.el.removeAttribute('open');
    this.el.setAttribute('aria-hidden', 'true');
    this.lastFocus?.focus?.();
  }
};

function initModal() {
  const container = document.getElementById('projects-grid');
  container?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-project-id]');
    if (!btn) return;
    const id = btn.getAttribute('data-project-id');
    const project = projects.find(p => p.id === id);
    if (project) modal.open(project);
  });
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-modal-close]')) modal.close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.close();
    if (e.key === 'Tab' && modal.el?.hasAttribute('open')) {
      const focusables = modal.focusables;
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  });
}

// ---------- Scroll spy ----------
function initScrollSpy() {
  const navLinks = $$('.main-nav a');
  const targets = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinks.forEach(a => {
          const active = a.getAttribute('href') === id;
          a.classList.toggle('active', active);
          a.setAttribute('aria-current', active ? 'true' : 'false');
        });
      }
    });
  }, { rootMargin: '-50% 0px -40% 0px', threshold: 0.01 });
  targets.forEach(t => observer.observe(t));
}

// ---------- Misc interactions ----------
function initBackToTop() {
  const btn = $('#back-to-top');
  const toggle = () => btn.classList.toggle('show', window.scrollY > 400);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCopyEmail() {
  const btn = $('#copy-email');
  const email = 'adam.lachkar@emines.um6p.ma';
  btn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard');
    } catch {
      showToast('Copy not supported');
    }
  });
}

function initCopyPhone() {
  const btn = $('#copy-phone');
  const phone = '+212770282379';
  btn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(phone);
      showToast('Phone copied to clipboard');
    } catch {
      showToast('Copy not supported');
    }
  });
}

function initDownloadCV() {
  const link = $('#download-cv');
  if (!link) return;
  // If the element is an anchor to a PDF, let the browser handle it.
  if (link.tagName === 'A' && /\.pdf($|\?)/i.test(link.getAttribute('href') || '')) {
    link.setAttribute('download', '');
    return;
  }
  // Fallback (older markup): trigger print
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.print();
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    showToast(`Thanks${name ? ', ' + String(name) : ''}! I’ll get back to you.`);
    form.reset();
  });
}

function initFooterYear() {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
}

// ---------- Init ----------
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProjects('All');
  renderWebsites();
  initFilters();
  initModal();
  initScrollSpy();
  initBackToTop();
  initCopyEmail();
  initCopyPhone();
  initDownloadCV();
  initContactForm();
  initFooterYear();
});
=======
// ============================================
// Data Arrays
// ============================================

const projects = [
    {
        id: 1,
        title: "Match Outcome Prediction (Random Forest)",
        blurb: "Random Forest model to predict football match results.",
        description: "Machine learning model using Random Forest to predict football match outcomes. It analyzes team features and historical matches to generate accurate predictions.",
        tags: ["ML/AI", "Classification"],
        filterTags: ["ml-ai", "classification"],
        image: "project-rf.jpg"
    },
    {
        id: 2,
        title: "Weather Forecasting (XGBoost)",
        blurb: "XGBoost model for weather forecasting using engineered features.",
        description: "Advanced XGBoost model for weather forecasting. It uses historical meteorological features to predict future conditions with high accuracy.",
        tags: ["ML/AI", "Time Series"],
        filterTags: ["ml-ai", "time-series"],
        image: "project-xgb.jpg"
    },
    {
        id: 3,
        title: "Heart Disease Detection (Decision Trees)",
        blurb: "Classifies cardiovascular risk from clinical variables.",
        description: "Classification system using decision trees to detect heart disease risks. It analyzes clinical variables to identify patients at higher risk.",
        tags: ["ML/AI", "Classification"],
        filterTags: ["ml-ai", "classification"],
        image: "project-heart.jpg"
    },
    {
        id: 4,
        title: "Spaceship Titanic (Logistic Regression)",
        blurb: "Kaggle project: logistic regression for passenger classification.",
        description: "Kaggle competition project using logistic regression to classify Spaceship Titanic passengers. Data analysis and model optimization to maximize prediction accuracy.",
        tags: ["ML/AI", "Classification"],
        filterTags: ["ml-ai", "classification"],
        image: "project-spaceship.jpg"
    }
];

const websites = [
    {
        id: 1,
        title: "Starteady",
        url: "https://www.starteady.com/",
        purpose: "Launch and support platform for entrepreneurs",
        image: "starteady.png"
    },
    {
        id: 2,
        title: "Auramaking",
        url: "https://www.auramaking.com/",
        purpose: "Creation and development of innovative web solutions",
        image: "auramaking.png"
    },
    {
        id: 3,
        title: "Icodex Academy",
        url: "https://icodex.academy/",
        purpose: "Training academy in development and technology",
        image: "icodex.png"
    }
];

// ============================================
// DOM Elements
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const themeToggleFooter = document.getElementById('themeToggleFooter');
const themeIcon = document.getElementById('themeIcon');
const themeIconFooter = document.getElementById('themeIconFooter');
const projectsGrid = document.getElementById('projectsGrid');
const websitesGrid = document.getElementById('websitesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectModal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalTags = document.getElementById('modalTags');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const backToTop = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.nav-link');
const currentYear = document.getElementById('currentYear');
const emailLink = document.getElementById('emailLink');
const contactEmailBtn = document.getElementById('contactEmailBtn');
const projectDetailSection = document.getElementById('projectDetail');
const projectBack = document.getElementById('projectBack');
const projectDetailTitle = document.getElementById('projectDetailTitle');
const projectDetailBody = document.getElementById('projectDetailBody');
const projectDetailTags = document.getElementById('projectDetailTags');
const projectDetailImage = document.getElementById('projectDetailImage');

// ============================================
// Theme Toggle
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(theme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = theme === 'dark' ? '🌙' : '☀️';
    if (themeIcon) themeIcon.textContent = icon;
    if (themeIconFooter) themeIconFooter.textContent = icon;
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// ============================================
// Navigation
// ============================================

function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
}

function closeMobileNav() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileNav();
    });
});

// ============================================
// Scroll Spy for Navigation
// ============================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// ============================================
// Back to Top Button
// ============================================

function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// Render Projects
// ============================================

function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.filterTags.includes(filter));

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project-id', project.id);
        projectCard.setAttribute('tabindex', '0');
        projectCard.setAttribute('role', 'group');
        const detailsUrl = `${location.pathname}?project=${project.id}`;
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-blurb">${project.blurb}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class=\"project-tag\">${tag}</span>`).join('')}
            </div>
            <a class="btn btn-ghost" href="${detailsUrl}">View details</a>
        `;
        projectCard.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                window.location.href = detailsUrl;
            }
        });
        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// Project Filtering
// ============================================

function handleFilterClick(e) {
    const filter = e.target.getAttribute('data-filter');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(filter);
}

// ============================================
// Project Modal
// ============================================

let modalTrapHandler = null;

function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalBody.textContent = project.description;
    modalTags.innerHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus management + trap
    const focusable = projectModal.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])');
    const focusableArr = Array.from(focusable).filter(el => !el.hasAttribute('disabled'));
    const firstEl = focusableArr[0];
    const lastEl = focusableArr[focusableArr.length - 1];
    modalTrapHandler = function (e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
        } else {
            if (document.activeElement === lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        }
    };
    projectModal.addEventListener('keydown', modalTrapHandler);
    if (modalClose) modalClose.focus();
}

function closeProjectModal() {
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalTrapHandler) {
        projectModal.removeEventListener('keydown', modalTrapHandler);
        modalTrapHandler = null;
    }
}

// ============================================
// Project Detail Routing (shareable URL)
// ============================================

function getProjectFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('project'), 10);
    if (!id) return null;
    return projects.find(p => p.id === id) || null;
}

function showProjectDetail(project) {
    if (!projectDetailSection) return;
    projectDetailTitle.textContent = project.title;
    projectDetailBody.textContent = project.description;
    projectDetailTags.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    if (project.image) {
        projectDetailImage.src = project.image;
        projectDetailImage.alt = `${project.title} illustration`;
    } else {
        projectDetailImage.removeAttribute('src');
    }
    projectDetailSection.hidden = false;
    const idsToHide = ['projects','websites','about','education','experience','skills','languages','contact'];
    idsToHide.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
    document.title = `${project.title} – Adam Lachkar`;
}

function hideProjectDetail() {
    if (!projectDetailSection) return;
    projectDetailSection.hidden = true;
    const ids = ['projects','websites','about','education','experience','skills','languages','contact'];
    ids.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = ''; });
    document.title = 'Adam Lachkar - Portfolio';
}

// ============================================
// Render Websites
// ============================================

function renderWebsites() {
    if (!websitesGrid) return;
    websitesGrid.innerHTML = '';
    websites.forEach(website => {
        const websiteCard = document.createElement('a');
        websiteCard.className = 'website-card';
        websiteCard.href = website.url;
        websiteCard.target = '_blank';
        websiteCard.rel = 'noopener noreferrer';
        websiteCard.setAttribute('aria-label', `Visit ${website.title} - ${website.purpose}`);
        websiteCard.innerHTML = `
            <div class="website-header">
                <h3 class="website-title">${website.title}</h3>
                <span class="website-external-icon" aria-hidden="true">↗</span>
            </div>
            <p class="website-purpose">${website.purpose}</p>
            <div class="website-screenshot">${website.image ? `<img src="${website.image}" alt="${website.title} screenshot" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" />` : 'Screenshot placeholder'}</div>
        `;
        websitesGrid.appendChild(websiteCard);
    });
}

// ============================================
// Contact Form
// ============================================

function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log('Form submitted:', { name, email, message });
    showToast("Thanks! I'll get back to you.");
    e.target.reset();
}

// ============================================
// Toast Notification
// ============================================

function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// ============================================
// Copy Email to Clipboard
// ============================================

async function copyEmailToClipboard(e) {
    e.preventDefault();
    const email = 'adam.lachkar@emines.um6p.ma';
    try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard!');
    } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast('Email copied to clipboard!');
        } catch (fallbackErr) {
            showToast('Failed to copy email. Please copy manually.');
        }
        document.body.removeChild(textArea);
    }
}

function handleEmailLinkClick(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        copyEmailToClipboard(e);
    }
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// Download CV (PDF) Handler
// ============================================

function handleDownloadCV(e) {
    e.preventDefault();
    showToast('CV download coming soon! You can contact me for a copy.');
}

// ============================================
// Escape Key to Close Modal
// ============================================

function handleEscapeKey(e) {
    if (e.key === 'Escape' && projectModal.getAttribute('aria-hidden') === 'false') {
        closeProjectModal();
    }
}

// ============================================
// Event Listeners
// ============================================

// Theme toggle
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleFooter) themeToggleFooter.addEventListener('click', toggleTheme);

// Navigation
if (navToggle) navToggle.addEventListener('click', toggleMobileNav);

// Filter buttons
filterButtons.forEach(btn => btn.addEventListener('click', handleFilterClick));

// Modal
if (modalClose) modalClose.addEventListener('click', closeProjectModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeProjectModal);

// Contact form
if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

// Back to top
if (backToTop) backToTop.addEventListener('click', scrollToTop);

// Scroll events
window.addEventListener('scroll', () => {
    updateActiveNavLink();
    toggleBackToTop();
});

// Keyboard events
document.addEventListener('keydown', handleEscapeKey);

// Email handling
if (emailLink) {
    emailLink.addEventListener('click', handleEmailLinkClick);
    emailLink.title = 'Click to email, Ctrl+Click to copy';
}
if (contactEmailBtn) {
    contactEmailBtn.addEventListener('click', copyEmailToClipboard);
    contactEmailBtn.title = 'Click to copy email to clipboard';
}

// Download CV
const downloadCVBtn = document.getElementById('downloadCV');
if (downloadCVBtn) downloadCVBtn.addEventListener('click', handleDownloadCV);

// Project detail back button
if (projectBack) {
    projectBack.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState({}, '', location.pathname + '#projects');
        hideProjectDetail();
    });
}

// ============================================
// Initialize
// ============================================

function init() {
    if (currentYear) currentYear.textContent = new Date().getFullYear();
    initTheme();
    renderProjects();
    renderWebsites();
    initSmoothScrolling();
    updateActiveNavLink();
    const initialProject = getProjectFromUrl();
    if (initialProject) showProjectDetail(initialProject);
    window.addEventListener('popstate', () => {
        const proj = getProjectFromUrl();
        if (proj) {
            showProjectDetail(proj);
        } else {
            hideProjectDetail();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

>>>>>>> 0443c619091cec7804fbf6670fe3b9f3f4798d5b
