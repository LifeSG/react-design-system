export type FadePosition = "left" | "right" | "both";

export interface FadeColorSet {
    left?: string[] | undefined;
    right?: string[] | undefined;
}

export interface FadeWrapperProps {
    children: JSX.Element | JSX.Element[];
    fadeColor?: string[] | FadeColorSet | undefined;
    fadePosition?: FadePosition | undefined;
    showIndicator?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}

export interface FadeWrapperRef {
    resize: () => void;
}
