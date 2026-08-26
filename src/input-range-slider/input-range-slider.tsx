import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import clsx from "clsx";
import type React from "react";
import { useEffect, useState } from "react";

import { concatIds, VisuallyHidden } from "../shared/accessibility";
import { Colour } from "../theme";
import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./input-range-slider.styles";
import { Slider } from "./slider-components";
import { PAGE_STEP_MULTIPLIER } from "./slider-utils";
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
    const internalId = useId();
    const trackColors = getTrackColors();
    const indicatorTextId = `${internalId}-indicator`;
    const instructionTextId = `${internalId}-instruction`;
    const resolvedAriaLabels = getResolvedAriaLabels();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (value !== selection) {
            setSelection(initialiseSelection());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (value: number[]) => {
        if (readOnly || disabled) {
            return;
        }

        setSelection(value);
        onChange?.(value);
    };

    const handleChangeEnd = (value: number[]) => {
        if (readOnly || disabled) {
            return;
        }

        setSelection(value);
        onChangeEnd?.(value);
    };

    const handleThumbKeyDown = (
        event: React.KeyboardEvent<HTMLDivElement>,
        index: number
    ) => {
        if (disabled || readOnly) {
            return;
        }

        // Browser native range input only steps by 1 for PageUp/Down; apply large step manually
        if (event.key === "PageUp" || event.key === "PageDown") {
            event.preventDefault();
            const delta =
                (event.key === "PageUp" ? 1 : -1) * step * PAGE_STEP_MULTIPLIER;
            const nextSelection = [...selection];
            nextSelection[index] = clampValueForThumb(
                selection[index] + delta,
                index,
                selection
            );
            if (nextSelection[index] !== selection[index]) {
                setSelection(nextSelection);
                onChange?.(nextSelection);
                onChangeEnd?.(nextSelection);
            }
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
            <Slider
                selection={selection}
                min={min}
                max={max}
                step={step}
                minRange={minRange}
                disabled={disabled}
                readOnly={readOnly}
                trackColors={trackColors}
                focusedThumbIndex={focusedThumbIndex}
                onChange={handleChange}
                onChangeEnd={handleChangeEnd}
            />

            {showSliderLabels && (
                <div className={styles.labelContainer}>
                    <div>{formatLabel(min)}</div>
                    <div>{formatLabel(max)}</div>
                </div>
            )}
        </div>
    );
};
