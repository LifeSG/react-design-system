# CSS ordering spike tracker

Problem: Next.js production builds load component CSS in a non-deterministic
order, so source-order-dependent overrides break in prod but not in dev.
Source spec: [`../css-layer-specs.md`](../css-layer-specs.md). Branch: `gz/css-layers`
(spike work), built on `rl/css-layers` (`93cd86ede`).

Last updated: 2026-11-18

## Charter (applies to the whole effort)

**Question.** Can a static layer order give the same CSS cascade across Next 16
production builds, without redeclaring variants in every child or hand-ordering
layers per variant relationship? If not, which alternative in
[02](02-alternative-paths.md) does?

**Decision this unblocks.** Which approach we build: per-folder layers, tier
layers, or a non-layer path (specificity bumps, CSS `@import` ordering, a
single pre-ordered stylesheet).

**Decision owner.** DS team

**Timebox.** None was set. Actual: 2026-10-15 (first spike commit `93cd86ede`) to
2026-11-18, about 5 weeks, with no recorded extension decision. Planning signal for
the next spike: set the budget in the charter before starting.

**Exit criteria.** The spike is done when all of these hold, or when a stop
condition below is hit:

1. **Reproduced.** The ordering bug is reproduced in a Next 16 production
   build (E2), so a fix can be told apart from a coincidence.
2. **Fix verified.** The chosen approach gives identical CSS order across at
   least 5 builds and more than one entry point, with no regressions in the
   Playwright screenshots.
3. **Spec answered.** Each requirement in the source spec (consumer migration,
   granularity, parent/child variants and consumer overrides) has a written
   finding backed by a measurement, or an explicit "not viable, because X".

"Not viable" and "can't tell within the timebox" are acceptable answers.

**Stop conditions.**

-   E2 cannot reproduce the bug: stop, report, ask whether the bug is
    environment-specific.
-   E1 shows cross-folder override edges form cycles no layer order can satisfy:
    layers alone are not viable. Record it and move to the paths in 02.

**Riskiest assumption (attack first).** Two, in this order:

1. Next/Turbopack preserve a layer order statement (`@layer a, b;`) that lives
   in an imported CSS file. If not, per-folder layers cannot work at all.
2. A parent's variant styling on a shared child survives layer ordering (the
   spec's blocker). Test with one real parent/child variant pair before
   broader experiments.

## Spikes

**Final findings, verdict and proposal: [FINDINGS.md](FINDINGS.md).** The numbered docs
below are the working records it cites.

| #   | Spike                                                             | Doc                                                | Status  | Verdict                                                                                                                                                                                                                          |
| --- | ----------------------------------------------------------------- | -------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Native CSS layers (granularity, parent/child variants, migration) | [01-css-layers.md](01-css-layers.md)               | Done    | Adopt `styleedge` per-folder layers, with 5 conditions and named risks (exit criterion 2 met only in simulation; "no redeclaring" holds only partly; E8 run as F18: 8 state flips to decide, CI needs a rendered conflict check) |
| 02  | Alternative paths (shortlist and ordering)                        | [02-alternative-paths.md](02-alternative-paths.md) | Dropped | Not run: layers were viable; #5 kept as a workaround ticket                                                                                                                                                                      |

## Conventions

-   One doc per spike, numbered. Add a row above when a spike starts.
-   Each doc follows the findings template: Question, Answer, Evidence, What
    didn't work, Alternatives considered, Risks and open questions,
    Recommendation, Follow-up tickets. Keep unfinished sections as "TBD".
-   Mark every claim as **Measured** (we ran it), **Read** (from docs/source) or
    **Assumed**. Do not blur these. Assumed claims never feed a verdict.
-   Every Measured claim names the command or script that reproduces it.
-   Status values: Proposed, In progress, Done, Dropped.
-   Verdict values: Adopt, Adopt for subset, Reject, TBD.
-   Spike code is throwaway. It is rewritten for production, never promoted.
-   Run the Final review from a fresh session, not the one that did the spike.
