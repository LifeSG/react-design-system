import React, { useEffect, useState } from "react";
import { Colour } from "@/theme";
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
    ariaLabels,
    showSliderLabels,
    sliderLabelPrefix,
    sliderLabelSuffix,
    showIndicatorLabel,
    indicatorLabelPrefix,
    indicatorLabelSuffix,
    renderSliderLabel,
    onChange,
    onChangeEnd,
    ...otherProps
}: InputRangeSliderProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
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
    const handleChange = (value: number | readonly number[], index: number) => {
        if (typeof value === "number") {
            const val = [value];
            setSelection(val);
            onChange?.(val);
        } else {
            if (index > -1 && selection[index] === value[index]) {
                // skip unnecessary update when dragging the start thumb across the end thumb
                return;
            }
            const newSelection = [...value];
            setSelection(newSelection);
            onChange?.(newSelection);
        }
    };

    const handleChangeEnd = (value: number | readonly number[]) => {
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
        <Wrapper {...otherProps}>
            {showIndicatorLabel && (
                <IndicatorLabelContainer>
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
                ariaLabel={ariaLabels}
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
            {showSliderLabels && (
                <LabelContainer>
                    <div>{formatLabel(min)}</div>
                    <div>{formatLabel(max)}</div>
                </LabelContainer>
            )}
        </Wrapper>
    );
};
