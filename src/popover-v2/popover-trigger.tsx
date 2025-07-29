import {
    FloatingFocusManager,
    FloatingPortal,
    autoUpdate,
    flip,
    limitShift,
    offset,
    shift,
    size,
    useClick,
    useDismiss,
    useFloating,
    useHover,
    useInteractions,
} from "@floating-ui/react";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { useFloatingChild } from "../overlay/use-floating-context";
import { Breakpoint } from "../theme";
import { PopoverV2 } from "./popover";
import { TriggerContainer } from "./popover-trigger.styles";
import { PopoverV2TriggerProps, PopoverV2TriggerType } from "./types";

export const PopoverTrigger = ({
    children,
    popoverContent,
    trigger: _trigger = "click",
    position = "top",
    zIndex,
    rootNode,
    customOffset,
    delay,
    onPopoverAppear,
    onPopoverDismiss,
    enableFlip = true,
    enableResize = false,
    overflow = "auto",
    ...otherProps
}: PopoverV2TriggerProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [visible, setVisible] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
    const [availableHeight, setAvailableHeight] = useState(0);

    const { refs, floatingStyles, context } = useFloating({
        open: visible,
        placement: position,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(customOffset ?? 16),
            enableFlip && flip(),
            shift({
                limiter: limitShift(),
            }),
            enableResize &&
                size({
                    apply({ availableHeight }) {
                        setAvailableHeight(availableHeight);
                    },
                }),
        ],
        onOpenChange: (isOpen) => {
            setVisible(isOpen);

            // this callback is triggering twice on hover, the check here prevents extra calls
            if (visible !== isOpen) {
                handleVisibilityChange(isOpen);
            }
        },
    });
    const parentZIndex = useFloatingChild();

    const trigger: PopoverV2TriggerType = isMobile ? "click" : _trigger;
    const click = useClick(context, {
        // allow trigger by Space/Enter, but disable mouse click in hover mode
        ignoreMouse: trigger === "hover",
    });
    const dismiss = useDismiss(context);
    const hover = useHover(context, {
        enabled: trigger === "hover",
        // short window to enter the floating element without it closing
        delay: {
            open: delay?.open ?? 0,
            close: delay?.close ?? 500,
        },
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        hover,
    ]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handlePopoverMobileClose = () => {
        setVisible(false);
        handleVisibilityChange(false);
    };

    const handleVisibilityChange = (nextVisible: boolean) => {
        if (nextVisible && onPopoverAppear) onPopoverAppear();
        if (!nextVisible && onPopoverDismiss) onPopoverDismiss();
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderPopover = () => {
        if (typeof popoverContent === "function") {
            return popoverContent(
                enableResize ? { maxHeight: availableHeight, overflow } : {}
            );
        }

        return (
            <PopoverV2
                visible
                onMobileClose={handlePopoverMobileClose}
                maxHeight={enableResize ? availableHeight : undefined}
                overflow={enableResize ? overflow : undefined}
            >
                {popoverContent}
            </PopoverV2>
        );
    };

    return (
        <>
            <TriggerContainer
                ref={(node) => {
                    nodeRef.current = node;
                    refs.setReference(node);
                }}
                {...getReferenceProps({
                    onClick: (event) => {
                        // prevent popover interaction from triggering click events on parents
                        event.stopPropagation();
                        event.preventDefault();
                    },
                })}
                {...otherProps}
            >
                {children}
            </TriggerContainer>
            {visible && (
                <FloatingPortal root={rootNode}>
                    <FloatingFocusManager context={context}>
                        <div
                            ref={(node) => {
                                popoverRef.current = node;
                                refs.setFloating(node);
                            }}
                            style={{
                                ...floatingStyles,
                                outline: "none",
                                zIndex: zIndex ?? parentZIndex,
                            }}
                            {...getFloatingProps()}
                        >
                            {renderPopover()}
                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </>
    );
};
