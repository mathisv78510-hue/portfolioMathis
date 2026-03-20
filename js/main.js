/* ============================================================
   PORTFOLIO MATHIS – main.js
   ============================================================ */

/* ---------- Sticky header ---------- */
(function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Mobile navigation ---------- */
(function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const list   = document.getElementById('nav-list');
  if (!toggle || !list) return;

  const close = () => {
    toggle.classList.remove('active');
    list.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = list.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a link is clicked
  list.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', close);
  });

  // Close when clicking outside the nav
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !list.contains(e.target)) {
      close();
    }
  });
})();

/* ---------- Active nav link on scroll ---------- */
(function initActiveNavLink() {
  const sections = document.querySelectorAll('main section[id]');
  const links    = document.querySelectorAll('.nav__link[href^="#"]');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ---------- Scroll-reveal animation ---------- */
(function initScrollReveal() {
  const targets = [
    '.about__grid',
    '.skills__category',
    '.project-card',
    '.timeline__item',
    '.contact__wrapper',
    '.section__title',
  ];

  const elements = document.querySelectorAll(targets.join(','));
  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, entryIndex) => {
        if (entry.isIntersecting) {
          // Stagger children
          const delay = (entryIndex % 4) * 80;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach(el => observer.observe(el));
})();

/* ---------- Skill bars animation ---------- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-item__fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach(bar => observer.observe(bar));
})();

/* ---------- Contact form ---------- */
(function initContactForm() {
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showFeedback = (msg, type) => {
    feedback.textContent = msg;
    feedback.className   = `form__feedback ${type}`;
    setTimeout(() => {
      feedback.textContent = '';
      feedback.className   = 'form__feedback';
    }, 5000);
  };

  const validate = (fields) => {
    let valid = true;
    fields.forEach(field => {
      field.classList.remove('invalid');
      if (!field.value.trim()) {
        field.classList.add('invalid');
        valid = false;
      } else if (field.type === 'email' && !EMAIL_REGEX.test(field.value)) {
        field.classList.add('invalid');
        valid = false;
      }
    });
    return valid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.elements['name'];
    const email   = form.elements['email'];
    const message = form.elements['message'];

    if (!validate([name, email, message])) {
      showFeedback('Veuillez remplir tous les champs correctement.', 'error');
      return;
    }

    // Simulated send (replace with real API call or mailto)
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours…';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Envoyer le message';
      showFeedback('✓ Message envoyé avec succès ! Je vous répondrai rapidement.', 'success');
    }, 1200);
  });

  // Remove invalid state on input
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('invalid'));
  });
})();

/* ---------- Footer year ---------- */
(function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();
