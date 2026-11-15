/**
 * Motion layer — Anandhu Krishna Portfolio
 * First-visit intro, hero count-up, About word reveal, pinned "How I ship" story,
 * and the bento tile spotlight. Loaded with `defer` after GSAP + ScrollTrigger.
 * Every effect is optional: with reduced motion, no GSAP, or no JS, the page is the static layout.
 */
(() => {
  'use strict';

  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const G = window.gsap;
  const ST = window.ScrollTrigger;

  const introPending = root.classList.contains('intro-pending');
  clearTimeout(window.__introFailsafe);
  const endIntro = () => root.classList.remove('intro-pending');

  /* ---------- Tile spotlight (no GSAP needed) ---------- */
  if (FINE && !RM) {
    $$('.bento-tile').forEach((tile) => {
      tile.addEventListener('pointermove', (e) => {
        const r = tile.getBoundingClientRect();
        tile.style.setProperty('--spot-x', `${e.clientX - r.left}px`);
        tile.style.setProperty('--spot-y', `${e.clientY - r.top}px`);
      }, { passive: true });
    });
  }

  if (!G || RM) {
    endIntro();
    return;
  }
  if (ST) {
    G.registerPlugin(ST);
    ST.config({ ignoreMobileResize: true });
  }

  /* ---------- Hero count-up ---------- */
  const counters = $$('#hero .stat-value').map((el) => {
    const raw = el.textContent.trim();
    const m = raw.match(/^([+\-−]?)(\d+(?:\.\d+)?)(.*)$/);
    if (!m) return null;
    const [, sign, num, suffix] = m;
    // Screen readers get the final value once; the animated digits are hidden from them.
    el.textContent = '';
    const sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = raw;
    const out = document.createElement('span');
    out.className = 'count-up';
    out.setAttribute('aria-hidden', 'true');
    out.textContent = raw;
    el.append(sr, out);

    return {
      reset() { out.textContent = `0${suffix}`; },
      run() {
        const io = new IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const o = { v: 0 };
          G.to(o, {
            v: Number(num),
            duration: 1.6,
            ease: 'power3.out',
            onUpdate: () => { out.textContent = `${o.v > 0 ? sign : ''}${Math.round(o.v)}${suffix}`; },
          });
        }, { threshold: 0 }); // start as soon as any of it shows, so a half-visible "0%" never sits frozen
        io.observe(el);
      },
    };
  }).filter(Boolean);
  const runCounts = () => counters.forEach((c) => c.run());

  /* ---------- First-visit intro ---------- */
  // Runs fn on the first painted frame once the page is visible; if frames never arrive
  // (throttled/occluded page), fallback runs instead so the cover can never get stuck.
  function whenOnScreen(fn, fallback) {
    let done = false;
    const once = (cb) => () => { if (done) return; done = true; cb(); };
    const go = () => {
      const guard = setTimeout(once(fallback), 1500);
      requestAnimationFrame(() => requestAnimationFrame(() => { clearTimeout(guard); once(fn)(); }));
    };
    if (document.visibilityState === 'visible') return go();
    document.addEventListener('visibilitychange', function onVis() {
      if (document.visibilityState !== 'visible') return;
      document.removeEventListener('visibilitychange', onVis);
      go();
    });
  }

  if (introPending) {
    try { sessionStorage.setItem('akr_intro_seen', '1'); } catch (e) { /* storage blocked: intro may replay */ }
    counters.forEach((c) => c.reset());
    const heroTiles = $$('#hero .bento-tile');
    G.set(heroTiles, { autoAlpha: 0, y: 18 });
    const skipIntro = () => {
      G.set(heroTiles, { clearProps: 'transform,opacity,visibility' });
      endIntro();
      runCounts();
    };
    whenOnScreen(() => {
      G.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.site-intro-name > span', { yPercent: 115 }, { yPercent: 0, duration: 0.5, stagger: 0.07, ease: 'power4.out' })
        .fromTo('.site-intro-kicker', { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.3 }, '-=0.3')
        .fromTo('.site-intro-line', { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: 'power2.inOut' }, '-=0.2')
        .to('.site-intro', { clipPath: 'inset(0 0 100% 0)', duration: 0.5, ease: 'power3.inOut' })
        .to(heroTiles, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, clearProps: 'transform,opacity,visibility' }, '-=0.3')
        .add(() => { endIntro(); runCounts(); }, '-=0.3');
    }, skipIntro);
  } else {
    counters.forEach((c) => c.reset()); // start from 0% so there's no final-value flash before counting
    runCounts();
  }

  if (!ST) return;

  /* ---------- About lead: scroll-scrubbed word reveal (re-splits after EN/FR switch) ---------- */
  const lead = $('.narrative-lead');
  let wordTween = null;
  function splitLead() {
    if (!lead || lead.querySelector('.reveal-word')) return;
    const text = lead.textContent.trim();
    // Screen readers read the sentence once (sr-only); the per-word spans are visual only.
    const sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = text;
    const visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');
    text.split(/\s+/).forEach((word, i) => {
      if (i) visual.append(' ');
      const span = document.createElement('span');
      span.className = 'reveal-word';
      span.textContent = word;
      visual.append(span);
    });
    lead.replaceChildren(sr, visual);
    if (wordTween) { wordTween.scrollTrigger?.kill(); wordTween.kill(); }
    wordTween = G.to(lead.querySelectorAll('.reveal-word'), {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: { trigger: lead, start: 'top 85%', end: 'bottom 45%', scrub: true },
    });
  }
  if (lead) {
    splitLead();
    new MutationObserver(splitLead).observe(lead, { childList: true });
  }

  /* ---------- Pinned "How I ship" story ---------- */
  const story = $('.story-section');
  let decideStory = null;
  if (story) {
    const steps = $$('.story-step', story);
    const ring = $('.story-ring-fg', story);
    const num = $('.story-ring-num', story);
    const total = `0${steps.length}`;
    const navOffset = () => parseInt(getComputedStyle(root).getPropertyValue('--nav-offset'), 10) || 96;
    const setProgress = (p) => {
      const i = Math.min(steps.length - 1, Math.floor(p * steps.length));
      steps.forEach((li, n) => li.classList.toggle('is-active', n === i));
      ring.style.strokeDashoffset = String(502.65 * (1 - p));
      num.textContent = `0${i + 1}/${total}`;
    };
    const showAll = () => {
      steps.forEach((li) => li.classList.add('is-active'));
      ring.style.strokeDashoffset = '0';
      num.textContent = `${total}/${total}`;
    };

    // Only pin when the whole card fits under the floating nav; otherwise it stays a normal card
    // with every step visible. Re-decided whenever the viewport or the text (EN/FR) changes.
    const tile = $('.story-tile', story);
    let pinST = null;
    const fits = () => window.innerHeight >= 560 && tile.offsetHeight <= window.innerHeight - navOffset() - 16;
    const enablePin = () => {
      if (pinST) return;
      setProgress(0);
      pinST = ST.create({
        trigger: story,
        start: () => `top ${navOffset()}px`,
        end: '+=160%',
        pin: true,
        pinSpacing: true, // .page-main is flex, where ScrollTrigger defaults this to false
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      });
    };
    const disablePin = () => {
      if (!pinST) return;
      pinST.kill(true); // revert: removes the pin spacer and inline pin styles
      pinST = null;
      showAll();
    };
    decideStory = () => (fits() ? enablePin() : disablePin());
    decideStory();
  }

  // Heights change after fonts, images, resizes and language switches: re-decide the pin, re-measure.
  const remeasure = () => { decideStory?.(); ST.refresh(); };
  let resizeTimer = 0;
  let lastW = window.innerWidth;
  let lastH = window.innerHeight;
  window.addEventListener('load', remeasure);
  window.addEventListener('resize', () => {
    // Ignore the small height changes phones make when the address bar shows/hides.
    if (window.innerWidth === lastW && Math.abs(window.innerHeight - lastH) < 120) return;
    lastW = window.innerWidth;
    lastH = window.innerHeight;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(remeasure, 200);
  });
  $('#lang-switch')?.addEventListener('click', () => setTimeout(remeasure, 50));
})();
