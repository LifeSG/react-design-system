import React, { useEffect, useRef, useState } from "react";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";
import { StringHelper, useNextInputState } from "../util";
import { UnitNumberInputProps } from "./types";
import {
    FloorInput,
    HashContainer,
    ReadOnlyContainer,
    ReadOnlyLabel,
    UnitInput,
    UnitNumberDivider,
} from "./unit-number-input.style";

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
    placeholder = "00-8888",
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

    const formatter = (value) =>
        value.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g, "");
    const getNextFloorInputState = useNextInputState({
        ref: floorInputRef,
        formatter,
    });
    const getNextUnitInputState = useNextInputState({
        ref: unitInputRef,
        formatter,
    });

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
        updateValues(value);
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

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;
        const targetValue = event.target.value;

        if (targetName === "floor") {
            setFloorValue(formatInput(targetValue));
        } else {
            setUnitValue(formatInput(targetValue));
        }
    };

    const getNextInputState = (el: HTMLInputElement) => {
        const rawValue = el.value;
        const value = rawValue.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g, "");

        // offset the text caret to compensate for removed characters
        const removed = rawValue.length - value.length;
        const cursorPosition = Math.max(0, el.selectionEnd - removed);

        return { value, cursorPosition };
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        if (targetName === "floor") {
            const { nextValue, updateCursorPosition } =
                getNextFloorInputState();
            updateCursorPosition();
            setFloorValue(nextValue);
            performOnChangeHandler(nextValue, targetName);
        } else {
            const { nextValue, updateCursorPosition } = getNextUnitInputState();
            updateCursorPosition();
            setUnitValue(nextValue);
            performOnChangeHandler(nextValue, targetName);
        }
    };

    const handleNodeClick = () => {
        if (currentFocus === "none" && floorInputRef.current) {
            floorInputRef.current.focus();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * Allow going to the field before if user presses Backspace
         * on an empty field
         */
        if (event.code === "Backspace" || event.key === "Backspace") {
            if (currentFocus === "unit" && unitValue.length === 0) {
                floorInputRef.current.focus();
            }
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const formatInput = (value: string) => {
        return /^[0-9]$/.test(value)
            ? StringHelper.padValue(value, true)
            : value.toLocaleUpperCase();
    };

    const updateValues = (value: string | undefined) => {
        if (value === INVALID_VALUE) {
            return;
        } else if (value === undefined || value.length === 0) {
            setFloorValue("");
            setUnitValue("");
        } else {
            const valueArr = value.split("-");
            if (valueArr.length === 2) {
                // Valid value
                const floor = valueArr[0];
                const unit = valueArr[1];
                setFloorValue(
                    currentFocus === "floor" ? floor : formatInput(floor)
                );
                setUnitValue(
                    currentFocus === "unit" ? unit : formatInput(unit)
                );
            }
        }
    };

    const performOnChangeHandler = (changeValue: string, field: FieldType) => {
        if (!onChange && !onChangeRaw) {
            return;
        }

        const values: Record<ValueFieldTypes, string> = {
            floor: floorValueStateRef.current,
            unit: unitValueStateRef.current,
        };

        // Update the specific field value
        values[field] = changeValue;

        if (onChange) {
            const returnValue = getFormattedValue(values);
            onChange(returnValue);
        }

        if (onChangeRaw) {
            onChangeRaw([values.floor, values.unit]);
        }
    };

    const performOnBlurHandler = () => {
        if (!onBlur && !onBlurRaw) {
            return;
        }

        const values: Record<ValueFieldTypes, string> = {
            floor: formatInput(floorValueStateRef.current),
            unit: formatInput(unitValueStateRef.current),
        };

        if (onBlur) {
            const returnValue = getFormattedValue(values);
            onBlur(returnValue);
        }

        if (onBlurRaw) {
            onBlurRaw([values.floor, values.unit]);
        }
    };

    const getFormattedValue = (values: Record<ValueFieldTypes, string>) => {
        const valueArr = [values.floor, values.unit];

        if (values.floor.length > 0 && values.unit.length > 0) {
            return valueArr.join("-");
        } else if (valueArr.every((value) => value === "")) {
            return "";
        } else {
            return INVALID_VALUE;
        }
    };

    const getPlaceholder = (value: string) => {
        return value.split("-");
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderInputs = () => (
        <>
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
            <UnitNumberDivider $inactive={floorValue.length === 0}>
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
                onKeyDown={handleKeyDown}
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
        </>
    );

    const renderReadOnly = () => {
        const displayValueArr = value.split("-");

        return (
            <ReadOnlyContainer>
                <ReadOnlyLabel>{displayValueArr[0]}</ReadOnlyLabel>
                <UnitNumberDivider>-</UnitNumberDivider>
                <ReadOnlyLabel>{displayValueArr[1]}</ReadOnlyLabel>
            </ReadOnlyContainer>
        );
    };

    return (
        <InputWrapper
            ref={nodeRef}
            onClick={handleNodeClick}
            $disabled={disabled}
            $error={error}
            $readOnly={readOnly}
            data-testid={otherProps["data-testid"]}
        >
            <HashContainer
                data-testid="addon"
                disabled={disabled}
                $readOnly={readOnly}
            >
                #
            </HashContainer>
            {readOnly && value ? renderReadOnly() : renderInputs()}
        </InputWrapper>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid unit number";
