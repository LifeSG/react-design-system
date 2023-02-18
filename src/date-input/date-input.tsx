import { Container } from "./date-input.style";
import { StandAloneInput } from "./stand-alone-input";
import { DateInputProps } from "./types";

export const DateInput = ({
    disabled,
    error,
    value,
    onChange,
    onBlur,
    onChangeRaw,
    onBlurRaw,
    readOnly,
    id,
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================

    // =============================================================================
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Container
            disabled={disabled}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            $readOnly={readOnly}
        >
            <StandAloneInput
                disabled={disabled}
                onBlur={onBlur}
                onBlurRaw={onBlurRaw}
                onChange={onChange}
                onChangeRaw={onChangeRaw}
                readOnly={readOnly}
                names={["start-day", "start-month", "start-year"]}
                value={value}
            />
        </Container>
    );
};
