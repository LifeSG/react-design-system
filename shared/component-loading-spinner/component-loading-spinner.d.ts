import type { HTMLAttributes } from "react";
type BaseProps = Omit<HTMLAttributes<HTMLDivElement>, "color">;
export interface ComponentLoadingSpinnerProps extends BaseProps {
    /** Measurement in px */
    size?: number | undefined;
    /** rgb/hex value or Color token */
    color?: string | undefined;
}
/**
 * This component is mainly used within components and is not to be confused
 * with the main loading spinner in animations/loading-spinner
 *
 * By default it inherits the font size and color of the parent container.
 *
 * The font size and color can be customised via the prop or through css.
 *
 * Example:
 * ```
 * const spinner = css`
 *   color: red;
 *   font-size: 1lh;
 * `
 *
 * <ComponentLoadingSpinner className={styles.spinner} />
 * ```
 */
export declare const ComponentLoadingSpinner: ({ color, className, size, ...otherProps }: ComponentLoadingSpinnerProps) => JSX.Element;
export {};
