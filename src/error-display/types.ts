import { ButtonProps } from "../button";
import { ResourceScheme } from "../theme/types";

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
    /** Interval (in seconds) for announcing remaining time via screen readers */
    reminderInterval?: number | undefined;
}

/**
 * Base content attributes for the ErrorDisplay component.
 *
 * Shared between `ErrorDisplayProps` and the DataTable `emptyView` override.
 */
export interface ErrorDisplayAttributes {
    /** Custom `<img>` element attributes for the error illustration. */
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    /** The title text or element for the ErrorDisplay. */
    title?: string | JSX.Element | undefined;
    /** The description text or element for the ErrorDisplay. */
    description?: string | JSX.Element | undefined;
    /** The action button displayed at the bottom of the ErrorDisplay. */
    actionButton?: ButtonProps | undefined;
    /**
     * Additional props to control type-specific content (e.g., maintenance
     * date or inactivity seconds countdown).
     */
    additionalProps?:
        | MaintenanceAdditionalAttributes
        | InactivityAdditionalAttributes
        | undefined;
    /** When `true`, renders only the illustration image without title or description. */
    imageOnly?: boolean | undefined;
    /** Overrides the theme resource scheme for the illustration. */
    illustrationScheme?: ResourceScheme | undefined;
}

/**
 * Props for the ErrorDisplay component - full-page error and status screen.
 *
 * Renders a pre-defined error page with an illustration, title, description,
 * and optional action button. The `type` prop selects both the layout variant
 * and the default illustration and copy.
 *
 * @example
 * ```tsx
 * <ErrorDisplay type="404" />
 * <ErrorDisplay type="maintenance" additionalProps={{ dateString: "1 Jan 2025" }} />
 * ```
 * @keywords empty state, 404 page, error page, maintenance screen, not found
 */
export interface ErrorDisplayProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
        ErrorDisplayAttributes {
    /** The error type that determines the illustration and default copy. */
    type: ErrorDisplayType;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
}
