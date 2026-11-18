/**
 * CV page controller for the live Spatial theme:
 * - Light mode by default (body.light-mode), persisted in localStorage['akr_theme']
 * - Bilingual EN/FR toggle persisted in localStorage['preferredLanguage']
 */
(function () {
  'use strict';

  var safeGet = function (key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  };

  var safeSet = function (key, value) {
    try { window.localStorage.setItem(key, String(value)); } catch (e) { /* storage blocked */ }
  };

  var COPY = {
    en: {
      page_title: 'Curriculum Vitae — Anandhu Krishna',
      cv_back: 'Back to Portfolio',
      cv_eyebrow: 'CURRICULUM VITAE // PDF',
      cv_heading: 'Anandhu Krishna',
      cv_meta: 'AI Engineer · Paris, France · 1 page PDF',
      cv_download: 'Download PDF',
      cv_open: 'Open PDF',
      cv_fallback_note: 'Preview not loading on your device? Open the PDF directly or download a copy.',
      cv_open_direct: 'Open PDF in new tab',
      cv_download_direct: 'Download PDF',
      footer_rights: 'All rights reserved.',
      lang_label: 'FR',
      lang_title: 'Passer en français (Switch to French)'
    },
    fr: {
      page_title: 'Curriculum Vitae — Anandhu Krishna',
      cv_back: 'Retour au portfolio',
      cv_eyebrow: 'CURRICULUM VITAE // PDF',
      cv_heading: 'Anandhu Krishna',
      cv_meta: 'Ingénieur IA · Paris, France · PDF 1 page',
      cv_download: 'Télécharger le PDF',
      cv_open: 'Ouvrir le PDF',
      cv_fallback_note: "L'aperçu ne s'affiche pas sur votre appareil ? Ouvrez le PDF directement ou téléchargez une copie.",
      cv_open_direct: 'Ouvrir le PDF dans un nouvel onglet',
      cv_download_direct: 'Télécharger le PDF',
      footer_rights: 'Tous droits réservés.',
      lang_label: 'EN',
      lang_title: 'Switch to English'
    }
  };

  var themeBtn = document.getElementById('dark-mode-toggle');
  var langBtn = document.getElementById('lang-switch');
  var metaTheme = document.querySelector('meta[name="theme-color"]');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var syncTheme = function () {
    var isLight = document.body.classList.contains('light-mode');
    if (themeBtn) {
      themeBtn.textContent = isLight ? '🌙' : '☀️';
      themeBtn.setAttribute('aria-label', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    }
    if (metaTheme) {
      metaTheme.setAttribute('content', isLight ? '#f5f7fb' : '#06070a');
    }
  };

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      var isLight = document.body.classList.contains('light-mode');
      safeSet('akr_theme', isLight ? 'light' : 'dark');
      syncTheme();
    });
  }

  var currentLang = safeGet('preferredLanguage') === 'fr' ? 'fr' : 'en';

  var applyLang = function (lang, persist) {
    currentLang = lang === 'fr' ? 'fr' : 'en';
    document.documentElement.lang = currentLang;
    if (persist) {
      safeSet('preferredLanguage', currentLang);
    }
    var dict = COPY[currentLang];
    document.title = dict.page_title;

    var nodes = document.querySelectorAll('[data-cv-i18n]');
    for (var i = 0; i < nodes.length; i += 1) {
      var key = nodes[i].getAttribute('data-cv-i18n');
      if (dict[key] !== undefined) {
        nodes[i].textContent = dict[key];
      }
    }

    if (langBtn) {
      langBtn.textContent = dict.lang_label;
      langBtn.setAttribute('title', dict.lang_title);
    }
  };

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(currentLang === 'en' ? 'fr' : 'en', true);
    });
  }

  syncTheme();
  applyLang(currentLang, false);
})();
