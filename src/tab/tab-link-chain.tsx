import clsx from "clsx";
import { useContext, useEffect, useRef } from "react";

import { FadeWrapper, type ResizeCallbackParams } from "../shared/fade-wrapper";
import { useDesignToken, useSafeMaxWidthMediaQuery } from "../theme";
import { Breakpoint } from "../theme/tokens";
import { TabContext } from "./tab-context";
import * as styles from "./tab-link-chain.styles";
import type { TabProps } from "./types";

interface Props
    extends Pick<
        TabProps,
        "fullWidthIndicatorLine" | "onTabClick" | "data-testid" | "fadeColor"
    > {
    controlledMode?: boolean;
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

    const tabletBreakpoint = useDesignToken(Breakpoint["lg-max"]);
    const isTablet = useSafeMaxWidthMediaQuery(tabletBreakpoint);

    const activeLinkRef = useRef<HTMLLIElement | null>(null);
    const chainRef = useRef<HTMLUListElement | null>(null);
    const chainLinkRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const chainItemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        chainItemRefs.current.forEach((itemRef, index) => {
            if (!itemRef) {
                return;
            }

            const width = tabLinks[index]?.width;

            if (width) {
                itemRef.style.setProperty(styles.tokens.chainItem.width, width);
            } else {
                itemRef.style.removeProperty(styles.tokens.chainItem.width);
            }
        });
    }, [tabLinks]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChainLinkClick =
        (index: number) =>
        (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
            event.preventDefault();
            event.stopPropagation();
            if (!controlledMode) {
                setCurrentActiveIndex(index);
            }

            if (onTabClick) {
                onTabClick(tabLinks[index].title, index);
            }
        };

    const handleResize = ({ content }: ResizeCallbackParams) => {
        if (content && isTablet && activeLinkRef.current && chainRef.current) {
            content.scrollLeft =
                activeLinkRef.current.getBoundingClientRect().left -
                chainRef.current.getBoundingClientRect().left;
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
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <FadeWrapper
            onResize={handleResize}
            data-testid={testId}
            fadeColor={fadeColor}
            className={styles.customFadeWrapper}
        >
            <ul
                role="tablist"
                ref={chainRef}
                className={clsx(
                    styles.chain,
                    fullWidthIndicatorLine && styles.chainFullWidthIndicator
                )}
            >
                {tabLinks.map(({ title, width, titleAddon }, index) => {
                    const isActive = currentActiveIndex === index;
                    const chainItemRef = (el: HTMLLIElement | null) => {
                        chainItemRefs.current[index] = el;
                        if (isActive) {
                            activeLinkRef.current = el;
                        }
                    };

                    return (
                        <li
                            key={`${title}-${width ?? ""}-${
                                titleAddon?.position ?? "none"
                            }`}
                            role="none"
                            className={clsx(
                                styles.chainItem,
                                isActive && styles.chainItemActive
                            )}
                            ref={chainItemRef}
                        >
                            <div
                                role="none"
                                onClick={handleChainLinkClick(index)}
                                data-testid={`${testId}-link-${index}`}
                                className={clsx(
                                    styles.flexRow,
                                    styles.chainLink,
                                    titleAddon?.position === "left" &&
                                        styles.chainLinkReversed
                                )}
                            >
                                <div
                                    className={styles.labelContainer}
                                    role="none"
                                >
                                    <div
                                        className={clsx(
                                            styles.label,
                                            styles.deselectedLabel,
                                            isActive &&
                                                styles.deselectedLabelActive
                                        )}
                                        onClick={handleChainLinkClick(index)}
                                        aria-hidden="true"
                                    >
                                        {title}
                                    </div>
                                    <button
                                        role="tab"
                                        type="button"
                                        aria-selected={isActive}
                                        tabIndex={isActive ? 0 : -1}
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, index)
                                        }
                                        ref={(el) =>
                                            (chainLinkRefs.current[index] = el)
                                        }
                                        className={clsx(
                                            styles.label,
                                            styles.selectedLabel,
                                            isActive &&
                                                styles.selectedLabelActive
                                        )}
                                    >
                                        {title}
                                    </button>
                                </div>
                                {titleAddon?.content}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </FadeWrapper>
    );
};
