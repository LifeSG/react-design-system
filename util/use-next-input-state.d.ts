export declare function useNextInputState({ ref, formatter, }: {
    ref: React.RefObject<HTMLInputElement>;
    formatter: (value: string) => string;
}): () => {
    nextValue: string;
    updateCaretPosition: () => void;
} | undefined;
