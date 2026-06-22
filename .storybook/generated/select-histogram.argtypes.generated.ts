// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const selectHistogramExtraArgTypes = {
    "SelectHistogramProps.alignment": {
        name: "alignment",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "SelectHistogramProps.className": {
        name: "className",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "string",
            },
        },
    },
    "SelectHistogramProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "string",
            },
        },
    },
    "SelectHistogramProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "SelectHistogramProps.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "number",
            },
        },
    },
    "SelectHistogramProps.error": {
        name: "error",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "SelectHistogramProps.id": {
        name: "id",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "string",
            },
        },
    },
    "SelectHistogramProps.histogramSlider": {
        name: "histogramSlider",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "SelectHistogramSliderProps",
            },
        },
    },
    "SelectHistogramProps.optionTruncationType": {
        name: "optionTruncationType",
        description:
            'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "TruncateType",
            },
        },
    },
    "SelectHistogramProps.placeholder": {
        name: "placeholder",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "string",
            },
        },
    },
    "SelectHistogramProps.rangeLabelPrefix": {
        name: "rangeLabelPrefix",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "string",
            },
        },
    },
    "SelectHistogramProps.rangeLabelSuffix": {
        name: "rangeLabelSuffix",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "string",
            },
        },
    },
    "SelectHistogramProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "SelectHistogramProps.value": {
        name: "value",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "[number, number]",
            },
        },
    },
    "SelectHistogramProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "SelectHistogramProps.onBlur": {
        name: "onBlur",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "SelectHistogramProps.onChange": {
        name: "onChange",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "((value: [number, number]) => void)",
            },
        },
    },
    "SelectHistogramProps.onChangeEnd": {
        name: "onChangeEnd",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "((value: [number, number]) => void)",
            },
        },
    },
    "SelectHistogramProps.renderRangeLabel": {
        name: "renderRangeLabel",
        control: false,
        table: {
            category: "SelectHistogramProps",
            type: {
                summary: "((value: number) => React.ReactNode)",
            },
        },
    },
    SelectHistogramSliderProps: {
        name: "SelectHistogramSliderProps",
        control: false,
        table: {
            category: "SelectHistogramSliderProps",
            type: {
                summary:
                    'Pick< HistogramSliderProps, "bins" | "interval" | "renderEmptyView" | "ariaLabels" >',
            },
        },
    },
} satisfies Record<string, unknown>;
