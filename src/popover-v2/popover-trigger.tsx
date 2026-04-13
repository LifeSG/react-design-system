import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingPortal,
    limitShift,
    offset,
    shift,
    size,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
} from "@floating-ui/react";
import clsx from "clsx";
import type React from "react";
import { useRef, useState } from "react";

import { useFloatingChild } from "../overlay/use-floating-context";
import {
    Breakpoint,
    useDesignToken,
    useInheritedThemeScope,
    useSafeMaxWidthMediaQuery,
} from "../theme";
import { SimpleIdGenerator } from "../util";
import { PopoverV2 } from "./popover";
import * as styles from "./popover-trigger.styles";
import type { PopoverV2TriggerProps, PopoverV2TriggerType } from "./types";

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
    popoverAriaLabel,
    enableFlip = true,
    enableResize = false,
    overflow = "auto",
    triggerOnFocus = false,
    isModal = true,
    className,
    ...otherProps
}: PopoverV2TriggerProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [visible, setVisible] = useState<boolean>(false);
    const nodeRef = useRef<HTMLElement | null>(null);
    const popoverRef = useRef<HTMLElement | null>(null);
    const mobileBreakpoint = useDesignToken(Breakpoint["sm-max"]);
    const isMobile = useSafeMaxWidthMediaQuery(mobileBreakpoint);
    const [availableHeight, setAvailableHeight] = useState(0);
    const internalId = useRef(SimpleIdGenerator.generate());
    const popoverContainerId = `${internalId.current}-popover`;

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
    const { themeProps, themeStyle } = useInheritedThemeScope(visible);

    const trigger: PopoverV2TriggerType = isMobile ? "click" : _trigger;
    const isTooltip = trigger === "hover";

    const click = useClick(context, {
        // allow trigger by Space/Enter, but disable mouse click in hover mode
        ignoreMouse: isTooltip,
    });

    const dismiss = useDismiss(context);

    const hover = useHover(context, {
        enabled: isTooltip,
        // short window to enter the floating element without it closing
        delay: {
            open: delay?.open ?? 0,
            close: delay?.close ?? 500,
        },
    });

    const focus = useFocus(context, {
        enabled: triggerOnFocus,
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        hover,
        focus,
    ]);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const isFocusInside = (node: Node | null) => {
        if (!node) return false;

        if (
            node instanceof HTMLElement &&
            node.hasAttribute("data-floating-ui-focus-guard")
        ) {
            return true;
        }

        const refEl = nodeRef.current;
        const floatingEl = popoverRef.current?.parentElement;

        return (
            (!!refEl && refEl.contains(node)) ||
            (!!floatingEl && floatingEl.contains(node))
        );
    };

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

    const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
        const next =
            (e.relatedTarget as Node | null) ??
            (document.activeElement as Node | null);

        if (next && isFocusInside(next)) return;

        setVisible(false);
        handleVisibilityChange(false);
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
                ariaLabel={popoverAriaLabel}
                id={popoverContainerId}
            >
                {popoverContent}
            </PopoverV2>
        );
    };

    return (
        <>
            <div
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
                className={clsx(styles.triggerContainer, className)}
            >
                {children}
            </div>
            {visible && (
                <FloatingPortal root={rootNode}>
                    <FloatingFocusManager
                        context={context}
                        {...(!isModal && {
                            initialFocus: -1,
                            returnFocus: false,
                            modal: false,
                        })}
                    >
                        <div
                            ref={(node) => {
                                popoverRef.current = node;
                                refs.setFloating(node);
                            }}
                            {...themeProps}
                            onBlur={handleBlur}
                            style={{
                                ...themeStyle,
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
