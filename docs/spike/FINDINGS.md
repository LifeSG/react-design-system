# CSS ordering spike: findings

**Status:** Done (2026-11-18; E8 added 2026-11-23 as F18) |
**Timebox:** none set / about 5 weeks (2026-10-15 to 2026-11-18) | **Branch:**
`gz/css-layers` @ `0d4ac6ed7`, built on `rl/css-layers` (`93cd86ede`)

This is the decision document for the spike. It owns the answer, the verdict and the
proposal. The data lives elsewhere and is cited, not repeated:

-   [01-css-layers.md](01-css-layers.md): the lab notebook. Findings F1 to F19 (F18 is E8), each
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
one exemption. It does not remove all work in the children. Layering resolves specificity differently
from one layer: 22 cross-folder rule pairs change winner (F18). Five of them change
what the stories render and must be fixed in source before shipping (F17); 8 more are
in `:active` and `:hover` states no story reaches and still need a decision.

| Charter clause or spec question                                | Answer                                                                                                                                                                                                                                                                                                                                                                                                                             | Basis                     |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Same cascade across production builds                          | **Yes**, for every probe measured: 0 wrong on the layered builds, 0 of 456 probe cells varying across 5 builds, both bundlers, both `cssChunking` settings                                                                                                                                                                                                                                                                         | F8, F9, F16 (Measured)    |
| Without hand-ordering layers per relationship                  | **Yes, with one exemption.** The generator orders from 207 style edges (who passes a class to whom) and fails the build on a cycle. One false-positive cycle is exempted by hand (`NOT_COLLIDING`)                                                                                                                                                                                                                                 | F13 (Measured)            |
| Without redeclaring variants in every child                    | **Partly.** Not in every child, but not in none: 2 children re-declare `input-group`'s state rules, and 3 icons need a specificity bump. A runtime check finds 22 specificity flips in all, 8 of them in interaction states still to decide                                                                                                                                                                                        | F17, F18 (Measured)       |
| Spec: consumer migration                                       | **One hard requirement.** The theme stylesheet that carries the order statement must load first: a bundled import in the outermost layout that renders library components. A nested-layout import or a CDN `<link>` loses the order                                                                                                                                                                                                | F5, F12, F15 (Measured)   |
| Spec: granularity                                              | **Per-folder (85 layers) is the default; tiers are viable only from a complete edge set.** The style scan misses 12 of 66 runtime edges; `styleedge` orders all 12 correctly, 4 tiers from the scan do not (the modal breaks, 4 pairs left to source order). 5 tiers from the full edge set render every story like `styleedge`, but need the runtime check as their edge source. A hand-picked 2-tier split fails a hostile order | F14, F17, F18 (Measured)  |
| Spec: parent/child variant inheritance                         | **The blocker is real but narrow.** 1 inverted pair in 206 cross-folder className overrides, inside an import cycle. Ordering from style edges fixes it in the generator                                                                                                                                                                                                                                                           | F10, F11, F13 (Measured)  |
| Spec: consumer overrides                                       | **Unchanged for every documented route.** Same result as a single-layer build in 92 of 96 applicable cells. The 4 that differ all write into a library layer by name (`@layer fds.<folder>`)                                                                                                                                                                                                                                       | F19 (Measured)            |
| Spec mitigation 1: redeclare variants in children              | Needed in 2 children so far (row 3)                                                                                                                                                                                                                                                                                                                                                                                                | F17 (Measured)            |
| Spec mitigation 2: refactor children never to override parents | **Not pursued.** The spec rules it out as impossible. Its size: 66 folder pairs conflict at runtime on the stories (F18), from at least 207 static style edges (F13). 02 path #6 is the incremental form of it                                                                                                                                                                                                                     | F13, F18 (Measured count) |
| Spec mitigation 3: hand-ordered layers per variant             | Not needed: the generator does the ordering (row 2)                                                                                                                                                                                                                                                                                                                                                                                | F11, F13 (Measured)       |
| Alternatives in 02                                             | Not run. The charter makes them conditional on layers failing                                                                                                                                                                                                                                                                                                                                                                      | 02 _Outcome_              |

### Exit criteria

| Criterion                                                                       | Status                                          | Detail                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Bug reproduced in a Next 16 production build                                 | **Met**                                         | Wrong on Turbopack default and webpack default, never on `graph` or `strict`, never in dev (F8)                                                                                                                                                                                                                                                                                                             |
| 2. Identical order across 5+ builds and entry points, no screenshot regressions | **Order: met. Screenshots: not met as written** | Order is stable across 5 builds, 7 libraries and 4 bundler settings (F16). The layered build fails 38 e2e tests and changes 94 of 2,076 story renders (F17). These come out level only in a simulation: fixes patched into built CSS, webpack only, all five fixes run on just 5 spec folders. Three of the five changes count as fixed because they were reclassified as intended (2026-10-28, 2026-11-03) |
| 3. Each spec requirement has a measured finding or "not viable"                 | **Met**                                         | Every requirement has a Measured finding (table above). Scan completeness (E8), descoped on 2026-11-18, was run after all (F18) and confirms the granularity answer                                                                                                                                                                                                                                         |

## Evidence

Reproduce commands are in each finding in 01. The key ones:

| Finding  | What was run                                                                                                                                     | Result                                                                                                                                                                    | Reproduce                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| F5       | Minimal app: order statement in an imported file, 7 scenarios, both bundlers, 5 builds each                                                      | The order holds only when its file loads first                                                                                                                            | `RUNS=5 docs/spike/experiments/e0/run.sh`                                                         |
| F8       | Published alpha.14 in a Next 16.3.6 app with 8 overlapping routes and client navigation, 4 bundler settings                                      | `timeline` title wrong on Turbopack and webpack default; `footer` label wrong on webpack default                                                                          | `RUNS=2 experiments/e2/run.sh`, then `experiments/e2/ab.sh`                                       |
| F10, F11 | Per-folder layers in import-graph order, then one explicit reorder                                                                               | Import order inverts 1 pair (textarea error margin); moving `input-textarea` after `form` fixes it and keeps F9                                                           | `scripts/layer-inversions.mjs`, `scripts/reorder-layers.mjs`                                      |
| F13      | Generator that orders layers from style edges and fails on a cycle                                                                               | 207 edges, 0 violated; 0 wrong of 912 probe results                                                                                                                       | `scripts/style-order.mjs`, then `TAG=e1 LIB=local RUNS=2 experiments/e2/run.sh`                   |
| F14      | 4 depth tiers and a 2-tier split against per-folder                                                                                              | Depth: 0 edges inside a tier. 2-tier: 61, and fails a hostile order                                                                                                       | `scripts/tier-layers.mjs report`                                                                  |
| F12, F15 | Consumer setups: late or missing theme, nested-layout import, CDN `<link>`, several themes, runtime switching                                    | Order applies only if the theme loads first; nested and CDN delivery lose it                                                                                              | `experiments/e2/run-consumer.sh`, `run-delivery.sh`                                               |
| F16      | 7 libraries × 4 bundler settings × 5 builds; 3,080 full-page screenshots                                                                         | Layered candidates 0 wrong of 570 per cell; import-order generator 45 wrong; screenshots stable except toast animation                                                    | `experiments/final/run-final.sh`                                                                  |
| F17      | All 519 story pages, 2 colour schemes × 2 viewports, plus the repo's e2e suite (1,106 tests), flat vs layered                                    | 94 renders and 38 e2e tests change, in 4 components (5 with the drawer chevron); 0 renders after the simulated fixes                                                      | `experiments/sweep/run-sweep.sh`, `run-e2e.sh`, `simulate-fixes.mjs`                              |
| F18      | Runtime conflict check: every cross-folder rule pair on each element, 519 stories × 2 viewports; then a 5-tier `depth-full` build swept like F17 | 7 of 7 known cases found; 12 edges the scan misses, all ordered right by `styleedge`; 22 specificity flips; 0 cycles; `depth-full` 0 layering renders against `styleedge` | `experiments/scan/run-scan.sh`, `gate.mjs`, `analyse.mjs`, `depth-full.mjs` (full command in F18) |
| F19      | 15 consumer override mechanisms × 6 targets on single-layer, per-folder and published builds                                                     | 92 of 96 applicable cells identical; 4 differ, all writes into `fds.<folder>`                                                                                             | `experiments/e2/make-overrides.mjs` and `run-consumer.sh` (full command in F19)                   |

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
-   The runtime check (F18) sees elements present at rest, light scheme, webpack. The
    8 state flips are predicted from the cascade rules, not rendered in their state.

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
-   **Trusting the edge scan as complete.** It misses 12 of the 66 folder pairs that
    conflict at runtime (F18), through ordinary code: a style file not named
    `*.style(s).ts`, a hyphenated attribute, a class in a variable, a mixin.
-   **A cycle check as the only guard.** There is no cycle today, yet 22 pairs flip on
    edges that point the right way (F18).
-   **A static specificity rule to catch flips.** It finds all 22 only with the complete
    edge set and about 29,000 rule pairs flagged; narrowed to the passed class, it finds
    7 (F18). Only a rendered check sees which rules meet on an element.

## Alternatives considered

| Option                                                          | Outcome                                                                                                                                                                                                              | Source        |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tier layers (4 depth tiers, 5 `depth-full` tiers, 2-tier split) | Spiked. Tiers from the style scan break the modal and leave 4 pairs to source order; 5 tiers from the full edge set render like `styleedge`, but need the runtime check as their edge source; the 2-tier split fails | F14, F17, F18 |
| 02 #1 Specificity instead of order                              | Not run. Fallback for an edge that closes a style cycle; F17's icon fixes are a small case of it already                                                                                                             | 02            |
| 02 #2 `@import` between component CSS files                     | Not run. Unknown, not rejected: untested whether bundlers keep `@import` order in chunks                                                                                                                             | 02            |
| 02 #3 Single pre-ordered stylesheet                             | Not run. Still an escape hatch for consumers who can't load the order statement first (F15's CDN case)                                                                                                               | 02            |
| 02 #5 `cssChunking: "graph"`                                    | Fixed F8 here, by reordering, with no guarantee. Keep as a documented workaround, not the fix                                                                                                                        | F8, 02        |
| 02 #6 Move variant styling into children (spec option 2)        | Not needed for the decision: one inverted edge, not the many that would trigger it. A possible long-term direction, not sized                                                                                        | 02, F13       |

## Risks and open questions

Risks the decision owner accepts with the recommendation:

| Risk                                                                                                                                                                                                                                                                                                        | What would resolve it                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Scan coverage after E8.** The runtime check covers the stories at rest and the hover, active and focus rules of elements present at rest, light scheme, webpack. It misses elements that only exist after a click (closed menus, popovers, unopened modals, error states), consumer content and Turbopack | The rendered conflict check in CI (condition 2), extended to opened states                |
| **Screenshot criterion rests on a simulation.** Source fixes are not written; the full e2e suite has not run with all five fixes; Turbopack has not run the screenshots                                                                                                                                     | Phase 1 below                                                                             |
| **One Next version, synthetic apps, no dev mode.** Next 16.3.6 only; the layered build never ran under `next dev`; Linaria extraction in dev is untested                                                                                                                                                    | _(proposed)_ A pilot in one real consumer app, on its Next version, in dev and prod       |
| **Rare reordering.** 5 builds per library can't rule out a reordering that happens one build in many                                                                                                                                                                                                        | Accept; the layered build makes order irrelevant for every edge the generator knows about |
| **Layer names become public API if consumers write into them** (F19)                                                                                                                                                                                                                                        | Document them as private (condition 5)                                                    |

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
2. **Guard the order in CI**: fail the build on a style cycle, with a reviewed
   exemption list (F13), **and** run a rendered conflict check over the stories that
   fails on a new specificity flip or on a conflicting folder pair with no style edge.
   The cycle check alone cannot see flips (F18).
3. **Load the order statement first** in consumer apps, as a hard, detected
   requirement (F5, F12, F15).
4. **Fix the five layering changes in source before shipping**: three icon sizes
   (intended, so they must also win in one layer) and two input regressions (F17).
   **Re-decide the OTP one**: the change is on the editable inputs, not the read-only
   input the 2026-10-28 decision was about (F18 correction 1). **Decide the 8 state
   flips** F18 adds (`:active` on `filter`, `footer`, `menu`, `notification-banner` and
   carousel controls; `:hover` cursor on a disabled `masked-input`).
5. **Keep layer names private**, and document that consumers must not write into
   `fds` or `fds.<folder>` (F19).

Don't adopt tier layers: they are safe only with the runtime check as their edge
source, and per-folder layers already absorb a missed edge (F17, F18). Don't adopt
`cssChunking: "graph"` as the fix: it has no guarantee (F8). Document it as a
workaround.

### Proposal

Rough total: **8.5 to 13.5 days**, plus the bug ticket and the rendered conflict check,
which are not sized.

Items marked _(proposed)_ were added while writing this doc. They are not among the
follow-ups in 01 and no experiment backs them. The decision owner can keep, change or
drop them (see _Decisions the owner needs to make_).

**Phase 0, now, independent of the layer work**

-   Document `cssChunking: "graph"` as a supported workaround in
    `stories/getting-started/troubleshooting.mdx` (0.5 day). It helps today's
    consumers while the rest ships.

**Phase 1, close exit criterion 2**

-   Fix the five changes in the style files (the bug ticket), after re-deciding the OTP
    one and deciding the 8 state flips. Regenerate the 16 icon baselines and the 6
    stale BookingSG logo baselines.
-   _(proposed: a separate ticket; in 01 this is the bug ticket's done-when)_ Run the
    full e2e suite and the story sweep against a layered build from source, on webpack
    **and** Turbopack. Done when no test fails on only one build. **Depends on
    re-enabling Turbopack in the e2e app**: `e2e/nextjs-app/next.config.ts` disables it
    because of this bug (`FIXME: BOOKINGSG-9316`, lines 8 and 23), which is 02 path #7.
-   This can start before the layered build exists: the simulated fixes give the same
    result in one layer (F17). That the Linaria source fix compiles the same way is
    **Assumed**, and this phase checks it.

**Phase 2, build it**

-   **Rendered conflict check in CI** (not sized; the spike's scan runs in about 6
    minutes). Rebuild the idea, not the code, of F18's `conflict-scan.mjs`: load every
    story on the layered build and fail on a new cross-folder pair whose single-layer and
    layered winners differ, unless it is listed with a decision, and on a conflicting
    folder pair with no style edge. Done when it finds F18's 7 ground-truth cases and 22
    flips.
-   **Complete style-edge scanner** (3 to 5 days). Read every module that calls `css`
    and parse JSX instead of the regex. Done when it finds 11 of F18's 12 missed edges
    (all but `masked-input -> input`, which needs the rendered tree). _(proposed
    ordering)_ Land it before relying on the cycle check: the generator only orders the
    edges the scan finds, and the scan misses 12 of 66 (F18).
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
    would shrink the 66 conflicting folder pairs (F18) the order depends on, but it is not sized.

### Follow-up tickets

| Ticket                                                                                                            | Phase | Rough size | Owner |
| ----------------------------------------------------------------------------------------------------------------- | ----- | ---------- | ----- |
| `cssChunking: "graph"` workaround docs                                                                            | 0     | 0.5 day    | TBD   |
| Fix the five layering changes, re-decide OTP, decide 8 state flips (bug ticket)                                   | 1     | not sized  | TBD   |
| Full e2e and sweep on both bundlers _(proposed)_; needs Turbopack re-enabled in `e2e/nextjs-app` (BOOKINGSG-9316) | 1     | not sized  | TBD   |
| Rendered conflict check in CI                                                                                     | 2     | not sized  | TBD   |
| Complete style-edge scanner                                                                                       | 2     | 3-5 days   | TBD   |
| Style-edge generator in the build                                                                                 | 2     | 3-5 days   | TBD   |
| Order statement loads first                                                                                       | 3     | 1-2 days   | TBD   |
| Consumer override guidance                                                                                        | 3     | 1 day      | TBD   |
| Pilot in a real consumer app _(proposed)_                                                                         | 3     | not sized  | TBD   |

Production work is a rewrite, not a promotion of the spike code. That includes
`rollup/add-css-layer-plugin.js` and `rollup/style-edges.js` on `gz/css-layers`, and the
`rollup.config.js` and `package.json` (`madge`) changes that wire them in.
