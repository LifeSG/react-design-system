import kebabCase from "lodash/kebabCase";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { VisuallyHidden } from "../shared/accessibility";
import { Breakpoint } from "../theme";
import {
    Content,
    Indicator,
    IndicatorBar,
    IndicatorTitleDesktop,
    IndicatorTitleTablet,
    Wrapper,
} from "./progress-indicator.style";
import { ProgressIndicatorProps } from "./types";

export const ProgressIndicator = <T,>({
    steps,
    currentIndex,
    displayExtractor,
    fadeColor: _fadeColor,
    fadePosition: _fadePosition,
    ...otherProps
}: ProgressIndicatorProps<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const theme = useContext(ThemeContext);
    const tabletBreakpoint = Breakpoint["lg-max"]({ theme });
    const isTablet = useMediaQuery({
        maxWidth: tabletBreakpoint,
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
                <Indicator key={stepIndex} id={getId(stepIndex, currentIndex)}>
                    <IndicatorBar highlighted={highlighted}></IndicatorBar>
                </Indicator>
            );
        });
    };

    const renderStepTitleDesktop = () => {
        return steps.map((step: T, stepIndex: number) => {
            const highlighted = stepIndex <= currentIndex;
            const current = stepIndex === currentIndex;
            const fontWeight = current ? "bold" : "regular";

            return (
                <Indicator
                    key={stepIndex}
                    id={`${getId(stepIndex, currentIndex)}-title`}
                >
                    <IndicatorTitleDesktop
                        highlighted={highlighted}
                        weight={fontWeight}
                        aria-current={current}
                    >
                        {getDisplayValue(step)}
                        <VisuallyHidden>
                            {getStepAriaLabel(stepIndex, currentIndex)}
                        </VisuallyHidden>
                    </IndicatorTitleDesktop>
                </Indicator>
            );
        });
    };

    const renderStepTitleTablet = () => {
        return (
            <Indicator
                key={currentIndex}
                id={getId(currentIndex, currentIndex)}
            >
                <IndicatorTitleTablet
                    weight={"semibold"}
                    id={`${getId(currentIndex, currentIndex)}-counter`}
                >
                    Step {currentIndex + 1} of {steps.length}
                </IndicatorTitleTablet>
                <IndicatorTitleTablet
                    weight={"regular"}
                    id={`${getId(currentIndex, currentIndex)}-title`}
                >
                    {getDisplayValue(steps[currentIndex])}
                </IndicatorTitleTablet>
            </Indicator>
        );
    };

    return (
        <Wrapper {...otherProps}>
            <Content>{renderBars()}</Content>
            <Content>
                {isTablet ? renderStepTitleTablet() : renderStepTitleDesktop()}
            </Content>
        </Wrapper>
    );
};
