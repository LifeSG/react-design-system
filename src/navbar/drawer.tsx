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
            <Brand
                resources={resources}
                onClick={onBrandClick}
                data-testid="drawer__brand"
            />
            <CloseButton onClick={onClose} aria-label="Close nav menu">
                <CloseIcon type="cross" />
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
