# 01 - Native CSS layers for deterministic order

Status: In progress | Owner: TBD | Branch: `rl/css-layers`
Timebox, decision owner, exit criteria and stop conditions: see the charter in
[README.md](README.md).

## Question

Can a static layer order of native CSS Cascade Layers give the same cascade
across Next 16 production builds, regardless of how Turbopack/webpack chunk and
order CSS, without redeclaring variants in children or hand-ordering layers
per variant relationship? Sub-questions from the spec:

1. Consumer migration path: what do existing apps need to change?
2. Granularity: per-component (~85 layers) vs coarse groups.
3. Parent/child variant inheritance and consumer overrides: does a viable
   mitigation exist?

## Starting point (Read)

-   Every component CSS file is already wrapped in a single `@layer fds`
    (`rollup.config.js`, postcss `postcss-layer` plugin) and theme CSS too. This
    fixes consumer-vs-library specificity only. Order _inside_ `fds` is still
    source order, which is what chunking scrambles.
-   `rl/css-layers` (commit `93cd86ede`) nests a per-folder layer
    (`fds.<folder>`) and generates the layer order statement into the theme CSS
    via `rollup/add-css-layer-plugin.js`. The order comes from a `madge` import
    graph, folder-level, DFS post-order (dependencies first = lowest priority).
-   Styles are Linaria `css` class names (165 `*.style(s).ts` files), not
    `styled(X)`. Overrides happen through class composition and cross-class
    selectors, not component wrapping.

## Findings so far

Only F1 and F3 are Measured, and only as a static scan. Nothing here has been
checked against a real Next build yet, so none of it feeds a verdict.

### F1. The import graph has cycles (Measured, static scan)

Reproduce: `node docs/spike/scripts/folder-cycles.mjs` (regex import scan over
`src/` grouped by top-level folder; type-only and dynamic imports count as
edges). Folder-level graph, 85 folders, not madge:

-   Cyclic group A: `alert, button, shared, toggle, typography`
-   Cyclic group B: `form, input-textarea, otp-verification, time-range-picker`

A layer order is a total order, so cycles cannot be honoured. The branch's DFS
skips back edges (`if (!onStack.has(dep))`), so the order inside each group is
decided by alphabetical iteration, silently. That is deterministic but not
_meaningful_. Needs a decision: collapse each group into one layer, or break
the cycle at the real style edge.

### F2. JS import direction is the wrong signal for style priority (Assumed, needs check)

The branch puts dependencies _before_ dependents, so the importer wins. That
is right when the importer overrides the imported component (e.g.
`input-multi-select` styling `Tag`). It is wrong when the imported
component is the base and the importer is a variant of it, if the _base_
needs to win for some selectors. This is the spec's "child layer disregards
parent variant" case. JS imports also include non-style edges (types,
hooks, helpers) that add false constraints and cycles.

### F3. Hub folders (Measured, same scan as F1)

Most depended-on: `theme` 76, `shared` 59, `typography` 38, `button` 18.
Most outgoing: `form` 26, `schedule` 9. `shared` and `theme` are natural
base layers; `form` sits high in the order.

### F4. Cross-class selectors are the real conflict surface (Measured count, Assumed relevance)

Reproduce: `grep -rnE '\$\{[a-z][A-Za-z]*\}' src --include='*.style.ts' --include='*.styles.ts'`
with token names (`Colour`, `Font`, `Spacing`, ...) filtered out. 69 hits,
e.g. `.${link}:hover &` in `navbar-items.styles.ts`. Most look intra-folder
(same layer, so unaffected), but this is not yet counted. The spike must count
only the **cross-folder** ones; those are the edges where layer order changes
the outcome.

### F5. E0: the order statement works when its file loads first (Measured, narrow)

Reproduce: `RUNS=5 docs/spike/experiments/e0/run.sh` (Next 16.3.6, node 25.6.1,
headless Chromium; build output was not committed). Each scenario below gave the
same result on all 5 rebuilds of each bundler, with an identical CSS load order
every time. Two files each set
`.target`'s background in a different layer, with `fds.top` meant to win.
`top.css` is imported before `base.css`, the reverse of the wanted priority.
The order statement `@layer fds.base, fds.top;` lives in `order.css`.

| Scenario            | Where `order.css` is                                                                | webpack              | Turbopack |
| ------------------- | ----------------------------------------------------------------------------------- | -------------------- | --------- |
| with-order          | imported by the route's layout (loads first)                                        | green (fds.top wins) | green     |
| no-order            | not imported                                                                        | red (fds.base wins)  | red       |
| order-late          | imported last, after the layered files                                              | red                  | red       |
| no-layers (control) | n/a, plain CSS in the same import order                                             | red                  | red       |
| nested-with-order   | as with-order, but rules use the `rl/css-layers` shape `@layer fds { @layer x {} }` | green                | green     |
| nested-no-order     | as no-order, nested shape                                                           | red                  | red       |
| nested-order-late   | as order-late, nested shape                                                         | red                  | red       |

The nested rows keep the statement as `@layer fds.base, fds.top;` (dotted
names) while the rules are written as nested blocks; the dotted and nested
forms address the same layers.

What it shows:

-   Both bundlers emit the statement unchanged. It does not need to be hoisted
    by us: the browser takes layer priority from the **first** appearance of each
    layer name in the final CSS, so the statement works only if it is earlier
    than any rule that mentions the layer. `order-late` fails for that reason.
-   The statement's file has to load before every layered file. In this test the
    layout-level import did that, on both bundlers.
-   Layers are not a free fix for source order: without a statement (`no-order`)
    the result is still decided by import order, same as the unlayered control.

What it does **not** show (so the charter's riskiest assumption is only half
tested):

-   The original bug was not reproduced. Both bundlers loaded files in import
    order every time. I did not force a reordering, so "forced chunk reversal"
    in the E0 row was not done. Whether Turbopack can load the statement's
    file after layered files in a real app is E2's job.
-   One page, two tiny files, no shared chunks. Real routes share CSS across
    chunks, which is where reordering is reported.
-   Only prod builds were measured. Five rebuilds each is enough to see build-to-build
    noise on these tiny inputs, not enough to rule out rare reordering.
-   Nested layers were tested with two sibling layers under one `fds` parent. The
    branch's real output has up to ~85 folder layers plus component CSS wrapped
    in `fds`; not tested at that size.
-   Running the servers and Chromium needed the sandbox lifted (port binding,
    Mach port); the numbers come from that unsandboxed run.

### F6. E2 (partial): bundlers order library CSS differently, but the one override pair probed was never wrong (Measured)

Reproduce: `RUNS=2 docs/spike/experiments/e2/run.sh` (published
`@lifesg/react-design-system` 4.0.0-alpha.3, Next 16.3.6, prod builds, headless
Chromium; 64 measurements in `e2/results/published.jsonl`). One static route per
story, so each page bundles only its own CSS. For each route the script records
the order in which library components' rules appear in `document.styleSheets`,
and for the error-display routes a computed-style probe.

**Combinations.** Next rejects `strict` under Turbopack and `graph` under webpack
(each is "only supported with" the other bundler), so the matrix is Turbopack
default, Turbopack `graph`, webpack default and webpack `strict`. The option the
two teams used, `graph`, exists only on Turbopack.

**Override probe.** `ErrorDisplay` passes `Typography.HeadingMD` a class with
`margin: 32px 0 16px`; Typography's own class sets `margin-bottom: 0`. The
parent is meant to win (16px). Result: **16px in all 4 combinations, both
rebuilds, both error-display routes.**

**CSS order differs by bundler, same on both rebuilds of each:**

| Route               | Turbopack default                                      | Turbopack `graph`                                      | webpack default                                                   | webpack `strict`          |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------- |
| error-display       | `shared>button>markup>shared>typography>error-display` | `shared>button>markup>typography>error-display>shared` | `shared>button>markup>typography>shared>typography>error-display` | same as Turbopack `graph` |
| alert/type-variants | `markup>shared>typography>alert`                       | `markup>typography>shared>alert`                       | `markup>typography>shared>typography>alert`                       | same as Turbopack default |

Other routes (tab, badge, button, tag) gave one order across all four.

What it shows:

-   The bundlers do not agree on component CSS order, and the order depends on
    the route, so ordering is bundler-dependent. That is the precondition for the
    reported bug.
-   Webpack default lists `typography` twice (before and after `shared`), so its
    CSS is split across sheets. In Turbopack `graph`, `shared` moves after
    `error-display`.
-   On the probed pair `typography` always comes before `error-display`, so the
    parent wins in every combination. This pair cannot show the bug.

What it does **not** show:

-   **The bug is not reproduced.** No computed style was wrong in any run. The
    teams' symptom needs an override pair whose order actually flips.
-   One probe pair. The same-order result on it says nothing about other pairs.
-   An earlier run with a dynamic-import route showed identical order on every
    page; that was an artefact of bundling all stories together and is withdrawn.
-   Published build only (no layers). `LIB=local` is untested.

### F7. E2 (cap reached): none of 6 parent-overrides-Typography pairs was wrong (Measured)

Reproduce: `RUNS=2 docs/spike/experiments/e2/run.sh` (same setup as F6; 96
measurements in `e2/results/published.jsonl`). Candidates came from
`node docs/spike/scripts/typography-overrides.mjs`, which lists 48 places where
a component passes a `className` to `Typography.*` and that class sets a
property Typography's own classes also set (regex scan, same-folder style files
only). I probed one per area, up to the agreed cap of five new pairs plus the
earlier error-display pair.

| Pair (parent class on `Typography.*`) | Property      | Parent's value                   | Wrong in any combination? |
| ------------------------------------- | ------------- | -------------------------------- | ------------------------- |
| error-display title                   | margin-bottom | 16px                             | No                        |
| menu section label                    | color         | `text-subtler` (rgb 104,104,104) | No                        |
| timeline title                        | margin-bottom | 16px                             | No                        |
| toast description                     | color         | inherit (rgb 28,90,52)           | No                        |
| footer download label                 | margin-bottom | 16px                             | No                        |

Each was checked on Turbopack default, Turbopack `graph`, webpack default and
webpack `strict`, 2 rebuilds each (8 builds per pair), against the value the
parent's class sets.

The component CSS order did differ between bundlers on some routes (menu: `markup`
and `typography` swap; toast: Turbopack `graph` adds a second `shared`), but on
every probed route `typography` still came **before** the parent component.

**Re-run on alpha.14.** `4.0.0-alpha.14` is the current `latest`, so the same
matrix was re-run against it (`e2/results/published.jsonl`; the alpha.3 numbers
are kept in `published-alpha3.jsonl`). All six probes were again correct in every
combination. The component CSS order matched alpha.3 in 47 of 48
route-and-combination pairs; the one difference was `card` moving ahead of
`markup` on the menu route under Turbopack `graph`. alpha.14 is still a single
`@layer fds` with no per-folder layers. One probe needed a change: alpha.14
renders the menu section label as a sibling of the list, so the probe now finds
it through `aria-labelledby`.

What it shows:

-   On these pairs the parent wins everywhere, so the cascade is not what breaks
    here. This does not match the teams' report.
-   Order differences between bundlers exist (F6), but they did not move the
    child's CSS after its parent's on any of these routes.

What it does **not** show (so E2 is "not reproduced", not "bug disproved"):

-   5 of 48 candidate pairs, all `Typography` as the child. Other children
    (`Button`, `Tag`, `Badge`, `shared` input wrappers) are untested.
-   Each route is a single story with a trimmed layout and one theme. The report
    came from real apps with many routes sharing chunks, where a child's CSS can
    be pulled in by an earlier route. Static single-route pages cannot do that.
-   Published build, prod mode only. Dev, where the teams say it works, was not
    compared. `LIB=local` is untested.

### F8. E2 reproduced: a parent-overrides-child style is wrong on Turbopack default and webpack default, never on `graph` or `strict` (Measured)

Reproduce: `RUNS=2 docs/spike/experiments/e2/run.sh`, then
`docs/spike/experiments/e2/ab.sh` (published `4.0.0-alpha.14`, Next 16.3.6, prod
builds, headless Chromium, 1280px viewport). Context: the Next.js docs say CSS
order follows import order, that stylesheets are not removed on client
navigation, and that prod splits CSS into many files; this is why F6 and F7,
which used single-route pages, could not fail. E2 now also builds `/nav/*`, a
second route group with a shared layout, 8 routes importing the same stories in
different combinations (`combo-a`, `combo-b`), and links for client-side
navigation. `measure-nav.mjs` hard-loads every route and navigates between every
ordered pair (56), probing the pair on arrival (`probes.mjs`).

**Result.** One probe is wrong: `timeline title` computes `margin-bottom: 0px`
where the parent's class sets `1rem` (16px). A second, `footer download label`
(`margin-bottom` 0px vs 16px), is wrong on webpack default only. 352 probe
results per combination, identical across both rebuilds (0 of 352 cells differ).

| Bundler / `cssChunking` | Hard loads: ok / wrong | Client navigation: ok / wrong |
| ----------------------- | ---------------------- | ----------------------------- |
| Turbopack default       | 20 / 2                 | 150 / 4                       |
| Turbopack `graph`       | 22 / 0                 | 154 / 0                       |
| webpack default         | 16 / 6                 | 144 / 10                      |
| webpack `strict`        | 22 / 0                 | 154 / 0                       |

-   The teams' fix, `graph` (Turbopack), had no wrong result here and the default
    did, which is consistent with their report. `strict` (webpack) also had none,
    but it was not a reported fix; I added it to the matrix. Neither is proven safe
    for other pairs.
-   The failure is not caused by navigation: hard loads are wrong too. It depends
    on the build's route set.

**A/B: adding routes changes an existing page.** The static page
`/components/timeline/default` is identical in both builds, and Turbopack default
gives:

| Build                 | `timeline title` margin-bottom | Component CSS order on that page  |
| --------------------- | ------------------------------ | --------------------------------- |
| without `/nav` routes | 16px (correct)                 | `pill>shared>typography>timeline` |
| with `/nav` routes    | **0px (wrong)**                | `pill>timeline>shared>typography` |

In the wrong build the child's (`typography`) rules come after the parent's
(`timeline`), so the child wins. This is the reported symptom. Why the bundler
moves `typography` is not traced (see below). Next.js issue #11448 describes a
related chunk-order problem, but that is a 2020 report on a different Next
version that I only saw as a summary, so I am not treating it as an explanation.

What it shows:

-   A minimal, deterministic reproduction exists: take the A build, add routes
    that import `Timeline` alongside other stories, and the title margin changes.
-   It is order-dependent and invisible on the component's own page; the break
    appears because of other routes.
-   `graph` and `strict` only order differently; the Next.js docs do not
    guarantee import order under `graph` either.

**Dev mode (`run-dev.sh`).** Matching the report that it works in dev: with the
same routes, `next dev` on Turbopack and on webpack gave 0 wrong of 13 probes
each (10 pages hard-loaded: the 8 `/nav` routes plus the static timeline and
footer pages). On those pages the order is `pill>shared>typography>timeline`,
the same as the correct production build without `/nav`, so in dev the child
stays before the parent. The prod builds with the same `/nav` routes put
`typography` after `timeline`. Dev was a single run per bundler.

What it does **not** show:

-   Why Turbopack and webpack default place `typography` after `timeline` here. I
    did not trace the chunk graph.
-   Only 2 of 6 probed pairs break (timeline title, footer label). `error-display`,
    menu, toast and the Button child (banner) were correct everywhere.
-   The `/nav` pages are synthetic combinations of stories, not a real app.
-   Published build, no layers. This is the baseline E3 must fix.
-   Dev mode: one run per bundler, hard loads only (dev compiles routes on demand,
    so client navigation was skipped).

## Planned experiments

Ordered by risk, riskiest first (see the charter's riskiest assumptions).

| ID  | Experiment                                                                                                                                                                                                                                               | Output                           | State                                                                                            |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| E0  | Does Next 16 (Turbopack and webpack) preserve a `@layer a, b;` order statement from an imported CSS file in a prod build? Minimal app, 2 components, forced chunk reversal                                                                               | Pass/fail per bundler            | In progress: nested layers and repeat runs done (F5); forced reordering and dev mode moved to E2 |
| E5a | One real parent/child variant pair (pick from the E1 cross-folder list, or by hand) under per-folder layers: does the parent's variant styling survive? Try (a) collapsed layer, (b) specificity bump in the parent's layer, (c) per-edge `@layer` order | Table of options and which works | Todo                                                                                             |
| E1  | Extract **style-only** edges (cross-folder class refs, composed classes) instead of JS imports; compare to the madge order                                                                                                                               | Edge list, cycle list            | Todo                                                                                             |
| E2  | Reproduce the failure: Next 16 prod build, Turbopack, `cssChunking: "strict"` vs `"graph"`, in `e2e/nextjs-app` (see `BOOKINGSG-9316`)                                                                                                                   | Repro + screenshots              | Reproduced in prod, not in dev (F8)                                                              |
| E3  | Same app with the branch's layered build; does order stay stable across 5+ builds and across entry points?                                                                                                                                               | Pass/fail per build              | Todo                                                                                             |
| E4  | Granularity: 3 tiers (`base`, `components`, `overrides`) vs per-folder; count how many visual diffs each produces (Playwright screenshots)                                                                                                               | Diff counts                      | Todo                                                                                             |
| E5b | Extend E5a to every cross-folder edge from E1                                                                                                                                                                                                            | Full edge table                  | Todo                                                                                             |
| E6  | Consumer overrides: consumer unlayered CSS and consumer `@layer main, fds` ordering still win/lose as documented                                                                                                                                         | Pass/fail                        | Todo                                                                                             |
| E7  | Migration: what must consumers add? Is the `default.css` order statement mandatory, what if it loads late or not at all                                                                                                                                  | Checklist                        | Todo                                                                                             |

## Granularity hypothesis (to test in E4, not yet a finding)

Coarse tiers avoid most cycle problems because only the tier order must be
acyclic: `fds.theme < fds.base(shared, typography) < fds.components < fds.composites(form, schedule, ...)`.
Cost: within a tier, order is source order again, so the original bug
survives for same-tier overrides. Per-folder fixes that but exposes F1/F2.
A hybrid (tiers plus per-folder layers only for known same-tier edges) is the
likely answer.

## What didn't work

Nothing recorded yet. Add dead ends here as they happen.

## Alternatives considered

See [02-alternative-paths.md](02-alternative-paths.md).

## Verdict

TBD. Do not adopt until E2 reproduces the bug and E3 shows the layered build
fixes it.

## Open questions

-   Does Next/Turbopack hoist or reorder a leading `@layer a, b;` statement when
    it lives in an imported CSS file, or only layers' _contents_? (E0)
-   Browser support floor for nested `@layer fds { @layer x {} }` in our
    supported matrix.
-   Does Linaria extraction keep `@layer` blocks intact in dev (`next-with-linaria`)?

## Follow-up tickets

TBD after the verdict. Production work is a rewrite, not a promotion of the
`rl/css-layers` spike code.
