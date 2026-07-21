# Component Refactoring Guide: Shared Logic Core + Framework-Specific UI

A step-by-step workflow for extracting shared state logic from a React component into `@lifesg/design-core`, refactoring the React component to use the extracted store, and translating only the UI layer to target frameworks.

This guide uses **Accordion** as the running example.

**Prerequisites:**

-   **This guide + `docs/ai-translation-guide.md` are used together.** This guide covers _what_ to extract and _what_ to translate (Steps 1-6). The translation guide covers _how_ to translate — the React-to-target-framework mapping tables, component library output structure, platform-specific notes, and common pitfalls. Open both when doing translation work (Step 6).
-   `docs/approach-4-plan.md` -- Architecture decisions, phased strategy, component extractability assessment

---

## Step 1: Analyze the Component

Before writing any code, extract a complete behavioral specification from the React source.

### 1.1 List Source Files

Identify every file that makes up the component:

| File                                     | Role                                  |
| ---------------------------------------- | ------------------------------------- |
| `src/accordion/accordion.tsx`            | Parent orchestrator                   |
| `src/accordion/accordion-item.tsx`       | Child item                            |
| `src/accordion/accordion-context.tsx`    | Context bridge for parent-child state |
| `src/accordion/types.ts`                 | Prop interfaces                       |
| `src/accordion/accordion.styles.ts`      | Parent styles (Linaria)               |
| `src/accordion/accordion-item.styles.ts` | Item styles (Linaria)                 |
| `tests/accordion/accordion.spec.tsx`     | Behavioral tests                      |

### 1.2 Extract the Specification

Fill this table for your component:

| Category              | Accordion values                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Props (parent)**    | `children`, `title?`, `enableExpandAll?`, `initialDisplay?`, `showTitleInMobile?`, `id?`, `data-testid?`, `className?`, `headingLevel?`, `onExpandCollapseChange?` |
| **Props (child)**     | `title`, `children`, `expanded?`, `collapsible?`, `type?`, `id?`, `data-testid?`, `className?`                                                                     |
| **State fields**      | `expandAll: boolean`, `hasFirstLoad: boolean`, `itemState: Record<string, boolean>`                                                                                |
| **Actions/mutations** | `toggleExpandAll()`, `registerItem(id, expanded)`, `deregisterItem(id)`, `setItemExpanded(id, expanded)`                                                           |
| **Events to parent**  | `onExpandCollapseChange(expanded: boolean)`                                                                                                                        |
| **Sub-components**    | `AccordionItem` (compound pattern via `Accordion.Item`)                                                                                                            |
| **Side effects**      | Mount guard (`hasFirstLoad`), bidirectional sync (all items expanded -> `expandAll` flips true, and vice versa), callback fires on `expandAll` change              |
| **External deps**     | `@react-spring/web` (height animation), `react-resize-detector` (content measurement), `@lifesg/react-icons` (chevron)                                             |

### 1.3 Classify Each Concern

Sort every piece of the specification into one of these buckets:

**Pure logic (moves to design-core store):**

-   `expandAll` state + toggle-all logic
-   `itemState` registry (register, deregister, set individual)
-   Bidirectional sync (all expanded -> expandAll becomes true, and vice versa)

**React-specific rendering (stays in React component):**

-   JSX templates, `forwardRef`, `useImperativeHandle`
-   `AccordionContext.Provider` / `useContext`
-   `clsx` class composition
-   `hasFirstLoad` mount guard + `onExpandCollapseChange` callback (React lifecycle concern)
-   Compound component pattern (`Object.assign(AccordionBase, { Item })`)

**Library-specific UI (stays per framework, rebuilt in each):**

-   `@react-spring/web` height animation
-   `react-resize-detector` content measurement
-   `@lifesg/react-icons` chevron icon

### 1.4 Identify Component-Local Utilities

Extractable logic is NOT limited to `src/util/`. Many components have local helper files. Check your component for any `helper.ts`, `utils.ts`, `helpers.ts`, or `state.ts` files.

Classify each by asking: **Does this file import from `react`, `@floating-ui/react`, `@react-spring/web`, `@linaria/core`, or the theme package?**

-   **No** -> candidate for design-core
-   **Yes** -> stays in the React package

**Category A: Pure logic, no framework deps -- move to design-core**

| File                                                | What it does                                                | Deps          |
| --------------------------------------------------- | ----------------------------------------------------------- | ------------- |
| `src/filter/addons/filter-item-checkbox-helpers.ts` | Nested option flattening/filtering                          | Types only    |
| `src/input-nested-multi-select/helpers.ts`          | Tree traversal, selection propagation                       | lodash, types |
| `src/otp-input/utils.ts`                            | Regex validation                                            | Types only    |
| `src/typography/helper.ts`                          | Font size style generation                                  | None          |
| `src/dashed-border/dashed-border.utils.ts`          | SVG background image generation                             | None          |
| `src/error-display/helper.ts`                       | Image path attribute interfaces                             | Types only    |
| `src/file-upload/helper.ts`                         | `FileUploadHelper` class (MIME types, file size formatting) | None          |
| `src/navbar/navbar-helper.ts`                       | Nav item type guards / classification                       | Types only    |

**Category B: Pure logic but imports shared utilities -- move to design-core alongside those utils**

| File                                                 | What it does                            | Deps                                        |
| ---------------------------------------------------- | --------------------------------------- | ------------------------------------------- |
| `src/time-slot-bar/helper.ts`                        | Time slot calculation, color assignment | dayjs, DateHelper, TimeHelper, StringHelper |
| `src/schedule/shared/utils.ts`                       | Schedule time math                      | dayjs, TimeHelper                           |
| `src/schedule/schedule-week-view/week-view-utils.ts` | Week view cell calculations             | dayjs, TimeHelper                           |

**Category C: Has framework/theme imports -- stays in React package**

| File                                                       | What it does                     | Why it stays                                                |
| ---------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| `src/shared/dropdown-list/dropdown-list-state.tsx`         | DropdownList focus index Context | Uses `React.useState`, Context                              |
| `src/shared/dropdown-list/nested-dropdown-list-helpers.ts` | Nested option tree manipulation  | Uses `immer` -- could move if immer is added to design-core |
| `src/schedule/schedule-slot-content/style-helper.ts`       | Slot color resolution            | Imports `Colour` from theme                                 |
| `src/footer/footer-helper.ts`                              | Footer link generation           | Imports theme types, Typography                             |
| `src/button/button-helper.tsx`                             | `hasValidChildren` check         | Uses `React.Children.toArray`                               |
| `src/phone-number-input/phone-number-input-helper.tsx`     | Country code formatting          | `.tsx` extension, has JSX                                   |

> **Tip:** Run `head -5 src/[component]/helper.ts` to quickly check imports. If the first few lines import from `react` or a React-specific library, it stays.

### 1.5 Migration Path from useStateActions

If the component uses the `useStateActions` pattern (currently only DateRangeInput), note that the reducer functions are already pure `(state, payload) => state` functions. They map directly to store class methods:

```ts
// Before: useStateActions reducer
reducers: {
    selectStart: (state, date: string) => ({ ...state, selectedStart: date }),
    openCalendar: (state) => ({ ...state, calendarOpen: true, focused: true }),
}

// After: store class method
selectStart(date: string): void {
    this.setState((s) => ({ ...s, selectedStart: date }));
}
openCalendar(): void {
    this.setState((s) => ({ ...s, calendarOpen: true, focused: true }));
}
```

---

## Step 2: Create the State Store

Implement the behavioral specification from Step 1 as a framework-agnostic store. Two approaches are shown; both produce the same `subscribe` + `getState` API surface.

### 2.1 Prerequisites: Store Base Class

For the plain TS approach, a small abstract base class provides the subscribe/notify infrastructure. This lives at `packages/design-core/src/store.ts` and is shipped once:

```ts
type Listener = () => void;

export abstract class Store<State> {
    private listeners = new Set<Listener>();
    protected state: State;

    constructor(initialState: State) {
        this.state = initialState;
    }

    getState(): State {
        return this.state;
    }

    subscribe(listener: Listener): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    protected setState(next: State | ((prev: State) => State)): void {
        const nextState =
            typeof next === "function"
                ? (next as (prev: State) => State)(this.state)
                : next;
        if (nextState !== this.state) {
            this.state = nextState;
            for (const listener of this.listeners) listener();
        }
    }
}
```

### 2.2 Option A: Plain TS Class (recommended)

```ts
// packages/design-core/src/accordion/accordion-store.ts
import { Store } from "../store";

export interface AccordionState {
    expandAll: boolean;
    itemState: Record<string, boolean>;
}

export class AccordionStore extends Store<AccordionState> {
    constructor(initialDisplay: "expand-all" | "collapse-all" = "expand-all") {
        super({
            expandAll: initialDisplay === "expand-all",
            itemState: {},
        });
    }

    toggleExpandAll(): void {
        const expandAll = !this.state.expandAll;
        const itemState = Object.fromEntries(
            Object.keys(this.state.itemState).map((k) => [k, expandAll])
        );
        this.setState({ expandAll, itemState });
    }

    registerItem(id: string, expanded?: boolean): void {
        const value = expanded ?? this.state.expandAll;
        this.setState((s) => ({
            ...s,
            itemState: { ...s.itemState, [id]: value },
        }));
    }

    deregisterItem(id: string): void {
        this.setState((s) => {
            const { [id]: _, ...rest } = s.itemState;
            return { ...s, itemState: rest };
        });
    }

    setItemExpanded(id: string, expanded: boolean): void {
        this.setState((s) => {
            const itemState = { ...s.itemState, [id]: expanded };
            const values = Object.values(itemState);
            const allExpanded = values.length > 0 && values.every(Boolean);
            const allCollapsed = values.length > 0 && values.every((v) => !v);

            // Bidirectional sync
            let expandAll = s.expandAll;
            if (allExpanded && !expandAll) expandAll = true;
            if (allCollapsed && expandAll) expandAll = false;

            return { expandAll, itemState };
        });
    }
}
```

**Unit tests to write:**

-   constructor sets `expandAll` based on `initialDisplay`
-   `registerItem` adds to `itemState` with default from `expandAll`
-   `registerItem` respects explicit `expanded` param
-   `deregisterItem` removes from `itemState`
-   `setItemExpanded` updates individual item
-   `setItemExpanded` all items expanded -> `expandAll` becomes true
-   `setItemExpanded` all items collapsed -> `expandAll` becomes false
-   `toggleExpandAll` sets all items to new value
-   `subscribe` listener called on state change
-   `subscribe` returns working unsubscribe function

### 2.3 Option B: Zustand Vanilla

```ts
// packages/design-core/src/accordion/accordion-store.ts
import { createStore } from "zustand/vanilla";

export interface AccordionState {
    expandAll: boolean;
    itemState: Record<string, boolean>;
}

export interface AccordionActions {
    toggleExpandAll: () => void;
    registerItem: (id: string, expanded?: boolean) => void;
    deregisterItem: (id: string) => void;
    setItemExpanded: (id: string, expanded: boolean) => void;
}

export type AccordionStoreApi = AccordionState & AccordionActions;

export const createAccordionStore = (
    initialDisplay: "expand-all" | "collapse-all" = "expand-all"
) =>
    createStore<AccordionStoreApi>((set, get) => ({
        expandAll: initialDisplay === "expand-all",
        itemState: {},

        toggleExpandAll: () => {
            const expandAll = !get().expandAll;
            const itemState = Object.fromEntries(
                Object.keys(get().itemState).map((k) => [k, expandAll])
            );
            set({ expandAll, itemState });
        },

        registerItem: (id, expanded) => {
            set((s) => ({
                itemState: {
                    ...s.itemState,
                    [id]: expanded ?? s.expandAll,
                },
            }));
        },

        deregisterItem: (id) => {
            set((s) => {
                const { [id]: _, ...rest } = s.itemState;
                return { itemState: rest };
            });
        },

        setItemExpanded: (id, expanded) => {
            set((s) => {
                const itemState = { ...s.itemState, [id]: expanded };
                const values = Object.values(itemState);
                const allExpanded = values.length > 0 && values.every(Boolean);
                const allCollapsed =
                    values.length > 0 && values.every((v) => !v);

                let expandAllNext = s.expandAll;
                if (allExpanded && !expandAllNext) expandAllNext = true;
                if (allCollapsed && expandAllNext) expandAllNext = false;

                return { expandAll: expandAllNext, itemState };
            });
        },
    }));
```

**Zustand extras available:**

-   `devtools(createStore(...))` -- Redux DevTools integration
-   `subscribeWithSelector` -- subscribe to specific state slices
-   `immer` middleware -- mutable-style updates

### 2.4 When to Use Which

| Criterion                                   | Plain TS class           | Zustand vanilla                      |
| ------------------------------------------- | ------------------------ | ------------------------------------ |
| Component has 1-5 state fields              | Preferred                | Works but adds a dep                 |
| Need Redux DevTools                         | Manual                   | Built-in middleware                  |
| Zero-dependency constraint                  | Yes                      | Adds ~2.5kB gzipped                  |
| Global singleton store (toast queue, theme) | Possible but manual      | Better fit                           |
| Selective re-render optimization            | Requires manual selector | Built-in `useStore(store, selector)` |

Both expose the same `subscribe(listener) => unsubscribe` and `getState() => State` API. Framework bindings work identically for either approach.

---

## Step 3: Create Framework Bindings

These bindings connect the store to each framework's reactivity system. They are identical regardless of whether you used a plain TS class or zustand vanilla in Step 2.

### React (useSyncExternalStore)

```ts
// packages/react-design-system/src/hooks/use-store.ts
import { useSyncExternalStore } from "react";
// For React 17: import { useSyncExternalStore } from "use-sync-external-store/shim";
import type { Store } from "@lifesg/design-core";

export function useStore<S>(store: Store<S>): S {
    return useSyncExternalStore(
        (cb) => store.subscribe(cb),
        () => store.getState()
    );
}
```

> **Zustand variant:** If using zustand, React consumers can use `zustand/react`'s built-in `useStore(store, selector)` for automatic selector-based re-render optimization.

### Vue 3 (shallowRef + subscribe)

```ts
import { shallowRef, onMounted, onUnmounted, type ShallowRef } from "vue";
import type { Store } from "@lifesg/design-core";

export function useStore<S>(store: Store<S>): ShallowRef<S> {
    const state = shallowRef(store.getState());
    let unsub: (() => void) | undefined;
    onMounted(() => {
        unsub = store.subscribe(() => {
            state.value = store.getState();
        });
    });
    onUnmounted(() => unsub?.());
    return state;
}
```

### Angular (OnPush + markForCheck)

Angular 19 with standalone components and signal-based inputs:

```ts
import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ViewEncapsulation,
    OnInit,
    OnDestroy,
    input,
    inject,
} from "@angular/core";
import { AccordionStore } from "@lifesg/design-core"; // → relative path after build

@Component({
    selector: "fds-accordion",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    // ...
})
export class AccordionComponent implements OnInit, OnDestroy {
    readonly initialDisplay = input<"expand-all" | "collapse-all">(
        "expand-all"
    );

    store!: AccordionStore;
    private unsub?: () => void;
    private cdr = inject(ChangeDetectorRef);

    ngOnInit() {
        this.store = new AccordionStore(this.initialDisplay());
        this.unsub = this.store.subscribe(() => this.cdr.markForCheck());
    }

    ngOnDestroy() {
        this.unsub?.();
    }
}
```

**Note:** `ViewEncapsulation.None` is required so global BEM classes apply. CSS is loaded via `angular.json` `styles` array — NOT via TS side-effect imports (see `ai-translation-guide.md` Section 9).

---

## Step 4: Refactor the React Component

Replace inline state management with the design-core store while keeping all rendering and React-specific concerns in place.

### Before: Current State Management

This is the state management code in `accordion.tsx` (lines 23-85) that will be replaced:

```tsx
// 3 pieces of state
const [expandAll, setExpandAll] = useState(initialDisplay === "expand-all");
const [hasFirstLoad, setHasFirstLoad] = useState(false);
const [itemState, setItemState] = useState<Record<string, boolean>>({});

// Mount guard
useEffect(() => {
    setHasFirstLoad(true);
}, []);

// Fire callback on expandAll change
useEffect(() => {
    if (hasFirstLoad) onExpandCollapseChange?.(expandAll);
}, [expandAll, hasFirstLoad]);

// Bidirectional sync: individual items -> expandAll
useEffect(() => {
    if (hasFirstLoad) {
        const itemStates = Object.values(itemState);
        if (itemStates.length > 0) {
            const allExpanded = itemStates.every((state) => state === true);
            const allCollapsed = itemStates.every((state) => state === false);
            if (allExpanded && !expandAll) setExpandAll(true);
            else if (allCollapsed && expandAll) setExpandAll(false);
        }
    }
}, [itemState, expandAll, hasFirstLoad]);

// Toggle all handler
const handleExpandCollapseClick = (event) => {
    event.preventDefault();
    setExpandAll((prev) => {
        const next = !prev;
        setItemState(
            Object.fromEntries(Object.keys(itemState).map((k) => [k, next]))
        );
        return next;
    });
};

// Item callbacks
const onItemStateChange = (id, isExpanded) => {
    setItemState((prev) => ({ ...prev, [id]: isExpanded }));
};
const onItemDeregister = (id) => {
    setItemState((prev) => {
        const s = { ...prev };
        delete s[id];
        return s;
    });
};
```

### After: Store-Based

```tsx
import { AccordionStore } from "@lifesg/design-core";
import { useStore } from "../hooks/use-store";

const AccordionBase = ({ initialDisplay = "expand-all", onExpandCollapseChange, ... }) => {
    // Store replaces all three useState calls + bidirectional sync effect
    const [store] = useState(() => new AccordionStore(initialDisplay));
    const { expandAll, itemState } = useStore(store);

    // Mount guard + callback remain React-side (lifecycle concern)
    const [hasFirstLoad, setHasFirstLoad] = useState(false);
    useEffect(() => { setHasFirstLoad(true); }, []);
    useEffect(() => {
        if (hasFirstLoad) onExpandCollapseChange?.(expandAll);
    }, [expandAll, hasFirstLoad]);

    const handleExpandCollapseClick = (event) => {
        event.preventDefault();
        store.toggleExpandAll();
    };

    return (
        <AccordionContext.Provider value={{ store, itemHeadingLevel }}>
            {/* ... same JSX ... */}
        </AccordionContext.Provider>
    );
};
```

### Refactored Context

```tsx
// accordion-context.tsx
import type { AccordionStore } from "@lifesg/design-core";

interface IAccordionContext {
    store: AccordionStore;
    itemHeadingLevel?: number | undefined;
}

export const AccordionContext = React.createContext<IAccordionContext>({
    store: new AccordionStore(), // default for standalone items
    itemHeadingLevel: undefined,
});
```

### Refactored AccordionItem Changes

```tsx
// In accordion-item.tsx
const { store, itemHeadingLevel } = useContext(AccordionContext);
const { expandAll, itemState } = useStore(store);

const expanded =
    itemState[internalId] ??
    (collapsible ? expandedControlled ?? expandAll : true);

// Registration
useEffect(() => {
    store.registerItem(
        internalId,
        collapsible ? expandedControlled ?? expandAll : true
    );
    return () => store.deregisterItem(internalId);
}, []);

// Prop sync
useEffect(() => {
    store.setItemExpanded(
        internalId,
        collapsible ? expandedControlled ?? expandAll : true
    );
}, [expandAll, expandedControlled, collapsible]);

// Click handler
const handleExpandCollapseClick = (event) => {
    event.preventDefault();
    store.setItemExpanded(internalId, !expanded);
};

// Everything below stays the same: useSpring, useResizeDetector,
// useImperativeHandle, all JSX rendering
```

### What Stays React-Specific

| Concern                                   | Why it stays                                             | Location           |
| ----------------------------------------- | -------------------------------------------------------- | ------------------ |
| `useImperativeHandle`                     | React ref API for `expand()`/`collapse()`/`isExpanded()` | accordion-item.tsx |
| `@react-spring/web` `useSpring`           | React animation library                                  | accordion-item.tsx |
| `react-resize-detector`                   | React hook for content measurement                       | accordion-item.tsx |
| `hasFirstLoad` + `onExpandCollapseChange` | React mount lifecycle guard                              | accordion.tsx      |
| `AccordionContext.Provider`               | React Context API                                        | accordion.tsx      |
| `Object.assign(AccordionBase, { Item })`  | React compound component convention                      | accordion.tsx      |
| `clsx(...)` class composition             | React rendering utility                                  | both files         |
| `forwardRef` + `useRef`                   | React ref forwarding                                     | accordion-item.tsx |

> **Zustand variant:** Replace `new AccordionStore(initialDisplay)` with `createAccordionStore(initialDisplay)`. If using `zustand/react`, replace the custom `useStore` hook with zustand's built-in: `const expandAll = useStore(store, (s) => s.expandAll)`.

---

## Step 5: Extract Shared Styles

Create framework-agnostic BEM CSS + class name constants in `native-ports/shared/`, following the existing pattern for date components.

### 5.1 Create BEM Class Name Constants

Follow the pattern in `native-ports/shared/src/components/day-cell.ts`:

```ts
// native-ports/shared/src/components/accordion.ts
const ns = "fds-accordion";

export const root = ns;
export const titleWrapper = `${ns}__title-wrapper`;
export const titleWrapperHidden = `${ns}__title-wrapper--hidden`;
export const title = `${ns}__title`;
export const titleHidden = `${ns}__title--hidden`;
export const expandCollapseLink = `${ns}__expand-collapse-link`;
```

```ts
// native-ports/shared/src/components/accordion-item.ts
const ns = "fds-accordion-item";

export const root = ns;
export const rootExpanded = `${ns}--expanded`;
export const button = `${ns}__button`;
export const buttonExpanded = `${ns}__button--expanded`;
export const buttonCollapsible = `${ns}__button--collapsible`;
export const title = `${ns}__title`;
export const titleSmall = `${ns}__title--small`;
export const icon = `${ns}__icon`;
export const iconExpanded = `${ns}__icon--expanded`;
export const chevron = `${ns}__chevron`;
export const expandable = `${ns}__expandable`;
export const content = `${ns}__content`;
```

### 5.2 Create Plain CSS

Convert Linaria token objects to `var(--fds-*)` references. Follow the pattern in `native-ports/shared/src/components/day-cell.css`:

```css
/* native-ports/shared/src/components/accordion.css */
.fds-accordion {
    width: 100%;
    border-bottom: var(--fds-border-width-010) solid var(--fds-colour-border);
}

.fds-accordion__title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: var(--fds-spacing-16);
}

.fds-accordion__title {
    display: flex;
    align-self: flex-start;
    flex: 1;
    font-size: var(--fds-font-heading-size-md);
    font-weight: 700;
    color: var(--fds-colour-text);
}

.fds-accordion__expand-collapse-link {
    margin: calc(var(--fds-spacing-16) * -1);
    margin-left: 0;
    white-space: nowrap;
}
```

```css
/* native-ports/shared/src/components/accordion-item.css */
.fds-accordion-item {
    background-color: var(--fds-colour-bg);
    border-top: var(--fds-border-width-010) solid var(--fds-colour-border);
}

.fds-accordion-item--expanded {
    padding-bottom: var(--fds-spacing-16);
}

.fds-accordion-item__button {
    background: transparent;
    border: none;
    border-radius: var(--fds-radius-sm);
    outline: none;
    text-align: left;
    user-select: text;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--fds-spacing-48);
    padding: var(--fds-spacing-16) 0;
}

.fds-accordion-item__button:focus-visible {
    outline: 2px solid var(--fds-colour-focus-ring);
    outline-offset: 0;
}

.fds-accordion-item__button--expanded {
    padding-bottom: var(--fds-spacing-8);
}

.fds-accordion-item__button--collapsible {
    cursor: pointer;
}

.fds-accordion-item__title {
    flex: 1;
    transition: all var(--fds-motion-duration-250) var(
            --fds-motion-ease-standard
        );
    color: var(--fds-colour-text);
    font-size: var(--fds-font-heading-size-sm);
    font-weight: 700;
}

.fds-accordion-item__title--small {
    font-size: var(--fds-font-heading-size-xs);
    font-weight: 700;
}

.fds-accordion-item__icon {
    transform: rotate(180deg);
    transition: transform var(--fds-motion-duration-250) var(
            --fds-motion-ease-default
        );
}

.fds-accordion-item__icon--expanded {
    transform: rotate(0deg);
}

.fds-accordion-item__chevron {
    height: 1.25rem;
    width: 1.25rem;
    color: var(--fds-colour-icon-primary);
}

.fds-accordion-item__expandable {
    overflow: hidden;
}

.fds-accordion-item__content {
    display: inline-block;
    padding-right: var(--fds-spacing-64);
}
```

### 5.3 Register in Barrel Exports

```ts
// native-ports/shared/src/components/index.ts
import "./accordion.css";
import "./accordion-item.css";
// ... existing imports ...
export * as accordion from "./accordion";
export * as accordionItem from "./accordion-item";
```

**Angular note:** The CSS side-effect imports in this barrel are loaded automatically by Vite (Svelte/Vue), but Angular's esbuild builder extracts them to an orphaned `main.css` that nothing links. Angular consumers must add the combined component CSS (`dist/native/styles/styles.css`) to their `angular.json` `styles` array instead. After adding new CSS files, rebuild the combined CSS (`native-ports/shared/dist/index.css`) so Angular consumers get the new component styles.

### 5.4 Linaria-to-CSS Custom Property Reference

Use this when converting other components:

| Linaria token             | CSS custom property                                                       |
| ------------------------- | ------------------------------------------------------------------------- |
| `Colour["bg"]`            | `var(--fds-colour-bg)`                                                    |
| `Colour["border"]`        | `var(--fds-colour-border)`                                                |
| `Colour["text"]`          | `var(--fds-colour-text)`                                                  |
| `Colour["focus-ring"]`    | `var(--fds-colour-focus-ring)`                                            |
| `Colour["icon-primary"]`  | `var(--fds-colour-icon-primary)`                                          |
| `Spacing["spacing-16"]`   | `var(--fds-spacing-16)`                                                   |
| `Border["width-010"]`     | `var(--fds-border-width-010)`                                             |
| `Border.solid`            | `solid` (literal value, not a token)                                      |
| `Radius["sm"]`            | `var(--fds-radius-sm)`                                                    |
| `Motion["duration-250"]`  | `var(--fds-motion-duration-250)`                                          |
| `Motion["ease-standard"]` | `var(--fds-motion-ease-standard)`                                         |
| `Font["heading-md-bold"]` | Expand to individual `font-size`, `font-weight`, `line-height` properties |
| `MediaQuery.MaxWidth.sm`  | `@media (max-width: var(--fds-layout-sm))`                                |

---

## Step 6: Translate the UI Layer

With design-core providing the state store and shared styles providing the CSS, the translator only writes **rendering + reactivity binding**. Components import from the relative `../../styles` path (build script rewrites `@lifesg/flagship-styles` → relative path in `dist/native/`).

### 6.1 Scope Reduction

| Concern            | Without design-core (1:1 port)  | With design-core                     |
| ------------------ | ------------------------------- | ------------------------------------ |
| State fields       | Re-implement in framework idiom | `import { AccordionStore }`          |
| State transitions  | Re-implement all logic          | Call `store.toggleExpandAll()`, etc. |
| Bidirectional sync | Re-implement (error-prone)      | Built into store                     |
| Registry pattern   | Re-implement                    | Built into store                     |
| Template/markup    | Write from scratch              | Write from scratch (same)            |
| Reactivity binding | N/A (built-in)                  | 5-10 lines of binding code           |
| Animation          | Write from scratch              | Write from scratch (same)            |
| Styles             | Apply BEM classes               | Apply BEM classes (same)             |

### 6.2 AI Prompt Template (Store-Aware)

Use this when design-core stores are available. For 1:1 translation without design-core, use the prompt in `ai-translation-guide.md` Section 7.

```
You are translating a React component's UI LAYER into [TARGET FRAMEWORK].
The state management is already extracted into a design-core store class.
The output must be a component library, not a demo app.

## State Store (DO NOT re-implement -- import this)
- Package: @lifesg/design-core
- Store class: [StoreClassName]
- State interface: [list state fields]
- Methods: [list all store methods]
- Binding: subscribe(listener) => unsubscribe, getState() => State

## React Source (UI reference only -- do NOT copy state logic)
- [list component files]

## Shared Styles (import, do not rebuild)
- @lifesg/flagship-styles: BEM class names + CSS files
- Import: [list class name modules]
- CSS: [list CSS files] (use var(--fds-*) tokens)

## Your task
1. Create the framework binding (useStore equivalent for [TARGET])
2. Create per-component type files (`button/types.ts`, `date-range-input/types.ts`) — re-export from design-core where available, define local types alongside the component
3. Create the parent component: instantiate store, provide to children
4. Create the child component: read store state, render UI, call store methods
5. Apply BEM class names from the shared package
6. Implement animation using [TARGET]'s animation system

## For mapping tables (props, events, templates, styling)
See docs/ai-translation-guide.md Section 3.
```

### 6.3 Example: Lit Web Component

A minimal Lit component consuming the AccordionStore. Note: zero state management code -- only rendering and reactivity binding.

```ts
// native-ports/lit/src/accordion.ts
import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { AccordionStore } from "@lifesg/design-core";
import { accordion } from "@lifesg/flagship-styles";

@customElement("fds-accordion")
export class FdsAccordion extends LitElement {
    @property({ attribute: "initial-display" })
    initialDisplay: "expand-all" | "collapse-all" = "expand-all";

    @property({ type: Boolean, attribute: "enable-expand-all" })
    enableExpandAll = true;

    @property() title = "";

    @state() private _expandAll = true;

    private store!: AccordionStore;
    private unsub?: () => void;

    connectedCallback() {
        super.connectedCallback();
        this.store = new AccordionStore(this.initialDisplay);
        this.unsub = this.store.subscribe(() => {
            this._expandAll = this.store.getState().expandAll;
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsub?.();
    }

    render() {
        return html`
            <div class="${accordion.root}">
                <div class="${accordion.titleWrapper}">
                    ${this.title
                        ? html`<h2 class="${accordion.title}">
                              ${this.title}
                          </h2>`
                        : nothing} ${this.enableExpandAll
                        ? html`
                              <button
                                  class="${accordion.expandCollapseLink}"
                                  @click=${() => this.store.toggleExpandAll()}
                              >
                                  ${this._expandAll ? "Hide all" : "Show all"}
                              </button>
                          `
                        : nothing}
                </div>
                <slot></slot>
            </div>
        `;
    }
}
```

### 6.4 Angular-Specific Considerations

Angular ports have unique requirements due to how Angular CLI handles CSS:

1. **CSS must be in `angular.json` styles array** — TS side-effect imports are extracted but never linked. Component CSS and theme CSS must all go in the `styles` array for render-blocking behavior.
2. **`ViewEncapsulation.None`** — required for all components that use shared BEM classes.
3. **`ChangeDetectionStrategy.OnPush`** — recommended for performance; pair with `markForCheck()` in store subscriber.
4. **`"polyfills": ["zone.js"]`** — must be explicit in `angular.json` for Angular 19's esbuild builder.
5. **Font loading** — add Google Fonts link for "Open Sans" (weights 300, 400, 600, 700) to `src/index.html`.

### 6.5 Cross-Reference

For the complete mapping of React patterns to target frameworks (state hooks, props, events, templates, styling), see:

-   `ai-translation-guide.md` **Section 3**: Translation Mapping Reference
-   `ai-translation-guide.md` **Section 8**: Platform-Specific Notes
-   `ai-translation-guide.md` **Section 9**: Consuming Styles Per Framework (critical for Angular)
-   `ai-translation-guide.md` **Section 12**: Common Pitfalls

---

## Step 7: Verify

### 7.1 Store Unit Tests (Framework-Agnostic)

Run with Jest or Vitest. These tests are the behavioral contract -- if they pass, any UI built on this store will behave correctly.

```ts
describe("AccordionStore", () => {
    it("initializes with expand-all", () => {
        const store = new AccordionStore("expand-all");
        expect(store.getState().expandAll).toBe(true);
    });

    it("registers item with default from expandAll", () => {
        const store = new AccordionStore("collapse-all");
        store.registerItem("a");
        expect(store.getState().itemState["a"]).toBe(false);
    });

    it("syncs expandAll when all items individually expanded", () => {
        const store = new AccordionStore("collapse-all");
        store.registerItem("a");
        store.registerItem("b");
        store.setItemExpanded("a", true);
        store.setItemExpanded("b", true);
        expect(store.getState().expandAll).toBe(true);
    });

    it("notifies subscribers on state change", () => {
        const store = new AccordionStore();
        const listener = jest.fn();
        store.subscribe(listener);
        store.registerItem("a");
        expect(listener).toHaveBeenCalledTimes(1);
    });

    it("unsubscribe stops notifications", () => {
        const store = new AccordionStore();
        const listener = jest.fn();
        const unsub = store.subscribe(listener);
        unsub();
        store.registerItem("a");
        expect(listener).not.toHaveBeenCalled();
    });
});
```

### 7.2 React Integration Tests

The existing `tests/accordion/accordion.spec.tsx` should pass without modification after the refactoring. If tests break, the refactoring has a regression.

### 7.3 Cross-Framework Behavioral Parity

Each framework port should pass these interaction scenarios:

-   [ ] Initial render with `expand-all` -> all items visible
-   [ ] Initial render with `collapse-all` -> all items hidden
-   [ ] Click "Show all" -> all items expand, label changes to "Hide all"
-   [ ] Click "Hide all" -> all items collapse, label changes to "Show all"
-   [ ] Click individual item to collapse -> only that item collapses
-   [ ] Collapse all items individually -> "Show all" label appears
-   [ ] Expand all items individually -> "Hide all" label appears
-   [ ] `collapsible={false}` item -> always expanded, not toggleable
-   [ ] Controlled `expanded` prop -> overrides default expand/collapse
-   [ ] Item unmounts -> removed from registry, expand-all recalculates

---

## Appendix A: Reference Checklist

```
[ ] 1. ANALYZE: List all source files for the component
[ ] 1. ANALYZE: Extract spec (props, state, actions, events, deps)
[ ] 1. ANALYZE: Classify pure logic vs React-specific vs shared styles
[ ] 1. ANALYZE: Identify component-local utilities (Category A/B/C)
[ ] 2. STORE: Define state interface
[ ] 2. STORE: Implement store class (plain TS or zustand)
[ ] 2. STORE: Write unit tests for all methods + subscribe/notify
[ ] 3. BINDINGS: Create useStore hook (React useSyncExternalStore)
[ ] 3. BINDINGS: Create Vue/Angular bindings if targeting those frameworks
[ ] 4. REFACTOR: Replace useState/useEffect with store
[ ] 4. REFACTOR: Update Context to provide store instance
[ ] 4. REFACTOR: Verify existing tests still pass
[ ] 5. STYLES: Create BEM class name constants in native-ports/shared/
[ ] 5. STYLES: Convert Linaria CSS to plain CSS with var(--fds-*)
[ ] 5. STYLES: Register in shared barrel export
[ ] 6. TRANSLATE: Create framework binding for target
[ ] 6. TRANSLATE: Create per-component type files (button/types.ts, etc.)
[ ] 6. TRANSLATE: Write UI component importing store + shared styles
[ ] 6. TRANSLATE: Implement framework-specific animation
[ ] 7. VERIFY: Store unit tests pass
[ ] 7. VERIFY: React integration tests pass (no regressions)
[ ] 7. VERIFY: Cross-framework behavioral parity
```

---

## Appendix B: Component Extractability Quick Reference

Components ranked by suitability for this workflow (from `approach-4-plan.md`):

| Component       | State Count       | Floating-UI? | Extractability                   | Notes                                                |
| --------------- | ----------------- | ------------ | -------------------------------- | ---------------------------------------------------- |
| Button          | 0 (stateless)     | No           | Low value                        | Only pure style/size maps to extract                 |
| Toast           | 1                 | No           | Easy                             | Simple timer-based dismiss                           |
| Drawer          | 1                 | Yes          | Easy (state), hard (positioning) | Floating-UI stays in React                           |
| Toggle          | 2                 | No           | Medium                           | Checkbox vs radio logic is pure                      |
| **Accordion**   | **4 (registry)**  | **No**       | **Best candidate**               | Pure logic, bidirectional sync, no DOM coupling      |
| DateInput       | 5 + 5 sub         | Yes          | Medium                           | Two-phase commit extractable, focus mgmt stays       |
| DateRangeInput  | 9                 | Yes          | Medium                           | Already uses `useStateActions`, closest to pattern   |
| Select/Dropdown | 6 across 3 layers | Deep         | Hard                             | State split across Context layers, heavy floating-UI |
