---
mode: agent
---

# Copy Props Table Descriptions to JSDoc Comments

You will copy property descriptions from Storybook props tables (`stories/**/props-table.tsx`) to JSDoc comments in the actual type definitions (`src/**/types.ts`).

## Overview

Almost all React components in this repo have a `props-table.tsx` file in their stories folder. These tables contain detailed descriptions of component props that should be reflected in the actual TypeScript type definitions to enable IDE IntelliSense.

## Task Requirements

For the specified component(s):

1. **Locate the MDX file**: Find `stories/{component}/{component}.mdx` and extract relevant component documentation
2. **Locate the props table**: Find `stories/{component}/props-table.tsx`
3. **Extract descriptions**: Parse the `DATA: ApiTableSectionProps[]` array to get all property descriptions
4. **Find type definitions**: Locate the corresponding type file(s), typically at `src/{component}/types.ts`
5. **Update JSDoc comments**:
    - Add/replace the JSDoc comment above the main component Props interface with a comprehensive description from the MDX file
    - Add/replace JSDoc comments above each property in all type definitions

## Extracting Component Description from MDX

The component description should be extracted from the MDX file and composed into a concise, informative JSDoc comment.

### Primary Description

The primary description **usually** appears immediately after `<Secondary>Overview</Secondary>`. This is the core description of what the component does.

Example from `data-table.mdx`:

```
Organises a collection of data into readable rows.
```

### Additional High-Level Information

Look for additional sections in the MDX file that provide high-level understanding of the component's capabilities, structure, or key features. Include relevant information that would be useful to know when using the component.

**Include information about:**

-   Component anatomy/structure (e.g., Tab has `Tab` and `Tab.Item` sub-components)
-   Key capabilities mentioned in section headings (e.g., DataTable supports sort indicators, multi-selection, action bars, alternating rows)
-   Important behavioral notes or modes (e.g., controlled vs uncontrolled modes)

**Exclude:**

-   Implementation examples (code snippets)
-   Detailed usage instructions better suited for documentation
-   Warnings or notes about specific edge cases
-   Information that's already clear from prop descriptions

**Rewording for JSDoc:**
Keep the primary description the same, and rephrase additional information to fit a JSDoc style.
Keep descriptions concise and reword to suit a JSDoc format. Focus on what the component is and what it can do at a high level.

**Examples:**

For DataTable (combining overview + feature headings):

```typescript
/**
 * Organises a collection of data into readable rows.
 *
 * Supports sort indicators, multi-selection with checkboxes, action bars,
 * alternating row colors, loading states, and custom empty views.
 */
export interface DataTableProps {
```

For Tab (combining overview + anatomy):

```typescript
/**
 * Used to organise content into multiple panes. Users can toggle between
 * different tabs to view different categories of information.
 *
 * Comprises of `Tab` (main component with selectors) and `Tab.Item`
 * (wrapper for tab content). Supports controlled mode for custom behavior.
 */
export interface TabProps {
```

## Props Table Structure

Props tables use `ApiTableSectionProps[]` where:

-   Each section may have an optional `name` field indicating a specific type (e.g., "HeaderItemProps", "RowProps")
-   If `name` is absent, the section describes the main component props
-   Each section contains `attributes` with:
    -   `name`: The property name
    -   `description`: The description to copy (may be string or JSX)
    -   `propTypes`: Type information (optional)
    -   `defaultValue`: Default value (optional)
    -   `mandatory`: Whether the prop is required (optional)

## Handling Multiple Sections

Props tables may document multiple related types in one file. For example, `data-table/props-table.tsx` contains sections for:

-   Main component props (section without a name, or named after the component)
-   `HeaderItemProps` (sub-type section)
-   `RowProps` (sub-type section)

Match each section to its corresponding type definition by:

1. If section has a `name`, find the matching type/interface with that exact name
2. If section has no `name`, it describes the main component props (e.g., `DataTableProps`)

## JSDoc Format

### Component Interface JSDoc

Add a comprehensive component description above the main Props interface by combining the overview and relevant high-level information from the MDX file. End with a list of search keywords:

```typescript
/**
 * Primary description of what the component does.
 *
 * Additional relevant information about capabilities, structure, or modes.
 *
 * Keywords: keyword1, keyword2, keyword3
 */
export interface ComponentNameProps {
    // properties...
}
```

**Search Keywords Guidelines:**

-   Include alternative names or common terms users might search for (e.g., "dropdown" for Select Input)
-   Include related UI patterns or concepts
-   Keep the list short (3-6 keywords typically)
-   Focus on terms NOT already in the component name

Real-world example for DataTable:

```typescript
/**
 * Organises a collection of data into readable rows.
 *
 * Supports sort indicators, multi-selection with checkboxes, action bars,
 * alternating row colors, loading states, and custom empty views.
 *
 * Keywords: table, grid, list, rows, columns
 */
export interface DataTableProps {
    // properties...
}
```

Real-world example for Tab:

```typescript
/**
 * Used to organise content into multiple panes. Users can toggle between
 * different tabs to view different categories of information.
 *
 * Comprises of `Tab` (main component with selectors) and `Tab.Item`
 * (wrapper for tab content). Supports controlled mode for custom behavior.
 *
 * Keywords: tabs, tabbed, navigation, panels, switcher
 */
export interface TabProps {
    // properties...
}
```

Real-world example for InputSelect:

```typescript
/**
 * Allows users to select a single option from a list.
 *
 * Keywords: dropdown, select, picker, combobox, chooser
 */
export interface InputSelectProps {
    // properties...
}
```

### Property JSDoc

Convert property descriptions to JSDoc comments:

```typescript
/** Description text here */
propertyName?: Type | undefined;
```

For multi-line descriptions or descriptions with special formatting:

```typescript
/**
 * Description line 1
 * Description line 2
 */
propertyName?: Type | undefined;
```

## Special Cases

-   **JSX Descriptions**: Convert JSX elements to plain text, preserving key information:

    -   `<code>value</code>` → `` `value` ``
    -   HTML entities → appropriate Unicode or text
    -   Links → Keep URL in parentheses if relevant
    -   Formatting → Use markdown where appropriate

-   **Empty name**: Some attributes have `name: ""` with general information. Include this in a comment above the interface/type if relevant.

-   **Default values**: If `defaultValue` is provided in the table, append it to the description: `(default: "value")`

-   **Mandatory fields**: Note this if marked in the props table

-   **Existing JSDoc**: Replace existing JSDoc comments with the description from the props table, even if JSDoc already exists

## Type Location

Types may not all be defined in `src/{component}/types.ts`. They can be:

-   In the main component's types file
-   In shared type files (e.g., `src/shared/types.ts`)
-   In related component folders
-   Imported from other modules

Search across the codebase to find the correct type definitions. Use semantic search or grep to locate interfaces and types by name.

## Constraints

1. **DO NOT** modify the props table files themselves
2. **DO** update type definition files in `src/` (wherever they are located)
3. **DO** preserve all existing type definitions, only add/update JSDoc comments
4. **DO** maintain proper TypeScript syntax
5. **DO** handle all sections in a props table, not just the main component props

## Output Requirements

Provide a **concise final report** with:

### 1. Updated Types

List each type/interface that was updated with a clickable file link:

Format: `[TypeName](file:///absolute/path/to/file.ts)`

Example output:

```
- [DataTableProps](file:///Users/hieu/Sources/react-design-system/src/data-table/types.ts)
- [HeaderItemProps](file:///Users/hieu/Sources/react-design-system/src/data-table/types.ts)
```

### 2. Unprocessed Descriptions

List descriptions that could not be copied because no matching type/property was found:

Format:

-   **Section**: `SectionName` (or "Main props")
    -   `propertyName`: Description text... (Reason: type/property not found in codebase)

Keep this section empty if all descriptions were successfully processed.

## Example Input

Component(s) to process: `data-table`, `button`

## Example Workflow

For `data-table`:

1. Read `stories/data-table/data-table.mdx`:
    - Extract overview: "Organises a collection of data into readable rows."
    - Identify key features from headings: sort indicators, multi-selection, action bars, alternating rows, loading states, empty views
    - Compose comprehensive JSDoc description
2. Read `stories/data-table/props-table.tsx`
3. Parse sections: Main props (unnamed), HeaderItemProps, RowProps
4. Read `src/data-table/types.ts`
5. Add comprehensive overview JSDoc to `DataTableProps` interface
6. Update `DataTableProps` properties with descriptions from unnamed section
7. Update `HeaderItemProps` with descriptions from "HeaderItemProps" section
8. Update `RowProps` with descriptions from "RowProps" section
9. Report any mismatches
