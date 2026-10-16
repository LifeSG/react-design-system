# AI Agent Guide — @lifesg/react-design-system

This is the LifeSG React Design System (`@lifesg/react-design-system`), a
component library for React web applications. It uses Linaria for zero-runtime
CSS-in-JS, Rollup for builds, Jest for unit tests, Playwright for E2E tests, and
Storybook for component previews.

## Quick reference

| Command             | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `npm run storybook` | Start Storybook dev server (port 6006)              |
| `npm run build`     | Build the library (ESM + CJS via Rollup)            |
| `npm test`          | Run Jest unit tests with coverage                   |
| `npm run test-e2e`  | Run Playwright E2E tests (dev mode with hot reload) |
| `npm run lint`      | ESLint (JS/TS) + Stylelint (CSS)                    |

## Project structure

```
src/
  <component>/          → Component source
  theme/                → Design tokens, theme CSS files
  shared/               → Internal shared components
  util/                 → Hooks (useEvent, useApplyStyle, etc.) and helpers
stories/                → Storybook stories (MDX + TSX)
tests/                  → Jest unit tests (mirrors src/ structure)
e2e/
  nextjs-app/           → NextJS app hosting component stories for E2E
  tests/                → Playwright test specs + screenshots
```

## Conventions

Conventions are encoded in the skills under `.claude/skills/`. Use the
appropriate skill for each task:

| Skill                                  | Covers                                                          |
| -------------------------------------- | --------------------------------------------------------------- |
| `.claude/skills/add-component`         | File structure, naming, styling patterns, code structure, props |
| `.claude/skills/update-component`      | Modifying existing components                                   |
| `.claude/skills/write-jsdoc`           | JSDoc for public APIs, `// @catalog` entries, tag usage         |
| `.claude/skills/write-story`           | Storybook stories, variant grids, playground controls           |
| `.claude/skills/write-unit-test`       | Jest unit tests with React Testing Library                      |
| `.claude/skills/write-functional-test` | Playwright E2E tests, screenshots, accessibility                |
| `.claude/skills/add-theme`             | Theme CSS files, token registration, Storybook/E2E wiring       |

## Component development workflow

1. Scaffold component files
2. Implement the component logic and styles
3. Document the public API
4. Add Storybook stories, verify visually
5. Add unit tests
6. Add E2E tests if needed — visual regression, interactions, a11y
7. `npm run lint` + `npm run build` — verify before PR
