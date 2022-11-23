import React, { useEffect, useRef, useState } from "react";
import { StringHelper } from "../util/string-helper";
import {
    Container,
    FloorInput,
    InputContainer,
    UnitInput,
    UnitNumberDivider,
} from "./unit-number-input.style";
import { AddOnContainer } from "../input-group/input-group.style";
import { UnitNumberInputProps } from "./types";

type FieldType = "floor" | "unit" | "none";
type ValueFieldTypes = Exclude<FieldType, "none">;

export const UnitNumberInput = ({
    disabled,
    error,
    value,
    onChange,
    onBlur,
    onChangeRaw,
    onBlurRaw,
    readOnly,
    placeholder,
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

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);

            if (nodeRef.current) {
                nodeRef.current.removeEventListener(
                    "keydown",
                    handleNodeKeyDown
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
    const handleMouseDown = (event: MouseEvent) => {
        if (disabled || readOnly) {
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

    const formatInput = (value: string) => {
        return /^[0-9]$/.test(value)
            ? StringHelper.padValue(value, true)
            : value.toLocaleUpperCase();
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;
        const targetValue = event.target.value;

        if (targetName === "floor") {
            setFloorValue(formatInput(targetValue));
        } else {
            setUnitValue(formatInput(targetValue));
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        let value = event.target.value.toLocaleUpperCase();
        if (/[^0-9A-Za-z]/.test(value)) {
            value = value.replace(/[^0-9A-Za-z]/, "");
        }

        if (targetName === "floor") {
            setFloorValue(value);
            performOnChangeHandler(value, targetName);
        } else {
            setUnitValue(value);
            performOnChangeHandler(value, targetName);
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

                setFloorValue(formatInput(floor));
                setUnitValue(formatInput(unit));
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
        const valueArr = [formatInput(values.floor), formatInput(values.unit)];

        if (values.floor.length > 0 && values.unit.length > 0) {
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
            $readOnly={readOnly}
            data-testid={otherProps["data-testid"]}
        >
            <AddOnContainer
                data-testid="addon"
                disabled={disabled}
                $readOnly={readOnly}
            >
                #
            </AddOnContainer>
            <InputContainer $readOnly={readOnly}>
                <FloorInput
                    name="floor"
                    maxLength={3}
                    value={floorValue}
                    ref={floorInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    type="text"
                    pattern="[0-9A-Z]{2,3}"
                    data-testid="floor-input"
                    aria-label="floor-input"
                    placeholder={
                        currentFocus === "floor" && !readOnly
                            ? ""
                            : getPlaceholder(placeholder)[0]
                    }
                />
                <UnitNumberDivider $hide={floorValue.length === 0}>
                    -
                </UnitNumberDivider>
                <UnitInput
                    name="unit"
                    maxLength={5}
                    value={unitValue}
                    ref={unitInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    type="text"
                    pattern="[0-9A-Z]{2,5}"
                    data-testid="unit-input"
                    aria-label="unit-input"
                    placeholder={
                        currentFocus === "unit" && !readOnly
                            ? ""
                            : getPlaceholder(placeholder)[1]
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
