import { useContext, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { ResizeCallbackParams } from "../shared/fade-wrapper";
import { Breakpoint } from "../theme";
import { TabContext } from "./tab-context";
import {
    BoldLabel,
    Chain,
    ChainItem,
    ChainLink,
    CustomFadeWrapper,
    Label,
} from "./tab-link-chain.style";
import { TabProps } from "./types";

interface Props
    extends Pick<
        TabProps,
        "fullWidthIndicatorLine" | "onTabClick" | "data-testid" | "fadeColor"
    > {
    controlledMode?: boolean | undefined;
}

export const TabLinkChain = ({
    controlledMode,
    "data-testid": testId,
    onTabClick,
    fullWidthIndicatorLine,
    fadeColor,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { setCurrentActiveIndex, currentActiveIndex, tabLinks } =
        useContext(TabContext);

    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["md-max"]({ theme });

    const isMobile = useMediaQuery({
        maxWidth: mobileBreakpoint,
    });

    const tabletBreakpoint = Breakpoint["lg-max"]({ theme });

    const activeLinkRef = useRef<HTMLLIElement>(null);
    const chainLinkRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChainLinkClick =
        (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            if (!controlledMode) {
                setCurrentActiveIndex(index);
            }

            if (onTabClick) {
                onTabClick(tabLinks[index].title, index);
            }
        };

    const handleResize = ({ content, wrapper }: ResizeCallbackParams) => {
        if (
            content &&
            wrapper &&
            window.innerWidth <= tabletBreakpoint &&
            activeLinkRef.current
        ) {
            content.scrollLeft =
                activeLinkRef.current.getBoundingClientRect().left;
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        let nextIndex = index;
        if (e.key === "ArrowRight") {
            nextIndex = (index + 1) % tabLinks.length;
            e.preventDefault();
        } else if (e.key === "ArrowLeft") {
            nextIndex = (index - 1 + tabLinks.length) % tabLinks.length;
            e.preventDefault();
        }

        chainLinkRefs.current[nextIndex]?.focus();
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const truncateText = (value: string) => {
        if (isMobile) {
            return value.length > 20 ? `${value.substring(0, 20)}...` : value;
        }

        return value;
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <CustomFadeWrapper
            onResize={handleResize}
            data-testid={testId}
            fadeColor={fadeColor}
        >
            <Chain
                role="tablist"
                $fullWidthIndicatorLine={fullWidthIndicatorLine}
            >
                {tabLinks.map((linkChain, index) => {
                    const isActive = currentActiveIndex === index;

                    return (
                        <ChainItem
                            key={index}
                            role="none"
                            $active={isActive}
                            ref={isActive ? activeLinkRef : null}
                            $width={linkChain.width}
                        >
                            <ChainLink
                                role="tab"
                                type="button"
                                aria-selected={isActive}
                                onClick={handleChainLinkClick(index)}
                                data-testid={`${testId}-link-${index}`}
                                tabIndex={isActive ? 0 : -1}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) =>
                                    (chainLinkRefs.current[index] = el)
                                }
                            >
                                <Label $active={isActive} weight="regular">
                                    {truncateText(linkChain.title)}
                                </Label>
                                <BoldLabel
                                    $active={isActive}
                                    weight="semibold"
                                    aria-hidden="true"
                                >
                                    {truncateText(linkChain.title)}
                                </BoldLabel>
                            </ChainLink>
                        </ChainItem>
                    );
                })}
            </Chain>
        </CustomFadeWrapper>
    );
};
