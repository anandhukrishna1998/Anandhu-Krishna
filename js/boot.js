/**
 * Runs in <head> before first paint (loaded without defer/async).
 * Lives in a file instead of inline <script> so the Content-Security-Policy
 * can forbid inline scripts.
 */
(function () {
  'use strict';
  var root = document.documentElement;

  // Google Analytics 4 bootstrap (the gtag.js library itself loads async from index.html)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-W3K41TT4G4');

  // Theme: light by default; dark only if chosen on this site with the toggle.
  // Stored as 'akr_theme' (the old dark-first site used 'spatial_theme', deliberately ignored).
  var saved = null;
  try { saved = localStorage.getItem('akr_theme'); } catch (e) { /* storage blocked */ }
  var theme = saved === 'dark' ? 'dark' : 'light';
  root.dataset.theme = theme;
  var meta = document.getElementById('meta-theme-color');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#121316' : '#ECEEF2');

  // First-visit intro: show the cover only once per session, never for deep links or reduced motion
  try {
    if (sessionStorage.getItem('akr_intro_seen') || location.hash ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('intro-pending');
    // Failsafe: never leave the cover up if js/motion.js fails to load
    window.__introFailsafe = setTimeout(function () { root.classList.remove('intro-pending'); }, 4000);
  } catch (e) { /* storage blocked: skip the intro */ }
})();
