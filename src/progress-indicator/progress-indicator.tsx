import { MediaWidths } from "../media";
import {
    Content,
    Indicator,
    IndicatorBar,
    IndicatorTitle,
    Wrapper,
} from "./progress-indicator.style";
import { ProgressIndicatorProps } from "./types";
import kebabCase from "lodash/kebabCase";
import { useMediaQuery } from "react-responsive";

export const ProgressIndicator = <T,>({
    steps,
    currentIndex,
    displayExtractor,
    fadeColor,
    fadePosition = "both",
    ...otherProps
}: ProgressIndicatorProps<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.tablet,
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getDisplayValue = (item: T) => {
        return displayExtractor ? displayExtractor(item) : item.toString();
    };

    const getAriaLabel = (stepIndex: number, currentIndex: number) => {
        if (stepIndex < currentIndex) {
            return "Completed step";
        } else if (stepIndex === currentIndex) {
            return "Current step";
        } else {
            return "Uncompleted step";
        }
    };

    const getId = (stepIndex: number, currentIndex: number) => {
        return kebabCase(
            `${getAriaLabel(stepIndex, currentIndex)} ${stepIndex}`
        );
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    if (!steps.length) return null;

    const renderStepTitle = (stepIndex: number) => {
        const highlighted = stepIndex <= currentIndex;
        const fontWeight = stepIndex === currentIndex ? "bold" : "regular";

        return (
            <Indicator
                key={stepIndex}
                aria-label={getAriaLabel(stepIndex, currentIndex)}
                id={getId(stepIndex, currentIndex)}
            >
                {isMobile && (
                    <IndicatorTitle
                        highlighted={highlighted}
                        weight={"semibold"}
                        isMobile={isMobile}
                    >
                        Step {stepIndex + 1} of {steps.length}
                    </IndicatorTitle>
                )}
                <IndicatorTitle
                    highlighted={isMobile ? false : highlighted}
                    weight={isMobile ? "regular" : fontWeight}
                    isMobile={isMobile}
                >
                    {getDisplayValue(steps[stepIndex])}
                </IndicatorTitle>
            </Indicator>
        );
    };

    const renderBars = () => {
        return steps.map((step: T, stepIndex: number) => {
            // previous and current index elements are highlighted
            const highlighted = stepIndex <= currentIndex;

            return (
                <Indicator
                    key={stepIndex}
                    aria-label={getAriaLabel(stepIndex, currentIndex)}
                    id={getId(stepIndex, currentIndex)}
                >
                    <IndicatorBar highlighted={highlighted}></IndicatorBar>
                </Indicator>
            );
        });
    };

    const renderSteps = () => {
        if (!isMobile) {
            return steps.map((step: T, stepIndex: number) =>
                renderStepTitle(stepIndex)
            );
        }

        return renderStepTitle(currentIndex);
    };

    return (
        <Wrapper {...otherProps}>
            <Content>{renderBars()}</Content>
            <Content>{renderSteps()}</Content>
        </Wrapper>
    );
};
