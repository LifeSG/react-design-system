import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import clsx from "clsx";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { Menu as DesktopMenu } from "../menu";
import { ClickableIcon } from "../shared/clickable-icon";
import type { TypographyWeight } from "../typography";
import { useId } from "../util";
import { Menu as MobileMenu } from "./menu";
import * as styles from "./navbar-items.styles";
import type {
    NavItemCommonProps,
    NavItemLinkProps,
    NavItemProps,
} from "./types";

const getLinkWeightClass = (weight: TypographyWeight) => {
    switch (weight) {
        case "bold":
            return styles.linkWeightBold;
        case "semibold":
            return styles.linkWeightSemibold;
        case "regular":
        default:
            return styles.linkWeightRegular;
    }
};

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
    const instanceId = useId();

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
                <div
                    data-testid={`${testId}-indicator`}
                    className={clsx(
                        styles.linkIndicator,
                        selected && styles.linkIndicatorSelected
                    )}
                />
            ) : null;

        const renderMobileChevron = () =>
            mobile && hasSubMenu ? (
                <div className={styles.linkIconContainer}>
                    <ClickableIcon
                        data-testid={`${testId}-expand-collapse-button`}
                        className={clsx(
                            styles.expandCollapseButton,
                            isMobileExpanded &&
                                styles.expandCollapseButtonExpanded
                        )}
                        focusHighlight={false}
                        focusOutline="browser"
                        aria-label={isMobileExpanded ? "Collapse" : "Expand"}
                    >
                        <ChevronUpIcon
                            className={clsx(
                                styles.chevronIcon,
                                selected && styles.chevronIconSelected
                            )}
                        />
                    </ClickableIcon>
                </div>
            ) : null;

        const linkClassName = clsx(
            styles.link,
            getLinkWeightClass(textWeight),
            selected && styles.linkSelected
        );

        const renderLink = () => (
            <a
                tabIndex={0}
                data-testid={testId}
                className={linkClassName}
                {...otherItemAttrs}
                aria-current={isRouteSelected ? "page" : undefined}
                onClick={handleLinkClick(item, index)}
                {...options}
            >
                <div className={styles.linkLabel}>{children}</div>
                {renderIndicator()}
            </a>
        );

        const renderLinkWithSubmenu = () => {
            const subMenuId = `navbar-submenu-${instanceId}-${item.id}`;

            if (mobile) {
                return (
                    <>
                        <a
                            data-testid={testId}
                            className={linkClassName}
                            {...otherItemAttrs}
                            aria-current={isRouteSelected ? "page" : undefined}
                            aria-haspopup="menu"
                            aria-expanded={isExpanded}
                            onClick={handleLinkClick(item, index)}
                            {...options}
                        >
                            <div className={styles.linkLabel}>{children}</div>
                            {renderIndicator()}
                            {renderMobileChevron()}
                        </a>

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
                    <button
                        type="button"
                        tabIndex={0}
                        data-testid={testId}
                        className={clsx(linkClassName, styles.linkButton)}
                        aria-haspopup="menu"
                        aria-expanded={isExpanded}
                        {...options}
                    >
                        <div className={styles.linkLabel}>{children}</div>
                        {renderIndicator()}
                    </button>
                </DesktopMenu>
            );
        };

        return (
            <li
                key={index}
                className={clsx(
                    styles.linkItem,
                    hideNavBranding && styles.linkItemHiddenBranding
                )}
            >
                {hasSubMenu ? renderLinkWithSubmenu() : renderLink()}
            </li>
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
            <ul ref={listRef} className={styles.mobileWrapper}>
                {renderItems()}
            </ul>
        ) : (
            <ul
                ref={listRef}
                className={clsx(
                    styles.wrapper,
                    hideNavBranding && styles.wrapperAlignLeft
                )}
            >
                {renderItems()}
            </ul>
        );
    }

    return <></>;
};
