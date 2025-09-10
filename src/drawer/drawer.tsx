import { CrossIcon } from "@lifesg/react-icons/cross";
import { useEffect, useRef, useState } from "react";
import {
    FloatingFocusManager,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStatus,
} from "@floating-ui/react";
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
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [showOverlay, setShowOverlay] = useState(show);
    const [id] = useState(() => SimpleIdGenerator.generate());
    const initialFocusRef = useRef<HTMLHeadingElement>(null);

    // =========================================================================
    // FLOATING UI CONFIG
    // =========================================================================
    const { context, refs } = useFloating({
        open: show,
        onOpenChange: (open) => {
            if (!open && onClose) {
                onClose();
            }
        },
    });

    const dismiss = useDismiss(context, {
        escapeKey: true,
        outsidePress: false, // defer to Overlay click
    });

    const { getFloatingProps } = useInteractions([dismiss]);

    const { isMounted, status } = useTransitionStatus(context, {
        duration: 800,
    });

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (!show) {
            const timer = setTimeout(() => setShowOverlay(false), 800);
            return () => clearTimeout(timer);
        } else {
            setShowOverlay(true);
        }
    }, [show]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDialogVisibility = (e: React.TransitionEvent) => {
        if (e.propertyName === "visibility" && show) {
            // focus the first element so that the screenreader enters the dialog
            initialFocusRef.current?.focus();
        }
    };

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Overlay
            show={showOverlay}
            enableOverlayClick
            onOverlayClick={onOverlayClick}
        >
            {isMounted ? (
                <FloatingFocusManager
                    context={context}
                    initialFocus={-1}
                    returnFocus={true}
                >
                    <Container
                        ref={refs.setFloating}
                        $show={show}
                        data-status={status}
                        data-testid="drawer"
                        onClick={handleClick}
                        aria-modal
                        role="dialog"
                        aria-labelledby={id}
                        onTransitionEnd={handleDialogVisibility}
                        {...getFloatingProps()}
                        {...otherProps}
                    >
                        <Header>
                            <Heading
                                id={id}
                                ref={initialFocusRef}
                                tabIndex={-1}
                                weight="bold"
                                forwardedAs="h2"
                            >
                                {heading}
                            </Heading>
                        </Header>
                        <Content>{children}</Content>
                        <CloseButton
                            aria-label="Close drawer"
                            onClick={onClose}
                            focusHighlight={false}
                        >
                            <CrossIcon aria-hidden />
                        </CloseButton>
                    </Container>
                </FloatingFocusManager>
            ) : undefined}
        </Overlay>
    );
};
