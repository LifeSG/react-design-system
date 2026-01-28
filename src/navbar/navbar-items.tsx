import React, { useEffect, useRef, useState } from "react";
import { TypographyWeight } from "../typography";
import { Menu } from "src/menu";
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

    // =============================================================================
    // HELPERS
    // =============================================================================
    const resetAll = () => {
        setShowSubMenu(false);
        setSelectedIndex(-1);
        setOpenSubMenuIndex(null);
        setFocusedIndex(null);
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

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSubMenu = (subMenu: NavItemCommonProps<T>[]) => (
        <Menu.Content>
            <Menu.Section showDivider={false}>
                {subMenu.map((item, subIndex) => (
                    <Menu.Link key={`${item.id}-${subIndex}`} href={item.href}>
                        {item.children}
                    </Menu.Link>
                ))}
            </Menu.Section>
        </Menu.Content>
    );

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
                                <Menu
                                    position={"bottom"}
                                    customOffset={0}
                                    menuContent={renderSubMenu(subMenu!)}
                                    onPopoverAppear={() =>
                                        setOpenSubMenuIndex(index)
                                    }
                                    onPopoverDismiss={() =>
                                        setOpenSubMenuIndex(null)
                                    }
                                >
                                    {subMenuChildren}
                                </Menu>
                            ) : (
                                subMenuChildren
                            )}

                            {/* MOBILE inline submenu */}
                            {mobile &&
                                hasSubMenu &&
                                expanded &&
                                renderSubMenu(subMenu!)}
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
