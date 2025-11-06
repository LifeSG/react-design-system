---
description: "This file tells co-pilot how your repository is structured"
applyTo: "**/*"
---

# Coding Agent Instructions for Repository

## Repository Overview

**@lifesg/react-design-system** is a comprehensive React component library, initially created for LifeSG and BookingSG web applications. It provides a standardized design system with 70+ reusable UI components built with React, TypeScript, and Styled Components. The library is distributed as an npm package and includes a Storybook documentation site for component exploration. Key features include theme customization support, accessibility compliance, and automated codemods for version migrations.

## Directory Structure

### Source Code

- `src/` - Component library source code (70+ UI components)
  - Each component in its own directory: `button/`, `input/`, `modal/`, etc.
  - Component structure: `component-name.tsx`, `component-name.style.tsx`, `types.ts`, `index.ts`
  - `theme/` - Theme definitions and design tokens
  - `design-token/` - Design token definitions and types
  - `color/` - Color system and palette definitions
  - `layout/` - Layout components (Container, Content, Section, ColDiv)
  - `text/` - Text component and typography utilities
  - `media/` - Responsive media query utilities
  - `util/` - Shared utility functions
  - `shared/` - Shared component building blocks
  - `animations/` - Animation utilities and presets
  - `__mocks__/` - Mock implementations for testing
  - `index.ts` - Main library entry point

### Build & Configuration

- `rollup.config.js` - Main build configuration (ESM + CJS outputs, per-component bundles)
- `rollup.check.config.js` - Build verification configuration
- `tsconfig.json` - TypeScript compiler settings
- `babel.config.js` - Babel transpilation for tests
- `jest.config.js` - Jest test runner configuration
- `scripts/` - Build automation scripts
  - `build-util.js` - Rollup helper utilities
  - `post-build.js` - Post-build processing (package.json generation)
  - `build.sh` - Build orchestration script
  - `ci.sh` - CI pipeline script

### Documentation & Development

- `stories/` - Storybook documentation for all components
- `.storybook/` - Storybook configuration and addons
- `docs/` - Additional documentation and templates
- `public/` - Static assets for Storybook (images, etc.)
- `custom-types/` - TypeScript declaration files for non-TS imports (CSS, SVG, images, MDX)

### Testing

- `tests/` - Component unit tests organized by component name

### Project Management

- `README.md` - Installation, usage, and quick start guide
- `CONTRIBUTING.md` - Component contribution guidelines and structure
- `CHANGELOG.md` - Version history and breaking changes
- `CONVENTIONS.md` - Project-specific conventions
- `CODEOWNERS.md` - Code ownership assignments
- `LICENSE.md` - ISC license
- `package.json` - Dependencies, peer deps, and npm scripts

## Build & Run

### Development

- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build` - Build library for distribution (ESM + CJS formats)
- `npm run build-check` - Verify build configuration
- `npm start` - Build in watch mode

### Package Distribution

- `npm run pack-package` - Create tarball for testing
- `npm run publish-lib` - Publish to npm registry (from `dist/` directory)

## Testing Approach

### Unit & Integration Tests

- **Framework**: Jest + React Testing Library + jest-styled-components
- **Location**: `tests/<component-name>/<component-name>.spec.tsx`
- **Run**: `npm test` (with coverage) or `npm run test-watch`
- **Coverage**: Reports generated in `tests/coverage/`
- **Canvas mock**: jest-canvas-mock for components using canvas

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

- **Styled Components** for all styling
- Theme-aware via `ThemeProvider` integration
- Design tokens from `theme/` and `design-token/`
- Color system from `color/`
- Responsive utilities from `media/`

### Key Dependencies

- **Required Peer Dependencies**: React, React DOM, Styled Components, @lifesg/react-icons
- **Notable Dependencies**:
  - `react-spring` - Animation library
  - `@floating-ui/react` & `@floating-ui/dom` - Positioning engine for tooltips and popovers
  - `react-slider` - Slider component utilities
  - `react-zoom-pan-pinch` - Image zoom/pan functionality
  - `immer` - Immutable state management

## Storybook Documentation

- Stories colocated in `stories/<component-name>/`
- Addons: a11y, docs, interactions, themes, storysource
- Accessibility testing built into development workflow
- Theme switching support for light/dark mode testing
