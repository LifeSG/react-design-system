import { ArrowRightIcon } from "@lifesg/react-icons";
import clsx from "clsx";

import * as styles from "./range-input-inner-container.styles";
import type { RangeInputInnerContainerProps } from "./types";

/**
 * This component allows for input fields to be added within the containers
 * and renders the slider based on the focused element.
 */
export const RangeInputInnerContainer = ({
    children,
    currentActive,
    error,
    className,
    wrap,
}: RangeInputInnerContainerProps) => {
    // =========================================================================
    // CONST, STATE
    // =========================================================================
    const [elem1, elem2] = children;

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <div
            className={clsx(styles.wrapper, className)}
            data-wrap={wrap ? "true" : undefined}
        >
            <div
                className={styles.elementContainer}
                data-id="range-container-elem1-container"
            >
                {elem1}
            </div>
            <ArrowRightIcon aria-hidden="true" className={styles.arrowRight} />
            {wrap && <div className={styles.breakElement} />}
            <div
                className={styles.elementContainer}
                data-id="range-container-elem2-container"
            >
                {elem2}
            </div>
            <div
                className={styles.indicator}
                data-id="range-container-indicator"
                data-error={error ? "true" : undefined}
                data-position={currentActive}
                data-wrap={wrap ? "true" : undefined}
            />
        </div>
    );
};
