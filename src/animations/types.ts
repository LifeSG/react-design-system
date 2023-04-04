export interface BaseAnimationProps {
    id?: string;
    "data-testid"?: string | undefined;
    className?: string;
}

export interface CustomisedProps {
    color?: string | undefined;
}

export interface CustomisableAnimationProps
    extends BaseAnimationProps,
        CustomisedProps {}
