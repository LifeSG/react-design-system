export type BoxContainerDisplayState = "default" | "error" | "warning";

export interface BoxContainerSubComponentTestIds {
    title?: string | undefined;
    handle?: string | undefined;
    displayStateIcon?: string | undefined;
}

export interface BoxContainerProps {
    children: React.JSX.Element | React.JSX.Element[];
    title: string | React.JSX.Element;
    collapsible?: boolean | undefined;
    expanded?: boolean | undefined;
    callToActionComponent?: React.JSX.Element | undefined;
    displayState?: BoxContainerDisplayState | undefined;
    className?: string | undefined;
    subComponentTestIds?: BoxContainerSubComponentTestIds | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    clickableHeader?: boolean | undefined;
}
