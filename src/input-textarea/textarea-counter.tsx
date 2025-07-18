import React, { useEffect, useState } from "react";
import { CounterLabel } from "./textara-counter.style";

interface Props {
    value: string | number | readonly string[] | undefined;
    maxLength: number;
    renderCustomCounter?: (
        maxLength: number,
        currentValueLength: number
    ) => React.JSX.Element;
}

export const TextareaCounter = ({
    value,
    maxLength,
    renderCustomCounter,
}: Props): React.JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [counterLabel, setCounterLabel] = useState<
        string | number | readonly string[] | React.JSX.Element
    >("");

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setCounterLabel(getCounterLabel(`${value || ""}`));
    }, [value, maxLength]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getCounterLabel = (value: string | number | readonly string[]) => {
        if (renderCustomCounter) {
            return renderCustomCounter(maxLength, value.toString().length);
        } else {
            const remainingLength = maxLength - value.toString().length;
            if (remainingLength === 1) {
                return `${remainingLength} character left`;
            } else {
                return `${remainingLength.toLocaleString()} characters left`;
            }
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <>
            {React.isValidElement(counterLabel) ? (
                counterLabel
            ) : (
                <CounterLabel data-testid="counter-label">
                    {counterLabel}
                </CounterLabel>
            )}
        </>
    );
};
