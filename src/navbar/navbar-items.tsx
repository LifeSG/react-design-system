import React, { useEffect, useRef, useState } from "react";
import { TypographyWeight } from "../typography";
import { Menu as DesktopMenu } from "../menu";
import { Menu as MobileMenu } from "./menu";

import {
    ChevronIcon,
    ExpandCollapseButton,
    Link,
    LinkIconContainer,
    LinkIndicator,
    LinkItem,
    LinkLabel,
    MobileWrapper,
    Wrapper,
} from "./navbar-items.styles";
import { NavItemCommonProps, NavItemLinkProps, NavItemProps } from "./types";
import { SimpleIdGenerator } from "../util";

interface Props<T> {
    items: NavItemProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    hideNavBranding?: boolean | undefined;
    /** hide the selected LinkIndicator */
    hideLinkIndicator?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemProps<T> | NavItemCommonProps<T>
    ) => void;
}

export const NavbarItems = <T,>({
    items,
    selectedId,
    mobile = false,
    hideNavBranding,
    hideLinkIndicator = false,
    onItemClick,
}: Props<T>): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(
        null
    );
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const topLevelRefs = useRef<Array<HTMLElement | null>>([]);

    // Used to generate stable submenu ids so we can focus into the right one.
    const instanceIdRef = useRef<string>(SimpleIdGenerator.generate());
    const subMenuIdsRef = useRef<Array<string | null>>([]);

    // =============================================================================
    // HELPERS
    // =============================================================================
    const resetAll = () => {
        setShowSubMenu(false);
        setSelectedIndex(-1);
        setOpenSubMenuIndex(null);
        setFocusedIndex(null);
    };

    const closeMobileSubMenu = () => {
        setShowSubMenu(false);
        setSelectedIndex(-1);
    };

    const checkSelected = (item: NavItemLinkProps<T>): boolean => {
        if (item.id === selectedId) return true;
        if (item.subMenu?.length) {
            return !!item.subMenu.find((s) => s.id === selectedId);
        }
        return false;
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                listRef.current &&
                !listRef.current.contains(event.target as Node)
            ) {
                resetAll();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavItemLinkProps<T>, index: number) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation();

            if (mobile && item.subMenu?.length) {
                const nextExpanded = !(selectedIndex === index && showSubMenu);
                setSelectedIndex(index);
                setShowSubMenu(nextExpanded);
            }

            onItemClick(event, item);
        };
    };

    const handleSubLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => {
        event.stopPropagation();
        onItemClick(event, item);
        closeMobileSubMenu();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderDesktopSubMenu = (
        subMenu: NavItemCommonProps<T>[],
        parentIndex: number,
        subMenuId: string
    ) => (
        <DesktopMenu.Content>
            <div id={subMenuId}>
                <DesktopMenu.Section
                    showDivider={false}
                    onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
                        const container = e.currentTarget;

                        const focusables = Array.from(
                            container.querySelectorAll<HTMLElement>(
                                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                            )
                        ).filter(
                            (el) =>
                                !el.hasAttribute("disabled") &&
                                el.tabIndex !== -1
                        );

                        if (!focusables.length) return;

                        const active =
                            document.activeElement as HTMLElement | null;
                        const idx = active ? focusables.indexOf(active) : -1;

                        const isNextKey =
                            e.key === "ArrowDown" || e.key === "ArrowRight";
                        const isPrevKey =
                            e.key === "ArrowUp" || e.key === "ArrowLeft";

                        if (isNextKey || isPrevKey) {
                            e.preventDefault();

                            const delta = isNextKey ? 1 : -1;

                            const start =
                                idx === -1
                                    ? isNextKey
                                        ? 0
                                        : focusables.length - 1
                                    : (idx + delta + focusables.length) %
                                      focusables.length;

                            focusables[start].focus();
                            return;
                        }

                        if (e.key === "Tab") {
                            const first = focusables[0];
                            const last = focusables[focusables.length - 1];

                            if (e.shiftKey) {
                                e.preventDefault();

                                if (active && active !== first && idx > 0) {
                                    focusables[idx - 1].focus();
                                    return;
                                }

                                const prevTop =
                                    topLevelRefs.current[parentIndex - 1];
                                if (prevTop) {
                                    prevTop.focus();
                                    setOpenSubMenuIndex(null);
                                } else {
                                    topLevelRefs.current[parentIndex]?.focus();
                                    setOpenSubMenuIndex(null);
                                }
                                return;
                            }

                            if (!e.shiftKey) {
                                if (active && active !== last && idx >= 0) {
                                    e.preventDefault();
                                    focusables[
                                        Math.min(idx + 1, focusables.length - 1)
                                    ].focus();
                                    return;
                                }

                                const nextTop =
                                    topLevelRefs.current[parentIndex + 1];

                                if (nextTop) {
                                    e.preventDefault();
                                    nextTop.focus();
                                    setOpenSubMenuIndex(null);
                                }
                                return;
                            }
                        }
                    }}
                >
                    {subMenu.map((item, subIndex) => (
                        <DesktopMenu.Link
                            key={`${item.id}-${subIndex}`}
                            href={item.href}
                        >
                            {item.children}
                        </DesktopMenu.Link>
                    ))}
                </DesktopMenu.Section>
            </div>
        </DesktopMenu.Content>
    );

    const renderMobileSubMenu = (subMenu: NavItemCommonProps<T>[]) => (
        <MobileMenu items={subMenu} onItemClick={handleSubLinkClick} />
    );

    // =============================================================================
    // RENDER
    // =============================================================================
    const renderItems = () =>
        items.map((item, index) => {
            switch (item.itemType) {
                case "component": {
                    return <li key={index}>{item.children ?? null}</li>;
                }

                case "link":
                default: {
                    const { children, options, subMenu, ...otherItemAttrs } =
                        item;

                    const hasSubMenu = !!subMenu?.length;
                    const isDesktop = !mobile;
                    const isSubMenuTrigger = isDesktop && hasSubMenu;

                    // Ensure a stable submenu id for this index (desktop only)
                    if (isSubMenuTrigger && !subMenuIdsRef.current[index]) {
                        subMenuIdsRef.current[
                            index
                        ] = `navbar-submenu-${instanceIdRef.current}-${index}`;
                    }
                    const subMenuId = subMenuIdsRef.current[index] ?? undefined;

                    const isRouteSelected = checkSelected(item);
                    const isOpen =
                        isSubMenuTrigger && openSubMenuIndex === index;

                    const ownerIndex =
                        focusedIndex ??
                        openSubMenuIndex ??
                        (isRouteSelected ? index : null);

                    const selected = ownerIndex === index;
                    const showIndicator = !hideLinkIndicator && selected;

                    const textWeight: TypographyWeight = selected
                        ? mobile
                            ? "bold"
                            : "semibold"
                        : "regular";
                    const testId = mobile
                        ? `link__mobile-${index + 1}`
                        : `link__${index + 1}`;
                    const expanded =
                        mobile &&
                        hasSubMenu &&
                        selectedIndex === index &&
                        showSubMenu;

                    const subMenuChildren = (
                        <Link
                            ref={(el: HTMLElement | null) => {
                                topLevelRefs.current[index] = el;
                            }}
                            tabIndex={0}
                            as={isSubMenuTrigger ? "button" : "a"}
                            type={isSubMenuTrigger ? "button" : undefined}
                            data-testid={testId}
                            weight={textWeight}
                            $selected={selected}
                            underlineStyle="none"
                            {...otherItemAttrs}
                            aria-current={
                                !isSubMenuTrigger && isRouteSelected
                                    ? "page"
                                    : undefined
                            }
                            aria-haspopup={
                                isSubMenuTrigger ? "menu" : undefined
                            }
                            aria-expanded={
                                isSubMenuTrigger ? isOpen : undefined
                            }
                            onKeyDown={(
                                e: React.KeyboardEvent<HTMLElement>
                            ) => {
                                if (!isSubMenuTrigger) return;

                                if (e.key === "Tab" && !e.shiftKey) {
                                    if (!subMenuId) return;

                                    e.preventDefault();
                                    const tryFocus = (attempt = 0) => {
                                        const el =
                                            document.getElementById(subMenuId);
                                        if (!el) {
                                            if (attempt < 3)
                                                requestAnimationFrame(() =>
                                                    tryFocus(attempt + 1)
                                                );
                                            return;
                                        }

                                        const focusables = Array.from(
                                            el.querySelectorAll<HTMLElement>(
                                                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                                            )
                                        ).filter(
                                            (x) =>
                                                !x.hasAttribute("disabled") &&
                                                x.tabIndex !== -1
                                        );

                                        focusables[0]?.focus();
                                    };

                                    requestAnimationFrame(() => tryFocus());
                                }
                            }}
                            onClick={
                                isSubMenuTrigger
                                    ? undefined
                                    : handleLinkClick(item, index)
                            }
                            {...options}
                        >
                            <LinkLabel>{children}</LinkLabel>
                            {showIndicator && (
                                <LinkIndicator
                                    data-testid={`${testId}-indicator`}
                                    $selected={selected}
                                />
                            )}

                            {mobile && hasSubMenu && (
                                <LinkIconContainer>
                                    <ExpandCollapseButton
                                        data-testid={`${testId}-expand-collapse-button`}
                                        $selected={expanded}
                                        focusHighlight={false}
                                        focusOutline="browser"
                                        aria-label={
                                            expanded ? "Collapse" : "Expand"
                                        }
                                    >
                                        <ChevronIcon $selected={selected} />
                                    </ExpandCollapseButton>
                                </LinkIconContainer>
                            )}
                        </Link>
                    );

                    return (
                        <LinkItem
                            key={index}
                            $hiddenBranding={hideNavBranding}
                            onFocusCapture={() => setFocusedIndex(index)}
                            onBlurCapture={(
                                e: React.FocusEvent<HTMLElement>
                            ) => {
                                const next = e.relatedTarget as Node | null;
                                if (!next || !e.currentTarget.contains(next)) {
                                    setFocusedIndex((prev) =>
                                        prev === index ? null : prev
                                    );
                                }
                            }}
                        >
                            {isSubMenuTrigger ? (
                                <DesktopMenu
                                    position={"bottom"}
                                    customOffset={0}
                                    menuContent={renderDesktopSubMenu(
                                        subMenu!,
                                        index,
                                        subMenuId!
                                    )}
                                    triggerOnFocus
                                    isModal={false}
                                    onPopoverAppear={() =>
                                        setOpenSubMenuIndex(index)
                                    }
                                    onPopoverDismiss={() =>
                                        setOpenSubMenuIndex(null)
                                    }
                                >
                                    {subMenuChildren}
                                </DesktopMenu>
                            ) : (
                                subMenuChildren
                            )}

                            {mobile &&
                                hasSubMenu &&
                                expanded &&
                                renderMobileSubMenu(subMenu!)}
                        </LinkItem>
                    );
                }
            }
        });

    if (items && items.length > 0) {
        return mobile ? (
            <MobileWrapper ref={listRef}>{renderItems()}</MobileWrapper>
        ) : (
            <Wrapper ref={listRef} $alignLeft={hideNavBranding}>
                {renderItems()}
            </Wrapper>
        );
    }

    return <></>;
};
