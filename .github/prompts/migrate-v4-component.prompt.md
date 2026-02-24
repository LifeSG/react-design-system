---
name: "migrate-v4-component"
description: "Migrates a component from Styled Components-based styling to Linaria"
---

You are tasked with migrating a component to Linaria.

## Input Requirements

The user must provide:

1. **Component**, specified as
    - Path to the component folder, OR
    - Main folder of the current open file

## Your Responsibilities

Perform the migration in steps. At each step, the component should remain functional. Pause and allow the user to commit the changes before proceeding to the next step. Suggest a commit message that reflects the completed step. The commit message should follow this template:

```
[V4][<initials>] <ComponentName> - <Description of the completed step>
```

### 1. Migrate V3 design tokens to V4 design tokens

-   Update V3 design tokens from `src/v3_theme` to V4 design tokens in `src/theme`
-   For media queries, they need to be reordered:
    -   Max width media queries should be ordered from smallest to largest (xxs, xs, sm, md, lg, xl)
    -   Min width media queries should be ordered from largest to smallest (xl, lg, md, sm, xs, xxs)

### 2. Convert Styled Components interpolations to class names within the `styled` tags

-   In `<component>.styles.ts`, convert the function interpolations to nested css classes. Apply a logical class name scoped to the component name and variant.
-   In `<component>.tsx`, convert the style props to conditionally applied classes using `clsx`. Example:

    ```
    // before
    const Container = styled.div`
      background: red;
      ${props => props.disabled && ...}
      ${props => props.$isOpen && ...}
    `

    <Container disabled={disabled} $isOpen={isOpen} />

    // after
    const Container = styled.div`
      background: red;

      & .containerDisabled {
        ...
      }

      & .containerIsOpen {
        ...
      }
    `

    <Container className={clsx(disabled && "containerDisabled", isOpen && "containerIsOpen", className)} />
    ```

-   Ensure the consumer `className` prop is chained last to the top-level element using `clsx` to allow for external overrides
-   Remove the "STYLE TYPES" section header
-   For props used as CSS values, they can be converted to CSS variables and passed down to the `styled` component as inline styles. The CSS variable name should be formatted as `--fds-internal-componentName-subComponent-propertyType`. For example:

    ```
    // before
    const Container = styled.div`
      background: ${props => props.backgroundColor};
    `;

    // after
    const tokens = {
      container: { backgroundColor: "--fds-internal-myComponent-container-backgroundColor" }
    }

    const Container = styled.div`
      /* reset variable to prevent leaking to child components */
      ${tokens.container.backgroundColor}: initial;
      background: var(${tokens.container.backgroundColor});
    `;

    const MyComponent = ({ backgroundColor, ...rest }) => {
      const containerRef = useRef(null);

      useApplyStyle(containerRef, {
        [tokens.container.backgroundColor]: backgroundColor
      });

      return <Container ref={containerRef} {...rest} />
    }
    ```

### 3. Convert Styled Components `styled` tags to Linaria `css` tags

-   In `<component>.styles.ts`, extract the nested css classes to standalone `css` tags
-   In `<component>.tsx`, replace the Styled Component and hardcoded class name references to the new Linaria references. Import the styles as `import * as styles from "./<component>.styles"` to avoid collision with actual variable names or props. Example:

    ```
    const container = css`
      background: red;
    `

    const containerDisabled = css`
      ...
    `

    <div className={clsx(styles.container, disabled && styles.containerDisabled, className)} />
    ```

-   If the `css` tag is empty, it can be removed

### 4. Update props documentation in Storybook

If the component is not a top-level component, skip this step.

-   Props are manually documented in api tables at `stories/<component>/props-table.tsx`
-   If a type was removed, remove its entry from the api table
-   If a type was modified, update its propTypes and/or description in the api table

### 5. Add or update unit tests

If the component is not a top-level component, skip this step.

-   Tests are saved at `tests/<component>`
-   If there are existing unit tests for the component, update them to reflect the changes made during the migration
-   If there are no existing unit tests, add new tests to cover the component's functionality

## Constraints

-   Only implement the specific portion assigned to you
-   Do not modify or implement tasks that were not assigned
-   Maintain backward compatibility unless explicitly stated otherwise in the plan
-   Follow the existing architecture and patterns in the codebase
-   Ensure your changes don't break existing functionality
