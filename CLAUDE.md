# Resume / Portfolio — Project Brief

## What this is

Personal portfolio and resume site for **Arttu Meriläinen** — a full-stack developer based in Tampere, Finland. Currently a single-page terminal-aesthetic resume, but designed from the start to grow into a multi-section site with a blog, project showcase, essays, and more. This terminal section may eventually be one section of a larger whole.

## Stack

| Tool | Version / Notes |
|---|---|
| Runtime / package manager | Bun |
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Inline styles via theme object (no CSS-in-JS lib actively used) |
| i18n | i18next — English (`en`) and Finnish (`fi`), locale files in `src/i18n/locales/` |
| Fonts | JetBrains Mono / Fira Code (mono), Space Grotesk / Inter (display) — loaded via CSS |

## Project structure

```
src/
  components/       # UI components
    Terminal.tsx    # Interactive terminal (whoami, skills, help, clear commands)
    TerminalCard.tsx # Reusable card with terminal-style title bar
  context/
    ThemeContext.tsx # Theme state — sets data-theme on <html>, reads OS preference
  data/
    resume.ts       # All structured data (experience, education, projects, skills)
  i18n/
    index.ts        # i18next setup
    locales/en.json # English strings (profile text, job descriptions, labels)
    locales/fi.json # Finnish translations
  styles/
    theme.ts        # lightTheme / darkTheme objects — single source of truth for all design tokens
  utils/
    obfuscate.ts    # base64 decode for email/phone (keeps them out of plain-text source)
  App.tsx           # Page layout and section order
  main.tsx          # Entry point
  index.css         # Global resets, body bg, button styles (keyed to [data-theme] attribute)
```

## Architecture decisions

### Theme system
- `ThemeContext` reads OS `prefers-color-scheme` on first load and sets `data-theme` on `<html>` synchronously (lazy useState initializer)
- Every subsequent toggle also updates `data-theme`
- All inline styles reference the `theme` object from `useTheme()`
- Global CSS (body bg, buttons) uses `[data-theme="dark"]` / `[data-theme="light"]` selectors — **not** `prefers-color-scheme` — so it stays in sync with the React toggle
- **Never hardcode colors** outside of `theme.ts` and `index.css`. If adding a new component, thread the `theme` object through

### Layout
- Outer `<div>` in `App.tsx`: full-viewport-width, holds the diagonal gradient background (`background-attachment: fixed`)
- Inner `<div>`: `max-width: 900px`, centered, holds all content
- `#root` in `index.css` has no max-width — that lives in App.tsx

### Data vs. content separation
- Structured data (dates, company names, stacks) → `src/data/resume.ts`
- Human-readable strings (descriptions, labels) → `src/i18n/locales/*.json`
- Contact details → base64 encoded in `src/utils/obfuscate.ts`

### Section order (App.tsx, top to bottom)
1. Profile (`~/resume/profile`) — ASCII art, title, interactive terminal
2. Experience (`~/resume/experience`)
3. Education (`~/resume/education`)
4. Projects (`~/resume/projects`)
5. Languages (`~/resume/languages`)
6. Contact (`~/resume/contact`) — always last

## Design language

- **Aesthetic**: Terminal / code-editor. Monospace everywhere. Hard shadows in light mode, neon glow in dark mode
- **Dark mode**: VS Code–inspired (`#1E1E1E` family), cyan (`#00D9FF`) + green (`#00FF88`) accents, neon `box-shadow` on cards via `.neon-card` CSS class
- **Light mode**: Soft lavender-purple palette. Page bg `~#C8C2DE`, card bg `~#F2EFFC`. Indigo (`#5060D8`) accent. Intentionally low-contrast but legible — pastel, not harsh white
- **Typography**: Monospace for all body/terminal text. Display font (`Space Grotesk`) for headings and titles. Entry titles are `fontWeight: 700`, metadata is smaller and muted
- **Buttons**: Styled with matching neon glow (cyan in dark, indigo in light) so they're findable against the background

## Terminal (interactive)
- Pre-populates with `['whoami', 'skills']` on load so content is visible immediately
- Available commands: `whoami`, `skills`, `contact`, `help`, `clear`
- `contact` is also a dedicated bottom card — the command still works for fun
- Prompt: `arttu@resume:~/resume/profile$`

## Goals and principles going forward

### Immediate priorities
- SEO: proper `<title>`, `<meta description>`, `<meta keywords>`, Open Graph tags, `lang` attribute, canonical URL
- Accessibility: ARIA labels on interactive elements, sufficient color contrast ratios, keyboard navigation through terminal
- Performance: aim for 90+ Lighthouse score. Fonts via `font-display: swap`. No heavy dependencies

### Extensibility — this is a start
The site is planned to grow. Future sections/pages:
- **Project showcase** — cards/grid of real projects with screenshots, stack, links
- **Blog / Essays** — longer-form writing
- **This terminal section** may become one scrollable section of a single-page layout, or a dedicated `/about` route

When adding routes/pages:
- Prefer React Router (not yet added — add when first needed)
- Keep the theme and i18n providers at the root level
- Each "page" should be its own component under `src/pages/`
- Shared UI (TerminalCard, buttons, nav) → `src/components/`
- New data types → extend `src/data/` rather than inlining in components

### Code standards
- No comments unless the *why* is non-obvious
- No boilerplate (this codebase already removed Vite's default App.css/index.css scaffolding)
- Prefer editing existing files over creating new ones
- Keep locale files in sync — every key in `en.json` must exist in `fi.json`
- Contact details stay base64 encoded
- No hard coded colors, use theme system
- 
