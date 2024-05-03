import React from "react";
type StartInputNames = ["start-day", "start-month", "start-year"];
type EndInputNames = ["end-day", "end-month", "end-year"];
export type FieldType = StartInputNames[number] | EndInputNames[number] | "none";
interface Props {
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    hideInputKeyboard?: boolean | undefined;
    names: StartInputNames | EndInputNames;
    value: string | undefined;
    hoverValue?: string | undefined;
    focused: boolean;
    placeholder?: string | undefined;
    label?: string | undefined;
    onChange: (value: string) => void;
    onFocus: () => void;
    onBlur?: ((valid: boolean) => void) | undefined;
}
export interface StandaloneDateInputRef {
    ref: React.RefObject<HTMLDivElement>;
    resetPlaceholder: () => void;
    resetInput: () => void;
}
export declare const Component: ({ disabled, readOnly, names, value, focused, hoverValue, placeholder, label, onChange, onFocus, onBlur, hideInputKeyboard, }: Props, ref: React.ForwardedRef<StandaloneDateInputRef>) => JSX.Element;
export declare const StandaloneDateInput: (props: Props & React.RefAttributes<StandaloneDateInputRef>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
