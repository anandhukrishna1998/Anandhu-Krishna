# Anandhu Krishna — portfolio

Personal site of Anandhu Krishna, AI Engineer in Paris. Live at [anandhukrishna.dev](https://anandhukrishna.dev).

Plain static HTML, CSS and JavaScript: no framework and no build step. Hosted on GitHub Pages from `master` (custom domain in `CNAME`).

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | The whole site (one page) |
| `css/spatial.css` | All styles, light/dark tokens, layout, motion styles |
| `js/boot.js` | Runs before first paint: GA4 bootstrap, saved theme, first-visit intro gate |
| `js/translations.js` | English and French copy, keyed by `data-translate*` attributes |
| `js/spatial.js` | Interactions: theme, sound, mobile menu, demos, dialog, contact form, language |
| `js/motion.js` | GSAP motion layer: intro, count-up, word reveal, pinned section, spotlight |
| `images/` | Portrait and company logos |
| `fonts/` | Favicons and web app manifest (the name is historical; there are no font files) |
| `DESIGN.md` | Design system, motion rules and security baseline |

## Run locally

Any static server works, for example:

```bash
npx http-server -p 5173 -c-1
```

Then open http://localhost:5173.

## Notes

- External code: GSAP 3.12.5 from cdnjs (pinned with Subresource Integrity), Google Fonts, Google Analytics 4, and [FormSubmit](https://formsubmit.co) for the contact form.
- A Content-Security-Policy `<meta>` tag in `index.html` blocks inline scripts. Put new code in `js/` and allow any new third-party origin in that policy (see `DESIGN.md`, Security Baseline).
- Every effect respects `prefers-reduced-motion` and falls back to the static layout without JavaScript.
