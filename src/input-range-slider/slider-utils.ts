export function getPercent(val: number, min: number, max: number) {
    if (max === min) return 0;
    return ((val - min) / (max - min)) * 100;
}

export function toOffset(percent: number, maxThumbOffset: number) {
    if (percent === 0) return "0px";
    return `${(percent / 100) * maxThumbOffset}px`;
}

export function getValueFromClientX(
    clientX: number,
    sliderEl: HTMLDivElement | null,
    min: number,
    max: number,
    step: number
) {
    if (!sliderEl) return min;

    const rect = sliderEl.getBoundingClientRect();
    if (rect.width === 0) return min;

    const fraction = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width)
    );
    const rawValue = min + fraction * (max - min);
    const snapped = Math.round((rawValue - min) / step) * step + min;
    return Math.max(min, Math.min(max, snapped));
}

export function clampValue(
    nextValue: number,
    index: number,
    values: number[],
    min: number,
    max: number,
    minRange: number
) {
    let low = min;
    let high = max;
    if (index > 0) low = values[index - 1] + minRange;
    if (index < values.length - 1) high = values[index + 1] - minRange;
    return Math.max(low, Math.min(high, nextValue));
}

export function findNearestThumbIndex(val: number, selection: number[]) {
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
