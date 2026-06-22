// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputSliderExtraArgTypes = {
    "InputSliderProps.value": {
        name: "value",
        control: false,
        table: {
            category: "InputSliderProps",
            type: {
                summary: "number",
            },
        },
    },
    "InputSliderProps.ariaLabel": {
        name: "ariaLabel",
        control: false,
        table: {
            category: "InputSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "InputSliderProps.onChange": {
        name: "onChange",
        description: "Called on every selection change",
        control: false,
        table: {
            category: "InputSliderProps",
            type: {
                summary: "((value: number) => void)",
            },
        },
    },
    "InputSliderProps.onChangeEnd": {
        name: "onChangeEnd",
        description:
            "Called when the thumb is released after selection is complete",
        control: false,
        table: {
            category: "InputSliderProps",
            type: {
                summary: "((value: number) => void)",
            },
        },
    },
} satisfies Record<string, unknown>;
