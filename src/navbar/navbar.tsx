import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useTheme } from "styled-components";
import { Layout } from "../layout";
import { Masthead } from "../masthead/masthead";
import { Overlay } from "../overlay/overlay";
import { Breakpoint } from "../theme";
import { Brand } from "./brand";
import { Drawer } from "./drawer";
import { NavbarActionButtons } from "./navbar-action-buttons";
import { NavbarHelper } from "./navbar-helper";
import { NavbarItems } from "./navbar-items";
import { getDefaultResourceLogo } from "./navbar-logo-data";
import {
    MobileMenuButton,
    MobileMenuIcon,
    Nav,
    NavBrandContainer,
    NavElementsContainer,
    NavSeparator,
    Wrapper,
} from "./navbar.styles";
import {
    BrandType,
    DrawerDismissalMethod,
    NavItemCommonProps,
    NavItemProps,
    NavbarActionButtonsProps,
    NavbarButtonProps,
    NavbarDrawerApi,
    NavbarDrawerHandle,
    NavbarProps,
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
        drawerDismissalExclusions: blockDrawerDismissalMethods = [],
        actionButtons,
        onItemClick,
        onActionButtonClick,
        onBrandClick,
        masthead = true,
        layout = "default",
        ...otherProps
    }: NavbarProps<T>,
    ref: React.Ref<NavbarDrawerHandle>
) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [showDrawer, setShowDrawer] = useState<boolean>(false);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const isStretch = layout === "stretch";
    const elementRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const defaultResource = getDefaultResourceLogo(theme?.resourceScheme);
    const tabletWidth = Breakpoint["lg-max"]({ theme });

    const primary = resources?.primary || defaultResource.primary;
    const secondary = resources?.secondary;

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
        event: React.MouseEvent<HTMLAnchorElement>,
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
            >
                <NavbarItems
                    items={items.mobile || items.desktop}
                    onItemClick={handleNavItemClick}
                    selectedId={selectedId}
                    mobile
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
        <NavBrandContainer $compress={compress} data-id="brand-container">
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
                    <NavSeparator $compress={compress} />
                    <Brand
                        resources={secondary}
                        onClick={handleBrandClick}
                        data-id="brand-secondary"
                        data-testid="main__brand-secondary"
                        type="secondary"
                    />
                </>
            )}
        </NavBrandContainer>
    );

    const renderMobileMenuButton = () => {
        const drawerItems = items.mobile || items.desktop;
        if (
            (drawerItems && drawerItems.length > 0) ||
            (actionButtons && hasCollapsibleActionButtons(actionButtons))
        ) {
            return (
                <MobileMenuButton
                    aria-label="Open nav menu"
                    data-testid="button__mobile-menu"
                    onClick={handleMobileMenuButtonClick}
                    focusHighlight={false}
                >
                    <MobileMenuIcon />
                </MobileMenuButton>
            );
        }

        return null;
    };

    const renderNavbar = () => {
        return (
            <Layout.Content stretch={isStretch}>
                <Nav $compress={compress} aria-label="Main navigation menu">
                    {!hideNavBranding && renderBrand()}
                    {!hideNavElements && (
                        <NavElementsContainer
                            $hideNavBranding={hideNavBranding}
                        >
                            <NavbarItems
                                items={items.desktop}
                                onItemClick={handleNavItemClick}
                                selectedId={selectedId}
                                hideNavBranding={hideNavBranding}
                            />
                            <NavbarActionButtons
                                actionButtons={actionButtons}
                                onActionButtonClick={handleActionButtonClick}
                            />
                            {renderMobileMenuButton()}
                        </NavElementsContainer>
                    )}
                </Nav>

                {!hideNavElements && renderDrawer()}
            </Layout.Content>
        );
    };

    return (
        <Wrapper
            ref={elementRef}
            $fixed={fixed}
            className={className}
            id={id || "navbar-wrapper"}
            data-testid={otherProps["data-testid"] || "navbar-wrapper"}
        >
            {masthead && <Masthead stretch={isStretch} />}
            {renderNavbar()}
        </Wrapper>
    );
};

export const Navbar = forwardRef(Component);
