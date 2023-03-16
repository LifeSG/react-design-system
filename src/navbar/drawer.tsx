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
import {
    NavBrandContainer,
    NavLogoContainer,
    NavSeparator,
} from "./navbar.styles";
import { NavbarDrawerProps } from "./types";

const Component = (
    props: NavbarDrawerProps,
    ref: React.Ref<HTMLDivElement>
) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const { show, resources, children, onClose, onBrandClick } = props;
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
    const renderTopBar = () => (
        <TopBar>
            <NavBrandContainer>
                <Brand
                    resources={primary}
                    compress
                    onClick={onBrandClick}
                    data-testid="drawer__brand"
                    type="primary"
                />
                {secondary && (
                    <NavLogoContainer>
                        <NavSeparator />
                        <Brand
                            resources={secondary}
                            compress
                            onClick={onBrandClick}
                            data-testid="drawer__brand-secondary"
                            type="secondary"
                        />
                    </NavLogoContainer>
                )}
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
