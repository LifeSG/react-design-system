# Flagship Design System — Component Translation Guide

Use this document as prompt context when asking an AI assistant (Copilot, Claude, ChatGPT, etc.) to translate a Flagship React component into any target framework or platform.

---

## 1. Source Codebase Overview

This is a React + TypeScript design system using:

-   **Styling:** `@linaria/core` (CSS-in-JS compiled to static CSS at build time, using CSS custom properties)
-   **Theme tokens:** JS objects that resolve to `var(--fds-*)` CSS custom properties (e.g. `Colour["text"]` → `var(--fds-colour-text)`)
-   **State management:** Custom `useStateActions` hook — a `useReducer` wrapper with named action creators
-   **Overlays/dropdowns:** `@floating-ui/react` via an `ElementWithDropdown` wrapper
-   **Animations:** `@react-spring/web` for spring-based animations
-   **Date handling:** `dayjs` with plugins (customParseFormat, isBetween, isSameOrAfter, isSameOrBefore, timezone)

### Shared Style Package (`native-ports/shared/`)

The `@lifesg/flagship-styles` package provides framework-agnostic styles and tokens for ported components:

-   **Component styles:** Plain CSS files using BEM class names (e.g. `.fds-day-cell__cell`) and `var(--fds-*)` token references
-   **Design tokens:** TypeScript objects mapping friendly names to CSS custom property references (e.g. `Colour["text"]` → `"var(--fds-colour-text)"`)
-   **Theme CSS:** `default.css` (shared baseline on `:root`) + per-theme files scoped to `[data-fds-theme="X"]` (e.g. `lifesg.css`)
-   **Class name constants:** TypeScript exports for each component's BEM class names, for type-safe usage in framework ports

Web framework ports should import the shared CSS and apply the BEM class names. No build-time CSS tooling is required — the styles are plain CSS.

### Distribution Model

Native ports are distributed as **TypeScript source files** within the main `@lifesg/react-design-system` package — consumers compile them with their own tooling. The build script (`scripts/build-native-ports.mjs`) copies sources into `dist/native/`, rewrites bare package imports (`@lifesg/flagship-styles` → relative `../../styles`, `@lifesg/design-core` → relative `../../core/design-core`), and injects theme CSS imports into Svelte/Vue entry points.

```
dist/native/
├── styles/                    # Shared CSS + tokens + class name constants
│   ├── index.ts               # Barrel (re-exports tokens + components)
│   ├── components/            # BEM class name constants + CSS files
│   ├── styles.css             # Combined component CSS (for Angular)
│   └── theme/
│       ├── default.css        # Baseline tokens on :root
│       └── lifesg.css         # Theme-specific, scoped to [data-fds-theme="lifesg"]
├── svelte/index.ts            # Entry (has injected `import "../styles/theme/lifesg.css"`)
├── vue/index.ts               # Entry (has injected CSS import)
├── angular/index.ts           # Entry (NO injected CSS — Angular uses angular.json)
├── react-native/index.ts      # Entry (NO injected CSS — RN doesn't use CSS)
└── core/
    ├── design-core/           # Shared state/logic (approach 4)
    ├── svelte/index.ts        # Entry (has injected CSS import)
    ├── vue/index.ts           # Entry (has injected CSS import)
    ├── angular/index.ts       # Entry (NO injected CSS)
    └── react-native/index.ts  # Entry (NO injected CSS)
```

Package exports from `@lifesg/react-design-system`:

```json
"./svelte":        { "types": "./native/svelte/index.ts", "svelte": "...", "import": "..." },
"./vue":           { "types": "./native/vue/index.ts", "import": "..." },
"./angular":       { "types": "./native/angular/index.ts", "import": "..." },
"./react-native":  { "types": "./native/react-native/index.ts", "import": "..." },
"./core/svelte":   { "types": "./native/core/svelte/index.ts", ... },
"./core/vue":      { "types": "./native/core/vue/index.ts", ... },
"./core/angular":  { "types": "./native/core/angular/index.ts", ... },
"./core/react-native": { "types": "./native/core/react-native/index.ts", ... }
```

Consumers import directly: `import { ButtonComponent } from "@lifesg/react-design-system/angular"`.

### Shared Logic Package (`native-ports/shared-core/design-core/`)

The `@lifesg/design-core` package provides **framework-agnostic state management and utilities** that all framework ports consume. Ports must NOT duplicate this logic — they import it from design-core and wire it to their framework's reactivity system.

```
design-core/src/
├── shared/
│   ├── store.ts          # Store<State> base class (getState, subscribe, setState)
│   ├── date-helper.ts    # toDayjs() — dayjs wrapper
│   └── index.ts
├── date-range-input/
│   ├── store.ts          # DateRangeInputStore — full state machine (11 reducers)
│   ├── calendar-helper.ts # generateDays, generateMonths, isWithinRange, etc.
│   ├── date-input-helper.ts # isDateDisabled, sanitizeInput
│   └── index.ts
├── button/
│   ├── button-helper.ts  # getButtonClasses() — pure class string builder
│   └── index.ts
└── index.ts              # Barrel re-exporting all domains
```

**Key abstractions:**

-   **`Store<State>`** — Observable state container with `getState()`, `subscribe(listener)`, `setState(partial)`. Framework ports subscribe and update their reactive state on each notification.
-   **`DateRangeInputStore`** — Complete date-range-input state machine. Ports instantiate it, subscribe for re-renders, and call its action methods (e.g. `store.handleDayClick()`, `store.syncValues()`, `store.updateConfig()`). Manages calendar ref actions and input ref actions via registration.
-   **`getButtonClasses(opts)`** — Pure function returning a space-joined CSS class string from `ButtonClassOptions`. Ports call it in their reactive computation layer (e.g. `$derived`, `computed`, getter).

**Per-framework store binding patterns:**

| Framework        | Reactive wrapper                                        | Subscribe pattern                                                                                             |
| ---------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Svelte 5**     | `let storeState = $state(store.getState())`             | `$effect(() => store.subscribe(() => { storeState = store.getState() }))`                                     |
| **Vue 3**        | `const storeState = shallowRef(store.getState())`       | `store.subscribe(() => { storeState.value = store.getState() })` in `onMounted`                               |
| **Lit**          | `private _storeState = store.getState()`                | `store.subscribe(() => { this._storeState = store.getState(); this.requestUpdate() })` in `connectedCallback` |
| **Angular**      | Class field + `markForCheck()`                          | `store.subscribe(() => { this.storeState = store.getState(); this.cdr.markForCheck() })` in `ngOnInit`        |
| **React Native** | `useSyncExternalStore(store.subscribe, store.getState)` | Built-in — React handles re-renders                                                                           |

### Component Anatomy

Every non-trivial component typically has:

```
src/component-name/
  component-name.tsx     # Main component (React functional component)
  component-name.styles.ts  # Linaria CSS-in-JS styles
  types.ts               # TypeScript interfaces for props
  index.ts               # Re-export barrel
```

Components follow these patterns:

-   `React.forwardRef` with imperative handles (for parent-controlled focus/reset)
-   `useEffect` for prop syncing and lifecycle management
-   `useRef` for DOM element references
-   `clsx` for conditional CSS class names
-   Event handlers defined as inner functions

### State Pattern: useStateActions

Complex components use a Redux-Toolkit-inspired reducer pattern:

```tsx
const [state, actions] = useStateActions({
    name: "component-name",
    initialState: { field1: "", field2: false, ... },
    reducers: {
        actionName: (state, payload: Type) => ({ ...state, field1: payload }),
        reset: (state) => ({ ...state, field1: state.initialField1 }),
    },
});

// Dispatching: actions.actionName(payload)
// Reading: state.field1
```

When translating, extract the full state shape and all reducer actions first — this is the component's behavior specification.

---

## 2. Dependency Classification

Before translating, classify every import in the source component:

### Portable (import from `@lifesg/design-core`)

The shared logic package provides all state management and utilities. Do NOT copy these into each port — import them:

-   `@lifesg/design-core` → `Store`, `DateRangeInputStore`, `getButtonClasses`, `toDayjs`, `generateDays`, `generateMonths`, `isWithinRange`, `isDateDisabled`, `sanitizeInput`, `padValue`, etc.
-   `src/util/utility-types.ts` — TypeScript utility types (copy directly)
-   Any `types.ts` file that only contains interfaces/types (copy directly, or re-export from design-core)

### Framework-Agnostic DOM (use directly in web targets, adapt for mobile)

-   `dayjs` — works everywhere (web, Node, mobile)
-   `@floating-ui/dom` — works in Lit, can be used in Vue/Angular. Not usable in RN/Flutter.

### React-Specific (must rebuild per framework)

-   All hooks (`useState`, `useEffect`, `useRef`, `useReducer`, `useCallback`, `useMemo`)
-   JSX templates
-   `React.forwardRef` + `useImperativeHandle`
-   `clsx` for class names
-   `@floating-ui/react` (use `@floating-ui/dom` or framework-specific adapter)
-   `@react-spring/web` (use CSS animations, Web Animations API, or framework equivalent)

### Style (must rebuild per framework)

-   `@linaria/core` CSS-in-JS → target framework's style system
-   Theme token references (`Colour["text"]`, `Spacing["spacing-12"]`) → CSS `var(--fds-*)` for web, or JS/Dart/Swift constants for native

---

## 3. Translation Mapping Reference

### State Management

| React Pattern               | Web Component (Lit)             | Vue 3                           | Angular                           | React Native | Flutter                          | SwiftUI                       | Svelte               |
| --------------------------- | ------------------------------- | ------------------------------- | --------------------------------- | ------------ | -------------------------------- | ----------------------------- | -------------------- |
| `useState(x)`               | `@state() _x = x`               | `ref(x)`                        | `signal(x)`                       | Same         | `ValueNotifier(x)` or `setState` | `@State var x`                | `let x = $state(x)`  |
| `useReducer(reducer, init)` | Class methods mutating `@state` | Functions mutating `reactive()` | Methods calling `signal.update()` | Same         | `Cubit` / `ChangeNotifier`       | Reducer pattern with `@State` | `$state` + functions |
| `useRef(null)`              | `@query("sel")`                 | `useTemplateRef("name")`        | `@ViewChild("name")`              | Same         | `GlobalKey`                      | `@FocusState` / manual        | `bind:this`          |
| `useEffect(fn, [deps])`     | `updated(changed)`              | `watch(deps, fn)`               | `effect(() => {})`                | Same         | `didChangeDependencies`          | `.onChange(of:)`              | `$effect(() => {})`  |
| `useEffect(fn, [])` (mount) | `connectedCallback()`           | `onMounted()`                   | `ngOnInit()`                      | Same         | `initState()`                    | `.onAppear`                   | `onMount()`          |
| Cleanup (unmount)           | `disconnectedCallback()`        | `onUnmounted()`                 | `ngOnDestroy()`                   | Same         | `dispose()`                      | `.onDisappear`                | `onDestroy()`        |

### Props / Inputs

| React         | Lit                          | Vue           | Angular                | Flutter           | SwiftUI                | Svelte                    |
| ------------- | ---------------------------- | ------------- | ---------------------- | ----------------- | ---------------------- | ------------------------- |
| `props.x`     | `@property() x`              | `defineProps` | `@Input()` / `input()` | Constructor param | Init param             | `export let x` / `$props` |
| `children`    | `<slot>`                     | `<slot>`      | `<ng-content>`         | `child` widget    | `@ViewBuilder content` | `<slot>`                  |
| `x?: boolean` | `@property({type: Boolean})` | `x?: boolean` | `x = input(false)`     | `bool x = false`  | `var x: Bool = false`  | `export let x = false`    |

### Events / Outputs

| React           | Lit                               | Vue                   | Angular                 | Flutter                    | SwiftUI                             | Svelte                             |
| --------------- | --------------------------------- | --------------------- | ----------------------- | -------------------------- | ----------------------------------- | ---------------------------------- |
| `onChange(val)` | `CustomEvent("change", {detail})` | `emit("change", val)` | `output<T>().emit(val)` | `ValueChanged<T>` callback | `Binding<T>`                        | `createEventDispatcher` / callback |
| `onClick`       | `@click`                          | `@click`              | `(click)`               | `onTap` in GestureDetector | `Button(action:)` / `.onTapGesture` | `on:click`                         |

### Templates / Rendering

| React                   | Lit                               | Vue                 | Angular             | Flutter                                  | SwiftUI              | Svelte              |
| ----------------------- | --------------------------------- | ------------------- | ------------------- | ---------------------------------------- | -------------------- | ------------------- |
| `{cond && <X/>}`        | `${cond ? html\`...\` : nothing}` | `v-if="cond"`       | `@if (cond) {}`     | `if (cond) Widget()`                     | `if cond { View() }` | `{#if cond}`        |
| `{list.map(i => <X/>)}` | `${list.map(i => html\`...\`)}`   | `v-for="i in list"` | `@for (i of list)`  | `ListView.builder` / `Column(children:)` | `ForEach(list)`      | `{#each list as i}` |
| `className={clsx(...)}` | `class=${classMap({...})}`        | `:class="{...}"`    | `[ngClass]="{...}"` | N/A (widgets)                            | N/A (modifiers)      | `class:name={cond}` |

### Styling

| React (Linaria)                 | Lit                           | Vue              | Angular       | React Native               | Flutter                           | SwiftUI                         |
| ------------------------------- | ----------------------------- | ---------------- | ------------- | -------------------------- | --------------------------------- | ------------------------------- |
| `css\`color: var(--fds-\*)\``   | `css\`color: var(--fds-\*)\`` | `<style scoped>` | Component CSS | `StyleSheet.create({})`    | `TextStyle()` / `BoxDecoration()` | `.foregroundColor()` etc.       |
| Theme: `var(--fds-colour-text)` | Same (inherits in shadow DOM) | Same             | Same          | JS constant: `Colors.text` | Dart constant: `FdsColour.text`   | Swift constant: `FdsColor.text` |

---

## 4. Theme Token Reference

### Theme Architecture

The design system supports 14 themes (LifeSG, CCUBE, BookingSG, etc.) via CSS custom property swapping. The theme is selected by a `data-fds-theme` attribute on a wrapper element:

```html
<div data-fds-theme="lifesg" data-fds-theme-mode="light">
    <!-- components inherit token values from here -->
</div>
```

### Theme CSS Files

Theme CSS is split into two layers:

1. **`default.css`** — shared baseline on `:root` (border, spacing, motion, radius, font sizes). Theme-independent.
2. **Per-theme files** (e.g. `lifesg.css`) — scoped to `[data-fds-theme="X"]`. Defines primitive colour palettes, semantic colour mappings, shadows, and font overrides. Each theme file `@import`s `default.css`.

Dark mode is handled via `[data-fds-theme="X"][data-fds-theme-mode="dark"]` selectors that remap semantic colours to different primitive scale steps.

These files live in `native-ports/shared/src/theme/` (for framework ports) and `src/theme/styles/` (React source). The token names (`--fds-*`) are identical across both.

### Token Categories

| Category          | CSS variable pattern            | Example                                      |
| ----------------- | ------------------------------- | -------------------------------------------- |
| Primitive colours | `--fds-colour-{scale}-{step}`   | `--fds-colour-primary-60`                    |
| Semantic colours  | `--fds-colour-{role}`           | `--fds-colour-text`, `--fds-colour-bg-hover` |
| Spacing           | `--fds-spacing-{size}`          | `--fds-spacing-16`                           |
| Layout            | `--fds-layout-{size}`           | `--fds-layout-md`                            |
| Border            | `--fds-border-{prop}-{value}`   | `--fds-border-width-010`                     |
| Radius            | `--fds-radius-{size}`           | `--fds-radius-md`                            |
| Shadow            | `--fds-shadow-{size}-{variant}` | `--fds-shadow-xs-focus-strong`               |
| Motion            | `--fds-motion-{prop}-{value}`   | `--fds-motion-duration-250`                  |
| Font              | `--fds-font-{category}-{prop}`  | `--fds-font-body-size-md`                    |

**For web targets (Lit, Vue, Angular, Svelte):** Use `var(--fds-*)` directly. Import the theme CSS and set `data-fds-theme` on a wrapper element. The tokens inherit through the DOM.

**For native targets (React Native, Flutter, SwiftUI, Kotlin Compose):** Convert to platform constants:

```dart
// Flutter
class FdsColour {
  static const primary = Color(0xFF1C76D5);
  static const text = Color(0xFF282828);
}
```

```swift
// SwiftUI
enum FdsColor {
  static let primary = Color(hex: 0x1C76D5)
  static let text = Color(hex: 0x282828)
}
```

```kotlin
// Compose
object FdsColor {
  val primary = Color(0xFF1C76D5)
  val text = Color(0xFF282828)
}
```

---

## 5. Translation Process

### Step 1: Extract the Component Specification

Read the React source and produce a structured specification:

1. **Props** — list all inputs with types and defaults
2. **State shape** — all stateful fields (useState, useReducer, useRef values)
3. **Actions/mutations** — every state transition (reducer actions or setState calls)
4. **Events** — all callbacks fired to parent
5. **Sub-components** — component tree (what it renders)
6. **Side effects** — prop sync, DOM listeners, timers, API calls
7. **External deps** — floating-ui, dayjs, animation libraries

This specification IS the component — the framework is just how you express it.

### Step 2: Wire Design-Core Store

For components with complex state (e.g. DateRangeInput):

1. **Instantiate the store** — `new DateRangeInputStore(initialConfig, callbacks)`
2. **Create reactive state** — use the framework's reactive primitive to hold `store.getState()`
3. **Subscribe** — call `store.subscribe()` in the framework's mount lifecycle and update reactive state in the callback
4. **Sync props** — use the framework's effect/watcher system to call store methods (e.g. `store.updateConfig()`, `store.syncValues()`) when props change
5. **Register ref actions** — connect the store's `CalendarRefActions` and `InputRefActions` to sub-component method refs
6. **Cleanup** — unsubscribe in the framework's unmount lifecycle

For pure-function components (e.g. Button), call `getButtonClasses()` inside the framework's computed/derived expression.

See Section 1's store binding table for framework-specific patterns.

### Step 3: Classify Remaining Dependencies

For each import not covered by design-core, use the classification from Section 2:

-   Framework-agnostic → use equivalent package for target platform
-   React-specific → rebuild using target framework primitives
-   Style → rebuild using target style system

### Step 4: Build Bottom-Up

Always implement in this order:

1. **Types and helpers** — import from `@lifesg/design-core` (do not copy)
2. **Leaf components** — smallest UI primitives (buttons, cells, dividers)
3. **Container components** — compose leaf components (grids, navigation)
4. **Orchestrator** — main component wiring store, events, and children together
5. **Demo/playground** — working example showing the component in use

This order minimizes rework because each layer only depends on layers below it.

### Step 5: Simplification Decisions

For pilot/proof-of-concept ports, consider dropping:

-   Variant support beyond the primary variant
-   Edge-case props (hideInputKeyboard, dropdownRootNode, zIndex)
-   Full keyboard navigation parity (Tab, Arrow keys, Escape)
-   Container-query responsive behavior
-   readOnly mode
-   Imperative ref API (forwardRef + useImperativeHandle)
-   Complex animations (use simple CSS transitions instead)

Document what was simplified so it can be added later.

---

## 6. Component Library Output

Each translated component should be structured as an **independent component library**, not a demo app. The library is what consumers install; a demo app is a separate concern that imports from the library.

### Directory Structure (Approach 4)

```
native-ports/shared/                       # @lifesg/flagship-styles — shared CSS/tokens
├── package.json
├── src/
│   ├── index.ts                           # Barrel: tokens + class name constants
│   ├── tokens/                            # TS objects mapping to var(--fds-*) strings
│   ├── components/
│   │   ├── [component].css                # Plain CSS with BEM class names
│   │   └── [component].ts                 # Class name string constants
│   └── theme/
│       ├── default.css                    # Shared baseline on :root
│       └── lifesg.css                     # Theme-specific, scoped to [data-fds-theme="lifesg"]

native-ports/shared-core/design-core/     # @lifesg/design-core — shared logic
├── package.json                           # peerDeps: dayjs; optionalPeerDeps: @lifesg/flagship-styles
├── src/
│   ├── shared/                            # Store base class, common helpers
│   ├── date-range-input/                  # DateRangeInputStore, calendar/date-input helpers
│   ├── button/                            # getButtonClasses()
│   └── index.ts                           # Barrel re-exporting all domains

native-ports/shared-core/ui/[framework]/  # Framework-specific UI layer (thin)
├── package.json                           # deps: @lifesg/design-core; peerDeps: framework
├── tsconfig.json
├── src/
│   ├── button/                            # Button component(s) for this framework
│   │   ├── Button.[ext]
│   │   ├── LoadingSpinner.[ext]
│   │   └── types.ts                       # Button-specific types (re-exports from design-core)
│   ├── date-range-input/                  # DateRangeInput + sub-components
│   │   ├── DateRangeInput.[ext]
│   │   ├── Calendar.[ext]
│   │   ├── CalendarManager.[ext]
│   │   ├── DayCell.[ext]
│   │   ├── StandaloneDateInput.[ext]
│   │   └── types.ts                       # Date-range types (re-exports + local)
│   └── index.ts                           # Barrel export (public API)
├── demo/                                  # Separate demo app
│   ├── index.html / App.[ext]
│   └── ...
└── dist/                                  # Build output (gitignored)
```

**Key principle:** Framework UI ports contain ONLY template/rendering code and framework-specific reactivity wiring. All state logic, helpers, and pure computations live in `@lifesg/design-core`.

### Barrel Export (`src/index.ts`)

Every library needs a single entry point that re-exports all public symbols. With the by-component folder layout:

```ts
// Re-export components from domain subfolders
export { default as DateRangeInput } from "./date-range-input/DateRangeInput.svelte";
export { default as Button } from "./button/Button.svelte";
export { default as LoadingSpinner } from "./button/LoadingSpinner.svelte";

// Re-export types from per-component type files
export type {
    ButtonStyleType,
    ButtonSizeType,
    ButtonIconPosition,
} from "./button/types";
export type {
    FocusType,
    CalendarAction,
    View,
    DateRangeValue,
} from "./date-range-input/types";
```

### `package.json` Conventions

The framework the library targets must be a **peerDependency**, not a direct dependency. Portable utilities (e.g. dayjs) go in `dependencies`. Build tooling goes in `devDependencies`.

| Field              | Purpose                      | Example                                                      |
| ------------------ | ---------------------------- | ------------------------------------------------------------ |
| `name`             | Scoped package name          | `@lifesg/date-range-input-vue`                               |
| `main`             | CJS entry (or source for RN) | `dist/index.cjs.js` or `src/index.ts`                        |
| `module`           | ESM entry                    | `dist/index.js`                                              |
| `types`            | TypeScript declarations      | `dist/index.d.ts`                                            |
| `exports`          | Node subpath exports         | `{".": {"types": "...", "import": "...", "require": "..."}}` |
| `files`            | What npm publishes           | `["dist"]` or `["src"]` (for RN)                             |
| `peerDependencies` | Framework runtime            | `{"vue": "^3.3.0"}`                                          |
| `dependencies`     | Portable libs                | `{"dayjs": "^1.11.13"}`                                      |

### Build Configuration by Framework

| Framework          | Build Tool            | Library Build Command           | Key Config                                                                          |
| ------------------ | --------------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| **Lit**            | `tsc`                 | `tsc`                           | `tsconfig.json` with `"outDir": "dist"`, `"declaration": true`                      |
| **Vue**            | Vite lib mode         | `vite build --mode lib`         | `vite.config.ts` with `build.lib.entry`, `rollupOptions.external: ["vue", "dayjs"]` |
| **Angular**        | ng-packagr            | `ng build [lib-name]`           | `ng-package.json` or Angular CLI library workspace                                  |
| **Svelte**         | `svelte-package`      | `svelte-package`                | `svelte.config.js` with package output                                              |
| **React Native**   | None (source)         | `tsc --noEmit` (typecheck only) | Ship raw source — Metro bundler handles transpilation at app build time             |
| **Flutter**        | `dart pub`            | N/A (source package)            | `pubspec.yaml` with dependencies                                                    |
| **SwiftUI**        | Swift Package Manager | N/A (source package)            | `Package.swift` with targets/dependencies                                           |
| **Kotlin Compose** | Gradle                | `./gradlew build`               | `build.gradle.kts` with `compose` plugin                                            |

### Demo Separation

The demo app must be separate from the library source. It imports from the library's barrel export, not from internal paths:

```ts
// demo/App.vue — imports from library barrel
import { DateRangeInput } from "../src";

// NOT: import DateRangeInput from "../src/components/DateRangeInput.vue"
```

For web frameworks, use a dual-mode build config (e.g. Vite `--mode lib` for building vs default mode for dev server). For RN, the demo is a separate app that symlinks or path-references the library package.

---

## 7. Prompt Template

Copy and fill this when asking an AI to translate a component:

```
You are translating a React component from the Flagship design system into [TARGET FRAMEWORK].
The output must be a **thin UI layer** that consumes `@lifesg/design-core` for state and logic.

## Source Component
- Path: src/[component-name]/[component-name].tsx
- Types: src/[component-name]/types.ts
- Styles: src/[component-name]/[component-name].styles.ts

Read these files and understand:
1. The props interface (what inputs the component accepts)
2. The state shape (all useState/useReducer fields)
3. All state transitions (reducer actions or setState calls)
4. Events emitted to parent (callback props like onChange, onFocus)
5. Sub-components used (what it renders)
6. Side effects (useEffect hooks — prop sync, DOM listeners)

## Shared Logic (import from @lifesg/design-core — do NOT copy)
- `DateRangeInputStore` — full state machine for DateRangeInput
- `getButtonClasses()` — CSS class string builder for Button
- `generateDays`, `generateMonths`, `isWithinRange`, `toDayjs`, etc.
- `sanitizeInput`, `isDateDisabled`, `padValue`
See Section 1's design-core overview for the full list.

## Shared Styles (import from @lifesg/flagship-styles)
- Theme CSS: `@lifesg/flagship-styles/theme/lifesg.css`
- Component CSS: `@lifesg/flagship-styles/styles.css`
- Class constants: `import { button, dayCell, ... } from "@lifesg/flagship-styles"`
See section 9 of the translation guide for per-framework CSS consumption patterns.

## Target Framework
[TARGET] with [SPECIFIC VERSION/VARIANT]:
- State: [how this framework manages state — e.g. signals, refs, providers]
- Templates: [how this framework renders — e.g. templates, JSX, widgets]
- Styling: [how to apply styles — e.g. scoped CSS, StyleSheet, TextStyle]
- Theming: [how to use design tokens — e.g. CSS vars, Dart constants]
- Store wiring: [how to subscribe to design-core Store — see Section 1 table]

## Scope
- Implement: [list features to include]
- Skip: [list features to exclude for this pilot]

## Library Output Structure
- Barrel export at `src/index.ts` re-exporting all public components and types
- `package.json` with `@lifesg/design-core` as a dependency, target framework as `peerDependency`
- Components organized by domain: `src/button/`, `src/date-range-input/`
- Each component subfolder has its own `types.ts` — no shared root-level `types.ts`
- Build config appropriate for the target framework (see translation guide section 6)
- Demo app in a separate `demo/` directory, importing from the library barrel
- No internal path imports in the demo — only `import { X } from "../src"`
```

---

## 8. Platform-Specific Notes

### Web Targets (Lit, Vue, Angular, Svelte, Solid)

-   CSS custom properties (`var(--fds-*)`) work directly — define on `:root` or `<body>`
-   `@floating-ui/dom` provides framework-agnostic overlay positioning
-   Click-outside detection: `document.addEventListener("click")` checking event path
-   dayjs works in all web environments

### React Native / Expo

-   `useReducer` and `useRef` work identically to React web
-   Replace HTML elements: `<div>` → `<View>`, `<span>` → `<Text>`, `<button>` → `<Pressable>`
-   Replace CSS: `StyleSheet.create({})` with flexbox (default)
-   Replace overlay/dropdown: `<Modal>` component (bottom sheet pattern)
-   Replace focus management: `TextInput.focus()` via refs
-   All text content must be wrapped in `<Text>` — bare strings throw

### Flutter (Dart)

-   Replace state: `StatefulWidget` + `setState()`, or `ChangeNotifier` / `Riverpod` / `Bloc`
-   Replace JSX: Widget tree (`Column`, `Row`, `Container`, `GestureDetector`)
-   Replace CSS: `BoxDecoration`, `TextStyle`, `EdgeInsets`, `BorderRadius`
-   Replace overlay: `showModalBottomSheet()` or `Overlay`
-   Replace list rendering: `ListView.builder` (lazy) or `Column(children: [...])` (eager)
-   Theme tokens: Dart constants or `ThemeData` extension
-   dayjs → Dart's built-in `DateTime` + `intl` package for formatting

### SwiftUI

-   Replace state: `@State`, `@Binding`, `@ObservedObject`, `@StateObject`
-   Replace JSX: SwiftUI declarative `body: some View` with `VStack`, `HStack`, `ZStack`
-   Replace CSS: View modifiers (`.padding()`, `.foregroundColor()`, `.cornerRadius()`)
-   Replace overlay: `.sheet()` or `.popover()`
-   Replace list: `List` / `ForEach`
-   Theme tokens: Swift enum or struct constants
-   dayjs → Foundation `Date` + `DateFormatter`

### Kotlin Compose

-   Replace state: `remember { mutableStateOf(x) }`, `rememberSaveable`
-   Replace JSX: Composable functions with `Column`, `Row`, `Box`
-   Replace CSS: `Modifier.padding()`, `.background()`, `.border()` etc.
-   Replace overlay: `ModalBottomSheet` or `Popup`
-   Replace list: `LazyColumn` (lazy) or `Column` (eager)
-   Theme tokens: Kotlin object constants or `MaterialTheme` extension
-   dayjs → `java.time.LocalDate` + `DateTimeFormatter`

---

## 9. Consuming Styles Per Framework

The shared style package (`dist/native/styles/`) provides plain CSS with BEM class names and TypeScript class name constants. Each framework consumes CSS differently due to their build tools.

### Critical: Angular vs Vite CSS Handling

Angular's esbuild-based builder and Vite (used by Svelte/Vue) handle CSS side-effect imports (`import "./foo.css"`) fundamentally differently:

| Behaviour                           | Vite (Svelte/Vue)                    | Angular CLI (esbuild)                                       |
| ----------------------------------- | ------------------------------------ | ----------------------------------------------------------- |
| CSS from `import "./foo.css"` in TS | Bundled inline, loaded synchronously | Extracted to orphaned `main.css` — **never linked in HTML** |
| Result                              | Styles applied immediately           | Styles never load                                           |
| Correct approach                    | TS side-effect imports work fine     | Must use `angular.json` `styles` array                      |

This is why the build script only injects CSS imports into Svelte/Vue entry points, and explicitly skips Angular.

### Svelte 5

CSS is handled automatically by the build script — it prepends `import "../styles/theme/lifesg.css"` to the Svelte entry point. Vite bundles this into the final output. No manual CSS import needed in the consuming app's `main.ts`.

```svelte
<script lang="ts">
  import { dayCell as cls } from "@lifesg/react-design-system/svelte";
</script>

<div class={cls.root}>...</div>
```

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
    rel="stylesheet"
/>
<body data-fds-theme="lifesg"></body>
```

No `<style>` block needed for shared classes. BEM naming provides namespace isolation without scoping.

### Vue 3

Same as Svelte — CSS is injected by the build script. Vite handles bundling.

```vue
<script setup lang="ts">
import { dayCell as cls } from "@lifesg/react-design-system/vue";
</script>
<template>
    <div :class="cls.root">...</div>
</template>
<!-- No <style scoped> — BEM provides namespace isolation -->
```

**Pitfall:** `<style scoped>` adds attribute selectors that won't match globally-imported BEM classes.

### Angular

Angular **cannot** rely on CSS side-effect imports from TS — they produce an orphaned `main.css` that nothing loads. All CSS must go in `angular.json` `styles` array for render-blocking behaviour.

```json
// angular.json
{
    "architect": {
        "build": {
            "options": {
                "polyfills": ["zone.js"],
                "styles": [
                    "node_modules/@lifesg/react-design-system/dist/native/styles/theme/default.css",
                    "node_modules/@lifesg/react-design-system/dist/native/styles/theme/lifesg.css",
                    "node_modules/@lifesg/react-design-system/dist/native/styles/styles.css",
                    "src/styles.css"
                ]
            }
        }
    }
}
```

```typescript
@Component({
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div [class]="cls.root">...</div>`,
})
export class MyComponent {
    cls = dayCell; // imported from ../../styles
}
```

```html
<!-- src/index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
    rel="stylesheet"
/>
<body data-fds-theme="lifesg">
    <app-root></app-root>
</body>
```

**Important Angular notes:**

1. `"polyfills": ["zone.js"]` is required — without it Angular 19's esbuild builder renders a blank page with no console error.
2. `ViewEncapsulation.None` is required — Angular's default `Emulated` encapsulation prevents BEM classes from matching.
3. The orphaned `main.css` from TS-side CSS imports is harmless but unused.

### Lit (Shadow DOM)

CSS custom properties (`var(--fds-*)`) inherit through Shadow DOM boundaries. Theme CSS goes on the document, component CSS gets adopted into each Shadow DOM:

```ts
import componentCSS from "@lifesg/react-design-system/dist/native/styles/styles.css?inline";

const sharedSheet = new CSSStyleSheet();
sharedSheet.replaceSync(componentCSS);

@customElement("my-component")
export class MyComponent extends LitElement {
    static styles = [
        sharedSheet,
        css`
            /* local overrides */
        `,
    ];
}
```

**Pitfall:** Theme CSS uses `[data-fds-theme="lifesg"]` selectors in the light DOM. CSS custom properties still inherit into Shadow DOM, but class-based selectors won't match inside it.

### React Native

RN cannot use CSS files. Extract hex values from the theme CSS into a `theme-constants.ts` file:

```typescript
export const ThemeColours = {
    text: "#282828",
    primary: "#1768be",
    bg: "#ffffff",
} as const;
```

Use these constants in `StyleSheet.create()` calls.

### Font Loading

All web framework apps must load "Open Sans" (weights 300, 400, 600, 700) — the library's `--fds-font-family-heading` and `--fds-font-family-body` tokens reference it but do not bundle the font. Add to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
    rel="stylesheet"
/>
```

---

## 10. Svelte 5 Translation Notes

Svelte 5 uses "runes" — a significantly different reactivity model from Svelte 4. Key mappings:

### State and Reactivity

| React                              | Svelte 5                                                         |
| ---------------------------------- | ---------------------------------------------------------------- |
| `useState(x)`                      | `let x = $state(x)`                                              |
| `useMemo(() => expr, [deps])`      | `let x = $derived(expr)` or `$derived.by(() => { ... })`         |
| `useEffect(() => { ... }, [deps])` | `$effect(() => { ... })` (deps auto-tracked)                     |
| `useRef(null)`                     | `let el: HTMLElement \| undefined = $state()` + `bind:this={el}` |
| `useCallback(fn, [deps])`          | Plain function (Svelte auto-tracks in templates)                 |

### Type Narrowing with `$state`

When `$state` is initialized with a literal like `"none"`, TypeScript narrows the type to that literal. For union types, use a generic:

```svelte
<!-- WRONG: type is "none", can't assign "start" later -->
let focus: FocusType = $state("none");

<!-- RIGHT: type is FocusType union -->
let focus = $state<FocusType>("none");
```

### Props

```svelte
<script lang="ts">
  interface Props {
    value: string;
    disabled?: boolean;
    onchange?: (val: string) => void;
  }

  let { value, disabled = false, onchange }: Props = $props();
</script>
```

Events are callback props (e.g. `onchange`), not `createEventDispatcher`. This is the Svelte 5 way.

### Snippets (replacing slots)

Svelte 5 uses Snippets instead of slots for content projection:

```svelte
<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    icon?: Snippet;
    children?: Snippet;
  }

  let { icon, children }: Props = $props();
</script>

<!-- Guard with truthiness check before @render to avoid TS errors -->
{#if icon}
  {@render icon()}
{/if}
{#if children}
  {@render children()}
{/if}
```

Consumer side:

```svelte
<Button>
  {#snippet icon()}
    <svg>...</svg>
  {/snippet}
  Button Text
</Button>
```

### Exposed Methods

Svelte 5 components can export functions directly (no `defineExpose` wrapper):

```svelte
<script lang="ts">
  export function focusDay() {
    dayInputEl?.focus();
  }
</script>
```

Parent accesses via `bind:this`:

```svelte
<StandaloneDateInput bind:this={inputRef} />
<!-- inputRef.focusDay() -->
```

### Async DOM Updates

Use `tick()` from `svelte` instead of Vue's `nextTick()`:

```svelte
import { tick } from "svelte";

async function handleInput() {
  value = newValue;
  await tick();
  nextInputEl?.focus();
}
```

### Prop Reactivity Warning

`$state(propValue)` captures the initial value only. To sync state from prop changes, initialize with a default and use `$effect`:

```svelte
<!-- WRONG: captures initial value, doesn't react to prop changes -->
let selectedStart = $state(startDate || "");

<!-- RIGHT: initialize empty, sync via effect -->
let selectedStart = $state("");
$effect(() => {
  selectedStart = startDate || "";
});
```

---

## 11. Button Component Translation Notes

The Button component has more visual complexity than DateRangeInput — it demonstrates how to handle style variants, loading states, and content projection across frameworks.

### Style Variant Mapping

The Button has 11 style classes (5 base × 2 danger + disabled) and 6 size classes (3 sizes × 2 icon-only). These map to shared BEM classes:

```
.fds-button--style-{default|secondary|light|link}[-danger]
.fds-button--style-disabled
.fds-button--size-{default|small|large}[-icon-only]
```

The class composition pattern is the same in every framework — build a list of class names:

```
[root, styleClass, sizeClass, ...conditionalModifiers].join(" ")
```

### Font Token Expansion

Font tokens in the shared CSS expand to **6 individual CSS properties** (not a single `font` shorthand):

```css
font-family: var(--fds-font-body-family);
font-variant: var(--fds-font-body-variant);
font-size: var(--fds-font-body-size-md);
font-weight: var(--fds-font-body-weight-semibold);
line-height: var(--fds-font-body-line-height-md);
letter-spacing: var(--fds-font-body-letter-spacing-md);
```

This is because `font` shorthand requires specific value formats that CSS custom properties can't satisfy (e.g. `font: var(--size)/var(--line-height)` doesn't work).

### Hover Gate

Hover styles are gated by `@media (pointer: fine)` to prevent sticky hover on touch devices:

```css
@media (pointer: fine) {
    .fds-button--style-default:hover {
        background: var(--fds-colour-bg-strong-hover);
    }
}
```

This is already handled in the shared CSS. Framework ports just apply the class names.

### Icon-Only Detection

Each framework detects icon-only mode differently:

| Framework   | How to detect                                                      |
| ----------- | ------------------------------------------------------------------ |
| **Vue**     | Check if `$slots.default` exists                                   |
| **Lit**     | `slotchange` event on default slot, check `assignedNodes().length` |
| **Angular** | `@ContentChild` or check projected content existence               |
| **Svelte**  | Check if `children` snippet is provided (`!!children`)             |
| **RN**      | Check if `children` prop is falsy                                  |

### Loading Spinner

The spinner is 4 concentric ring `<div>`s with a shared `@keyframes` rotation and staggered `animation-delay`. The shared CSS handles all styling — framework components just render the DOM structure with the right class names.

---

## 12. Common Pitfalls

1. **dayjs plugins must be extended before use.** Call `dayjs.extend(customParseFormat)` etc. at module load time. Forgetting this causes silent parsing failures.

2. **Week start day.** dayjs defaults to Sunday. This design system uses Monday-start weeks via `dayjs.startOf("week")`. Configure locale if needed.

3. **Shadow DOM isolation (Lit only).** CSS custom properties inherit through shadow boundaries, but class-based styles and global CSS do not. Theme CSS goes on the document level; component CSS gets adopted into Shadow DOM via `adoptedStyleSheets`.

4. **Compound component pattern.** Some components (Modal, Drawer, Filter) use React.Children type detection for sub-components. These cannot be decomposed across framework bridges — they must be translated as a single unit or restructured.

5. **Two-phase state (selected vs committed).** Many input components maintain both a "working" selection and a "committed" value. The Done/Cancel pattern reverts working values to committed values on cancel. Ensure both phases are represented in the target state model.

6. **Event bubbling.** React uses synthetic events that bubble through the React tree. Lit's CustomEvents bubble through the DOM (use `composed: true` for shadow DOM). Vue and Angular events do NOT bubble through component boundaries — parent must explicitly listen and re-emit.

7. **Focus management.** Complex input components track focus across multiple sub-inputs (e.g. DD/MM/YYYY segments). Map `document.activeElement` checks to the target platform's focus API.

8. **Portal rendering.** Modal/overlay components render into a separate DOM root via React portals. In Lit, render into document.body. In Vue, use `<Teleport>`. In Angular, use CDK Overlay. In RN/Flutter, use native Modal/Overlay primitives.

9. **Vue `<style scoped>` vs BEM.** When using shared BEM classes from `@lifesg/flagship-styles`, do NOT use `<style scoped>` — the attribute selectors it generates won't match globally-imported class names. BEM naming provides sufficient namespace isolation.

10. **Angular `ViewEncapsulation.Emulated`.** Same issue as Vue scoped styles — Angular's default emulated encapsulation rewrites class selectors. Use `ViewEncapsulation.None` for components consuming shared BEM classes.

11. **Svelte 5 `$state` type narrowing.** `$state("none")` infers the literal type `"none"`. For union types, use the generic form: `$state<FocusType>("none")`.

12. **Svelte 5 `$state` from props.** `$state(propValue)` captures the initial value and won't react to prop changes. Initialize with a default and sync via `$effect` instead.

13. **Svelte 5 Snippet nullability.** Calling `{@render snippet()}` on a possibly-undefined snippet is a type error. Guard with `{#if snippet}` before rendering.

14. **Do not duplicate design-core logic.** Framework ports must import state stores and helpers from `@lifesg/design-core`, not re-implement them. Duplicating logic defeats the shared-core architecture and causes drift across ports.

15. **Svelte `$state` naming conflict.** Do not name a variable `state` when using Svelte 5's `$state` rune — `let state = $state(...)` causes a conflict. Use a descriptive name like `storeState`.

16. **Store constructor captures initial values.** `new DateRangeInputStore({ disabled, ... })` captures the prop values at construction time. To react to prop changes, pass static defaults to the constructor and use the framework's effect/watcher to call `store.updateConfig()` on each change.

17. **Types belong per-component, not in a shared `types.ts`.** Each component subfolder (`button/`, `date-range-input/`) has its own `types.ts`. Components import from `./types` (same folder), and the barrel re-exports from each subfolder. Do not create a shared root-level `types.ts`.

18. **Angular zone.js polyfill required.** Angular 19's `@angular-devkit/build-angular:application` builder requires explicit `"polyfills": ["zone.js"]` in `angular.json`. Without it, the app builds successfully but renders a blank page with no console errors.

19. **Angular CSS side-effect imports produce orphaned files.** When Angular components import from a barrel that has `import "./foo.css"` side-effect imports, esbuild extracts the CSS to a `main.css` file but never links it in the HTML. Always use `angular.json` `styles` array for Angular CSS loading.

20. **Font loading is the consuming app's responsibility.** The design tokens reference `"Open Sans"` but the library does not bundle the font. Consuming apps must include Google Fonts links for Open Sans (weights 300, 400, 600, 700) in their HTML `<head>`.
