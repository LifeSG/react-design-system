---
description: "This file tells co-pilot how your repository is structured"
applyTo: "**/*"
---

# Coding Agent Instructions for Repository

## Repository Overview

**@lifesg/react-design-system** is a comprehensive React component library for LifeSG and BookingSG web applications. It provides a standardized design system with 70+ reusable UI components built with React 17/18/19, TypeScript, and Styled Components. The library is distributed as an npm package and includes a Storybook documentation site for component exploration. Key features include theme customization support, accessibility compliance, and automated codemods for version migrations.

## Global Standards Reference

This file focuses on project-specific context. Refer to the following instruction files for general standards:

-   `cc-coding-standard.instructions.md` - Coding conventions and best practices
-   `cc-taming-copilot.instructions.md` - AI assistant interaction guidelines
-   `cc-security-owasp.instructions.md` - Security verification checklist
-   `design-system.instructions.md` - Design system usage patterns
-   `git.instructions.md` - Git workflow and commit conventions

## Directory Structure

### Source Code

-   `src/` - Component library source code (70+ UI components)
    -   Each component in its own directory: `button/`, `input/`, `modal/`, etc.
    -   Component structure: `component-name.tsx`, `component-name.style.tsx`, `types.ts`, `index.ts`
    -   `theme/` - Theme definitions and design tokens
    -   `util/` - Shared utility functions
    -   `shared/` - Shared component building blocks
    -   `v2_*` - Version 2 design tokens and components (color, layout, text, media, etc.)
    -   `animations/` - Animation utilities and presets
    -   `__mocks__/` - Mock implementations for testing
    -   `index.ts` - Main library entry point

### Build & Configuration

-   `rollup.config.js` - Main build configuration (ESM + CJS outputs, per-component bundles)
-   `rollup.check.config.js` - Build verification configuration
-   `tsconfig.json` - TypeScript compiler settings
-   `babel.config.js` - Babel transpilation for tests
-   `jest.config.js` - Jest test runner configuration
-   `playwright.config.ts` - Playwright E2E test configuration
-   `scripts/` - Build automation scripts
    -   `build-util.js` - Rollup helper utilities
    -   `post-build.js` - Post-build processing (package.json generation)
    -   `build.sh` - Build orchestration script
    -   `ci.sh` - CI pipeline script

### Documentation & Development

-   `stories/` - Storybook documentation for all components
-   `.storybook/` - Storybook configuration and addons
-   `docs/` - Additional documentation and templates
-   `public/` - Static assets for Storybook (images, etc.)
-   `custom-types/` - TypeScript declaration files for non-TS imports (CSS, SVG, images, MDX)

### Testing

-   `tests/` - Component unit tests organized by component name
-   `e2e/` - Playwright end-to-end tests for complex interactions

### Codemods

-   `codemods/` - Automated migration scripts for breaking changes
    -   `run-codemod.ts` - CLI entry point (available as `npx` command after install)
    -   `codemod-utils.ts` - Shared codemod utilities
    -   Migration modules: `migrate-colour/`, `migrate-text/`, `deprecate-v2-tokens/`, etc.

### Project Management

-   `README.md` - Installation, usage, and quick start guide
-   `CONTRIBUTING.md` - Component contribution guidelines and structure
-   `CHANGELOG.md` - Version history and breaking changes
-   `CONVENTIONS.md` - Project-specific conventions
-   `CODEOWNERS.md` - Code ownership assignments
-   `LICENSE.md` - ISC license
-   `package.json` - Dependencies, peer deps, and npm scripts

## Build & Run

### Development

-   `npm run storybook` - Start Storybook dev server on port 6006
-   `npm run build` - Build library for distribution (ESM + CJS formats)
-   `npm run build-check` - Verify build configuration
-   `npm start` - Build in watch mode

### Output Structure

The build generates:

-   `dist/` - Main ESM bundle
-   `dist/cjs/` - CommonJS bundle
-   `dist/<component-name>/` - Individual component bundles with package.json
-   `dist/codemods/` - Codemod CLI tool

### Package Distribution

-   `npm run pack-package` - Create tarball for testing
-   `npm run publish-lib` - Publish to npm registry (from `dist/` directory)

## Testing Approach

### Unit & Integration Tests

-   **Framework**: Jest + React Testing Library + jest-styled-components
-   **Location**: `tests/<component-name>/<component-name>.spec.tsx`
-   **Run**: `npm test` (with coverage) or `npm run test-watch`
-   **Coverage**: Reports generated in `tests/coverage/`
-   **Canvas mock**: jest-canvas-mock for components using canvas

### End-to-End Tests

-   **Framework**: Playwright
-   **Location**: `e2e/<component-name>/`
-   **Run**: `npm run test-e2e`
-   **Focus**: Complex interaction patterns (date input, breadcrumb navigation)

## Automated Codemods

This library ships with a codemod CLI for automated migrations:

```bash
npx @lifesg/react-design-system <codemod-name> <path>
```

Available codemods handle breaking changes between major versions:

-   Color token migrations
-   Layout system updates
-   Typography changes
-   Design token deprecations

Consumers can run these after upgrading to automatically update their code.

## Component Architecture

### Component Structure Pattern

Each component follows a consistent structure:

```text
component-name/
├── component-name.tsx          # Main component logic
├── component-name.style.tsx    # Styled components
├── types.ts                    # TypeScript interfaces
└── index.ts                    # Public exports
```

### Styling Approach

-   **Styled Components v6** for all styling
-   Theme-aware via `ThemeProvider` integration
-   Design tokens from `theme/` and `v2_design-token/`
-   Responsive utilities from `v2_media/`

### Key Dependencies

-   **Required Peer Dependencies**: React, React DOM, Styled Components, @lifesg/react-icons, @floating-ui/react
-   **Notable Dependencies**: react-spring (animations), react-virtuoso (virtualization), fabric (e-signature canvas)

## Storybook Documentation

-   Stories colocated in `stories/<component-name>/`
-   Addons: a11y, docs, interactions, themes, storysource
-   Accessibility testing built into development workflow
-   Theme switching support for light/dark mode testing
