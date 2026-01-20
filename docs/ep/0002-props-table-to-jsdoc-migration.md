# EP-P0002: Props Table to JSDoc Migration Workflow

**Created**: 2025-11-06
**Input**: User description: "For all components that appear in the storybook, I
want to perform the action described in move-api-table-data-to-type.prompt.md.
The task involves copying property descriptions from Storybook props tables
(stories/**/props-table.tsx) to JSDoc comments in the actual type definitions
(src/**/types.ts). This will enable IDE IntelliSense and improve developer
experience when using the design system components."

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
-   [Implementation Plan](#implementation-plan)
    -   [Phase 1: Button Components (3 components)](#phase-1-button-components-3-components)
    -   [Phase 2: Layout Components (8 components)](#phase-2-layout-components-8-components)
    -   [Phase 3: Navigation Components (7 components)](#phase-3-navigation-components-7-components)
    -   [Phase 4: Data Display Components (10 components)](#phase-4-data-display-components-10-components)
    -   [Phase 5: Interactive Components (6 components)](#phase-5-interactive-components-6-components)
    -   [Phase 6: Overlay Components (7 components)](#phase-6-overlay-components-7-components)
    -   [Phase 7: Basic Form Components (9 components)](#phase-7-basic-form-components-9-components)
    -   [Phase 8: Selection Form Components (8 components)](#phase-8-selection-form-components-8-components)
    -   [Phase 9: Numeric/Range Form Components (4 components)](#phase-9-numericrange-form-components-4-components)
    -   [Phase 10: Specialized Components (9 components)](#phase-10-specialized-components-9-components)
    -   [Progress Summary](#progress-summary)
    -   [Notes](#notes)

## Summary

Migrate all component and property descriptions from Storybook props tables to
TypeScript JSDoc comments across 71 components. This involves extracting
comprehensive component overviews from MDX documentation files, parsing props
table data structures, and updating TypeScript type definition files with
properly formatted JSDoc comments. The migration improves IDE IntelliSense
support and ensures documentation is available directly in the source code.

## Motivation

Currently, comprehensive component and property descriptions exist only in
Storybook props tables (stories/\*\*/props-table.tsx) and MDX documentation
files. Developers using the design system must switch context to Storybook
documentation to understand component APIs, prop types, and usage patterns.
This context switching slows development and reduces productivity. By
migrating descriptions to JSDoc comments in TypeScript type definitions,
developers get instant inline documentation through IDE IntelliSense, enabling
faster development and reducing errors.

### Goals

-   Provide inline IDE documentation for all 71 components with props tables
-   Extract and preserve comprehensive component descriptions from MDX files
-   Migrate all property descriptions from ApiTable data structures to JSDoc
-   Support multi-section props tables (main props, sub-types, nested
    interfaces)
-   Maintain search keywords for AI agent component discovery
-   Ensure all type definitions across the codebase are updated (src/\*\*,
    shared types)
-   Create a repeatable process that can be applied to new components

### Non-Goals

-   Modifying props table files or Storybook documentation structure
-   Changing TypeScript type definitions or component APIs
-   Automating the migration process with scripts (manual AI-assisted process)
-   Creating new documentation beyond what exists in props tables and MDX files
-   Migrating documentation for components without props tables

## Proposal

Execute a systematic migration across all 71 components identified with props
tables in the stories directory. For each component:

1. Read the component's MDX file (stories/{component}/{component}.mdx) and
   extract the overview description appearing after `<Secondary>Overview</Secondary>`
   along with high-level capability information from section headings
2. Read the props table file (stories/{component}/props-table.tsx) and parse
   the ApiTableSectionProps[] arrays to extract property descriptions, types,
   default values, and mandatory flags
3. Locate the corresponding TypeScript type definition file(s), primarily in
   src/{component}/types.ts but also searching shared type files when needed
4. Add comprehensive JSDoc comment above the main component Props interface
   combining overview and capabilities, ending with search keywords
5. Add JSDoc comments above each property definition with descriptions from
   the props table, handling JSX elements, HTML entities, and special
   formatting
6. Handle multi-section props tables by matching section names to
   corresponding type/interface definitions
7. Report updated types with file paths and list any unprocessed descriptions

### Acceptance criteria (Optional)

#### AC 1

All 71 components with props tables have comprehensive JSDoc comments on their
main Props interface. Each comment includes: primary description from MDX
overview, relevant high-level capabilities or structural information, and
search keywords (3-6 terms not in component name).

#### AC 2

All property definitions across all type definitions for each component have
JSDoc comments with descriptions extracted from props tables. JSX elements are
converted to markdown (code tags to backticks), HTML entities are converted to
Unicode, and complex descriptions are properly formatted across multiple lines.

#### AC 3

Multi-section props tables are correctly handled with each section matched to
its corresponding type/interface definition. For example, DataTable's
HeaderItemProps and RowProps sections are applied to their respective type
definitions, not just the main DataTableProps interface.

### Notes/Constraints/Caveats (Optional)

-   Components are grouped into core UI components (50) and form components
    (21), allowing for batch processing by category
-   Some type definitions may exist in shared type files
    (src/shared/types.ts) rather than component-specific files
-   Props table descriptions may contain JSX elements that need conversion to
    plain text or markdown
-   Some components have complex multi-section props tables documenting
    multiple related types in a single file
-   Search keywords should focus on alternative names and related UI patterns
    not already present in the component name
-   Existing JSDoc comments should be replaced, not merged, to ensure
    consistency with props table content
-   Default values mentioned in props tables should be appended to
    descriptions in format: (default: "value")
-   Empty name attributes in props tables may contain inheritance information
    to include in comments

### Risks and Mitigation

| Risk                                                              | Mitigation                                                                                                                            |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Property names in props tables don't match TypeScript definitions | Search for property across codebase using semantic search and grep, report mismatches for manual resolution                           |
| Type definitions split across multiple files                      | Use file search and semantic search to locate all related type files before processing                                                |
| JSX descriptions with complex React elements                      | Implement JSX-to-markdown conversion preserving semantic meaning (code tags, links, formatting)                                       |
| Inconsistent props table structures across components             | Handle both named and unnamed sections, support multiple ApiTableSectionProps arrays per file                                         |
| Search keywords quality and relevance                             | Extract keywords from MDX context and component usage patterns, focus on alternative terms                                            |
| Large batch operation introduces errors                           | Process components in logical groups, verify each component's updates before proceeding                                               |
| Overwriting carefully crafted existing JSDoc                      | Since props tables are the source of truth for Storybook, replacing existing JSDoc maintains single source of truth for documentation |

## Design Details

### Frontend

No frontend changes required. This is a documentation migration task affecting
TypeScript type definition files that are consumed by both the component
library and downstream applications. The improved JSDoc comments will
automatically surface in IDE IntelliSense when developers import and use
components, providing inline documentation without requiring context switches
to Storybook.

### Backend

Detailed Migration Process:

Phase 1: Discovery and Analysis

-   Use file_search with pattern stories/\*\*/props-table.tsx to identify all
    71 components requiring migration
-   For each component, verify existence of corresponding MDX file at
    stories/{component}/{component}.mdx
-   Identify components with multi-section props tables by checking for
    multiple ApiTableSectionProps arrays or sections with name property
-   Group components by category: core UI components (accordion through
    tooltip) and form components (form-\* prefixed)

Phase 2: Data Extraction (per component)

MDX Parsing Strategy:

-   Read component MDX file and locate `<Secondary>Overview</Secondary>` tag
-   Extract primary description from text immediately following Overview tag
    until next heading or component
-   Scan for `<Heading3>` tags to identify key capabilities and features
-   Example: For Button, extract "The primary call to action component" and
    note "comes in 2 sizes", "Loading state", "Danger mode"
-   Synthesize comprehensive description combining overview with high-level
    capabilities
-   Generate 3-6 search keywords by analyzing: component alternative names
    (e.g., "dropdown" for InputSelect), related UI patterns (e.g.,
    "accordion", "collapsible" for Accordion), common search terms NOT in
    component name

Props Table Parsing Strategy:

-   Read props-table.tsx and locate all DATA constant declarations of type
    ApiTableSectionProps[]
-   Parse array structure identifying sections with optional name property
-   For each section, extract attributes array containing ApiTableAttributeRowProps
-   Handle JSX descriptions by converting React elements to markdown:
    -   Fragment (`<>content</>`) → plain text
    -   Code tags (`<code>value</code>`) → backticks (`` `value` ``)
    -   Strong tags (`<strong>text</strong>`) → bold (`**text**`)
    -   Anchor tags: extract text and URL, format as "text (url)" for
        reference links
    -   Line breaks (`<br />`, `<br/>`) → newline in JSDoc
    -   HTML entities (`&nbsp;`, `&lt;`, `&gt;`) → Unicode equivalents
-   Extract mandatory flag and defaultValue when present
-   Handle empty name attributes containing inheritance information ("This
    component also inherits props from...")

Phase 3: Type Definition Location

File Search Strategy:

-   Primary location: src/{component}/types.ts (e.g., src/button/types.ts)
-   For form components: check both src/{standalone}/types.ts and
    src/form/types.ts
-   Examples: form-input → src/input/types.ts, form-label → src/form/types.ts
-   Use semantic_search with type name if not found in expected location
-   Check shared types: src/shared/\*\*/types.ts for reusable type definitions
-   Handle sub-components: src/{component}/{sub-component}/types.ts (e.g.,
    file-upload/file-list-item)

Type Matching Strategy:

-   Match unnamed props table section to main component Props interface
    (ComponentNameProps)
-   Match named sections to corresponding type/interface by exact name match
    (e.g., "HeaderItemProps" → interface HeaderItemProps)
-   For components with compound structure (Tab, Accordion, Sidenav): identify
    sub-component types and match to correct sections
-   Handle nested types: if section references nested type, search within
    component's type file and shared types

Phase 4: JSDoc Generation

Component-Level JSDoc Format:

-   Line 1: Primary description from MDX (single sentence, concise)
-   Line 2: Blank line
-   Lines 3-N: Additional capabilities, structure, or modes (2-4 lines max)
-   Line N+1: Blank line
-   Line N+2: "Keywords: keyword1, keyword2, keyword3, ..."
-   Wrap at 80 characters using proper markdown line wrapping
-   Place immediately above export interface ComponentNameProps

Property-Level JSDoc Format:

-   Single-line format for simple descriptions: `/** Description text */`
-   Multi-line format for complex descriptions with embedded formatting or
    multiple sentences
-   Append defaultValue if present: "Description (default: value)"
-   Note mandatory status in description if critical: "Description (required)"
-   Preserve TypeScript type annotations exactly as defined
-   Place immediately above property definition with no blank line

Phase 5: File Modification

Update Strategy:

-   Use replace_string_in_file with 3-5 lines of surrounding context for
    precise targeting
-   For interface JSDoc: include export keyword and opening brace in context
-   For property JSDoc: include preceding property and property type
    definition in context
-   Preserve all existing type definitions, generics, extends clauses, and
    property types
-   Only replace or add JSDoc comments, never modify type signatures
-   Handle existing JSDoc by replacing entirely with new content from props
    table
-   Maintain consistent spacing and indentation matching file's existing style

Error Handling:

-   If type definition not found: report component name, expected location,
    actual searched locations
-   If property in props table not found in type: report section name,
    property name, reason (possible inherited, possibly renamed)
-   If JSX conversion fails: report description with problematic JSX, suggest
    manual review
-   If multiple matching types found: report ambiguity, ask for clarification

Phase 6: Validation and Reporting

Per-Component Validation:

-   Verify interface JSDoc added successfully with search keywords
-   Count properties updated vs properties in props table
-   Check for orphaned descriptions (in props table but no matching property)
-   Validate JSDoc syntax (no unclosed comments, proper markdown)

Final Report Format:

-   Section 1: "Updated Types" with clickable file links grouped by component
-   Format: `[TypeName](file:///absolute/path/to/file.ts)` on separate lines
-   Include count: "Updated N properties in ComponentNameProps"
-   Section 2: "Unprocessed Descriptions" listing orphaned props table entries
-   Format: Section name, property name, description snippet, reason
-   Section 3: "Statistics" showing total components, interfaces, properties
    processed
-   Include any warnings or notes requiring manual review

Batch Processing Strategy:

-   Process in logical groups: buttons first (button, icon-button,
    image-button) to establish pattern
-   Then layout components (layout, box-container, card) to handle simpler
    structures
-   Next form inputs to handle complex multi-section tables
-   Finally specialized components (data-table, filter, navbar) with complex
    nested types
-   Verify first 2-3 components in each group before proceeding with batch
-   Pause for human review after each group completion

### Database

No database integration required. All work involves file-based operations on
version-controlled TypeScript and documentation files. Changes are committed
to Git allowing for review, rollback if needed, and tracking of documentation
improvements over time.

## Alternatives

1. Automated Script Approach: Create a Node.js script using TypeScript
   compiler API and AST manipulation to automatically parse and update all
   files. Rejected because: complexity of handling diverse props table
   structures, risk of incorrect automated transformations, difficulty
   generating quality search keywords, loss of human review for description
   quality.

2. Reverse Direction (JSDoc to Props Tables): Instead of props tables to
   JSDoc, extract from JSDoc to generate props tables. Rejected because:
   props tables are currently the authoritative source with richer
   descriptions, many type definitions lack JSDoc currently, would require
   rewriting all existing props tables.

3. Single Source in External JSON: Create component-metadata.json as single
   source and generate both props tables and JSDoc from it. Rejected because:
   adds extra abstraction layer, requires maintaining new file format, loses
   co-location benefits of props tables with stories.

4. AI-Powered Description Generation: Use AI to generate descriptions based
   on code analysis rather than migrating existing descriptions. Rejected
   because: discards existing high-quality human-written documentation,
   introduces consistency issues, requires ongoing AI access, loses specific
   domain knowledge in existing descriptions.

## Infrastructure Needed (Optional)

None. This is a file modification task using existing workspace structure and
does not require new infrastructure, services, or dependencies.

---

## Review & Acceptance Checklist

_GATE: Automated checks run during main() execution_

-   [x] User description parsed
-   [x] Key concepts extracted (component migration, JSDoc, props tables, MDX)
-   [x] Ambiguities marked (none - clear requirements from prompt file)
-   [x] Part 1 sections filled
-   [x] No code snippets in Part 1 sections
-   [x] No functions or file references in Part 1 sections
-   [x] Part 2 sections filled

## Execution Status

_Updated by co-pilot during processing_

-   [x] User description parsed
-   [x] Key concepts extracted
-   [x] Ambiguities marked
-   [x] Part 1 sections filled
-   [x] No code snippets in Part 1 sections
-   [x] No functions or file references in Part 1 sections
-   [x] Part 2 sections filled

## Implementation Plan

_Track progress for each component migration. Check off as completed._

### Phase 1: Button Components (3 components)

-   [ ] `button` - Button component with styleType, loading, danger props
-   [ ] `icon-button` - Icon button with variations and custom components
-   [ ] `image-button` - Image-based button with selected/error states

### Phase 2: Layout Components (8 components)

-   [ ] `layout` - Container, Content, Section, ColDiv layout components
-   [ ] `box-container` - Box container component
-   [ ] `card` - Card component for content grouping
-   [ ] `divider` - Visual separator component
-   [ ] `masonry` - Masonry grid layout
-   [ ] `accordion` - Collapsible content sections
-   [ ] `tab` - Tabbed navigation with Tab and Tab.Item
-   [ ] `uneditable-section` - Display-only sections with items

### Phase 3: Navigation Components (7 components)

-   [ ] `breadcrumb` - Breadcrumb navigation trail
-   [ ] `footer` - Page footer with links and disclaimers
-   [ ] `link-list` - List of links component
-   [ ] `masthead` - Page header/masthead component
-   [ ] `navbar` - Navigation bar with menu items
-   [ ] `pagination` - Pagination controls
-   [ ] `sidenav` - Side navigation with groups and items

### Phase 4: Data Display Components (10 components)

-   [ ] `alert` - Alert messages with variants
-   [ ] `data-table` - Table with HeaderItemProps, RowProps (multi-section)
-   [ ] `text` - Text component with various styles
-   [ ] `text-list` - Structured text lists
-   [ ] `timeline` - Timeline component for events
-   [ ] `progress-indicator` - Progress indicator/stepper
-   [ ] `notification-banner` - Banner notifications
-   [ ] `toast` - Toast notification messages
-   [ ] `smart-app-banner` - Smart app banner
-   [ ] `countdown-timer` - Countdown timer component

### Phase 5: Interactive Components (6 components)

-   [ ] `checkbox` - Checkbox input with indeterminate state
-   [ ] `radio-button` - Radio button input
-   [ ] `toggle` - Toggle switch component
-   [ ] `pill` - Pill/tag selector component
-   [ ] `tag` - Tag component for labels
-   [ ] `feedback-rating` - Rating/feedback component

### Phase 6: Overlay Components (7 components)

-   [ ] `modal` - Modal dialog component
-   [ ] `drawer` - Slide-out drawer component
-   [ ] `overlay` - Overlay wrapper component
-   [ ] `popover` - Popover component (deprecated)
-   [ ] `popover-v2` - PopoverV2 with improved positioning
-   [ ] `tooltip` - Tooltip component
-   [ ] `fullscreen-image-carousel` - Fullscreen image carousel

### Phase 7: Basic Form Components (9 components)

-   [ ] `form` (form-custom-field) - Custom field wrapper
-   [ ] `form` (form-label) - Form label with addon
-   [ ] `input` (form-input) - Basic text input
-   [ ] `input-textarea` (form-textarea) - Textarea input
-   [ ] `input-group` (form-input-group) - Input with addon
-   [ ] `otp-input` - OTP/verification code input
-   [ ] `file-upload` - File upload component
-   [ ] `masked-input` (form-masked-input) - Masked text input
-   [ ] `phone-number-input` (form-phone-number-input) - Phone number input

### Phase 8: Selection Form Components (8 components)

-   [ ] `input-select` (form-select) - Single select dropdown
-   [ ] `input-multi-select` (form-multi-select) - Multi-select dropdown
-   [ ] `input-nested-select` (form-nested-select) - Nested select
-   [ ] `input-nested-multi-select` (form-nested-multi-select) - Nested
        multi-select
-   [ ] `input-range-select` (form-range-select) - Range select
-   [ ] `predictive-text-input` (form-predictive-text) - Autocomplete input
-   [ ] `date-input` (form-date-input) - Date picker input
-   [ ] `date-range-input` (form-date-range-input) - Date range picker

### Phase 9: Numeric/Range Form Components (4 components)

-   [ ] `input-slider` (form-slider) - Single value slider
-   [ ] `input-range-slider` (form-range-slider) - Range slider with two
        thumbs
-   [ ] `histogram-slider` (form-histogram-slider) - Histogram slider with bins
-   [ ] `timepicker` (form-timepicker) - Time picker input

### Phase 10: Specialized Components (9 components)

-   [ ] `filter` - Filter component with Filter.Item and Filter.Checkbox
        (multi-section)
-   [ ] `error-display` - Error display component
-   [ ] `time-slot-bar` - Time slot selection bar
-   [ ] `time-slot-bar-week` - Weekly time slot bar
-   [ ] `time-slot-week-view` - Week view for time slots
-   [ ] `time-range-picker` (form-time-range-picker) - Time range picker
-   [ ] `unit-number` (form-unit-number-input) - Unit number input
-   [ ] `calendar` - Calendar component
-   [ ] `animation` - Animation wrapper components

### Progress Summary

-   **Total Components**: 71
-   **Completed**: 0
-   **Remaining**: 71
-   **Current Phase**: Phase 1 (Button Components)

### Notes

-   Multi-section components (data-table, filter) require special attention
-   Form components may have types in both src/form/types.ts and
    src/{standalone}/types.ts
-   Verify first 2-3 components in each phase before proceeding with batch
-   Update Progress Summary counts as phases complete
