import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ClickableIcon } from "../shared/clickable-icon";
import { useApplyStyle } from "../theme";
import { Brand } from "./brand";
import * as styles from "./drawer.styles";
import * as navbarStyles from "./navbar.styles";
import type { NavbarDrawerProps } from "./types";

const Component = (
    props: NavbarDrawerProps,
    ref: React.Ref<HTMLDivElement>
) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const {
        show,
        resources = {},
        children,
        hideNavBranding,
        onClose,
        onBrandClick,
        drawerLabel = "Mobile navigation menu",
        mobileMenuRef,
    } = props;
    const [viewHeight, setViewHeight] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useApplyStyle(containerRef, {
        [styles.tokens.container.viewHeight]: viewHeight
            ? `${viewHeight}px`
            : null,
    });

    const { primary, secondary } = resources;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleResize = () => {
        /**
         * Reference:
         * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
         */
        if (window) {
            const viewHeight = window.innerHeight * 0.01;
            setViewHeight(viewHeight);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!show) return;

        if (event.key === "Escape") {
            event.preventDefault();
            onClose?.();
            // Return focus to the hamburger menu button
            setTimeout(() => {
                mobileMenuRef?.current?.focus();
            }, 300);
        }
    };

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

    // Focus management when drawer opens
    useLayoutEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.focus({ preventScroll: true });
                }
            }, 550);

            return () => clearTimeout(timer);
        }
    }, [show]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderBrand = () => {
        return (
            <>
                {primary && (
                    <Brand
                        resources={primary}
                        compress
                        onClick={onBrandClick}
                        data-id="drawer-brand-primary"
                        data-testid="drawer__brand"
                        type="primary"
                    />
                )}
                {secondary && (
                    <>
                        <div
                            className={clsx(
                                navbarStyles.navSeparator,
                                navbarStyles.navSeparatorCompressed
                            )}
                        />
                        <Brand
                            resources={secondary}
                            compress
                            onClick={onBrandClick}
                            data-id="drawer-brand-secondary"
                            data-testid="drawer__brand-secondary"
                            type="secondary"
                        />
                    </>
                )}
            </>
        );
    };

    const renderTopBar = () => (
        <div className={styles.topBar}>
            <div
                className={clsx(
                    navbarStyles.navBrandContainer,
                    navbarStyles.navBrandContainerCompressed
                )}
                data-id="drawer-brand-container"
            >
                {!hideNavBranding && renderBrand()}
            </div>
            <ClickableIcon
                className={styles.closeButton}
                onClick={onClose}
                focusHighlight={false}
                aria-label="Close nav menu"
            >
                <CrossIcon className={styles.closeIcon} />
            </ClickableIcon>
        </div>
    );

    return (
        <div className={styles.wrapper} ref={ref} data-testid="drawer">
            <nav
                ref={containerRef}
                className={clsx(
                    styles.container,
                    show ? styles.containerShown : styles.containerHidden
                )}
                onKeyDown={handleKeyDown}
                tabIndex={show ? 0 : -1}
                aria-label={drawerLabel}
            >
                <div className={styles.content}>
                    {renderTopBar()}
                    {children}
                </div>
            </nav>
        </div>
    );
};

export const Drawer = React.forwardRef(Component);
