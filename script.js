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

