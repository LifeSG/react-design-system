import React, { useEffect, useRef } from "react";
import { ElementBoundary, Wrapper } from "./input-select.styles";
import { InputSelectWrapperProps } from "./types";

export const InputSelectWrapper = ({
    children,
    show,
    error,
    disabled,
    testId,
    onBlur,
    readOnly,
}: InputSelectWrapperProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const nodeRef = useRef<HTMLDivElement>();
    const showValueRef = useRef<boolean>(show);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDownEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
        };
    }, []);

    useEffect(() => {
        showValueRef.current = show;
    }, [show]);

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const handleMouseDownEvent = (event: MouseEvent) => {
        if (!disabled) {
            if (nodeRef && (nodeRef.current as any).contains(event.target)) {
                // inside click
                return;
            }
            // outside click
            if (showValueRef.current) {
                onBlur();
            }
        }
    };

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
