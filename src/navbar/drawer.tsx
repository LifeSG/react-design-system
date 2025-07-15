import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { Brand } from "./brand";
import {
    CloseButton,
    CloseIcon,
    Container,
    Content,
    TopBar,
    Wrapper,
} from "./drawer.styles";
import { NavBrandContainer, NavSeparator } from "./navbar.styles";
import { NavbarDrawerProps } from "./types";

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
    } = props;
    const [viewHeight, setViewHeight] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

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

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (!show) return;

            if (event.key === "Escape") {
                event.preventDefault();
                onClose?.();
                // Return focus to the hamburger menu button
                setTimeout(() => {
                    const hamburgerButton = document.querySelector(
                        '[data-testid="button__mobile-menu"]'
                    ) as HTMLElement;
                    hamburgerButton?.focus();
                }, 300);
            }
        },
        [show, onClose]
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
                        <NavSeparator />
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
        <TopBar>
            <NavBrandContainer data-id="drawer-brand-container">
                {!hideNavBranding && renderBrand()}
            </NavBrandContainer>
            <CloseButton
                onClick={onClose}
                focusHighlight={false}
                aria-label="Close nav menu"
            >
                <CloseIcon />
            </CloseButton>
        </TopBar>
    );

    return (
        <Wrapper ref={ref} data-testid="drawer">
            <Container
                as="nav"
                ref={containerRef}
                $show={show}
                $viewHeight={viewHeight}
                onKeyDown={handleKeyDown}
                tabIndex={show ? 0 : -1}
                aria-label={drawerLabel}
            >
                <Content>
                    {renderTopBar()}
                    {children}
                </Content>
            </Container>
        </Wrapper>
    );
};

export const Drawer = React.forwardRef(Component);
