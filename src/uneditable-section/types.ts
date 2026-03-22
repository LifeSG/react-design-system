import { MaskAttributeProps } from "../masked-input";

export type UneditableSectionItemDisplayWidth = "half" | "full";
export type UneditableSectionItemMaskState = "masked" | "unmasked";
export type UneditableSectionItemMaskLoadingState = "loading" | "fail";

export interface UneditableSectionItemProps extends MaskAttributeProps {
    id?: string | undefined;
    label: string;
    value: string;
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
}

/**
 * Props for the UneditableSection component - read-only data display panel.
 *
 * Renders a list of label–value pairs, optionally with masking controls
 * for sensitive values. Supports custom top/bottom sections and full-body
 * override via `children`.
 *
 * @example
 * ```tsx
 * <UneditableSection
 *     title="Personal Information"
 *     items={[
 *         { label: "Name", value: "Jane Doe" },
 *         { label: "NRIC", value: "S1234567A", maskState: "masked" },
 *     ]}
 *     onUnmask={handleUnmask}
 * />
 * ```
 * @keywords read only panel, view mode, label value display, summary section, masked field display
 */
export interface UneditableSectionProps {
    /** The list of label–value items to render. */
    items?: UneditableSectionItemProps[] | undefined;
    /** An optional heading rendered as `Text.H3` above the items. */
    title?: string | undefined;
    /** An optional description rendered as `Text.Body` below the title. */
    description?: string | undefined;
    /** A custom element rendered above the items list. */
    topSection?: JSX.Element | undefined;
    /** A custom element rendered below the items list. */
    bottomSection?: JSX.Element | undefined;
    /** Full body override — replaces the items list with custom content. */
    children?: JSX.Element | JSX.Element[] | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /**
     * When `false`, the background is transparent instead of the default grey.
     *
     * @default true
     */
    background?: boolean | undefined;
    /** Called when the mask icon is clicked on an item. */
    onMask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /** Called when the unmask icon is clicked on an item. */
    onUnmask?: ((item: UneditableSectionItemProps) => void) | undefined;
    /** Called when the "Try again" button is pressed in an item's error state. */
    onTryAgain?: ((item: UneditableSectionItemProps) => void) | undefined;
}
