import { MenuIcon } from "@lifesg/react-icons/menu";
import clsx from "clsx";
import type React from "react";
import {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

import { Layout } from "../layout";
import { Masthead } from "../masthead/masthead";
import { Overlay } from "../overlay/overlay";
import { ClickableIcon } from "../shared/clickable-icon";
import {
    Breakpoint,
    ComponentToken,
    parsePxOrRemValue,
    useApplyStyle,
    useDesignToken,
} from "../theme";
import { ThemeContext } from "../theme/theme-provider/context";
import { Brand } from "./brand";
import { Drawer } from "./drawer";
import * as styles from "./navbar.styles";
import { NavbarActionButtons } from "./navbar-action-buttons";
import { NavbarHelper } from "./navbar-helper";
import { NavbarItems } from "./navbar-items";
import { getDefaultResourceLogo } from "./navbar-logo-data";
import type {
    BrandType,
    DrawerDismissalMethod,
    NavbarActionButtonsProps,
    NavbarButtonProps,
    NavbarDrawerApi,
    NavbarDrawerHandle,
    NavbarProps,
    NavItemCommonProps,
    NavItemProps,
} from "./types";

const Component = <T,>(
    {
        items,
        className,
        id,
        selectedId,
        compress = false,
        fixed = true,
        resources,
        hideNavElements = false,
        hideNavBranding = false,
        hideLinkIndicator = false,
        drawerDismissalExclusions: blockDrawerDismissalMethods = [],
        actionButtons,
        onItemClick,
        onActionButtonClick,
        onBrandClick,
        masthead = true,
        layout = "default",
        headerLabel = "Main navigation menu",
        drawerLabel,
        ...otherProps
    }: NavbarProps<T>,
    ref: React.Ref<NavbarDrawerHandle>
) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [showDrawer, setShowDrawer] = useState<boolean>(false);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const mobileMenuRef = useRef<HTMLButtonElement>(null);
    const isStretch = layout === "stretch";
    const elementRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const theme = useContext(ThemeContext);
    const defaultResource = getDefaultResourceLogo(theme?.theme);
    const tabletWidthToken = useDesignToken(Breakpoint["lg-max"]);
    const tabletWidth = parsePxOrRemValue(tabletWidthToken || "1200px");

    const primary = resources?.primary || defaultResource.primary;
    const secondary = resources?.secondary;

    useApplyStyle(navRef, {
        [styles.tokens.nav.height]: compress
            ? ComponentToken.Navbar["compressed-height"]
            : ComponentToken.Navbar["full-height"],
    });

    useImperativeHandle(
        ref,
        () =>
            Object.assign<HTMLDivElement, NavbarDrawerApi>(
                elementRef.current!,
                {
                    dismissDrawer: () => {
                        dismissDrawer();
                    },
                }
            ),
        [showDrawer]
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const dismissDrawer = () => {
        setShowDrawer(false);
        setTimeout(() => {
            setShowOverlay(false);
        }, 550); // For drawer animation to complete + buffer
    };

    const shouldDismissDrawer = (dismissalMethod: DrawerDismissalMethod) => {
        return (
            showDrawer &&
            blockDrawerDismissalMethods.indexOf(dismissalMethod) === -1
        );
    };

    const hasCollapsibleActionButtons = (
        actionButtons: NavbarActionButtonsProps
    ) => {
        const drawerActionButtons =
            actionButtons.mobile || actionButtons.desktop;
        if (drawerActionButtons) {
            return (
                drawerActionButtons.length &&
                drawerActionButtons.some(
                    (actionButton) => !actionButton.uncollapsible
                )
            );
        }

        return false;
    };

    // =============================================================================
    // EVENT HANDLER
    // =============================================================================
    const handleResize = () => {
        if (window.innerWidth <= tabletWidth && showDrawer) {
            dismissDrawer();
        }
    };

    const handleBrandClick = (
        _event: React.MouseEvent<HTMLAnchorElement>,
        type: BrandType
    ) => {
        if (onBrandClick) {
            onBrandClick(type);
        }

        if (shouldDismissDrawer("brand-click")) {
            dismissDrawer();
        }
    };

    const handleNavItemClick = <K extends T>(
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemProps<K> | NavItemCommonProps<K>
    ) => {
        if (NavbarHelper.isNavItemCommon(item) && item.onClick) {
            item.onClick(event);
        } else if (onItemClick) {
            event.preventDefault();
            onItemClick(item);
        }

        if (
            NavbarHelper.isNavItemLink(item) &&
            !item.subMenu &&
            shouldDismissDrawer("item-click")
        ) {
            dismissDrawer();
        }
    };

    const handleActionButtonClick = (
        event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<Element>,
        actionButton: NavbarButtonProps
    ) => {
        if (
            (actionButton.type === "button" ||
                actionButton.type === "download") &&
            actionButton.args?.onClick
        ) {
            actionButton.args.onClick(
                event as React.MouseEvent<HTMLButtonElement>
            );
        } else if (onActionButtonClick) {
            event.preventDefault();
            onActionButtonClick(actionButton);
        }

        if (shouldDismissDrawer("item-click")) {
            dismissDrawer();
        }
    };

    const handleMobileMenuButtonClick = () => {
        setShowDrawer(true);
        setShowOverlay(true);
    };

    const handleDrawerClose = () => {
        if (shouldDismissDrawer("close-button-click")) {
            dismissDrawer();
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderDrawer = () => (
        <Overlay
            show={showOverlay}
            enableOverlayClick
            onOverlayClick={handleDrawerClose}
        >
            <Drawer
                show={showDrawer}
                resources={{ primary, secondary }}
                onClose={handleDrawerClose}
                onBrandClick={handleBrandClick}
                actionButtons={actionButtons}
                hideNavBranding={hideNavBranding}
                mobileMenuRef={mobileMenuRef}
                drawerLabel={drawerLabel}
            >
                <NavbarItems
                    items={items.mobile || items.desktop}
                    onItemClick={handleNavItemClick}
                    selectedId={selectedId}
                    mobile
                    hideLinkIndicator={hideLinkIndicator}
                />
                <NavbarActionButtons
                    actionButtons={actionButtons}
                    onActionButtonClick={handleActionButtonClick}
                    mobile
                />
            </Drawer>
        </Overlay>
    );

    const renderBrand = () => (
        <div
            className={clsx(
                styles.navBrandContainer,
                compress
                    ? styles.navBrandContainerCompressed
                    : styles.navBrandContainerFull,
                styles.navBrandContainerResponsive
            )}
            data-id="brand-container"
        >
            {primary && (
                <Brand
                    resources={primary}
                    onClick={handleBrandClick}
                    data-id="brand-primary"
                    data-testid="main__brand"
                    type="primary"
                />
            )}
            {secondary && (
                <>
                    <div
                        className={clsx(
                            styles.navSeparator,
                            compress
                                ? styles.navSeparatorCompressed
                                : styles.navSeparatorFull,
                            styles.navSeparatorResponsive
                        )}
                    />
                    <Brand
                        resources={secondary}
                        onClick={handleBrandClick}
                        data-id="brand-secondary"
                        data-testid="main__brand-secondary"
                        type="secondary"
                    />
                </>
            )}
        </div>
    );

    const renderMobileMenuButton = () => {
        const drawerItems = items.mobile || items.desktop;
        if (
            (drawerItems && drawerItems.length > 0) ||
            (actionButtons && hasCollapsibleActionButtons(actionButtons))
        ) {
            return (
                <ClickableIcon
                    ref={mobileMenuRef}
                    className={styles.mobileMenuButton}
                    aria-label={showDrawer ? "Close nav menu" : "Open nav menu"}
                    aria-expanded={showDrawer}
                    data-testid="button__mobile-menu"
                    onClick={handleMobileMenuButtonClick}
                    focusHighlight={false}
                >
                    <MenuIcon className={styles.mobileMenuIcon} />
                </ClickableIcon>
            );
        }

        return null;
    };

    const renderNavbar = () => {
        return (
            <Layout.Content stretch={isStretch}>
                <nav
                    ref={navRef}
                    className={clsx(
                        styles.nav,
                        theme?.mode === "dark" && styles.navDark
                    )}
                    aria-label={headerLabel}
                >
                    {!hideNavBranding && renderBrand()}
                    {!hideNavElements && (
                        <div
                            className={clsx(
                                styles.navElementsContainer,
                                !hideNavBranding
                                    ? styles.navElementsContainerWithBranding
                                    : null
                            )}
                        >
                            <NavbarItems
                                items={items.desktop}
                                onItemClick={handleNavItemClick}
                                selectedId={selectedId}
                                hideNavBranding={hideNavBranding}
                                hideLinkIndicator={hideLinkIndicator}
                            />
                            <NavbarActionButtons
                                actionButtons={actionButtons}
                                onActionButtonClick={handleActionButtonClick}
                            />
                            {renderMobileMenuButton()}
                        </div>
                    )}
                </nav>

                {!hideNavElements && renderDrawer()}
            </Layout.Content>
        );
    };

    return (
        <div
            ref={elementRef}
            className={clsx(
                styles.wrapper,
                fixed ? styles.wrapperFixed : styles.wrapperRelative,
                theme?.mode === "dark"
                    ? styles.wrapperDark
                    : styles.wrapperLight,
                className
            )}
            id={id || "navbar-wrapper"}
            data-testid={otherProps["data-testid"] || "navbar-wrapper"}
        >
            {masthead && <Masthead stretch={isStretch} />}
            {renderNavbar()}
        </div>
    );
};

export const Navbar = forwardRef(Component);
