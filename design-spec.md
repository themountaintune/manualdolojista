# Design Spec

This document summarizes the tasks to implement next:

1) Tailwind tokens
- Set up tokens (colors, spacing, radius, typography) via Tailwind CSS v4 `@theme` in `src/app/globals.css`.
- Expose semantic tokens: primary (teal), secondary (yellow/green), neutral, success, warning, danger.

2) Components (Section 3)
- Header/Navbar, Footer
- Card, CTABox, Tabs, CookieBanner, GlossaryCard, NewsletterForm, AuthorBox
- Ensure accessibility and responsive behavior.

3) Page templates (Section 4)
- Home, Glossary list and term page, Cases list and case page, Article page, Static pages (privacy, disclosure, como-testamos), Materials page.

4) Lighthouse
- Run Lighthouse against the deployed GitHub Pages URL.
- Attach the HTML/JSON report to CI artifacts and summarize key scores in README.

5) Open Graph images
- Provide three CSS/SVG templates under `public/og/templates/` for: article, glossary term, case.

6) Deliverables for Cursor
- Create/adjust tokens in Tailwind via `@theme`.
- Implement components and page templates.
- Add GitHub Actions workflow to run Lighthouse on every push to `main` after Pages deploy.
- Commit OG templates and usage instructions.


