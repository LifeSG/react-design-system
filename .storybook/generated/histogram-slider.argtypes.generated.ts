// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const histogramSliderExtraArgTypes = {
    "HistogramBinProps.count": {
        name: "count",
        control: false,
        table: {
            category: "HistogramBinProps",
            type: {
                summary: "number",
            },
        },
    },
    "HistogramBinProps.minValue": {
        name: "minValue",
        control: false,
        table: {
            category: "HistogramBinProps",
            type: {
                summary: "number",
            },
        },
    },
    "HistogramSliderProps.className": {
        name: "className",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "HistogramSliderProps.id": {
        name: "id",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "HistogramSliderProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "HistogramSliderProps.bins": {
        name: "bins",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "HistogramBinProps[]",
            },
        },
    },
    "HistogramSliderProps.interval": {
        name: "interval",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "number",
            },
        },
    },
    "HistogramSliderProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "HistogramSliderProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "HistogramSliderProps.value": {
        name: "value",
        description: "The selected range, in the format `[start, end]`",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "[number, number]",
            },
        },
    },
    "HistogramSliderProps.showRangeLabels": {
        name: "showRangeLabels",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "HistogramSliderProps.rangeLabelPrefix": {
        name: "rangeLabelPrefix",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "HistogramSliderProps.rangeLabelSuffix": {
        name: "rangeLabelSuffix",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "HistogramSliderProps.ariaLabels": {
        name: "ariaLabels",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "[string, string]",
            },
        },
    },
    "HistogramSliderProps.aria-labelledby": {
        name: "aria-labelledby",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "HistogramSliderProps.aria-describedby": {
        name: "aria-describedby",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "string",
            },
        },
    },
    "HistogramSliderProps.renderRangeLabel": {
        name: "renderRangeLabel",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "((value: number) => React.ReactNode)",
            },
        },
    },
    "HistogramSliderProps.onChange": {
        name: "onChange",
        description:
            "Called on every selection change. Returns the value in the format `[start, end]`",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "((value: [number, number]) => void)",
            },
        },
    },
    "HistogramSliderProps.onChangeEnd": {
        name: "onChangeEnd",
        description:
            "Called when a thumb is released after selection is complete. Returns the value in the format `[start, end]`",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "((value: [number, number]) => void)",
            },
        },
    },
    "HistogramSliderProps.renderEmptyView": {
        name: "renderEmptyView",
        control: false,
        table: {
            category: "HistogramSliderProps",
            type: {
                summary: "(() => React.ReactNode)",
            },
        },
    },
} satisfies Record<string, unknown>;
