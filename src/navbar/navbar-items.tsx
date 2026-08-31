import React, { useEffect, useRef, useState } from "react";
import { Menu as DesktopMenu } from "../menu";
import { TypographyWeight } from "../typography";
import { Menu as MobileMenu } from "./menu";

import { useId } from "../util";
import {
    ChevronIcon,
    ChevronIconDesktop,
    ExpandCollapseButton,
    Link,
    LinkButton,
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
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [expandedSubMenuIndex, setExpandedSubMenuIndex] = useState<
        number | null
    >(null);
    const listRef = useRef<HTMLUListElement>(null);
    const instanceId = useId();

    // =============================================================================
    // HELPERS
    // =============================================================================
    const resetAll = () => {
        setSelectedIndex(null);
        setExpandedSubMenuIndex(null);
    };

    const hasSelectedSubMenuItem = (item: NavItemLinkProps<T>): boolean =>
        !!item.subMenu?.some((subItem) => subItem.id === selectedId);

    const checkSelected = (item: NavItemLinkProps<T>): boolean =>
        item.id === selectedId || hasSelectedSubMenuItem(item);

    const foundSubMenuParentIndex = mobile
        ? items.findIndex(
              (item) =>
                  item.itemType !== "component" &&
                  hasSelectedSubMenuItem(item as NavItemLinkProps<T>)
          )
        : -1;
    const selectedSubMenuParentIndex =
        foundSubMenuParentIndex < 0 ? null : foundSubMenuParentIndex;

    // =========================================================================
    // EFFECTS
    // =========================================================================

    useEffect(() => {
        if (selectedSubMenuParentIndex === null) return;

        setExpandedSubMenuIndex(selectedSubMenuParentIndex);
    }, [selectedSubMenuParentIndex]);

    useEffect(() => {
        if (mobile) return;

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
    }, [mobile]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavItemLinkProps<T>, index: number) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation();

            // mobile expands inline when link has submenu
            if (mobile && item.subMenu?.length) {
                setExpandedSubMenuIndex((prev) =>
                    prev === index ? null : index
                );
            }

            onItemClick(event, item);
        };
    };

    const handleMobileSubLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => {
        event.stopPropagation();
        onItemClick(event, item);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderDesktopSubMenu = (
        subMenu: NavItemCommonProps<T>[],
        subMenuId: string
    ) => (
        <DesktopMenu.Content id={subMenuId}>
            <DesktopMenu.Section showDivider={false}>
                {subMenu.map((item, subIndex) => (
                    <DesktopMenu.Link
                        key={`${item.id}-${subIndex}`}
                        href={item.href}
                    >
                        {item.children}
                    </DesktopMenu.Link>
                ))}
            </DesktopMenu.Section>
        </DesktopMenu.Content>
    );

    const renderMobileSubMenu = (subMenu: NavItemCommonProps<T>[]) => (
        <MobileMenu
            items={subMenu}
            selectedId={selectedId}
            onItemClick={handleMobileSubLinkClick}
        />
    );

    const renderLinkItem = (item: NavItemLinkProps<T>, index: number) => {
        const { children, options, subMenu, ...otherItemAttrs } = item;

        const hasSubMenu = !!subMenu?.length;

        const isRouteSelected = checkSelected(item);

        // desktop popover open state
        const isDesktopExpanded =
            !mobile && hasSubMenu && expandedSubMenuIndex === index;

        // mobile inline expanded state
        const isMobileExpanded =
            mobile && hasSubMenu && expandedSubMenuIndex === index;

        const isExpanded = isDesktopExpanded || isMobileExpanded;

        const selected =
            selectedIndex !== null ? selectedIndex === index : isRouteSelected;

        const showIndicator = !hideLinkIndicator && selected;

        const textWeight: TypographyWeight = selected
            ? mobile
                ? "bold"
                : "semibold"
            : "regular";

        const testId = mobile
            ? `link__mobile-${index + 1}`
            : `link__${index + 1}`;

        const renderIndicator = () =>
            showIndicator ? (
                <LinkIndicator
                    data-testid={`${testId}-indicator`}
                    $selected={selected}
                />
            ) : null;

        const renderMobileChevron = () =>
            mobile && hasSubMenu ? (
                <LinkIconContainer>
                    <ExpandCollapseButton
                        data-testid={`${testId}-expand-collapse-button`}
                        $selected={selected}
                        $expanded={isExpanded}
                        focusHighlight={false}
                        focusOutline="browser"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                        <ChevronIcon $selected={selected} />
                    </ExpandCollapseButton>
                </LinkIconContainer>
            ) : null;

        const renderLink = () => (
            <Link
                tabIndex={0}
                data-testid={testId}
                $weight={textWeight}
                $selected={selected}
                {...otherItemAttrs}
                aria-current={isRouteSelected ? "page" : undefined}
                onClick={handleLinkClick(item, index)}
                {...options}
            >
                <LinkLabel>{children}</LinkLabel>
                {renderIndicator()}
            </Link>
        );

        const renderLinkWithSubmenu = (isLastItem: boolean) => {
            const subMenuId = `navbar-submenu-${instanceId}-${item.id}`;

            if (mobile) {
                return (
                    <>
                        <Link
                            data-testid={testId}
                            $weight={textWeight}
                            $selected={selected}
                            {...otherItemAttrs}
                            aria-current={isRouteSelected ? "page" : undefined}
                            aria-haspopup="menu"
                            aria-expanded={isExpanded}
                            onClick={handleLinkClick(item, index)}
                            {...options}
                        >
                            <LinkLabel>{children}</LinkLabel>
                            {renderIndicator()}
                            {renderMobileChevron()}
                        </Link>

                        {isMobileExpanded && renderMobileSubMenu(subMenu!)}
                    </>
                );
            }

            return (
                <DesktopMenu
                    position={isLastItem ? "bottom-end" : "bottom"}
                    customOffset={0}
                    menuContent={renderDesktopSubMenu(subMenu!, subMenuId)}
                    triggerOnFocus
                    isModal={false}
                    onPopoverAppear={() => {
                        setSelectedIndex(index);
                        setExpandedSubMenuIndex(index);
                    }}
                    onPopoverDismiss={() => {
                        setSelectedIndex((prev) =>
                            prev === index ? null : prev
                        );
                        setExpandedSubMenuIndex((prev) =>
                            prev === index ? null : prev
                        );
                    }}
                >
                    <LinkButton
                        type="button"
                        tabIndex={0}
                        data-testid={testId}
                        $weight={textWeight}
                        $selected={selected}
                        aria-haspopup="menu"
                        aria-expanded={isExpanded}
                        {...options}
                    >
                        <LinkLabel>{children}</LinkLabel>
                        {renderIndicator()}
                        <ChevronIconDesktop
                            $selected={selected}
                            $expanded={isExpanded}
                        />
                    </LinkButton>
                </DesktopMenu>
            );
        };

        return (
            <LinkItem key={index} $hiddenBranding={hideNavBranding}>
                {hasSubMenu
                    ? renderLinkWithSubmenu(index === items.length - 1)
                    : renderLink()}
            </LinkItem>
        );
    };

    const renderItems = () =>
        items.map((item, index) => {
            switch (item.itemType) {
                case "component": {
                    return <li key={index}>{item.children ?? null}</li>;
                }
                case "link":
                default: {
                    return renderLinkItem(item as NavItemLinkProps<T>, index);
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
