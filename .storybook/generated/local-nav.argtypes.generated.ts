// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const localNavExtraArgTypes = {
    "LocalNavDropdown__LocalNavItemProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "LocalNavItemProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavDropdown__LocalNavItemProps.title": {
        "control": false,
        "name": "title",
        "table": {
            "category": "LocalNavItemProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "string | React.ReactNode"
            }
        }
    },
    "LocalNavDropdownItemRenderProps.selected": {
        "control": false,
        "description": "Whether this item is the currently selected navigation item.",
        "name": "selected",
        "table": {
            "category": "LocalNavDropdownItemRenderProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "LocalNavDropdownItemRenderProps.stickied": {
        "control": false,
        "description": "Whether the dropdown is currently in its stickied (fixed) state.\nUse this to conditionally style items differently when the nav is pinned.",
        "name": "stickied",
        "table": {
            "category": "LocalNavDropdownItemRenderProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "LocalNavDropdownProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavDropdownProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavDropdownProps.defaultLabel": {
        "control": false,
        "description": "Label shown in the collapsed trigger when no item is selected or when the\ndropdown is not stickied. Once the dropdown is stickied and an item is\nselected, the trigger displays the selected item's title instead.",
        "name": "defaultLabel",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "string | React.ReactNode"
            }
        }
    },
    "LocalNavDropdownProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavDropdownProps.items": {
        "control": false,
        "description": "The list of navigation items to render.",
        "name": "items",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "LocalNavItemProps[]"
            }
        }
    },
    "LocalNavDropdownProps.onNavItemSelect": {
        "control": false,
        "description": "Called when a navigation item is activated.",
        "name": "onNavItemSelect",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "( e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void"
            }
        }
    },
    "LocalNavDropdownProps.renderItem": {
        "control": false,
        "description": "Custom renderer for each item in the dropdown list.",
        "name": "renderItem",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)"
            }
        }
    },
    "LocalNavDropdownProps.selectedItemIndex": {
        "control": false,
        "description": "Zero-based index of the currently selected item.",
        "name": "selectedItemIndex",
        "table": {
            "category": "LocalNavDropdownProps",
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "number"
            }
        }
    },
    "LocalNavDropdownProps.stickyOffset": {
        "control": false,
        "description": "Distance in pixels from the top of the viewport while the dropdown is stickied.",
        "name": "stickyOffset",
        "table": {
            "category": "LocalNavDropdownProps",
            "defaultValue": {
                "summary": "0"
            },
            "tabGroup": "LocalNavDropdown",
            "type": {
                "summary": "number"
            }
        }
    },
    "LocalNavMenu__LocalNavItemProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "LocalNavItemProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavMenu__LocalNavItemProps.title": {
        "control": false,
        "name": "title",
        "table": {
            "category": "LocalNavItemProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "string | React.ReactNode"
            }
        }
    },
    "LocalNavMenuItemRenderProps.selected": {
        "control": false,
        "description": "Whether this item is the currently selected navigation item.",
        "name": "selected",
        "table": {
            "category": "LocalNavMenuItemRenderProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "LocalNavMenuProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "LocalNavMenuProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavMenuProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "LocalNavMenuProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavMenuProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "LocalNavMenuProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "string"
            }
        }
    },
    "LocalNavMenuProps.items": {
        "control": false,
        "description": "The list of navigation items to render.",
        "name": "items",
        "table": {
            "category": "LocalNavMenuProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "LocalNavItemProps[]"
            }
        }
    },
    "LocalNavMenuProps.onNavItemSelect": {
        "control": false,
        "description": "Called when a navigation item is activated.",
        "name": "onNavItemSelect",
        "table": {
            "category": "LocalNavMenuProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "( e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void"
            }
        }
    },
    "LocalNavMenuProps.renderItem": {
        "control": false,
        "description": "Custom renderer for each navigation item.",
        "name": "renderItem",
        "table": {
            "category": "LocalNavMenuProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)"
            }
        }
    },
    "LocalNavMenuProps.selectedItemIndex": {
        "control": false,
        "description": "Zero-based index of the currently selected item.",
        "name": "selectedItemIndex",
        "table": {
            "category": "LocalNavMenuProps",
            "tabGroup": "LocalNavMenu",
            "type": {
                "summary": "number"
            }
        }
    }
} satisfies Record<string, unknown>;
