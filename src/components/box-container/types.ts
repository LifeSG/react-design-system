export type BoxContainerDisplayState = "default" | "error" | "warning";

export interface BoxContainerProps {
    children: JSX.Element | JSX.Element[];
    title: string;
    collapsible?: boolean;
    expanded?: boolean;
    callToActionComponent?: JSX.Element;
    displayState?: BoxContainerDisplayState;
    className?: string;
    subComponentTestIds?: {
        label?: string;
        handle?: string;
        stateIcon?: string;
    };
    "data-testid"?: string;
}
