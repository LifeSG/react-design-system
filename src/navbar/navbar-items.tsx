import type React from "react";
import { useEffect, useRef, useState } from "react";

import { Menu as DesktopMenu } from "../menu";
import type { TypographyWeight } from "../typography";
import { SimpleIdGenerator } from "../util";
import { Menu as MobileMenu } from "./menu";
import {
    ChevronIcon,
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
import type {
    NavItemCommonProps,
    NavItemLinkProps,
    NavItemProps,
} from "./types";

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
    const listRef = useRef<HTMLUListElement>(null);
    const [instanceId] = useState(() => SimpleIdGenerator.generate());

    // =============================================================================
    // HELPERS
    // =============================================================================
    const resetAll = () => {
        setShowSubMenu(false);
        setSelectedIndex(-1);
        setOpenSubMenuIndex(null);
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

            // mobile expands inline when link has submenu
            if (mobile && item.subMenu?.length) {
                const nextExpanded = !(selectedIndex === index && showSubMenu);
                setSelectedIndex(index);
                setShowSubMenu(nextExpanded);
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
        closeMobileSubMenu();
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
        <MobileMenu items={subMenu} onItemClick={handleMobileSubLinkClick} />
    );

    const renderLinkItem = (item: NavItemLinkProps<T>, index: number) => {
        const { children, options, subMenu, ...otherItemAttrs } = item;

        const hasSubMenu = !!subMenu?.length;

        const isRouteSelected = checkSelected(item);

        // desktop popover open state
        const isDesktopExpanded =
            !mobile && hasSubMenu && openSubMenuIndex === index;

        // mobile inline expanded state
        const isMobileExpanded =
            mobile && hasSubMenu && selectedIndex === index && showSubMenu;

        const isExpanded = isDesktopExpanded || isMobileExpanded;

        const selected =
            openSubMenuIndex !== null
                ? openSubMenuIndex === index
                : isRouteSelected;

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
                        $selected={isMobileExpanded}
                        focusHighlight={false}
                        focusOutline="browser"
                        aria-label={isMobileExpanded ? "Collapse" : "Expand"}
                    >
                        <ChevronIcon $selected={selected} />
                    </ExpandCollapseButton>
                </LinkIconContainer>
            ) : null;

        const renderLink = () => (
            <Link
                tabIndex={0}
                data-testid={testId}
                weight={textWeight}
                $selected={selected}
                underlineStyle="none"
                {...otherItemAttrs}
                aria-current={isRouteSelected ? "page" : undefined}
                onClick={handleLinkClick(item, index)}
                {...options}
            >
                <LinkLabel>{children}</LinkLabel>
                {renderIndicator()}
            </Link>
        );

        const renderLinkWithSubmenu = () => {
            const subMenuId = `navbar-submenu-${instanceId}-${item.id}`;

            if (mobile) {
                return (
                    <>
                        <Link
                            data-testid={testId}
                            weight={textWeight}
                            $selected={selected}
                            underlineStyle="none"
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
                    position="bottom"
                    customOffset={0}
                    menuContent={renderDesktopSubMenu(subMenu!, subMenuId)}
                    triggerOnFocus
                    isModal={false}
                    onPopoverAppear={() => setOpenSubMenuIndex(index)}
                    onPopoverDismiss={() => {
                        setOpenSubMenuIndex((prev) =>
                            prev === index ? null : prev
                        );
                    }}
                >
                    <LinkButton
                        type="button"
                        tabIndex={0}
                        data-testid={testId}
                        weight={textWeight}
                        $selected={selected}
                        aria-haspopup="menu"
                        aria-expanded={isExpanded}
                        {...options}
                    >
                        <LinkLabel>{children}</LinkLabel>
                        {renderIndicator()}
                    </LinkButton>
                </DesktopMenu>
            );
        };

        return (
            <LinkItem key={index} $hiddenBranding={hideNavBranding}>
                {hasSubMenu ? renderLinkWithSubmenu() : renderLink()}
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
