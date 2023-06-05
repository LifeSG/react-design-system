/// <reference types="react" />
import { ActionType } from "./date-input-reducer";
import { FocusType } from "../shared/internal-calendar";
import { VariantStyleProps } from "./stand-alone-input.style";
type StartInputNames = "start-day" | "start-month" | "start-year";
type EndInputNames = "end-day" | "end-month" | "end-year";
export type FieldType = StartInputNames | EndInputNames | "none";
interface Props {
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    names: ["start-day", "start-month", "start-year"] | ["end-day", "end-month", "end-year"];
    value: string | undefined;
    confirmedValue: string | undefined;
    variant: VariantStyleProps;
    action: ActionType;
    focused: boolean;
    focusType: FocusType;
    isOpen: boolean;
    onChange: (value: string) => void;
    onFocus: (value: FieldType) => void;
}
export declare const StandAloneInput: ({ action, disabled, confirmedValue, onChange, onFocus, readOnly, names, value, variant, focused, focusType, isOpen, }: Props) => JSX.Element;
export declare const INVALID_VALUE: "Invalid Date";
export {};
