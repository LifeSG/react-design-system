import React, { useEffect, useState } from "react";
import { Color } from "../color";
import {
    Knob,
    LabelContainer,
    LabelText,
    Slider,
    SliderThumb,
    SliderTrack,
} from "./input-range-slider.styles";
import { InputRangeSliderProps } from "./types";

export const InputRangeSlider = ({
    value,
    min = 0,
    max = 100,
    step = 1,
    minRange,
    numOfThumbs = 2,
    colors,
    disabled,
    readOnly,
    showLabels,
    labelPrefix,
    labelSuffix,
    renderLabel,
    onChange,
    ...otherProps
}: InputRangeSliderProps) => {
    const [selection, setSelection] = useState<number[]>(initialiseSelection());
    const trackColors = getTrackColors();

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
    const handleChange = (value: number | number[], index: number) => {
        if (typeof value === "number") {
            const val = [value];
            setSelection(val);
            onChange?.(val);
        } else {
            if (index > -1 && selection[index] === value[index]) {
                // skip unnecessary update when dragging the start thumb across the end thumb
                return;
            }
            setSelection(value);
            onChange?.(value);
        }
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

    function getTrackColors() {
        const defaultColors = getDefaultColors();
        return new Array(numOfThumbs + 1).fill(0).map((_, i) => {
            return colors?.[i] || defaultColors[i];
        });
    }

    function getDefaultColors() {
        const inactiveColor =
            disabled || readOnly ? Color.Neutral[5] : Color.Neutral[4];
        const activeColor =
            disabled || readOnly ? Color.Neutral[4] : Color.Primary;

        if (numOfThumbs === 1) {
            return [activeColor, inactiveColor];
        }

        const defaultColors: typeof colors = [];
        defaultColors.push(inactiveColor);
        for (let i = 0; i < numOfThumbs - 1; i++) {
            defaultColors.push(activeColor);
        }
        defaultColors.push(inactiveColor);
        return defaultColors;
    }

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const formatLabel = (value: number) => {
        if (renderLabel) {
            return renderLabel(value);
        }

        return (
            <LabelText>
                {labelPrefix}
                {value}
                {labelSuffix}
            </LabelText>
        );
    };

    return (
        <div {...otherProps}>
            <Slider
                step={step}
                min={min}
                max={max}
                value={selection}
                disabled={disabled || readOnly}
                onChange={handleChange}
                minDistance={minRange}
                renderThumb={(
                    thumbProps: React.HTMLAttributes<HTMLDivElement>,
                    state
                ) => {
                    return (
                        <SliderThumb
                            data-testid={`slider-thumb-${state.index}`}
                            {...thumbProps}
                            tabIndex={
                                disabled ? undefined : thumbProps.tabIndex
                            }
                        >
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
            {showLabels && (
                <LabelContainer>
                    <div>{formatLabel(min)}</div>
                    <div>{formatLabel(max)}</div>
                </LabelContainer>
            )}
        </div>
    );
};
