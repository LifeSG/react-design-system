import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { useRef } from "react";

import { useApplyStyle } from "../../theme/utils";
import * as styles from "./component-loading-spinner.styles";

/**
 * This component is mainly used within components and is not to be confused
 * with the main loading spinner in animations/loading-spinner
 *
 * By default it inherits the font size and color of the parent container.
 */
type BaseProps = Omit<HTMLAttributes<HTMLDivElement>, "color">;

export interface ComponentLoadingSpinnerProps extends BaseProps {
    /** Measurement in px */
    size?: number | undefined;
    /** rgb/hex value or Color token */
    color?: string | undefined;
}

export const ComponentLoadingSpinner = ({
    color,
    className,
    size,
    ...otherProps
}: ComponentLoadingSpinnerProps): JSX.Element => {
    const spinnerRef = useRef<HTMLDivElement>(null);
    useApplyStyle(spinnerRef, {
        [styles.tokens.rootSize]: size ? `${size}px` : undefined,
        [styles.tokens.rootColour]: color,
    });

    return (
        <div
            ref={spinnerRef}
            className={clsx(styles.outerRing, className)}
            {...otherProps}
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
