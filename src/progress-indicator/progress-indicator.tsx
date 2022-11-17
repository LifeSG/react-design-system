import { useEffect, useRef, useState } from "react";
import { MediaWidths } from "../media";
import {
    Content,
    Fade,
    INDICATOR_BAR_FADE_WIDTH_MOBILE,
    INDICATOR_BAR_MARGIN_RIGHT_MOBILE,
    INDICATOR_BAR_WIDTH_MOBILE,
    Indicator,
    IndicatorBar,
    IndicatorTitle,
    Wrapper,
} from "./progress-indicator.style";
import { ProgressIndicatorProps } from "./types";
import kebabCase from "lodash/kebabCase";

export const ProgressIndicator = <T,>({
    steps,
    currentIndex,
    displayExtractor,
    fadeColor,
    fadePosition = "both",
}: ProgressIndicatorProps<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [showFade, setShowFade] = useState<boolean>(!!fadePosition);
    const [showFadeLeft, setShowFadeLeft] = useState<boolean>(
        fadePosition === "left" || fadePosition === "both"
    );
    const [showFadeRight, setShowFadeRight] = useState<boolean>(
        fadePosition === "right" || fadePosition === "both"
    );
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        handleProgressIndicatorScroll();
        window.addEventListener("resize", handleProgressIndicatorScroll);
        const content = contentRef.current;
        if (content) {
            content.addEventListener("scroll", handleProgressIndicatorScroll);
        }
        // cleanup
        return () => {
            window.removeEventListener("resize", handleProgressIndicatorScroll);

            if (content) {
                content.removeEventListener(
                    "scroll",
                    handleProgressIndicatorScroll
                );
            }
        };
    }, []);

    useEffect(() => {
        handleMobileProgressIndicatorScroll();
        window.addEventListener("resize", handleMobileProgressIndicatorScroll);

        return () => {
            window.removeEventListener(
                "resize",
                handleMobileProgressIndicatorScroll
            );
        };
    }, [currentIndex]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMobileProgressIndicatorScroll = () => {
        if (window.innerWidth > MediaWidths.mobileL) return;

        const content = contentRef.current;
        if (content) {
            const scrollLeftRem =
                (INDICATOR_BAR_WIDTH_MOBILE +
                    INDICATOR_BAR_MARGIN_RIGHT_MOBILE) *
                    currentIndex -
                INDICATOR_BAR_FADE_WIDTH_MOBILE;
            content.scrollLeft = 16 * scrollLeftRem; // convert to px
        }
    };
    const handleProgressIndicatorScroll = () => {
        if (showFade) {
            // Set fade if the media is smaller than or equal to mobile
            setShowFade(window.innerWidth < MediaWidths.mobileL);

            const content = contentRef.current;
            const wrapper = wrapperRef.current;
            if (content && wrapper) {
                if (content.scrollWidth > wrapper.offsetWidth) {
                    setShowFade(true);
                    setShowFadeLeft(content.scrollLeft >= 1);
                    setShowFadeRight(
                        content.scrollWidth - content.scrollLeft >
                            wrapper.offsetWidth
                    );
                } else {
                    setShowFade(false);
                }
            } else {
                setShowFade(false);
            }
        }
    };

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
            `${getAriaLabel(stepIndex, currentIndex)} ${
                stepIndex < currentIndex ? stepIndex : stepIndex - currentIndex
            }`
        );
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    if (!steps.length) return null;

    const renderSteps = () => {
        return steps.map((step: T, stepIndex: number) => {
            // previous and current index elements are highlighted
            const highlighted = stepIndex <= currentIndex;
            const fontWeight = stepIndex === currentIndex ? "bold" : "regular";

            return (
                <Indicator
                    key={stepIndex}
                    aria-label={getAriaLabel(stepIndex, currentIndex)}
                    id={getId(stepIndex, currentIndex)}
                >
                    <IndicatorBar highlighted={highlighted}></IndicatorBar>
                    <IndicatorTitle
                        highlighted={highlighted}
                        weight={fontWeight}
                    >
                        {getDisplayValue(step)}
                    </IndicatorTitle>
                </Indicator>
            );
        });
    };

    const renderFade = () => {
        return (
            <>
                {showFadeLeft && (
                    <Fade backgroundColor={fadeColor} position={"left"} />
                )}
                {showFadeRight && (
                    <Fade backgroundColor={fadeColor} position={"right"} />
                )}
            </>
        );
    };

    return (
        <Wrapper ref={wrapperRef}>
            <Content ref={contentRef}>{renderSteps()}</Content>
            {showFade && renderFade()}
        </Wrapper>
    );
};
