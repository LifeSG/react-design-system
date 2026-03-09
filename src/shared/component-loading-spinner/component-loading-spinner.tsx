import { clsx } from "clsx";
import { useRef } from "react";
import { useApplyStyle } from "../../theme/utils";
import * as styles from "./component-loading-spinner.style";

/**
 * This component is mainly used within components and is not to be confused
 * with the main loading spinner in animations/loading-spinner
 *
 * By default it inherits the font size and color of the parent container.
 *
 * The color can be customised via the `color` prop or through the CSS
 * `color` property on the parent container.
 */
export interface ComponentLoadingSpinnerProps {
    className?: string | undefined;
    /** Measurement in px */
    size?: number | undefined;
    /** rgb/hex value or Color token */
    color?: string | undefined;
}

export const ComponentLoadingSpinner = ({
    color,
    className,
    size,
}: ComponentLoadingSpinnerProps): JSX.Element => {
    const outerRingRef = useRef<HTMLDivElement>(null);

    useApplyStyle(outerRingRef, {
        [styles.tokens.outerRing.size]: size != null ? `${size}px` : null,
        [styles.tokens.outerRing.color]: color ?? null,
    });

    return (
        <div
            ref={outerRingRef}
            className={clsx(styles.outerRing, className)}
            data-testid={"component-loading-spinner"}
        >
            <div id="inner1" className={styles.innerRing} />
            <div
                id="inner2"
                className={clsx(styles.innerRing, styles.innerRing2)}
            />
            <div
                id="inner3"
                className={clsx(styles.innerRing, styles.innerRing3)}
            />
            <div
                id="inner4"
                className={clsx(styles.innerRing, styles.innerRing4)}
            />
        </div>
    );
};
