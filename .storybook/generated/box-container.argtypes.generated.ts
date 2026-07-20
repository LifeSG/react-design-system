// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const boxContainerExtraArgTypes = {
    "BoxContainerDisplayState": {
        "control": false,
        "description": "Visual status applied to the box container header, reflected via an icon and accessible label.",
        "name": "BoxContainerDisplayState",
        "table": {
            "category": "BoxContainerDisplayState",
            "type": {
                "summary": "'default' | 'warning' | 'error'"
            }
        }
    },
    "BoxContainerProps.callToActionComponent": {
        "control": false,
        "description": "Optional element rendered in the header alongside the title, e.g. a link or button.",
        "name": "callToActionComponent",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "JSX.Element"
            }
        }
    },
    "BoxContainerProps.children": {
        "control": false,
        "name": "children",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "JSX.Element | JSX.Element[]"
            }
        }
    },
    "BoxContainerProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "BoxContainerProps.clickableHeader": {
        "control": false,
        "description": "When `true` (and `collapsible` is also `true`), the entire header row\nbecomes a click target for toggling expand/collapse, not just the chevron\nbutton.",
        "name": "clickableHeader",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "BoxContainerProps.collapsible": {
        "control": false,
        "description": "When `false`, the container is always expanded and the collapse handle is\nhidden.",
        "name": "collapsible",
        "table": {
            "category": "BoxContainerProps",
            "defaultValue": {
                "summary": "true"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "BoxContainerProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "BoxContainerProps.displayState": {
        "control": false,
        "description": "Renders an inline alert icon next to the title and announces the state to\nscreen readers. Has no effect when set to `\"default\"`.",
        "name": "displayState",
        "table": {
            "category": "BoxContainerProps",
            "defaultValue": {
                "summary": "\"default\""
            },
            "type": {
                "summary": "BoxContainerDisplayState"
            }
        }
    },
    "BoxContainerProps.expanded": {
        "control": false,
        "description": "Initial expanded state when `collapsible` is `true`.",
        "name": "expanded",
        "table": {
            "category": "BoxContainerProps",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "BoxContainerProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "BoxContainerProps.subComponentTestIds": {
        "control": false,
        "name": "subComponentTestIds",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "BoxContainerSubComponentTestIds"
            }
        }
    },
    "BoxContainerProps.title": {
        "control": false,
        "name": "title",
        "table": {
            "category": "BoxContainerProps",
            "type": {
                "summary": "string | JSX.Element"
            }
        }
    },
    "BoxContainerSubComponentTestIds.displayStateIcon": {
        "control": false,
        "name": "displayStateIcon",
        "table": {
            "category": "BoxContainerSubComponentTestIds",
            "type": {
                "summary": "string"
            }
        }
    },
    "BoxContainerSubComponentTestIds.handle": {
        "control": false,
        "name": "handle",
        "table": {
            "category": "BoxContainerSubComponentTestIds",
            "type": {
                "summary": "string"
            }
        }
    },
    "BoxContainerSubComponentTestIds.title": {
        "control": false,
        "name": "title",
        "table": {
            "category": "BoxContainerSubComponentTestIds",
            "type": {
                "summary": "string"
            }
        }
    }
} satisfies Record<string, unknown>;
