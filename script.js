const hudScore = document.querySelector('.score');
const coordsHud = document.querySelector('.coords');
const radarHud = document.querySelector('.scan-hud');
const resetCardsButton = document.querySelector('#reset-cards');

const translations = {
  es: {
    heroLabel: 'STAGE 01 - PANTALLA INICIAL',
    heroTitle: 'GIS, Teledeteccion y Datos Espaciales',
    heroSubtitle: 'Transformo datos geograficos en mapas, analisis y soluciones visuales.',
    powerupsAria: 'Especialidades clave',
    powerup1: 'PYTHON CORE',
    powerup2: 'CIENCIA DE DATOS',
    powerup3: 'GEE CLOUD',
    viewProjects: 'Ver proyectos',
    contactBtn: 'Contactar',
    servicesTitle: 'Servicios',
    service1: 'Mapas tematicos',
    service2: 'Teledeteccion',
    service3: 'Big Data Espacial',
    service4: 'Automatizacion GIS con Python',
    aboutTitle: 'Perfil',
    avatarAlt: 'Foto de perfil de Facundo Boladeras',
    aboutP1: 'Hola, soy biologo egresado de la Universidad Autonoma de Entre Rios y actualmente becario doctoral CONICET.',
    aboutP2: 'Me especializo en GIS con fuerte experiencia en Python y Google Earth Engine, combinando ciencia de datos y geoprocesamiento para convertir datos espaciales en decisiones para investigacion y gestion territorial.',
    profileTagsAria: 'Especialidades',
    projectsTitle: 'Proyectos',
    project1Title: 'Deep Learning con Imagenes',
    project1Desc: 'Estimacion de bosques implantados mediante tecnicas de Deep-learning.',
    project2Title: 'Estimacion de Biomasa',
    project2Desc: 'Modelado espacial de biomasa integrando pipelines en Python e indicadores ecologicos.',
    project3Title: 'Automatizacion con Python',
    project3Desc: 'Automatizacion GIS low-code y por scripting para acelerar procesos repetitivos.',
    project4Title: 'Servicios GIS Freelance',
    project4Desc: 'Entrega de proyectos con Rasterio, GeoPandas y herramientas geoespaciales de nubes de puntos.',
    viewProject: 'Ver proyecto',
    stackTitle: 'Tecnologias',
    contactLabel: 'FINAL BOSS - CONTACTO',
    contactTitle: 'Listo para mapear tus datos?',
    contactDesc: 'Construyamos productos GIS con estetica, claridad y precision para investigacion, gestion y toma de decisiones.',
    contactStart: 'Iniciar contacto',
    footerCopy: '© 2026 GIS Arcade Portfolio',
    radarMessages: ['MAPA RADAR ACTIVO', 'SATELITE BLOQUEADO', 'SINCRONIZACION DE CAPAS OK']
  },
  en: {
    heroLabel: 'STAGE 01 - START SCREEN',
    heroTitle: 'GIS, Remote Sensing and Spatial Data',
    heroSubtitle: 'I transform geographic data into maps, analysis and visual solutions.',
    powerupsAria: 'Key specialties',
    powerup1: 'PYTHON CORE',
    powerup2: 'DATA SCIENCE',
    powerup3: 'GEE CLOUD',
    viewProjects: 'View projects',
    contactBtn: 'Contact',
    servicesTitle: 'Services',
    service1: 'Thematic Maps',
    service2: 'Remote Sensing',
    service3: 'Spatial Big Data',
    service4: 'GIS Automation with Python',
    aboutTitle: 'Profile',
    avatarAlt: 'Profile photo of Facundo Boladeras',
    aboutP1: 'Hello, I am a Biology graduate from Universidad Autonoma de Entre Rios and currently a PhD candidate with a CONICET scholarship.',
    aboutP2: 'I specialize in GIS with strong experience in Python and Google Earth Engine, combining data science and geoprocessing to transform spatial data into decisions for research and territorial management.',
    profileTagsAria: 'Specialties',
    projectsTitle: 'Projects',
    project1Title: 'Deep Learning with Images',
    project1Desc: 'Estimation of planted forests using deep-learning techniques.',
    project2Title: 'Biomass Estimate',
    project2Desc: 'Spatial biomass modeling integrating Python pipelines and eco indicators.',
    project3Title: 'Automation with Python',
    project3Desc: 'Low-code and scripted GIS automation to speed up repetitive processes.',
    project4Title: 'Freelance GIS Services',
    project4Desc: 'Project delivery with Rasterio, GeoPandas and point-cloud geospatial tools.',
    viewProject: 'View project',
    stackTitle: 'Tech Stack',
    contactLabel: 'FINAL BOSS - CONTACT',
    contactTitle: 'Ready to map your data?',
    contactDesc: 'Let us build GIS products with aesthetics, clarity and precision for research, management and decision-making.',
    contactStart: 'Start contact',
    footerCopy: '© 2026 GIS Arcade Portfolio',
    radarMessages: ['RADAR MAP ACTIVE', 'SATELLITE LOCKED', 'LAYER SYNC OK']
  }
};

let currentLanguage = localStorage.getItem('portfolio-language') || 'es';
let radarMessages = translations[currentLanguage].radarMessages;
let msgIndex = 0;

const applyLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : 'es';
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key && dictionary[key]) {
      element.setAttribute('aria-label', dictionary[key]);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (key && dictionary[key]) {
      element.setAttribute('alt', dictionary[key]);
    }
  });

  radarMessages = dictionary.radarMessages;
  msgIndex = 0;
  if (radarHud) {
    radarHud.textContent = radarMessages[msgIndex];
  }

  currentLanguage = selectedLanguage;
  localStorage.setItem('portfolio-language', selectedLanguage);
};

applyLanguage(currentLanguage);

if (hudScore) {
  let points = 9874;
  setInterval(() => {
    points += Math.floor(Math.random() * 3);
    hudScore.textContent = `SCORE ${String(points).padStart(6, '0')}`;
  }, 1200);
}

if (coordsHud) {
  setInterval(() => {
    const x = String(Math.floor(Math.random() * 200)).padStart(3, '0');
    const y = String(Math.floor(Math.random() * 120)).padStart(3, '0');
    const z = String(Math.floor(Math.random() * 50)).padStart(3, '0');
    coordsHud.textContent = `X:${x} Y:${y} Z:${z}`;
  }, 1800);
}

if (radarHud) {
  setInterval(() => {
    msgIndex = (msgIndex + 1) % radarMessages.length;
    radarHud.textContent = radarMessages[msgIndex];
  }, 2500);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) : null;
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const revealTargets = document.querySelectorAll('.hero, .section, .final-cta, .footer, .arcade-card, .project-card');
revealTargets.forEach((element) => element.classList.add('reveal'));

const projectCards = document.querySelectorAll('.project-card');
const unlockedCardsKey = 'portfolio-unlocked-project-cards';
const unlockedCards = new Set(JSON.parse(localStorage.getItem(unlockedCardsKey) || '[]'));

projectCards.forEach((card, index) => {
  card.dataset.cardIndex = String(index);
  if (unlockedCards.has(index)) {
    card.classList.add('is-revealed');
  }
});

const unlockCard = (card) => {
  if (!card.classList.contains('project-card')) return;
  const cardIndex = Number(card.dataset.cardIndex);
  if (Number.isNaN(cardIndex)) return;

  card.classList.add('is-revealed');
  if (!unlockedCards.has(cardIndex)) {
    unlockedCards.add(cardIndex);
    localStorage.setItem(unlockedCardsKey, JSON.stringify([...unlockedCards]));
  }
};

if (resetCardsButton) {
  resetCardsButton.addEventListener('click', () => {
    unlockedCards.clear();
    localStorage.removeItem(unlockedCardsKey);
    projectCards.forEach((card) => card.classList.remove('is-revealed'));
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.arcade-card, .project-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('is-hover');
    unlockCard(card);
  });
  card.addEventListener('mouseleave', () => card.classList.remove('is-hover'));
  card.addEventListener('focusin', () => unlockCard(card));
  card.addEventListener('touchstart', () => unlockCard(card), { passive: true });
});
