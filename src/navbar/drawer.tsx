import React, { useEffect, useState } from "react";
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

    const { primary, secondary } = resources;

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
            <Container $show={show} $viewHeight={viewHeight}>
                <Content>
                    {renderTopBar()}
                    {children}
                </Content>
            </Container>
        </Wrapper>
    );
};

export const Drawer = React.forwardRef(Component);
