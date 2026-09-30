export declare const PAGE_STEP_MULTIPLIER = 10;
export declare function getPercent(val: number, min: number, max: number): number;
export declare function toOffset(percent: number, maxThumbOffset: number): string;
type GetValueFromClientXParams = {
    clientX: number;
    sliderEl: HTMLDivElement | null;
    min: number;
    max: number;
    step: number;
};
export declare function getValueFromClientX({ clientX, sliderEl, min, max, step, }: GetValueFromClientXParams): number;
export declare function clampValue(nextValue: number, index: number, values: number[], min: number, max: number, minRange: number): number;
export declare function findNearestThumbIndex(val: number, selection: number[]): number;
export {};
