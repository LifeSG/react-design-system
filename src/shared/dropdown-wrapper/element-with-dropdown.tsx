import {
    FloatingFocusManager,
    FloatingPortal,
    OpenChangeReason,
    Placement,
    autoUpdate,
    flip,
    limitShift,
    offset,
    shift,
    size,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStyles,
} from "@floating-ui/react";
import { useRef } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useFloatingChild } from "../../overlay/use-floating-context";
import { DropdownContainer } from "./element-with-dropdown.styles";
import { DropdownAlignmentType } from "./types";

export interface DropdownRenderProps {
    elementWidth: number;
}

interface ElementWithDropdownProps {
    enabled: boolean;
    isOpen: boolean;
    onOpen?: () => void | undefined;
    onClose?: (reason: OpenChangeReason) => void | undefined;
    onDismiss?: () => void | undefined;
    renderElement: () => React.ReactNode;
    renderDropdown: (props: DropdownRenderProps) => React.ReactNode;
    customZIndex?: number | undefined;
    defaultZIndex?: number | undefined;
    clickToToggle?: boolean | undefined;
    /* the distance between the reference element and the dropdown */
    offset?: number | undefined;
    /* the alignment of the dropdown to the left or right of the reference element */
    alignment?: DropdownAlignmentType | undefined;
    fitAvailableHeight?: boolean | undefined;
}

const getFloatingPlacement = (alignment: DropdownAlignmentType): Placement => {
    switch (alignment) {
        case "right":
            return "bottom-end";
        case "left":
        default:
            return "bottom-start";
    }
};

export const ElementWithDropdown = ({
    enabled,
    isOpen,
    onOpen,
    onClose,
    onDismiss,
    renderElement,
    renderDropdown,
    customZIndex,
    defaultZIndex = 50,
    clickToToggle = false,
    offset: dropdownOffset = 0,
    alignment = "left",
    fitAvailableHeight,
}: ElementWithDropdownProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const elementRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { width: referenceWidth } = useResizeDetector({
        targetRef: elementRef,
        handleHeight: false,
    });
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: (open, _event, reason) => {
            if (reason === "escape-key") {
                onDismiss?.();
            } else if (open && !isOpen) {
                onOpen?.();
            } else if (!open && isOpen) {
                onClose?.(reason);
            }
        },
        whileElementsMounted: autoUpdate,
        placement: getFloatingPlacement(alignment),
        middleware: [
            offset(dropdownOffset),
            flip(),
            shift({
                limiter: limitShift(),
            }),
            size({
                // shrink to fit available vertical space
                apply({ availableHeight }) {
                    if (!dropdownRef.current) {
                        return;
                    }
                    Object.assign(dropdownRef.current.style, {
                        maxHeight: fitAvailableHeight
                            ? `${availableHeight}px`
                            : undefined,
                        overflowY: fitAvailableHeight ? "hidden" : undefined,
                    });
                },
            }),
        ],
    });
    const parentZIndex = useFloatingChild();

    const { isMounted, styles } = useTransitionStyles(context, {
        initial: { opacity: 0 },
        open: { opacity: 1 },
        duration: 300,
    });

    const click = useClick(context, { enabled, toggle: clickToToggle });
    const dismiss = useDismiss(context, { enabled });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
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
                        initialFocus={dropdownRef}
                        returnFocus={false} // leads to focus trap. parent to handle the final focus state
                    >
                        <div
                            ref={refs.setFloating}
                            style={{
                                ...floatingStyles,
                                zIndex:
                                    customZIndex ??
                                    parentZIndex ??
                                    defaultZIndex,
                            }}
                            {...getFloatingProps()}
                        >
                            <DropdownContainer
                                ref={dropdownRef}
                                style={{ ...styles }}
                                inert={
                                    (styles.opacity as number) < 1
                                        ? ""
                                        : undefined
                                }
                            >
                                {renderDropdown({
                                    elementWidth: referenceWidth,
                                })}
                            </DropdownContainer>
                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </>
    );
};
