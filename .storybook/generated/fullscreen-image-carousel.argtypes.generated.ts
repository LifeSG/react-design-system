// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const fullscreenImageCarouselExtraArgTypes = {
    "FullscreenImageCarouselCustomItemProps.fileName": {
        control: false,
        description: "Display name of the file shown in the top info bar.",
        name: "fileName",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.fileSize": {
        control: false,
        description:
            'Human-readable file size shown alongside `fileName` in the top\ninfo bar (e.g. "2.4 MB").',
        name: "fileSize",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.itemLabel": {
        control: false,
        description: 'Label for this item used in aria-labels (e.g. "PDF").',
        name: "itemLabel",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            defaultValue: {
                summary: '"image"',
            },
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.renderContent": {
        control: false,
        description:
            "Render prop for the full slide area. Consumer is responsible\nfor the entire slide content (e.g. an iframe, embed, or custom viewer).",
        name: "renderContent",
        type: {
            required: true,
        },
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: "() => React.ReactNode",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.thumbnailSrc": {
        control: false,
        description:
            "The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.",
        name: "thumbnailSrc",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.type": {
        control: false,
        name: "type",
        type: {
            required: true,
        },
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: '"custom"',
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.alt": {
        control: false,
        description: "Accessible label for the image.",
        name: "alt",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.fileName": {
        control: false,
        description: "Display name of the file shown in the top info bar.",
        name: "fileName",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.fileSize": {
        control: false,
        description:
            'Human-readable file size shown alongside `fileName` in the top\ninfo bar (e.g. "2.4 MB").',
        name: "fileSize",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.renderContent": {
        control: false,
        name: "renderContent",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "never",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.src": {
        control: false,
        description: "URL of the full-resolution image shown in the slide.",
        name: "src",
        type: {
            required: true,
        },
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.thumbnailSrc": {
        control: false,
        description:
            "URL of the image shown in the thumbnail strip.\nFalls back to `src` when omitted.",
        name: "thumbnailSrc",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.type": {
        control: false,
        name: "type",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: '"image"',
            },
        },
    },
    FullscreenImageCarouselItemProps: {
        control: false,
        description:
            'A single item in the carousel.\n\n`type` discriminates between a standard image item (`"image"`)\nand a custom-content item (`"custom"`).',
        name: "FullscreenImageCarouselItemProps",
        type: {},
        table: {
            category: "FullscreenImageCarouselItemProps",
            type: {
                summary:
                    "FullscreenImageCarouselImageItemProps | FullscreenImageCarouselCustomItemProps",
            },
        },
    },
    "FullscreenImageCarouselItemProps.fileName": {
        control: false,
        description: "Display name of the file shown in the top info bar.",
        name: "fileName",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselItemProps.fileSize": {
        control: false,
        description:
            'Human-readable file size shown alongside `fileName` in the top\ninfo bar (e.g. "2.4 MB").',
        name: "fileSize",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselItemProps.renderContent": {
        control: false,
        description:
            "Render prop for the full slide area. Consumer is responsible\nfor the entire slide content (e.g. an iframe, embed, or custom viewer).",
        name: "renderContent",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselItemProps",
            type: {
                summary: "() => React.ReactNode",
            },
        },
    },
    "FullscreenImageCarouselItemProps.thumbnailSrc": {
        control: false,
        description:
            "URL of the image shown in the thumbnail strip.\nFalls back to `src` when omitted.\n\nThe thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.",
        name: "thumbnailSrc",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselItemProps.type": {
        control: false,
        name: "type",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselItemProps",
            type: {
                summaryParts: ["'custom'", "'image'"],
            },
        },
    },
    "FullscreenImageCarouselProps.animationFrom": {
        control: false,
        description: "Direction from which the modal slides in and out.",
        name: "animationFrom",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: '"bottom"',
            },
            type: {
                summaryParts: ["'bottom'", "'left'", "'right'", "'top'"],
            },
        },
    },
    "FullscreenImageCarouselProps.hideCounter": {
        control: false,
        description: 'Hides the slide position counter chip (e.g. "2/5").',
        name: "hideCounter",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.hideMagnifier": {
        control: false,
        description:
            "Hides the zoom in/out magnifier button. Has no effect on custom items, which\nnever show the magnifier regardless of this prop.",
        name: "hideMagnifier",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.hideNavigation": {
        control: false,
        description: "Hides the previous and next arrow navigation buttons.",
        name: "hideNavigation",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.hideThumbnail": {
        control: false,
        description: "Hides the thumbnail strip below the main slide.",
        name: "hideThumbnail",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.initialActiveItemIndex": {
        control: false,
        description:
            "Zero-based index of the item that is active when the carousel first opens.",
        name: "initialActiveItemIndex",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: "0",
            },
            type: {
                summary: "number",
            },
        },
    },
    "FullscreenImageCarouselProps.insets": {
        control: false,
        description:
            "Additional pixel insets applied to keep content within a safe area\nof the viewport and avoid overlap with device UI elements.",
        name: "insets",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "Insets",
            },
        },
    },
    "FullscreenImageCarouselProps.items": {
        control: false,
        description:
            "The list of items to display. Each item is either an image or a custom content item.",
        name: "items",
        type: {
            required: true,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "FullscreenImageCarouselItemProps[]",
            },
        },
    },
    "FullscreenImageCarouselProps.onClose": {
        control: false,
        description:
            "Called when the close button is activated or the Escape key is pressed.",
        name: "onClose",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "FullscreenImageCarouselProps.onDelete": {
        control: false,
        description:
            "Called when the delete button is activated for the current item.",
        name: "onDelete",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary:
                    "(item: FullscreenImageCarouselItemProps, index: number) => void",
            },
        },
    },
    "FullscreenImageCarouselProps.rootComponentId": {
        control: false,
        description: "The `id` of the DOM element to portal the modal into.",
        name: "rootComponentId",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: "document.body",
            },
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselProps.show": {
        control: false,
        description: "Controls whether the modal is visible.",
        name: "show",
        type: {
            required: true,
        },
        table: {
            category: "FullscreenImageCarouselProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.zIndex": {
        control: false,
        description: "The z-index applied to the overlay stack.",
        name: "zIndex",
        type: {
            required: false,
        },
        table: {
            category: "FullscreenImageCarouselProps",
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
            type: {
                summary: "number",
            },
        },
    },
} satisfies Record<string, unknown>;
