# EP-P0001: Deterministic AI Component Catalog Workflow

**Created**: 2025-10-22
**Input**: User description: "Create a machine-consumable catalog of all publicly exported design system components (names, descriptions, keywords, typings, usage examples) for AI coding agents. Minimize manual maintenance by deriving data from source and Storybook stories; exclude runtime AI calls inside the script. Any enrichment (synonyms, improved descriptions, related components) must be performed by a Copilot agent via file edits before regeneration. Provide automation strategy (script + overrides files + CI check)."

-   [Summary](#summary)
-   [Motivation](#motivation)
    -   [Goals](#goals)
    -   [Non-Goals](#non-goals)
-   [Proposal](#proposal)
    -   [Acceptance criteria (Optional)](#acceptance-criteria-optional)
    -   [Notes/Constraints/Caveats (Optional)](#notesconstraintscaveats-optional)
    -   [Risks and Mitigation](#risks-and-mitigation)
-   [Design Details](#design-details)
    -   [Frontend](#frontend)
    -   [Backend](#backend)
    -   [Database](#database)
-   [Alternatives](#alternatives)
-   [Infrastructure Needed (Optional)](#infrastructure-needed-optional)
-   [Review \& Acceptance Checklist](#review--acceptance-checklist)
-   [Execution Status](#execution-status)

## Summary

A deterministic workflow will generate a `component-catalog.json` enumerating all publicly exported components and design tokens for consumption by AI coding agents. The script performs static analysis only (TypeScript AST + Storybook content + token source files). Search keys and related mappings are sourced exclusively from story-authored markers (`Search Keys:` and `Related:`). CI enforces freshness via a `--check` mode. No overrides, no fallback generation.

## Motivation

Developers integrating the design system require AI assistance that understands
available components, their props, and usage patterns. Without a structured,
consistent catalog, AI suggestions risk being incomplete or incorrect. Manual
curation is error-prone and quickly becomes stale as the system evolves. A
repeatable, file-driven process reduces maintenance overhead, increases
accuracy, and enables localized enrichment.

### Goals

-   Provide a single authoritative machine-friendly catalog file (components + tokens).
-   Achieve zero runtime AI/API dependency during catalog generation.
-   Derive component descriptions, prop metadata, and keywords from existing source + stories + story tables.
-   Extract field-level prop descriptions from Storybook `PropsTable` / `ApiTable` data definitions when absent in TypeScript.
-   Consume pre-authored search synonyms and related component references embedded directly inside story descriptions (no separate synonym generation workflow).
-   Enable fast detection of stale catalogs in CI pipelines.
-   Keep output deterministic and diffable across runs.

### Non-Goals

-   Human-facing narrative documentation (Storybook already serves this).
-   Real-time semantic analysis or embedding generation.
-   Automatic translation/localization of descriptions.
-   Deprecation policy design beyond flag capture.
-   Improving component architecture or naming conventions.

## Proposal

Implement a generation script (`scripts/generate-component-catalog.ts`) that:

1. Reads `src/index.ts` to enumerate exported component modules.
2. Parses each module to identify React component exports and prop types.
3. Extracts JSDoc first sentences and Storybook MDX/CSF snippets for base descriptions and usage examples.
4. Locates Storybook prop tables (`PropsTable`, `ApiTable`) and statically parses their underlying data arrays (e.g. `const DATA: ApiTableSectionProps[] = [...]`) to enrich per-prop descriptions, types, default values, and mandatory flags.
5. Parses story description content for structured markers:

-   `Search Keys:` followed by comma-separated synonyms/search phrases.
-   `Related:` followed by comma-separated component names.

1. Extracts design tokens from the design token source directory (e.g., `src/design-token/**`) capturing name, category, and value.
1. Writes a stable, sorted `component-catalog.json` containing metadata, sources, and per-module hashes for incremental reuse.
1. Provides `--check` mode to validate staleness without writing.
1. Offers flags for selective regeneration and light mode (examples/related skipped). File locations are fixed (no path customization flags).

### Acceptance criteria (Optional)

#### AC 1

A successful run produces a `component-catalog.json` containing every module
exported from `src/index.ts` with: name, importPath, exportedSymbols, description (from JSDoc or story text only; may be empty), search keys exactly as provided by `Search Keys:` marker (empty if absent), related components exactly as provided by `Related:` marker (empty if absent), typed prop signatures (or placeholder), enriched per-prop descriptions from story tables, example usage (if story available), design tokens list, and source hashes.

#### AC 2

CI fails when component source or story changes would modify the catalog but `component-catalog.json` is not updated. Remediation requires updating Storybook content (description text, `Search Keys:` or `Related:` markers) directly.

### Notes/Constraints/Caveats (Optional)

-   Some components may lack JSDoc or an informative story; descriptions may remain blank unless story authors add text.
    -- Compound components require grouping multiple prop interfaces under a single
    module entry; script must detect nested exports (e.g., `AccordionItem`).
    -- Prop-level descriptions often absent in TypeScript source; story `PropsTable` data arrays become authoritative augmentation.
    -- Search keys and related lists depend entirely on story markers; no fallback generation or inference will occur.
    -- Prop table parsing complexity: JSX fragments and React elements inside `description` must be converted to plain text (strip tags) while preserving meaningful wording.
    -- Generic prop types should retain generic parameters to support AI signature
    awareness.
    -- Design tokens inclusion is optional to keep file size manageable.
-   Overly large story code snippets will be truncated to a safe length.

### Risks and Mitigation

-- Incomplete descriptions: surfaced with `descriptionSource: "none"`; remediation requires story author updates (no automated enhancement).
-- Missing search keys / related markers: flagged; authors must add markers manually.
-- Drift between code and catalog: `--check` mode + CI gate reduces risk.
-- Performance overhead: single TypeScript program reused across modules; hashing avoids unnecessary recomputation.
-- Incorrect component detection: fallback logic still captures exported symbol list; validation flags anomalies.
-- Parsing of prop tables may fail if dynamic expressions are used; mitigation: skip non-literal entries and mark incomplete enrichment.
-- Reliance on author discipline (no overrides) centralizes responsibility in story content; documentation guidelines should emphasize marker usage.

## Design Details

### Frontend

No UI changes; Storybook remains the human-facing documentation layer.

### Backend

Script Responsibilities:

-   Export Enumeration: AST of `src/index.ts` to list module directories.
-   Component Detection: Identify React components via JSX return or `React.FC` typing.
-   Prop Extraction: Resolve associated interface/type alias; print normalized signature using TypeScript printer.
-   Prop Description Augmentation: Parse static Storybook prop table data arrays (`ApiTable` sections) to enrich per-prop metadata (description, mandatory, defaultValue, union types).
-   Description Resolution Priority: JSDoc → Story paragraph → Empty (no overrides).
-   Search Keys & Related Handling: Extract exact comma-separated values from `Search Keys:` and `Related:` markers; if absent store empty arrays (no inference).
-   Design Token Extraction: Read token definition files; capture name, category (color, spacing, typography, z-index, radius, elevation, animation), value, and alias mapping (if present).
-   Hashing: SHA256 of concatenated module source + stories + token sources for incremental reuse.
-   Validation: Warn on missing description and missing `Search Keys:` marker; related may be empty.
-   Output: Stable JSON with sorted arrays and deterministic key order.

CLI Flags (simplified fixed file locations):

-   `--update` (default) writes file.
-   `--check` performs generation in-memory; exit code signals staleness.
-   `--only <module>` restricts processing.
-   `--max-examples <n>` to limit story example collection.
-   `--light` to omit examples/related for faster execution.
-   `--verbose` for expanded logging.

Output Fields (per component): name, module, importPath, exportedSymbols, status,
description, descriptionSource (jsdoc|story|none), searchKeys (exact array), related (exact array), props map (with enriched prop entries), examples, source file references, module hash.

Output Fields (per design token): name, category, value, originalSourceFile, aliases (if any), hash.

### Database

No persistent database integration; all data resides in version-controlled
JSON files.

## Alternatives

1. Inline AI Calls During Generation: Rejected to avoid network dependency,
   nondeterminism, and secret management complexity.
2. Manual Markdown Catalog: Higher maintenance cost and parsing complexity for
   agents; JSON structure preferred.
3. Embedding-Based Semantic Index: Out of scope; heavy infra requirements and
   security concerns for early phase.
4. Per-Component JSON Manifests: Increases file churn; consolidated single
   artifact improves diff clarity.

## Infrastructure Needed (Optional)

None immediately. Optional future additions: caching layer or embedding service
if semantic similarity search becomes a requirement.

---

## Review & Acceptance Checklist

GATE: Automated checks run during main() execution

-   [ ] User description parsed
-   [ ] Key concepts extracted
-   [ ] Ambiguities marked
-   [ ] Part 1 sections filled
-   [ ] No code snippets in Part 1 sections
-   [ ] No functions or file references in Part 1 sections
-   [ ] Part 2 sections filled

## Execution Status

Updated by co-pilot during processing

-   [ ] User description parsed
-   [ ] Key concepts extracted
-   [ ] Ambiguities marked
-   [ ] Part 1 sections filled
-   [ ] No code snippets in Part 1 sections
-   [ ] No functions or file references in Part 1 sections
-   [ ] Part 2 sections filled
