import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import { useRef } from "react";

import {
    FadeWrapper,
    type FadeWrapperRef,
    type ResizeCallbackParams,
} from "../shared/fade-wrapper";
import { parsePxOrRemValue, useResolvedBreakpointToken } from "../theme";
import { Breakpoint } from "../theme/tokens";
import { Typography } from "../typography";
import { useEvent, useIsomorphicLayoutEffect } from "../util";
import * as styles from "./breadcrumb.styles";
import type { BreadcrumbProps } from "./types";

// @catalog
/**
 * Horizontal breadcrumb navigation trail.
 *
 * Use `Breadcrumb` to show the user's position within a page hierarchy and
 * allow navigation to parent pages. On tablet and below, the trail scrolls
 * horizontally with optional edge fade overlays to indicate clipped content.
 * @keywords hierarchy, navigation, path, trail, wayfinding
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
    const fadeWrapperRef = useRef<FadeWrapperRef>(null);

    const tabletBreakpoint = parsePxOrRemValue(
        useResolvedBreakpointToken(Breakpoint["lg-max"])
    );

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleResize = useEvent(
        ({ content, wrapper }: ResizeCallbackParams) => {
            if (
                content &&
                wrapper &&
                links &&
                links.length > 1 &&
                window.innerWidth <= tabletBreakpoint
            ) {
                content.scrollLeft =
                    content.scrollWidth - wrapper.offsetWidth;
            }
        }
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useIsomorphicLayoutEffect(() => {
        fadeWrapperRef.current?.resize();
    }, [tabletBreakpoint]);

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

    return (
        <FadeWrapper
            ref={fadeWrapperRef}
            id={id || "breadcrumb"}
            className={clsx(styles.wrapper, className)}
            fadeColor={fadeColor}
            fadePosition={fadePosition}
            onResize={handleResize}
            {...otherProps}
        >
            <nav aria-label="Breadcrumb">
                <ul className={styles.content}>{renderLinks()}</ul>
            </nav>
        </FadeWrapper>
    );
};
