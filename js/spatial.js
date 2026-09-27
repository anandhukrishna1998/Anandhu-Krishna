/**
 * SPATIAL SYNAPSE 2026 — INTERACTIVE PHYSICS ENGINE
 * Custom Avant-Garde Spatial Experience for Anandhu Krishna
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Audio Synthesizer (Micro-Haptic Sound FX)
  class SpatialSynth {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem('spatial_audio') === 'true';
      this.initButton();
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    }

    initButton() {
      const btn = document.getElementById('sound-toggle');
      if (!btn) return;
      this.updateBtnUI(btn);
      btn.addEventListener('click', () => {
        this.enabled = !this.enabled;
        localStorage.setItem('spatial_audio', this.enabled);
        if (this.enabled) this.init();
        this.updateBtnUI(btn);
        if (this.enabled) this.playTone(880, 0.08, 'sine');
      });
    }

    updateBtnUI(btn) {
      btn.innerHTML = this.enabled ? '🔊' : '🔇';
      btn.setAttribute('aria-label', this.enabled ? 'Mute Audio' : 'Enable Audio');
    }

    playTone(freq = 600, duration = 0.05, type = 'sine') {
      if (!this.enabled || !this.ctx) return;
      try {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // Audio policy or error
      }
    }
  }

  const synth = new SpatialSynth();

  // 2. Global Mouse Coordinates for Ambient Aura
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const normX = ((mouseX / window.innerWidth) * 100).toFixed(1) + '%';
    const normY = ((mouseY / window.innerHeight) * 100).toFixed(1) + '%';
    document.documentElement.style.setProperty('--mouse-x', normX);
    document.documentElement.style.setProperty('--mouse-y', normY);
  }, { passive: true });

  // 3. Titanium Spotlight & Chamfer Beam (2026 Minimal Spatial Hover Engine)
  const spotlightCards = document.querySelectorAll(
    '.glass-monolith, .spec-tile, .constellation-cluster, .timeline-monolith-node, .terminal-contact-card, .terminal-form-card'
  );

  spotlightCards.forEach(card => {
    let rect = null;

    card.addEventListener('mouseenter', () => {
      rect = card.getBoundingClientRect();
      card.style.setProperty('--spotlight-opacity', '1');
      synth.playTone(720, 0.035, 'sine');
    });

    card.addEventListener('mousemove', (e) => {
      if (!rect) rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--spotlight-x', `${x.toFixed(1)}px`);
      card.style.setProperty('--spotlight-y', `${y.toFixed(1)}px`);

      // Micro-Spring Elastic Tilt (Subtle ±2° tilt for depth)
      const xPct = (x / rect.width) - 0.5;
      const yPct = (y / rect.height) - 0.5;
      const rotX = -yPct * 3.2;
      const rotY = xPct * 3.2;
      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--spotlight-opacity', '0');
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      rect = null;
    });
  });

  // 4. Magnetic Elastic Buttons & Navigation Controls
  const magneticEls = document.querySelectorAll('.magnetic-target');
  magneticEls.forEach(el => {
    let bound = null;
    el.addEventListener('mouseenter', () => {
      bound = el.getBoundingClientRect();
      synth.playTone(820, 0.03, 'sine');
    });

    el.addEventListener('mousemove', (e) => {
      if (!bound) bound = el.getBoundingClientRect();
      const centerX = bound.left + bound.width / 2;
      const centerY = bound.top + bound.height / 2;
      const deltaX = (e.clientX - centerX) * 0.3;
      const deltaY = (e.clientY - centerY) * 0.3;
      el.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate3d(0, 0, 0)';
      bound = null;
    });
  });

  // 5. Liquid Hover Ripples on Click
  document.querySelectorAll('.btn-spatial-primary, .glass-monolith').forEach(item => {
    item.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 700);
      synth.playTone(1050, 0.05, 'triangle');
    });
  });

  // 6. Spatial 3D Parallax & Depth Planes Tracking
  const parallaxTargets = document.querySelectorAll('[data-depth]');
  let targetTiltX = 0;
  let targetTiltY = 0;
  let currentTiltX = 0;
  let currentTiltY = 0;

  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetTiltX = (e.clientX - cx) / cx; // -1 to 1
    targetTiltY = (e.clientY - cy) / cy;
  });

  function renderParallax() {
    currentTiltX += (targetTiltX - currentTiltX) * 0.08;
    currentTiltY += (targetTiltY - currentTiltY) * 0.08;

    parallaxTargets.forEach(target => {
      const depth = parseFloat(target.getAttribute('data-depth')) || 0.2;
      const x = currentTiltX * depth * 35;
      const y = currentTiltY * depth * 35;
      const isText = target.classList.contains('kinetic-title-wrapper') || target.tagName === 'H1' || target.tagName === 'H2' || target.closest('.kinetic-title-wrapper');
      
      if (isText) {
        // Pure smooth translation for typography — keeps glyphs crisp and completely undistorted
        target.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      } else {
        const rotY = currentTiltX * depth * 6;
        const rotX = -currentTiltY * depth * 6;
        target.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      }
    });

    requestAnimationFrame(renderParallax);
  }
  renderParallax();

  // 7. Kinetic Typography Fluid Dynamics (Undistorted)
  let lastScrollY = window.scrollY;
  const kineticTitle = document.querySelector('.kinetic-title');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    lastScrollY = currentScroll;
  }, { passive: true });

  // 8. Context-Aware Adaptive Ambiance Palette Shift
  const ambientThemes = {
    axa: { c1: '#059669', c2: '#06b6d4', c3: '#3b82f6' }, // Emerald / Cyber-Teal
    hubicus: { c1: '#8b5cf6', c2: '#ec4899', c3: '#3b82f6' }, // Violet / Pink
    telecom: { c1: '#f59e0b', c2: '#ef4444', c3: '#8b5cf6' }, // Amber / Solar
    nlp: { c1: '#38bdf8', c2: '#a855f7', c3: '#f43f5e' }, // Cyan / Magenta
    default: { c1: '#3b82f6', c2: '#8b5cf6', c3: '#06b6d4' }
  };

  const projectCards = document.querySelectorAll('[data-ambient]');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const themeKey = card.getAttribute('data-ambient');
      const theme = ambientThemes[themeKey] || ambientThemes.default;
      document.documentElement.style.setProperty('--ambient-color-1', theme.c1);
      document.documentElement.style.setProperty('--ambient-color-2', theme.c2);
      document.documentElement.style.setProperty('--ambient-color-3', theme.c3);
    });

    card.addEventListener('mouseleave', () => {
      const def = ambientThemes.default;
      document.documentElement.style.setProperty('--ambient-color-1', def.c1);
      document.documentElement.style.setProperty('--ambient-color-2', def.c2);
      document.documentElement.style.setProperty('--ambient-color-3', def.c3);
    });
  });

  // 9. Floating Neural Particles Background Canvas
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 24), 60);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.15
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const isLight = document.body.classList.contains('light-mode');
        ctx.fillStyle = isLight 
          ? `rgba(71, 85, 105, ${p.alpha * 0.35})` 
          : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect adjacent nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.strokeStyle = isLight 
              ? `rgba(99, 102, 241, ${0.12 * (1 - dist / 100)})` 
              : `rgba(139, 92, 246, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // 10. Dark / Light Mode Spatial Ambiance Toggle
  const modeBtn = document.getElementById('dark-mode-toggle');
  if (modeBtn) {
    const savedMode = localStorage.getItem('spatial_theme') || 'dark';
    if (savedMode === 'light') {
      document.body.classList.add('light-mode');
      modeBtn.innerHTML = '🌙';
    } else {
      modeBtn.innerHTML = '☀️';
    }

    modeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('spatial_theme', isLight ? 'light' : 'dark');
      modeBtn.innerHTML = isLight ? '🌙' : '☀️';
      synth.playTone(isLight ? 980 : 540, 0.06);
    });
  }

  // 11. Bilingual Language Switcher (EN / FR)
  const langBtn = document.getElementById('lang-switch');
  if (langBtn && typeof translations !== 'undefined') {
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('preferredLanguage', lang);
      document.documentElement.lang = lang;
      langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
      langBtn.setAttribute('title', lang === 'en' ? 'Passer en français (Switch to French)' : 'Switch to English');

      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key] !== undefined) {
          el.innerHTML = translations[lang][key];
        }
      });

      document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key] !== undefined) {
          el.setAttribute('placeholder', translations[lang][key]);
        }
      });

      synth.playTone(820, 0.05);
    }

    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'fr' : 'en');
    });

    setLanguage(currentLang);
  }

  // 12. Active HUD Link Intersection Observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.hud-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
});
