import dayjs from "dayjs";
import { useState } from "react";
import { ArrowRangeIcon, ArrowRight, Container } from "./date-input.style";
import { StandAloneInput } from "./stand-alone-input";
import { ChangeValueTypes, DateInputProps } from "./types";

export type InputType = "start" | "end";

export const DateInput = ({
    disabled,
    error,
    value,
    endValue,
    onChange,
    onBlur,
    onChangeRaw,
    onBlurRaw,
    readOnly,
    id,
    variant = "single",
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [inputValues, setInputValues] = useState<ChangeValueTypes>({});

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================

    // =============================================================================
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleChange = (value: ChangeValueTypes) => {
        const updatedValue = { ...inputValues, ...value };

        setInputValues(updatedValue);
        performOnChangeHandler(updatedValue);
    };

    const handleBlur = () => {
        performOnBlurHandler();
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnChangeHandler = (values: ChangeValueTypes) => {
        if (onChange) {
            const returnValue = getFormattedValue(values);

            onChange(returnValue);
        }

        if (onChangeRaw) {
            onChangeRaw(values);
        }
    };

    const performOnBlurHandler = () => {
        if (onBlur) {
            const returnValue = getFormattedValue(inputValues);

            onBlur(returnValue);
        }

        if (onBlurRaw) {
            onBlurRaw(inputValues);
        }
    };

    const getFormattedValue = (values: ChangeValueTypes) => {
        const result = Object.keys(values).reduce((_, cur) => {
            const valueArr = Object.values(values[cur]) as any;

            if (
                valueArr[0].length === 4 &&
                valueArr[1].length >= 1 &&
                valueArr[2].length >= 1
            ) {
                const formatted = dayjs(valueArr.join("-")).format(
                    "DD-MM-YYYY"
                );

                return { [cur]: formatted };
            } else if (valueArr.every((value) => value === "")) {
                return { [cur]: "" };
            } else {
                return { [cur]: INVALID_VALUE };
            }
        }, {});

        return result;
    };

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
            $variant={variant}
            onBlur={handleBlur}
            {...otherProps}
        >
            <StandAloneInput
                disabled={disabled}
                onChange={handleChange}
                readOnly={readOnly}
                names={["start-day", "start-month", "start-year"]}
                value={value}
                variant={variant === "range" ? "start" : "single"}
            />
            {variant === "range" && (
                <>
                    <ArrowRangeIcon tabIndex={-1}>
                        <ArrowRight />
                    </ArrowRangeIcon>
                    <StandAloneInput
                        disabled={disabled}
                        onChange={handleChange}
                        readOnly={readOnly}
                        names={["end-day", "end-month", "end-year"]}
                        value={endValue}
                        variant={variant}
                    />
                </>
            )}
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid Date";
