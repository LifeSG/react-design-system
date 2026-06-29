import { TimeFormat } from "../../util/time-helper";
interface TimepickerDropdownProps {
    id?: string;
    value: string | undefined;
    show: boolean;
    format: TimeFormat;
    onChange: (value: string) => void;
    onCancel: () => void;
}
export declare const TimepickerDropdown: ({ id, value, show, format, onChange, onCancel, }: TimepickerDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
