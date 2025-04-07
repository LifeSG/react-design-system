import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputMultiSelect } from "src/input-multi-select";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StackDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.MultiSelect;
type StandaloneComponent = typeof InputMultiSelect;

const meta: Meta<Component> = {
    title: "Form/MultiSelect",
    component: Form.MultiSelect,
};

export default meta;

const OPTIONS_DATA = [
    { value: "A", label: "Option A" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
    { value: "D", label: "Option D" },
];

const LARGE_OPTIONS_DATA = [...Array(50000)].map((_, i) => ({
    value: i + 1,
    label: `Option ${i + 1}`,
}));

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.MultiSelect
                    label="This is the select field"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
                <Form.MultiSelect
                    label="This is the disabled state"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    disabled
                />
                <Form.MultiSelect
                    label="This is the error state"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    errorMessage="Selection is required"
                />
                <Form.MultiSelect
                    label="This has preselected items"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    selectedOptions={[
                        { value: "A", label: "Option A" },
                        { value: "C", label: "Option C" },
                    ]}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithSearch: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.MultiSelect
                label="This has searchable options"
                options={OPTIONS_DATA}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                enableSearch
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const Virtualisation: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.MultiSelect
                label="The options are rendered using virtualisation"
                options={LARGE_OPTIONS_DATA}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                enableSearch
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.MultiSelect
                    label="A shorter form input"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.MultiSelect
                    label="A longer form input"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const SmallVariant: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return (
            <Form.MultiSelect
                variant="small"
                label="This is the small variant"
                options={OPTIONS_DATA}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                enableSearch
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return (
            <>
                <InputMultiSelect
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    placeholder="Default multi select"
                />
                <InputMultiSelect
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    placeholder="Searchable multi select"
                    enableSearch
                />
                <InputMultiSelect
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    placeholder="Searchable multi select"
                    selectedOptions={[{ value: "B", label: "Option B" }]}
                    enableSearch
                />
            </>
        );
    },
    decorators: [StackDecorator(), StoryDecorator({ maxWidth: true })],
};
