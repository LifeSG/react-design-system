// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const breadcrumbExtraArgTypes = {
    "BreadcrumbProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "BreadcrumbProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "BreadcrumbProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "BreadcrumbProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "BreadcrumbProps.fadeColor": {
        "control": false,
        "description": "Gradient color stops for the fade overlays shown on horizontal scroll.\nPass a `string[]` to apply the same gradient to both edges, or a\n`FadeColorSet` to configure each edge independently.",
        "name": "fadeColor",
        "table": {
            "category": "BreadcrumbProps",
            "type": {
                "summary": "string[] | FadeColorSet"
            }
        }
    },
    "BreadcrumbProps.fadePosition": {
        "control": false,
        "description": "Which edges display fade overlays when content overflows.",
        "name": "fadePosition",
        "table": {
            "category": "BreadcrumbProps",
            "defaultValue": {
                "summary": "\"both\""
            },
            "type": {
                "summary": "FadePosition"
            }
        }
    },
    "BreadcrumbProps.id": {
        "control": false,
        "description": "HTML `id` for the wrapper element.",
        "name": "id",
        "table": {
            "category": "BreadcrumbProps",
            "defaultValue": {
                "summary": "\"breadcrumb\""
            },
            "type": {
                "summary": "string"
            }
        }
    },
    "BreadcrumbProps.links": {
        "control": false,
        "description": "Navigation items rendered as the breadcrumb trail. The last item is\ntreated as the current page (`aria-current=\"page\"`) and is not clickable.\nItems without `href` render as non-clickable labels. Items without\n`children` are skipped.",
        "name": "links",
        "table": {
            "category": "BreadcrumbProps",
            "type": {
                "summary": "React.AnchorHTMLAttributes<HTMLAnchorElement>[]"
            }
        }
    },
    "BreadcrumbProps.separatorStyle": {
        "control": false,
        "description": "Visual separator between breadcrumb items.",
        "name": "separatorStyle",
        "table": {
            "category": "BreadcrumbProps",
            "defaultValue": {
                "summary": "\"chevron\""
            },
            "type": {
                "summary": "SeparatorStyle"
            }
        }
    },
    "FadeColorSet.left": {
        "control": false,
        "description": "Gradient color stops for the left fade overlay.",
        "name": "left",
        "table": {
            "category": "FadeColorSet",
            "type": {
                "summary": "string[]"
            }
        }
    },
    "FadeColorSet.right": {
        "control": false,
        "description": "Gradient color stops for the right fade overlay.",
        "name": "right",
        "table": {
            "category": "FadeColorSet",
            "type": {
                "summary": "string[]"
            }
        }
    },
    "FadePosition": {
        "name": "FadePosition",
        "control": false,
        "table": {
            "category": "FadePosition",
            "type": {
                "summary": "'left' | 'right' | 'both'"
            }
        }
    },
    "SeparatorStyle": {
        "name": "SeparatorStyle",
        "control": false,
        "table": {
            "category": "SeparatorStyle",
            "type": {
                "summary": "'chevron' | 'slash'"
            }
        }
    }
} satisfies Record<string, unknown>;
