import { useEffect, useRef, useState } from "react";
import { RangeInputInnerContainer } from "../../shared/range-input-inner-container";
import { SelectorInput, TimeContainer, Wrapper } from "../common.styles";
import { TimeHelper } from "../../util/time-helper";
import { TimeRangePickerProps, TimeRangePickerValue } from "../types";
import { TimepickerDropdown } from "../../shared/timepicker-dropdown/timepicker-dropdown";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../../shared/dropdown-wrapper";
import { SimpleIdGenerator } from "../../util";
import { concatIds } from "../../shared/accessibility";

type Active = "start" | "end" | "none";

export const DialPicker = ({
    id,
    disabled = false,
    error,
    value,
    format = "24hr",
    readOnly,
    onChange,
    onFocus,
    onBlur,
    alignment = "left",
    dropdownZIndex,
    dropdownRootNode,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    ...otherProps
}: TimeRangePickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<Active>("none");
    const [startTimeVal, setStartTimeVal] = useState("");
    const [endTimeVal, setEndTimeVal] = useState("");
    const [focused, setFocused] = useState(false);

    const enabled = !readOnly && !disabled;
    const nodeRef = useRef<HTMLDivElement>(null);
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const startLabelId = `${internalId}-start-label`;
    const endLabelId = `${internalId}-end-label`;

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getDropdownAriaLabel = () => {
        if (active === "start") {
            return "Selecting for: Start time";
        }

        if (active === "end") {
            return "Selecting for: End time";
        }

        return undefined;
    };

    const getInputLabelledBy = (type: Exclude<Active, "none">) => {
        return concatIds(
            ariaLabelledBy,
            type === "start" ? startLabelId : endLabelId
        );
    };

    const getInputDescribedBy = () => {
        return concatIds(ariaDescribedBy);
    };
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (value) {
            setStartTimeVal(value.start);
            setEndTimeVal(value.end);
        }
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOpen = (next: Exclude<Active, "none">) => {
        if (!enabled) return;
        if (!focused && !isOpen) onFocus?.();
        setFocused(true);
        setActive(next);
        setIsOpen(true);
    };

    const handleClose = (opts?: {
        keepFocus?: boolean;
        triggerBlur?: boolean;
    }) => {
        const keepFocus = !!opts?.keepFocus;
        const triggerBlur = opts?.triggerBlur ?? !keepFocus;

        setIsOpen(false);
        setActive("none");
        setFocused(keepFocus);

        if (triggerBlur) onBlur?.();

        if (keepFocus) nodeRef.current?.focus();
    };

    const handleContainerBlur = (
        event: React.FocusEvent<HTMLDivElement, Element>
    ) => {
        if (!focused || isOpen) return;

        const target = event.relatedTarget as HTMLElement | null;

        const isFloatingElement =
            target?.matches?.("[data-floating-ui-focusable]") ||
            target?.matches?.("[data-floating-ui-focus-guard]");
        const isInsideNode = !!(target && nodeRef.current?.contains(target));

        if (!isInsideNode && !isFloatingElement) {
            setFocused(false);
            onBlur?.();
        }
    };

    const handleStartTime = (value: string) => {
        setStartTimeVal(value);
        onChange?.({ start: value, end: endTimeVal } as TimeRangePickerValue);

        setActive("end");
        setIsOpen(true);
        setFocused(true);
    };

    const handleEndTime = (value: string) => {
        setEndTimeVal(value);
        onChange?.({ start: startTimeVal, end: value } as TimeRangePickerValue);

        if (startTimeVal === "") {
            setActive("start");
            setIsOpen(true);
            setFocused(true);
        } else {
            handleClose({ keepFocus: true });
        }
    };

    const renderElement = () => (
        <TimeContainer
            ref={nodeRef}
            tabIndex={-1}
            onBlur={handleContainerBlur}
            data-testid="timepicker-container"
            role="group"
            $disabled={disabled}
            $error={error}
            $readOnly={readOnly}
            $focused={focused}
        >
            <RangeInputInnerContainer error={error} currentActive={active}>
                <SelectorInput
                    onFocus={() => handleOpen("start")}
                    onClick={() => handleOpen("start")}
                    readOnly
                    placeholder="From"
                    value={TimeHelper.formatDisplayValue(startTimeVal, format)}
                    data-testid={
                        otherProps["data-testid"]
                            ? `${otherProps["data-testid"]}-timepicker-selector-from`
                            : "timepicker-selector-from"
                    }
                    role="combobox"
                    aria-expanded={!disabled && !readOnly ? isOpen : false}
                    aria-invalid={error || ariaInvalid || undefined}
                    aria-disabled={disabled || undefined}
                    aria-readonly={readOnly || undefined}
                    aria-labelledby={getInputLabelledBy("start")}
                    aria-describedby={getInputDescribedBy()}
                />
                <SelectorInput
                    onClick={() => handleOpen("end")}
                    readOnly
                    placeholder="To"
                    value={TimeHelper.formatDisplayValue(endTimeVal, format)}
                    data-testid={
                        otherProps["data-testid"]
                            ? `${otherProps["data-testid"]}-timepicker-selector-to`
                            : "timepicker-selector-to"
                    }
                    role="combobox"
                    aria-expanded={!disabled && !readOnly ? isOpen : false}
                    aria-invalid={error || ariaInvalid || undefined}
                    aria-disabled={disabled || undefined}
                    aria-readonly={readOnly || undefined}
                    aria-labelledby={getInputLabelledBy("end")}
                    aria-describedby={getInputDescribedBy()}
                />
            </RangeInputInnerContainer>
        </TimeContainer>
    );

    const renderDropdown = ({
        styles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => {
        if (!isOpen) return null;

        return (
            <div
                ref={setFloatingRef}
                style={styles}
                role="dialog"
                key={active}
                aria-label={getDropdownAriaLabel()}
                {...getFloatingProps()}
            >
                {active === "start" && (
                    <TimepickerDropdown
                        id={id ? `${id}-start` : undefined}
                        show
                        value={startTimeVal}
                        format={format}
                        onCancel={() => handleClose({ keepFocus: true })}
                        onChange={handleStartTime}
                    />
                )}
                {active === "end" && (
                    <TimepickerDropdown
                        id={id ? `${id}-end` : undefined}
                        show
                        value={endTimeVal}
                        format={format}
                        onCancel={() => handleClose({ keepFocus: false })}
                        onChange={handleEndTime}
                    />
                )}
            </div>
        );
    };

    return (
        <Wrapper id={id} {...otherProps}>
            <ElementWithDropdown
                enabled={enabled}
                isOpen={isOpen}
                renderElement={renderElement}
                renderDropdown={renderDropdown}
                onClose={() => handleClose({ keepFocus: false })}
                onDismiss={() => handleClose({ keepFocus: true })}
                clickToToggle={false}
                offset={8}
                alignment={alignment}
                customZIndex={dropdownZIndex}
                rootNode={dropdownRootNode}
            />
        </Wrapper>
    );
};
