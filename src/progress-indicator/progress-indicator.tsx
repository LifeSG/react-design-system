import { MediaWidths } from "../media";
import {
    Content,
    Indicator,
    IndicatorBar,
    IndicatorTitleDesktop,
    IndicatorTitleMobile,
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

    const renderStepTitleDesktop = () => {
        return steps.map((step: T, stepIndex: number) => {
            const highlighted = stepIndex <= currentIndex;
            const fontWeight = stepIndex === currentIndex ? "bold" : "regular";

            return (
                <Indicator
                    key={stepIndex}
                    aria-label={getAriaLabel(stepIndex, currentIndex)}
                    id={`${getId(stepIndex, currentIndex)}-title`}
                >
                    <IndicatorTitleDesktop
                        highlighted={highlighted}
                        weight={fontWeight}
                    >
                        {getDisplayValue(step)}
                    </IndicatorTitleDesktop>
                </Indicator>
            );
        });
    };

    const renderStepTitleMobile = () => {
        return (
            <Indicator
                key={currentIndex}
                aria-label={getAriaLabel(currentIndex, currentIndex)}
                id={getId(currentIndex, currentIndex)}
            >
                <IndicatorTitleMobile weight={"semibold"}>
                    Step {currentIndex + 1} of {steps.length}
                </IndicatorTitleMobile>
                <IndicatorTitleMobile weight={"regular"}>
                    {getDisplayValue(steps[currentIndex])}
                </IndicatorTitleMobile>
            </Indicator>
        );
    };

    return (
        <Wrapper {...otherProps}>
            <Content>{renderBars()}</Content>
            <Content>
                {isMobile ? renderStepTitleMobile() : renderStepTitleDesktop()}
            </Content>
        </Wrapper>
    );
};
