import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { ButtonProps } from "../button/types";
import { V2_Layout } from "../v2_layout";
import { Masthead } from "../masthead/masthead";
import { Overlay } from "../overlay/overlay";
import { MediaWidths } from "../spec/media-spec";
import { Brand } from "./brand";
import { Drawer } from "./drawer";
import { NavbarActionButtons } from "./navbar-action-buttons";
import { NavbarItems } from "./navbar-items";
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
    NavItemLinkProps,
    NavbarButtonProps,
    NavbarDrawerHandle,
    NavbarProps,
    NavbarResourcesProps,
} from "./types";

const Component = <T,>(
    {
        items,
        className,
        id,
        selectedId,
        compress = false,
        fixed = true,
        resources = DEFAULT_RESOURCES,
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
    const elementRef = useRef<HTMLDivElement>();

    const { primary = DEFAULT_RESOURCES.primary, secondary } = resources;

    useImperativeHandle(
        ref,
        () =>
            Object.assign(elementRef.current, {
                dismissDrawer: () => {
                    dismissDrawer();
                },
            }),
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

    const hasCollapsibleActionButtons = () => {
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
        if (window.innerWidth <= MediaWidths.tablet && showDrawer) {
            dismissDrawer();
        }
    };

    const handleBrandClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        type: BrandType
    ) => {
        if (onBrandClick) {
            event.preventDefault();
            onBrandClick(type);
        }

        if (shouldDismissDrawer("brand-click")) {
            dismissDrawer();
        }
    };

    const handleNavItemClick = <K extends T>(
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemLinkProps<K>
    ) => {
        if (item.onClick) {
            item.onClick(event);
        } else if (onItemClick) {
            event.preventDefault();
            onItemClick(item);
        }

        if (!item?.subMenu && shouldDismissDrawer("item-click")) {
            dismissDrawer();
        }
    };

    const handleActionButtonClick = (
        event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<Element>,
        actionButton: NavbarButtonProps
    ) => {
        if (actionButton.args && (actionButton.args as ButtonProps).onClick) {
            (actionButton.args as ButtonProps).onClick(
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
            enableOverlayClick={true}
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
            <Brand
                resources={primary}
                onClick={handleBrandClick}
                data-id="brand-primary"
                data-testid="main__brand"
                type="primary"
            />
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
            (actionButtons && hasCollapsibleActionButtons())
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
            <V2_Layout.Content stretch={isStretch}>
                <Nav $compress={compress}>
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
            </V2_Layout.Content>
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
            {masthead && <Masthead />}
            {renderNavbar()}
        </Wrapper>
    );
};

export const Navbar = forwardRef(Component);

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_RESOURCES: NavbarResourcesProps = {
    primary: {
        brandName: "LifeSG",
        logoSrc: "https://assets.life.gov.sg/lifesg/logo-lifesg.svg",
    },
};
