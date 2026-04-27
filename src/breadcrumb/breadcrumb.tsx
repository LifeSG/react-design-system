import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { parsePxOrRemValue, useApplyStyle, useDesignToken } from "../theme";
import { Breakpoint } from "../theme/tokens";
import { Typography } from "../typography";
import { useEvent, useEventListener, useIsomorphicLayoutEffect } from "../util";
import * as styles from "./breadcrumb.styles";
import { tokens } from "./breadcrumb.styles";
import type { BreadcrumbProps, FadeColorSet } from "./types";

export const Breadcrumb = ({
    links,
    fadeColor,
    fadePosition = "both",
    itemStyle,
    id,
    separatorStyle = "chevron",
    className,
    ...otherProps
}: BreadcrumbProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [showFade, setShowFade] = useState<boolean>(false);
    const [showFadeLeft, setShowFadeLeft] = useState<boolean>(false);
    const [showFadeRight, setShowFadeRight] = useState<boolean>(false);
    const shouldShowFadeLeft =
        fadePosition === "left" || fadePosition === "both";
    const shouldShowFadeRight =
        fadePosition === "right" || fadePosition === "both";

    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLUListElement>(null);
    const fadeLeftRef = useRef<HTMLDivElement>(null);
    const fadeRightRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const tabletBreakpointToken = useDesignToken(Breakpoint["lg-max"]);
    const tabletBreakpoint = parsePxOrRemValue(
        tabletBreakpointToken || "1200px"
    );

    // =============================================================================
    // FADE COLOR CALCULATION
    // =============================================================================
    let fadeColorSet: FadeColorSet;

    if (Array.isArray(fadeColor) && fadeColor.length > 0) {
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

    // =============================================================================
    // CSS VARIABLES
    // =============================================================================
    useApplyStyle(fadeLeftRef, {
        [tokens.fade.backgroundColor]: fadeColorSet?.left?.[0],
    });

    useApplyStyle(fadeRightRef, {
        [tokens.fade.backgroundColor]: fadeColorSet?.right?.[0],
    });

    useApplyStyle(contentRef, {
        [tokens.item.customStyles]: itemStyle,
    });

    const onResize = useEvent(() => {
        const content = contentRef.current;
        const wrapper = wrapperRef.current;

        if (
            content &&
            wrapper &&
            links &&
            links.length > 1 &&
            window.innerWidth <= tabletBreakpoint
        ) {
            content.scrollLeft = content.scrollWidth - wrapper.offsetWidth;
        }
    });

    const handleShowFadeToggle = useEvent(() => {
        const nextShowFade = window.innerWidth <= tabletBreakpoint;
        setShowFade(nextShowFade);

        const content = contentRef.current;
        const wrapper = wrapperRef.current;
        if (content && wrapper && nextShowFade) {
            if (content.scrollWidth > wrapper.offsetWidth) {
                // set 1px margin of error to handle sub-pixel differences
                setShowFadeLeft(content.scrollLeft >= 1);
                setShowFadeRight(
                    content.scrollWidth - content.scrollLeft - 1 >
                        wrapper.offsetWidth
                );
                return;
            }
        }

        setShowFadeLeft(false);
        setShowFadeRight(false);
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEventListener("resize", handleShowFadeToggle);
    useEventListener("scroll", handleShowFadeToggle, contentRef.current);

    useIsomorphicLayoutEffect(() => {
        onResize();
        handleShowFadeToggle();
    }, [onResize, handleShowFadeToggle]);

    // To scroll left when wrapper resizes
    useResizeDetector({
        onResize,
        targetRef: wrapperRef,
        refreshMode: "debounce",
        refreshRate: 50,
        skipOnMount: true,
    });

    // =========================================================================
    // RENDER
    // =========================================================================
    if (!links) return null;

    const renderLinks = () => {
        return links.map((link, index) => {
            let element: JSX.Element;
            if (!link.children) {
                return null;
            }

            if (index === links.length - 1 || !link.href) {
                element = (
                    <Typography.BodyMD
                        weight="semibold"
                        forwardedAs="span"
                        className={styles.currentLabel}
                    >
                        {link.children}
                    </Typography.BodyMD>
                );
            } else {
                element = (
                    <Typography.LinkMD
                        {...link}
                        weight="semibold"
                        underlineStyle="none"
                        className={styles.previousLink}
                    />
                );
            }

            return (
                <li
                    key={index}
                    className={styles.item}
                    {...(index === links.length - 1 && {
                        "aria-current": "page",
                    })}
                >
                    {element}
                    {index < links.length - 1 &&
                        (separatorStyle === "chevron" ? (
                            <ChevronRightIcon
                                aria-hidden
                                className={styles.caret}
                            />
                        ) : (
                            <Typography.BodyMD
                                inline
                                aria-hidden
                                className={styles.slash}
                            >
                                /
                            </Typography.BodyMD>
                        ))}
                </li>
            );
        });
    };

    const renderFade = () => {
        return (
            <>
                {showFadeLeft && shouldShowFadeLeft && (
                    <div
                        ref={fadeLeftRef}
                        className={clsx(styles.fade, "fadeLeft")}
                    />
                )}
                {showFadeRight && shouldShowFadeRight && (
                    <div
                        ref={fadeRightRef}
                        className={clsx(styles.fade, "fadeRight")}
                    />
                )}
            </>
        );
    };

    return (
        <div
            ref={wrapperRef}
            id={id || "breadcrumb"}
            className={clsx(styles.wrapper, className)}
            {...otherProps}
        >
            <nav aria-label="Breadcrumb">
                <ul ref={contentRef} className={styles.content}>
                    {renderLinks()}
                </ul>
            </nav>
            {showFade && renderFade()}
        </div>
    );
};
