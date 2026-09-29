import { useContext, useRef } from "react";
import { useEvent, useIsomorphicLayoutEffect } from "../util";
import {
    Caret,
    Content,
    CurrentLabel,
    Item,
    PreviousLink,
    Slash,
    Wrapper,
} from "./breadcrumb.style";
import { BreadcrumbProps } from "./types";
import { ThemeContext } from "styled-components";
import { Breakpoint } from "../theme";
import { FadeWrapperRef } from "../shared/fade-wrapper";

export const Breadcrumb = ({
    links,
    fadeColor,
    fadePosition = "both",
    itemStyle,
    id,
    separatorStyle = "chevron",
    ...otherProps
}: BreadcrumbProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const fadeWrapperRef = useRef<FadeWrapperRef>(null);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const theme = useContext(ThemeContext);
    const tabletBreakpoint = Breakpoint["lg-max"]({ theme });

    const handleResize = useEvent(() => {
        if (
            links &&
            links.length > 1 &&
            window.innerWidth <= tabletBreakpoint
        ) {
            fadeWrapperRef.current?.scrollToEnd();
        }
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useIsomorphicLayoutEffect(() => {
        handleResize();
    }, [handleResize, tabletBreakpoint]);

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
                    <CurrentLabel weight="semibold" forwardedAs="span">
                        {link.children}
                    </CurrentLabel>
                );
            } else {
                element = (
                    <PreviousLink
                        {...link}
                        weight="semibold"
                        underlineStyle="none"
                    />
                );
            }

            return (
                <Item
                    key={index}
                    $styleProps={itemStyle}
                    {...(index === links.length - 1 && {
                        "aria-current": "page",
                    })}
                >
                    {element}
                    {index < links.length - 1 &&
                        (separatorStyle === "chevron" ? (
                            <Caret aria-hidden />
                        ) : (
                            <Slash inline aria-hidden>
                                /
                            </Slash>
                        ))}
                </Item>
            );
        });
    };

    return (
        <Wrapper
            ref={fadeWrapperRef}
            id={id || "breadcrumb"}
            fadeColor={fadeColor}
            fadePosition={fadePosition}
            onResize={handleResize}
            {...otherProps}
        >
            <nav aria-label="Breadcrumb">
                <Content>{renderLinks()}</Content>
            </nav>
        </Wrapper>
    );
};
