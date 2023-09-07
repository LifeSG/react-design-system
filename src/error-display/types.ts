export type ErrorDisplayType =
    | "400"
    | "403"
    | "404"
    | "408"
    | "500"
    | "502"
    | "503"
    | "504"
    | "confirmation"
    | "inactivity"
    | "insufficient-credits"
    | "link-error"
    | "logout"
    | "warning"
    | "maintenance"
    | "no-item-found"
    | "payment-unsuccessful"
    | "transfer-unsuccessful"
    | "unsupported-browser"
    | "partially-supported-browser";

export interface MaintenanceAdditionalAttributes {
    dateString: string;
}

export interface ErrorDisplayAttributes {
    /** The custom image attributes */
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    /** The action button displayed at the bottom of the Error Display */
    actionButton?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
    /** Additional pre-specified props to control specific content  */
    additionalProps?: MaintenanceAdditionalAttributes | undefined;
    /** Specifies if only the image is rendered */
    imageOnly?: boolean | undefined;
}

export interface ErrorDisplayProps
    extends React.HTMLAttributes<HTMLElement>,
        ErrorDisplayAttributes {
    type: ErrorDisplayType;
    "data-testid"?: string | undefined;
}
