/// <reference types="react" />
interface Props {
    value: string | number | readonly string[];
    maxLength: number;
    disabled?: boolean | undefined;
    renderCustomCounter?: (maxLength: number, currentValueLength: number) => JSX.Element;
}
export declare const TextareaCounter: ({ value, maxLength, disabled, renderCustomCounter, }: Props) => JSX.Element;
export {};
