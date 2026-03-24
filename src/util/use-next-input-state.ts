export function useNextInputState({
    ref,
    formatter,
}: {
    ref: React.RefObject<HTMLInputElement>;
    formatter: (value: string) => string;
}) {
    const getNextInputState = () => {
        const el = ref.current;
        if (!el) return;

        const rawValue = el.value;
        const nextValue = formatter(rawValue);
        const selectionEnd = el.selectionEnd ?? 0;

        // compensate for characters that will be removed and added to the
        // string before the text caret
        const rawSubstr = rawValue.substring(0, selectionEnd);
        const nextSubstr = formatter(rawSubstr);
        const diff = rawSubstr.length - nextSubstr.length;
        const nextCaretPosition = Math.max(0, selectionEnd - diff);

        const updateCaretPosition = () => {
            el.value = nextValue;
            el.setSelectionRange(nextCaretPosition, nextCaretPosition);
        };

        return {
            nextValue,
            updateCaretPosition,
        };
    };

    return getNextInputState;
}
