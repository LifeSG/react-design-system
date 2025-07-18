import React from "react";
import { AlertProps } from "../alert";
import { MaskAttributeProps } from "../masked-input";

export type UneditableSectionItemDisplayWidth = "half" | "full";
export type UneditableSectionItemMaskState = "masked" | "unmasked";
export type UneditableSectionItemMaskLoadingState = "loading" | "fail";

export interface UneditableSectionItemProps extends MaskAttributeProps {
    id?: string | undefined;
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

export interface UneditableSectionItemSectionProps
    extends React.HTMLAttributes<HTMLUListElement> {
    /** Specifies if contents should take up the full width of the section */
    stretch?: boolean | undefined;
}

export interface UneditableSectionProps {
    items?: UneditableSectionItemProps[] | undefined;
    title?: string | undefined;
    description?: string | undefined;
    /** A custom section at the top of the main uneditable items section */
    topSection?: React.JSX.Element | undefined;
    /** A custom section at the bottom of the main uneditable items section */
    bottomSection?: React.JSX.Element | undefined;
    /** The body of the entire section */
    children?: React.JSX.Element | React.JSX.Element[] | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /** If specified false, the background will be transparent. Else it is grey by default */
    background?: boolean | undefined;
    /** Specifies if contents should take up the full width of the section */
    stretch?: boolean | undefined;
    /** The callback function when the mask icon is clicked */
    onMask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /** The callback function when the unmask icon is clicked */
    onUnmask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /** The callback function when the "Try again" button is clicked in error state */
    onTryAgain?: ((item: UneditableSectionItemProps) => void) | undefined;
}
