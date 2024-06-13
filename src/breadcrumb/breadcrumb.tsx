import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { MediaWidths } from "../spec/media-spec";
import { useEvent, useEventListener, useIsomorphicLayoutEffect } from "../util";
import {
    Caret,
    Content,
    CurrentLabel,
    Fade,
    Item,
    PreviousLink,
    Wrapper,
} from "./breadcrumb.style";
import { BreadcrumbProps, FadeColorSet } from "./types";

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
    const [showFade, setShowFade] = useState<boolean>(false);
    const [showFadeLeft, setShowFadeLeft] = useState<boolean>(false);
    const [showFadeRight, setShowFadeRight] = useState<boolean>(false);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLUListElement>(null);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const onResize = useEvent(() => {
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
    });

    const handleShowFadeToggle = useEvent(() => {
        const nextShowFade = window.innerWidth <= MediaWidths.tablet;
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
    }, []);

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
                    {index < links.length - 1 && <Caret />}
                </Item>
            );
        });
    };

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
                    />
                )}
                {showFadeRight && (
                    <Fade
                        $backgroundColor={fadeColorSet.right}
                        $position="right"
                    />
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
