import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { InputMultiSelect } from "src/input-multi-select";

type StandaloneComponent = typeof InputMultiSelect;

const meta: Meta = {
    title: "e2e-MultiSelect",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div style={{ margin: "1rem", width: "400px", maxWidth: "90vw" }}>
                <Story />
            </div>
        ),
    ],
    tags: ["e2e"],
};

export default meta;

const OPTIONS = [...Array(40)].map((_, i) => ({
    value: i + 1,
    label: `Option ${i + 1}`,
}));

const commonProps = {
    "data-testid": "e2e",
    options: OPTIONS,
    valueExtractor: (item: (typeof OPTIONS)[number]) => item.value,
    listExtractor: (item: (typeof OPTIONS)[number]) => item.label,
};

export const Count: StoryObj<StandaloneComponent> = {
    render: () => (
        <InputMultiSelect
            {...commonProps}
            selectedOptions={OPTIONS.slice(0, 3)}
        />
    ),
};

export const TagFewSelected: StoryObj<StandaloneComponent> = {
    render: () => (
        <InputMultiSelect
            {...commonProps}
            displayVariant="tag"
            selectedOptions={OPTIONS.slice(0, 3)}
        />
    ),
};

export const TagLongLabel: StoryObj<StandaloneComponent> = {
    render: () => (
        <InputMultiSelect
            {...commonProps}
            displayVariant="tag"
            options={[
                {
                    value: 1,
                    label: "A very long label that should be truncated with an ellipsis rather than overflowing the field",
                },
            ]}
            selectedOptions={[
                {
                    value: 1,
                    label: "A very long label that should be truncated with an ellipsis rather than overflowing the field",
                },
            ]}
        />
    ),
};

export const TagOverflow: StoryObj<StandaloneComponent> = {
    render: () => (
        <InputMultiSelect
            {...commonProps}
            displayVariant="tag"
            selectedOptions={OPTIONS}
        />
    ),
};

export const TagSmallVariant: StoryObj<StandaloneComponent> = {
    render: () => (
        <InputMultiSelect
            {...commonProps}
            variant="small"
            displayVariant="tag"
            selectedOptions={OPTIONS.slice(0, 3)}
        />
    ),
};

export const TagEmpty: StoryObj<StandaloneComponent> = {
    render: () => <InputMultiSelect {...commonProps} displayVariant="tag" />,
};

export const TagDisabled: StoryObj<StandaloneComponent> = {
    render: () => (
        <InputMultiSelect
            {...commonProps}
            displayVariant="tag"
            disabled
            selectedOptions={OPTIONS.slice(0, 3)}
        />
    ),
};

export const TagReadOnly: StoryObj<StandaloneComponent> = {
    render: () => (
        <InputMultiSelect
            {...commonProps}
            displayVariant="tag"
            readOnly
            selectedOptions={OPTIONS.slice(0, 3)}
        />
    ),
};
