import type React from "react";

import type { AlertProps } from "../alert";
import type { MaskAttributeProps } from "../masked-input";

/** Grid column span for an item within the section layout. */
export type UneditableSectionItemDisplayWidth = "half" | "full";
/** Whether the item value is currently masked or unmasked. */
export type UneditableSectionItemMaskState = "masked" | "unmasked";
/** Async loading state during a mask or unmask action. */
export type UneditableSectionItemMaskLoadingState = "loading" | "fail";

/**
 * Props for `UneditableSection` component.
 */
export interface UneditableSectionItemProps extends MaskAttributeProps {
    id?: string | undefined;
    /** Field label shown above the item value. */
    label: string;
    /**
     * The display value for the field.
     *
     * @remarks Masking is only available when `value` is a string.
     */
    value: string | React.ReactNode;
    /**
     * Grid column span for the item within the section layout.
     *
     * @default "full"
     */
    displayWidth?: UneditableSectionItemDisplayWidth | undefined;
    /**
     * Controls whether the value is masked or unmasked.
     * When undefined, no mask or unmask controls are rendered.
     */
    maskState?: UneditableSectionItemMaskState | undefined;
    /**
     * Async loading state during a mask or unmask action.
     * When undefined, the resolved value is rendered directly.
     */
    maskLoadingState?: UneditableSectionItemMaskLoadingState | undefined;
    /** Prevents the user from toggling the mask or unmask control. */
    disableMaskUnmask?: boolean | undefined;
    /** Alert rendered below the item value. */
    alert?: AlertProps | undefined;
}

/**
 * Props for `UneditableSection.ItemSection`.
 */
export interface UneditableSectionItemSectionProps
    extends React.HTMLAttributes<HTMLUListElement> {
    /** Stretches every child item to fill the full width of the grid. */
    stretch?: boolean | undefined;
}

/**
 * Props for the `UneditableSection` component.
 */
export interface UneditableSectionProps {
    /** List of labeled read-only field items to render in a responsive grid. */
    items?: UneditableSectionItemProps[] | undefined;
    /** Optional heading rendered above the items grid. */
    title?: string | undefined;
    /** Optional description rendered below `title` and above the items grid. */
    description?: string | undefined;
    /** Custom content rendered above the items grid, below `description`. */
    topSection?: JSX.Element | undefined;
    /** Custom content rendered below the items grid. */
    bottomSection?: JSX.Element | undefined;
    /**
     * Fully custom section body.
     *
     * @remarks When provided, `items`, `title`,`description`,
     * `topSection`, and `bottomSection` are not rendered.
     */
    children?: JSX.Element | JSX.Element[] | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /**
     * Applies a grey background to the section container.
     * Set to `false` for a transparent background.
     *
     * @default true
     */
    background?: boolean | undefined;
    /** Stretches every item to fill the full column width of the grid. */
    stretch?: boolean | undefined;
    /**
     * When `true`, allows the section to span the full available width of its parent.
     */
    fullWidth?: boolean | undefined;
    /**
     * Called when a mask control is activated on an item.
     *
     * @param item The item whose mask control was activated.
     */
    onMask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /**
     * Called when an unmask control is activated on an item.
     *
     * @param item The item whose unmask control was activated.
     */
    onUnmask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /**
     * Called when the retry button is clicked on an item in error state.
     *
     * @param item The item that encountered the mask/unmask error.
     */
    onTryAgain?: ((item: UneditableSectionItemProps) => void) | undefined;
}
