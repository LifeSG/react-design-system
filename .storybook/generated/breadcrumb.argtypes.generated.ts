// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const breadcrumbExtraArgTypes = {
    "BreadcrumbProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "BreadcrumbProps",
            type: {
                summary: "string",
            },
        },
    },
    "BreadcrumbProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "BreadcrumbProps",
            type: {
                summary: "string",
            },
        },
    },
    "BreadcrumbProps.fadeColor": {
        control: false,
        description:
            "Gradient color stops for the fade overlays shown on horizontal scroll.\nPass a `string[]` to apply the same gradient to both edges, or a\n`FadeColorSet` to configure each edge independently.",
        name: "fadeColor",
        type: {
            required: false,
        },
        table: {
            category: "BreadcrumbProps",
            type: {
                summaryParts: ["FadeColorSet", "string[]"],
            },
        },
    },
    "BreadcrumbProps.fadePosition": {
        control: false,
        description:
            "Which edges display fade overlays when content overflows.",
        name: "fadePosition",
        type: {
            required: false,
        },
        table: {
            category: "BreadcrumbProps",
            defaultValue: {
                summary: '"both"',
            },
            type: {
                summaryParts: ["'both'", "'left'", "'right'"],
            },
        },
    },
    "BreadcrumbProps.id": {
        control: false,
        description: "HTML `id` for the wrapper element.",
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "BreadcrumbProps",
            defaultValue: {
                summary: '"breadcrumb"',
            },
            type: {
                summary: "string",
            },
        },
    },
    "BreadcrumbProps.links": {
        control: false,
        description:
            'Navigation items rendered as the breadcrumb trail. The last item is\ntreated as the current page (`aria-current="page"`) and is not clickable.\nItems without `href` render as non-clickable labels. Items without\n`children` are skipped.',
        name: "links",
        type: {
            required: true,
        },
        table: {
            category: "BreadcrumbProps",
            type: {
                summary: "React.AnchorHTMLAttributes<HTMLAnchorElement>[]",
            },
        },
    },
    "BreadcrumbProps.separatorStyle": {
        control: false,
        description: "Visual separator between breadcrumb items.",
        name: "separatorStyle",
        type: {
            required: false,
        },
        table: {
            category: "BreadcrumbProps",
            defaultValue: {
                summary: '"chevron"',
            },
            type: {
                summaryParts: ["'chevron'", "'slash'"],
            },
        },
    },
    "FadeColorSet.left": {
        control: false,
        description: "Gradient color stops for the left fade overlay.",
        name: "left",
        type: {
            required: false,
        },
        table: {
            category: "FadeColorSet",
            type: {
                summary: "string[]",
            },
        },
    },
    "FadeColorSet.right": {
        control: false,
        description: "Gradient color stops for the right fade overlay.",
        name: "right",
        type: {
            required: false,
        },
        table: {
            category: "FadeColorSet",
            type: {
                summary: "string[]",
            },
        },
    },
} satisfies Record<string, unknown>;
