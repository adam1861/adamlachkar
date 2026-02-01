/*
  script.js — Hakima Oubouh Portfolio
  - Dynamic rendering for Projects & Highlights
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
    id: 'proj-mqtt-gateway',
    title: 'Industrial MQTT Gateway: OPC–IoT Data Pipeline',
    blurb: 'Real-time OPC UA to MQTT pipeline for industrial monitoring.',
    details: 'Configured KEPServerEX to simulate a binary sensor variable and publish via MQTT, validating the OPC UA stream in UA Expert. Built a Node-RED subscriber with linear and step-interpolated charts for real-time visualization.',
    tags: ['Industrial IoT', 'SCADA'],
    image: 'assets/projects/hakima-project-01.png'
  },
  {
    id: 'proj-water-scada',
    title: 'Water Treatment Plant SCADA Supervision System',
    blurb: 'End-to-end SCADA system with PLC control and WinCC supervision.',
    details: 'Programmed a Siemens S7-1500 PLC with PROFINET/PROFIBUS networks, AUTO/MANUAL control logic, and GRAFCET sequences. Designed a modular WinCC HMI for alarms, visualization, and historical logging.',
    tags: ['SCADA', 'Automation'],
    image: 'assets/projects/hakima-project-02.png'
  },
  {
    id: 'proj-normality-pipeline',
    title: 'Statistical Normality Analysis & Data Transformation Pipeline',
    blurb: 'Three-step transformation pipeline for skewed obesity data.',
    details: 'Applied Anderson-Darling, Jarque-Bera, and Q-Q diagnostics to detect non-normality and outliers. Built a transformation pipeline that improved symmetry and produced normalized data suitable for modeling.',
    tags: ['Data Science', 'Quality'],
    image: 'assets/projects/hakima-project-03.png'
  },
  {
    id: 'proj-robot-pickplace',
    title: 'Industrial Robot Programming: Pick-and-Place Path Optimization',
    blurb: 'Optimized motion paths for a KUKA pick-and-place cell.',
    details: 'Defined coordinate frames, approach points, and safe zones to ensure collision-free operation. Iteratively refined trajectories to reduce cycle time while maintaining safety constraints.',
    tags: ['Robotics', 'Automation'],
    image: 'assets/projects/hakima-project-04.jpeg'
  },
  {
    id: 'proj-um6p-game',
    title: 'UM6P Campus Adventure: 3D Survival Game',
    blurb: 'Unity 3D game with state management and checkpoints.',
    details: 'Built multi-scene gameplay with animated doors, AI pursuit, and a robust player state system tracking health, collectibles, and checkpoint persistence. Applied interactive simulation principles for training-style scenarios.',
    tags: ['Simulation'],
    image: 'assets/projects/hakima-project-05.png'
  },
  {
    id: 'proj-traceability-dashboard',
    title: 'Industrial Traceability & Quality Analytics Dashboard',
    blurb: 'Real-time traceability platform for automotive manufacturing.',
    details: 'Implemented smart filtering, component traceability, and interactive dashboards for pass rates and quality KPIs. Enabled rapid exploration of leak, continuity, and locking test data for decision support.',
    tags: ['Quality', 'Industrial IoT'],
    image: 'assets/projects/hakima-project-06.png'
  },
  {
    id: 'proj-cable-sim',
    title: '3D Industrial Process Modeling: Cable Assembly Line Simulation',
    blurb: 'Animated discrete-event simulation in Arena Visual Designer.',
    details: 'Modeled end-to-end production flow, resources, and routing paths with 3D visualization. Used the simulation to analyze throughput, utilization, and bottlenecks.',
    tags: ['Simulation', 'Automation'],
    image: 'assets/projects/hakima-project-07.png'
  },
  {
    id: 'proj-spc-capability',
    title: 'SPC & Capability Analysis for Manufacturing',
    blurb: 'Control charts and capability assessment for machining quality.',
    details: 'Analyzed measurements across production lots, built control charts, and quantified defect rates. Modeled tool wear to recommend machine adjustments and preventive maintenance cadence.',
    tags: ['Quality', 'Data Science'],
    image: 'assets/projects/hakima-project-08.png'
  },
  {
    id: 'proj-vibration-analysis',
    title: 'Vibration Analysis of an Electric Motor',
    blurb: 'FFT-based fault diagnosis for predictive maintenance.',
    details: 'Captured vibration signals with piezoelectric accelerometers and analyzed frequency signatures to detect unbalance, misalignment, and looseness. Compared results with theoretical vibration models.',
    tags: ['Quality', 'Automation'],
    image: 'assets/projects/hakima-project-09.jpeg'
  },
  {
    id: 'proj-mes-line',
    title: 'MES-Controlled Modular Production Line (Siemens PLC)',
    blurb: 'Multi-station production line coordinated by MES.',
    details: 'Programmed Siemens PLC station logic and integrated MES control with SIMATIC HMI for mode selection and system operation. Implemented sensor/actuator sequencing for automated flow.',
    tags: ['Automation', 'SCADA'],
    image: 'assets/projects/hakima-project-10.jpeg'
  }
];

const websites = [
  {
    title: 'ArSL Bridge Pitch Video',
    url: 'https://youtu.be/XyxX-wTjO5s',
    desc: 'People’s Choice Award-winning accessibility project pitch.',
    image: 'assets/projects/hakima-project-05.png'
  }
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
  const email = 'hakima.oubouh@um6p.ma';
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
  const phone = '+212645191694';
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
