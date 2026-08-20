import clsx from "clsx";
import type React from "react";
import { forwardRef, useRef, useState } from "react";

import { useApplyStyle } from "../theme";
import { mergeRefs, useIsomorphicLayoutEffect } from "../util";
import * as styles from "./input-range-slider.styles";

interface ThumbProps extends React.HTMLAttributes<HTMLDivElement> {
    focused: boolean | undefined;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
}

const InnerThumb = (
    {
        focused,
        disabled,
        readOnly,
        className,
        style,
        ...otherProps
    }: ThumbProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const thumbRef = useRef<HTMLDivElement>(null);

    useApplyStyle(thumbRef, style);

    return (
        <div
            ref={mergeRefs(thumbRef, ref)}
            {...otherProps}
            className={clsx(styles.sliderThumb, className)}
            data-focused={focused ? "true" : undefined}
        >
            <div
                className={clsx(
                    styles.knob,
                    disabled && styles.knobDisabled,
                    !disabled && !readOnly && styles.knobInteractive
                )}
            />
        </div>
    );
};

export const Thumb = forwardRef(InnerThumb);

interface TrackProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
}

const InnerTrack = (
    { color, className, style, ...otherProps }: TrackProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const trackRef = useRef<HTMLDivElement>(null);

    useApplyStyle(trackRef, {
        [styles.tokens.track.backgroundColor]: color,
    });

    useApplyStyle(trackRef, style);

    return (
        <div
            {...otherProps}
            className={clsx(styles.sliderTrack, className)}
            ref={mergeRefs(trackRef, ref)}
        />
    );
};

export const Track = forwardRef(InnerTrack);

// =============================================================================
// SLIDER
// =============================================================================

interface SliderProps {
    selection: number[];
    min: number;
    max: number;
    step: number;
    minRange: number;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
    trackColors: (string | undefined)[];
    focusedThumbIndex: number | null;
    onChange: ((value: number[]) => void) | undefined;
    onChangeEnd: ((value: number[]) => void) | undefined;
    onSelectionChange: (value: number[]) => void;
}

export const Slider = ({
    selection,
    min,
    max,
    step,
    minRange,
    disabled,
    readOnly,
    trackColors,
    focusedThumbIndex,
    onChange,
    onChangeEnd,
    onSelectionChange,
}: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    // the maximum offset of the thumb from the start of the slider
    const [maxThumbOffset, setMaxThumbOffset] = useState(0);

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
            setMaxThumbOffset(sliderWidth - thumbWidth);
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(slider);

        return () => observer.disconnect();
    }, []);

    function getPercent(val: number) {
        if (max === min) return 0;
        return ((val - min) / (max - min)) * 100;
    }

    function toOffset(percent: number) {
        if (percent === 0) return "0px";
        return `${(percent / 100) * maxThumbOffset}px`;
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

    function clampValue(nextValue: number, index: number, values: number[]) {
        let low = min;
        let high = max;
        if (index > 0) low = values[index - 1] + minRange;
        if (index < values.length - 1) high = values[index + 1] - minRange;
        return Math.max(low, Math.min(high, nextValue));
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
            const clamped = clampValue(rawValue, thumbIndex, dragValues);

            if (clamped === dragValues[thumbIndex]) return;

            dragValues[thumbIndex] = clamped;
            const nextValues = [...dragValues];

            onSelectionChange(nextValues);
            onChange?.(nextValues);
        };

        const onEnd = () => {
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onEnd);
            document.removeEventListener("pointercancel", onEnd);

            const finalValues = [...dragValues];
            onSelectionChange(finalValues);
            onChangeEnd?.(finalValues);
        };

        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onEnd);
        document.addEventListener("pointercancel", onEnd);
    }

    // handler for clicking on a position on the track (not the thumb)
    // the nearest thumb to the pointer will get moved to that position
    function handleTrackPointerDown(event: React.PointerEvent<HTMLDivElement>) {
        if (disabled || readOnly) return;
        if (event.button !== 0) return;

        event.preventDefault();
        const clickedValue = getValueFromClientX(event.clientX);
        const index = findNearestThumbIndex(clickedValue);
        const clamped = clampValue(clickedValue, index, selection);

        const nextValues = [...selection];
        nextValues[index] = clamped;

        onSelectionChange(nextValues);
        onChange?.(nextValues);
        onChangeEnd?.(nextValues);
    }

    function handleThumbKeyDown(
        event: React.KeyboardEvent<HTMLDivElement>,
        thumbIndex: number
    ) {
        if (disabled || readOnly) return;

        const currentValue = selection[thumbIndex];
        let newValue: number;

        switch (event.key) {
            case "ArrowLeft":
            case "ArrowDown":
                newValue = currentValue - step;
                break;
            case "ArrowRight":
            case "ArrowUp":
                newValue = currentValue + step;
                break;
            case "Home":
                newValue = min;
                break;
            case "End":
                newValue = max;
                break;
            case "PageDown":
                newValue = currentValue - step * 10;
                break;
            case "PageUp":
                newValue = currentValue + step * 10;
                break;
            default:
                return;
        }

        event.preventDefault();
        const clamped = clampValue(newValue, thumbIndex, selection);
        if (clamped === currentValue) return;

        const nextValues = [...selection];
        nextValues[thumbIndex] = clamped;

        onSelectionChange(nextValues);
        onChange?.(nextValues);
        onChangeEnd?.(nextValues);
    }

    return (
        <div
            ref={sliderRef}
            className={styles.slider}
            aria-hidden="true"
            onPointerDown={handleTrackPointerDown}
        >
            {Array.from({ length: selection.length + 1 }, (_, i) => {
                const leftPercent = i === 0 ? 0 : getPercent(selection[i - 1]);
                const rightPercent =
                    i === selection.length ? 0 : 100 - getPercent(selection[i]);
                return (
                    <Track
                        key={`track-${i}`}
                        data-testid={`slider-track-${i}`}
                        color={trackColors[i]}
                        style={{
                            [styles.tokens.track.left]: toOffset(leftPercent),
                            [styles.tokens.track.right]: toOffset(rightPercent),
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
                    onKeyDown={(e) => handleThumbKeyDown(e, index)}
                />
            ))}
        </div>
    );
};
