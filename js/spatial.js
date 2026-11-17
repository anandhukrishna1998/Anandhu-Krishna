/**
 * Site interactions: sound, theme, mobile menu, copy email, project demos,
 * case study dialog, contact form, language switch, footer year and scroll spy.
 */

document.addEventListener('DOMContentLoaded', () => {
  const safeGetStorage = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  };

  const safeSetStorage = (key, value) => {
    try {
      window.localStorage.setItem(key, String(value));
    } catch (_) {
      // Storage blocked or unavailable
    }
  };

  const prefersReducedMotion = () =>
    Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const getDict = (lang) => {
    if (typeof translations === 'undefined') return {};
    return translations[lang] || translations.en || {};
  };

  // Language state (resolved early so all modules sync active labels)
  const storedLang = safeGetStorage('preferredLanguage');
  let currentLang = storedLang === 'fr' ? 'fr' : 'en';

  // --------------------------------------------------------------------------
  // 1. Interface sounds (#sound-toggle, off by default)
  // --------------------------------------------------------------------------
  const AUDIO_SVG_MUTED =
    '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>' +
    '<line x1="22" x2="16" y1="9" y2="15"></line>' +
    '<line x1="16" x2="22" y1="9" y2="15"></line>';

  const AUDIO_SVG_ACTIVE =
    '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>' +
    '<path d="M16 9a5 5 0 0 1 0 6"></path>' +
    '<path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>';

  class SpatialSynth {
    constructor() {
      this.ctx = null;
      this.enabled = safeGetStorage('spatial_audio') === 'true';
      this.btn = document.getElementById('sound-toggle');
      this.icon = this.btn ? this.btn.querySelector('.icon-audio') : null;
      this.initButton();
    }

    initContext() {
      if (this.ctx) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        try {
          this.ctx = new AudioCtx();
        } catch (_) {
          this.ctx = null;
        }
      }
    }

    initButton() {
      if (!this.btn) return;
      this.syncUI();
      this.btn.addEventListener('click', () => {
        this.enabled = !this.enabled;
        safeSetStorage('spatial_audio', this.enabled ? 'true' : 'false');
        if (this.enabled) {
          this.initContext();
        }
        this.syncUI();
        if (this.enabled) {
          this.playTone(880, 0.08, 'sine');
        }
      });
    }

    syncUI() {
      if (!this.btn) return;
      const dict = getDict(currentLang);
      const ariaKey = this.enabled ? 'sound_mute' : 'sound_enable';
      const fallbackLabel = this.enabled ? 'Mute interface audio' : 'Enable interface audio';
      this.btn.setAttribute('aria-pressed', this.enabled ? 'true' : 'false');
      this.btn.setAttribute('data-translate-aria', ariaKey);
      this.btn.setAttribute('aria-label', dict[ariaKey] || fallbackLabel);
      if (this.icon) {
        this.icon.innerHTML = this.enabled ? AUDIO_SVG_ACTIVE : AUDIO_SVG_MUTED;
      }
    }

    playTone(freq = 600, duration = 0.05, type = 'sine') {
      if (!this.enabled) return;
      if (!this.ctx) this.initContext();
      if (!this.ctx) return;
      try {
        if (this.ctx.state === 'suspended' && typeof this.ctx.resume === 'function') {
          this.ctx.resume().catch(() => {});
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (_) {
        // Ignore audio policy blocks
      }
    }
  }

  const synth = new SpatialSynth();

  // --------------------------------------------------------------------------
  // 2. Theme toggle (#dark-mode-toggle, light by default, choice saved)
  // --------------------------------------------------------------------------
  const THEME_SVG_MOON = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
  const THEME_SVG_SUN =
    '<circle cx="12" cy="12" r="4"></circle>' +
    '<path d="M12 2v2"></path>' +
    '<path d="M12 20v2"></path>' +
    '<path d="m4.93 4.93 1.41 1.41"></path>' +
    '<path d="m17.66 17.66 1.41 1.41"></path>' +
    '<path d="M2 12h2"></path>' +
    '<path d="M20 12h2"></path>' +
    '<path d="m6.34 17.66-1.41 1.41"></path>' +
    '<path d="m19.07 4.93-1.41 1.41"></path>';

  const themeToggleBtn = document.getElementById('dark-mode-toggle');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.icon-theme') : null;
  const metaThemeColor = document.getElementById('meta-theme-color');

  const storedTheme = safeGetStorage('akr_theme');
  let currentTheme =
    storedTheme === 'dark'
      ? 'dark'
      : storedTheme === 'light'
        ? 'light'
        : document.documentElement.dataset.theme === 'dark'
          ? 'dark'
          : 'light';

  const syncThemeUI = () => {
    const isDark = currentTheme === 'dark';
    const dict = getDict(currentLang);
    const ariaKey = isDark ? 'theme_to_light' : 'theme_to_dark';
    const fallbackLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      themeToggleBtn.setAttribute('data-translate-aria', ariaKey);
      themeToggleBtn.setAttribute('aria-label', dict[ariaKey] || fallbackLabel);
    }
    if (themeIcon) {
      themeIcon.innerHTML = isDark ? THEME_SVG_SUN : THEME_SVG_MOON;
    }
  };

  const applyTheme = (theme, { persist = true } = {}) => {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = currentTheme;
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', currentTheme === 'dark' ? '#121316' : '#ECEEF2');
    }
    if (persist) {
      safeSetStorage('akr_theme', currentTheme);
    }
    syncThemeUI();
  };

  applyTheme(currentTheme, { persist: false });

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      synth.playTone(nextTheme === 'dark' ? 540 : 980, 0.06, 'sine');
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile menu (#mobile-nav-toggle, #mobile-drawer)
  // --------------------------------------------------------------------------
  const MENU_SVG_HAMBURGER =
    '<line x1="4" x2="20" y1="6" y2="6"></line>' +
    '<line x1="4" x2="20" y1="12" y2="12"></line>' +
    '<line x1="4" x2="20" y1="18" y2="18"></line>';
  const MENU_SVG_CLOSE =
    '<path d="M18 6 6 18"></path>' +
    '<path d="m6 6 12 12"></path>';

  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileMenuIcon = mobileNavToggle ? mobileNavToggle.querySelector('.icon-menu') : null;
  let isDrawerOpen = false;

  const syncDrawerToggleUI = () => {
    if (!mobileNavToggle) return;
    const dict = getDict(currentLang);
    const ariaKey = isDrawerOpen ? 'menu_close' : 'menu_open';
    const fallbackLabel = isDrawerOpen ? 'Close navigation menu' : 'Open navigation menu';
    mobileNavToggle.setAttribute('aria-expanded', isDrawerOpen ? 'true' : 'false');
    mobileNavToggle.setAttribute('data-translate-aria', ariaKey);
    mobileNavToggle.setAttribute('aria-label', dict[ariaKey] || fallbackLabel);
    if (mobileMenuIcon) {
      mobileMenuIcon.innerHTML = isDrawerOpen ? MENU_SVG_CLOSE : MENU_SVG_HAMBURGER;
    }
  };

  const setDrawerOpen = (open, { restoreFocus = true } = {}) => {
    if (!mobileDrawer || !mobileNavToggle) return;
    const nextOpen = Boolean(open);
    const wasOpen = isDrawerOpen;
    isDrawerOpen = nextOpen;

    mobileDrawer.classList.toggle('is-open', isDrawerOpen);
    mobileDrawer.dataset.open = isDrawerOpen ? 'true' : 'false';
    mobileDrawer.setAttribute('aria-hidden', isDrawerOpen ? 'false' : 'true');
    mobileDrawer.inert = !isDrawerOpen;
    if (isDrawerOpen) {
      mobileDrawer.removeAttribute('inert');
    } else {
      mobileDrawer.setAttribute('inert', '');
    }

    syncDrawerToggleUI();

    if (wasOpen && !isDrawerOpen && restoreFocus) {
      if (mobileNavToggle.offsetParent !== null && typeof mobileNavToggle.focus === 'function') {
        mobileNavToggle.focus();
      } else {
        const visibleTarget =
          Array.from(document.querySelectorAll('.nav-link')).find((el) => el.offsetParent !== null) ||
          document.querySelector('.nav-brand');
        if (visibleTarget && typeof visibleTarget.focus === 'function') {
          visibleTarget.focus();
        }
      }
    }
  };

  if (mobileNavToggle && mobileDrawer) {
    let ignoreClickEvent = null;
    if (mobileMenuIcon) {
      mobileMenuIcon.style.pointerEvents = 'none';
    }
    setDrawerOpen(false, { restoreFocus: false });

    mobileNavToggle.addEventListener('click', (e) => {
      ignoreClickEvent = e;
      Promise.resolve().then(() => {
        if (ignoreClickEvent === e) ignoreClickEvent = null;
      });
      setDrawerOpen(!isDrawerOpen, { restoreFocus: false });
      synth.playTone(isDrawerOpen ? 820 : 720, 0.045, 'sine');
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setDrawerOpen(false, { restoreFocus: false });
        synth.playTone(720, 0.04, 'sine');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        e.preventDefault();
        setDrawerOpen(false, { restoreFocus: true });
        synth.playTone(720, 0.04, 'sine');
      }
    });

    document.addEventListener('click', (e) => {
      if (e === ignoreClickEvent) {
        ignoreClickEvent = null;
        return;
      }
      if (!isDrawerOpen) return;
      if (!mobileDrawer.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        setDrawerOpen(false, { restoreFocus: false });
      }
    });

    const desktopMedia = window.matchMedia ? window.matchMedia('(min-width: 768px)') : null;
    const handleDesktopBreakpoint = () => {
      if (isDrawerOpen && window.innerWidth >= 768) {
        const focusWasInside = mobileDrawer.contains(document.activeElement);
        setDrawerOpen(false, { restoreFocus: focusWasInside });
      }
    };
    if (desktopMedia && typeof desktopMedia.addEventListener === 'function') {
      desktopMedia.addEventListener('change', (e) => {
        if (e.matches && isDrawerOpen) {
          const focusWasInside = mobileDrawer.contains(document.activeElement);
          setDrawerOpen(false, { restoreFocus: focusWasInside });
        }
      });
    }
    window.addEventListener('resize', handleDesktopBreakpoint, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 4. Copy Email Buttons ([data-copy-email])
  // --------------------------------------------------------------------------
  const copyButtons = Array.from(document.querySelectorAll('[data-copy-email]'));
  const copyStates = new Map();

  const copyTextToClipboard = async (text) => {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // Fallback below
      }
    }
    const prevFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    let textarea = null;
    try {
      textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.width = '1px';
      textarea.style.height = '1px';
      textarea.style.padding = '0';
      textarea.style.border = '0';
      textarea.style.outline = 'none';
      textarea.style.boxShadow = 'none';
      textarea.style.background = 'transparent';
      textarea.style.clipPath = 'inset(50%)';
      document.body.appendChild(textarea);
      textarea.focus({ preventScroll: true });
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const copied = document.execCommand('copy');
      return Boolean(copied);
    } catch (_) {
      return false;
    } finally {
      if (textarea && textarea.parentNode) {
        textarea.parentNode.removeChild(textarea);
      }
      if (prevFocused && document.contains(prevFocused) && typeof prevFocused.focus === 'function') {
        prevFocused.focus({ preventScroll: true });
      }
    }
  };

  const syncCopyButtonUI = (btn) => {
    const state = copyStates.get(btn);
    if (!state) return;
    const dict = getDict(currentLang);
    const key =
      state.status === 'copied'
        ? 'email_copied'
        : state.status === 'failed'
          ? 'copy_failed'
          : state.defaultKey;
    const fallbackText =
      state.status === 'copied'
        ? 'Email copied'
        : state.status === 'failed'
          ? 'Copy failed'
          : 'Copy Email';
    const label = dict[key] || fallbackText;

    btn.classList.toggle('is-copied', state.status === 'copied');

    if (state.labelSpan) {
      state.labelSpan.setAttribute('data-translate', key);
      state.labelSpan.textContent = label;
    }

    if (state.status === 'idle') {
      if (state.initialTranslateAria) {
        btn.setAttribute('data-translate-aria', state.initialTranslateAria);
        btn.setAttribute('aria-label', dict[state.initialTranslateAria] || label);
      } else {
        btn.removeAttribute('data-translate-aria');
        if (state.initialAriaLabel !== null) {
          btn.setAttribute('aria-label', state.initialAriaLabel);
        } else {
          btn.removeAttribute('aria-label');
        }
      }
    } else {
      btn.setAttribute('data-translate-aria', key);
      btn.setAttribute('aria-label', label);
    }
  };

  copyButtons.forEach((btn) => {
    const labelSpan = btn.querySelector('[data-translate]');
    const initialTranslateAria = btn.getAttribute('data-translate-aria');
    const initialAriaLabel = btn.getAttribute('aria-label');
    const defaultKey = (labelSpan && labelSpan.getAttribute('data-translate')) || 'copy_email_btn';

    copyStates.set(btn, {
      status: 'idle',
      timerId: null,
      requestId: 0,
      labelSpan,
      defaultKey,
      initialTranslateAria,
      initialAriaLabel
    });

    btn.addEventListener('click', async () => {
      const state = copyStates.get(btn);
      if (!state) return;
      const reqId = ++state.requestId;
      if (state.timerId !== null) {
        window.clearTimeout(state.timerId);
        state.timerId = null;
      }

      const email = btn.dataset.copyEmail || 'anandhukrishna091@gmail.com';
      const ok = await copyTextToClipboard(email);
      if (reqId !== state.requestId) return;

      state.status = ok ? 'copied' : 'failed';
      syncCopyButtonUI(btn);
      synth.playTone(ok ? 820 : 540, 0.055, 'sine');

      if (state.timerId !== null) {
        window.clearTimeout(state.timerId);
      }
      state.timerId = window.setTimeout(() => {
        state.status = 'idle';
        state.timerId = null;
        syncCopyButtonUI(btn);
      }, 2200);
    });
  });

  // --------------------------------------------------------------------------
  // 5. Contracts demo: clause tabs update the graph and JSON ([data-clause-tab])
  // --------------------------------------------------------------------------
  const VALID_CLAUSES = ['liability', 'deductible', 'exclusions'];
  const clauseTabs = Array.from(document.querySelectorAll('[data-clause-tab]'));
  const clauseReadout = document.getElementById('clause-readout');
  const clauseSvgNode = document.getElementById('clause-svg-node');

  const activateClauseTab = (tabBtn, { moveFocus = false, playAudio = false } = {}) => {
    if (!tabBtn) return;
    const key = tabBtn.dataset.clauseTab;
    if (!VALID_CLAUSES.includes(key)) return;

    const dict = getDict(currentLang);
    clauseTabs.forEach((tab) => {
      const isSelected = tab === tabBtn;
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      tab.tabIndex = isSelected ? 0 : -1;
    });

    if (clauseReadout) {
      if (tabBtn.id) {
        clauseReadout.setAttribute('aria-labelledby', tabBtn.id);
      }
      clauseReadout.dataset.activeClause = key;
      const outKey = `demo_clause_out_${key}`;
      clauseReadout.setAttribute('data-translate', outKey);
      if (dict[outKey] !== undefined) {
        clauseReadout.textContent = dict[outKey];
      }
    }

    if (clauseSvgNode) {
      const svgKey = `demo_clause_svg_${key}`;
      clauseSvgNode.setAttribute('data-translate', svgKey);
      if (dict[svgKey] !== undefined) {
        clauseSvgNode.textContent = dict[svgKey];
      }
    }

    if (moveFocus && typeof tabBtn.focus === 'function') {
      tabBtn.focus();
    }
    if (playAudio) {
      synth.playTone(720, 0.04, 'sine');
    }
  };

  if (clauseTabs.length > 0) {
    clauseTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        activateClauseTab(tab, { moveFocus: false, playAudio: true });
      });

      tab.addEventListener('keydown', (e) => {
        let nextIndex = null;
        if (e.key === 'ArrowRight') {
          nextIndex = (index + 1) % clauseTabs.length;
        } else if (e.key === 'ArrowLeft') {
          nextIndex = (index - 1 + clauseTabs.length) % clauseTabs.length;
        } else if (e.key === 'Home') {
          nextIndex = 0;
        } else if (e.key === 'End') {
          nextIndex = clauseTabs.length - 1;
        }

        if (nextIndex !== null) {
          e.preventDefault();
          activateClauseTab(clauseTabs[nextIndex], { moveFocus: true, playAudio: true });
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. PII masking demo switch (#pii-toggle)
  // --------------------------------------------------------------------------
  const piiToggle = document.getElementById('pii-toggle');
  const piiStateLabel = document.getElementById('pii-state-label');
  const piiPerson = document.getElementById('pii-person');
  const piiEmail = document.getElementById('pii-email');
  let isPiiMasked = piiToggle ? piiToggle.getAttribute('aria-checked') !== 'false' : true;

  const setPiiMasked = (masked, { playAudio = false } = {}) => {
    isPiiMasked = Boolean(masked);
    const dict = getDict(currentLang);
    const stateKey = isPiiMasked ? 'demo_pii_state_on' : 'demo_pii_state_off';
    const personKey = isPiiMasked ? 'demo_pii_person_masked' : 'demo_pii_person_raw';
    const emailKey = isPiiMasked ? 'demo_pii_email_masked' : 'demo_pii_email_raw';

    if (piiToggle) {
      piiToggle.setAttribute('aria-checked', isPiiMasked ? 'true' : 'false');
    }
    if (piiStateLabel) {
      piiStateLabel.setAttribute('data-translate', stateKey);
      if (dict[stateKey] !== undefined) piiStateLabel.textContent = dict[stateKey];
    }
    if (piiPerson) {
      piiPerson.classList.toggle('pii-redacted', isPiiMasked);
      piiPerson.setAttribute('data-translate', personKey);
      if (dict[personKey] !== undefined) piiPerson.textContent = dict[personKey];
    }
    if (piiEmail) {
      piiEmail.classList.toggle('pii-redacted', isPiiMasked);
      piiEmail.setAttribute('data-translate', emailKey);
      if (dict[emailKey] !== undefined) piiEmail.textContent = dict[emailKey];
    }

    if (playAudio) {
      synth.playTone(isPiiMasked ? 820 : 720, 0.045, 'sine');
    }
  };

  if (piiToggle) {
    setPiiMasked(isPiiMasked, { playAudio: false });
    piiToggle.addEventListener('click', () => {
      setPiiMasked(!isPiiMasked, { playAudio: true });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Case study dialog (#case-study-dialog)
  // --------------------------------------------------------------------------
  const openModalBtn = document.getElementById('open-p4-modal');
  const caseDialog = document.getElementById('case-study-dialog');
  const closeDialogTopBtn = document.getElementById('case-dialog-close-top');
  const closeDialogFooterBtn = document.getElementById('case-dialog-close-btn');
  const caseDialogCta = document.getElementById('case-dialog-cta');
  const contactSection = document.getElementById('contact');
  const contactNameField = document.getElementById('contact-name');

  let lastDialogTrigger = null;
  let dialogCloseTimer = null;
  let pointerDownOnBackdrop = false;

  const isDialogOpen = () =>
    Boolean(caseDialog && (caseDialog.open || caseDialog.hasAttribute('open')));

  const openDialog = () => {
    if (!caseDialog) return;
    if (dialogCloseTimer !== null) {
      window.clearTimeout(dialogCloseTimer);
      dialogCloseTimer = null;
    }
    pointerDownOnBackdrop = false;
    caseDialog.classList.remove('is-closing');
    if (isDialogOpen()) return;

    const active = document.activeElement;
    lastDialogTrigger =
      active instanceof HTMLElement &&
      active !== document.body &&
      active !== document.documentElement
        ? active
        : openModalBtn;

    if (typeof caseDialog.showModal === 'function') {
      caseDialog.showModal();
    } else {
      caseDialog.setAttribute('open', '');
    }

    const focusTarget = closeDialogTopBtn || closeDialogFooterBtn || caseDialog;
    if (focusTarget && typeof focusTarget.focus === 'function') {
      focusTarget.focus({ preventScroll: true });
    }
    synth.playTone(820, 0.05, 'sine');
  };

  const closeDialog = ({ restoreFocus = true, playAudio = true, onClosed = null } = {}) => {
    if (!caseDialog || !isDialogOpen()) return;
    if (dialogCloseTimer !== null) {
      window.clearTimeout(dialogCloseTimer);
      dialogCloseTimer = null;
    }

    const finalizeClose = () => {
      dialogCloseTimer = null;
      caseDialog.classList.remove('is-closing');
      if (typeof caseDialog.close === 'function' && caseDialog.open) {
        caseDialog.close();
      } else {
        caseDialog.removeAttribute('open');
      }

      if (restoreFocus) {
        const target =
          lastDialogTrigger && document.contains(lastDialogTrigger)
            ? lastDialogTrigger
            : openModalBtn;
        if (target && typeof target.focus === 'function') {
          target.focus();
        }
      }
      lastDialogTrigger = null;

      if (typeof onClosed === 'function') {
        onClosed();
      }
    };

    if (playAudio) {
      synth.playTone(720, 0.045, 'sine');
    }

    if (prefersReducedMotion()) {
      finalizeClose();
    } else {
      caseDialog.classList.add('is-closing');
      dialogCloseTimer = window.setTimeout(finalizeClose, 150);
    }
  };

  if (caseDialog) {
    if (openModalBtn) {
      openModalBtn.addEventListener('click', openDialog);
    }
    if (closeDialogTopBtn) {
      closeDialogTopBtn.addEventListener('click', () => closeDialog());
    }
    if (closeDialogFooterBtn) {
      closeDialogFooterBtn.addEventListener('click', () => closeDialog());
    }

    caseDialog.addEventListener('pointerdown', (e) => {
      pointerDownOnBackdrop = e.target === caseDialog;
    });

    caseDialog.addEventListener('click', (e) => {
      const shouldClose = pointerDownOnBackdrop && e.target === caseDialog;
      pointerDownOnBackdrop = false;
      if (shouldClose) {
        closeDialog();
      }
    });

    caseDialog.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeDialog();
    });

    if (caseDialogCta) {
      caseDialogCta.addEventListener('click', (e) => {
        e.preventDefault();
        closeDialog({
          restoreFocus: false,
          onClosed: () => {
            if (contactSection && typeof contactSection.scrollIntoView === 'function') {
              contactSection.scrollIntoView({
                behavior: prefersReducedMotion() ? 'auto' : 'smooth'
              });
            }
            if (contactNameField && typeof contactNameField.focus === 'function') {
              contactNameField.focus({ preventScroll: true });
            }
          }
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 8. Contact form: validation and submit to formsubmit.co (#spatial-contact-form)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('spatial-contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const submitLabelEl = submitBtn ? submitBtn.querySelector('[data-translate]') : null;
  const formFeedbackEl = document.getElementById('form-feedback');

  const formFieldIds = ['contact-name', 'contact-email', 'contact-subject', 'contact-message'];
  const formFields = formFieldIds
    .map((id) => document.getElementById(id))
    .filter((el) => el !== null);

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const activeFieldErrors = new Map();
  let isSubmitting = false;
  let submitLabelKey = 'form_submit_btn';
  let activeFeedbackState = null;
  let activeFeedbackKey = null;

  const getFieldErrorEl = (field) => {
    const describedBy = field.getAttribute('aria-describedby');
    if (describedBy) {
      const target = document.getElementById(describedBy.split(/\s+/)[0]);
      if (target) return target;
    }
    return document.getElementById(`err-${field.id}`);
  };

  const renderFieldError = (field) => {
    const errKey = activeFieldErrors.get(field) || null;
    const errEl = getFieldErrorEl(field);
    const dict = getDict(currentLang);
    if (errKey) {
      field.setAttribute('aria-invalid', 'true');
      if (errEl) {
        errEl.textContent = dict[errKey] || (errKey === 'form_err_email' ? 'Enter a valid email' : 'Required field');
      }
    } else {
      field.removeAttribute('aria-invalid');
      if (errEl) errEl.textContent = '';
    }
  };

  const validateField = (field) => {
    const value = field.value.trim();
    let errKey = null;
    if (!value) {
      errKey = 'form_err_required';
    } else if (field.type === 'email' && !EMAIL_REGEX.test(value)) {
      errKey = 'form_err_email';
    }
    activeFieldErrors.set(field, errKey);
    renderFieldError(field);
    return errKey === null;
  };

  const setSubmitLabel = (key) => {
    submitLabelKey = key;
    if (!submitLabelEl) return;
    const dict = getDict(currentLang);
    submitLabelEl.setAttribute('data-translate', key);
    if (dict[key] !== undefined) {
      submitLabelEl.textContent = dict[key];
    }
  };

  const setFormFeedback = (state, key) => {
    activeFeedbackState = state;
    activeFeedbackKey = key;
    if (!formFeedbackEl) return;

    formFeedbackEl.classList.remove('is-success', 'is-error');
    if (!state || !key) {
      formFeedbackEl.hidden = true;
      formFeedbackEl.removeAttribute('data-state');
      formFeedbackEl.textContent = '';
      return;
    }

    const dict = getDict(currentLang);
    formFeedbackEl.classList.add(state === 'success' ? 'is-success' : 'is-error');
    formFeedbackEl.dataset.state = state;
    formFeedbackEl.textContent = dict[key] || '';
    formFeedbackEl.hidden = false;
  };

  if (contactForm) {
    formFields.forEach((field) => {
      field.addEventListener('blur', () => {
        validateField(field);
      });

      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') {
          validateField(field);
        }
      });
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;
      setFormFeedback(null, null);

      let firstInvalidField = null;
      formFields.forEach((field) => {
        const isValid = validateField(field);
        if (!isValid && !firstInvalidField) {
          firstInvalidField = field;
        }
      });

      if (firstInvalidField) {
        firstInvalidField.focus();
        synth.playTone(540, 0.05, 'sine');
        return;
      }

      if (navigator.onLine === false) {
        setFormFeedback('error', 'form_offline');
        synth.playTone(540, 0.06, 'sine');
        return;
      }

      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
      }
      setSubmitLabel('form_sending');
      setFormFeedback(null, null);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(contactForm)
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        let payload = null;
        try {
          payload = await response.json();
        } catch (_) {
          payload = {};
        }

        if (payload && (payload.success === false || payload.success === 'false')) {
          throw new Error('Submission rejected');
        }

        contactForm.reset();
        formFields.forEach((field) => {
          activeFieldErrors.set(field, null);
          renderFieldError(field);
        });
        setSubmitLabel('form_submit_btn');
        setFormFeedback('success', 'form_sent');
        synth.playTone(980, 0.08, 'sine');
      } catch (_) {
        setSubmitLabel('form_retry_btn');
        setFormFeedback('error', 'form_failed');
        synth.playTone(540, 0.07, 'sine');
      } finally {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.setAttribute('aria-busy', 'false');
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. Language switch EN/FR (#lang-switch, saved as localStorage['preferredLanguage'])
  // --------------------------------------------------------------------------
  const langSwitchBtn = document.getElementById('lang-switch');

  const setLanguage = (lang, { playAudio = false, persist = true } = {}) => {
    currentLang = lang === 'fr' ? 'fr' : 'en';
    document.documentElement.lang = currentLang;
    if (persist) {
      safeSetStorage('preferredLanguage', currentLang);
    }

    const dict = getDict(currentLang);

    if (langSwitchBtn) {
      langSwitchBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
      if (dict.lang_switch_aria !== undefined) {
        langSwitchBtn.setAttribute('aria-label', dict.lang_switch_aria);
      }
      if (dict.lang_switch_title !== undefined) {
        langSwitchBtn.setAttribute('title', dict.lang_switch_title);
      }
    }

    document.querySelectorAll('[data-translate]').forEach((el) => {
      const key = el.getAttribute('data-translate');
      const val = dict[key];
      if (val === undefined) return;
      if (/<strong\b/i.test(val)) {
        const fragment = document.createDocumentFragment();
        val.split(/(<strong>.*?<\/strong>)/gi).forEach((part) => {
          if (!part) return;
          const match = part.match(/^<strong>([\s\S]*?)<\/strong>$/i);
          if (match) {
            const strongEl = document.createElement('strong');
            strongEl.textContent = match[1];
            fragment.appendChild(strongEl);
          } else {
            fragment.appendChild(document.createTextNode(part));
          }
        });
        el.replaceChildren(fragment);
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-translate-placeholder');
      const val = dict[key];
      if (val !== undefined) {
        el.setAttribute('placeholder', val);
      }
    });

    document.querySelectorAll('[data-translate-aria]').forEach((el) => {
      const key = el.getAttribute('data-translate-aria');
      const val = dict[key];
      if (val !== undefined) {
        el.setAttribute('aria-label', val);
      }
    });

    // Re-sync dynamic state-dependent strings
    syncThemeUI();
    synth.syncUI();
    syncDrawerToggleUI();
    copyButtons.forEach((btn) => syncCopyButtonUI(btn));
    setSubmitLabel(isSubmitting ? 'form_sending' : submitLabelKey);
    if (activeFeedbackState && activeFeedbackKey) {
      setFormFeedback(activeFeedbackState, activeFeedbackKey);
    }
    formFields.forEach((field) => {
      if (activeFieldErrors.get(field)) {
        renderFieldError(field);
      }
    });

    if (playAudio) {
      synth.playTone(820, 0.05, 'sine');
    }
  };

  setLanguage(currentLang, { playAudio: false, persist: false });

  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'fr' : 'en', { playAudio: true });
    });
  }

  // --------------------------------------------------------------------------
  // 10. Footer year (#year) and active nav link while scrolling
  // --------------------------------------------------------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const spySections = Array.from(document.querySelectorAll('main section[id]'));
  const spyLinks = Array.from(document.querySelectorAll('.nav-link, #mobile-drawer a'));

  const setActiveNavSection = (activeId) => {
    const targetHref = `#${activeId}`;
    spyLinks.forEach((link) => {
      const isMatch = link.getAttribute('href') === targetHref;
      link.classList.toggle('is-active', isMatch);
      if (isMatch) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  if (spySections.length > 0 && spyLinks.length > 0) {
    const syncBottomSection = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (nearBottom) {
        const lastSection = spySections[spySections.length - 1];
        if (lastSection && lastSection.id) {
          setActiveNavSection(lastSection.id);
          return true;
        }
      }
      return false;
    };

    const visibleRatios = new Map();
    const syncBestVisibleSection = () => {
      if (visibleRatios.size === 0) return;
      let bestId = null;
      let bestRatio = -1;
      spySections.forEach((sec) => {
        const ratio = visibleRatios.get(sec.id);
        if (ratio !== undefined && ratio > bestRatio) {
          bestRatio = ratio;
          bestId = sec.id;
        }
      });
      if (bestId) {
        setActiveNavSection(bestId);
      }
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleRatios.set(entry.target.id, entry.intersectionRatio);
            } else {
              visibleRatios.delete(entry.target.id);
            }
          });

          if (syncBottomSection()) return;
          syncBestVisibleSection();
        },
        {
          rootMargin: '-20% 0px -55% 0px',
          threshold: [0, 0.25, 0.5, 0.75]
        }
      );

      spySections.forEach((sec) => observer.observe(sec));
    }

    window.addEventListener(
      'scroll',
      () => {
        if (!syncBottomSection()) {
          syncBestVisibleSection();
        }
      },
      { passive: true }
    );
  }
});
