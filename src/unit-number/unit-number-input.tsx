import React, { useEffect, useRef, useState } from "react";
import { VisuallyHidden, concatIds } from "../shared/accessibility";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";
import { SimpleIdGenerator, StringHelper, useNextInputState } from "../util";
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
    autoComplete,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    ...otherProps
}: UnitNumberInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [floorValue, _setFloorValue] = useState<string>("");
    const [unitValue, _setUnitValue] = useState<string>("");
    const [currentFocus, _setCurrentFocus] = useState<FieldType>("none");
    const [liveMessage, setLiveMessage] = useState<string>("");
    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());
    const floorLabelId = `${internalId}-floor-label`;
    const unitLabelId = `${internalId}-unit-label`;
    const floorInstructionId = `${internalId}-floor-instruction`;
    const unitInstructionId = `${internalId}-unit-instruction`;
    const liveMessageId = `${internalId}-live-message`;

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

    const formatter = (value: string) =>
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

    useEffect(() => {
        let msg = "";
        const floorMsg = formatPhraseWithPrefix("Hash", floorValue);
        const unitMsg = formatPhraseWithPrefix("Dash", unitValue);
        switch (currentFocus) {
            case "floor":
                msg = floorMsg;
                break;
            case "unit":
                msg = floorValue ? [floorMsg, unitMsg].join(" ") : unitMsg;
                break;
            default:
                msg = "";
        }
        setLiveMessage(msg);
    }, [currentFocus, floorValue, unitValue]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setCurrentFocus(event.target.name as FieldType);
        event.target.select();
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;
        const targetValue = event.target.value;
        const formattedInput = formatInput(targetValue);

        if (targetName === "floor") {
            setFloorValue(formattedInput);
            if (formattedInput !== floorValue) {
                performOnChangeHandler(formattedInput, targetName);
            }
        } else if (targetName === "unit") {
            setUnitValue(formattedInput);
            if (formattedInput !== unitValue) {
                performOnChangeHandler(formattedInput, targetName);
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        if (targetName === "floor") {
            const nextInputState = getNextFloorInputState();
            if (!nextInputState) return;

            const { nextValue, updateCaretPosition } = nextInputState;
            updateCaretPosition();
            setFloorValue(nextValue);
            performOnChangeHandler(nextValue, targetName);
        } else if (targetName === "unit") {
            const nextInputState = getNextUnitInputState();
            if (!nextInputState) return;

            const { nextValue, updateCaretPosition } = nextInputState;
            updateCaretPosition();
            setUnitValue(nextValue);
            performOnChangeHandler(nextValue, targetName);
        }
    };

    const handleNodeClick = () => {
        if (currentFocus === "none" && floorInputRef.current) {
            floorInputRef.current.focus();
        }
    };

    const handleNodeBlur = (event: React.FocusEvent) => {
        if (nodeRef.current && nodeRef.current.contains(event.relatedTarget)) {
            // internal element received focus
            return;
        }
        if (currentFocusStateRef.current !== "none") {
            setCurrentFocus("none");
            performOnBlurHandler();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * Allow going to the field before if user presses Backspace
         * on an empty field
         */
        if (event.code === "Backspace" || event.key === "Backspace") {
            if (currentFocus === "unit" && unitValue.length === 0) {
                floorInputRef.current?.focus();
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

    const performOnChangeHandler = (
        changeValue: string,
        field: ValueFieldTypes
    ) => {
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

    const formatPhraseWithPrefix = (prefix: "Hash" | "Dash", v: string) => {
        return v ? `${prefix} ${Array.from(v).join(" ")}` : "";
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
                aria-labelledby={concatIds(ariaLabelledBy, floorLabelId)}
                aria-describedby={concatIds(
                    ariaDescribedBy,
                    floorInstructionId,
                    liveMessageId
                )}
                aria-invalid={ariaInvalid}
                placeholder={
                    currentFocus === "floor" && !readOnly
                        ? ""
                        : getPlaceholder(placeholder)[0]
                }
                autoComplete={autoComplete}
                styleType="no-border"
            />
            <VisuallyHidden id={floorInstructionId}>
                {readOnly || disabled
                    ? "Floor number - This field cannot be changed"
                    : "Enter floor number"}
            </VisuallyHidden>
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
                aria-labelledby={concatIds(ariaLabelledBy, unitLabelId)}
                aria-describedby={concatIds(
                    ariaDescribedBy,
                    unitInstructionId,
                    liveMessageId
                )}
                aria-invalid={ariaInvalid}
                placeholder={
                    currentFocus === "unit" && !readOnly
                        ? ""
                        : getPlaceholder(placeholder)[1]
                }
                autoComplete={autoComplete}
                styleType="no-border"
            />
            <VisuallyHidden id={unitInstructionId}>
                {readOnly || disabled
                    ? "Unit number - This field cannot be changed"
                    : "Enter unit number"}
            </VisuallyHidden>
            {/** Live message for AT reader to read with the combination of prefix and current value for both floor input and unit input */}
            <VisuallyHidden id={liveMessageId} aria-live="polite">
                {liveMessage}
            </VisuallyHidden>
        </>
    );

    const renderReadOnly = (displayValue: string) => {
        const displayValueArr = displayValue.split("-");
        const liveMessageForReadOnly = [
            formatPhraseWithPrefix("Dash", displayValueArr[0]),
            formatPhraseWithPrefix("Hash", displayValueArr[1]),
        ].join(" ");

        return (
            <ReadOnlyContainer
                data-testid="readonly-display"
                tabIndex={0}
                role="textbox"
                aria-readonly
                aria-labelledby={ariaLabelledBy}
                aria-describedby={ariaDescribedBy}
                aria-invalid={ariaInvalid}
            >
                <ReadOnlyLabel>{displayValueArr[0]}</ReadOnlyLabel>
                <UnitNumberDivider>-</UnitNumberDivider>
                <ReadOnlyLabel>{displayValueArr[1]}</ReadOnlyLabel>
                <VisuallyHidden>{liveMessageForReadOnly}</VisuallyHidden>
            </ReadOnlyContainer>
        );
    };

    return (
        <InputWrapper
            {...otherProps}
            ref={nodeRef}
            onClick={handleNodeClick}
            $disabled={disabled}
            $error={error}
            $readOnly={readOnly}
            tabIndex={-1}
            onBlur={handleNodeBlur}
        >
            <HashContainer
                data-testid="addon"
                $disabled={disabled}
                $readOnly={readOnly}
            >
                #
            </HashContainer>
            {readOnly && value ? renderReadOnly(value) : renderInputs()}
        </InputWrapper>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid unit number";
