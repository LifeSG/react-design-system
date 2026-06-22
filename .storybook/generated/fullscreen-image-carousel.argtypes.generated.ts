// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const fullscreenImageCarouselExtraArgTypes = {
    "FullscreenImageCarouselRef.currentItemIndex": {
        name: "currentItemIndex",
        control: false,
        table: {
            category: "FullscreenImageCarouselRef",
            type: {
                summary: "number",
            },
        },
    },
    "FullscreenImageCarouselRef.setCurrentItem": {
        name: "setCurrentItem",
        control: false,
        table: {
            category: "FullscreenImageCarouselRef",
            type: {
                summary: "(currentItemIndex: number) => void",
            },
        },
    },
    "FullscreenImageCarouselRef.goToPrevItem": {
        name: "goToPrevItem",
        control: false,
        table: {
            category: "FullscreenImageCarouselRef",
            type: {
                summary: "() => void",
            },
        },
    },
    "FullscreenImageCarouselRef.goToNextItem": {
        name: "goToNextItem",
        control: false,
        table: {
            category: "FullscreenImageCarouselRef",
            type: {
                summary: "() => void",
            },
        },
    },
    "FullscreenImageCarouselProps.items": {
        name: "items",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "FullscreenImageCarouselItemProps[]",
            },
        },
    },
    "FullscreenImageCarouselProps.initialActiveItemIndex": {
        name: "initialActiveItemIndex",
        description: "The index of the visible item, starts from 0",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "number",
            },
        },
    },
    "FullscreenImageCarouselProps.hideThumbnail": {
        name: "hideThumbnail",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.hideNavigation": {
        name: "hideNavigation",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.hideCounter": {
        name: "hideCounter",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.hideMagnifier": {
        name: "hideMagnifier",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FullscreenImageCarouselProps.onDelete": {
        name: "onDelete",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary:
                    "| ((item: FullscreenImageCarouselItemProps, index: number) => void)",
            },
        },
    },
    "FullscreenImageCarouselProps.onClose": {
        name: "onClose",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "FullscreenImageCarouselProps.insets": {
        name: "insets",
        control: false,
        table: {
            category: "FullscreenImageCarouselProps",
            type: {
                summary: "Insets",
            },
        },
    },
    "FullscreenImageCarouselBaseItemProps.fileName": {
        name: "fileName",
        control: false,
        table: {
            category: "FullscreenImageCarouselBaseItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselBaseItemProps.fileSize": {
        name: "fileSize",
        control: false,
        table: {
            category: "FullscreenImageCarouselBaseItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.type": {
        name: "type",
        control: false,
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: '"image"',
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.src": {
        name: "src",
        control: false,
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.alt": {
        name: "alt",
        control: false,
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.thumbnailSrc": {
        name: "thumbnailSrc",
        control: false,
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselImageItemProps.renderContent": {
        name: "renderContent",
        control: false,
        table: {
            category: "FullscreenImageCarouselImageItemProps",
            type: {
                summary: "never",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.type": {
        name: "type",
        control: false,
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: '"custom"',
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.thumbnailSrc": {
        name: "thumbnailSrc",
        description:
            "The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.",
        control: false,
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.itemLabel": {
        name: "itemLabel",
        description:
            'Label for this item used in aria-labels (e.g. "PDF"). Defaults to "image". When any item sets this, carousel-level aria-labels use generic "item" wording.',
        control: false,
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FullscreenImageCarouselCustomItemProps.renderContent": {
        name: "renderContent",
        description:
            "Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer).",
        control: false,
        table: {
            category: "FullscreenImageCarouselCustomItemProps",
            type: {
                summary: "() => React.ReactNode",
            },
        },
    },
    "ImageDimension.width": {
        name: "width",
        control: false,
        table: {
            category: "ImageDimension",
            type: {
                summary: "number",
            },
        },
    },
    "ImageDimension.height": {
        name: "height",
        control: false,
        table: {
            category: "ImageDimension",
            type: {
                summary: "number",
            },
        },
    },
    FullscreenCarouselItemProps: {
        name: "FullscreenCarouselItemProps",
        deprecated: "Use FullscreenImageCarouselImageItemProps instead",
        control: false,
        table: {
            category: "FullscreenCarouselItemProps",
            type: {
                summary: "FullscreenImageCarouselImageItemProps",
            },
        },
    },
    FullscreenImageCarouselItemProps: {
        name: "FullscreenImageCarouselItemProps",
        control: false,
        table: {
            category: "FullscreenImageCarouselItemProps",
            type: {
                summary:
                    "| FullscreenImageCarouselImageItemProps | FullscreenImageCarouselCustomItemProps",
            },
        },
    },
} satisfies Record<string, unknown>;
