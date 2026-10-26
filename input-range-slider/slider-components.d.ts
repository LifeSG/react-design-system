import type React from "react";
interface ThumbProps extends React.HTMLAttributes<HTMLDivElement> {
    focused: boolean | undefined;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
}
export declare const Thumb: (props: ThumbProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
interface TrackProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
}
export declare const Track: (props: TrackProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
interface SliderProps {
    selection: number[];
    min: number;
    max: number;
    step: number;
    minRange: number;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    trackColors: (string | undefined)[];
    focusedThumbIndex: number | null;
    onChange?: ((value: number[]) => void) | undefined;
    onChangeEnd?: ((value: number[]) => void) | undefined;
}
export declare const Slider: ({ selection, min, max, step, minRange, disabled, readOnly, trackColors, focusedThumbIndex, onChange, onChangeEnd, }: SliderProps) => import("react/jsx-runtime").JSX.Element;
export {};
