import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import {
    parsePxOrRemValue,
    useApplyStyle,
    useResolvedBreakpointToken,
} from "../theme";
import { Breakpoint } from "../theme/tokens";
import { Typography } from "../typography";
import { useEvent, useEventListener, useIsomorphicLayoutEffect } from "../util";
import * as styles from "./breadcrumb.styles";
import type { BreadcrumbProps, FadeColorSet } from "./types";

/**
 * Horizontal breadcrumb navigation trail.
 *
 * Links are separated by a configurable separator. The last item receives
 * `aria-current="page"` and renders as a non-clickable label. Items without
 * an `href` also render as non-clickable labels. On tablet and below the trail
 * scrolls horizontally, with optional fade overlays at either edge to indicate
 * hidden content.
 */
export const Breadcrumb = ({
    links,
    fadeColor,
    fadePosition = "both",
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

    const tabletBreakpoint = parsePxOrRemValue(
        useResolvedBreakpointToken(Breakpoint["lg-max"])
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
    } else if (fadeColor) {
        fadeColorSet = fadeColor as FadeColorSet;
    } else {
        fadeColorSet = {
            left: undefined,
            right: undefined,
        };
    }

    // =============================================================================
    // CSS VARIABLES
    // =============================================================================
    useApplyStyle(fadeLeftRef, {
        [styles.tokens.fade.backgroundColor]: fadeColorSet?.left?.join(", "),
    });

    useApplyStyle(fadeRightRef, {
        [styles.tokens.fade.backgroundColor]: fadeColorSet?.right?.join(", "),
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
    }, [onResize, handleShowFadeToggle, tabletBreakpoint]);

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
                        as="span"
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
                        className={clsx(styles.fade, styles.fadeLeft)}
                    />
                )}
                {showFadeRight && shouldShowFadeRight && (
                    <div
                        ref={fadeRightRef}
                        className={clsx(styles.fade, styles.fadeRight)}
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
