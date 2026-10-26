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

### F9. E3: the per-folder layered build gives the parent's style on every probe, including the pair that broke in F8 (Measured)

Reproduce: at the repo root `npm run build` on `gz/css-layers` (the
`rl/css-layers` layer plugin, 83-name order statement in
`dist/theme/styles/*.css`), then `LIB=local RUNS=2 docs/spike/experiments/e2/run.sh`
(results in `e2/results/local.jsonl` and `local-nav.jsonl`). Same app, routes,
probes and matrix as F8; only the library differs. `run.sh` swaps the library by
symlinking `node_modules/@lifesg/react-design-system` to `dist/`, and refuses to
continue if a build has fewer than 6 distinct layer names in its CSS.

**Result: 0 wrong of 704 probe results (352 per run, 2 runs), in all four
combinations, hard loads and client navigation.** The F8 failures (timeline title
on Turbopack and webpack default, footer label on webpack default) are correct.

**Source order did not change; the layers made it irrelevant.** On the timeline
page the component CSS still arrives in the broken order on the defaults:

| Bundler / `cssChunking`              | Source order, published (F8)      | Source order, layered | Timeline title |
| ------------------------------------ | --------------------------------- | --------------------- | -------------- |
| Turbopack default                    | `pill>timeline>shared>typography` | same                  | 16px (was 0px) |
| webpack default                      | `pill>timeline>shared>typography` | same                  | 16px (was 0px) |
| Turbopack `graph` / webpack `strict` | `pill>shared>typography>timeline` | same                  | 16px           |

`typography`'s rules still come after `timeline`'s, but `fds.typography` is
position 4 and `fds.timeline` position 80 in the order statement, so the parent's
layer wins regardless of where its rules appear. This is the mechanism the spike
was asking about.

Why it works here, and what it depends on:

-   The order statement lives in the theme stylesheet, which the story layout
    imports, so it reaches the page before the component CSS. E0 (F5) showed the
    statement has no effect if it loads after the layered rules.
-   For every probed pair the parent's folder is later in the generated order than
    the child's (`typography` 4, `button` 9 vs error-display 21, footer 57, menu 63,
    smart-app-banner 73, timeline 80, toast 82). The order comes from the JS import
    graph, where parents import children, so this holds for these pairs. It would
    not hold for a pair inside a cycle (F1: `alert, button, shared, toggle,
typography`), which was not probed.

Setup problem found on the way (recorded so it is not repeated): a Turbopack
`resolveAlias` on the package name does **not** apply to its subpath imports
(`@lifesg/react-design-system/timeline`) and silently builds the installed
package instead. An earlier E3 attempt measured the published build on Turbopack
for that reason; it is discarded. The symlink plus the layer guard replace the
alias.

What it does **not** show:

-   Pairs inside the F1 cycles, and the other 42 of the 48 Typography override
    candidates.
-   The consumer side: an app that imports the theme stylesheet late, not at all,
    or declares its own `@layer` order first (E6, E7).
-   Granularity: per-folder vs coarse tiers (E4).
-   Only 2 rebuilds per combination, the synthetic `/nav` routes, one theme, one
    viewport. Dev mode not re-run on the layered build.

### F10. E5a: per-folder layers break a parent's override where the generated order is inverted, in every combination (Measured)

Reproduce: `node docs/spike/scripts/layer-inversions.mjs` (needs the layered
`dist/`), then `TAG=e5a LIB=published RUNS=2` and `TAG=e5a LIB=local RUNS=2`
`docs/spike/experiments/e2/run.sh` (results in `e2/results/*-e5a*.jsonl`, log in
`run-e5a.log`). `e2/probe-one.mjs` traces one probe: every rule setting the
property on the element, with its layer path.

**Scan.** `layer-inversions.mjs` lists every place a component passes
`className={styles.x}` to a component from another `src/` folder where both set
the same property: 197 such overrides. Under per-folder layers the later layer
wins, so an override is at risk when the parent's folder comes _before_ the
child's in the generated order. 2 folder pairs are:

| Parent (order position) -> child     | Where                                                                  | Property                          | Real?                                                                                                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `input-textarea` (44) -> `form` (54) | `textarea.tsx`, `<FormErrorMessage className={styles.errorMessage}>`   | `margin-top`: parent 0, child 8px | **Yes, measured below**                                                                                                                          |
| `shared` (8) -> `button` (9)         | `timepicker-dropdown.tsx`, `<Button className={styles.controlButton}>` | `width`                           | No: Button's only own `width` rules are icon-only (`width: auto`) and `min-width`; the timepicker buttons are not icon-only, so nothing collides |

Both pairs are inside the F1 cycles (`form, input-textarea, ...` and
`alert, button, shared, ...`): `form` imports `Textarea` and `input-textarea`
imports `FormErrorMessage`; `shared` and `button` import each other. The DFS in
`rl/css-layers` breaks the cycle in an arbitrary direction, and here it chose the
direction against the override.

**Result.** Textarea error message `margin-top`, 72 measurements per library
(hard loads and client navigation, 4 combinations, 2 rebuilds):

| Library                                  | All four combinations      | Rules on the error wrapper (traced)                                                    |
| ---------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------- |
| Published alpha.14 (single `@layer fds`) | **0px, correct**           | `fds .e1g4xpi9 8px` and `fds .e1mvywhi 0px`: same layer, parent's rule later in source |
| Layered (`fds.<folder>`)                 | **8px, wrong, every time** | `fds.form .e1g4xpi9 8px` beats `fds.input-textarea .e1mvywhi 0px`                      |

The F8 pairs stayed correct on the layered build in the same run (timeline title
16px and footer label 16px everywhere), so the layered build fixes F8 and breaks
this pair at the same time.

What it shows:

-   The spec's blocker is real and measurable: a per-folder layer order silently
    overrides a parent's styling of a child whenever the order puts the child later.
    Unlike F8 it is not intermittent: it is wrong on every bundler and chunking mode,
    hard load or navigation, which makes it easy to catch but certain to ship if
    not checked.
-   It is rare in the current code: 1 real case out of 197 cross-folder overrides,
    and it sits exactly where the import graph has a cycle. A cycle-free order
    computed from style edges (E1), or an explicit order for the cycle members,
    would avoid this case.

What it does **not** show:

-   The scan is a regex over same-folder style files. It misses overrides built
    with `clsx(...)` expressions spread across lines, classes passed through props,
    and `cx` in non-tsx files, so 197 and "1 real" are lower bounds, not counts.
-   Specificity bumps or a collapsed layer for the cycle (E5 options b and c) were
    not tried.

Correction to an earlier run: a first run of this probe reported the textarea
pair as correct on the layered build. The probe was reading the textarea's
wrapper (the story's `data-testid` is on the `<textarea>`), which has no
`margin-top` rule. The probe now resolves the error through `aria-describedby`;
the results above are from the corrected probe.

### F11. E5b: an explicit order for the cycle fixes F10 and keeps F9, with 0 wrong on all 7 probes (Measured)

Reproduce: `node docs/spike/scripts/layer-inversions.mjs <cycle members>` to list
the overrides inside each F1 cycle, then
`node docs/spike/scripts/reorder-layers.mjs form input-textarea` (rewrites the
order statement in the 20 built `dist/theme/styles/*.css`; undo by rebuilding), then
`TAG=e5b LIB=local RUNS=2 docs/spike/experiments/e2/run.sh` (results in
`e2/results/local-e5b*.jsonl`, log in `run-e5b.log`).

**Can an order satisfy the cycles at all?** Only if no two members override each
other in opposite directions. Listing every override among each cycle's members:

| Cycle                                                       | Overrides among members                                          | Direction conflicts                                                             |
| ----------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `form, input-textarea, otp-verification, time-range-picker` | 1: `input-textarea -> form`                                      | None: one direction, so `form` before `input-textarea` satisfies it             |
| `alert, button, shared, toggle, typography`                 | 10, all satisfied by the current order except `shared -> button` | None real: `shared -> button` is the F10 false positive (no colliding property) |

So both cycles are satisfiable. The import graph just does not tell the DFS which
direction the styling goes, so it guessed, and guessed wrong once.

**Result.** With `fds.form` moved from position 54 to 44 (before
`fds.input-textarea`, now 45) and nothing else changed, the layered build gave
**0 wrong of 912 probe results** (48 static, 864 navigation) across all four
combinations, hard loads and client navigation. An earlier version of this finding
said 832; re-tallying `local-e5b*.jsonl` gives 912.

| Probe                               | Value in every combination | Before the reorder |
| ----------------------------------- | -------------------------- | ------------------ |
| textarea error message margin-top   | 0px (correct)              | 8px (F10)          |
| timeline title margin-bottom        | 16px (correct)             | 16px (F9)          |
| footer download label margin-bottom | 16px (correct)             | 16px (F9)          |
| the other 4 probes                  | correct                    | correct            |

What it shows:

-   The spec's "declare custom orders per variant relationship, layer management
    hell" option is not hell here: the whole fix was one move, because there is one
    real inverted pair. The cost is not hand-ordering 83 layers; it is making the
    generator order by **style** edges (who passes a class to whom) instead of JS
    imports, and failing the build on a real cycle.
-   A per-folder layer order can satisfy every measured parent-overrides-child pair
    in this library at the same time.

What it does **not** show:

-   That the generator can be fixed: this was a hand edit of built CSS, standing in
    for a change to `rollup/add-css-layer-plugin.js`. Ordering from style edges (E1)
    is still to build.
-   That the order stays correct as the code changes. A new override against the
    order reintroduces F10 silently, so a production version needs a check (the
    scan, or a build-time error), not just a better order.
-   Coverage beyond the scan's lower bound (F10's regex limits) and the 7 probes.

### F12. E6, E7: the layer order only applies if the theme stylesheet loads first; otherwise it falls back to load order (Measured)

Reproduce: `LIB=local RUNS=2` and `LIB=published RUNS=2`
`docs/spike/experiments/e2/run-consumer.sh` (results in
`e2/results/{local,published}-consumer.jsonl`, log in `run-consumer.log`). `dist/`
was rebuilt to the branch's generated order first (no F11 reorder), so this is what
the branch would ship. Five `/consumer/*` routes each render the timeline pair
(parent's layer later in the order) and the textarea pair (parent's layer earlier,
F10). Turbopack default and webpack default, 2 rebuilds; every value was the same
across bundlers and rebuilds. `measure-consumer.mjs` also records where each
`fds.<folder>` name **first appears** in the page's CSS, which is what decides its
priority.

| Scenario (consumer app does)                                        | Order statement first? | Timeline title (16px) | Textarea error (0px)                                 | App override (40px)                 |
| ------------------------------------------------------------------- | ---------------------- | --------------------- | ---------------------------------------------------- | ----------------------------------- |
| **Layered build**                                                   |                        |                       |                                                      |                                     |
| `theme-first`: theme stylesheet, then components (documented setup) | yes                    | 16px                  | **8px (F10)**                                        | n/a                                 |
| `theme-late`: components, then theme stylesheet                     | **no**                 | 16px                  | 0px                                                  | n/a                                 |
| `no-theme`: never imports a theme stylesheet                        | **no**                 | 16px                  | 0px, **not a cascade result** (see correction below) | n/a                                 |
| `app-unlayered`: theme first + unlayered app rule                   | yes                    | 40px (app wins)       | 8px                                                  | yes                                 |
| `app-layered`: theme first + app rule in `@layer main`              | yes                    | **16px (app loses)**  | 8px                                                  | **no**                              |
| **Published alpha.14 (single `@layer fds`)**                        |                        |                       |                                                      |                                     |
| all five                                                            | no statement exists    | 16px                  | 0px                                                  | unlayered wins, `@layer main` loses |

What it shows:

-   **E7, load order matters.** The order statement only takes effect if the
    theme stylesheet reaches the page before any component CSS. In `theme-late` and
    `no-theme` the statement is not first, so each `fds.<folder>` layer ranks by
    where its rules first appear: the per-folder order silently degrades to
    load order, which is the bundler-dependent order the layers were meant to
    remove. In `theme-late` the textarea is _correct_ only because this load order
    happens to put `input-textarea` after `form`; on routes with a different chunk
    order it could go either way. Consumers would need a rule: "import the theme stylesheet
    in the root layout, before anything else".
-   **E7, no-theme also loses the design tokens.** It is not a supported setup.
    **Correction (found in E4, F14):** the `no-theme` textarea value is not a
    cascade result. The child's rule is `margin-top: var(--fds-spacing-8)`, and with
    no theme stylesheet `--fds-spacing-8` is undefined, so whichever rule wins, the
    value computes to 0px. An earlier version of this bullet said the probed
    properties do not depend on tokens; for the textarea that was wrong. The timeline
    values are genuine (its rules are literal `1rem` and `0`).
-   **E6, consumer overrides behave the same as today.** An unlayered app rule
    beats the library on both builds. An app rule inside `@layer main` loses on
    both builds: `@layer main, fds;` (the troubleshooting doc and the e2e app's
    `globals.css`) makes `fds` the later, stronger layer. That matches the doc's
    stated purpose, "styles from main.css take precedence over component styles"
    being the problem it solves, so it is intended, not a layers regression.
    Per-folder layers sit inside `fds` and do not change this.

Correction to my earlier read of the smoke test: I called the `app-layered`
result "the doc's advice inverts the consumer's expectation". The published
build behaves identically, and the doc says this ordering is intended to let the
library win over `main`, so that was wrong.

What it does **not** show:

-   Whether `theme-late` can happen in a real app. It needs the theme stylesheet
    imported below components in the module graph; the documented setup imports it
    at the root, which loads first in these builds. Not tested: themes switched at
    runtime, or a CDN-loaded theme (the e2e app loads some CSS from `/cdn`).
-   More than these two pairs per scenario, or Next dev mode.

### F13. E1: the generator can order layers from style edges and fail the build on a style cycle; 0 wrong of 912 (Measured)

Reproduce: `node docs/spike/scripts/style-order.mjs` from the repo root (output in
`e2/results/style-order.txt`), then `npm run build` and
`TAG=e1 LIB=local RUNS=2 docs/spike/experiments/e2/run.sh` (results in
`e2/results/local-e1*.jsonl`, log in `run-e1.log`). The generator change is in
`rollup/add-css-layer-plugin.js` and `rollup/style-edges.js`.

**What the generator does now.** It collects style edges between `src/` folders: a
component passing `className={styles.x}` to another folder's component where both
set the same property (the F10 scan rule), plus a style file using another folder's
class in a selector (`.${iconContainer}`). Each edge puts the child's layer before
the parent's. Folders with no edge between them keep their import-graph position,
so the result changes the F9 order only where an edge forces it. If the edges form
a cycle, the build fails and prints the edges.

**Edges.** 207 (206 className, 1 selector), 95 distinct folder pairs. The import
order violated 10 of them. The style-edge order violates none.

**Order change against the F9 order (83 names, now 85):**

-   `input-textarea` moves from 44 to 54, after `form` (53). This is the F11 fix,
    reached by the generator instead of a hand edit. Nine folders between them
    each move up one.
-   `schedule` and `local-nav` are new at 84 and 85. **The branch's generator never
    declared them**: madge walks from `src/index.ts`, and both are subpath-only
    exports. Their layers ranked by where their CSS first appeared, which is the
    load-order fallback F12 describes, even with the theme loaded first. 9 of the 10
    violated edges were theirs (`schedule -> typography, button, popover`,
    `local-nav -> typography`). The F10 scan skipped them for the same reason, so
    its 197 overrides are 206 with them included.

**Cycle check.** At folder level the edges contain one cycle: `button -> shared`
(Button styles `ComponentLoadingSpinner`, `flex-shrink`, `margin-right`) and
`shared -> button` (the timepicker styles `Button`, `width`). The second is the
F10 false positive: it collides only with Button's icon-only `width` rule. The
generator lists it in `NOT_COLLIDING` with that reason. With the list emptied,
`npm run build` exits 1 with
`CSS layer order: style edges form a cycle among shared, button` and the four
edges (Measured, one build; excerpt in `e2/results/cycle-build-failure.txt`). The
failed build also leaves `dist/` partly written, because the build script removes
`dist/` first: rebuild before testing against it.

**Result.** 0 wrong of 912 probe results (48 static, 864 navigation), all four
combinations, both rebuilds. That is the same count as F11, including
textarea error message 0px (F10 pair), timeline title 16px and footer label 16px
(F8 pairs). Source order still varies by bundler (timeline page: 3 distinct orders
across the 4 combinations); the cascade does not.

What it shows:

-   Verdict condition 1 (order from style edges) works in the real generator, not
    just as a hand edit. Condition 2 (fail on a real inversion) works as a build
    failure, because once the order is generated from the edges an inversion can
    only come from a cycle.
-   The import-graph generator had a second defect besides cycle direction: folders
    outside `src/index.ts` got no declared layer.
-   Folder granularity makes the scan coarse. The one cycle is a false positive
    because "the child's folder sets this property" stands in for "the child's
    element gets this property". `shared` is a grab-bag folder, so it produces the
    most false edges.

What it does **not** show:

-   The edges are still the F10 regex scan, so 207 is a lower bound. A missed edge
    leaves the import-order tiebreak in place, which is what F9 measured, not a
    guarantee.
-   The exemption list is hand-maintained. Every entry is a claim about runtime
    classes that the scan cannot check.
-   No probe covers `schedule` or `local-nav`; their new positions are read from the
    statement, not measured in a page.
-   2 rebuilds per combination, 7 probes, synthetic routes: exit criterion 2 still
    needs the 5-build and screenshot run.

### F14. E4: coarse tiers work only if no style edge falls inside one tier; tiers by style-edge depth need 4 layers, a hand-picked split does not hold (Measured)

Reproduce: `node docs/spike/scripts/tier-layers.mjs report` for the analysis;
`node docs/spike/scripts/tier-layers.mjs naive|depth` rewrites the built `dist/`
(undo: `npm run build`), then `TAG=e4-naive` or `TAG=e4-depth LIB=local RUNS=2
docs/spike/experiments/e2/run.sh` (results in `e2/results/local-e4-*`); the hostile
order check is `docs/spike/experiments/e2/run-adversarial.sh` (results in
`e2/results/adversarial.jsonl`). All on the F13 style-edge build.

**Why granularity matters.** A layer only decides between rules in _different_
layers. Two rules in one tier fall back to source order, which is the
bundler-dependent order behind the original bug. So a tiering is only as good as
the number of style edges it leaves inside one tier.

| Tiering                                                                                                                                     | Layers                         | Style edges inside one tier (of 205)                                         | Inverted |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------- | -------- |
| Per-folder (F13)                                                                                                                            | 85                             | 0                                                                            | 0        |
| **Depth**: a folder's tier is the longest chain of styled children below it, so a parent is always one tier deeper than any child it styles | **4** (36, 10, 20, 19 folders) | **0**                                                                        | 0        |
| **Naive**: `base` = theme, markup, typography, shared, layout; `components` = the rest (the spec's example shape)                           | 2                              | **61** (37 folder pairs, e.g. `accordion -> button`, `file-upload -> alert`) | 2        |

**The matrix cannot tell them apart.** Naive tiers and depth tiers both gave
**0 wrong of 912**, every combination, 2 rebuilds. Tracing the two probes that share
a naive tier showed why: the textarea pair is correct by load order (the parent's rule
loads later on these pages, as on the published build), and the banner probe has
**no conflicting rule on its element at all**, so it never tested a collision on any
build (Button's small size sets `padding` through a rule that does not match here).
Passing the matrix is not evidence that a tiering is safe.

**A hostile order separates them.** `run-adversarial.sh` renders the real Textarea
and adds the F10 pair's two real rules again in the hostile source order (parent's
`margin-top: 0` first, child's `margin-top: 8px` last), each wrapped in the layer it
has in that build:

| Build              | Layers of the two rules                     | Turbopack default | webpack default |
| ------------------ | ------------------------------------------- | ----------------- | --------------- |
| Published alpha.14 | `fds` / `fds`                               | **8px, wrong**    | **8px, wrong**  |
| Per-folder         | `fds.input-textarea` (54) / `fds.form` (53) | 0px               | 0px             |
| Naive tiers        | `fds.components` / `fds.components`         | **8px, wrong**    | **8px, wrong**  |
| Depth tiers        | `fds.t1` / `fds.t0`                         | 0px               | 0px             |

What it shows:

-   **Granularity answer:** per-folder layers are not necessary. Four layers, derived
    from the style edges, give the same guarantee for every scanned edge. A
    hand-picked base/components split does not: it leaves 61 edges to source order,
    and a hostile order breaks one of them on both bundlers.
-   The tiers have to come from the same style-edge data as the per-folder order.
    Depth tiers change whenever an edge is added, so they are generated, not
    declared.
-   The hostile-order check is the test that would have caught a bad tiering; the
    route matrix is not.

What it does **not** show:

-   Depth tiers inherit the edge scan's blind spots. The scan misses at least one
    real override: `error-display -> typography` (`Typography.HeadingMD
className={styles.title}`), because the tag regex stops at the `>` inside
    `` `${testId}--title` ``. Under per-folder layers a missed edge is still ordered by
    the import-graph tiebreak; under depth tiers it falls into whatever tiers the two
    folders got. Here `error-display` (t3) is above `typography` (t0) anyway, so the
    F7 probe passes, but that is luck, not a guarantee.
-   Only one pair was tested in hostile order. Fewer layers means more edges per
    layer boundary, which is not a risk by itself, but it is untested beyond F10.
-   Debuggability: devtools shows `fds.t2`, not `fds.button`. Not measured.

Correction made while doing this: the first hostile-order run reported 0px on all
four builds. The page had no theme stylesheet, so the child's
`var(--fds-spacing-8)` was undefined and computed to 0 whatever won. The page now
imports the theme. The same artefact affects F12's `no-theme` textarea value, now
corrected there.

## Planned experiments

Ordered by risk, riskiest first (see the charter's riskiest assumptions).

| ID  | Experiment                                                                                                                                                                                                                                               | Output                           | State                                                                                                                                                                      |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E0  | Does Next 16 (Turbopack and webpack) preserve a `@layer a, b;` order statement from an imported CSS file in a prod build? Minimal app, 2 components, forced chunk reversal                                                                               | Pass/fail per bundler            | In progress: nested layers and repeat runs done (F5); forced reordering and dev mode moved to E2                                                                           |
| E5a | One real parent/child variant pair (pick from the E1 cross-folder list, or by hand) under per-folder layers: does the parent's variant styling survive? Try (a) collapsed layer, (b) specificity bump in the parent's layer, (c) per-edge `@layer` order | Table of options and which works | Done (F10): 1 real inverted pair breaks under layers. Option (c), explicit order, fixes it (F11, generated in F13); (a) collapsed layer and (b) specificity bump not tried |
| E1  | Extract **style-only** edges (cross-folder class refs, composed classes) instead of JS imports; compare to the madge order                                                                                                                               | Edge list, cycle list            | Done (F13): generator orders by style edges, 0 wrong of 912; one false-positive cycle exempted                                                                             |
| E2  | Reproduce the failure: Next 16 prod build, Turbopack, `cssChunking: "strict"` vs `"graph"`, in `e2e/nextjs-app` (see `BOOKINGSG-9316`)                                                                                                                   | Repro + screenshots              | Reproduced in prod, not in dev (F8)                                                                                                                                        |
| E3  | Same app with the branch's layered build; does order stay stable across 5+ builds and across entry points?                                                                                                                                               | Pass/fail per build              | Done for 6 pairs (F9): 0 wrong; cycles and consumer side untested                                                                                                          |
| E4  | Granularity: 3 tiers (`base`, `components`, `overrides`) vs per-folder; count how many visual diffs each produces (Playwright screenshots)                                                                                                               | Diff counts                      | Done (F14): 4 depth tiers match per-folder; a hand-picked 2-tier split fails a hostile order                                                                               |
| E5b | Mitigation for E5a: explicit order for the cycle members (`form` before `input-textarea`), rerun the matrix. The original plan here (probe every cross-folder edge from E1) is replaced by the E5a scan                                                  | Full edge table                  | Done (F11): one reorder fixes F10, keeps F9; generator change not built                                                                                                    |
| E6  | Consumer overrides: consumer unlayered CSS and consumer `@layer main, fds` ordering still win/lose as documented                                                                                                                                         | Pass/fail                        | Done (F12): overrides behave as today; unlayered wins, `@layer main` loses on both builds                                                                                  |
| E7  | Migration: what must consumers add? Is the `default.css` order statement mandatory, what if it loads late or not at all                                                                                                                                  | Checklist                        | Done (F12): order statement must load first, else it falls back to load order                                                                                              |

## Granularity hypothesis (resolved by E4, F14)

The hypothesis was that coarse tiers avoid cycle problems but leave same-tier
overrides to source order, and that a hybrid would be needed. F14 measured it: a
tiering is safe exactly when no style edge falls inside one tier. Tiers derived from
style-edge depth need 4 layers and leave none; a hand-picked base/components split
leaves 61 and fails a hostile order. No hybrid was needed for the scanned edges.

## What didn't work

Dead ends and broken tests, so nobody repeats them. Each was caught and the
affected finding corrected.

| What                                                             | Why it failed                                                                                                                                                              | Where corrected          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Reproducing the bug with one story per route (dynamic or static) | A page that bundles only its own CSS cannot get another route's chunk order. Every probe passed; the bug needs a build with overlapping routes                             | F6, F7; reproduced in F8 |
| A Turbopack `resolveAlias` to swap in the local library          | The alias does not apply to subpath imports (`@lifesg/react-design-system/timeline`), so the build silently used the installed package. Replaced by symlinking the package | F9                       |
| A layer-count guard in `run.sh` (more than 5 distinct layers)    | Rejected the 2-tier and 4-tier builds as "not local". Replaced by checking for the order statement                                                                         | F14                      |
| Then `cat \| grep -q` for that check                             | Under `set -o pipefail`, `grep -q` exits early, `cat` gets SIGPIPE, and the pipeline fails even on a match. Replaced by `grep -r`                                          | F14                      |
| The textarea probe reading the story's `data-testid`             | The testid is on the `<textarea>`, not the error; the probe read a wrapper with no `margin-top` rule and passed on every build. Now resolved through `aria-describedby`    | F10                      |
| Hostile-order and `no-theme` pages without a theme stylesheet    | `var(--fds-spacing-8)` was undefined, so the child's rule computed to 0 whatever won the cascade: a false "correct"                                                        | F12, F14                 |
| The banner probe (`smart-app-banner -> button`)                  | No conflicting rule matches its element, so it has never tested a collision on any build. It still counts in every total                                                   | F14                      |
| A failed `npm run build` leaves `dist/` half-written             | The build script runs `rm -rf dist` first. Rebuild before testing against `dist/`                                                                                          | F13                      |

## Untested and caveats

Everything the spike has not measured, in one place. Each finding has its own
"What it does not show" list; this is the merged version, grouped by what it would
affect. **Planned** items are the remaining experiments; the rest are known gaps the
verdict carries.

**Planned before the spike ends**

-   **Theme delivery.** A theme loaded by a CDN `<link>` (the e2e app does this), several
    theme stylesheets on one page (the e2e story layout imports 20), switching the
    `ThemeProvider` theme at runtime, and the theme imported in a nested layout under a
    root layout that renders library components (the likely real-app form of F12's
    `theme-late`).
-   **Exit criterion 2.** 5 or more builds per combination with Playwright
    screenshots; every run so far used 2 rebuilds and computed-style probes.

**Coverage of the override scan**

-   The style-edge scan is a regex, so 205 edges is a lower bound. Known miss:
    `error-display -> typography`, because the tag regex stops at the `>` inside
    `` `${testId}--title` ``. Not scanned at all: multi-line `clsx(...)`, classes passed
    through props, overrides in non-`.tsx` files.
-   The exemption list (`NOT_COLLIDING`) is hand-maintained; each entry is a claim about
    runtime classes the scan cannot check.
-   The cross-class selector edges (F4: 69 interpolations, 1 counted as a selector edge)
    were not probed in a page.

**Probe coverage**

-   7 probes, of which 6 test a real collision (the banner probe does not). 6 of the 48
    Typography candidates; no `Tag`, `Badge`, `Pill` or input-wrapper child.
-   Only one pair (F10) was tested in hostile source order.
-   One property per probe, not the full computed style; no visual diff.
-   No probe covers `schedule` or `local-nav`, whose layers were added in F13.

**Environment**

-   Synthetic routes (`/nav`, `/consumer`, `/adversarial`), not a real consumer app.
-   Headless Chromium only, one viewport (1280px), one theme (lifesg).
-   Next 16.3.6 only. A blog post on the issue (trysmudford.com, Read only as a
    fetch summary) names 14.0.2 to 14.2.0 for a related
    ordering change; other Next versions are untested.
-   Dev mode was compared only on the published build (F8). The layered build was never
    run under `next dev`, and Linaria extraction in dev (`next-with-linaria`) is
    untested.
-   Servers and Chromium ran outside the sandbox (port binding, Mach ports).

**Mechanism**

-   Why the default chunking moves `typography` after `timeline` (F8) is not traced, so
    which pairs break cannot be predicted, only probed.
-   Specificity bumps and a collapsed cycle layer (E5 options a and b) were not tried;
    only the explicit order (option c) was.
-   Debuggability: depth tiers show `fds.t2` in devtools, not `fds.button`. Not looked at.

**Production readiness**

-   The generator change lives in spike code (`rollup/style-edges.js`); it was measured,
    not reviewed or hardened.
-   No dev-mode warning exists for the F12 failure (component CSS before the order
    statement); it is only proposed.
-   Rare reordering: 2 rebuilds show build-to-build noise, they cannot rule out a
    reordering that happens one build in many.

## Alternatives considered

See [02-alternative-paths.md](02-alternative-paths.md).

## Verdict

**Draft (2026-10-26): Adopt for subset, with conditions.** Not final: exit
criterion 2 (5 builds, screenshots) and theme delivery are still open. Granularity
(E4) is measured (F14). The generator
change (ordering from style edges) is now built and measured (F13), and the
consumer side (E6, E7) is measured (F12).

Per-folder layers solve the reported problem and their known blocker is
fixable, on the evidence so far:

| Spec requirement                 | Answer so far                                                                                                                                                                                                                                                   | Evidence      |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Deterministic style order        | **Yes, for every measured pair.** Layers make source order irrelevant: F8's broken source order is still there on the layered build, but the parent wins                                                                                                        | F8, F9        |
| Parent/child variant inheritance | **Blocker is real but narrow and fixable.** Layers break a parent's override wherever the order puts the child later (F10). 1 real case in 206 cross-folder overrides, inside an import cycle. Ordering from style edges fixes it in the generator and keeps F9 | F10, F11, F13 |
| Granularity                      | **Per-folder is not required.** 4 tiers derived from style-edge depth match it on every scanned edge; a hand-picked base/components split leaves 61 edges to source order and fails a hostile order                                                             | F14           |
| Consumer migration path          | **One requirement, already the documented setup.** Import the theme stylesheet at the root, before any component; otherwise the per-folder order silently falls back to load order. App overrides behave exactly as today                                       | F5, F12       |

Conditions for adopting:

1. **Order from style edges, not JS imports.** The generator must order by who
   passes a class to whom, so cycle members are ordered by styling direction
   (F10, F11), and it must declare every styled folder, not only those reachable
   from `src/index.ts` (F13). Built and measured in the spike generator (F13).
2. **Fail the build on a style cycle.** With the order generated from the edges, a
   new override can only break it by closing a cycle. The spike generator fails the
   build then (F13). The production version needs a reviewed exemption list for
   false positives, since the scan works at folder level.
3. **The order statement must load first** in consumer apps (E0, F12). This is
   the documented setup already; the migration step is to state it as a hard
   requirement and, ideally, detect it (for example a dev-mode warning when a
   component layer appears before the statement).

Rejected alternatives to this verdict:

-   _Redeclare variants in every child_ (spec option 1): not needed; the blocker
    is one ordering decision, not per-variant styling.
-   _Hand-ordered layers per variant_ (spec option 3): not needed either; one move
    fixed the only real case. The generator does the ordering.
-   _Rely on `cssChunking: "graph"`_: fixed F8 here, but by reordering, with no
    guarantee (F8). Keep it as a workaround, not the fix.

## Open questions

Resolved:

-   ~~Does Next/Turbopack hoist or reorder a leading `@layer a, b;` statement when it
    lives in an imported CSS file?~~ No. Both bundlers emit the statement unchanged
    and in the file's place (F5); it takes effect only if that file loads first, which
    is the consumer requirement in F12.
-   ~~Browser support floor for nested `@layer fds { @layer x {} }`.~~ Cascade layers,
    including nesting and dotted names, ship in Chrome 99, Firefox 97 and Safari 15.4
    (Read: MDN browser-compat-data, `css/at-rules/layer.json`), and MDN marks `@layer`
    Baseline widely available since March 2022. The library declares no browser
    matrix (no `browserslist` in the repo), but it already ships `@layer fds` on
    every stylesheet, so per-folder layers raise no new floor.

Still open:

-   Does Linaria extraction keep `@layer` blocks intact in dev with
    `next-with-linaria`? Untested: every run used the prebuilt `dist/` CSS. Only
    matters for this repo's own e2e app, which compiles `src/` in dev; consumers use
    `dist/`.
-   Can `theme-late` (F12) happen in a real app? Covered by the theme-delivery
    experiment.
-   Why does the default chunking move `typography` after `timeline` (F8)? Not
    needed for the verdict, since layers make the order irrelevant, but it would
    say which pairs the published build breaks.

## Follow-up tickets

TBD after the verdict. Production work is a rewrite, not a promotion of the
`rl/css-layers` spike code. That includes the spike generator in
`rollup/add-css-layer-plugin.js` and `rollup/style-edges.js` on `gz/css-layers`
(F13): it is evidence that the approach works, not code to merge as is.
