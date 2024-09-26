import {
    FloatingFocusManager,
    FloatingPortal,
    autoUpdate,
    flip,
    limitShift,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useHover,
    useInteractions,
} from "@floating-ui/react";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../media";
import { useFloatingChild } from "../overlay/use-floating-context";
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
    onPopoverAppear,
    onPopoverDismiss,
    ...otherProps
}: PopoverV2TriggerProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [visible, setVisible] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>();
    const popoverRef = useRef<HTMLDivElement>();
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });
    const { refs, floatingStyles, context } = useFloating({
        open: visible,
        placement: position,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(otherProps.offset ?? 16),
            flip(),
            shift({
                limiter: limitShift(),
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
            open: otherProps?.delay?.open ?? 0,
            close: otherProps?.delay?.close ?? 500,
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
            return popoverContent();
        }

        return (
            <PopoverV2 visible onMobileClose={handlePopoverMobileClose}>
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
