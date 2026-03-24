import { useEffect, useMemo, useRef, useState } from "react";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import { Typography } from "../typography";
import {
    Bar,
    Histogram,
    Label,
    Separator,
    Slider,
} from "./histogram-slider.styles";
import { HistogramSliderProps } from "./types";
import { SimpleIdGenerator } from "../util";
import { concatIds } from "../shared/accessibility";

const ANNOUNCEMENT_DEBOUNCE_MS = 500;

export const HistogramSlider = ({
    bins = [],
    interval,
    disabled,
    readOnly,
    value,
    showRangeLabels,
    rangeLabelPrefix,
    rangeLabelSuffix,
    ariaLabels,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
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
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const announcementTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null
    );
    const rangeLabelId = `${internalId}-range-label`;
    const sliderDescribedBy = concatIds(
        ariaDescribedBy,
        showRangeLabels ? rangeLabelId : undefined
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

    useEffect(() => {
        return () => {
            clearPendingAnnouncement();
        };
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (values: number[]) => {
        const [val1, val2] = values;
        const newSelection: [number, number] = [val1, val2];
        setSelection(newSelection);
        scheduleRangePercentageAnnouncement(newSelection);
        onChange?.(newSelection);
    };

    const handleChangeEnd = (values: number[]) => {
        const [val1, val2] = values;
        const newSelection: [number, number] = [val1, val2];
        setSelection(newSelection);
        scheduleRangePercentageAnnouncement(newSelection);
        onChangeEnd?.(newSelection);
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    function initSelection(): [number, number] {
        return value ?? [minValue, minValue + interval];
    }

    function clearPendingAnnouncement() {
        if (announcementTimeoutRef.current) {
            clearTimeout(announcementTimeoutRef.current);
            announcementTimeoutRef.current = null;
        }
    }

    function getRangePercentageDescription(currentSelection: [number, number]) {
        const totalCount = items.reduce((sum, item) => sum + item.count, 0);

        if (totalCount === 0) {
            return "0% of results available in the range you specified.";
        }

        const selectedCount = items.reduce((sum, item) => {
            const isSelected =
                item.minValue >= currentSelection[0] &&
                item.minValue < currentSelection[1];

            return isSelected ? sum + item.count : sum;
        }, 0);

        const percentage = Math.round((selectedCount / totalCount) * 100);

        return `${percentage}% of results available in the range you specified.`;
    }

    function scheduleRangePercentageAnnouncement(
        currentSelection: [number, number]
    ) {
        if (disabled || readOnly) {
            return;
        }

        const announcement = getRangePercentageDescription(currentSelection);

        clearPendingAnnouncement();

        announcementTimeoutRef.current = setTimeout(() => {
            clearAnnouncer("polite");
            announce(announcement, "polite");
        }, ANNOUNCEMENT_DEBOUNCE_MS);
    }

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderRangeItem = (value: number) => {
        if (renderRangeLabel) {
            return renderRangeLabel(value);
        }
        return (
            <Typography.BodyBL>
                {rangeLabelPrefix}
                {value}
                {rangeLabelSuffix}
            </Typography.BodyBL>
        );
    };

    const renderHistogramSlider = () => {
        const selectionDescription = getRangePercentageDescription(selection);

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
                    ariaLabels={ariaLabels}
                    ariaDescriptions={[
                        selectionDescription,
                        selectionDescription,
                    ]}
                    aria-describedby={sliderDescribedBy}
                    aria-labelledby={ariaLabelledBy}
                    onChange={handleChange}
                    onChangeEnd={handleChangeEnd}
                />
            </>
        );
    };

    return (
        <div role="group" {...otherProps}>
            {showRangeLabels && (
                <Label id={rangeLabelId}>
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
