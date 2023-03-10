import React, { useEffect, useState } from "react";
import { ButtonProps } from "../button/types";
import { Layout } from "../layout";
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
    NavElementsInnerContainer,
    NavLogoContainer,
    NavSeprator,
    Wrapper,
} from "./navbar.styles";
import {
    DrawerDismissalMethod,
    NavItemProps,
    NavbarButtonProps,
    NavbarProps,
    NavbarResourcesProps,
} from "./types";

const Component = <T,>(
    {
        items,
        id,
        selectedId,
        compress = false,
        fixed = true,
        resources = DEFAULT_RESOURCES,
        hideNavElements = false,
        drawerDismissalExclusions: blockDrawerDismissalMethods = [],
        actionButtons,
        resourcesSecondaryBrand,
        onItemClick,
        onSecondaryBrandClick,
        onActionButtonClick,
        onBrandClick,
        ...otherProps
    }: NavbarProps<T>,
    ref: React.Ref<HTMLDivElement>
) => {
    // =============================================================================
    // STATE DECLARATIONS
    // =============================================================================
    const [showDrawer, setShowDrawer] = useState<boolean>(false);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

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

    // =============================================================================
    // EVENT HANDLER
    // =============================================================================
    const handleResize = () => {
        if (window.innerWidth <= MediaWidths.tablet && showDrawer) {
            dismissDrawer();
        }
    };

    const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (onBrandClick) {
            event.preventDefault();
            onBrandClick();
        }

        if (shouldDismissDrawer("brand-click")) {
            dismissDrawer();
        }
    };

    const handleSecondaryBrandClick = (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        if (onSecondaryBrandClick) {
            event.preventDefault();
            onSecondaryBrandClick();
        }

        if (shouldDismissDrawer("brand-click")) {
            dismissDrawer();
        }
    };

    const handleNavItemClick = <K extends T>(
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemProps<K>
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
                resources={resources}
                onClose={handleDrawerClose}
                onBrandClick={handleBrandClick}
                actionButtons={actionButtons}
                resourcesSecondaryBrand={resourcesSecondaryBrand}
                handleSecondaryBrandClick={handleBrandClick}
            >
                <NavbarItems
                    items={items.mobile || items.desktop}
                    onItemClick={handleNavItemClick}
                    selectedId={selectedId}
                    mobile
                />
                <NavbarActionButtons
                    actionButtons={
                        actionButtons &&
                        (actionButtons?.mobile || actionButtons.desktop)
                    }
                    onActionButtonClick={handleActionButtonClick}
                    mobile
                />
            </Drawer>
        </Overlay>
    );

    const renderBrand = () => (
        <NavBrandContainer>
            <Brand
                resources={resources}
                compress={compress}
                onClick={handleBrandClick}
                data-testid="main__brand"
            />
            {resourcesSecondaryBrand && (
                <NavLogoContainer>
                    <NavSeprator compress={compress} />
                    <Brand
                        resources={resourcesSecondaryBrand}
                        compress={compress}
                        onClick={handleSecondaryBrandClick}
                        data-testid="main__brand"
                    />
                </NavLogoContainer>
            )}
        </NavBrandContainer>
    );

    const renderDesktopNavItems = () => (
        <NavbarItems
            items={items.desktop}
            onItemClick={handleNavItemClick}
            selectedId={selectedId}
        />
    );

    const renderMobileMenuButton = () => (
        <MobileMenuButton
            aria-label="Open nav menu"
            data-testid="button__mobile-menu"
            onClick={handleMobileMenuButtonClick}
            focusHighlight={false}
        >
            <MobileMenuIcon />
        </MobileMenuButton>
    );

    const renderNavbarActionButtons = () => (
        <NavbarActionButtons
            actionButtons={actionButtons && actionButtons.desktop}
            onActionButtonClick={handleActionButtonClick}
        />
    );

    const renderNavElements = () => (
        <NavElementsContainer>
            {renderDesktopNavItems()}

            <NavElementsInnerContainer>
                {renderNavbarActionButtons()}
            </NavElementsInnerContainer>
            {renderMobileMenuButton()}
        </NavElementsContainer>
    );

    const renderNavbar = () => {
        return (
            <Layout.Content>
                <Nav compress={compress}>
                    {renderBrand()}
                    {!hideNavElements && renderNavElements()}
                </Nav>

                {!hideNavElements && renderDrawer()}
            </Layout.Content>
        );
    };

    return (
        <div>
            <Wrapper
                ref={ref}
                fixed={fixed}
                id={id || "navbar-wrapper"}
                data-testid={otherProps["data-testid"] || "navbar-wrapper"}
            >
                <Masthead />
                {renderNavbar()}
            </Wrapper>
        </div>
    );
};

export const Navbar = React.forwardRef(Component);

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_RESOURCES: NavbarResourcesProps = {
    brandName: "LifeSG",
    logoSrc: "https://assets.life.gov.sg/lifesg/logo-lifesg.svg",
};
