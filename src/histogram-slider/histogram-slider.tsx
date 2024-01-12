import { useEffect, useMemo, useState } from "react";
import { Text } from "../text";
import {
    Bar,
    Histogram,
    Label,
    Separator,
    Slider,
} from "./histogram-slider.styles";
import { HistogramSliderProps } from "./types";

export const HistogramSlider = ({
    bins = [],
    interval,
    disabled,
    readOnly,
    value,
    showRangeLabels,
    rangeLabelPrefix,
    rangeLabelSuffix,
    onChange,
    onChangeEnd,
    renderEmptyView,
    renderRangeLabel,
    ...otherProps
}: HistogramSliderProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const counts = bins.map((item) => item.count);
    const maxCount = Math.max(...counts);

    const values = bins.map((item) => item.minValue);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);

    const [selection, setSelection] = useState<[number, number]>(
        initSelection()
    );

    const items = useMemo(() => {
        const sorted = [...bins].sort((a, b) => a.minValue - b.minValue);
        const numCols = (maxValue - minValue) / interval + 1;

        const items: typeof sorted = [];
        for (let i = 0; i < numCols; i++) {
            const bin = sorted.find(
                (b) => b.minValue === minValue + interval * i
            );
            if (bin) {
                items.push(bin);
            } else {
                items.push({ count: 0, minValue: minValue + interval * i });
            }
        }
        return items;
    }, [bins, interval]);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (value !== selection) {
            setSelection(initSelection());
        }
    }, [value]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (values: [number, number]) => {
        setSelection(values);
        onChange?.(values);
    };

    const handleChangeEnd = (values: [number, number]) => {
        setSelection(values);
        onChangeEnd?.(values);
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    function initSelection(): [number, number] {
        return value ?? [minValue, minValue + interval];
    }

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderRangeItem = (value: number) => {
        if (renderRangeLabel) {
            return renderRangeLabel(value);
        }
        return (
            <Text.Body>
                {rangeLabelPrefix}
                {value}
                {rangeLabelSuffix}
            </Text.Body>
        );
    };

    const renderHistogramSlider = () => {
        return (
            <>
                <Histogram>
                    {items.map((item, i) => {
                        const ratio = item.count / maxCount;
                        return (
                            <Bar
                                key={i}
                                style={{
                                    height: ratio
                                        ? `calc(calc(100% - 0.25rem) * ${ratio} + 0.25rem)`
                                        : 0,
                                }}
                                $selected={
                                    item.minValue >= selection[0] &&
                                    item.minValue < selection[1]
                                }
                                $disabled={disabled || readOnly}
                            />
                        );
                    })}
                </Histogram>
                <Slider
                    min={minValue}
                    max={maxValue + interval}
                    step={interval}
                    minRange={interval}
                    numOfThumbs={2}
                    value={selection}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    onChangeEnd={handleChangeEnd}
                />
            </>
        );
    };

    return (
        <div {...otherProps}>
            {showRangeLabels && (
                <Label>
                    {renderRangeItem(selection[0])}
                    <Separator>-</Separator>
                    {renderRangeItem(selection[1])}
                </Label>
            )}
            {items.every((item) => item.count === 0) && renderEmptyView
                ? renderEmptyView()
                : renderHistogramSlider()}
        </div>
    );
};
