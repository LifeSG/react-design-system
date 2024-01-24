import {
    FloatingPortal,
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from "@floating-ui/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../media";
import { PopoverV2 } from "./popover";
import { TriggerContainer } from "./popover-trigger.styles";
import { PopoverV2TriggerProps } from "./types";

export const PopoverTrigger = ({
    children,
    popoverContent,
    trigger = "click",
    rootNode,
    onPopoverAppear,
    onPopoverDismiss,
    ...otherProps
}: PopoverV2TriggerProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>();
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });
    const { refs, floatingStyles } = useFloating({
        open: visible,
        placement: "top",
        whileElementsMounted: autoUpdate,
        middleware: [offset(16), flip(), shift()],
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
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
        if (nodeRef && !(nodeRef.current as any).contains(event.target)) {
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
    // RENDER
    // =========================================================================
    return (
        <>
            {visible && (
                <FloatingPortal root={rootNode}>
                    <div ref={refs.setFloating} style={{ ...floatingStyles }}>
                        <PopoverV2
                            visible
                            onMobileClose={handlePopoverMobileClose}
                        >
                            {popoverContent}
                        </PopoverV2>
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
