// ============================================
// Data Arrays
// ============================================

const projects = [
    {
        id: 1,
        title: "Prédiction de matchs (Random Forest)",
        blurb: "Modèle de prédiction des résultats de matchs de football via Random Forest.",
        description: "Développement d'un modèle de machine learning utilisant l'algorithme Random Forest pour prédire les résultats de matchs de football. Le modèle analyse diverses caractéristiques des équipes et des matchs passés pour générer des prédictions précises.",
        tags: ["ML/AI", "Classification"],
        filterTags: ["ml-ai", "classification"],
        image: "project-rf.jpg"
    },
    {
        id: 2,
        title: "Prévision météo (XGBoost)",
        blurb: "Modèle XGBoost pour prévision météorologique (features météo).",
        description: "Implémentation d'un modèle XGBoost avancé pour la prévision météorologique. Le modèle utilise des features météorologiques historiques pour prédire les conditions futures avec une grande précision.",
        tags: ["ML/AI", "Time Series"],
        filterTags: ["ml-ai", "time-series"],
        image: "project-xgb.jpg"
    },
    {
        id: 3,
        title: "Détection maladie cardiaque (Decision Trees)",
        blurb: "Classification du risque cardiovasculaire à partir de variables cliniques.",
        description: "Système de classification utilisant des arbres de décision pour détecter les risques de maladies cardiaques. Le modèle analyse des variables cliniques pour identifier les patients à risque élevé.",
        tags: ["ML/AI", "Classification"],
        filterTags: ["ml-ai", "classification"],
        image: "project-heart.jpg"
    },
    {
        id: 4,
        title: "Spaceship Titanic (Logistic Regression)",
        blurb: "Projet Kaggle : régression logistique pour la classification des passagers.",
        description: "Projet de compétition Kaggle utilisant la régression logistique pour classifier les passagers du Spaceship Titanic. Analyse de données et optimisation du modèle pour maximiser la précision des prédictions.",
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
        purpose: "Plateforme de démarrage et d'accompagnement pour entrepreneurs",
        image: "starteady.png"
    },
    {
        id: 2,
        title: "Auramaking",
        url: "https://www.auramaking.com/",
        purpose: "Création et développement de solutions web innovantes",
        image: "auramaking.png"
    },
    {
        id: 3,
        title: "Icodex Academy",
        url: "https://icodex.academy/",
        purpose: "Académie de formation en développement et technologies",
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

// Initialize theme from localStorage or system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(theme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icons
    const icon = theme === 'dark' ? '☀️' : '🌙';
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

// Close mobile nav when clicking on a link
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
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// Render Projects
// ============================================

function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.filterTags.includes(filter));
    
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
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <a class="btn btn-ghost" href="${detailsUrl}">View details</a>
        `;
        
        // Keyboard open by Enter -> navigate
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
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Render filtered projects
    renderProjects(filter);
}

// ============================================
// Project Modal
// ============================================

function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalBody.textContent = project.description;
    modalTags.innerHTML = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
    ).join('');
    
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    modalClose.focus();
}

function closeProjectModal() {
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
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
    // Fill content
    projectDetailTitle.textContent = project.title;
    projectDetailBody.textContent = project.description;
    projectDetailTags.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    if (project.image) {
        projectDetailImage.src = project.image;
        projectDetailImage.alt = `${project.title} illustration`;
    } else {
        projectDetailImage.removeAttribute('src');
    }

    // Show section and hide list sections visually
    projectDetailSection.hidden = false;
    document.getElementById('projects').style.display = 'none';
    document.getElementById('websites').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('languages').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // Update title
    document.title = `${project.title} — Adam Lachkar`;
}

function hideProjectDetail() {
    if (!projectDetailSection) return;
    projectDetailSection.hidden = true;
    const ids = ['projects','websites','about','education','experience','skills','languages','contact'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = '';
    });
    document.title = 'Adam Lachkar - Portfolio';
}

// ============================================
// Render Websites
// ============================================

function renderWebsites() {
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
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    console.log('Form submitted:', { name, email, message });
    
    // Show toast notification
    showToast("Thanks! I'll get back to you.");
    
    // Reset form
    e.target.reset();
}

// ============================================
// Toast Notification
// ============================================

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
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
        // Fallback for older browsers
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

// Copy email on Ctrl/Cmd+Click
function handleEmailLinkClick(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        copyEmailToClipboard(e);
    }
    // Otherwise, let the default mailto: behavior work
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
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Download CV (PDF) Handler
// ============================================

function handleDownloadCV(e) {
    e.preventDefault();
    // In a real application, this would link to an actual PDF file
    // For now, we'll show a message
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
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}
if (themeToggleFooter) {
    themeToggleFooter.addEventListener('click', toggleTheme);
}

// Navigation
if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
}

// Filter buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', handleFilterClick);
});

// Modal
if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', closeProjectModal);
}

// Contact form
if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}

// Back to top
if (backToTop) {
    backToTop.addEventListener('click', scrollToTop);
}

// Scroll events
window.addEventListener('scroll', () => {
    updateActiveNavLink();
    toggleBackToTop();
});

// Keyboard events
document.addEventListener('keydown', handleEscapeKey);

// Copy email - contact button copies, hero link uses Ctrl/Cmd+Click to copy
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
if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', handleDownloadCV);
}

// Project detail back button
if (projectBack) {
    projectBack.addEventListener('click', (e) => {
        // clear param and show list
        e.preventDefault();
        history.pushState({}, '', location.pathname + '#projects');
        hideProjectDetail();
    });
}

// ============================================
// Initialize
// ============================================

function init() {
    // Set current year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Initialize theme
    initTheme();
    
    // Render projects and websites
    renderProjects();
    renderWebsites();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initial scroll spy update
    updateActiveNavLink();

    // If URL contains ?project=, open detail view
    const initialProject = getProjectFromUrl();
    if (initialProject) {
        showProjectDetail(initialProject);
    }

    // Handle browser navigation
    window.addEventListener('popstate', () => {
        const proj = getProjectFromUrl();
        if (proj) {
            showProjectDetail(proj);
        } else {
            hideProjectDetail();
        }
    });
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

