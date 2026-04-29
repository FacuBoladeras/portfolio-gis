const hudScore = document.querySelector('.score');
const coordsHud = document.querySelector('.coords');
const radarHud = document.querySelector('.scan-hud');

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
  const radarMessages = ['RADAR MAP ACTIVE', 'SATELLITE LOCKED', 'LAYER SYNC OK'];
  let msgIndex = 0;
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
  card.addEventListener('mouseenter', () => card.classList.add('is-hover'));
  card.addEventListener('mouseleave', () => card.classList.remove('is-hover'));
});
