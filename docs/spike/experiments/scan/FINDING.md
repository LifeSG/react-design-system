# F18 draft (E8)

Draft for `docs/spike/01-css-layers.md`, to be merged by hand after review. Brief:
`drafts/spike-e8-edge-scan-brief.md`. Everything here is in `docs/spike/experiments/scan/`.

### F18. E8: a runtime conflict check finds 12 folder edges the style scan misses and 22 specificity flips; `styleedge` orders all 12 correctly, a 4-tier `depth` does not, and 5 tiers from the full edge set render every story like `styleedge` (Measured)

Reproduce, from `docs/spike/experiments/scan/` (sweep app from `../sweep/prepare-app.sh`,
libraries from `../final/prepare-libs.sh`):

```
OUT=results/full ./run-scan.sh && node gate.mjs results/full && node analyse.mjs results/full \
  && (cd ../../../.. && node docs/spike/experiments/scan/why-missed.mjs) && node flip-rule.mjs results/full
node depth-full.mjs results/full && (cd ../sweep && LIBS=depth-full SCHEMES="light dark" \
  VIEWPORTS="desktop mobile" ./run-sweep.sh) && for r in flat styleedge depth; do \
  (cd ../sweep && node diff-sweep.mjs $r depth-full) > results/q6/results-$r-vs-depthfull.jsonl; done \
  && node sweep-summary.mjs results/q6/*.jsonl
```

The scan takes about 6 minutes, the `depth-full` sweep about 9 (webpack, port 4300, inside
the sandbox). Results: `results/full/` (pairs, pages, gate, analysis, causes, flip rule),
`results/q6/` (sweep diffs), `results/q6-smoke/` (the drift check).

**What the check does.** `conflict-scan.mjs` loads every story page of the sweep app on the
`styleedge` build (whose layer names are folder names) and collects every rule in a
`fds.<folder>` layer, including rules inside `@media` and `@supports` whether or not they
apply. It splits each selector into branches. State pseudo-classes (`:hover`, `:focus`,
`:focus-visible`, `:focus-within`, `:active`, `:visited`, `:autofill`) and pseudo-elements
are stripped before matching, and the branch is marked `stateDependent` or records its
pseudo-element. Each branch is matched against every element under `<body>`, so portals
are included. Then, for every element, every pair of rules from **different folders** that
set the same longhand is recorded. A shorthand containing `var()` is read through its
shorthand. Both declared values are computed in the element's own context (applied inline
`!important`, with transitions off), so a pair whose two values compute the same is known.

Each pair carries its specificity, `!important`, `styleedge` position, `depth` tier, and
the predicted winner in `flat` (`!important`, then specificity; a tie is `order-dependent`),
in `styleedge` and in `depth` (later layer wins; `!important` reverses it; within one tier,
fall back to `flat`). Pairs are deduplicated by (rule A, branch A, rule B, branch B,
property, pseudo-element), with one example page each.

**Scope.** 519 story pages × desktop and mobile = 1,038 page loads, light scheme, date
pinned. All 1,038 rendered, each with the order statement on all 20 theme sheets and the
theme variable resolved. 0 selectors were unparsable, 0 stripped branches were
unmatchable, and 0 sheets were unreadable. About 2,000 folder rules and 64 elements per
page. **708 cross-folder pairs** (700 selector pairs, 76 folder pairs, 80 of them state
dependent, 343 whose values compute differently). No two folders set the same custom
property on one element. The library CSS has no nested rules (checked with `postcss`), so
the check skips no library rule.

**Ground truth (brief): 7 of 7 found** (`results/full/gate.txt`):

| Kind             | Case                          | Result line (abridged)                                                                                                                                                |
| ---------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Missing edge     | `modal-v2 -> shared`          | `padding-*`: `.s1s12qxk` 0px vs `.m18ljjag` 24px on the close button; `flat` tie, `styleedge` modal-v2, `depth` shared; no static edge                                |
| Missing edge     | `unit-number -> input-group`  | `margin-right`: `.l1s6ick6[data-read-only]` (0,2,0) 4px vs `.h1ujh1ah` (0,1,0) 8px; no static edge                                                                    |
| Missing edge     | `error-display -> typography` | `margin-bottom` on the title `h2`: `.twamush` 16px vs `.d4n1hjq` 0px; `flat` tie; no static edge                                                                      |
| Specificity flip | smart-app-banner              | `width`: `shared .m18ljjag svg` (0,1,1) 18px vs `.cp9l7rn` (0,1,0) 20px; `flat` shared, layered banner                                                                |
| Specificity flip | navbar                        | `width`: `.m11vsg37` (0,1,0) 24px vs `.m18ljjag svg` 18px; also `.csth4gk` and the chevron `.c160mxwv`                                                                |
| Specificity flip | otp-verification              | `padding-left/right`: `input-group .nx53mj4[data-no-border]` / `.afvd13[data-no-border]` (0,2,0) 0px vs `.e1ik236m` / `.pqn3wrd` (0,1,0) 16px. See correction 1 below |
| Specificity flip | unit-number                   | as the missing edge above: `flat` input-group, layered unit-number                                                                                                    |

**Model check.** On the `styleedge` build, the element's actual value equals the predicted
`styleedge` winner in **292 of 302** pairs at rest whose values differ. In the other 10, a
third rule on the same element sets the value (the OTP read-only class, `input-group`'s
own `[data-read-only]`, `progress-indicator`'s `.i8ugwdc`, `timetable`'s `.rr9vcmw`), so
the pairwise prediction does not decide there (`analysis.md`, "Model check").

#### Q1. 12 runtime edges the static scan misses; `styleedge` orders all 12 correctly

**66** folder pairs conflict at runtime with values that compute differently. **12** have no
static edge in either direction. Directions come from the import graph (the folder that
imports the other is the parent); none was unresolved. The cause of each was found by
replaying `rollup/style-edges.js`'s own regexes on the parent's class
(`results/full/why-missed.txt`, **Measured**) and then reading the source line it names
(**Read**; the full table, with file and line for each, is in `results/full/q1-causes.md`):

| Cause                                                                                                  | Edges                                                                                                                                     | A better source scan?                                                   |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| File not read (`slot-styles.ts` is not `*.style(s).ts`)                                                | `modal-v2 -> shared`                                                                                                                      | Yes: read every module that calls `css```                               |
| Regex miss: next attribute is hyphenated (`data-testid=`)                                              | `error-display -> typography`                                                                                                             | Yes: parse JSX                                                          |
| Regex miss: `=>` in an earlier prop ends the tag                                                       | `date-navigator -> shared`                                                                                                                | Yes: parse JSX                                                          |
| Component or class through a local variable or a function return                                       | `avatar -> typography`, `link-list -> typography` (also a style file in another directory), `toggle -> typography`, `toggle -> text-list` | Yes: AST data flow and import resolution                                |
| The parent applies the child's class to its own element                                                | `unit-number -> input-group` (`inputGroupStyles.labelAddonContainer` on a `<div>`)                                                        | Yes: cross-folder style imports used in `className`                     |
| Properties set through a mixin (`${linkStyle}`, `${lineClampCss(2)}`) or a same-folder descendant rule | `notification-banner -> typography`, `sidenav -> typography`                                                                              | Yes, from compiled CSS; `.content a` on consumer children: runtime only |
| Class forwarded through props to a grandchild's element                                                | `otp-verification -> shared` (via `InputGroup` to `InputWrapper`)                                                                         | Partly: follow `className` forwarding                                   |
| Descendant tag selector into a grandchild                                                              | `masked-input -> input` (`.inputGroupWrapper input`, `:hover` cursor)                                                                     | Runtime only (needs the rendered tree)                                  |

A better source scan (a JSX parser plus compiled CSS) could find **11 of the 12** (**Read**
from the causes; not built). Only `masked-input -> input` needs the rendered tree.

What the missing edges cost each layering (**Measured**, `analysis.md`):

| Layering                | Parent after child | Same tier (source order)                                                                  | Parent before child (wrong)             |
| ----------------------- | ------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------- |
| `styleedge` (85 layers) | **12**             | n/a                                                                                       | 0                                       |
| `depth` (4 tiers, F14)  | 7                  | **4**: `avatar`, `link-list`, `toggle` vs `typography`, and `toggle -> text-list`, all t0 | **1**: `modal-v2` (t0) vs `shared` (t1) |

5 of the 12 are already implied by a chain of static edges. `styleedge` gets all 12 right
because its tiebreak is the import graph, and in all 12 the folder that styles the other
also imports it. That holds here, not in general: inside an import cycle (F10) the
tiebreak can point the wrong way.

Static folder pairs with **no** runtime conflict on any story: 35 of 95 (including
`button ~ shared`, in either direction). A further 6 conflict only with values that compute
the same. For information only: a story that never renders the colliding combination
looks the same as a false positive.

#### Q2. 22 specificity flips; a static rule can only find them by flagging thousands of rule pairs

A flip is a pair whose `flat` winner is decided by specificity and whose layered winner
differs, with values that compute differently. **22** pairs, 11 folder pairs, **14 at rest,
8 in interaction states** (**Measured**; the winners are predicted from the cascade rules,
**Read**). `depth` predicts the same winner as `styleedge` for all 22.

| Folder pair                                                    | Property           | Rest or state | `flat` → layered                               | Seen before                                               |
| -------------------------------------------------------------- | ------------------ | ------------- | ---------------------------------------------- | --------------------------------------------------------- |
| `shared` / `smart-app-banner`                                  | width, height      | rest          | 18px → 20px                                    | F17                                                       |
| `shared` / `navbar` `.m11vsg37`                                | width, height      | rest          | 18px → 24px                                    | F17                                                       |
| `shared` / `navbar` `.csth4gk`                                 | width, height      | rest          | 18px → 24px                                    | new rule; on the same 34 navbar page loads as `.m11vsg37` |
| `shared` / `navbar` `.c160mxwv` (chevron)                      | width, height      | rest          | 18px → 20px                                    | F17 (drawer trace)                                        |
| `input-group` / `otp-verification`                             | padding-left/right | rest          | 0 → 16px                                       | F17 (correction 1)                                        |
| `input-group` / `unit-number`                                  | margin-right       | rest          | 4px → 8px                                      | F17                                                       |
| `shared` / `time-slot-bar`                                     | height             | rest          | 18px → 16px; **0 pixels** (width-limited icon) | new                                                       |
| `button` / `filter`                                            | background-color   | `:active`     | pressed colour → transparent                   | new                                                       |
| `typography` / `footer` (2), `menu`, `notification-banner` (2) | color              | `:active`     | link pressed colour → the parent's link colour | new                                                       |
| `shared` / `fullscreen-image-carousel`                         | background-color   | `:active`     | pressed colour → white                         | new                                                       |
| `input` / `masked-input`                                       | cursor             | `:hover`      | `not-allowed` → `auto` on a disabled input     | new                                                       |

All four F17 flips are found. The new ones are interaction states the stories never reach.
In each, the child's state rule (`:active`, `:hover`) is more specific than the parent's
resting rule, so in one layer the state rule won, and layered the parent's resting value
wins. The pressed and disabled-hover feedback is lost. Whether that is wanted is not
something the data can say.

**Can a static rule catch this?** I tested the brief's rule ("for an edge parent → child, a
parent rule less specific than a child rule on the same longhand") on the built CSS
(`flip-rule.mjs`, **Measured**):

| Edge set         | Parent rules considered              | Rule pairs flagged | Runtime flips caught        |
| ---------------- | ------------------------------------ | ------------------ | --------------------------- |
| static           | every rule in the parent folder      | 27,548             | 18 of 22 (13 of 14 at rest) |
| static + runtime | every rule in the parent folder      | 29,056             | **22 of 22**                |
| static           | rules on the class the parent passes | 3,070              | 7 of 22 (2 of 14 at rest)   |

At folder level the rule finds everything, but only with the complete edge set, and with
about 1,300 alarms per real flip: unusable as a build failure. Narrowed to the class the
parent passes, it misses most flips, because the flipping rule is rarely on that class.
`navbar`'s icon class is on the `<svg>` passed as children, not on the `ClickableIcon` that
receives `.mobileMenuButton`; `shared` reaches the icon through a descendant `svg`. Only a
rendered check sees which rules meet on an element.

#### Q3. 535 cross-folder pairs tie on specificity; 272 compute differently

These are the pairs exposed to the original bug: in `flat`, source order decides them.
**535** pairs (532 selector pairs, 66 folder pairs), of which **272** compute different values
(60 folder pairs, 13 state dependent). `styleedge` gives all 272 to the parent. `depth`
gives 252 to the parent, leaves **8** in one tier (the four t0 pairs from Q1) and gives
**12** to the child (the modal). `depth-full` separates all of them (Q6).

#### Q4. Library `!important`: 3 of the 8 compete with another folder; no outcome changes

37 pairs involve `!important`, from 3 declarations: `breadcrumb .ckhkv84`, `input .dtt8rz0`
and `shared .irl4gvd`. The other five (`textarea`, `overlay`, `local-nav`, `timetable`, the
second `breadcrumb`) meet no other folder on any story.

-   **One side `!important`** (28 pairs, 2 whose values differ: `breadcrumb` vs `typography`
    margin, and `input` vs `shared` background): the `!important` side wins in `flat`,
    `styleedge` and `depth` alike.
-   **Both sides `!important`** (9 pairs, `input .dtt8rz0` vs `shared .irl4gvd`, background
    longhands): the case where layers reverse the order. `flat` is a tie; layered, the earlier
    layer (`shared`) wins. **All 9 compute the same value** (`initial`, `transparent`), so
    nothing changes.

#### Q5. No cycle in static + runtime edges

The union of the non-exempt static edges and the 12 resolved runtime edges has **no
strongly connected component** (Tarjan, `analyse.mjs`). Condition 2's build check would
pass on today's source with the scan completed. F13's one cycle (`button -> shared` and
`shared -> button`) has **no runtime conflict on any element** in either direction, which
confirms the `NOT_COLLIDING` exemption, and shows that the `button -> shared` spinner edges
are not exercised by any story either.

#### Q6. `depth-full`: 5 tiers from the full edge set; every story renders like `styleedge`

`depth-full.mjs` applies the `tier-layers.mjs depth` rule to the static edges plus the 12
runtime edges, on a copy of `final/libs/styleedge` (so `dist/` and `final/libs/depth`
stay as measured):

| Tiering                     | Tiers                     | Union edges inside one tier | Inverted | Runtime folder pairs in one tier |
| --------------------------- | ------------------------- | --------------------------- | -------- | -------------------------------- |
| `depth` (F14, static edges) | 4 (36, 10, 20, 19)        | 4 folder pairs (runtime)    | 1        | 4                                |
| **`depth-full`**            | **5 (32, 12, 1, 21, 19)** | **0 of 217**                | **0**    | **0 of 66**                      |

The fifth tier appears because `toggle` must now sit above `typography`. `shared`, which
styles `toggle`, moves up to a tier of its own (t2), and 44 folders move up by one.

Sweep, 2,076 renders, 0 failures (`results/q6/summary.txt`):

| Comparison                  | Renders that differ | What they are                                                                                                                                                                                 |
| --------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styleedge` vs `depth-full` | **26**              | **0 layering.** 18 on F17's noise stories (toast, timetable loading, countdown-timer, dots spinner, carousel); 8 `language-switcher` environment drift (below). **modal-v2: 0**               |
| `flat` vs `depth-full`      | 118                 | **94 layering**: navbar 34, otp-verification 24, smart-app-banner 24, unit-number 12, the same components and counts as `flat` vs `styleedge` in F17, all Q2 flips; plus 8 drift and 16 noise |
| `depth` vs `depth-full`     | 71                  | modal-v2 44 (the fix); plus drift and noise                                                                                                                                                   |

**Environment drift** (**Measured**, `results/q6-smoke/`). `language-switcher/link-default`
and `link-preselected` differed by 24 to 33 pixels from all three October references.
Every computed property of all 40 elements and their pseudo-elements is identical between
`styleedge` and `depth-full` (`full-style-dump.mjs --diff`: 0 lines). Renders of both
libraries taken on the same day differ by 0 pixels in all 4 modes, and F17's October
`styleedge` shots differ from today's `styleedge` render by the same 24 to 33 pixels: the
anti-aliasing of the Tamil label "தமிழ்" (`ls-*-crop.png`). The machine's text rendering
changed between 2026-10-27 and 2026-11-20.

#### What it shows

-   **The style scan misses real edges, and they are not exotic.** 12 of 66 runtime edges
    (18%) have no static edge. The causes are ordinary code: a style file named differently,
    a hyphenated attribute, a class in a variable, a mixin. A better source scan could find
    11 of them; one needs the rendered tree.
-   **`styleedge` absorbs the missing edges; `depth` does not.** The import-graph tiebreak
    orders all 12 correctly. `depth` gets one wrong (the F17 modal break) and leaves four to
    source order, which F17's sweep could not see, because that build's source order happened
    to agree. F17 saw the fallback on one pair; it holds on all 12.
-   **Tiers are viable only from the complete edge set.** With the runtime edges added, 5
    tiers render all 519 stories exactly like `styleedge` (0 layering renders of 2,076), and
    the modal goes back to 0. The tier count is a property of the edge set: completing it
    added a tier.
-   **Condition 2's claim ("a new override can only break the order by closing a cycle") is
    wrong.** There is no cycle today, yet layering changes 22 pairs, all specificity flips on
    edges that point the right way. A cycle check cannot see them, and a static
    specificity rule cannot flag them without thousands of false alarms. Only a rendered
    check can.
-   **Layers lose state feedback in 8 places no story reaches** (`:active` on button, link
    and carousel controls; `:hover` cursor on a disabled masked input). These join condition
    4's list as candidates for a decision.
-   **`!important` in the library changes no outcome** under per-folder layers.

#### What it does not show

-   **Webpack only.** Turbopack (the brief's optional step 3b) was not run.
-   **States that need a DOM change.** Stripping state pseudo-classes covers `:hover`,
    `:active` and focus rules on elements that exist at rest. Elements that only exist
    after a click (closed menus, popovers, a modal not open on load, error states) are not
    in the DOM, so their pairs are not seen. F17's chevron was found here only because one
    story renders it.
-   **The light scheme only.** Rules under `@media (prefers-color-scheme)` are included
    (grouping rules are read regardless), but rules keyed on a theme attribute that the
    stories do not set are not.
-   **Rendered winners for state pairs.** The 8 state flips are predicted from specificity
    and layer order (**Read**, the cascade rules); none was rendered in its state. The model
    check covers pairs at rest only.
-   **Pixels.** "Values differ" means a computed value differs. `time-slot-bar`'s flip
    changes the computed height and no pixel.
-   **Real apps and consumer content.** `notification-banner`'s `.content a` styles links
    the consumer supplies; the stories have one such link.
-   **`depth-full` under the e2e suite or in interaction states.** Only the story sweep was
    run. Its pairwise predictions match `styleedge` for every runtime pair (0 inverted, 0 in
    one tier), but that is the same model, not a render.
-   **That a production source scan would find the 11 edges.** That is **Read** from the
    causes; no improved scanner was built.
-   **Pages compared across time.** Sweeps compared with F17's references pick up the
    environment drift above. A new reference should be rendered on the same day.

#### Corrections to earlier findings

1.  **F17's OTP flip is on the editable inputs, not the read-only one.** F17 (traces and
    "What the differences are") says the read-only OTP input gains 16px padding through
    `[data-read-only]`. In the DOM, the read-only inputs keep 0px under `styleedge`, through
    the component's own read-only class. The inputs that change are the editable ones
    (default, disabled, error, interactive and the OTP-sent states). They all carry
    `data-no-border="true"`, because `contact-input-section.tsx` always passes `noBorder`, and
    `[data-no-border]` (0,2,0) is the branch that loses to `.e1ik236m` (0,1,0). F17's trace
    took the first `.e1ik236m` (the default input), and `rule-trace.mjs` matches the whole
    selector list, so it could not show the branch (**Measured**,
    `results/gate/gate.txt`). The simulated fix re-declared both `[data-read-only]` and
    `[data-no-border]`, so its pixel result should stand (**Assumed**). The 2026-10-28
    decision ("the read-only inputs are regressions") was made about the wrong element:
    what changes is the editable input's padding.
2.  **The error-display miss is a hyphenated attribute, not a `>`.** F14 and "Untested and
    caveats" say the tag regex stops at the `>` inside `` `${testId}--title` ``. There is no
    `>` there. The `className` regex needs the next attribute to match `\w+=`, and
    `data-testid=` does not (**Measured**, `why-missed.txt`).
3.  **`styleedge`'s fallback holds on all 12 missing edges**, not one (F17, "Untested and
    caveats"). It rests on the import direction matching the styling direction, which held
    for all 12 here and fails inside an import cycle (F10).

#### Proposed replacement text for the Verdict

**Granularity row** (Answer column):

> **Per-folder (`styleedge`) is the default; tiers are viable only from a complete edge
> set.** Tiers built from the style scan alone break: `depth` (4 tiers) breaks the modal
> close button on 44 renders (F17) and leaves 4 runtime conflicts to source order (F18). With
> the 12 edges the runtime check adds, 5 tiers render all 519 stories exactly like
> `styleedge` (F18). The tier count follows the edge set (completing it added a tier), so
> tiers need the runtime check as their edge source; per-folder layers degrade gracefully
> when an edge is missed, because the import-graph tiebreak ordered all 12 missed edges
> correctly. A hand-picked base/components split leaves 61 edges to source order and fails a
> hostile order (F14).

Evidence column: `F14, F17, F18`.

**Condition 2:**

> 2. **Fail the build on a style cycle, and check rendered conflicts in CI.** A cycle is one
>    way a new override can break the order; a specificity flip is another, and it happens on
>    edges that point the right way. In one layer the child's more specific rule won; under
>    layers the parent's later layer wins (22 pairs today, 8 of them in `:active`/`:hover`
>    states no story reaches, F18). The cycle check cannot see flips, and a static
>    specificity rule flags about 29,000 rule pairs to find 22 (F18). So the production
>    version needs:
>    (a) the cycle check over the style edges, with a reviewed exemption list (no cycle
>    today, including the 12 runtime edges, F18);
>    (b) a rendered conflict check (the E8 runtime scan) over the stories, failing on a new
>    cross-folder pair whose `flat` and layered winners differ, unless it is listed with a
>    decision, and on a conflicting folder pair with no style edge;
>    (c) a style scan that reads every ` css``  ` module and parses JSX, which would have found 11
>    of the 12 missed edges (F18).

**Other text this changes** (not drafted here): the E8 bullet under "Untested and caveats"
and the "Incomplete scan" named risk (E8 is no longer descoped; the residual risk is states
the stories do not render, and Turbopack); condition 4's list (5 changes become 5 plus 8
state flips to decide, and the OTP description, correction 1); F14's "What it does not show"
and "Coverage of the override scan" (correction 2).
