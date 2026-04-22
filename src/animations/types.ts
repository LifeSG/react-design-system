/** Base props shared by all animation components. */
export interface BaseAnimationProps {
    /** Sets the HTML `id` attribute on the root element. */
    id?: string;
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string;
}

/** Props for customising the colour of an animation. */
export interface CustomisedProps {
    /** Overrides the default animation colour with a CSS colour value. */
    color?: string | undefined;
}

/** Combined props for animation components that support colour customisation. */
export interface CustomisableAnimationProps
    extends BaseAnimationProps,
        CustomisedProps {}
