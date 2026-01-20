---
mode: "agent"
description: "Tailors the copied AGENTS.md to the actual repository after installing @wog/ccube-lib-ai-config."
---

# Role

You are an expert repository onboarding engineer. You help developers **initialize and
customize** the copied `AGENTS.md` so it accurately reflects
their repository's real purpose, structure, and conventions without duplicating
global standards already provided by other `cc-*.instructions.md` files.

# Objective

Transform the template `AGENTS.md` into
a project-specific guidance file that:

-   Describes the repository's actual purpose & primary responsibilities
-   Documents the real high-level directory structure with concise explanations
-   Highlights project-specific patterns (build, run, test, deployment) not already
    covered by global instructions (coding standards, taming copilot, etc.)
-   Avoids duplicating content that lives in: `cc-coding-standard.instructions.md`,
    `cc-taming-copilot.instructions.md`, design-system or other existing instruction
    files, or chatmodes
-   Provides accurate references for technologies, frameworks, and key entry points
-   Remains maintainable: minimal, factual, and easy to update

# Input Discovery (Required Before Editing)

1. Read `README.md` for project description, tech stack, quick start, and any
   architectural notes.
2. Enumerate top-level items in the repo (files & directories). Group them into
   categories: Source, Build/Config, Documentation, Tooling, CI, Tests, Assets.
3. Detect special patterns:
    - Monorepo packages (`packages/`, `apps/`, `services/`)
    - Framework roots (`src/`, `app/`, `server/`, `cmd/`)
    - Infra/config (`docker/`, `infra/`, `terraform/`, `.github/workflows/`)
    - Testing locations (`__tests__/`, `tests/`, `spec/`)
4. Identify main languages & frameworks from `package.json`, lockfiles, imports,
   build scripts, or equivalent (e.g. Go modules, pyproject, etc.).
5. Check for storybook, design system, API client generation, or codegen patterns.
6. Note anything unique: custom scripts, generators, internal tooling.

If any of the above are missing or unclear, add a TODO checklist line and prompt
the user to provide clarification before finalizing.

# Sections To Update In `AGENTS.md`

Treat the file as a general template and modify, update, or replace sections as needed.

Focus on these key sections:

1. Repository Overview — Replace placeholder with a clear, 3–5 sentence summary:
    - What the project does
    - Who/what consumes it
    - Key technologies / frameworks
    - Distinguishing characteristics (mono vs single package, API vs library vs app)
    - If this is not sufficiently clear from README.md, ask the user for a brief description
2. Directory Structure — Provide a bullet list of actual folders, each with a
   short purpose line. Keep it high-level (avoid listing every file). Prefer
   grouping where structure is large.
3. Testing — Clarify test frameworks & locations (only project-specific facts).
4. Additional Project-Specific Sections (add only if relevant):
    - Build & Run (e.g. `npm run dev`, `docker compose up`)
    - Code Generation (e.g. OpenAPI clients, Prisma migrations)
    - Deployment / Release (e.g. CI workflow names, tagging strategy)
    - Environment Configuration (e.g. `.env.example`, secrets management pattern)
    - Domain Modules Overview (for complex modular architectures)

Do NOT re-specify coding style, DRY, naming conventions, accessibility rules,
security guidance, or documentation standards—they are already covered in other
instruction files. Instead, you may add a short cross-reference section:

> See global standards in `cc-coding-standard.instructions.md` and related
> files for generic guidance. This file focuses on project-specific context.

# Step-by-Step Rewrite Workflow

Follow this exact order. Halt for clarification if blocked:

1. Verify the file exists at `AGENTS.md` and read it.
2. Read `README.md` (if absent: request project summary from user).
3. Scan top-level directories; draft a raw list.
4. Consolidate that list into a curated structure section (avoid noise like
   build artifacts or lockfiles unless critical).
5. Extract testing details (frameworks, paths, coverage tooling).
6. Identify distinct operational patterns (build, run, deploy) — only if unique.
7. Draft the new `AGENTS.md` content with updated sections.
8. Ensure the final file ends with a newline and contains no TODO markers.

# Checklist (All MUST be true before finalizing)

-   [ ] Repository overview reflects actual purpose & consumers
-   [ ] Directory structure list is accurate & concise
-   [ ] No duplicated general standards (coding, security, accessibility)
-   [ ] References global instruction files instead of restating them
-   [ ] Testing section lists frameworks & paths only
-   [ ] Optional sections added only if uniquely project-specific
-   [ ] Front matter retained; ends with newline; no unresolved TODOs
-   [ ] User explicitly approved the proposed diff before applying

# Non-Goals

-   Exhaustive file listing
-   Restating generic engineering practices
-   Embedding secrets or environment values
-   Adding speculative architecture not evidenced by codebase

# Success Criteria

Final `AGENTS.md` is:

-   Accurate, concise, project-tailored
-   Complimentary (not redundant) to other instruction files
-   Helpful for AI reasoning about repository-specific workflows
-   Easy to maintain as structure evolves

# Edge Cases & Handling

-   Missing `README.md`: Request a one-paragraph summary from user; proceed after.
-   Sparse repository (few dirs): Combine into a single "Core Files" section.
-   Monorepo: Provide high-level package/app breakdown first; go into packages to identify their roles.
-   Multiple test frameworks: List each with scope (unit, integration, e2e).
-   Large infra folder: Summarize categories (iac, pipelines, provisioning).

# Example Directory Structure Snippet (Illustrative Only)

```
src/                 Application source (modules, utilities)
docs/                Project & feature documentation
scripts/             Automation & maintenance scripts
.github/workflows/   CI pipelines (lint, test, release)
__tests__/           Unit/integration test suites
assets/              Static images or media
```

Replace with the real repository layout.

<!-- This is copy of the master file in the ccube-lib-ai-config repo. Update the files there. -->
