import { useEffect, useState } from "react";
import { RangeInputInnerContainer } from "../../shared/range-input-inner-container";
import { SelectorInput, TimeContainer, Wrapper } from "../common.styles";
import { TimeHelper } from "../../util/time-helper";
import { Active, TimeRangePickerProps, TimeRangePickerValue } from "../types";
import { TimepickerDropdown } from "../../shared/timepicker-dropdown/timepicker-dropdown";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../../shared/dropdown-wrapper";

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
    ...otherProps
}: TimeRangePickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<Active>("none");
    const [startTimeVal, setStartTimeVal] = useState("");
    const [endTimeVal, setEndTimeVal] = useState("");

    const enabled = !readOnly && !disabled;

    const openStart = () => {
        if (!enabled) return;
        setActive("start");
        if (!isOpen) onFocus?.();
        setIsOpen(true);
    };

    const openEnd = () => {
        if (!enabled) return;
        setActive("end");
        if (!isOpen) onFocus?.();
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setActive("none");
        onBlur?.();
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
    const handleStartTime = (v: string) => {
        setStartTimeVal(v);
        onChange?.({ start: v, end: endTimeVal } as TimeRangePickerValue);

        // move to end without closing dropdown (same behavior as before)
        setActive("end");
        setIsOpen(true);
    };

    const handleEndTime = (v: string) => {
        setEndTimeVal(v);
        onChange?.({ start: startTimeVal, end: v } as TimeRangePickerValue);

        if (startTimeVal === "") {
            setActive("start");
            setIsOpen(true);
        } else {
            close();
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderElement = () => (
        <Wrapper id={id} {...otherProps}>
            <TimeContainer
                $disabled={disabled}
                $error={error}
                $readOnly={readOnly}
            >
                <RangeInputInnerContainer error={error} currentActive={active}>
                    <SelectorInput
                        onFocus={openStart}
                        readOnly
                        placeholder="From"
                        value={TimeHelper.formatDisplayValue(
                            startTimeVal,
                            format
                        )}
                        disabled={disabled}
                        data-testid={
                            otherProps["data-testid"]
                                ? `${otherProps["data-testid"]}-timepicker-selector-from`
                                : "timepicker-selector-from"
                        }
                    />
                    <SelectorInput
                        onFocus={openEnd}
                        readOnly
                        placeholder="To"
                        value={TimeHelper.formatDisplayValue(
                            endTimeVal,
                            format
                        )}
                        disabled={disabled}
                        data-testid={
                            otherProps["data-testid"]
                                ? `${otherProps["data-testid"]}-timepicker-selector-to`
                                : "timepicker-selector-to"
                        }
                    />
                </RangeInputInnerContainer>
            </TimeContainer>
        </Wrapper>
    );

    const renderDropdown = ({
        styles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => {
        if (!isOpen) return null;

        const showStart = active === "start";
        const showEnd = active === "end";

        return (
            <div ref={setFloatingRef} style={styles} {...getFloatingProps()}>
                {showStart && (
                    <TimepickerDropdown
                        id={id}
                        show
                        value={startTimeVal}
                        format={format}
                        onCancel={close}
                        onChange={handleStartTime}
                    />
                )}
                {showEnd && (
                    <TimepickerDropdown
                        id={id}
                        show
                        value={endTimeVal}
                        format={format}
                        onCancel={close}
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
                onClose={() => close()}
                onDismiss={() => close()}
                clickToToggle={false}
                offset={8}
                alignment={alignment}
                fitAvailableHeight
                customZIndex={dropdownZIndex}
                rootNode={dropdownRootNode}
            />
        </Wrapper>
    );
};
