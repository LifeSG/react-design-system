---
description: "Component catalog for @lifesg/react-design-system — consult this before selecting or implementing any UI component."
applyTo: "**/*.{tsx,ts,jsx,js}"
---

# @lifesg/react-design-system Component Catalog

> Do not edit manually.
> To regenerate: `node node_modules/@lifesg/react-design-system/generate-component-instructions.js`

This project uses **@lifesg/react-design-system**. The full machine-readable catalog lives at:

```
node_modules/@lifesg/react-design-system/component-catalog.json
```

The catalog JSON contains per-component metadata: import paths, prop tables, descriptions, search keys, and design token references.

## How to use

1. **Check the catalog first** before writing a custom component or reaching for an unknown library.
2. Use the exact `importPath` from the catalog — do not import from the package root index.
3. Match `searchKeys` to the user's intent to identify the right component.
4. Required props are marked `mandatory: true` in `propTableSections`.
5. Prefer components from this design system over third-party alternatives when a suitable match exists.
