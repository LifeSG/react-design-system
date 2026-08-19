import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import clsx from "clsx";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { concatIds, VisuallyHidden } from "../shared/accessibility";
import { Colour } from "../theme";
import { Typography } from "../typography";
import { useId, useIsomorphicLayoutEffect } from "../util";
import * as styles from "./input-range-slider.styles";
import { Thumb, Track } from "./slider-components";
import type { InputRangeSliderProps } from "./types";

// @catalog
/**
 * A draggable track slider for selecting one or more numeric values within a
 * bounded range.
 *
 * Use `InputRangeSlider` when the selection does not need to be precise;
 * the user picks a value or a range by dragging thumb controls along a track.
 */
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
    className,
    ...otherProps
}: InputRangeSliderProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [selection, setSelection] = useState<number[]>(initialiseSelection());
    const [focusedThumbIndex, setFocusedThumbIndex] = useState<number | null>(
        null
    );
    const [upperBound, setUpperBound] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const internalId = useId();
    const trackColors = getTrackColors();
    const indicatorTextId = `${internalId}-indicator`;
    const instructionTextId = `${internalId}-instruction`;
    const resolvedAriaLabels = getResolvedAriaLabels();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useIsomorphicLayoutEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const measure = () => {
            const sliderWidth = slider.clientWidth;
            const thumbEl = slider.querySelector(
                `.${styles.sliderThumb}`
            ) as HTMLElement | null;
            const thumbWidth = thumbEl
                ? thumbEl.getBoundingClientRect().width
                : 0;
            setUpperBound(sliderWidth - thumbWidth);
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(slider);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (value !== selection) {
            setSelection(initialiseSelection());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
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

    const handleNativeRangeChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        if (disabled || readOnly) {
            return;
        }

        const nextRawValue = Number(event.currentTarget.value);

        const nextSelection = [...selection];
        nextSelection[index] = clampValueForThumb(
            nextRawValue,
            index,
            selection
        );

        setSelection(nextSelection);
        onChange?.(nextSelection);
        onChangeEnd?.(nextSelection);
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

    function getThumbMin(index: number, values = selection) {
        if (index === 0) {
            return min;
        }

        return values[index - 1] + minRange;
    }

    function getThumbMax(index: number, values = selection) {
        if (index === values.length - 1) {
            return max;
        }

        return values[index + 1] - minRange;
    }

    function clampValueForThumb(
        nextValue: number,
        index: number,
        values: number[]
    ) {
        const minAllowed = getThumbMin(index, values);
        const maxAllowed = getThumbMax(index, values);

        return Math.min(maxAllowed, Math.max(minAllowed, nextValue));
    }

    function getPercent(val: number) {
        if (max === min) return 0;
        return ((val - min) / (max - min)) * 100;
    }

    function toOffset(percent: number) {
        if (percent === 0) return "0px";
        return `${(percent / 100) * upperBound}px`;
    }

    function getValueFromClientX(clientX: number) {
        const slider = sliderRef.current;
        if (!slider) return min;

        const rect = slider.getBoundingClientRect();
        if (rect.width === 0) return min;

        const fraction = Math.max(
            0,
            Math.min(1, (clientX - rect.left) / rect.width)
        );
        const rawValue = min + fraction * (max - min);
        const snapped = Math.round((rawValue - min) / step) * step + min;
        return Math.max(min, Math.min(max, snapped));
    }

    function findNearestThumbIndex(val: number) {
        let nearestIndex = 0;
        let nearestDist = Math.abs(selection[0] - val);
        for (let i = 1; i < selection.length; i++) {
            const dist = Math.abs(selection[i] - val);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestIndex = i;
            }
        }
        return nearestIndex;
    }

    function startDrag(
        event: React.PointerEvent<HTMLDivElement>,
        thumbIndex: number
    ) {
        if (disabled || readOnly) return;
        if (event.button !== 0) return;

        event.preventDefault();
        event.stopPropagation();
        (event.currentTarget as HTMLElement).focus();

        const dragValues = [...selection];

        const onMove = (e: PointerEvent) => {
            const rawValue = getValueFromClientX(e.clientX);
            const clamped = clampValueForThumb(
                rawValue,
                thumbIndex,
                dragValues
            );

            if (clamped === dragValues[thumbIndex]) return;

            dragValues[thumbIndex] = clamped;
            const nextValues = [...dragValues];

            setSelection(nextValues);
            onChange?.(nextValues);
        };

        const onEnd = () => {
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onEnd);
            document.removeEventListener("pointercancel", onEnd);

            const finalValues = [...dragValues];
            setSelection(finalValues);
            onChangeEnd?.(finalValues);
        };

        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onEnd);
        document.addEventListener("pointercancel", onEnd);
    }

    function handleTrackPointerDown(event: React.PointerEvent<HTMLDivElement>) {
        if (disabled || readOnly) return;
        if (event.button !== 0) return;

        event.preventDefault();
        const clickedValue = getValueFromClientX(event.clientX);
        const index = findNearestThumbIndex(clickedValue);
        const clamped = clampValueForThumb(clickedValue, index, selection);

        const nextValues = [...selection];
        nextValues[index] = clamped;

        setSelection(nextValues);
        onChange?.(nextValues);
        onChangeEnd?.(nextValues);
    }

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const formatLabel = (value: number) => {
        if (renderSliderLabel) {
            return renderSliderLabel(value);
        }

        return (
            <Typography.BodyBL className={styles.labelText}>
                {sliderLabelPrefix}
                {value}
                {sliderLabelSuffix}
            </Typography.BodyBL>
        );
    };

    const formatIndicationLabel = () => {
        let formattedSelection = "";

        if (selection.length === 1) {
            formattedSelection = `${selection[0]}`;
        } else if (selection.length === 2) {
            formattedSelection = `${selection[0]} - ${selection[1]}`;
        } else if (selection.length > 2) {
            const minValue = Math.min(...selection);
            const maxValue = Math.max(...selection);
            formattedSelection = `${minValue} - ${maxValue}`;
        }

        return (
            <Typography.BodyBL className={styles.labelText}>
                {indicatorLabelPrefix}
                {formattedSelection}
                {indicatorLabelSuffix}
            </Typography.BodyBL>
        );
    };

    return (
        <div
            {...otherProps}
            id={id}
            role="group"
            aria-labelledby={ariaLabelledBy}
            aria-disabled={disabled}
            className={clsx(styles.wrapper, className)}
        >
            {!disabled && !readOnly && (
                <VisuallyHidden id={instructionTextId}>
                    Use left and right arrow keys to adjust the slider.
                </VisuallyHidden>
            )}

            {showIndicatorLabel && (
                <div
                    id={indicatorTextId}
                    className={styles.indicatorLabelContainer}
                >
                    {formatIndicationLabel()}
                </div>
            )}

            {selection.map((thumbValue, index) => {
                const thumbLabelTextId = `${internalId}-thumb-label-${index}`;
                const thumbDescriptionText = getThumbDescriptionText(index);
                const thumbDescriptionTextId = thumbDescriptionText
                    ? `${internalId}-thumb-description-${index}`
                    : undefined;

                return (
                    <VisuallyHidden key={`native-slider-${index}`}>
                        {thumbDescriptionTextId && (
                            <span id={thumbDescriptionTextId}>
                                {thumbDescriptionText}
                            </span>
                        )}
                        <span id={thumbLabelTextId}>
                            {resolvedAriaLabels[index]}
                        </span>

                        <input
                            data-testid={`slider-input-${index}`}
                            type="range"
                            min={getThumbMin(index)}
                            max={getThumbMax(index)}
                            step={step}
                            value={thumbValue}
                            aria-disabled={disabled || undefined}
                            readOnly={readOnly}
                            aria-labelledby={concatIds(
                                ariaLabelledBy,
                                thumbLabelTextId
                            )}
                            aria-describedby={getThumbDescriptionIds(
                                thumbDescriptionTextId
                            )}
                            aria-valuetext={getValueText(thumbValue)}
                            aria-invalid={ariaInvalid}
                            onFocus={() => setFocusedThumbIndex(index)}
                            onBlur={() => setFocusedThumbIndex(null)}
                            onChange={(event) =>
                                handleNativeRangeChange(event, index)
                            }
                            onKeyDown={(event) => {
                                handleThumbKeyDown(event, index);
                            }}
                        />
                    </VisuallyHidden>
                );
            })}

            {/* Native range inputs provide the accessible interaction model.
                The visible slider is presentation-only. */}
            <div
                ref={sliderRef}
                className={styles.slider}
                aria-hidden="true"
                onPointerDown={handleTrackPointerDown}
            >
                {Array.from({ length: selection.length + 1 }, (_, i) => {
                    const leftPercent =
                        i === 0 ? 0 : getPercent(selection[i - 1]);
                    const rightPercent =
                        i === selection.length
                            ? 0
                            : 100 - getPercent(selection[i]);
                    return (
                        <Track
                            key={`track-${i}`}
                            data-testid={`slider-track-${i}`}
                            color={trackColors[i]}
                            style={{
                                [styles.tokens.track.left]:
                                    toOffset(leftPercent),
                                [styles.tokens.track.right]:
                                    toOffset(rightPercent),
                            }}
                        />
                    );
                })}
                {selection.map((thumbValue, index) => (
                    <Thumb
                        key={`thumb-${index}`}
                        data-testid={`slider-thumb-${index}`}
                        tabIndex={-1}
                        aria-hidden="true"
                        focused={focusedThumbIndex === index}
                        disabled={disabled}
                        readOnly={readOnly}
                        style={{
                            [styles.tokens.thumb.left]: toOffset(
                                getPercent(thumbValue)
                            ),
                        }}
                        onPointerDown={(e) => startDrag(e, index)}
                    />
                ))}
            </div>

            {showSliderLabels && (
                <div className={styles.labelContainer}>
                    <div>{formatLabel(min)}</div>
                    <div>{formatLabel(max)}</div>
                </div>
            )}
        </div>
    );
};
