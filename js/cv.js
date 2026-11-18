/**
 * CV page controller: theme toggle (akr_theme), EN/FR switcher (preferredLanguage),
 * and footer year. No inline scripts required.
 */
(function () {
  'use strict';

  var safeGet = function (key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  };

  var safeSet = function (key, value) {
    try { window.localStorage.setItem(key, String(value)); } catch (e) { /* storage blocked */ }
  };

  var ICONS = {
    moon: '<svg class="icon icon-theme" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>',
    sun: '<svg class="icon icon-theme" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>'
  };

  var COPY = {
    en: {
      page_title: 'Curriculum Vitae — Anandhu Krishna',
      skip_to_content: 'Skip to main content',
      cv_back: 'Back to Portfolio',
      cv_kicker: 'Curriculum Vitae · PDF',
      cv_heading: 'Anandhu Krishna',
      cv_meta: 'AI Engineer · Paris, France · 1 page PDF',
      cv_download: 'Download PDF',
      cv_open: 'Open PDF',
      cv_fallback_note: 'Preview not loading on your device? Open the PDF directly or download a copy.',
      cv_open_direct: 'Open PDF in new tab',
      cv_download_direct: 'Download PDF',
      footer_rights: 'All rights reserved.',
      theme_to_dark: 'Switch to dark theme',
      theme_to_light: 'Switch to light theme',
      lang_switch_aria: 'Switch language to French',
      lang_switch_title: 'Switch to French (FR)',
      lang_switch_label: 'FR'
    },
    fr: {
      page_title: 'Curriculum Vitae — Anandhu Krishna',
      skip_to_content: 'Aller au contenu principal',
      cv_back: 'Retour au portfolio',
      cv_kicker: 'Curriculum Vitae · PDF',
      cv_heading: 'Anandhu Krishna',
      cv_meta: 'Ingénieur IA · Paris, France · PDF 1 page',
      cv_download: 'Télécharger le PDF',
      cv_open: 'Ouvrir le PDF',
      cv_fallback_note: "L'aperçu ne s'affiche pas sur votre appareil ? Ouvrez le PDF directement ou téléchargez une copie.",
      cv_open_direct: 'Ouvrir le PDF dans un nouvel onglet',
      cv_download_direct: 'Télécharger le PDF',
      footer_rights: 'Tous droits réservés.',
      theme_to_dark: 'Passer au thème sombre',
      theme_to_light: 'Passer au thème clair',
      lang_switch_aria: 'Passer la langue en anglais',
      lang_switch_title: 'Passer en anglais (EN)',
      lang_switch_label: 'EN'
    }
  };

  var root = document.documentElement;
  var langBtn = document.getElementById('lang-switch');
  var themeBtn = document.getElementById('dark-mode-toggle');
  var metaTheme = document.getElementById('meta-theme-color');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var currentLang = safeGet('preferredLanguage') === 'fr' ? 'fr' : 'en';

  var syncThemeButton = function () {
    if (!themeBtn) return;
    var isDark = root.dataset.theme === 'dark';
    var dict = COPY[currentLang];
    themeBtn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.setAttribute('aria-label', isDark ? dict.theme_to_light : dict.theme_to_dark);
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#121316' : '#ECEEF2');
    }
  };

  var applyLanguage = function (lang, persist) {
    currentLang = lang === 'fr' ? 'fr' : 'en';
    root.lang = currentLang;
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
      langBtn.textContent = dict.lang_switch_label;
      langBtn.setAttribute('aria-label', dict.lang_switch_aria);
      langBtn.setAttribute('title', dict.lang_switch_title);
    }

    syncThemeButton();
  };

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      safeSet('akr_theme', next);
      syncThemeButton();
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLanguage(currentLang === 'en' ? 'fr' : 'en', true);
    });
  }

  applyLanguage(currentLang, false);
})();
