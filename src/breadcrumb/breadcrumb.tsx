import React, { useCallback, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { MediaWidths } from "../spec/media-spec";
import {
    Caret,
    Content,
    CurrentLabel,
    Fade,
    Item,
    PreviousLink,
    Wrapper,
} from "./breadcrumb.style";
import { BreadcrumbProps } from "./types";

export const Breadcrumb = ({
    links,
    fadeColor,
    fadePosition = "both",
    itemStyle,
    id,
    ...otherProps
}: BreadcrumbProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [showFade, setShowFade] = useState<boolean>(!!fadePosition);
    const [showFadeLeft, setShowFadeLeft] = useState<boolean>(
        fadePosition === "left" || fadePosition === "both"
    );
    const [showFadeRight, setShowFadeRight] = useState<boolean>(
        fadePosition === "right" || fadePosition === "both"
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLUListElement>(null);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const onResize = useCallback(() => {
        const content = contentRef.current;
        const wrapper = wrapperRef.current;

        if (
            content &&
            wrapper &&
            links &&
            links.length > 1 &&
            window.innerWidth <= MediaWidths.tablet
        ) {
            content.scrollLeft = content.scrollWidth - wrapper.offsetWidth;
        }
    }, [links.length]);

    // To scroll left when wrapper resizes
    useResizeDetector({
        onResize,
        targetRef: wrapperRef,
        refreshMode: "debounce",
        refreshRate: 50,
    });

    const handleShowFadeToggle = () => {
        if (showFade) {
            // Set fade if the media is smaller than or equal to tablet
            setShowFade(window.innerWidth < MediaWidths.tablet);

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
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const content = contentRef.current;

        handleShowFadeToggle();

        window.addEventListener("resize", handleShowFadeToggle);
        if (content) {
            content.addEventListener("scroll", handleShowFadeToggle);
        }

        return () => {
            window.removeEventListener("resize", handleShowFadeToggle);
            if (content) {
                content.removeEventListener("scroll", handleShowFadeToggle);
            }
        };
    }, []);

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
                    <CurrentLabel weight="semibold">
                        {link.children}
                    </CurrentLabel>
                );
            } else {
                element = <PreviousLink {...link} weight="semibold" />;
            }

            return (
                <Item key={index} $styleProps={itemStyle}>
                    {element}
                    {index < links.length - 1 && <Caret type="chevron-right" />}
                </Item>
            );
        });
    };

    const renderFade = () => {
        return (
            <>
                {showFadeLeft && (
                    <Fade $backgroundColor={fadeColor} $position="left" />
                )}
                {showFadeRight && (
                    <Fade $backgroundColor={fadeColor} $position="right" />
                )}
            </>
        );
    };

    return (
        <Wrapper ref={wrapperRef} id={id || "breadcrumb"} {...otherProps}>
            <nav>
                <Content ref={contentRef}>{renderLinks()}</Content>
            </nav>
            {showFade && renderFade()}
        </Wrapper>
    );
};
