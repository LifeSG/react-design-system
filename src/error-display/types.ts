import type { ButtonProps } from "../button";
import type { ThemeType } from "../theme";

/** Union of all supported error and status variants. */
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

/** Additional attributes for the `"maintenance"` type. */
export interface MaintenanceAdditionalAttributes {
    /** Date string rendered inside the default maintenance description. */
    dateString: string;
}

/** Additional attributes for the `"inactivity"` type. */
export interface InactivityAdditionalAttributes {
    /** Remaining seconds before the session expires, used to render the countdown timer. */
    secondsLeft: number;
    /** Interval (in seconds) for announcing remaining time via screen readers. */
    reminderInterval?: number | undefined;
}

/** Shared content and display attributes for `ErrorDisplayProps`. */
export interface ErrorDisplayAttributes {
    /** Overrides the default illustration for the selected `type`. */
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    /** Overrides the default title for the selected `type`. */
    title?: string | JSX.Element | undefined;
    /**
     * Overrides the default description for the selected `type`.
     * When `additionalProps` is also provided for `"maintenance"` or
     * `"inactivity"` types, `additionalProps` takes precedence.
     */
    description?: string | JSX.Element | undefined;
    /**
     *  Action button rendered below the description.
     * Defaults to a "Proceed" label when `children` is omitted.
     */
    actionButton?: ButtonProps | undefined;
    /**
     * Type-specific attributes that inject dynamic content into the default description.
     *
     * @remarks Pass `MaintenanceAdditionalAttributes` when `type` is `"maintenance"` and
     * `InactivityAdditionalAttributes` when `type` is `"inactivity"`. Ignored for all other types.
     */
    additionalProps?:
        | MaintenanceAdditionalAttributes
        | InactivityAdditionalAttributes
        | undefined;
    /**
     * Renders only the illustration, hiding the title, description, and action button.
     *
     * @default false
     */
    imageOnly?: boolean | undefined;
    /**
     * Selects the illustration resource scheme to use.
     *
     * @remarks Falls back to the active theme scheme from `ThemeProvider` when omitted.
     */
    illustrationScheme?: ThemeType | undefined;
}

/** Props for the `ErrorDisplay` component. */
export interface ErrorDisplayProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
        ErrorDisplayAttributes {
    /** Determines the default illustration assets and copy to display. */
    type: ErrorDisplayType;
    "data-testid"?: string | undefined;
}
