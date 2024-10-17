import React from "react";
import {
    InnerRing1,
    InnerRing2,
    InnerRing3,
    InnerRing4,
    OuterRing,
} from "./component-loading-spinner.style";

/**
 * This component is mainly used within components and is not to be confused
 * with the main loading spinner in animations/loading-spinner
 *
 * By default it inherits the font size and color of the parent container.
 *
 * The color can be customised via the prop or through styled-components.
 *
 * Example:
 * ```
 * styled(ComponentLoadingSpinner)`
 *   color: red;
 * `
 * ```
 */
export interface ComponentLoadingSpinnerProps {
    className?: string | undefined;
    /** Measurement in px */
    size?: number | undefined;
    /** rgb/hex value or Color token */
    color?: string | ((props: any) => string) | undefined;
}

export const ComponentLoadingSpinner = ({
    color,
    className,
    size,
}: ComponentLoadingSpinnerProps): JSX.Element => {
    return (
        <OuterRing className={className} $size={size} $color={color}>
            <InnerRing1 id="inner1" />
            <InnerRing2 id="inner2" />
            <InnerRing3 id="inner3" />
            <InnerRing4 id="inner4" />
        </OuterRing>
    );
};
