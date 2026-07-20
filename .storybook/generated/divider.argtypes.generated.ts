// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dividerExtraArgTypes = {
    "DividerLayoutType": {
        "control": false,
        "name": "DividerLayoutType",
        "table": {
            "category": "DividerLayoutType",
            "type": {
                "summary": "'grid' | 'flex'"
            }
        }
    },
    "DividerLineStyleType": {
        "control": false,
        "description": "Visual style of the line.",
        "name": "DividerLineStyleType",
        "table": {
            "category": "DividerLineStyleType",
            "type": {
                "summary": "'solid' | 'dashed'"
            }
        }
    },
    "DividerProps.color": {
        "control": false,
        "description": "Color of the line. Accepts a design-system colour token or any valid CSS\ncolor value.",
        "name": "color",
        "table": {
            "category": "DividerProps",
            "defaultValue": {
                "summary": "Colour[\"border\"]"
            },
            "type": {
                "summary": "string"
            }
        }
    },
    "DividerProps.inert": {
        "control": false,
        "name": "inert",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "boolean | string"
            }
        }
    },
    "DividerProps.layoutType": {
        "control": false,
        "description": "Controls how the divider is rendered relative to its parent layout.\n\nUse `\"flex\"` when the divider is a direct child of a flex container.\nUse `\"grid\"` to wrap the line in a `ColDiv`, enabling responsive\ncolumn-span control via the `xxsCols`–`xxlCols` props.",
        "name": "layoutType",
        "table": {
            "category": "DividerProps",
            "defaultValue": {
                "summary": "\"flex\""
            },
            "type": {
                "summary": "DividerLayoutType"
            }
        }
    },
    "DividerProps.lgCols": {
        "control": false,
        "description": "Column span at the `lg` breakpoint.",
        "name": "lgCols",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "ColSpan"
            }
        }
    },
    "DividerProps.lineStyle": {
        "control": false,
        "description": "Visual style of the line.",
        "name": "lineStyle",
        "table": {
            "category": "DividerProps",
            "defaultValue": {
                "summary": "\"solid\""
            },
            "type": {
                "summary": "DividerLineStyleType"
            }
        }
    },
    "DividerProps.mdCols": {
        "control": false,
        "description": "Column span at the `md` breakpoint.",
        "name": "mdCols",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "ColSpan"
            }
        }
    },
    "DividerProps.smCols": {
        "control": false,
        "description": "Column span at the `sm` breakpoint.",
        "name": "smCols",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "ColSpan"
            }
        }
    },
    "DividerProps.thickness": {
        "control": false,
        "description": "Thickness of the line in pixels.",
        "name": "thickness",
        "table": {
            "category": "DividerProps",
            "defaultValue": {
                "summary": "1"
            },
            "type": {
                "summary": "number"
            }
        }
    },
    "DividerProps.xlCols": {
        "control": false,
        "description": "Column span at the `xl` breakpoint.",
        "name": "xlCols",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "ColSpan"
            }
        }
    },
    "DividerProps.xsCols": {
        "control": false,
        "description": "Column span at the `xs` breakpoint.",
        "name": "xsCols",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "ColSpan"
            }
        }
    },
    "DividerProps.xxlCols": {
        "control": false,
        "description": "Column span at the `xxl` breakpoint.",
        "name": "xxlCols",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "ColSpan"
            }
        }
    },
    "DividerProps.xxsCols": {
        "control": false,
        "description": "Column span at the `xxs` (smallest) breakpoint.\nActs as the base value. All larger breakpoints fall back to this when\ntheir own prop is not set.",
        "name": "xxsCols",
        "table": {
            "category": "DividerProps",
            "type": {
                "summary": "ColSpan"
            }
        }
    }
} satisfies Record<string, unknown>;
