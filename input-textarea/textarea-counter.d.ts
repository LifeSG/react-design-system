interface Props {
    value: string | number | readonly string[] | undefined;
    maxLength: number;
    renderCustomCounter?: (maxLength: number, currentValueLength: number) => JSX.Element;
}
export declare const TextareaCounter: ({ value, maxLength, renderCustomCounter, }: Props) => JSX.Element;
export {};
