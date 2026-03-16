import React, { useEffect, useRef, useState } from "react";
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
import { VisuallyHidden, concatIds } from "../shared/accessibility";

const ANNOUNCEMENT_DEBOUNCE_MS = 500;

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
    showSliderLabels,
    sliderLabelPrefix,
    sliderLabelSuffix,
    showIndicatorLabel,
    indicatorLabelPrefix,
    indicatorLabelSuffix,
    ariaLabels,
    ariaDescriptions,
    "aria-invalid": ariaInvalid,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    renderSliderLabel,
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
    const instructionTextId = `${internalId}-instruction`;
    const resolvedAriaLabels = getResolvedAriaLabels();
    const announcementTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (value !== selection) {
            setSelection(initialiseSelection());
        }
    }, [value]);

    useEffect(() => {
        return () => {
            clearPendingAnnouncement();
        };
    }, []);

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
            scheduleRangePercentageAnnouncement(index > -1 ? index : 0);
            onChange?.(nextValue);
            return;
        }

        if (index > -1 && selection[index] === value[index]) {
            // skip unnecessary update when dragging the start thumb across the end thumb
            return;
        }

        const nextValue = [...value];
        setSelection(nextValue);
        if (index > -1) {
            scheduleRangePercentageAnnouncement(index);
        }
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

        clearPendingAnnouncement();
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

    function clearPendingAnnouncement() {
        if (announcementTimeoutRef.current) {
            clearTimeout(announcementTimeoutRef.current);
            announcementTimeoutRef.current = null;
        }
    }

    function scheduleRangePercentageAnnouncement(index: number) {
        if (disabled || readOnly) {
            return;
        }

        const announcement = getThumbDescriptionText(index);

        if (!announcement) {
            return;
        }

        clearPendingAnnouncement();

        announcementTimeoutRef.current = setTimeout(() => {
            clearAnnouncer("polite");
            announce(announcement, "polite");
        }, ANNOUNCEMENT_DEBOUNCE_MS);
    }

    function getResolvedAriaLabels() {
        return Array.from({ length: numOfThumbs }, (_, index) => {
            return ariaLabels?.[index] || getDefaultAriaLabel(index);
        });
    }

    function getDefaultAriaLabel(index: number) {
        if (numOfThumbs === 1) {
            return "";
        }

        if (index === 0) {
            return "Minimum value slider";
        }

        if (index === numOfThumbs - 1) {
            return "Maximum value slider";
        }

        return "Indeterminate value slider";
    }

    function getThumbAccessibleLabel(index: number) {
        return resolvedAriaLabels[index];
    }

    function getThumbDescriptionText(index: number) {
        return ariaDescriptions?.[index];
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

    function getValueText(currentValue: number) {
        return `${sliderLabelPrefix || ""}${currentValue}${
            sliderLabelSuffix || ""
        }`;
    }

    function getThumbDescriptionIds(thumbDescriptionId?: string) {
        return concatIds(
            ariaDescribedBy,
            showIndicatorLabel ? indicatorTextId : undefined,
            disabled || readOnly ? undefined : instructionTextId,
            thumbDescriptionId
        );
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
        >
            {!disabled && !readOnly && (
                <VisuallyHidden id={instructionTextId}>
                    Use left and right arrow keys to adjust the slider.
                </VisuallyHidden>
            )}
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
                    const thumbDescriptionText = getThumbDescriptionText(
                        state.index
                    );
                    const thumbDescriptionTextId = thumbDescriptionText
                        ? `${internalId}-thumb-description-${state.index}`
                        : undefined;
                    const thumbValue = selection[state.index];

                    return (
                        <div key={state.index}>
                            {thumbDescriptionTextId && (
                                <VisuallyHidden id={thumbDescriptionTextId}>
                                    {thumbDescriptionText}
                                </VisuallyHidden>
                            )}
                            <SliderThumb
                                data-testid={`slider-thumb-${state.index}`}
                                {...thumbProps}
                                tabIndex={thumbProps.tabIndex}
                                aria-labelledby={concatIds(
                                    ariaLabelledBy,
                                    thumbLabelTextId
                                )}
                                aria-describedby={getThumbDescriptionIds(
                                    thumbDescriptionTextId
                                )}
                                aria-valuetext={getValueText(thumbValue)}
                                aria-valuemin={min}
                                aria-valuemax={max}
                                aria-valuenow={thumbValue}
                                aria-readonly={readOnly || undefined}
                                aria-invalid={ariaInvalid || undefined}
                                onKeyDown={(event) => {
                                    handleThumbKeyDown(event, state.index);
                                    thumbProps.onKeyDown?.(event);
                                }}
                            >
                                <VisuallyHidden id={thumbLabelTextId}>
                                    {getThumbAccessibleLabel(state.index)}
                                </VisuallyHidden>
                                <Knob
                                    $disabled={disabled}
                                    $readOnly={readOnly}
                                />
                            </SliderThumb>
                        </div>
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
