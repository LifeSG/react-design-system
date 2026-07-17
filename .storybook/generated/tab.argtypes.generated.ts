// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const tabExtraArgTypes = {
    "TabItemProps.children": {
        "control": false,
        "name": "children",
        "table": {
            "category": "TabItemProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "JSX.Element | JSX.Element[]"
            }
        }
    },
    "TabItemProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "TabItemProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabItemProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "TabItemProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabItemProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "TabItemProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabItemProps.title": {
        "control": false,
        "description": "Text label rendered in the tab link bar for this panel.",
        "name": "title",
        "table": {
            "category": "TabItemProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabItemProps.titleAddon": {
        "control": false,
        "description": "Optional addon element rendered alongside the tab title in the link bar.",
        "name": "titleAddon",
        "table": {
            "category": "TabItemProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "TitleAddonProps"
            }
        }
    },
    "TabItemProps.width": {
        "control": false,
        "description": "Explicit width for this tab link in the tab bar. Accepts any valid CSS width value.",
        "name": "width",
        "table": {
            "category": "TabItemProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabProps.children": {
        "control": false,
        "name": "children",
        "table": {
            "category": "TabProps",
            "tabGroup": "Tab",
            "type": {
                "summary": "JSX.Element | JSX.Element[]"
            }
        }
    },
    "TabProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "TabProps",
            "tabGroup": "Tab",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabProps.currentActive": {
        "control": false,
        "description": "Zero-based index of the currently active tab panel.\n\nWhen provided, the component operates in controlled mode — the caller is\nresponsible for updating this value in response to `onTabClick` to\nreflect tab changes.",
        "name": "currentActive",
        "table": {
            "category": "TabProps",
            "tabGroup": "Tab",
            "type": {
                "summary": "number"
            }
        }
    },
    "TabProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "TabProps",
            "tabGroup": "Tab",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabProps.fadeColor": {
        "control": false,
        "description": "Background color(s) used for the fade overlays at the edges of the\nscrollable tab link bar.\n\nPass a `string[]` to apply the same gradient stop colors on both edges,\nor a `FadeColorSet` to specify left and right edges independently.",
        "name": "fadeColor",
        "table": {
            "category": "TabProps",
            "tabGroup": "Tab",
            "type": {
                "summary": "string[] | FadeColorSet"
            }
        }
    },
    "TabProps.fullWidthIndicatorLine": {
        "control": false,
        "description": "Extends all tab indicator lines to the full width\nof the tab bar instead of matching only the tab link width.",
        "name": "fullWidthIndicatorLine",
        "table": {
            "category": "TabProps",
            "defaultValue": {
                "summary": "false"
            },
            "tabGroup": "Tab",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "TabProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "TabProps",
            "tabGroup": "Tab",
            "type": {
                "summary": "string"
            }
        }
    },
    "TabProps.initialActive": {
        "control": false,
        "description": "Zero-based index of the tab panel displayed on first render.\n\nIgnored when `currentActive` is provided.",
        "name": "initialActive",
        "table": {
            "category": "TabProps",
            "defaultValue": {
                "summary": "0"
            },
            "tabGroup": "Tab",
            "type": {
                "summary": "number"
            }
        }
    },
    "TabProps.onTabClick": {
        "control": false,
        "description": "Called when the user clicks a tab link.",
        "name": "onTabClick",
        "table": {
            "category": "TabProps",
            "tabGroup": "Tab",
            "type": {
                "summary": "((title: string, index: number) => void)"
            }
        }
    },
    "TitleAddonProps.content": {
        "control": false,
        "description": "The element rendered as the addon.",
        "name": "content",
        "table": {
            "category": "TitleAddonProps",
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "JSX.Element"
            }
        }
    },
    "TitleAddonProps.position": {
        "control": false,
        "description": "Which side of the tab title the addon appears on.",
        "name": "position",
        "table": {
            "category": "TitleAddonProps",
            "defaultValue": {
                "summary": "\"right\""
            },
            "tabGroup": "Tab.Item",
            "type": {
                "summary": "\"left\" | \"right\""
            }
        }
    }
} satisfies Record<string, unknown>;
