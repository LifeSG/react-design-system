/// <reference types="react" />
interface Props {
    value: string | number | readonly string[];
    maxLength: number;
    disabled?: boolean | undefined;
}
export declare const TextareaCounter: ({ value, maxLength, disabled, }: Props) => JSX.Element;
export {};
