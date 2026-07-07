import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import throttle from "lodash/throttle";
import type React from "react";
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";

import { useApplyStyle } from "../../theme";
import { ClickableIcon } from "../clickable-icon";
import * as styles from "./fade-wrapper.styles";
import { getFadeBackgroundColorValue, getFadeColorSet } from "./helpers";
import type { FadeWrapperProps, FadeWrapperRef } from "./types";

const Component = (
    {
        children,
        className,
        fadeColor,
        fadePosition = "both",
        showIndicator = false,
        onResize,
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
    const fadeLeftRef = useRef<HTMLDivElement>(null);
    const fadeRightRef = useRef<HTMLDivElement>(null);

    const fadeColorSet = getFadeColorSet(fadeColor);

    useApplyStyle(fadeLeftRef, {
        [styles.tokens.backgroundColor]: getFadeBackgroundColorValue(
            fadeColorSet.left,
            showIndicator
        ),
    });
    useApplyStyle(fadeRightRef, {
        [styles.tokens.backgroundColor]: getFadeBackgroundColorValue(
            fadeColorSet.right,
            showIndicator
        ),
    });

    // To scroll left when wrapper resizes
    useResizeDetector({
        onResize: handleResize,
        targetRef: wrapperRef,
        refreshMode: "debounce",
        refreshRate: 50,
    });

    useImperativeHandle(ref, () => {
        return {
            resize() {
                handleResize();
            },
        };
    });

    // =========================================================================
    // EFFECTS
    // =========================================================================
    const handleScroll = useCallback(() => {
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
    }, []);

    const throttledScrollHandler = useMemo(() => {
        return throttle(handleScroll, 50);
    }, [handleScroll]);

    useEffect(() => {
        const content = contentRef.current;

        handleScroll();

        if (content) {
            content.addEventListener("scroll", throttledScrollHandler);
        }

        return () => {
            if (content) {
                content.removeEventListener("scroll", throttledScrollHandler);
            }

            throttledScrollHandler.cancel();
        };
    }, [handleScroll, throttledScrollHandler]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    function handleResize() {
        handleScroll();

        if (onResize) {
            onResize({
                content: contentRef.current!,
                wrapper: wrapperRef.current!,
            });
        }

        // TODO: Will move this out to Breadcrumb when it uses this component
        // if (content && wrapper && window.innerWidth <= MediaWidths.tablet) {
        //     content.scrollLeft = content.scrollWidth - wrapper.offsetWidth;
        // }
    }

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderFade = () => {
        return (
            <>
                {showFadeLeft && (
                    <div
                        ref={fadeLeftRef}
                        className={clsx(styles.fade, styles.fadeLeft)}
                        data-id="left-fade"
                    >
                        {showIndicator && (
                            <ClickableIcon
                                className={clsx(
                                    styles.fadeIndicatorButton,
                                    styles.indicatorLeft
                                )}
                                data-id="left-fade-indicator-button"
                            >
                                <ChevronLeftIcon />
                            </ClickableIcon>
                        )}
                    </div>
                )}
                {showFadeRight && (
                    <div
                        ref={fadeRightRef}
                        className={clsx(styles.fade, styles.fadeRight)}
                        data-id="right-fade"
                    >
                        {showIndicator && (
                            <ClickableIcon
                                className={clsx(
                                    styles.fadeIndicatorButton,
                                    styles.indicatorRight
                                )}
                                data-id="right-fade-indicator-button"
                            >
                                <ChevronRightIcon />
                            </ClickableIcon>
                        )}
                    </div>
                )}
            </>
        );
    };

    return (
        <div
            ref={wrapperRef}
            className={clsx(styles.wrapper, className)}
            {...otherProps}
        >
            <div ref={contentRef} className={styles.content}>
                {children}
            </div>
            {renderFade()}
        </div>
    );
};

export const FadeWrapper = forwardRef(Component);
