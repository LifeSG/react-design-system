/// <reference types="react" />
export type BoxContainerDisplayState = "default" | "error" | "warning";
export interface BoxContainerSubComponentTestIds {
    title?: string | undefined;
    handle?: string | undefined;
    displayStateIcon?: string | undefined;
}
export interface BoxContainerProps {
    children: JSX.Element | JSX.Element[];
    title: string;
    collapsible?: boolean | undefined;
    expanded?: boolean | undefined;
    callToActionComponent?: JSX.Element | undefined;
    displayState?: BoxContainerDisplayState | undefined;
    className?: string | undefined;
    subComponentTestIds?: BoxContainerSubComponentTestIds | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
}
