import { CrossIcon } from "@lifesg/react-icons/cross";
import { useEffect, useRef, useState } from "react";
import { Overlay } from "../overlay";
import { SimpleIdGenerator } from "../util";
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
    const [id] = useState(() => SimpleIdGenerator.generate());
    const buttonRef = useRef<HTMLButtonElement>();

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
    const handleDialogVisibility = (e: React.TransitionEvent) => {
        if (e.propertyName === "visibility" && show) {
            // focus the first element so that the screenreader enters the dialog
            buttonRef.current.focus();
        }
    };

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
                role="dialog"
                aria-labelledby={id}
                onTransitionEnd={handleDialogVisibility}
                {...otherProps}
            >
                <Header>
                    <CloseButton
                        aria-label="Close drawer"
                        onClick={onClose}
                        focusHighlight={false}
                        ref={buttonRef}
                    >
                        <CrossIcon aria-hidden />
                    </CloseButton>
                    <Heading id={id}>{heading}</Heading>
                </Header>
                <Content>{children}</Content>
            </Container>
        </Overlay>
    );
};