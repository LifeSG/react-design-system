// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const filterExtraArgTypes = {
    "Filter__FilterModalCustomLabelProps.clearButtonLabel": {
        control: false,
        description: "The display label of the `Clear` button",
        name: "clearButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Clear"',
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "Filter__FilterModalCustomLabelProps.doneButtonLabel": {
        control: false,
        description: "The display label of the `Done` button (in mobile)",
        name: "doneButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Done"',
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "Filter__FilterModalCustomLabelProps.headerTitle": {
        control: false,
        description: "The title of the filter header",
        name: "headerTitle",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Filters"',
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "Filter__FilterModalCustomLabelProps.toggleFilterButtonLabel": {
        control: false,
        description:
            "The display label of the filter toggle button (in mobile)",
        name: "toggleFilterButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Filters"',
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "Filter__FilterSidebarCustomLabelProps.clearButtonLabel": {
        control: false,
        description: "The display label of the `Clear` button",
        name: "clearButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarCustomLabelProps",
            defaultValue: {
                summary: '"Clear"',
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "Filter__FilterSidebarCustomLabelProps.headerTitle": {
        control: false,
        description: "The title of the filter header",
        name: "headerTitle",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarCustomLabelProps",
            defaultValue: {
                summary: '"Filters"',
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "Filter.Modal__FilterModalCustomLabelProps.clearButtonLabel": {
        control: false,
        description: "The display label of the `Clear` button",
        name: "clearButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Clear"',
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "Filter.Modal__FilterModalCustomLabelProps.doneButtonLabel": {
        control: false,
        description: "The display label of the `Done` button (in mobile)",
        name: "doneButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Done"',
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "Filter.Modal__FilterModalCustomLabelProps.headerTitle": {
        control: false,
        description: "The title of the filter header",
        name: "headerTitle",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Filters"',
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "Filter.Modal__FilterModalCustomLabelProps.toggleFilterButtonLabel": {
        control: false,
        description:
            "The display label of the filter toggle button (in mobile)",
        name: "toggleFilterButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalCustomLabelProps",
            defaultValue: {
                summary: '"Filters"',
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "Filter.Sidebar__FilterSidebarCustomLabelProps.clearButtonLabel": {
        control: false,
        description: "The display label of the `Clear` button",
        name: "clearButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarCustomLabelProps",
            defaultValue: {
                summary: '"Clear"',
            },
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "Filter.Sidebar__FilterSidebarCustomLabelProps.headerTitle": {
        control: false,
        description: "The title of the filter header",
        name: "headerTitle",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarCustomLabelProps",
            defaultValue: {
                summary: '"Filters"',
            },
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemProps.addon": {
        control: false,
        description: "Optional popover addon displayed inline with the title.",
        name: "addon",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "FormLabelAddonProps",
            },
        },
    },
    "FilterItemProps.children": {
        control: false,
        description:
            "Content rendered inside the filter item.\n\nPass a render function to receive the current `Mode` and minimised state,\nenabling content to adapt between desktop and mobile contexts.",
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary:
                    "React.ReactNode | ((mode: Mode, state: { minimised: boolean }) => React.ReactNode)",
            },
        },
    },
    "FilterItemProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemProps.collapsible": {
        control: false,
        description:
            "Whether the item can be expanded or collapsed in desktop mode.\nItems are always expanded in mobile mode regardless of this setting.",
        name: "collapsible",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            defaultValue: {
                summary: "true",
            },
            tabGroup: "Filter.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemProps.expanded": {
        control: false,
        description:
            "Controls the expanded state. When provided, the component is controlled\nand `onExpandChange` must be used to update the value.",
        name: "expanded",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemProps.initialExpanded": {
        control: false,
        description:
            "Initial expanded state for the uncontrolled component.\nHas no effect when `expanded` is provided.",
        name: "initialExpanded",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            defaultValue: {
                summary: "false",
            },
            tabGroup: "Filter.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemProps.minimisable": {
        control: false,
        description:
            'Whether the item content can be minimised to show a truncated height with\na "View more" button.',
        name: "minimisable",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            defaultValue: {
                summary: "false",
            },
            tabGroup: "Filter.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemProps.minimisedHeight": {
        control: false,
        description:
            "Height in pixels to clip the content when minimised.\nDefaults to 50% of content height, capped at 216 px.",
        name: "minimisedHeight",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "number",
            },
        },
    },
    "FilterItemProps.onExpandChange": {
        control: false,
        description: "Called when the user toggles the expand/collapse state.",
        name: "onExpandChange",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "(expanded: boolean) => void",
            },
        },
    },
    "FilterItemProps.showDivider": {
        control: false,
        description:
            "Whether a divider line is shown above the item in desktop mode.",
        name: "showDivider",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            defaultValue: {
                summary: "true",
            },
            tabGroup: "Filter.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemProps.showMobileDivider": {
        control: false,
        description:
            "Whether a divider line is shown above the item in mobile mode.",
        name: "showMobileDivider",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            defaultValue: {
                summary: "true",
            },
            tabGroup: "Filter.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemProps.style": {
        control: false,
        name: "style",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "React.CSSProperties",
            },
        },
    },
    "FilterItemProps.title": {
        control: false,
        description: "Label rendered in the item header.",
        name: "title",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "string",
            },
        },
    },
    "FilterModalProps.children": {
        control: false,
        description:
            'Content rendered inside the filter panel.\n\nPass a render function to receive the current `Mode` and conditionally\nrender different content for desktop (`"default"`) and mobile (`"mobile"`).',
        name: "children",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "ReactNode | ((mode: Mode) => ReactNode)",
            },
        },
    },
    "FilterModalProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "FilterModalProps.clearButtonDisabled": {
        control: false,
        description:
            "When `true`, the clear button is rendered in a disabled state.",
        name: "clearButtonDisabled",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            defaultValue: {
                summary: "false",
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterModalProps.count": {
        control: false,
        description:
            "Number of active filter selections displayed as a badge on the header and\ntoggle button.",
        name: "count",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "number",
            },
        },
    },
    "FilterModalProps.customLabels": {
        control: false,
        description: "Overrides default labels used by the modal variant.",
        name: "customLabels",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "FilterModalCustomLabelProps",
            },
        },
    },
    "FilterModalProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "FilterModalProps.doneButtonLabel": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "doneButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "FilterModalProps.headerTitle": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "headerTitle",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "FilterModalProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "FilterModalProps.insets": {
        control: false,
        description:
            "Safe-area insets applied to the modal header and footer, useful for\nnotch or home-indicator offsets on mobile devices.",
        name: "insets",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "Insets",
            },
        },
    },
    "FilterModalProps.onClear": {
        control: false,
        description: "Called when the clear button is pressed.",
        name: "onClear",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterModalProps.onDismiss": {
        control: false,
        description:
            "Called when the dismiss (close) button is pressed in the modal overlay.",
        name: "onDismiss",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterModalProps.onDone": {
        control: false,
        description:
            "Called when the done button is pressed in the modal overlay.",
        name: "onDone",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterModalProps.onModalOpen": {
        control: false,
        description:
            "Called when the modal overlay is opened by the toggle button.",
        name: "onModalOpen",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterModalProps.style": {
        control: false,
        name: "style",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            tabGroup: "Filter.Modal",
            type: {
                summary: "CSSProperties",
            },
        },
    },
    "FilterModalProps.toggleFilterButtonLabel": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "toggleFilterButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter.Modal",
            type: {
                summary: "string",
            },
        },
    },
    "FilterModalProps.toggleFilterButtonStyle": {
        control: false,
        description: "Visual style of the toggle button that opens the modal.",
        name: "toggleFilterButtonStyle",
        type: {
            required: false,
        },
        table: {
            category: "FilterModalProps",
            defaultValue: {
                summary: '"light"',
            },
            tabGroup: "Filter.Modal",
            type: {
                summaryParts: ["'default'", "'light'", "'link'", "'secondary'"],
            },
        },
    },
    "FilterPageProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "FilterPageProps",
            tabGroup: "Filter.Page",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "FilterPageProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FilterPageProps",
            tabGroup: "Filter.Page",
            type: {
                summary: "string",
            },
        },
    },
    "FilterPageProps.onDismiss": {
        control: false,
        description: "Called when the back (dismiss) button is pressed.",
        name: "onDismiss",
        type: {
            required: false,
        },
        table: {
            category: "FilterPageProps",
            tabGroup: "Filter.Page",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterPageProps.onDone": {
        control: false,
        description: "Called when the done button is pressed.",
        name: "onDone",
        type: {
            required: false,
        },
        table: {
            category: "FilterPageProps",
            tabGroup: "Filter.Page",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterProps.children": {
        control: false,
        description:
            'Content rendered inside the filter panel.\n\nPass a render function to receive the current `Mode` and conditionally\nrender different content for desktop (`"default"`) and mobile (`"mobile"`).',
        name: "children",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "ReactNode | ((mode: Mode) => ReactNode)",
            },
        },
    },
    "FilterProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "FilterProps.clearButtonDisabled": {
        control: false,
        description:
            "When `true`, the clear button is rendered in a disabled state.",
        name: "clearButtonDisabled",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            defaultValue: {
                summary: "false",
            },
            tabGroup: "Filter",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterProps.count": {
        control: false,
        description:
            "Number of active filter selections displayed as a badge on the header and\ntoggle button.",
        name: "count",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "number",
            },
        },
    },
    "FilterProps.customLabels": {
        control: false,
        description:
            "Overrides default labels for the active variant.\n\nOnly the labels relevant to the current mode (sidebar or modal) are used.",
        name: "customLabels",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summaryParts: [
                    "FilterModalCustomLabelProps",
                    "FilterSidebarCustomLabelProps",
                ],
            },
        },
    },
    "FilterProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "FilterProps.doneButtonLabel": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "doneButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "FilterProps.headerTitle": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "headerTitle",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "FilterProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "FilterProps.insets": {
        control: false,
        description:
            "Safe-area insets applied to the modal header and footer, useful for\nnotch or home-indicator offsets on mobile devices.",
        name: "insets",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "Insets",
            },
        },
    },
    "FilterProps.onClear": {
        control: false,
        description: "Called when the clear button is pressed.",
        name: "onClear",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterProps.onDismiss": {
        control: false,
        description:
            "Called when the dismiss (close) button is pressed in the modal overlay.",
        name: "onDismiss",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterProps.onDone": {
        control: false,
        description:
            "Called when the done button is pressed in the modal overlay.",
        name: "onDone",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterProps.onModalOpen": {
        control: false,
        description:
            "Called when the modal overlay is opened by the toggle button.",
        name: "onModalOpen",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterProps.style": {
        control: false,
        name: "style",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            tabGroup: "Filter",
            type: {
                summary: "CSSProperties",
            },
        },
    },
    "FilterProps.toggleFilterButtonLabel": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "toggleFilterButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter",
            type: {
                summary: "string",
            },
        },
    },
    "FilterProps.toggleFilterButtonStyle": {
        control: false,
        description: "Visual style of the toggle button that opens the modal.",
        name: "toggleFilterButtonStyle",
        type: {
            required: false,
        },
        table: {
            category: "FilterProps",
            defaultValue: {
                summary: '"light"',
            },
            tabGroup: "Filter",
            type: {
                summaryParts: ["'default'", "'light'", "'link'", "'secondary'"],
            },
        },
    },
    "FilterSidebarProps.children": {
        control: false,
        description:
            'Content rendered inside the filter panel.\n\nPass a render function to receive the current `Mode` and conditionally\nrender different content for desktop (`"default"`) and mobile (`"mobile"`).',
        name: "children",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "ReactNode | ((mode: Mode) => ReactNode)",
            },
        },
    },
    "FilterSidebarProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "FilterSidebarProps.clearButtonDisabled": {
        control: false,
        description:
            "When `true`, the clear button is rendered in a disabled state.",
        name: "clearButtonDisabled",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            defaultValue: {
                summary: "false",
            },
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterSidebarProps.count": {
        control: false,
        description:
            "Number of active filter selections displayed as a badge on the header and\ntoggle button.",
        name: "count",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "number",
            },
        },
    },
    "FilterSidebarProps.customLabels": {
        control: false,
        description: "Overrides default labels used by the sidebar variant.",
        name: "customLabels",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "FilterSidebarCustomLabelProps",
            },
        },
    },
    "FilterSidebarProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "FilterSidebarProps.doneButtonLabel": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "doneButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "FilterSidebarProps.headerTitle": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "headerTitle",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "FilterSidebarProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "FilterSidebarProps.onClear": {
        control: false,
        description: "Called when the clear button is pressed.",
        name: "onClear",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "() => void",
            },
        },
    },
    "FilterSidebarProps.style": {
        control: false,
        name: "style",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "CSSProperties",
            },
        },
    },
    "FilterSidebarProps.toggleFilterButtonLabel": {
        control: false,
        deprecated: "Use `customLabels` instead.",
        name: "toggleFilterButtonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FilterSidebarProps",
            jsDocTags: {
                deprecated: "Use `customLabels` instead.",
            },
            tabGroup: "Filter.Sidebar",
            type: {
                summary: "string",
            },
        },
    },
    "FormLabelAddonProps.content": {
        control: false,
        description: "Text or element displayed inside the popover overlay.",
        name: "content",
        type: {
            required: true,
        },
        table: {
            category: "FormLabelAddonProps",
            tabGroup: "Filter.Item",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "FormLabelAddonProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelAddonProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "string",
            },
        },
    },
    "FormLabelAddonProps.icon": {
        control: false,
        description: "Custom icon element.",
        name: "icon",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelAddonProps",
            defaultValue: {
                summary: "<ICircleFillIcon />",
            },
            tabGroup: "Filter.Item",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "FormLabelAddonProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelAddonProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "string",
            },
        },
    },
    "FormLabelAddonProps.type": {
        control: false,
        description:
            "Display mechanism for the addon.\nOmit to render no addon icon.",
        name: "type",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelAddonProps",
            tabGroup: "Filter.Item",
            type: {
                summaryParts: ["'popover'", "'tooltip'"],
            },
        },
    },
    "FormLabelAddonProps.zIndex": {
        control: false,
        description: "Stacking order of the popover overlay.",
        name: "zIndex",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelAddonProps",
            tabGroup: "Filter.Item",
            type: {
                summary: "number",
            },
        },
    },
    "Insets.bottom": {
        control: false,
        name: "bottom",
        type: {
            required: false,
        },
        table: {
            category: "Insets",
            tabGroup: "Filter.Modal",
            type: {
                summary: "number",
            },
        },
    },
    "Insets.left": {
        control: false,
        name: "left",
        type: {
            required: false,
        },
        table: {
            category: "Insets",
            tabGroup: "Filter.Modal",
            type: {
                summary: "number",
            },
        },
    },
    "Insets.right": {
        control: false,
        name: "right",
        type: {
            required: false,
        },
        table: {
            category: "Insets",
            tabGroup: "Filter.Modal",
            type: {
                summary: "number",
            },
        },
    },
    "Insets.top": {
        control: false,
        name: "top",
        type: {
            required: false,
        },
        table: {
            category: "Insets",
            tabGroup: "Filter.Modal",
            type: {
                summary: "number",
            },
        },
    },
    Mode: {
        control: false,
        description:
            'Rendering context for the filter panel.\n\n`"default"` indicates the desktop sidebar; `"mobile"` indicates the modal overlay.',
        name: "Mode",
        type: {},
        table: {
            category: "Mode",
            tabGroup: "Filter",
            type: {
                summary: "'default' | 'mobile'",
            },
        },
    },
} satisfies Record<string, unknown>;
