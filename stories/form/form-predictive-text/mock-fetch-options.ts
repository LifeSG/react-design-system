export const mockFetchOptions = async (input: string) => {
    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (input === "empty") {
        return [];
    }
    return [
        { label: `Option ${input}-1`, value: `${input}1` },
        { label: `Option ${input}-2`, value: `${input}2` },
        { label: `Option ${input}-3`, value: `${input}3` },
    ];
};

export const mockFetchOptionsWithSecondaryLabel = async (input: string) => {
    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (input === "empty") {
        return [];
    }
    return [
        {
            title: `Option ${input}-1`,
            secondaryLabel: "Test1",
            value: `${input}1`,
        },
        {
            title: `Option ${input}-2`,
            secondaryLabel: "Test2",
            value: `${input}2`,
        },
        {
            title: `Option ${input}-3`,
            secondaryLabel: "Test3",
            value: `${input}3`,
        },
    ];
};
