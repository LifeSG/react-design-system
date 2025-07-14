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
    } = props;
    const [viewHeight, setViewHeight] = useState<number>(0);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const [isNavigating, setIsNavigating] = useState<boolean>(false);
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
                return;
            }

            // Handle arrow key navigation when drawer is open
            const navLinks =
                containerRef.current?.querySelectorAll(
                    '[data-testid^="link__mobile-"]'
                ) || [];
            const maxIndex = navLinks.length - 1;

            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    setIsNavigating(true);
                    setFocusedIndex((prev) => {
                        const newIndex =
                            prev < 0 ? 0 : prev < maxIndex ? prev + 1 : 0;
                        return newIndex;
                    });
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    setIsNavigating(true);
                    setFocusedIndex((prev) => {
                        const newIndex =
                            prev < 0
                                ? maxIndex
                                : prev > 0
                                ? prev - 1
                                : maxIndex;
                        return newIndex;
                    });
                    break;
                case "Enter":
                case " ":
                    event.preventDefault();
                    if (focusedIndex >= 0) {
                        const currentLink = navLinks[
                            focusedIndex
                        ] as HTMLElement;
                        currentLink?.click();
                    }
                    break;
            }
        },
        [show, onClose, focusedIndex]
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

    // Focus management for keyboard navigation - focus container after transition
    useLayoutEffect(() => {
        if (show) {
            // Reset navigation state when drawer opens
            setFocusedIndex(-1);
            setIsNavigating(false);

            // Focus the container after animation completes (300ms + 200ms delay = 500ms total)
            const timer = setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.focus({ preventScroll: true });
                    // Ensure the container is visually focused for screen readers
                    containerRef.current.setAttribute("aria-live", "polite");
                    containerRef.current.setAttribute("aria-expanded", "true");
                }
            }, 550);

            return () => clearTimeout(timer);
        } else {
            // Clean up attributes when drawer closes
            if (containerRef.current) {
                containerRef.current.removeAttribute("aria-live");
                containerRef.current.setAttribute("aria-expanded", "false");
            }
        }
    }, [show]);

    // Update focus when focusedIndex changes (only for arrow key navigation)
    useEffect(() => {
        if (show && isNavigating && focusedIndex >= 0) {
            const navLinks =
                containerRef.current?.querySelectorAll(
                    '[data-testid^="link__mobile-"]'
                ) || [];
            if (focusedIndex < navLinks.length) {
                const currentLink = navLinks[focusedIndex] as HTMLElement;
                currentLink?.focus();
            }
        }
    }, [focusedIndex, show, isNavigating]);

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
                ref={containerRef}
                $show={show}
                $viewHeight={viewHeight}
                onKeyDown={handleKeyDown}
                tabIndex={show ? 0 : -1}
                role="navigation"
                aria-label="Mobile navigation menu"
                style={{ outline: "none" }}
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
