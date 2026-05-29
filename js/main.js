// RK Roofing PEB – static site behaviors
(function () {
  // ===== Mobile menu =====
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  const iconOpen = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      if (iconOpen) iconOpen.style.display = open ? 'none' : '';
      if (iconClose) iconClose.style.display = open ? '' : 'none';
    });
  }

  // ===== Header scroll shadow =====
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ===== Reveal on scroll =====
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '-60px 0px', threshold: 0.05 });
    document.querySelectorAll('[data-reveal], [data-peb-anim], [data-countup]').forEach((el) => io.observe(el));

    // Count-up
    document.querySelectorAll('[data-countup]').forEach((el) => {
      const target = parseInt(el.dataset.countup, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.disconnect();
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.4 });
      obs.observe(el);
    });
  } else {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
  }

  // ===== Active nav link =====
  const path = location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  document.querySelectorAll('[data-nav]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const target = href.replace(/\.html$/, '').replace(/\/$/, '') || '/';
    const current = path === '' || path === '/' ? '/' : path;
    if ((target === '/' && current === '/') || (target !== '/' && current === target)) {
      a.classList.add('text-cta');
      a.setAttribute('aria-current', 'page');
    }
  });

  // ===== Contact / Quote form (no backend, simulated) =====
  document.querySelectorAll('[data-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const success = form.parentElement.querySelector('[data-form-success]');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> Sending...';
      }
      setTimeout(() => {
        if (success) {
          form.style.display = 'none';
          success.style.display = 'block';
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1100);
    });
  });

  // ===== Lucide icons =====
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();

  // ===== SplitText hero: build per-letter spans from [data-split-text] =====
  document.querySelectorAll('[data-split-text]').forEach((el) => {
    const baseDelay = parseFloat(el.dataset.splitDelay || '0');
    const text = el.textContent;
    el.textContent = '';
    el.setAttribute('aria-label', text);
    const words = text.split(' ');
    words.forEach((word, wi) => {
      const wSpan = document.createElement('span');
      wSpan.className = 'inline-block whitespace-nowrap mr-[0.25em]';
      [...word].forEach((ch, ci) => {
        const s = document.createElement('span');
        s.className = 'split-char';
        s.style.setProperty('--d', (baseDelay + wi * 0.06 + ci * 0.025) + 's');
        s.textContent = ch;
        wSpan.appendChild(s);
      });
      el.appendChild(wSpan);
    });
  });
})();
