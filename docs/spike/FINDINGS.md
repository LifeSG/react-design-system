# CSS ordering spike: findings

**Status:** Done (2026-11-18) |
**Timebox:** none set / about 5 weeks (2026-10-15 to 2026-11-18) | **Branch:**
`gz/css-layers` @ `53b6d7d1e`, built on `rl/css-layers` (`93cd86ede`)

This is the decision document for the spike. It owns the answer, the verdict and the
proposal. The data lives elsewhere and is cited, not repeated:

-   [01-css-layers.md](01-css-layers.md): the lab notebook. Findings F1 to F19, each
    with the command that reproduces it, plus the full caveats list.
-   [02-alternative-paths.md](02-alternative-paths.md): the non-layer paths and why
    they were not run.
-   `experiments/` and `scripts/`: the apps, scripts and result files behind each
    finding.

Every claim below is labelled **Measured** (we ran it), **Read** (from docs or source)
or **Assumed**, and names the finding it comes from. Assumed claims do not feed the
verdict.

## Question

From the charter in [README.md](README.md):

> Can a static layer order give the same CSS cascade across Next 16 production builds,
> without redeclaring variants in every child or hand-ordering layers per variant
> relationship? If not, which alternative in 02 does?

The decision it unblocks: which approach we build, per-folder layers, tier layers, or
a non-layer path.

Sub-questions from the source spec ([../css-layer-specs.md](../css-layer-specs.md)):
consumer migration path, granularity, and the impact on parent/child variant
inheritance and consumer overrides.

## Answer

**Partly yes.** One static layer order gives a stable cascade across Next 16
production builds on both bundlers: per-folder `fds.<folder>` layers, ordered from
style edges (`styleedge`). It needs no hand-ordering per relationship, apart from
one exemption. It does not remove all work in the children. Layering changes the
result of 5 known parent/child style pairs, and those must be fixed in source before
shipping.

| Charter clause or spec question                                | Answer                                                                                                                                                                                                                              | Basis                    |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Same cascade across production builds                          | **Yes**, for every probe measured: 0 wrong on the layered builds, 0 of 456 probe cells varying across 5 builds, both bundlers, both `cssChunking` settings                                                                          | F8, F9, F16 (Measured)   |
| Without hand-ordering layers per relationship                  | **Yes, with one exemption.** The generator orders from 207 style edges (who passes a class to whom) and fails the build on a cycle. One false-positive cycle is exempted by hand (`NOT_COLLIDING`)                                  | F13 (Measured)           |
| Without redeclaring variants in every child                    | **Partly.** Not in every child, but not in none: 2 children re-declare `input-group`'s read-only rules, and 3 icons need a specificity bump. Five relationships are known; the incomplete scan may hide more                        | F17 (Measured)           |
| Spec: consumer migration                                       | **One hard requirement.** The theme stylesheet that carries the order statement must load first: a bundled import in the outermost layout that renders library components. A nested-layout import or a CDN `<link>` loses the order | F5, F12, F15 (Measured)  |
| Spec: granularity                                              | **Per-folder (85 layers) is the default.** 4 tiers derived from style-edge depth match it on every scanned edge but break the modal close button where the scan is incomplete. A hand-picked 2-tier split fails a hostile order     | F14, F17 (Measured)      |
| Spec: parent/child variant inheritance                         | **The blocker is real but narrow.** 1 inverted pair in 206 cross-folder className overrides, inside an import cycle. Ordering from style edges fixes it in the generator                                                            | F10, F11, F13 (Measured) |
| Spec: consumer overrides                                       | **Unchanged for every documented route.** Same result as a single-layer build in 92 of 96 applicable cells. The 4 that differ all write into a library layer by name (`@layer fds.<folder>`)                                        | F19 (Measured)           |
| Spec mitigation 1: redeclare variants in children              | Needed in 2 children only (row 3)                                                                                                                                                                                                   | F17 (Measured)           |
| Spec mitigation 2: refactor children never to override parents | **Not pursued.** The spec rules it out as impossible. Its size: at least 207 style edges across 95 folder pairs (a regex lower bound). 02 path #6 is the incremental form of it                                                     | F13 (Measured count)     |
| Spec mitigation 3: hand-ordered layers per variant             | Not needed: the generator does the ordering (row 2)                                                                                                                                                                                 | F11, F13 (Measured)      |
| Alternatives in 02                                             | Not run. The charter makes them conditional on layers failing                                                                                                                                                                       | 02 _Outcome_             |

### Exit criteria

| Criterion                                                                       | Status                                          | Detail                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Bug reproduced in a Next 16 production build                                 | **Met**                                         | Wrong on Turbopack default and webpack default, never on `graph` or `strict`, never in dev (F8)                                                                                                                                                                                                                                                                                                             |
| 2. Identical order across 5+ builds and entry points, no screenshot regressions | **Order: met. Screenshots: not met as written** | Order is stable across 5 builds, 7 libraries and 4 bundler settings (F16). The layered build fails 38 e2e tests and changes 94 of 2,076 story renders (F17). These come out level only in a simulation: fixes patched into built CSS, webpack only, all five fixes run on just 5 spec folders. Three of the five changes count as fixed because they were reclassified as intended (2026-10-28, 2026-11-03) |
| 3. Each spec requirement has a measured finding or "not viable"                 | **Met, one part Assumed**                       | Every requirement has a Measured finding (table above). How far the granularity answer and the cycle check can be trusted depends on scan completeness (E8), which was descoped                                                                                                                                                                                                                             |

## Evidence

Reproduce commands are in each finding in 01. The key ones:

| Finding  | What was run                                                                                                  | Result                                                                                                                 | Reproduce                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| F5       | Minimal app: order statement in an imported file, 7 scenarios, both bundlers, 5 builds each                   | The order holds only when its file loads first                                                                         | `RUNS=5 docs/spike/experiments/e0/run.sh`                                       |
| F8       | Published alpha.14 in a Next 16.3.6 app with 8 overlapping routes and client navigation, 4 bundler settings   | `timeline` title wrong on Turbopack and webpack default; `footer` label wrong on webpack default                       | `RUNS=2 experiments/e2/run.sh`, then `experiments/e2/ab.sh`                     |
| F10, F11 | Per-folder layers in import-graph order, then one explicit reorder                                            | Import order inverts 1 pair (textarea error margin); moving `input-textarea` after `form` fixes it and keeps F9        | `scripts/layer-inversions.mjs`, `scripts/reorder-layers.mjs`                    |
| F13      | Generator that orders layers from style edges and fails on a cycle                                            | 207 edges, 0 violated; 0 wrong of 912 probe results                                                                    | `scripts/style-order.mjs`, then `TAG=e1 LIB=local RUNS=2 experiments/e2/run.sh` |
| F14      | 4 depth tiers and a 2-tier split against per-folder                                                           | Depth: 0 edges inside a tier. 2-tier: 61, and fails a hostile order                                                    | `scripts/tier-layers.mjs report`                                                |
| F12, F15 | Consumer setups: late or missing theme, nested-layout import, CDN `<link>`, several themes, runtime switching | Order applies only if the theme loads first; nested and CDN delivery lose it                                           | `experiments/e2/run-consumer.sh`, `run-delivery.sh`                             |
| F16      | 7 libraries × 4 bundler settings × 5 builds; 3,080 full-page screenshots                                      | Layered candidates 0 wrong of 570 per cell; import-order generator 45 wrong; screenshots stable except toast animation | `experiments/final/run-final.sh`                                                |
| F17      | All 519 story pages, 2 colour schemes × 2 viewports, plus the repo's e2e suite (1,106 tests), flat vs layered | 94 renders and 38 e2e tests change, in 4 components (5 with the drawer chevron); 0 renders after the simulated fixes   | `experiments/sweep/run-sweep.sh`, `run-e2e.sh`, `simulate-fixes.mjs`            |
| F19      | 15 consumer override mechanisms × 6 targets on single-layer, per-folder and published builds                  | 92 of 96 applicable cells identical; 4 differ, all writes into `fds.<folder>`                                          | `experiments/e2/make-overrides.mjs` and `run-consumer.sh` (full command in F19) |

**How the test environment differs from production:**

-   Next 16.3.6 only, headless Chromium only. Story sweep at 1280px and 375px; probes
    at 1280px only.
-   Synthetic routes (`/nav`, `/consumer`, `/adversarial`) and a copy of the repo's e2e
    app, not a real consumer app.
-   The layered build was never run under `next dev`.
-   The story sweep and the e2e suite built with webpack only (`run-sweep.sh:31`,
    `run-e2e.sh:29`). Turbopack is covered for order stability (F16), not for the
    screenshots.
-   Fixes for the 5 changes were simulated on built CSS, not written in source.

## What didn't work

The full table is in 01, _What didn't work_. The ones that matter for the next person:

-   **Ordering layers by JS imports** (the original `rl/css-layers` generator, via
    `madge`). It inverts the textarea pair inside an import cycle (45 wrong per cell in
    F16), and it never declares the subpath-only folders `schedule` and `local-nav`
    (F13). Import direction is the wrong signal for style priority.
-   **Reproducing with one story per route** (F6, F7). A page that bundles only its own
    CSS can't get another route's chunk order, so every probe passed. The bug needs
    overlapping routes and client navigation (F8).
-   **A hand-picked `base`/`components` split** (the spec's example shape). It leaves 61
    edges to source order and fails a hostile order (F14).
-   **Trusting the edge scan as complete.** It missed 3 of the 5 causes in F17: a style
    file it does not read (`slot-styles.ts`), a pair with no edge, and descendant `svg`
    selectors.

## Alternatives considered

| Option                                                   | Outcome                                                                                                                       | Source   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- |
| Tier layers (4 depth tiers, 2-tier split)                | Spiked. Depth tiers match on scanned edges but break the modal where the scan is incomplete; the 2-tier split fails           | F14, F17 |
| 02 #1 Specificity instead of order                       | Not run. Fallback for an edge that closes a style cycle; F17's icon fixes are a small case of it already                      | 02       |
| 02 #2 `@import` between component CSS files              | Not run. Unknown, not rejected: untested whether bundlers keep `@import` order in chunks                                      | 02       |
| 02 #3 Single pre-ordered stylesheet                      | Not run. Still an escape hatch for consumers who can't load the order statement first (F15's CDN case)                        | 02       |
| 02 #5 `cssChunking: "graph"`                             | Fixed F8 here, by reordering, with no guarantee. Keep as a documented workaround, not the fix                                 | F8, 02   |
| 02 #6 Move variant styling into children (spec option 2) | Not needed for the decision: one inverted edge, not the many that would trigger it. A possible long-term direction, not sized | 02, F13  |

## Risks and open questions

Risks the decision owner accepts with the recommendation:

| Risk                                                                                                                                                                                                                                                  | What would resolve it                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Incomplete scan.** The edge scan is a regex lower bound and no runtime flip scan exists (E8 descoped). More flips like the chevron may exist in states no story or spec reaches. That this does not change the choice of `styleedge` is **Assumed** | The complete scanner follow-up                                                            |
| **Screenshot criterion rests on a simulation.** Source fixes are not written; the full e2e suite has not run with all five fixes; Turbopack has not run the screenshots                                                                               | Phase 1 below                                                                             |
| **One Next version, synthetic apps, no dev mode.** Next 16.3.6 only; the layered build never ran under `next dev`; Linaria extraction in dev is untested                                                                                              | _(proposed)_ A pilot in one real consumer app, on its Next version, in dev and prod       |
| **Rare reordering.** 5 builds per library can't rule out a reordering that happens one build in many                                                                                                                                                  | Accept; the layered build makes order irrelevant for every edge the generator knows about |
| **Layer names become public API if consumers write into them** (F19)                                                                                                                                                                                  | Document them as private (condition 5)                                                    |

Open questions that do not block the decision:

-   Does Linaria keep `@layer` blocks intact in dev with `next-with-linaria`? Only the
    repo's own e2e app compiles `src/` in dev; consumers use `dist/`.
-   Why does default chunking move `typography` after `timeline` (F8)? It would say
    which pairs the published build breaks today.
-   Not measured in E9: a consumer `!important` inside `fds.<folder>`, Tailwind through
    `@tailwindcss/postcss`, styled-components with SSR.

## Recommendation and proposal going forward

### Recommendation

**Adopt `styleedge` per-folder layers**, under five conditions:

1. **Order from style edges, not JS imports**, and declare every styled folder (F10,
   F11, F13).
2. **Fail the build on a style cycle**, with a reviewed exemption list (F13).
3. **Load the order statement first** in consumer apps, as a hard, detected
   requirement (F5, F12, F15).
4. **Fix the five layering changes in source before shipping**: three icon sizes
   (intended, so they must also win in one layer) and two read-only input regressions
   (F17).
5. **Keep layer names private**, and document that consumers must not write into
   `fds` or `fds.<folder>` (F19).

Don't adopt tier layers: they need a complete scan to be safe (F17). Don't adopt
`cssChunking: "graph"` as the fix: it has no guarantee (F8). Document it as a
workaround.

### Proposal

Rough total: **8.5 to 13.5 days**, plus the bug ticket for the five changes.

Items marked _(proposed)_ were added while writing this doc. They are not among the
follow-ups in 01 and no experiment backs them. The decision owner can keep, change or
drop them (see _Decisions the owner needs to make_).

**Phase 0, now, independent of the layer work**

-   Document `cssChunking: "graph"` as a supported workaround in
    `stories/getting-started/troubleshooting.mdx` (0.5 day). It helps today's
    consumers while the rest ships.

**Phase 1, close exit criterion 2**

-   Fix the five changes in the style files (the bug ticket). Regenerate the 16 icon
    baselines and the 6 stale BookingSG logo baselines.
-   _(proposed: a separate ticket; in 01 this is the bug ticket's done-when)_ Run the
    full e2e suite and the story sweep against a layered build from source, on webpack
    **and** Turbopack. Done when no test fails on only one build. **Depends on
    re-enabling Turbopack in the e2e app**: `e2e/nextjs-app/next.config.ts` disables it
    because of this bug (`FIXME: BOOKINGSG-9316`, lines 8 and 23), which is 02 path #7.
-   This can start before the layered build exists: the simulated fixes give the same
    result in one layer (F17). That the Linaria source fix compiles the same way is
    **Assumed**, and this phase checks it.

**Phase 2, build it**

-   **Complete style-edge scanner** (3 to 5 days). Parse every style file, multi-line
    `clsx(...)`, classes passed through props and descendant selectors. Add a runtime
    check for flips in drawer and menu states. Done when it finds the known misses
    (`error-display -> typography`, `modal-v2 -> shared`). _(proposed ordering)_ Land
    it before relying on the cycle check or on condition 4's list being complete. The
    generator only orders the edges the scan finds, and the scan missed 3 of the 5
    causes in F17.
-   **Style-edge generator in the build** (3 to 5 days). Rewrite F13's generator for
    production: order `fds.<folder>` layers from the scanner's edges, declare every
    styled folder, fail CI on a new cycle, with a reviewed exemption list.

**Phase 3, consumer side**

-   **Order statement loads first** (1 to 2 days). State it as a hard requirement in
    the setup docs and add a dev-mode warning when a component layer appears before
    the statement. Done when the warning fires on F12's `theme-late` page.
-   **Consumer override guidance** (1 day). Add "Overriding component styles" to the
    troubleshooting page, from the proposal in `experiments/e2/E9-FINDING.md`, and
    state that `fds` layer names are private. _(proposed)_ The release notes should
    also say that moving rules from `fds` into sublayers changes `@layer fds { }` and
    `@layer fds.* { }` overrides. The change itself is Measured (F19,
    `experiments/e2/results/overrides-matrix.md`); calling it out in the release notes
    is the proposal.
-   _(proposed)_ **Pilot** (not estimated). Before a stable release, run one real
    consumer app on the layered build in dev and prod, on its own Next version. This
    closes the environment risk above.

**Decisions the owner needs to make**

-   Accept the named risks above, or ask for the pilot before adopting.
-   Keep, change or drop each _(proposed)_ item:
    -   the pilot: before adopting, before a stable release, or not at all;
    -   full e2e and sweep on both bundlers: its own ticket, or the bug ticket's
        done-when;
    -   the scanner: before the generator, in parallel, or after it;
    -   the `@layer fds { }` change: a release note, a breaking-change notice, or
        nothing.
-   Name an owner for each ticket below.
-   Whether 02 #6, moving variant styling into children, is a long-term direction. It
    would shrink the 207 style edges the generator depends on, but it is not sized.

### Follow-up tickets

| Ticket                                                                                                            | Phase | Rough size | Owner |
| ----------------------------------------------------------------------------------------------------------------- | ----- | ---------- | ----- |
| `cssChunking: "graph"` workaround docs                                                                            | 0     | 0.5 day    | TBD   |
| Fix the five layering changes (bug ticket)                                                                        | 1     | not sized  | TBD   |
| Full e2e and sweep on both bundlers _(proposed)_; needs Turbopack re-enabled in `e2e/nextjs-app` (BOOKINGSG-9316) | 1     | not sized  | TBD   |
| Complete style-edge scanner                                                                                       | 2     | 3-5 days   | TBD   |
| Style-edge generator in the build                                                                                 | 2     | 3-5 days   | TBD   |
| Order statement loads first                                                                                       | 3     | 1-2 days   | TBD   |
| Consumer override guidance                                                                                        | 3     | 1 day      | TBD   |
| Pilot in a real consumer app _(proposed)_                                                                         | 3     | not sized  | TBD   |

Production work is a rewrite, not a promotion of the spike code. That includes
`rollup/add-css-layer-plugin.js` and `rollup/style-edges.js` on `gz/css-layers`, and the
`rollup.config.js` and `package.json` (`madge`) changes that wire them in.
