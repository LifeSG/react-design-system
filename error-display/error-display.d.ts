import type { ErrorDisplayProps } from "./types";
/**
 * Displays a predefined error or status state with an illustration, title,
 * description, and optional action button.
 *
 * Use `ErrorDisplay` to communicate HTTP error codes, session lifecycle states,
 * maintenance windows, and other system-level statuses to users.
 */
export declare const ErrorDisplay: ({ type, img, title, description, actionButton, additionalProps, imageOnly, illustrationScheme, className, ...otherProps }: ErrorDisplayProps) => import("react/jsx-runtime").JSX.Element | null;
