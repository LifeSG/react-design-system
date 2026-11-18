# E9 finding (draft F19, to merge into `01-css-layers.md` by hand after review)

### F19. E9: consumer overrides give the same result on per-folder and single-layer builds in 92 of 96 applicable cells; the 4 that differ are all consumers writing into a library layer by name (Measured)

Reproduce (from `docs/spike/experiments/e2`, with `final/libs/{flat,styleedge}` built by
`../final/prepare-libs.sh`):

```sh
node make-overrides.mjs && for l in ../final/libs/flat ../final/libs/styleedge published; do LIB=$l SUITE=overrides RUNS=2 ./run-consumer.sh; done && node matrix-overrides.mjs results/{flat,styleedge,published}-overrides.jsonl
```

Results in `e2/results/{flat,styleedge,published}-overrides.jsonl`, the printed matrix in
`e2/results/overrides-matrix.md`, log in `e2/results/run-overrides.log`. Pages in
`e2/src/app/overrides/`, generated from `overrides-spec.mjs` (14 and 15 hand-written).

Setup. Libraries are linked by a symlink from the e2 app's
`node_modules/@lifesg/react-design-system` straight to `final/libs/<lib>` (`LIB=<path>`,
new in `run-consumer.sh`); `published` is alpha.14 as installed. Each library: Turbopack
default and webpack default × 2 rebuilds × 3 `globals.css` setups (`@layer main, fds;` as
documented, `@layer fds, main;`, no statement) = 12 builds, 23 pages each. Every page
imports the theme stylesheet first. Each mechanism is read from the builds with its own
setup (7: reversed, 8 and 14b: none, the rest: documented). Chromium, 1280×900.

**No cell varied across rebuilds or bundlers, on any library** (Measured, the matrix
prints "Unstable cells: none"; every cell is 4/4).

Six targets, picked from the built CSS (Read, rule traces in the `.jsonl` `rules` field):

| Target                            | Measured element and property                        | Library rule(s) on `styleedge`                                       |
| --------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| `timeline` (F12's)                | title `margin-bottom`, 16px                          | `fds.timeline .tfsmff8` (0,1,0) over `fds.typography .d4n1hjq`       |
| `button` (one folder)             | `background-color`, rgb(23,104,190)                  | `fds.button .mharb8i` (0,1,0)                                        |
| `navbar-icon` (F17 flip)          | mobile menu `svg` `width`: 18px flat, 24px styleedge | `fds.shared .m18ljjag svg` (0,1,1) vs `fds.navbar .m11vsg37` (0,1,0) |
| `textarea` (library `!important`) | read-only `background-color`, transparent            | `fds.input-textarea .e1kovz0t { background: 0 0 !important }`        |
| `input-group` (state rule)        | read-only wrapper `padding-left`, 0px                | `fds.input-group .nx53mj4[data-read-only="true"]` (0,2,0)            |
| `modal` (portal)                  | Modal v2 content `margin-left`, 64px                 | `fds.modal-v2 .c1vsayl1` (0,1,0), `var(--fds-spacing-64)`            |

The app's value is distinctive per target (40px, 7px, rgb(10,20,30)), so a cell is "app"
when the computed value equals it and "library" when it equals the same build's
baseline page. "Intended" is what the consumer means to happen, stated in
`overrides-spec.mjs` before `flat` was measured: "library" only for 3 and 12, where
`@layer main, fds;` makes the library win by design (F12).

#### The matrix (condensed; every cell per target in `results/overrides-matrix.md`)

`n/a` = does not apply: the class or `style` was passed to the component and the
measurer found it did not land on the measured element (Measured), or the property is
a literal with no token (Read). The textarea column is the library's `!important`.

| #   | Mechanism                                                                 | Intended | timeline   | button                           | navbar-icon | textarea | input-group                      | modal                            | flat vs styleedge                    |
| --- | ------------------------------------------------------------------------- | -------- | ---------- | -------------------------------- | ----------- | -------- | -------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | Unlayered, descendant selector                                            | app      | app        | app                              | app         | library  | app                              | app                              | same                                 |
| 1p  | Unlayered, descendant of the app wrapper (modal only)                     | app      | -          | -                                | -           | -        | -                                | library                          | same (portal is outside the wrapper) |
| 2   | Unlayered, single class via `className`                                   | app      | n/a        | app                              | n/a         | library  | app                              | app                              | same                                 |
| 3   | `@layer main`                                                             | library  | library    | library                          | library     | library  | library                          | library                          | same                                 |
| 4   | Unlayered `!important`                                                    | app      | app        | app                              | app         | library  | app                              | app                              | same                                 |
| 5   | `!important` in `@layer main`                                             | app      | app        | app                              | app         | **app**  | app                              | app                              | same                                 |
| 6   | Inline `style` prop                                                       | app      | n/a        | app                              | n/a         | library  | n/a                              | app                              | same                                 |
| 7   | `@layer fds, main;`, rule in `main`                                       | app      | app        | app                              | app         | library  | app                              | app                              | same                                 |
| 8   | No `@layer` statement, rule in `main`                                     | app      | app        | app                              | app         | library  | app                              | app                              | same                                 |
| 9a  | `@layer fds { }`, descendant                                              | app      | app        | app                              | app         | library  | app                              | app                              | same                                 |
| 9b  | `@layer fds.<folder> { }`, descendant                                     | app      | app        | app                              | app         | library  | **flat app / styleedge library** | app                              | **1 differs**                        |
| 9c  | `@layer fds.<folder> { }`, single class                                   | app      | n/a        | **flat app / styleedge library** | n/a         | library  | **flat app / styleedge library** | **flat app / styleedge library** | **3 differ**                         |
| 9d  | `@layer fds.<renamed> { }` (undeclared name), descendant                  | app      | app        | app                              | app         | library  | app                              | app                              | same                                 |
| 10  | Token, unlayered `[data-fds-theme="lifesg"]` (documented)                 | app      | n/a        | app                              | n/a         | n/a      | n/a                              | app                              | same                                 |
| 11a | Token, `ThemeProvider style` (documented)                                 | app      | n/a        | app                              | n/a         | n/a      | n/a                              | app                              | same                                 |
| 11b | Token, `useApplyStyle` (documented)                                       | app      | n/a        | app                              | n/a         | n/a      | n/a                              | app                              | same                                 |
| 12  | Token inside `@layer main`                                                | library  | n/a        | library                          | n/a         | n/a      | n/a                              | **app**                          | same                                 |
| 13  | CSS Modules class via `className`                                         | app      | n/a        | app                              | n/a         | library  | app                              | app                              | same                                 |
| 14p | Tailwind v4 imported, no utilities (preflight only)                       | library  | **0px**    | **transparent**                  | library     | library  | library                          | **0px**                          | same                                 |
| 14a | Tailwind v4 utilities, Tailwind's default layers                          | app      | n/a (0px)  | app                              | n/a         | library  | app                              | app                              | same                                 |
| 14b | Tailwind v4 utilities, `@layer theme, base, fds, components, utilities;`  | app      | n/a (16px) | app                              | n/a         | library  | app                              | app                              | same                                 |
| 15  | styled-components `createGlobalStyle` (runtime `<style>`) via `className` | app      | n/a        | app                              | n/a         | library  | app                              | app                              | same                                 |

Counts over the 127 non-baseline cells (Measured): 64 app on both, 23 library on both, 3
"other" on both (14p, Tailwind's preflight), 31 n/a, 2 library on both with a different
library value (3 and 14p on `navbar-icon`: F17's flip, 18px vs 24px, not caused by the
consumer), and **4 different**.

Published alpha.14 (information only, it also differs in component code): the same as
`flat` in every cell **except 14 cells, all mechanism 9**. On alpha.14, every 9b and 9d
cell is "library" (except the textarea, "library" everywhere), and so is 9a
`input-group`. On both branch builds these are "app", except 9b `input-group` on
`styleedge`. The three 9c cells that differ are "library" on alpha.14, matching
`styleedge`, not `flat`. Causes below.

#### Why the 4 cells differ

All four are consumers writing into `@layer fds.<folder>` (Measured values; cascade rules
Read from CSS Cascade 5; the rule order is in the `.jsonl` `rules` field).

| Cell             | `flat`                                                                                                                             | `styleedge`                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 9b `input-group` | app: `fds.input-group` does not exist, so the consumer creates it **after `fds.all`**; a later layer wins whatever the specificity | library: same layer as the library rule, specificity ties at (0,2,0), and the library rule comes later in source order |
| 9c `button`      | app (new later sublayer)                                                                                                           | library: same layer, tie at (0,1,0), library later in source order                                                     |
| 9c `modal`       | app (new later sublayer)                                                                                                           | library: same layer, tie at (0,1,0), library later in source order                                                     |
| 9c `input-group` | app (new later sublayer)                                                                                                           | library: same layer, the library's (0,2,0) beats the consumer's (0,1,0)                                                |

In all 4 `styleedge` builds the consumer's rule came **before** the library's in source
order (Measured: consumer rule index 0, library 1 or 4, every build). That holds because
these pages import the consumer CSS before the components. The three ties are therefore
decided by load order, which is the original bug: a consumer whose CSS loads after the
components' would get "app" on those three (Assumed, not measured).

Mechanisms 7, 8, 9a, 9d and 12, which the brief expected to match, do match. 9b and 9c
are expected to differ: on `flat` a folder name is a new layer, on `styleedge` it is the
library's own layer. The brief's premise that "per-folder layers are inside `fds`" is
true. It only implies the same result when the consumer does not name a folder.

**Why alpha.14 differs from both branch builds on 9.** alpha.14 puts every component rule
directly in `@layer fds { … }` with no sublayer (Read: `button.styles_1jxad2l.css`
starts `@layer fds{.mf6do54{`). Rules placed directly in a layer beat all of its
sublayers. So on alpha.14 a consumer's `fds.<anything>` loses to every library rule (9b,
9d: library), and `@layer fds { }` shares the library's own layer (9a `input-group`: tie,
library later, library). On the branch builds the library moved into sublayers (`fds.all`
or `fds.<folder>`), so a consumer's `@layer fds { }` now beats all of them. **The
consumer-visible change on mechanism 9 comes from moving the rules into sublayers at all,
and it already happens with one sublayer (`flat`).** Per-folder layers add the 4 cells
above.

#### Layer names as API (mechanism 9)

Writing into `fds.<folder>` works, but what it does depends on the library's layer names:

-   On `styleedge`, writing into the target's own folder layer (9c) gives library on
    `button`, `modal` and `input-group`. Writing into a name the library does not declare
    (9d, the stand-in for a renamed layer) gives app on all three. **Renaming a folder
    layer would flip a consumer's result from library to app, silently** (Measured: 9c
    vs 9d on `styleedge`).
-   Moving a folder later in the generated order (a new style edge) changes which
    library rules a consumer's `fds.<folder>` rule beats. That is Read from the cascade
    order, not measured here.

So if consumers are allowed to write into `fds.<folder>`, the per-folder names and their
order become public API, and a rename or reorder is a breaking change. Not documenting
them, and saying so, avoids that.

What it shows:

-   **Q1 (Measured).** Consumer results differ between `flat` and `styleedge` in 4 of 127
    cells, all mechanism 9b or 9c (naming a library folder layer). Causes above:
    new-later-layer on `flat` versus same-layer specificity and source order on
    `styleedge`. Mechanisms 1 to 8 and 10 to 15 give the same result in every cell.
    That includes `!important`, tokens, CSS Modules, Tailwind v4 and runtime CSS-in-JS.
-   **Q2, `!important` (Measured, no difference).** Against the library's
    `background: … !important` on read-only Textarea, an unlayered `!important` (4)
    **loses** on all three libraries, while `!important` inside `@layer main` (5)
    **wins**. Normal declarations, including the inline `style` prop (6), lose. Read:
    important declarations reverse layer order, and unlayered `!important` is the
    weakest author `!important`, so `main` (declared before `fds`) beats the library's
    layered `!important`. That is the same with one layer or 85. On normal targets, 4
    and 5 both win, as expected. Not measured: a consumer `!important` written into
    `fds.<folder>`. By the same rules it would differ between `flat` (a new later
    sublayer is weaker for `!important`) and `styleedge` (same layer).
-   **Q3, tokens (Measured, no difference).** 10, 11a and 11b work identically on all
    three libraries, including the modal in its portal: the portal carries
    `data-fds-theme`, Measured `portalTheme=lifesg`. The brief's premise is wrong in one
    detail (Read, `theme/styles/lifesg.css` on both builds): tokens are **not** in
    `fds.theme`. They sit directly in `@layer fds { :root {…} [data-fds-theme="lifesg"]
{…} }`. `fds.theme` is declared in `styleedge`'s order statement but holds no rules.
    Token placement is therefore the same on every build, which is why 10 to 12 cannot
    differ. **12 is not uniform, on any build:** a token override inside `@layer main`
    loses for `--fds-colour-bg-primary`, which the library declares on
    `[data-fds-theme="lifesg"]`, the element the consumer's rule targets. It wins for
    `--fds-spacing-64`, which the library declares on `:root`, so nothing in `fds`
    competes on the theme element and the consumer's value is inherited. That is a
    pre-existing property of where tokens are declared, not of layering.
-   **Q4, Tailwind v4 and CSS-in-JS (Measured, no difference between libraries).**
    styled-components' runtime `<style>` (15) behaves exactly like bundled unlayered
    CSS (2). Tailwind v4 brings `@layer theme, base, components, utilities;`. Under the
    documented `@layer main, fds;` those four layers first appear after `fds`, so they
    all rank above it. Utilities win (14a), but **so does Tailwind's preflight**: with no
    utility at all (14p), the Timeline title margin goes 16px to 0, the Button
    background to transparent, and the Modal content margin 64px to 0. This happens on
    `flat`, `styleedge` **and published alpha.14**, so it is a hazard for today's
    consumers, not a layering regression. Declaring
    `@layer theme, base, fds, components, utilities;` before any other CSS (14b, with no
    `main, fds` statement in `globals.css`) restores the library (16px) and keeps
    utilities winning. With `@layer main, fds;` already first, the same Tailwind
    statement cannot move `fds`: page 14b under the documented globals still gives 0px
    on all three libraries (Measured).
-   **Portals (Measured).** A selector scoped to the app's wrapper never reaches Modal v2
    content (1p: library on all), because the modal renders outside that subtree.
    Scoping by the modal's own `className` works (1). Same on every library.
-   **Q5, guidance.** See the proposed troubleshooting text below. The only item the
    migration itself needs is "do not write into `fds.*` layers". The rest (`!important`,
    tokens in `main`, Tailwind, portals) behaves the same on alpha.14 and is missing
    from today's docs.

What it does **not** show:

-   Source order in the three 9c/9b ties with the consumer CSS loaded **after** the
    components. It is Assumed to flip them to app, so those cells are order-dependent,
    not fixed results.
-   Consumer `!important` inside `fds.<folder>`, Tailwind's order statement combined with
    `main` (for example `@layer main, theme, base, fds, components, utilities;`), dark
    mode token selectors, and Tailwind through `@tailwindcss/postcss`. Tailwind was
    compiled by its CLI into a static file, to avoid adding a `postcss.config` that
    would change every route of the e2 app. The cascade result depends on the emitted
    layers, which are the same, but the pipeline was not measured.
-   styled-components with SSR (a registry). Only client-side injection was measured.
-   Other browsers (Chromium only), Next dev mode, mobile viewports, and interaction
    states.
-   The F17 flip itself through an override. The `navbar-icon` library value differs
    (18px vs 24px), but every consumer mechanism that reaches it wins on both.
-   `input-group` is a plain read-only InputGroup, not the OTP-verification usage where
    F17's `[data-read-only]` flip occurs.

What didn't work, kept for the record: the first `useApplyStyle` page (11b) gave no
override. I had called the hook in a child of `ThemeProvider`, whose layout effect runs
before the parent's ref is attached. Calling it where the docs show, in the component
that renders `ThemeProvider`, works. The intended-winner list was committed before
measuring `flat`. `styleedge` had been seen in two test runs before that.

#### Proposed replacement text (for review; `01-css-layers.md` is untouched)

Verdict, "Consumer migration path" row, replacing "App overrides behave exactly as today":

> **One requirement, stricter than the documented setup.** Import the theme stylesheet as
> a bundled import in the outermost layout that renders any library component. A
> nested-layout import or a CDN `<link>` silently falls back to load order (F15). Several
> themes and runtime switching are fine. **App overrides give the same result as a
> single-layer build for every documented route and every common one measured
> (unlayered CSS, `@layer main`, `!important`, inline style, tokens, CSS Modules,
> Tailwind v4, runtime CSS-in-JS: 92 of 96 applicable cells, F19). The exception is CSS written
> into the library's own layers (`@layer fds.<folder>`), which changes result and becomes
> load-order dependent. Per-folder layer names must stay private and be documented as
> such.** Moving the library from rules directly in `fds` (alpha.14) into sublayers
> already changes `@layer fds { }` and `@layer fds.* { }` overrides, with one sublayer
> too.

Evidence column: `F5, F12, F15, F19`.

F12, replacing the bullet "**E6, consumer overrides behave the same as today.** …":

> -   **E6, the two overrides probed behave the same as today.** An unlayered app rule
>     beats the library on both builds, and an app rule inside `@layer main` loses on
>     both builds. `@layer main, fds;` (the troubleshooting doc and the e2e app's
>     `globals.css`) makes `fds` the later, stronger layer. That is the doc's stated
>     purpose, so it is intended, not a layers regression. F19 extends this to 15
>     mechanisms and 6 targets: the same result on single-layer and per-folder builds,
>     except for rules written into `@layer fds.<folder>`.

#### Proposed troubleshooting wording (a proposal, for `stories/getting-started/troubleshooting.mdx`)

> ## Overriding component styles
>
> Component styles live in the `fds` cascade layer. Which of your styles win depends on
> where you put them:
>
> -   **Unlayered CSS always beats component styles**, whatever its specificity. This
>     includes CSS Modules, styles injected at runtime by CSS-in-JS libraries, and the
>     `style` prop. This is the recommended way to override.
> -   **CSS in `@layer main` loses to component styles** when you declare
>     `@layer main, fds;` as recommended above. Use it for base styles that components
>     should override.
> -   **Do not write into the library's layers** (`@layer fds { }` or `@layer fds.* { }`).
>     Their names and order are internal and can change in any release. The same rule can
>     win or lose depending on the version and on CSS load order.
> -   A few states use `!important` (for example the background of read-only inputs and
>     text areas). An unlayered `!important` does **not** override them. To override,
>     use `!important` inside an earlier layer such as `@layer main`.
> -   Components rendered in a portal (Modal, for example) are outside your app's root
>     element. Target them through the `className` you pass to the component, not through
>     a selector scoped to your layout.
>
> ### Design tokens
>
> Override tokens unlayered on `[data-fds-theme="<theme>"]`, or through `ThemeProvider`'s
> `style` prop or `useApplyStyle`. Do not put token overrides inside `@layer main`: some
> tokens will apply and others will not.
>
> ### Tailwind CSS v4
>
> Tailwind declares its own layers. If they come after `fds`, Tailwind's preflight resets
> component margins, paddings and backgrounds. Declare the order once, before any other
> CSS, with `fds` after Tailwind's `base`:
>
> ```css
> @layer theme, base, fds, components, utilities;
> ```
>
> _(Proposal note: measured without `main` in the statement. A combined
> `@layer main, theme, base, fds, components, utilities;` is not measured yet.)_
