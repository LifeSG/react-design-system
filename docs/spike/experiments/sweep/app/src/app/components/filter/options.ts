export const getOptions = (count: number) =>
    Array.from({ length: count }, (_, i) => ({
        value: `option-${i + 1}`,
        label: `Option ${i + 1}`,
    }));
