// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const feedbackRatingExtraArgTypes = {
    "FeedbackRatingProps.buttonLabel": {
        control: false,
        description: "Label for the submit button.",
        name: "buttonLabel",
        type: {
            required: false,
        },
        table: {
            category: "FeedbackRatingProps",
            defaultValue: {
                summary: '"Submit"',
            },
            type: {
                summary: "string",
            },
        },
    },
    "FeedbackRatingProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "FeedbackRatingProps",
            type: {
                summary: "string",
            },
        },
    },
    "FeedbackRatingProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FeedbackRatingProps",
            type: {
                summary: "string",
            },
        },
    },
    "FeedbackRatingProps.description": {
        control: false,
        description: "Heading text displayed above the star rating.",
        name: "description",
        type: {
            required: false,
        },
        table: {
            category: "FeedbackRatingProps",
            defaultValue: {
                summary: '"Rate your experience"',
            },
            type: {
                summary: "string",
            },
        },
    },
    "FeedbackRatingProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FeedbackRatingProps",
            type: {
                summary: "string",
            },
        },
    },
    "FeedbackRatingProps.imgSrc": {
        control: false,
        description:
            "URL of the banner image displayed above the star rating.\nFalls back to the default Life SG feedback banner when omitted.\nHidden automatically if the image fails to load.",
        name: "imgSrc",
        type: {
            required: false,
        },
        table: {
            category: "FeedbackRatingProps",
            type: {
                summary: "string",
            },
        },
    },
    "FeedbackRatingProps.onRatingChange": {
        control: false,
        description: "Called when the user selects a star.",
        name: "onRatingChange",
        type: {
            required: true,
        },
        table: {
            category: "FeedbackRatingProps",
            type: {
                summary: "(value: number) => void",
            },
        },
    },
    "FeedbackRatingProps.onSubmit": {
        control: false,
        description: "Called when the user clicks the submit button.",
        name: "onSubmit",
        type: {
            required: true,
        },
        table: {
            category: "FeedbackRatingProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "FeedbackRatingProps.rating": {
        control: false,
        description: "The currently selected star rating (1–5).",
        name: "rating",
        type: {
            required: true,
        },
        table: {
            category: "FeedbackRatingProps",
            type: {
                summary: "number",
            },
        },
    },
} satisfies Record<string, unknown>;
