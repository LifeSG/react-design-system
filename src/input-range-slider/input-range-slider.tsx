import React, { useEffect, useState } from "react";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import { Colour } from "../theme";
import {
    IndicatorLabelContainer,
    Knob,
    LabelContainer,
    LabelText,
    Slider,
    SliderThumb,
    SliderTrack,
    Wrapper,
} from "./input-range-slider.styles";
import { InputRangeSliderProps } from "./types";
import { SimpleIdGenerator } from "../util";
import { VisuallyHidden } from "../shared/accessibility";

export const InputRangeSlider = ({
    id,
    value,
    min = 0,
    max = 100,
    step = 1,
    minRange = 0,
    numOfThumbs = 2,
    colors,
    disabled,
    readOnly,
    ariaErrorMessage,
    ariaInvalid,
    ariaLabels,
    showSliderLabels,
    sliderLabelPrefix,
    sliderLabelSuffix,
    showIndicatorLabel,
    indicatorLabelPrefix,
    indicatorLabelSuffix,
    renderSliderLabel,
    getAriaValueText,
    onChange,
    onChangeEnd,
    ...otherProps
}: InputRangeSliderProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [selection, setSelection] = useState<number[]>(initialiseSelection());
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const trackColors = getTrackColors();
    const indicatorTextId = `${internalId}-indicator`;
    const resolvedAriaLabels = getResolvedAriaLabels();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (value !== selection) {
            setSelection(initialiseSelection());
        }
    }, [value]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (value: number | readonly number[], index: number) => {
        if (readOnly || disabled) {
            return;
        }

        if (typeof value === "number") {
            const nextValue = [value];
            setSelection(nextValue);
            onChange?.(nextValue);
            return;
        }

        if (index > -1 && selection[index] === value[index]) {
            return;
        }

        const nextValue = [...value];
        setSelection(nextValue);
        onChange?.(nextValue);
    };

    const handleChangeEnd = (value: number | readonly number[]) => {
        if (readOnly || disabled) {
            return;
        }

        if (typeof value === "number") {
            const val = [value];
            setSelection(val);
            onChangeEnd?.(val);
        } else {
            const newSelection = [...value];
            setSelection(newSelection);
            onChangeEnd?.(newSelection);
        }
    };

    const handleThumbKeyDown = (
        event: React.KeyboardEvent<HTMLDivElement>,
        index: number
    ) => {
        if (disabled || readOnly) {
            return;
        }

        const message = getBlockedMovementMessage(event.key, index);

        if (!message) {
            return;
        }

        clearAnnouncer("assertive");
        announce(message, "assertive");
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    function initialiseSelection() {
        if (value && value.length === numOfThumbs) {
            return value;
        }

        const values: number[] = [];
        for (let i = 0; i < numOfThumbs; i++) {
            values.push(min + step * i);
        }
        return values;
    }

    function getResolvedAriaLabels() {
        return Array.from({ length: numOfThumbs }, (_, index) => {
            return ariaLabels?.[index] || getDefaultAriaLabel(index);
        });
    }

    function getDefaultAriaLabel(index: number) {
        if (numOfThumbs === 1) {
            return "Slider";
        }

        if (numOfThumbs === 2) {
            return index === 0
                ? "Minimum value slider"
                : "Maximum value slider";
        }

        if (index === 0) {
            return "Minimum value slider";
        }

        if (index === numOfThumbs - 1) {
            return "Maximum value slider";
        }

        return "Indeterminate value slider";
    }

    function getThumbInstruction(label: string) {
        const lowerCasedLabel = label.charAt(0).toLowerCase() + label.slice(1);
        return `Use left and right arrow keys to adjust the ${lowerCasedLabel}.`;
    }

    function getThumbAccessibleLabel(index: number) {
        const label = resolvedAriaLabels[index];
        return `${label}. ${getThumbInstruction(label)}`;
    }

    function getTrackColors() {
        const defaultColors = getDefaultColors();
        return new Array(numOfThumbs + 1).fill(0).map((_, i) => {
            return colors?.[i] || defaultColors[i];
        });
    }

    function getDefaultColors() {
        const inactiveColor =
            disabled || readOnly
                ? Colour["border-disabled"]
                : Colour["border-strong"];
        const activeColor =
            disabled || readOnly
                ? Colour["border-selected-disabled"]
                : Colour["border-selected"];

        if (numOfThumbs === 1) {
            return [activeColor, inactiveColor];
        }

        const defaultColors: typeof colors = [inactiveColor];

        for (let index = 0; index < numOfThumbs - 1; index++) {
            defaultColors.push(activeColor);
        }

        defaultColors.push(inactiveColor);
        return defaultColors;
    }

    function getValueText(currentValue: number, index: number) {
        if (getAriaValueText) {
            return getAriaValueText(currentValue, index);
        }

        return `${sliderLabelPrefix || ""}${currentValue}${
            sliderLabelSuffix || ""
        }`;
    }

    function getThumbDescriptionIds() {
        return [
            showIndicatorLabel ? indicatorTextId : undefined,
            ariaErrorMessage,
        ]
            .filter(Boolean)
            .join(" ");
    }

    function isIncreaseKey(key: string) {
        return ["ArrowRight", "ArrowUp", "PageUp", "End"].includes(key);
    }

    function isDecreaseKey(key: string) {
        return ["ArrowLeft", "ArrowDown", "PageDown", "Home"].includes(key);
    }
    function getSliderTypeText(label?: string) {
        if (!label) {
            return "slider";
        }

        return label.toLowerCase();
    }

    function getSliderTargetText(label?: string) {
        if (!label) {
            return "slider";
        }

        return label.replace(/ slider$/i, "").toLowerCase();
    }

    function getBlockedMovementMessage(key: string, index: number) {
        if (numOfThumbs < 2) {
            return "";
        }

        const currentValue = selection[index];
        const previousValue = index > 0 ? selection[index - 1] : undefined;
        const nextValue =
            index < selection.length - 1 ? selection[index + 1] : undefined;

        const currentLabel = resolvedAriaLabels[index];
        const previousLabel =
            index > 0 ? resolvedAriaLabels[index - 1] : undefined;
        const nextLabel =
            index < resolvedAriaLabels.length - 1
                ? resolvedAriaLabels[index + 1]
                : undefined;

        if (isIncreaseKey(key)) {
            if (
                nextValue !== undefined &&
                currentValue >= nextValue - minRange
            ) {
                return `The ${getSliderTypeText(
                    currentLabel
                )} has reached its limit. Increase the ${getSliderTargetText(
                    nextLabel
                )} to set a higher ${getSliderTargetText(currentLabel)}.`;
            }
        }

        if (isDecreaseKey(key)) {
            if (
                previousValue !== undefined &&
                currentValue <= previousValue + minRange
            ) {
                return `The ${getSliderTypeText(
                    currentLabel
                )} has reached its limit. Decrease the ${getSliderTargetText(
                    previousLabel
                )} to set a lower ${getSliderTargetText(currentLabel)}.`;
            }
        }

        return "";
    }

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const formatLabel = (value: number) => {
        if (renderSliderLabel) {
            return renderSliderLabel(value);
        }

        return (
            <LabelText>
                {sliderLabelPrefix}
                {value}
                {sliderLabelSuffix}
            </LabelText>
        );
    };

    const formatIndicationLabel = () => {
        let formattedSelection = "";

        if (selection.length === 1) {
            formattedSelection = `${selection[0]}`;
        } else if (selection.length === 2) {
            formattedSelection = `${selection[0]} - ${selection[1]}`;
        } else if (selection.length > 2) {
            const min = Math.min(...selection);
            const max = Math.max(...selection);
            formattedSelection = `${min} - ${max}`;
        }

        return (
            <LabelText>
                {indicatorLabelPrefix}
                {formattedSelection}
                {indicatorLabelSuffix}
            </LabelText>
        );
    };

    return (
        <Wrapper
            {...otherProps}
            id={id}
            role="group"
            aria-disabled={disabled || undefined}
            aria-readonly={readOnly || undefined}
            aria-invalid={ariaInvalid || undefined}
        >
            {showIndicatorLabel && (
                <IndicatorLabelContainer id={indicatorTextId}>
                    {formatIndicationLabel()}
                </IndicatorLabelContainer>
            )}

            <Slider
                step={step}
                min={min}
                max={max}
                value={selection}
                disabled={disabled || readOnly}
                onChange={handleChange}
                onAfterChange={handleChangeEnd}
                minDistance={minRange}
                renderThumb={(
                    thumbProps: React.HTMLAttributes<HTMLDivElement>,
                    state
                ) => {
                    const thumbLabelTextId = `${internalId}-thumb-label-${state.index}`;
                    const thumbValue = selection[state.index] ?? min;

                    return (
                        <SliderThumb
                            data-testid={`slider-thumb-${state.index}`}
                            {...thumbProps}
                            tabIndex={thumbProps.tabIndex}
                            aria-labelledby={thumbLabelTextId}
                            aria-describedby={getThumbDescriptionIds()}
                            aria-valuetext={getValueText(
                                thumbValue,
                                state.index
                            )}
                            aria-valuemin={min}
                            aria-valuemax={max}
                            aria-valuenow={thumbValue}
                            aria-readonly={readOnly || undefined}
                            aria-invalid={ariaInvalid || undefined}
                            aria-errormessage={ariaErrorMessage}
                            onKeyDown={(event) => {
                                handleThumbKeyDown(event, state.index);
                                thumbProps.onKeyDown?.(event);
                            }}
                        >
                            <VisuallyHidden id={thumbLabelTextId}>
                                {getThumbAccessibleLabel(state.index)}
                            </VisuallyHidden>
                            <Knob $disabled={disabled} $readOnly={readOnly} />
                        </SliderThumb>
                    );
                }}
                renderTrack={(
                    trackProps: React.HTMLAttributes<HTMLDivElement>,
                    state
                ) => {
                    return (
                        <SliderTrack
                            data-testid={`slider-track-${state.index}`}
                            {...trackProps}
                            $color={trackColors[state.index]}
                        />
                    );
                }}
            />
            {showSliderLabels && (
                <LabelContainer>
                    <div>{formatLabel(min)}</div>
                    <div>{formatLabel(max)}</div>
                </LabelContainer>
            )}
        </Wrapper>
    );
};
