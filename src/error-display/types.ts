export type ErrorDisplayType =
    | "400"
    | "403"
    | "404"
    | "408"
    | "500"
    | "503"
    | "maintenance"
    | "unsupported-browser"
    | "partially-supported-browser";

export interface MaintenanceAdditionalAttributes {
    dateString: string;
}

export interface Error500AdditionalAttributes {
    referenceId: string;
}

export interface ErrorDisplayAttributes {
    /** The custom image attributes */
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    /** The action button displayed at the bottom of the Error Display */
    actionButton?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
    additionalProps?:
        | MaintenanceAdditionalAttributes
        | Error500AdditionalAttributes
        | undefined;
}

export interface ErrorDisplayProps
    extends React.HTMLAttributes<HTMLElement>,
        ErrorDisplayAttributes {
    type: ErrorDisplayType;
}
