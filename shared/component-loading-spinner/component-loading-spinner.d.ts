/// <reference types="react" />
/**
 * This component is mainly used within components and is not to be confused
 * with the main loading spinner in animations/loading-spinner
 */
export interface ComponentLoadingSpinnerProps {
    className?: string | undefined;
    /** Measurement in px */
    size?: number | undefined;
    color?: string | undefined;
}
export declare const ComponentLoadingSpinner: ({ color, className, size, }: ComponentLoadingSpinnerProps) => JSX.Element;
