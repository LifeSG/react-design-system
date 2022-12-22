/// <reference types="react" />
import { TimepickerFormat } from "./types";
interface IProps {
    id?: string;
    value: string;
    show: boolean;
    format: TimepickerFormat;
    onChange: (value: string) => void;
    onCancel: () => void;
}
export declare const TimepickerDropdown: ({ id, value, show, format, onChange, onCancel, }: IProps) => JSX.Element;
export {};
