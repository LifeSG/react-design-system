import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import throttle from "lodash/throttle";
import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";
import { MediaWidths } from "../../media";
import {
    Content,
    Fade,
    FadeIndicatorButton,
    Wrapper,
} from "./fade-wrapper.style";
import { FadeColorSet, FadeWrapperProps, FadeWrapperRef } from "./types";

const Component = (
    {
        children,
        fadeColor,
        fadePosition = "both",
        showIndicator = false,
        ...otherProps
    }: FadeWrapperProps,
    ref: React.Ref<FadeWrapperRef>
) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [showFadeLeft, setShowFadeLeft] = useState<boolean>(
        fadePosition === "left" || fadePosition === "both"
    );
    const [showFadeRight, setShowFadeRight] = useState<boolean>(
        fadePosition === "right" || fadePosition === "both"
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // To scroll left when wrapper resizes
    useResizeDetector({
        onResize,
        targetRef: wrapperRef,
        refreshMode: "debounce",
        refreshRate: 50,
    });

    useImperativeHandle(ref, () => {
        return {
            resize() {
                onResize();
            },
        };
    });

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        const content = contentRef.current;

        handleScroll();

        window.addEventListener("resize", handleScroll);
        if (content) {
            content.addEventListener("scroll", throttle(handleScroll, 50));
        }

        return () => {
            window.removeEventListener("resize", handleScroll);
            if (content) {
                content.removeEventListener(
                    "scroll",
                    throttle(handleScroll, 50)
                );
            }
        };
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    const handleScroll = () => {
        const wrapper = wrapperRef.current;
        const content = contentRef.current;

        if (wrapper && content && content.scrollWidth > wrapper.offsetWidth) {
            /**
             * NOTE: Used Math.round because we observe a 0.5 difference
             * even when we scroll to the end. This causes the fade right
             * to not be removed
             */
            setShowFadeRight(
                Math.round(content.scrollLeft) <
                    content.scrollWidth - content.offsetWidth
            );
            setShowFadeLeft(content.scrollLeft >= 1);
        } else {
            setShowFadeRight(false);
            setShowFadeLeft(false);
        }
    };

    function onResize() {
        const content = contentRef.current;
        const wrapper = wrapperRef.current;
        if (content && wrapper && window.innerWidth <= MediaWidths.tablet) {
            content.scrollLeft = content.scrollWidth - wrapper.offsetWidth;
        }
    }

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderFade = () => {
        let fadeColorSet: FadeColorSet;

        if (Array.isArray(fadeColor) && fadeColor.length > 0) {
            // Single array, apply same color
            fadeColorSet = {
                left: fadeColor,
                right: fadeColor,
            };
        } else if (!fadeColor) {
            fadeColorSet = {
                left: undefined,
                right: undefined,
            };
        } else {
            fadeColorSet = fadeColor as FadeColorSet;
        }

        return (
            <>
                {showFadeLeft && (
                    <Fade
                        $backgroundColor={fadeColorSet.left}
                        $position="left"
                        $showIndicator={showIndicator}
                        data-id="left-fade"
                    >
                        {showIndicator && (
                            <FadeIndicatorButton
                                $position="left"
                                data-id="left-fade-indicator-button"
                            >
                                <ChevronLeftIcon />
                            </FadeIndicatorButton>
                        )}
                    </Fade>
                )}
                {showFadeRight && (
                    <Fade
                        $backgroundColor={fadeColorSet.right}
                        $position="right"
                        $showIndicator={showIndicator}
                        data-id="right-fade"
                    >
                        {showIndicator && (
                            <FadeIndicatorButton
                                $position="right"
                                data-id="right-fade-indicator-button"
                            >
                                <ChevronRightIcon />
                            </FadeIndicatorButton>
                        )}
                    </Fade>
                )}
            </>
        );
    };

    return (
        <Wrapper ref={wrapperRef} {...otherProps}>
            <Content ref={contentRef}>{children}</Content>
            {renderFade()}
        </Wrapper>
    );
};

export const FadeWrapper = forwardRef(Component);
