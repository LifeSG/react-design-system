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
    useFocus,
    useInteractions,
    useTransitionStyles,
} from "@floating-ui/react";
import { useRef } from "react";

interface ElementWithDropdownProps {
    enabled: boolean;
    isOpen: boolean;
    onOpen?: () => void | undefined;
    onClose?: () => void | undefined;
    onDismiss?: () => void | undefined;
    renderElement: () => React.ReactNode;
    renderDropdown: () => React.ReactNode;
    zIndex?: number | undefined;
}

export const ElementWithDropdown = ({
    enabled,
    isOpen,
    onOpen,
    onClose,
    onDismiss,
    renderElement,
    renderDropdown,
    zIndex = 50,
}: ElementWithDropdownProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const elementRef = useRef<HTMLDivElement>(null);
    const floatingRef = useRef<HTMLDivElement>(null);
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: (open, event, reason) => {
            if (reason === "escape-key") {
                onDismiss?.();
            } else if (open && !isOpen) {
                onOpen?.();
            } else if (!open && isOpen) {
                onClose?.();
            }
        },
        whileElementsMounted: autoUpdate,
        placement: "bottom-start",
        middleware: [
            offset(16),
            flip(),
            shift({
                limiter: limitShift(),
            }),
            size({
                // match dropdown width to input
                apply({ rects, elements }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                    });
                },
            }),
        ],
    });
    const { isMounted, styles } = useTransitionStyles(context, {
        initial: { opacity: 0 },
        open: { opacity: 1 },
        duration: 300,
    });

    const click = useClick(context, { enabled });
    const focus = useFocus(context, { enabled });
    const dismiss = useDismiss(context, { enabled });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        focus,
        dismiss,
    ]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <>
            <div
                ref={(node) => {
                    elementRef.current = node;
                    refs.setReference(node);
                }}
                {...getReferenceProps()}
            >
                {renderElement()}
            </div>
            {isMounted && (
                <FloatingPortal>
                    <FloatingFocusManager
                        context={context}
                        modal={false}
                        initialFocus={floatingRef}
                        returnFocus={false} // leads to focus trap. parent to handle the final focus state
                    >
                        <div
                            ref={refs.setFloating}
                            style={{ ...floatingStyles, zIndex }}
                            {...getFloatingProps()}
                        >
                            <div
                                ref={floatingRef}
                                style={{ ...styles }}
                                inert={
                                    (styles.opacity as number) < 1
                                        ? ""
                                        : undefined
                                }
                            >
                                {renderDropdown()}
                            </div>
                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </>
    );
};
