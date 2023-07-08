export function useNextInputState({
    ref,
    formatter,
}: {
    ref: React.RefObject<HTMLInputElement>;
    formatter: (value: string) => string;
}) {
    const getNextInputState = () => {
        const el = ref.current;
        const rawValue = el.value;
        const nextValue = formatter(rawValue);

        // compensate for characters that will be removed and added to the
        // string before the text caret
        const rawSubstr = rawValue.substring(0, el.selectionEnd);
        const nextSubstr = formatter(rawSubstr);
        const diff = rawSubstr.length - nextSubstr.length;
        const nextCursorPosition = Math.max(0, el.selectionEnd - diff);

        const updateCursorPosition = () => {
            el.value = nextValue;
            el.setSelectionRange(nextCursorPosition, nextCursorPosition);
        };

        return {
            nextValue,
            nextCursorPosition,
            updateCursorPosition,
        };
    };

    return getNextInputState;
}
