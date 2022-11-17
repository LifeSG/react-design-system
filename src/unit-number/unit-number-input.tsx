import React, { useEffect, useRef, useState } from "react";
import { StringHelper } from "../util/string-helper";
import {
    BaseInput,
    Container,
    InputContainer,
    UnitNumberDivider,
    YearInput,
} from "../date-input/date-input.style";
import { AddOnContainer } from "../input-group/input-group.style";
import { DateInputProps } from "../date-input/types";

type FieldType = "floor" | "unit" | "none";
type ValueFieldTypes = Exclude<FieldType, "none">;

export interface UnitNumberInputProps extends DateInputProps {
    placeholder?: string;
}

export const UnitNumberInput = ({
    disabled,
    error,
    value,
    onChange,
    onBlur,
    onChangeRaw,
    onBlurRaw,
    ...otherProps
}: UnitNumberInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [floorValue, _setFloorValue] = useState<string>("");
    const [unitValue, _setUnitValue] = useState<string>("");
    const [currentFocus, _setCurrentFocus] = useState<FieldType>("none");

    const nodeRef = useRef<HTMLDivElement>(null);
    const floorInputRef = useRef<HTMLInputElement>(null);
    const unitInputRef = useRef<HTMLInputElement>(null);

    /**
     * Have to use refs to allow the state values to be accessible
     * by the event listener callback functions
     * Reference:
     * https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
     */

    const floorValueStateRef = useRef<string>(floorValue);
    const unitValueStateRef = useRef<string>(unitValue);
    const currentFocusStateRef = useRef<FieldType>(currentFocus);

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================
    const setFloorValue = (data: string) => {
        floorValueStateRef.current = data;
        _setFloorValue(data);
    };

    const setUnitValue = (data: string) => {
        unitValueStateRef.current = data;
        _setUnitValue(data);
    };

    const setCurrentFocus = (data: FieldType) => {
        currentFocusStateRef.current = data;
        _setCurrentFocus(data);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown);

        if (nodeRef.current) {
            nodeRef.current.addEventListener("keydown", handleNodeKeyDown);
        }

        if (floorInputRef.current) {
            floorInputRef.current.addEventListener("keydown", handleKeyDown);
        }
        if (unitInputRef.current) {
            unitInputRef.current.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);

            if (nodeRef.current) {
                nodeRef.current.removeEventListener(
                    "keydown",
                    handleNodeKeyDown
                );
            }

            if (floorInputRef.current) {
                floorInputRef.current.removeEventListener(
                    "keydown",
                    handleKeyDown
                );
            }
            if (unitInputRef.current) {
                unitInputRef.current.removeEventListener(
                    "keydown",
                    handleKeyDown
                );
            }
        };
    }, [currentFocus]);

    useEffect(() => {
        // Auto focus feature
        if (
            currentFocus === "floor" &&
            floorValue.length === 3 &&
            unitInputRef.current
        ) {
            unitInputRef.current.focus();
        }
    }, [floorValue]);

    useEffect(() => {
        formatDisplayValues(value);
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleKeyDown = (event: KeyboardEvent) => {
        /**
         * NOTE: This is the most deterministic way in handling
         * incorrect characters from being entered. The pattern
         * added in the input still allows some special characters
         * to slip through.
         */

        const name = (event.target as any).name;

        const permittableEventCodes = [
            "Tab",
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
        ];

        // form validation for inputs is not supported on ios,
        // hence manual checks needed to prevent special characters input
        const isNotPermittedCharacter =
            !/[0-9]/.test(event.key) &&
            !/[A-Za-z]/.test(event.key) &&
            !permittableEventCodes.includes(event.code);

        if (isNotPermittedCharacter) {
            event.preventDefault();
        }
    };

    const handleMouseDown = (event: MouseEvent) => {
        if (disabled || otherProps.readOnly) {
            return;
        }

        if (nodeRef && (nodeRef.current as any).contains(event.target)) {
            // inside click
            return;
        }
        // outside click
        if (currentFocusStateRef.current !== "none") {
            setCurrentFocus("none");
            performOnBlurHandler();
        }
    };

    const handleNodeKeyDown = (event: KeyboardEvent) => {
        if ((event.target as any).name === "unit" && event.code === "Tab") {
            // About to blur the entire input
            setCurrentFocus("none");
            performOnBlurHandler();
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setCurrentFocus(event.target.name as FieldType);
        event.target.select();
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;
        const targetValue = event.target.value;

        if (targetName === "floor") {
            setFloorValue(
                /^[0-9]$/.test(targetValue)
                    ? StringHelper.padValue(targetValue, true)
                    : targetValue.toLocaleUpperCase()
            );
        } else {
            setUnitValue(targetValue.toLocaleUpperCase());
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        /**
         * NOTE: Unfortunately, the maxLength is not respected for
         * input type=number. Will need to add safeguards.
         * Reference: https://stackoverflow.com/a/18510925
         *
         * Ignore inputs that exceed the respective max length
         */

        if (targetName === "floor") {
            if (event.target.value.length <= 3) {
                setFloorValue(event.target.value.toLocaleUpperCase());
                performOnChangeHandler(event.target.value, targetName);
            }
        } else {
            if (event.target.value.length <= 4) {
                setUnitValue(event.target.value.toLocaleUpperCase());
                performOnChangeHandler(event.target.value, targetName);
            }
        }
    };

    const handleNodeClick = () => {
        if (currentFocus === "none" && floorInputRef.current) {
            floorInputRef.current.focus();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const formatDisplayValues = (value: string | undefined) => {
        if (value === undefined || value === "") {
            setFloorValue("");
            setUnitValue("");
        } else {
            const valueArr = value.split("-");
            if (valueArr.length !== 0) {
                // Valid value
                const floor = valueArr[0];
                const unit = valueArr[1];

                setFloorValue(
                    /^[0-9]$/.test(floor)
                        ? StringHelper.padValue(floor, true)
                        : floor.toLocaleUpperCase()
                );
                setUnitValue(unit.toString());
            }
        }
    };

    const performOnChangeHandler = (changeValue: string, field: FieldType) => {
        if (onChange) {
            const values: Record<ValueFieldTypes, string> = {
                floor: floorValue,
                unit: unitValue,
            };

            // Update the specific field value
            values[field] = changeValue;

            const returnValue = getFormattedValue(values);
            onChange(returnValue);
        }

        if (onChangeRaw) {
            const valuesArr = [
                ...(field === "floor" ? [changeValue] : [floorValue]),
                ...(field === "unit" ? [changeValue] : [unitValue]),
            ];

            onChangeRaw(valuesArr);
        }
    };

    const performOnBlurHandler = () => {
        if (onBlur) {
            const values: Record<ValueFieldTypes, string> = {
                floor: floorValueStateRef.current,
                unit: unitValueStateRef.current,
            };

            const returnValue = getFormattedValue(values);
            onBlur(returnValue);
        }

        if (onBlurRaw) {
            const valuesArr = [
                floorValueStateRef.current,
                unitValueStateRef.current,
            ];

            onBlurRaw(valuesArr);
        }
    };

    const getFormattedValue = (values: Record<ValueFieldTypes, string>) => {
        const valueArr = [values.floor, values.unit]; // eventual format YYYY-MM-DD

        if (values.floor.length >= 1 && values.unit.length === 4) {
            return valueArr.join("-");
        } else if (valueArr.every((value) => value === "")) {
            return "";
        } else {
            return INVALID_VALUE;
        }
    };

    const getPlaceholder = (value: string | undefined) => {
        if (value === undefined || value === "") {
            return ["00", "8888"];
        } else {
            const valueArr = value.split("-");
            return valueArr;
        }
    };

    return (
        <Container
            ref={nodeRef}
            onClick={handleNodeClick}
            disabled={disabled}
            $error={error}
            $readOnly={otherProps.readOnly}
            $addOn={true}
            data-testid={otherProps["data-testid"]}
        >
            <AddOnContainer
                data-testid="addon"
                disabled={disabled}
                $readOnly={otherProps.readOnly}
            >
                #
            </AddOnContainer>
            <InputContainer $addOn={true} $readOnly={otherProps.readOnly}>
                <BaseInput
                    name="floor"
                    maxLength={3}
                    value={floorValue}
                    ref={floorInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={disabled}
                    readOnly={otherProps.readOnly}
                    type="text"
                    pattern="[0-9A-Z]{2}|[0-9A-Z]{3}|[0-9]{2}"
                    data-testid="floor-input"
                    aria-label="floor-input"
                    placeholder={
                        currentFocus === "floor" && !otherProps.readOnly
                            ? ""
                            : getPlaceholder(otherProps.placeholder)[0]
                    }
                />
                <UnitNumberDivider $hide={floorValue.length === 0}>
                    -
                </UnitNumberDivider>
                <YearInput
                    name="unit"
                    maxLength={4}
                    value={unitValue}
                    ref={unitInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={disabled}
                    readOnly={otherProps.readOnly}
                    type="text"
                    pattern="[0-9A-Z]{4}|[0-9A-Z]{4}|[0-9]{4}"
                    data-testid="unit-input"
                    aria-label="unit-input"
                    placeholder={
                        currentFocus === "unit" && !otherProps.readOnly
                            ? ""
                            : getPlaceholder(otherProps.placeholder)[1]
                    }
                />
            </InputContainer>
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid unit number";
