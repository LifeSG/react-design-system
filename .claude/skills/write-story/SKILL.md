---
name: write-story
description: >-
    Creates a Storybook story file for an existing design system component.
    Generates variants and documentation following the project's Storybook
    patterns. Use when adding or updating stories.
argument-hint: >-
    Provide the component name or path (e.g. "button", "src/info-card").
---

# Write Storybook story

You are tasked with writing a Storybook story for a design system component in `@lifesg/react-design-system`.

## Input requirements

The user must provide:

1. **Component**, specified as:
    - Component name (e.g. `button`), OR
    - Path to the component folder (e.g. `src/info-card`)

## Prerequisites

Before writing the story, read:

1. The component's `types.ts` to understand all props
2. The component's implementation (`.tsx`) to understand behavior
3. Existing stories in `stories/` for pattern reference (e.g. `stories/button/button.stories.tsx`)

## File structure

Create the following files in `stories/<component-name>/`:

```
stories/<component-name>/
├── <component-name>.mdx           # Rich documentation
├── <component-name>.stories.tsx   # Story definitions
├── doc-elements.tsx               # Supporting display elements (if needed)
└── tokens-table.tsx               # Token customisation table (if component has tokens)
```

## Storybook title

Set `meta.title` using the format `Category/ComponentName`. The categories are:

| Category            | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| Core                | Foundational building blocks                      |
| Content             | Displaying and organising information             |
| Selection and input | Capturing user choices and input outside of forms |
| Navigation          | Moving between pages, sections, or views          |
| Feedback indicators | Communicating status, progress, or alerts         |
| Overlays            | Layered UI that appears above the page            |
| Form                | Form-wrapped inputs with label and error display  |

## MDX documentation

The MDX file provides rich documentation for the component in Storybook. It should give developers an overview of the component's usage, key features, and important gotchas.

### Structure

Follow this order:

1. **Meta** — `<Meta of={ComponentStories} />` to associate with the stories module
2. **Heading** — `# ComponentName` as the page title
3. **Overview** — Brief description of what the component does
4. **Import snippet** — Code block showing the import for the component from `@lifesg/react-design-system/<component-name>`
5. **Default story** — An example to illustrate the primary usage
6. **Feature sections** — A section for each notable prop or behavior, each with an optional short description followed by the relevant story
7. **Accessibility** — If the component has specific accessibility considerations that are out of the norm of standard practices, document them here
8. **Component API** — Display the component tokens (if applicable) and auto-generated prop tables

### Writing guidelines

-   Omit the section description if a prop usage is self-explanatory. Only include one if it helps clarify the purpose of a prop or a combination of props.
-   Use backticks for prop names and values inline
-   Use blockquotes (`>`) sparingly for important caveats
-   Keep section headings descriptive (e.g. `## With disabled dates`, not `## Feature 3`)

## Story documentation

There are several types of story documentation that can be included for a component:

-   **Playground** — Show Storybook interactive controls. **Do not include a Playground by default.** Only add one when the user explicitly requests it.
-   **Variants** — Create separate story exports for each meaningful variant. For props with enumerated values, use `RowDecorator` or `GridDecorator` to arrange them in a structured layout.
-   **States** — Create separate story exports for each meaningful state e.g. loading, error. Exception: for Form components, display the standard states (default, disabled, read only, error) together in a single story.
-   **Component token** — Documents the component-specific tokens in a table. Apply the `tags: ["!dev"]` tag to omit them from the Storybook sidebar and wrap the story in a `<Story>` block instead of `<Canvas>`.

### Decorators

Decorators are optional. Use them when a story benefits from structured layout. Omit them for components that manage their own width.

-   **`StoryDecorator`** — Centers content with consistent padding and a minimum width.
-   **`RowDecorator`** — Horizontal flex row with wrapping. Use when a story renders multiple siblings side by side (e.g. badge or pill variants).
-   **`StackDecorator`** — Vertical flex column. Use when a story renders multiple siblings that should stack.
-   **`GridDecorator`** — Labelled grid for variant matrices (e.g. style types × icon positions).
-   **`FullWidthStoryDecorator`** — For navigation-level components (e.g. `Navbar`) or to display content that needs to be fullscreen.

### Principles

-   Ensure that each story has a clear and descriptive name that reflects its purpose
-   Add sufficient stories to describe all meaningful variations
-   If the prop does not have an obvious impact on the component behaviour or visual output, it does not need to have a dedicated story but ensure it is covered in the unit tests
-   Use `@lifesg/react-icons/placeholder` (`PlaceholderIcon`) for icon placeholders
-   Keep render functions focused — one visual concept per story

## Verification checklist

Do **not** start Storybook yourself. Provide the user with the direct Storybook URL to the docs page so they can verify the story.

The URL format is:

```
http://localhost:6006/?path=/docs/<storybook-title-kebab>--docs
```

Where `<storybook-title-kebab>` is the `meta.title` value with `/` replaced by `-` and spaces removed, all lowercased. For example, a title of `Selection and input/InputButton` becomes `selection-and-input-inputbutton`.

Remind the user to:

1. Run `npm run storybook` and open the direct URL
2. If a Playground was added, check that the controls work
3. Confirm both light and dark mode look correct
4. Confirm the component looks correct across different screen sizes
