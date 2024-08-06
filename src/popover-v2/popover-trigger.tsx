import {
    FloatingPortal,
    autoUpdate,
    flip,
    limitShift,
    offset,
    shift,
    useFloating,
} from "@floating-ui/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { v2_MediaWidths } from "../v2_media";
import { PopoverV2 } from "./popover";
import { TriggerContainer } from "./popover-trigger.styles";
import { PopoverV2TriggerProps } from "./types";

export const PopoverTrigger = ({
    children,
    popoverContent,
    trigger = "click",
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
        maxWidth: v2_MediaWidths.mobileL,
    });
    const { refs, floatingStyles } = useFloating({
        open: visible,
        placement: position,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(16),
            flip(),
            shift({
                limiter: limitShift(),
            }),
        ],
    });

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        // NOTE: Do not add mouse down event if it's mobile
        if (isMobile || !visible) {
            return;
        }
        document.addEventListener("mousedown", handleMouseDownEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
        };
    }, [visible]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleMouseDownEvent = (event: MouseEvent) => {
        if (
            !nodeRef.current?.contains(event.target as Node) &&
            !popoverRef.current?.contains(event.target as Node)
        ) {
            // outside click
            setVisible(false);

            if (onPopoverDismiss) onPopoverDismiss();
        }
    };

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        if (trigger === "click" || isMobile) {
            setVisible(!visible);

            if (!visible && onPopoverAppear) onPopoverAppear();
            if (visible && onPopoverDismiss) onPopoverDismiss();
        }
    };

    const handleOnMouseEnter = () => {
        if (trigger === "hover" && !isMobile) {
            setVisible(true);
        }
    };

    const handleOnMouseLeave = () => {
        if (trigger === "hover" && visible && !isMobile) {
            setVisible(false);
        }
    };

    const handlePopoverMobileClose = () => {
        setVisible(false);
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
            {visible && (
                <FloatingPortal root={rootNode}>
                    <div
                        ref={(node) => {
                            popoverRef.current = node;
                            refs.setFloating(node);
                        }}
                        style={{ ...floatingStyles, zIndex }}
                    >
                        {renderPopover()}
                    </div>
                </FloatingPortal>
            )}
            <TriggerContainer
                ref={(node) => {
                    nodeRef.current = node;
                    refs.setReference(node);
                }}
                onClick={handleClick}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                {...otherProps}
            >
                {children}
            </TriggerContainer>
        </>
    );
};
