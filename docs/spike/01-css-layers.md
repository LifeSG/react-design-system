# 01 - Native CSS layers for deterministic order

Status: Done (2026-11-18) | Decision owner: see [README.md](README.md) | Branch: `gz/css-layers` (spike work), built on `rl/css-layers` (`93cd86ede`)
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

F1 to F4 come from static scans of `src/` (F2 is Assumed). F5 onwards are Measured
in real Next 16 production builds, each with its reproduce command. Only Measured
findings feed the verdict.

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
-   **E6, the two overrides probed behave the same as today.** An unlayered app rule
    beats the library on both builds, and an app rule inside `@layer main` loses on
    both builds. `@layer main, fds;` (the troubleshooting doc and the e2e app's
    `globals.css`) makes `fds` the later, stronger layer. That is the doc's stated
    purpose, so it is intended, not a layers regression. F19 extends this to 15
    mechanisms and 6 targets: the same result on single-layer and per-folder builds,
    except for rules written into `@layer fds.<folder>`.

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

| Tiering                                                                                                                                     | Layers                         | Style edges inside one tier (of 205 after exemptions)                        | Inverted |
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

### F15. Theme delivery: a CDN `<link>` and a theme imported below a component-rendering layout both lose the declared order; many themes and runtime switching do not (Measured)

Reproduce: `LIB=local RUNS=2` and `LIB=published RUNS=2`
`docs/spike/experiments/e2/run-delivery.sh` (results in
`e2/results/{local,published}-delivery.jsonl`, log in `run-delivery.log`); the
drifted pairs come from `e2/drift-pairs.mjs` against a served build, with style-edge
pairs written to `e2/results/style-edge-pairs.json` from the F13 generator. Library:
the F13 style-edge build. Turbopack default and webpack default, 2 rebuilds; every
value matched across bundlers and rebuilds.

Four `/delivery/*` routes render the timeline and textarea pairs and differ only in how
the theme stylesheet reaches the page. **Drift** counts the pairs of `fds.<folder>` layers
on the page whose effective rank differs from the declared order statement: 0 means the
page gets exactly the declared order.

| Route: how the theme arrives                                                                               | Statement first?        | Drift                     | Probes                                                             |
| ---------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------- | ------------------------------------------------------------------ |
| `cdn-link`: `<link rel="stylesheet" precedence>` to a static copy, as the e2e app loads its `/cdn` CSS     | **no** (`markup` first) | **10 of 55**              | correct                                                            |
| `many-themes`: all 20 theme stylesheets imported, as the e2e story layout does                             | yes (20 statements)     | 0 of 55                   | correct                                                            |
| `runtime-switch`: lifesg and bookingsg loaded, `ThemeProvider` theme toggled                               | yes, before and after   | 0 of 55, before and after | correct; primary colour changed rgb(23,104,190) to rgb(118,84,188) |
| `nested-layout`: the route group's outer layout renders a `Divider`, the theme is imported one layout down | **no** (`layout` first) | **10 of 78**              | correct                                                            |

The published build has no order statement on any route, so drift does not apply
there; its probes gave the same values.

What it shows:

-   **A CDN `<link>` is the F12 failure.** React puts the `<link>` after Next's bundled
    CSS, so every component layer is already ranked when the statement arrives. The
    order falls back to load order. A theme served from a CDN cannot carry the order
    statement for bundled components.
-   **A theme imported in a nested layout is the F12 failure too**, as soon as an outer
    layout renders a library component. This is the realistic shape of F12's
    `theme-late`. The migration rule is therefore "import the theme stylesheet in the
    outermost layout that renders any library component", not just "at the root".
-   **Repeated statements are harmless.** Twenty copies of the same statement, and
    switching themes at runtime, left the declared order intact.

What it does **not** show:

-   **That the drift breaks a style here.** None of the 20 drifted pairs is a scanned style
    edge (`form` over `typography`, `layout` over `markup`, and so on): those layers do not
    style each other, so their relative rank does not matter today. The probes stayed
    correct for that reason, not because the order held. Any pair that is a style edge
    and lands on such a page would be exposed.
-   A real CDN (a different origin, caching, `crossorigin`), or a `<link>` without
    `precedence`, which React leaves in place instead of hoisting.
-   Dev mode, and other theme stylesheets than lifesg and bookingsg.

Correction made while doing this: the first `drift-pairs.mjs` run reported 0 drift
for `cdn-link` because `public/spike-cdn/lifesg.css` held the published theme from
an earlier run, which has no statement. `run-delivery.sh` copies the theme under
test before each build; `drift-pairs.mjs` does not, so copy
`<library>/theme/styles/lifesg.css` to `public/spike-cdn/` before running it.

### F16. Exit criterion 2: 5 builds, 7 libraries; the layered candidates are correct and stable, and layering changes pixels in one place beyond the fixes (Measured)

Reproduce: `docs/spike/experiments/final/prepare-libs.sh` (builds the variants into
`final/libs/`), then `docs/spike/experiments/final/run-final.sh` (140 steps, 3h53m,
resumable; log in `results-run.log`), then `node analyse-probes.mjs` and
`node analyse-shots.mjs > results/shots.jsonl`. 7 libraries x 4 combinations
(Turbopack default and `graph`, webpack default and `strict`) x 5 rebuilds. Each step
runs the 13 static and 9 `/nav` probe pages plus the navigation test, and takes a
full-page 1280px screenshot of 22 pages (3,080 images).

Libraries: `published` alpha.14; `flat` (the F13 source in one layer: same component
code as the others, no per-folder ordering, the control); `importorder` (the original
`rl/css-layers` generator, 83 layers); `reordered` (that plus the F11 hand fix);
`styleedge` (F13, 85 layers); `depth` (4 tiers, F14); `naive` (2 tiers, F14).

**Probes: wrong / results per combination (570 per cell)**

| Library                                    | Turbopack default | Turbopack `graph` | webpack default | webpack `strict` |
| ------------------------------------------ | ----------------- | ----------------- | --------------- | ---------------- |
| `published`                                | **20**            | 0                 | **50**          | 0                |
| `flat`                                     | **20**            | 0                 | **50**          | 0                |
| `importorder`                              | **45**            | **45**            | **45**          | **45**           |
| `reordered`, `styleedge`, `depth`, `naive` | 0                 | 0                 | 0               | 0                |

-   **Stable:** for every library, 0 of 456 probe cells (combination, mode, route pair,
    probe) gave a different answer on any of the 5 builds.
-   `flat` fails exactly where `published` fails (timeline title; footer label on webpack
    default). So the F8 bug comes from the cascade, not from alpha.14's component code,
    and `flat` is a valid control.
-   `importorder` fails only the textarea error margin (F10), in all four combinations.
-   `naive` is clean here for the reason F14 gave: its same-tier pairs load in a favourable
    order on these routes. The hostile-order check, not this table, is what rejects it.

**Screenshots, stability.** Each library's builds 2 to 5 against its own build 1: 2,464
comparisons, 70 differ, **all on `toast/with-sublabel`, at most 62 pixels, none changes
the page size**. Toast animates with a JS spring that the screenshot cannot fully
settle; it is also the only difference between `published` build 1 and build 5. Every
other image was pixel-identical across 5 builds, in every library.

**Screenshots, against `flat`** (528 comparisons; toast excluded). `published` is
identical to `flat` on every image, which confirms again that the alpha.14 code and the
branch's code render the same under a single layer. The layered libraries differ on:

| Page                                                | Libraries that differ from `flat`                         | Cause                                                                                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timeline (2 pages), footer (2 pages), `nav/combo-a` | `styleedge`, `depth`, `naive`, `reordered`, `importorder` | The F8 fix: `flat` has the bug on these pages (a wrong probe on each), the layered libraries do not. 7 of the 7 differing pages match a wrong `flat` probe on the same page and combination |
| textarea (2 pages)                                  | `importorder` only                                        | F10: the error margin is wrong, so the page is 16px taller                                                                                                                                  |
| `nav/banner`                                        | all five layered libraries, all four combinations         | **Not explained by a probe**; see below                                                                                                                                                     |

**The banner difference is real and is not a bug fix.** The smart-app-banner's dismiss
icon is 20px (`1.25rem`) in every layered build and 18px (`1.125rem`) in `flat` and
`published`. Tracing the rules on the icon:

```
flat      fds.all               .m18ljjag svg  width: 1.125rem   (ClickableIcon)
          fds.all               .cp9l7rn       width: 1.25rem    (SmartAppBanner)
styleedge fds.shared            .m18ljjag svg  width: 1.125rem
          fds.smart-app-banner  .cp9l7rn       width: 1.25rem
```

In one layer the descendant selector `.m18ljjag svg` (specificity 0,1,1) beats the
parent's `.cp9l7rn` (0,1,0), so the icon is 18px. With per-folder layers the parent's
layer ranks later, layer order beats specificity, and the icon is 20px: the size the
component's own style file asks for (`cross { width: 1.25rem }`). So layers did not just
fix an order-dependent bug; they changed a specificity-dependent result for a pair the
scan does not model. Anyone who shipped against 18px sees the icon grow by 2px.

What it shows:

-   **Exit criterion 2 is met for the layered candidates.** `styleedge`, `depth` and
    `reordered` are correct on every probe in every combination, stable across 5 builds,
    and visually identical to each other.
-   The bug is reproduced 70 times in `published` and `flat` and never in a candidate.
-   `depth` and `styleedge` are indistinguishable on all 22 pages here, so the choice
    between 85 layers and 4 is not decided by this data (F14 decides it on the edge
    guarantee).
-   **Layering is not visually neutral.** Rules that previously won on specificity can
    lose to a parent's layer. The banner is the only visible case among 22 pages, but
    the 22 pages cover a small share of the library.

What it does **not** show:

-   Other specificity flips. The scan models class-name overrides, not descendant
    selectors (`.a svg`) against a parent class; the banner is one case that surfaced
    because a screenshot was taken, not because anything flagged it. The sweep and the e2e
    suite in F17 found the rest: four components under `styleedge` (five counting the
    `depth`-only modal).
-   The pixel threshold is pixelmatch's 0.1 with anti-aliasing excluded; sub-threshold
    colour shifts would not show.
-   Dev mode, other viewports and themes, the dark colour mode, and a real app: all
    unchanged from F9 and F15.
-   Toast is excluded from the diffs rather than fixed; a real toast regression would
    be hidden.

### F17. Visual sweep and e2e suite: layering changes 94 of 2,076 story renders and fails 38 e2e tests, all in 4 components; per-folder and 4-tier layers disagree on the modal (Measured)

Reproduce: `docs/spike/experiments/sweep/prepare-app.sh` (a private copy of
`e2e/nextjs-app`), then `LIBS="flat styleedge depth" SCHEMES="light dark"
VIEWPORTS="desktop mobile" docs/spike/experiments/sweep/run-sweep.sh` (38 min; log in
`run-sweep.log`), then `node diff-sweep.mjs <ref> <lib>` for each pair (results in
`sweep/results-*.jsonl`), `style-dump.sh` and `style-compare.mjs` for computed styles,
and `TRACE_OUT=traces-f17.txt trace-run.sh` / `rule-trace.mjs` for the competing
rules (saved in `sweep/traces-f17.txt`). The 18 renders not traced by rule are checked
for noise by `repeat-check.sh` (`sweep/untraced-verdict.md`). Interaction states come
from the repo's own Playwright suite: `sweep/run-e2e.sh` runs `e2e/tests` unchanged
against the sweep app built with each library (summary in `sweep/e2e-summary.txt`,
reports in `sweep/e2e-results/`).

**Scope.** (The computed-style dumps behind the traces below walk `<body>`, because modals, popovers and toasts render in portals outside the story layout; an earlier version walked only the layout and missed the modal.) All 519 story pages of the e2e app (85 components), with the date pinned as
the specs pin it, in light and dark colour schemes at 1280px and 375px: 2,076 renders
per library, 6,228 comparisons. Libraries: `flat` (the control, single layer),
`styleedge` (85 layers, the F13 generator), `depth` (4 tiers). All 12 library and mode
combinations rendered all 519 pages with 0 failures.

| Comparison             | Renders that differ                                            | Of    |
| ---------------------- | -------------------------------------------------------------- | ----- |
| `flat` vs `styleedge`  | **112** (94 from layering; 12 toast animation; 6 render noise) | 2,076 |
| `flat` vs `depth`      | **156**                                                        | 2,076 |
| `styleedge` vs `depth` | **64**                                                         | 2,076 |

**By component** (renders that differ, any mode):

| Component                                              | `flat` vs `styleedge` | `flat` vs `depth` | `styleedge` vs `depth` | Largest diff (px) |
| ------------------------------------------------------ | --------------------- | ----------------- | ---------------------- | ----------------- |
| modal-v2                                               | 0                     | **44**            | **44**                 | 58,615            |
| navbar                                                 | 34                    | 34                | 0                      | 456               |
| otp-verification                                       | 24                    | 24                | 0                      | 22,309            |
| smart-app-banner                                       | 24                    | 24                | 0                      | 1,410             |
| toast                                                  | 12                    | 12                | 12                     | 38,946            |
| unit-number                                            | 12                    | 12                | 0                      | 334               |
| timetable                                              | 3                     | 3                 | 4                      | 1,237             |
| countdown-timer, fullscreen-image-carousel, animations | 1 each                | 0 to 2            | 1 to 2                 | 44,748            |

**What the differences are**, traced to the rules for one page per component:

| Component                               | Change in a layered build                           | Why                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| smart-app-banner                        | dismiss icon 18px to 20px (F16)                     | `ClickableIcon`'s `.x svg` (0,1,1) beat the banner's `.cross` (0,1,0) in one layer; the banner's layer is later, so layers give it 20px, the size its style file asks for                                                                                                                                                                                                                                      |
| navbar (34 renders)                     | `ClickableIcon` icon 18px to 24px                   | Same mechanism: `.m18ljjag svg { 1.125rem }` against the navbar's `.m11vsg37 { 1.5rem }`. The scan has `navbar -> shared` edges, but only for the class on the button, not the descendant `svg`                                                                                                                                                                                                                |
| otp-verification (24)                   | read-only input gains 16px left and right padding   | In one layer `.afvd13[data-no-border], [data-read-only] { padding: 0 }` (0,2,0) beat `.pqn3wrd { padding: 0 16px }` (0,1,0). Layered, `fds.otp-verification` ranks after `fds.input-group`, so the 16px wins: the read-only state loses its zero padding. The scan has `otp-verification -> input-group` edges                                                                                                 |
| unit-number (12)                        | read-only `margin-right` 4px to 8px                 | `.l1s6ick6[data-read-only] { 4px }` (0,2,0) beat `.h1ujh1ah { 0.5rem }` (0,1,0); layered, `fds.unit-number` ranks after `fds.input-group`. The scan has **no** `unit-number -> input-group` edge                                                                                                                                                                                                               |
| modal-v2 (44, only in `depth`)          | close button 32px to 66px square, modal 34px taller | `ClickableIcon` sets `padding: 24px` and the modal's `slot-styles.ts` overrides it with `padding: 0`. That file is not named `*.style(s).ts`, so the edge scan skips it and the `modal-v2 -> shared` edge is missing. `depth` puts `shared` in `t1` and `modal-v2` in `t0`, so `shared`'s 24px wins. `styleedge` ranks `modal-v2` (29) after `shared` (8) through the import-graph tiebreak and matches `flat` |
| toast (12), countdown-timer, animations | up to 38,946 px                                     | Toast animates with a JS spring; the rest is animation timing. Not layering                                                                                                                                                                                                                                                                                                                                    |

**The renders not traced by rule are render noise.** Of the 112, 94 are the four traced
components and 12 are toast (its JS spring). The other 6 (`timetable` 3,
`countdown-timer`, `fullscreen-image-carousel`, the dots spinner: 1 each; 18 renders
across all three comparisons) were checked by `repeat-check.sh`, which renders each story
twice per library, in a fresh browser, and diffs the library against itself.
`timetable/loading`, `countdown-timer/*` and the dots spinner differ from themselves on
the same library, `flat` included (up to 44,748 px: a running timer). The two
`fullscreen-image-carousel` renders are a single 225px line that appears in one render of
six and in neither repeat of the same library and mode. So layering causes **94** of the
112 differing renders (navbar 34, otp-verification 24, smart-app-banner 24,
unit-number 12).

**The e2e suite covers interaction states**, which the sweep cannot reach: 92 specs,
1,106 tests, 1,387 baseline screenshots taken after clicks, hovers, focus and key
presses. Its baselines come from the branch's component source, so `flat` should pass.

| Library     | Passed | Failed | Flaky                                           | Skipped |
| ----------- | ------ | ------ | ----------------------------------------------- | ------- |
| `flat`      | 1,105  | **0**  | 1 (`schedule` custom popover)                   | 1       |
| `styleedge` | 1,066  | **38** | 2 (`phone-number-input` hover, `sidenav` click) | 1       |

`flat` passing confirms the baselines are single-layer renders of the same code, so the
38 `styleedge` failures are layering. All 38 are screenshot mismatches, none a functional
assertion, and **every one is in a component the sweep already found**:
otp-verification 14, navbar 10, smart-app-banner 7, unit-number 7. Several capture
interaction states the sweep does not reach (navbar submenu open, hamburger focus
highlight, unit-number focus, the OTP verification flow), and each shows the same rule
change as its page-load render. The 3 flaky tests each failed once and passed on retry,
and none of their components differs in the sweep, so they are not counted as layering.
`depth` was not run: F17 already makes `styleedge` the safer default.

**Traced rules** (`sweep/traces-f17.txt`, `flat` then `styleedge`, light desktop):

| Element                                              | `flat` | `styleedge` | Rules                                                                                                                      |
| ---------------------------------------------------- | ------ | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| smart-app-banner dismiss icon width                  | 18px   | 20px        | `shared .m18ljjag svg` 1.125rem vs `smart-app-banner .cp9l7rn` 1.25rem                                                     |
| navbar icon width                                    | 18px   | 24px        | `shared .m18ljjag svg` 1.125rem vs `navbar .m11vsg37` 1.5rem                                                               |
| read-only OTP input `padding-left` (email and phone) | 0px    | 16px        | `input-group .nx53mj4[data-read-only]` / `.afvd13[data-read-only]` 0 vs `otp-verification .e1ik236m` / `.pqn3wrd` `0 16px` |
| read-only unit-number divider `margin-right`         | 4px    | 8px         | `input-group .l1s6ick6[data-read-only]` 4px vs `unit-number .h1ujh1ah` 0.5rem                                              |

What it shows:

-   **The change is real and not rare.** 4.5% of renders (94 of 2,076) differ between
    `flat` and the recommended per-folder build because of layering, across 4
    components, deterministically; the e2e suite fails 38 tests in the same 4. In every traced case a descendant or attribute selector (higher
    specificity) used to beat a parent's single class, and layer order now overrides
    specificity. In each, the layered result is the one the parent's own style
    file asks for.
-   **The edge scan is not a sufficient guard.** It missed three of the five causes: a
    style file it does not read (`slot-styles.ts`), a pair with no edge
    (`unit-number -> input-group`), and descendant selectors against a parent class
    (`svg`). F13 said the scan was a lower bound; here the misses are visible.
-   **`depth` is less safe than F14 suggested.** F14 found 0 edges inside one tier among
    the _scanned_ edges. The one unscanned edge (`modal-v2 -> shared`) breaks `depth`
    on 44 renders and does not break `styleedge`, because `styleedge` falls back to the
    import graph for unscanned pairs. So `depth` needs a complete scan; `styleedge`
    degrades more gracefully.
-   Earlier I wrote that layer-versus-specificity flips were a single case (F16). They
    are four components under `styleedge`, five counting the `depth`-only modal.
-   **The sweep and the e2e suite agree on components.** The suite reaches interaction
    states the sweep cannot and found no further component. **Correction (simulated
    fixes, below):** not on the full set of changes. A fifth flip, the navbar's mobile
    submenu chevron, shows only once the drawer opens and was hidden among the navbar
    failures here; it surfaced when the other fixes removed them.

What it does **not** show:

-   Whether each change is _wanted_: not shown by the data. **Decided 2026-10-28**
    (replacing a 2026-10-27 decision that all four were regressions): the two icon
    changes are intended, the two read-only input changes are regressions. See the
    simulated fixes below and Follow-up tickets.
-   States neither the stories nor the e2e specs reach, and any real app. The e2e
    suite covers the states its specs script, not every reachable state.
-   `depth` against the e2e suite (not run).

**Simulated fixes (Measured, simulation on built CSS; webpack only).** Reproduce: from `docs/spike/experiments/sweep/`,
`node simulate-fixes.mjs` (writes `../final/libs/flat-fixed` and `styleedge-fixed`),
`LIBS="flat-fixed styleedge-fixed" SCHEMES="light dark" VIEWPORTS="desktop mobile"
./run-sweep.sh` (17 min; log in `run-sweep-fixed.log`), then `node diff-sweep.mjs <ref>
<lib>` for each pair (results in `sweep/results-*fixed*.jsonl`), and `LIBS="flat-fixed
styleedge-fixed" TRACE_OUT=traces-fixed.txt ./trace-run.sh ...` for the values. The e2e
suite: `LIBS="flat-fixed styleedge-fixed" ./run-e2e.sh` (reports
`e2e-results/*-fixed-full.json`), then, after the chevron fix, the same with
`SPECS="e2e/tests/components/navbar e2e/tests/components/smart-app-banner
e2e/tests/components/footer e2e/tests/components/otp-verification
e2e/tests/components/unit-number"` (`e2e-results/*-fixed-5spec.json`); the chevron is
traced by `drawer-trace.mjs` (`drawer-trace.txt`). The script patches the built CSS, not `src/`, inserting each fix right after the component's
own rule in its own layer, as a source fix would compile. The same patch goes into
both libraries, so a remaining difference between them is layering.

| Change                        | Should win (2026-10-28)                                 | Simulated fix                                                                                |
| ----------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| smart-app-banner dismiss icon | the banner's `cross` 1.25rem                            | `.cross.cross` (0,2,0), so it beats `ClickableIcon`'s `.x svg` (0,1,1) in a single layer too |
| navbar menu icon              | the navbar's `mobileMenuIcon` 1.5rem                    | `.mobileMenuIcon.mobileMenuIcon`, same                                                       |
| navbar mobile submenu chevron | the navbar's `chevronIcon` 1.25rem (decided 2026-11-03) | `.expandCollapseButton .chevronIcon` (0,2,0), scoped so the desktop chevron keeps 1.125rem   |
| read-only OTP input padding   | `input-group`'s `[data-read-only]` 0                    | both OTP inputs re-declare `[data-read-only]` and `[data-no-border]` `padding: 0`            |
| read-only unit-number margin  | `input-group`'s `[data-read-only]` 4px                  | the hash container re-declares the read-only and right-position margins                      |

| Comparison                        | Renders that differ | Of    | What they are                                                                                                                |
| --------------------------------- | ------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------- |
| `flat-fixed` vs `styleedge-fixed` | **18**              | 2,076 | toast 11, timetable 3, countdown-timer 2, fullscreen-image-carousel 2: the noise stories above. **0 in the four components** |
| `flat` vs `flat-fixed`            | 78                  | 2,076 | navbar 34, smart-app-banner 24 (the icon fixes change the single layer), plus noise                                          |
| `styleedge` vs `styleedge-fixed`  | 55                  | 2,076 | otp-verification 24, unit-number 12 (the input fixes change the layered build), plus noise                                   |

All 2,076 renders per library rendered, 0 failures. Traced values, the same on both
libraries (`traces-fixed.txt`): banner icon 20px, navbar icon 24px, OTP read-only
`padding-left` 0px (email and phone), unit-number read-only `margin-right` 4px.
The sweep ran before the chevron fix; the chevron is not on any story at rest, so the
sweep cannot see it either way.

| e2e run                          | `flat-fixed`                           | `styleedge-fixed`                               |
| -------------------------------- | -------------------------------------- | ----------------------------------------------- |
| Full suite, four fixes           | 1,088 passed, **18 failed**, 1 skipped | 1,083 passed, **22 failed**, 1 flaky, 1 skipped |
| 5 spec folders, with the chevron | 134 passed, **22 failed**              | 134 passed, **22 failed**: the same 22 tests    |

-   **OTP and unit-number pass on both** (14 and 7 failures before the fixes).
-   **The 4 tests failing only on `styleedge-fixed` in the full run** are navbar Mobile,
    Submenu, Submenu (selected item) and Submenu (dark mode): the mobile chevron, 18px in one
    layer and 20px layered (`drawer-trace.txt`: `shared .m18ljjag svg` 1.125rem beat
    `navbar .c160mxwv` 1.25rem on specificity). Decided 2026-11-03: 20px is intended, like the
    other icons. With its fix, both libraries fail the same tests.
-   **The 22 left are not layering**, since they fail on both libraries:
    -   16 icon baselines still showing the 18px icons: smart-app-banner 7, navbar 9 (menu
        icon 5: Collapsed, Collapsed dark, Custom action button, Uncollapsible action
        buttons, Hamburger focus; chevron 4). Regenerated on the bug ticket.
    -   6 BookingSG logo tests (navbar bookingsg theme 2, navbar Secondary brand 2, footer
        bookingsg theme 2): the diff is only the BookingSG logo, loaded from
        `booking.gov.sg`. In the F17 run on 2026-10-27 all six passed on `flat` (only
        `styleedge`'s desktop Secondary brand failed, on the menu icon), and the remote
        logo's `last-modified` is 2026-10-29, so it changed between the runs. Stale
        baselines, outside this spike.
-   The 1 flaky test (`data-table` Floating) failed once and passed on retry; `data-table`
    differs in no sweep render.

What it shows:

-   **With the fixes simulated on built CSS, layering changes no story render, and fails
    no e2e test on only one build in the folders checked.** The sweep ran with four fixes
    (the chevron is on no story): the 94 layering renders become 0, and the 18 left are
    the noise stories `repeat-check.sh` already classified. The full e2e suite ran with
    four fixes; all five were run only on the 5 spec folders they touch, where both
    libraries fail the same 22 tests.
-   **Each simulated fix works without layers.** The same patch gives the same result in
    one layer. That a fix can therefore land before the layered build ships is
    **Assumed**: it relies on the Linaria source fix compiling to the same rule.
-   **The input fixes re-declare a parent's state rule in the child.** That is the spec's
    "redeclare variant styles in every child" on a small scale: two components, three
    rules. It is per-relationship work, so a component that composes `input-group` and
    overrides its padding or margin needs the same.

What it does **not** show:

-   The full e2e suite with all five fixes: the last run covered the 5 spec folders the fixes
    touch. The other 87 specs passed or flaked identically on both libraries in the
    full run, and the chevron fix does not touch their CSS.
-   Other flips in states no spec scripts. The chevron was found only because the e2e suite
    opens the drawer; E8's runtime scan is the check for the rest.
-   A source fix. The patch is on built CSS; the production fix is written in the style
    files and goes through Linaria.
-   Turbopack. Both the sweep and the e2e suite build with `next build --webpack`
    (`run-sweep.sh:31`, `run-e2e.sh:29`, like the repo's e2e app), one build per library.
    F16 covers Turbopack for order stability, but not for the screenshots.

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

F18 was reserved for E8 (a complete style-edge scan plus a runtime scan for layering
flips in states no story or spec reaches). E8 was descoped on 2026-11-18 and not run;
see the Verdict and Follow-up tickets.

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
| E8  | Scan completeness: read every style file and descendant selectors for style edges, and scan runtime states (open drawers, menus) for layering flips no story or spec reaches                                                                             | Edge list, flip list             | Descoped 2026-11-18, not run. Assumed not needed to choose `styleedge` per-folder layers; carried as a named risk and a follow-up ticket                                   |
| E9  | Consumer overrides: 15 override mechanisms × 6 targets on single-layer, per-folder and published builds                                                                                                                                                  | Override matrix                  | Done (F19): same result in 92 of 96 applicable cells; the 4 that differ all write into `fds.<folder>`                                                                      |

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

-   ~~Theme delivery~~: done (F15). Left open from it: a real cross-origin CDN, a
    `<link>` without `precedence`, and whether the 20 drifted layer pairs it found ever
    include a style edge.
-   ~~Exit criterion 2~~: done (F16). Left open from it: toast screenshots are excluded
    (JS animation). The full-story sweep is F17.
-   ~~Consumer overrides (E9)~~: done (F19). Left open from it: the three 9b/9c ties with
    consumer CSS loaded after the components (Assumed to flip), a consumer `!important`
    inside `fds.<folder>`, Tailwind's order statement combined with `main`, Tailwind
    through `@tailwindcss/postcss`, and styled-components with SSR.
-   **E8, scan completeness: descoped 2026-11-18, not run.** Neither the complete
    style-edge scan nor a runtime scan for flips in unscripted states was built. The
    chevron flip (F17) was found only because one e2e spec opens the drawer, so other
    flips in states no story or spec reaches may exist. That this does not change the
    choice of `styleedge` per-folder layers is **Assumed**, not measured: it rests on
    `styleedge` falling back to the import graph for unscanned pairs, seen on one pair
    (`modal-v2 -> shared`, F17). It certainly limits how much the build-time cycle check
    (condition 2), condition 4's list of five changes, and any future `depth` tiering
    can be trusted. Carried as a follow-up.

**Coverage of the override scan**

-   The style-edge scan is a regex, so its 207 edges (205 after the `NOT_COLLIDING`
    exemption, F13) are a lower bound. Known miss:
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
-   Rare reordering: 5 builds per library in F16, and 2 per combination in the
    earlier experiments, show build-to-build noise; they cannot rule out a reordering
    that happens one build in many.

## Alternatives considered

See [02-alternative-paths.md](02-alternative-paths.md).

## Verdict

> [FINDINGS.md](FINDINGS.md) owns the verdict and the proposal from 2026-11-18 on. This
> section is the working record it was written from; if the two disagree, FINDINGS.md
> wins.

**Final (2026-11-18): Adopt `styleedge` per-folder layers, with conditions and named
risks.** The draft of 2026-11-03 said "Adopt for subset"; the subset was the open parts
of criterion 3, now closed or descoped below. Exit criterion 1 is met (F8).
**Criterion 2 is not met as written.** Order stability is met (F16: 5 builds, more
than one entry point, both bundlers). The Playwright screenshots are not: the layered
build fails 38 e2e tests and changes 94 story renders (F17). Only in a simulation do
they come out level: with the fixes patched into built CSS, webpack only, there are 0
layering renders of 2,076, and on the 5 spec folders the fixes touch, both builds fail
the same 22 tests (16 icon baselines to regenerate, 6 stale BookingSG logo baselines).
Three of the five changes count as fixes only because they were reclassified as
intended (2026-10-28, 2026-11-03). Criterion 2 is met when the source fixes land, the
baselines are regenerated, and the full e2e suite passes on both bundlers (condition
4). Criterion 3 is answered for every spec requirement: granularity (F14, F17),
parent/child variants (F10, F11, F13), consumer migration (F12, F15) and consumer
overrides (F19, 15 mechanisms × 6 targets). The one part left is scan completeness
(E8), descoped as a named risk. It limits the build-time cycle check and `depth`
tiering; that it does not change the choice between approaches is **Assumed** (see
"Untested and caveats").

**Against the charter's two clauses**, the answer is **partly**. No hand-ordering per
variant relationship: yes, the generator orders from style edges (F13), apart from one
hand-maintained `NOT_COLLIDING` exemption. No redeclaring variants in every child:
not in every child, but not in none either. Condition 4 re-declares `input-group`'s
read-only rules in two children, and the three icon fixes are specificity bumps
(02 path #1). That is 5 known relationships, and more may be hidden by the incomplete
scan.

Per-folder layers solve the reported problem and their known blocker is
fixable, on the evidence so far:

| Spec requirement                 | Answer so far                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Evidence          |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Deterministic style order        | **Yes, for every measured pair.** Layers make source order irrelevant: F8's broken source order is still there on the layered build, but the parent wins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | F8, F9            |
| Parent/child variant inheritance | **Blocker is real but narrow and fixable.** Layers break a parent's override wherever the order puts the child later (F10). 1 real case in 206 cross-folder className overrides (207 style edges in all, F13), inside an import cycle. Ordering from style edges fixes it in the generator and keeps F9                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | F10, F11, F13     |
| Granularity                      | **Per-folder is not required for the scanned edges, but the scan is incomplete.** 4 tiers derived from style-edge depth match it on every scanned edge; a hand-picked base/components split leaves 61 edges to source order and fails a hostile order. On the full e2e stories `depth` breaks the modal close button on 44 renders where `styleedge` does not (F17), so `styleedge` is the safer default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | F14               |
| Consumer migration path          | **One requirement, stricter than the documented setup.** Import the theme stylesheet as a bundled import in the outermost layout that renders any library component. A nested-layout import or a CDN `<link>` silently falls back to load order (F15). Several themes and runtime switching are fine. **App overrides give the same result as a single-layer build for every documented route and every common one measured** (unlayered CSS, `@layer main`, `!important`, inline style, tokens, CSS Modules, Tailwind v4, runtime CSS-in-JS: 92 of 96 applicable cells, F19). The exception is CSS written into the library's own layers (`@layer fds.<folder>`), which changes result and becomes load-order dependent. Per-folder layer names must stay private and be documented as such. Moving the library from rules directly in `fds` (alpha.14) into sublayers already changes `@layer fds { }` and `@layer fds.* { }` overrides, with one sublayer too | F5, F12, F15, F19 |

Conditions for adopting:

1. **Order from style edges, not JS imports.** The generator must order by who
   passes a class to whom, so cycle members are ordered by styling direction
   (F10, F11), and it must declare every styled folder, not only those reachable
   from `src/index.ts` (F13). Built and measured in the spike generator (F13).
2. **Fail the build on a style cycle.** With the order generated from the edges, a
   new override can only break it by closing a cycle. The spike generator fails the
   build then (F13). The production version needs a reviewed exemption list for
   false positives, since the scan works at folder level.
3. **The order statement must load first** in consumer apps (E0, F12, F15). The
   documented setup is not enough on its own: the theme has to be a bundled import
   in the outermost layout that renders library components, and a CDN `<link>`
   cannot carry the order. The migration step is to state this as a hard
   requirement and detect it (for example a dev-mode warning when a component
   layer appears before the statement), or to move the order statement out of the
   theme stylesheet into something every component loads first.
4. **Resolve the five layering changes before shipping.** Layering resolves specificity
   differently from one layer. Against a single-layer build it changes 4 styles on the
   stories (94 of 2,076 e2e story renders) and fails 38 e2e tests (F17): the banner and
   navbar icons grow, the OTP and unit-number read-only inputs gain padding or margin. A
   fifth, the navbar's mobile submenu chevron (18px to 20px), shows only with the drawer
   open. Decided 2026-10-28 and 2026-11-03: the three icon sizes are intended, so those
   components must win in both builds and 16 e2e baselines are regenerated; the read-only
   inputs are regressions, fixed by re-declaring `input-group`'s state rules in the
   component. Simulated on built CSS (webpack), this leaves 0 layering renders and, on
   the 5 spec folders the fixes touch, no e2e test failing on only one build (F17,
   simulated fixes). The source fixes, a full e2e run and a Turbopack run are still owed. `depth` additionally breaks the modal close
   button where the edge scan is incomplete; the scan must read every style file and
   descendant selectors (F17) before `depth` can be trusted.
5. **Layer names stay private.** Consumers must not write into `fds` or `fds.<folder>`
   (F19): on per-folder layers such rules tie with the library and are decided by load
   order, and a folder rename silently flips them. Document this in the troubleshooting
   page, so that renaming or reordering folder layers is not a breaking change.

Named risks the decision owner accepts with this verdict:

-   **Incomplete scan (E8 descoped).** The style-edge scan is a regex lower bound
    (207 edges, 205 after exemptions) and no runtime flip scan exists. A missed edge can hide a cycle from the
    build check (condition 2) or leave an override to the generated order, as F10 did
    before F11. Mitigated by the follow-up scanner ticket.
-   **Probe coverage.** 7 probes, 6 real collisions, one hostile-order pair, Chromium
    only, Next 16.3.6 only (see "Untested and caveats").
-   **Rare reordering.** 5 builds per library (F16) cannot rule out a
    reordering that happens one build in many.
-   **Criterion 2 rests on a simulation.** The screenshot half is met only with the
    fixes patched into built CSS, on webpack, with the full e2e suite run on four of
    the five fixes (see the Verdict paragraph above).

Rejected alternatives to this verdict:

-   _Redeclare variants in every child_ (spec option 1): not needed as the general
    approach, since the generated order handles every scanned variant relationship
    but one. It is still needed in places: condition 4 re-declares `input-group`'s
    read-only rules in two children (F17), so a component that composes `input-group`
    and overrides its padding or margin needs the same.
-   _Hand-ordered layers per variant_ (spec option 3): not needed either; one move
    fixed the only real case. The generator does the ordering.
-   _Rely on `cssChunking: "graph"`_: fixed F8 here, but by reordering, with no
    guarantee (F8). Keep it as a workaround, not the fix.
-   _The non-layer paths in [02](02-alternative-paths.md)_ (specificity bumps, `@import`
    ordering, a single pre-ordered stylesheet) were not run. The charter makes 02
    conditional on layers failing, and they did not. 02 records why each was not
    needed.

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
-   ~~Can `theme-late` (F12) happen in a real app?~~ Yes (F15): a theme imported in a
    nested layout under a layout that renders a library component, and a theme
    loaded by a CDN `<link>`, both put component layers before the statement.
-   Why does the default chunking move `typography` after `timeline` (F8)? Not
    needed for the verdict, since layers make the order irrelevant, but it would
    say which pairs the published build breaks.

## Follow-up tickets

**Resolve the five layering changes (F17), on the bug ticket.** Decided 2026-10-28
(chevron 2026-11-03), replacing the 2026-10-27 decision that the first four were
regressions: the consuming component's icon size is intended, and the read-only inputs
keep today's rendering. Each is a pair of rules where the child's more specific rule
wins in one layer and the parent's rule wins under layers; the fix makes both builds
render the intended value. Done when `docs/spike/experiments/sweep/run-e2e.sh` passes for
the layered build, with the 16 icon baselines regenerated (38 failures before the fixes,
`e2e-summary.txt`; 22 with the simulated fixes, the same on both builds, F17). The
6 BookingSG logo baselines (navbar 4, footer 2) are stale against the remote logo and
fail on both builds; they need regenerating too, but are not layering.

| Change                                              | Rule that should win                                                                             | Fix (simulated in F17)                                                     |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Smart-app-banner dismiss icon 18px became 20px      | `src/smart-app-banner/smart-app-banner.styles.ts:59` `cross` 1.25rem (intended)                  | beat `ClickableIcon`'s `svg` rule in one layer too; regenerate 7 baselines |
| Navbar menu icon 18px became 24px                   | `src/navbar/navbar.styles.ts:96` `mobileMenuIcon` 1.5rem (intended)                              | same; regenerate 5 baselines                                               |
| Navbar mobile submenu chevron 18px became 20px      | `src/navbar/navbar-items.styles.ts:165` `chevronIcon` 1.25rem (intended)                         | same, scoped to `expandCollapseButton`; regenerate 4 baselines             |
| Read-only OTP input gains 16px side padding         | `src/input-group/input-group.styles.ts:14`, `:33` `[data-read-only] { padding: 0 }` (regression) | re-declare it on both OTP inputs                                           |
| Read-only unit-number divider margin 4px became 8px | `src/input-group/input-group.styles.ts:61` `[data-read-only] { margin-right: 4px }` (regression) | re-declare it, and the right-position margins, on the hash container       |

Evidence: `sweep/traces-f17.txt` (competing rules and computed values per build),
`sweep/cmp/` (side-by-side images), `sweep/e2e-results/` (reports; diff images are
regenerated by `run-e2e.sh`), and for the fixes `sweep/simulate-fixes.mjs`,
`sweep/results-*fixed*.jsonl` and `sweep/traces-fixed.txt`.

**Other follow-ups** (estimates are rough, for planning):

| Ticket                                      | Scope                                                                                                                                                                                                            | Done when                                                                                                           | Rough size |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| Style-edge generator in the build           | Rewrite F13's generator for production: order `fds.<folder>` layers from style edges, declare every styled folder, fail the build on a style cycle with a reviewed exemption list (conditions 1, 2)              | Build emits the order statement; a new cycle fails CI                                                               | 3-5 days   |
| Complete style-edge scanner (E8 follow-up)  | Parse every style file, multi-line `clsx(...)`, classes passed through props and descendant selectors, instead of the regex; add a runtime check for flips in drawer/menu states                                 | Scanner finds the known miss (`error-display -> typography`) and the edge behind the modal close-button break (F17) | 3-5 days   |
| Order statement loads first                 | Hard requirement in the setup docs, plus a dev-mode warning when a component layer appears before the order statement (condition 3, F12, F15)                                                                    | Warning fires on F12's `theme-late` page                                                                            | 1-2 days   |
| Consumer override guidance                  | Add the "Overriding component styles" section to `stories/getting-started/troubleshooting.mdx`, from the proposal in `experiments/e2/E9-FINDING.md`; state that `fds` layer names are private (condition 5, F19) | Docs merged; Tailwind combined-statement case measured or marked untested                                           | 1 day      |
| Ship `cssChunking: "graph"` workaround docs | 02 path #5, independent of the layer work                                                                                                                                                                        | Docs merged                                                                                                         | 0.5 day    |

Production work is a rewrite, not a promotion of the
`rl/css-layers` spike code. That includes the spike generator in
`rollup/add-css-layer-plugin.js` and `rollup/style-edges.js` on `gz/css-layers`
(F13): it is evidence that the approach works, not code to merge as is.
