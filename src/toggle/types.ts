/**
 * Controls selection behavior and the indicator icon rendered inside the
 * toggle.
 *
 * - `"checkbox"` allows the user to deselect.
 * - `"radio"`, `"yes"`, and `"no"` only allow selection; once selected,
 *   they cannot be deselected.
 */
export type ToggleType = "checkbox" | "radio" | "yes" | "no";

/**
 * Visual border style applied to the toggle container.
 *
 * - `"default"` renders the container with a visible border.
 * - `"no-border"` renders without a border.
 */
export type ToggleStyleType = "default" | "no-border";

/**
 * Props for the `Toggle` selection control.
 */
export interface ToggleProps
    extends React.AriaAttributes,
        React.DOMAttributes<HTMLInputElement> {
    /**
     * Determines selection behavior and the indicator icon style.
     *
     * @default "checkbox"
     */
    type?: ToggleType | undefined;
    /**
     * Whether to render the selection indicator icon inside the toggle.
     *
     * The icon shape depends on `type`:
     * - `"checkbox"` renders a tick box.
     * - `"radio"` renders a filled circle.
     * - `"yes"` renders a tick.
     * - `"no"` renders a cross.
     */
    indicator?: boolean | undefined;
    /**
     * Controlled checked state of the toggle.
     */
    checked?: boolean | undefined;
    /**
     * Visual presentation of the toggle container.
     *
     * @default "default"
     */
    styleType?: ToggleStyleType | undefined;
    /** Label content for the toggle. */
    children: React.ReactNode;
    /**
     * Maximum number of visible label lines at each breakpoint.
     *
     * Lines beyond the limit are truncated with an ellipsis. Omit a
     * breakpoint key to leave that viewport unconstrained.
     */
    childrenMaxLines?:
        | {
              mobile?: number | undefined;
              desktop?: number | undefined;
              tablet?: number | undefined;
          }
        | undefined;
    /**
     * Secondary content rendered below the main label.
     */
    subLabel?: (() => JSX.Element) | JSX.Element | string | undefined;
    disabled?: boolean | undefined;
    /** Renders the input in an error state. */
    error?: boolean | undefined;
    className?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Called when the toggle selection state changes.
     *
     * When provided, the caller is responsible for reflecting
     * the new value back via `checked`.
     */
    onChange?:
        | ((event: React.ChangeEvent<HTMLInputElement>) => void)
        | undefined;
    /**
     * Optional collapsible body section rendered below the toggle label.
     *
     * The section automatically expands when the toggle becomes selected.
     */
    compositeSection?: ToggleCompositeSectionProps | undefined;
    /**
     * Renders a "Remove" button alongside the label.
     *
     * Clicking the button calls `onRemove` when the toggle is not disabled.
     */
    removable?: boolean | undefined;
    /** Called when the remove button is clicked and the toggle is not disabled. */
    onRemove?: (() => void) | undefined;
    /** Constrains the toggle width to its content rather than filling the container. */
    useContentWidth?: boolean | undefined;
    /**
     * Keeps the toggle keyboard-focusable when `disabled` is `true`.
     *
     * When set alongside `disabled`, the native `disabled` attribute is omitted
     * in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element
     * keyboard-reachable. `onChange` is still suppressed.
     */
    focusableWhenDisabled?: boolean | undefined;
}

/**
 * Configuration for the collapsible body section attached to a `Toggle`.
 */
export interface ToggleCompositeSectionProps {
    /** Content rendered inside the composite section body. */
    children: React.ReactNode;
    /**
     * Whether the section can be collapsed and expanded by the user.
     *
     * @default true
     */
    collapsible?: boolean | undefined;
    /**
     * Whether the composite section starts in the expanded state.
     *
     * When the toggle becomes selected, the section automatically expands
     * regardless of this value. Only applies when `collapsible` is `true`.
     *
     * @default false
     */
    initialExpanded?: boolean | undefined;
    /**
     * Errors shown in an alert banner when the section is collapsed.
     *
     * Pass a `string[]` to render a titled error list, or a `JSX.Element`
     * for a custom error presentation.
     */
    errors?: string[] | JSX.Element | undefined;
}
