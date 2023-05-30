import { useRef } from "react";
import { useEventListener } from "../../util/use-event-listener";
import { ElementBoundary, Wrapper } from "./dropdown-wrapper.styles";
import { DropdownSelectorProps } from "./types";

export const DropdownWrapper = ({
    children,
    show,
    error,
    disabled,
    testId,
    onBlur,
    readOnly,
}: DropdownSelectorProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const nodeRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEventListener("mousedown", handleMouseDownEvent, document);

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    function handleMouseDownEvent(event: MouseEvent) {
        if (!disabled) {
            if (nodeRef && (nodeRef.current as any).contains(event.target)) {
                // inside click
                return;
            }
            // outside click
            if (show) {
                onBlur();
            }
        }
    }

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Wrapper>
            <ElementBoundary
                ref={nodeRef}
                error={error && !show}
                disabled={disabled}
                $readOnly={readOnly}
                expanded={show}
                data-testid={testId}
            >
                {children}
            </ElementBoundary>
        </Wrapper>
    );
};
