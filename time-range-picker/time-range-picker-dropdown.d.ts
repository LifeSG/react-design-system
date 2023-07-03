/// <reference types="react" />
import { TimeRangePickerFormat } from "./types";
interface IProps {
    id?: string;
    value: string;
    show: boolean;
    format: TimeRangePickerFormat;
    onChange: (value: string) => void;
    onCancel: () => void;
}
export declare const TimeRangePickerDropdown: ({ id, value, show, format, onChange, onCancel, }: IProps) => JSX.Element;
export {};
