import { CrossIcon } from "@lifesg/react-icons/cross";
import { useEffect, useState } from "react";
import { Overlay } from "../overlay";
import {
    CloseButton,
    Container,
    Content,
    Header,
    Heading,
} from "./drawer.styles";
import { DrawerProps } from "./types";

export const Drawer = ({
    children,
    heading,
    show,
    onClose,
    onOverlayClick,
    ...otherProps
}: DrawerProps) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [showOverlay, setShowOverlay] = useState(show);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!show) {
            const timer = setTimeout(() => setShowOverlay(false), 500);
            return () => clearTimeout(timer);
        } else {
            setShowOverlay(true);
        }
    }, [show]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Overlay
            show={showOverlay}
            enableOverlayClick
            onOverlayClick={onOverlayClick}
        >
            <Container
                $show={show}
                data-testid="drawer"
                onClick={handleClick}
                {...otherProps}
            >
                <Header>
                    <CloseButton
                        aria-label="Close drawer"
                        onClick={onClose}
                        focusHighlight={false}
                    >
                        <CrossIcon aria-hidden />
                    </CloseButton>
                    <Heading>{heading}</Heading>
                </Header>
                <Content>{children}</Content>
            </Container>
        </Overlay>
    );
};
