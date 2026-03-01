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
  { title: 'Efaix Academy', url: 'https://academy.efaix.com/', desc: 'Académie de formation en ligne.', image: 'efaix_academy.png' },
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
