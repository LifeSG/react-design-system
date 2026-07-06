# Example: Vue 3 App consuming Flagship as Web Components

This example demonstrates using `@lifesg/react-design-system` components
inside a Vue 3 application via custom element wrappers.

## How it works

```
┌─────────────────────────────────────────────────────────┐
│  Vue 3 App                                              │
│                                                         │
│  <lifesg-button label="Click me" />                     │
│       │                                                 │
│       ▼                                                 │
│  ┌─────────────────────────────────────────────┐        │
│  │  Custom Element (LifesgButton)              │        │
│  │  - extends HTMLElement                      │        │
│  │  - observes attributes                      │        │
│  │  - creates ReactDOM.createRoot              │        │
│  │  - renders React <Button> inside            │        │
│  │  - dispatches CustomEvent on interaction    │        │
│  └─────────────────────────────────────────────┘        │
│       │                                                 │
│       ▼                                                 │
│  Vue listens: @button-click="handler"                   │
└─────────────────────────────────────────────────────────┘
```

## Setup

```bash
cd example/vue-app
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## What's demonstrated

1. **Button** — simple stateless component with attribute-to-prop mapping
2. **Modal** — complex component with overlay, focus trap, and animation
3. **Theme** — applied via `data-fds-theme` on the body (no ThemeProvider needed)
4. **Events** — React callbacks mapped to `CustomEvent` with `composed: true`

## Known limitations (spike scope)

-   CSS from Linaria is not automatically injected into shadow DOM (we use light DOM here)
-   Complex props (JSX children, icon elements) cannot be passed as attributes
-   Modal content is hardcoded in the wrapper; real implementation would use slots
-   React runtime (~45 kB gzip) is bundled alongside the web components
-   `@floating-ui/react` focus management may not work perfectly across shadow boundaries

## Files

```
example/
  web-components/
    index.ts          # Custom element definitions wrapping React components
  vue-app/
    index.html        # Entry HTML with theme attributes
    vite.config.ts    # Vite config with Vue custom element support
    src/
      main.ts         # Registers web components, mounts Vue
      App.vue         # Vue component using <lifesg-button> and <lifesg-modal>
      env.d.ts        # TypeScript declarations for custom elements
```
