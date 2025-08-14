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
    const initialFocusRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (show) {
            setShowOverlay(true);
            const drawerElement = containerRef.current;
            if (!drawerElement) return;
            drawerElement.addEventListener("keydown", handleTabKeyPress);
            drawerElement.addEventListener("keydown", handleEscapeKeyPress);

            return () => {
                drawerElement.removeEventListener("keydown", handleTabKeyPress);
                drawerElement.removeEventListener(
                    "keydown",
                    handleEscapeKeyPress
                );
            };
        } else {
            const timer = setTimeout(() => setShowOverlay(false), 500);
            return () => clearTimeout(timer);
        }
    }, [show]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDialogVisibility = (e: React.TransitionEvent) => {
        if (e.propertyName === "visibility" && show) {
            // focus the first element so that the screenreader enters the dialog
            initialFocusRef.current?.focus();
        }
    };

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const handleTabKeyPress = (e: KeyboardEvent) => {
        const drawerElement = containerRef.current;
        if (!drawerElement) return; 
        
        //add focusable HTML elements
        const focusableElements = drawerElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
            focusableElements.length - 1
        ] as HTMLElement;

        if (e.key === "Tab") {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    };

    const handleEscapeKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Escape" && onClose) {
            onClose();
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Overlay
            show={showOverlay}
            enableOverlayClick
            onOverlayClick={onOverlayClick}
            childRef={containerRef}
        >
            <Container
                $show={show}
                data-testid="drawer"
                onClick={handleClick}
                aria-modal="true"
                role="dialog"
                aria-labelledby={id}
                onTransitionEnd={handleDialogVisibility}
                {...otherProps}
            >
                <Header>
                    <Heading
                        id={id}
                        ref={initialFocusRef}
                        tabIndex={-1}
                        weight="bold"
                    >
                        {heading}
                    </Heading>
                </Header>
                <Content>{children}</Content>
                <CloseButton // last element for tab focus order
                    aria-label="Close drawer"
                    onClick={onClose}
                    focusHighlight={false}
                >
                    <CrossIcon aria-hidden />
                </CloseButton>
            </Container>
        </Overlay>
    );
};
