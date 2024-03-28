/// <reference types="react" />
import { TimeFormat } from "../../util/time-helper";
interface TimepickerDropdownProps {
    id?: string;
    value: string;
    show: boolean;
    format: TimeFormat;
    onChange: (value: string) => void;
    onCancel: () => void;
}
export declare const TimepickerDropdown: ({ id, value, show, format, onChange, onCancel, }: TimepickerDropdownProps) => JSX.Element;
export {};
