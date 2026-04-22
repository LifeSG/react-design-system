import React from "react";
import { AlertProps } from "../alert";
import { MaskAttributeProps } from "../masked-input";

export type UneditableSectionItemDisplayWidth = "half" | "full";
export type UneditableSectionItemMaskState = "masked" | "unmasked";
export type UneditableSectionItemMaskLoadingState = "loading" | "fail";

/**
 * Props for a single uneditable item within UneditableSection.
 *
 * @keywords uneditable-section, item, label, value, mask
 */
export interface UneditableSectionItemProps extends MaskAttributeProps {
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** The label of the uneditable item. */
    label: string;
    /** Note: masking is only available for string values */
    value: string | React.ReactNode;
    /** The width that the item can span across. Values: "half", "full" */
    displayWidth?: UneditableSectionItemDisplayWidth | undefined;
    /**
     * Specifies if value is masked or unmasked.
     * If undefined, no masking or unmasking controls will be rendered.
     *
     * Values: "masked" | "unmasked"
     */
    maskState?: UneditableSectionItemMaskState | undefined;
    /**
     * Specifies the state of the component when there is a
     * loading behaviour from a mask/unmask action. If undefined
     * the value will be rendered out.
     *
     * Values: "loading" | "fail"
     */
    maskLoadingState?: UneditableSectionItemMaskLoadingState | undefined;
    /** If specified, one is unable to mask or unmask the value */
    disableMaskUnmask?: boolean | undefined;
    /** If specified, an Alert will be rendered below the item */
    alert?: AlertProps | undefined;
}

/**
 * Props for the item section container within UneditableSection.
 *
 * @keywords uneditable-section, item-section, list, stretch
 */
export interface UneditableSectionItemSectionProps
    extends React.HTMLAttributes<HTMLUListElement> {
    /** Specifies if contents should take up the full width of the section */
    stretch?: boolean | undefined;
}

/**
 * A component that renders uneditable data fields and information.
 *
 * @keywords uneditable-section, read-only, data-fields, mask, label-value
 */
export interface UneditableSectionProps {
    /** The uneditable items to be displayed in a label and value format. */
    items?: UneditableSectionItemProps[] | undefined;
    /** The title of the section, rendered as Text.H3. */
    title?: string | undefined;
    /** The description of the section, rendered as Text.Body. */
    description?: string | undefined;
    /** A custom section at the top of the main uneditable items section */
    topSection?: JSX.Element | undefined;
    /** A custom section at the bottom of the main uneditable items section */
    bottomSection?: JSX.Element | undefined;
    /** The body of the entire section */
    children?: JSX.Element | JSX.Element[] | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** If specified false, the background will be transparent. Else it is grey by default */
    background?: boolean | undefined;
    /** Specifies if contents should take up the full width of the section */
    stretch?: boolean | undefined;
    /** If true, removes the default spacing and grid alignment based on `Layout.Content` */
    fullWidth?: boolean | undefined;
    /** The callback function when the mask icon is clicked */
    onMask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /** The callback function when the unmask icon is clicked */
    onUnmask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /** The callback function when the "Try again" button is clicked in error state */
    onTryAgain?: ((item: UneditableSectionItemProps) => void) | undefined;
}
