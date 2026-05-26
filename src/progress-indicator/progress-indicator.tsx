import clsx from "clsx";
import kebabCase from "lodash/kebabCase";

import { VisuallyHidden } from "../shared/accessibility";
import {
    Breakpoint,
    useDesignToken,
    useSafeMaxWidthMediaQuery,
} from "../theme";
import { Typography } from "../typography";
import * as styles from "./progress-indicator.styles";
import type { ProgressIndicatorProps } from "./types";

export const ProgressIndicator = <T,>({
    steps,
    currentIndex,
    displayExtractor,
    className,
    ...otherProps
}: ProgressIndicatorProps<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const tabletBreakpointToken = useDesignToken(Breakpoint["lg-max"]);
    const isTablet = useSafeMaxWidthMediaQuery(tabletBreakpointToken);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getDisplayValue = (item: T): string => {
        if (displayExtractor) {
            return displayExtractor(item);
        }
        return item?.toString() ?? "";
    };

    const getStepAriaLabel = (stepIndex: number, currentIndex: number) => {
        if (stepIndex < currentIndex) {
            return "Completed step";
        } else if (stepIndex === currentIndex) {
            return "Current step";
        } else {
            return "Upcoming step";
        }
    };

    const getId = (stepIndex: number, currentIndex: number) => {
        return kebabCase(
            `${getStepAriaLabel(stepIndex, currentIndex)} ${stepIndex}`
        );
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    if (!steps.length) return null;

    const renderBars = () => {
        return steps.map((step: T, stepIndex: number) => {
            // previous and current index elements are highlighted
            const highlighted = stepIndex <= currentIndex;

            return (
                <div
                    key={stepIndex}
                    id={getId(stepIndex, currentIndex)}
                    className={styles.indicator}
                >
                    <div
                        className={clsx(
                            styles.indicatorBar,
                            highlighted && styles.indicatorBarHighlighted
                        )}
                    />
                </div>
            );
        });
    };

    const renderStepTitleDesktop = () => {
        return steps.map((step: T, stepIndex: number) => {
            const highlighted = stepIndex <= currentIndex;
            const current = stepIndex === currentIndex;
            const fontWeight = current ? "bold" : "regular";

            return (
                <div
                    key={stepIndex}
                    id={`${getId(stepIndex, currentIndex)}-title`}
                    className={styles.indicator}
                >
                    <Typography.BodyMD
                        className={clsx(
                            styles.indicatorTitleDesktop,
                            highlighted &&
                                styles.indicatorTitleDesktopHighlighted
                        )}
                        weight={fontWeight}
                        aria-current={current}
                    >
                        {getDisplayValue(step)}
                        <VisuallyHidden>
                            {getStepAriaLabel(stepIndex, currentIndex)}
                        </VisuallyHidden>
                    </Typography.BodyMD>
                </div>
            );
        });
    };

    const renderStepTitleTablet = () => {
        return (
            <div
                key={currentIndex}
                id={getId(currentIndex, currentIndex)}
                className={styles.indicator}
            >
                <Typography.BodyMD
                    className={styles.indicatorTitleTablet}
                    weight={"semibold"}
                    id={`${getId(currentIndex, currentIndex)}-counter`}
                >
                    Step {currentIndex + 1} of {steps.length}
                </Typography.BodyMD>
                <Typography.BodyMD
                    className={styles.indicatorTitleTablet}
                    weight={"regular"}
                    id={`${getId(currentIndex, currentIndex)}-title`}
                >
                    {getDisplayValue(steps[currentIndex])}
                </Typography.BodyMD>
            </div>
        );
    };

    return (
        <div className={clsx(styles.wrapper, className)} {...otherProps}>
            <div className={styles.content}>{renderBars()}</div>
            <div className={styles.content}>
                {isTablet ? renderStepTitleTablet() : renderStepTitleDesktop()}
            </div>
        </div>
    );
};
