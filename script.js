// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal for cards and skill blocks, staggered by position within each grid
const revealGroups = document.querySelectorAll('.grid-projects, .grid-skills, .contact-grid, .timeline');
revealGroups.forEach(group => {
  const items = group.querySelectorAll(':scope > .card, :scope > .skill-block, :scope > .contact-item, :scope > li');
  items.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i, 8) * 60}ms`;
  });
});
const revealTargets = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('in'));
}

// Hero entrance
window.requestAnimationFrame(() => {
  document.querySelector('.hero')?.classList.add('hero-in');
});
