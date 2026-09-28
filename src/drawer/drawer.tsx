import {
    FloatingFocusManager,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStatus,
} from "@floating-ui/react";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { ThemeContext } from "styled-components";
import { Overlay } from "../overlay";
import { Breakpoint } from "../theme";
import { useId } from "../util";
import {
    CallToAction,
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
    customCallToAction,
    ...otherProps
}: DrawerProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [showOverlay, setShowOverlay] = useState(show);
    // Vertical centre of the heading, used to align the (last-in-DOM,
    // absolutely positioned) close button with it. A custom call-to-action can
    // make the header taller than the heading, so a fixed offset would leave
    // the close button misaligned.
    const [closeButtonTop, setCloseButtonTop] = useState<number>();
    const id = useId();
    const theme = useContext(ThemeContext);
    const stackWidth = Breakpoint["sm-max"]({ theme });
    const initialFocusRef = useRef<HTMLHeadingElement>(null);
    // Observe the header (whose size tracks the drawer's actual width, which
    // consumers may override) to drive layout in one pass: the width decides
    // call-to-action stacking, and each resize re-centres the close button on
    // the heading. offsetTop/offsetHeight are relative to the drawer (the
    // positioned ancestor), so they share the close button's coordinate space.
    const { width: headerWidth, ref: headerRef } =
        useResizeDetector<HTMLDivElement>({
            refreshMode: "throttle",
            refreshRate: 300,
            onResize: () => {
                const headingEl = initialFocusRef.current;
                if (headingEl) {
                    setCloseButtonTop(
                        headingEl.offsetTop + headingEl.offsetHeight / 2
                    );
                }
            },
        });
    const stackCallToAction =
        headerWidth !== undefined && headerWidth <= stackWidth;

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
                        <Header
                            ref={headerRef}
                            $stacked={!!customCallToAction && stackCallToAction}
                        >
                            <Heading
                                id={id}
                                ref={initialFocusRef}
                                tabIndex={-1}
                                weight="bold"
                                forwardedAs="h2"
                            >
                                {heading}
                            </Heading>
                            {customCallToAction ? (
                                <CallToAction $stacked={stackCallToAction}>
                                    {customCallToAction}
                                </CallToAction>
                            ) : null}
                        </Header>
                        <Content>{children}</Content>
                        {/* Rendered last so assistive tech reaches the heading
                            and content before the close button; centred against
                            the heading via its measured position. */}
                        <CloseButton
                            aria-label="Close drawer"
                            onClick={onClose}
                            focusHighlight={false}
                            style={
                                closeButtonTop !== undefined
                                    ? {
                                          top: closeButtonTop,
                                          transform: "translateY(-50%)",
                                      }
                                    : undefined
                            }
                        >
                            <CrossIcon aria-hidden />
                        </CloseButton>
                    </Container>
                </FloatingFocusManager>
            ) : undefined}
        </Overlay>
    );
};
