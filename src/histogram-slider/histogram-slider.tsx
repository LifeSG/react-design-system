import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";

import { InputRangeSlider } from "../input-range-slider";
import { concatIds } from "../shared/accessibility";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./histogram-slider.styles";
import type { HistogramBinProps, HistogramSliderProps } from "./types";

const ANNOUNCEMENT_DEBOUNCE_MS = 500;

// @catalog
/**
 * A histogram with an overlaid two-thumb range slider for numeric filtering.
 *
 * Use `HistogramSlider` to let users narrow a dataset by selecting a numeric
 * range while seeing how values are distributed across bins.
 */
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
    className,
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
    const internalId = useId();
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
                <div className={styles.histogram}>
                    {items.map((item, i) => (
                        <HistogramBar
                            key={i}
                            item={item}
                            maxCount={maxCount}
                            isSelected={
                                item.minValue >= selection[0] &&
                                item.minValue < selection[1]
                            }
                            isDisabled={disabled || readOnly}
                        />
                    ))}
                </div>
                <InputRangeSlider
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
                    className={styles.slider}
                />
            </>
        );
    };

    return (
        <div role="group" {...otherProps} className={className}>
            {showRangeLabels && (
                <div id={rangeLabelId} className={styles.label}>
                    {renderRangeItem(selection[0])}
                    <div className={styles.separator}>-</div>
                    {renderRangeItem(selection[1])}
                </div>
            )}
            {items.every((item) => item.count === 0) && renderEmptyView
                ? renderEmptyView()
                : renderHistogramSlider()}
        </div>
    );
};

// =============================================================================
// SUB COMPONENT
// =============================================================================
interface HistogramBarProps {
    item: HistogramBinProps;
    maxCount: number;
    isSelected: boolean;
    isDisabled: boolean | undefined;
}

const HistogramBar = ({
    item,
    maxCount,
    isSelected,
    isDisabled,
}: HistogramBarProps) => {
    const ratio = item.count / maxCount;
    const barRef = useRef<HTMLDivElement>(null);

    useApplyStyle(barRef, {
        height: ratio ? `calc(calc(100% - 0.25rem) * ${ratio} + 0.25rem)` : "0",
    });

    return (
        <div
            data-testid="histogram-bar"
            className={clsx(
                styles.bar,
                isDisabled && isSelected && styles.barSelectedDisabled,
                isDisabled && styles.barDisabled,
                isSelected && styles.barSelected
            )}
            ref={barRef}
        />
    );
};
