# 02 - Alternative paths to spike

Status: Dropped (2026-11-18), except #5. Spike 01 answered the charter's question with
"yes, with conditions" (per-folder layers ordered from style edges), and the charter
runs these paths only if layers are not viable. See _Outcome_ below for why each was
not run. The ranking that follows is kept as it was proposed.

These are ranked by (chance it fixes the root cause) /
(effort), not by preference. Run after, or in parallel with, spike 01 E1-E3
because they share the same reproduction (`e2e/nextjs-app`).

## Shortlist

| Rank | Path                                                                                                                                                                    | Root-cause fix?      | Effort  | Consumer change      | Notes                                                                                                                                          |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Specificity instead of order** for the cross-folder override edges (spike 01 F4): bump with `&&` or a doubled class only on those edges, enforce via stylelint/eslint | Yes, for those edges | Low-Med | None                 | Works inside one layer, no layer plumbing. Risk: consumers' override specificity                                                               |
| 2    | **Explicit CSS `@import` between dependent component CSS files** so the CSS spec fixes order                                                                            | Maybe                | Med     | None                 | Hinges on whether Turbopack/webpack preserve `@import` order in chunks. Needs a 1-hour test                                                    |
| 3    | **Single pre-ordered stylesheet** (`dist/fds.css`) as an opt-in entry for Next users                                                                                    | Yes                  | Low     | Import one file      | Loses per-component splitting; keep per-component CSS as default                                                                               |
| 4    | **Tier layers only** (spike 01 hybrid)                                                                                                                                  | Partly               | Low     | Add layer order line | Fallback if per-folder is blocked by cycles                                                                                                    |
| 5    | **Document `cssChunking: "graph"`** as supported workaround                                                                                                             | No                   | Trivial | Next config          | Two teams already confirmed it works. Docs say graph does not guarantee import order, so it is a mitigation, not a fix. Do this now regardless |
| 6    | **Reduce cross-component overrides at the source**: move variant styling for shared children into the child via CSS custom properties / data attributes the parent sets | Yes, long term       | High    | None                 | Fits the existing `--fds-internal-*` token pattern. Turns order-dependent overrides into value-driven styles                                   |
| 7    | **Re-enable and test Turbopack** after fix (FIXME in `e2e/nextjs-app/next.config.ts`)                                                                                   | n/a                  | Low     | n/a                  | Exit criterion, not a fix                                                                                                                      |

## Suggested order

1. Ship #5 in `stories/getting-started/troubleshooting.mdx` now.
2. Spike 01 E1 and E2 (edge list plus repro). Both are prerequisites for
   everything else.
3. #2 and #1 against the E1 edge list. Both are cheap once the list exists.
4. #3 as the escape hatch if #2 fails.
5. #6 only if E1 shows many edges that no ordering scheme handles.

## Outcome

None of these paths was spiked. Per path:

-   **#1 Specificity instead of order.** Not needed: F11 and F13 fixed the only real
    inverted pair (F10) by ordering, with no selector changes. It stays the fallback for
    an edge that closes a style cycle the generator cannot order (condition 2 in 01).
    Note that F17's fixes for the read-only inputs are a small case of it already.
-   **#2 `@import` between component CSS files.** Not needed once layers made source
    order irrelevant (F9). Untested whether Turbopack/webpack keep `@import` order in
    chunks, so this remains unknown, not rejected.
-   **#3 Single pre-ordered stylesheet.** Not needed: the layered per-component build is
    stable across 5 builds and more than one entry point (F16) without giving up
    splitting. Still a valid escape hatch for consumers who cannot load the order
    statement first (F15's CDN case).
-   **#4 Tier layers only.** Spiked inside 01 (E4, F14, F17): 4 depth tiers match
    per-folder on the scanned edges but break the modal close button where the scan is
    incomplete, so `styleedge` per-folder is the default.
-   **#5 Document `cssChunking: "graph"`.** Still recommended as a workaround; it is a
    follow-up ticket in 01.
-   **#6 Move variant styling into the child via custom properties.** Not needed: E1 found
    one real inverted edge, not the "many edges" that would trigger it.
-   **#7 Re-enable Turbopack.** Exit criterion, not a fix; Turbopack default was measured
    throughout 01 (F8, F9, F16).

## Out of scope

-   Moving off Linaria / CSS-in-JS runtime. Too large for this problem.
-   CSS Modules rewrite.
