import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { Layout } from "../layout";
import { Overlay } from "../overlay/overlay";
import { MediaWidths } from "../styles/spec/media";
import { TextWeight } from "../text/types";
import { Brand } from "./brand";
import { Drawer } from "./drawer";
import { Masthead } from "./masthead";
import {
    Link,
    LinkIndicator,
    MobileMenuButton,
    Nav,
    NavButtonLinkItem,
    NavItemsWrapper,
    NavLinkItem,
    Wrapper,
} from "./navbar.styles";
import { INavItem, INavResources, INavbarProps } from "./types";

const Component = <T,>(
    {
        items,
        id,
        selectedId,
        compress = false,
        fixed = true,
        resources = DEFAULT_RESOURCES,
        addon = "download",
        onItemClick,
        onBrandClick,
        ...otherProps
    }: INavbarProps<T>,
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

        if (showDrawer) {
            dismissDrawer();
        }
    };

    const handleLinkClick = <K extends T>(
        event: React.MouseEvent<HTMLAnchorElement>,
        item: INavItem<K>
    ) => {
        if (!item.onClick && onItemClick) {
            event.preventDefault();
            onItemClick(item);
        }

        if (showDrawer) {
            dismissDrawer();
        }
    };

    const handleMobileMenuButtonClick = () => {
        setShowDrawer(true);
        setShowOverlay(true);
    };

    const handleDrawerClose = () => {
        dismissDrawer();
    };

    const handleDownloadButtonClick = () => {
        window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = (isMobile?: boolean) => {
        const itemsToRender = isMobile
            ? items.mobile || items.desktop
            : items.desktop;

        return itemsToRender.map((item, index) => {
            const selected = item.id === selectedId;
            const textWeight: TextWeight = selected
                ? isMobile
                    ? "bold"
                    : "semibold"
                : "regular";

            const { children, options, ...otherItemAttrs } = item;
            const testId = isMobile
                ? `link__mobile-${index}`
                : `link__${index}`;

            return (
                <NavLinkItem key={index}>
                    <Link
                        data-testid={testId}
                        weight={textWeight}
                        onClick={(event) => handleLinkClick(event, item)}
                        selected={selected} /* for mobile */
                        {...otherItemAttrs}
                    >
                        {children}
                        {selected && <LinkIndicator />}
                    </Link>
                </NavLinkItem>
            );
        });
    };

    const renderDownloadButton = () => {
        return (
            <NavButtonLinkItem key="download">
                <Button.Small
                    data-testid="link__download-button"
                    onClick={handleDownloadButtonClick}
                >
                    Download the app
                </Button.Small>
            </NavButtonLinkItem>
        );
    };

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
                addon={addon}
            >
                {renderItems(true)}
            </Drawer>
        </Overlay>
    );

    const renderNavbar = () => {
        return (
            <Layout.Content>
                <Nav compress={compress}>
                    <Brand
                        resources={resources}
                        compress={compress}
                        onClick={handleBrandClick}
                        data-testid="main__brand"
                    />
                    <NavItemsWrapper>
                        {renderItems()}
                        {renderDownloadButton()}
                    </NavItemsWrapper>
                    <MobileMenuButton
                        aria-label="Open nav menu"
                        data-testid="button__mobile-menu"
                        onClick={handleMobileMenuButtonClick}
                    >
                        <Icon type="menu" />
                    </MobileMenuButton>
                </Nav>
                {renderDrawer()}
            </Layout.Content>
        );
    };

    return (
        <Wrapper
            ref={ref}
            fixed={fixed}
            id={id || "navbar-wrapper"}
            data-testid={otherProps["data-testid"] || "navbar-wrapper"}
        >
            <Masthead />
            {renderNavbar()}
        </Wrapper>
    );
};

export const Navbar = React.forwardRef(Component);

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_RESOURCES: INavResources = {
    brandName: "LifeSG",
    logoSrc:
        "https://mol-mgmt-app-assets.s3-ap-southeast-1.amazonaws.com/lifesg/logo-lifesg.svg",
};
