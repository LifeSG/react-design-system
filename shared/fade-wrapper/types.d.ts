/// <reference types="react" />
export type FadePosition = "left" | "right" | "both";
export interface FadeColorSet {
    left?: string[] | undefined;
    right?: string[] | undefined;
}
export interface ResizeCallbackParams {
    content: HTMLDivElement;
    wrapper: HTMLDivElement;
}
export interface FadeWrapperProps {
    children: JSX.Element | JSX.Element[];
    fadeColor?: string[] | FadeColorSet | undefined;
    fadePosition?: FadePosition | undefined;
    showIndicator?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onResize?: ((params: ResizeCallbackParams) => void) | undefined;
}
export interface FadeWrapperRef {
    resize: () => void;
}
