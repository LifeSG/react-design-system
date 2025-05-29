import { ButtonProps } from "../button";
import { ResourceScheme } from "@/theme";

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

export interface InactivityAdditionalAttributes {
    secondsLeft: number;
}

export interface ErrorDisplayAttributes {
    /** The custom image attributes */
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    title?: string | JSX.Element | undefined;
    description?: string | JSX.Element | undefined;
    /** The action button displayed at the bottom of the Error Display */
    actionButton?: ButtonProps | undefined;
    /** Additional pre-specified props to control specific content  */
    additionalProps?:
        | MaintenanceAdditionalAttributes
        | InactivityAdditionalAttributes
        | undefined;
    /** Specifies if only the image is rendered */
    imageOnly?: boolean | undefined;
    /** Use specific resource scheme instead of theme resource scheme */
    illustrationScheme?: ResourceScheme | undefined;
}

export interface ErrorDisplayProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
        ErrorDisplayAttributes {
    type: ErrorDisplayType;
    "data-testid"?: string | undefined;
}
