/// <reference types="react" />
interface Props {
    value: string | number | readonly string[];
    maxLength: number;
    renderCustomCounter?: (maxLength: number, currentValueLength: number) => JSX.Element;
}
export declare const TextareaCounter: ({ value, maxLength, renderCustomCounter, }: Props) => JSX.Element;
export {};
