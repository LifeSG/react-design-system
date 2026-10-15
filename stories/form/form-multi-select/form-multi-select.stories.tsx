import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
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

const MANY_OPTIONS_DATA = new Array(30).map((_, i) => ({
    value: i + 1,
    label: `Option ${i + 1}`,
}));

const LONG_OPTIONS_DATA = [
    {
        value: "long",
        label: "This is a very long option label that cannot fit within the width of the field and should be truncated",
    },
    { value: "short", label: "Short" },
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
                <Form.MultiSelect
                    label="This has custom all selected & multi selected label"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    customLabels={{
                        allSelectedLabel: "Custom all selected",
                        multiSelectedLabel: "Custom X selected",
                    }}
                />
                <Form.MultiSelect
                    label="This has custom select all & clear all label"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    customLabels={{
                        selectAllButtonLabel: "Custom select all",
                        clearAllButtonLabel: "Custom clear all",
                    }}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

// NOTE: SB freezes with nested JSX, workaround is to declare outside of the CSF
const _WithSearch = (
    <>
        <Form.MultiSelect
            label="This has searchable options"
            options={OPTIONS_DATA}
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            enableSearch
        />
        <Form.MultiSelect
            label="Custom label when no results are found"
            options={OPTIONS_DATA}
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            enableSearch
            customLabels={{
                noResultsLabel: "Custom no result found.",
            }}
        />
        <Form.MultiSelect
            label="Custom description when no results are found"
            options={OPTIONS_DATA}
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            enableSearch
            customLabels={{
                noResultsDescription: (
                    <>
                        Display additional information here when no results are
                        found. There is default styling for commonly used markup
                        such as <strong>bold text</strong> or <a>links</a>.
                    </>
                ),
            }}
        />
    </>
);

export const WithSearch: StoryObj<Component> = {
    render: (_args) => {
        return _WithSearch;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const LimitSelection: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.MultiSelect
                label="Limit the number of options that can be selected"
                options={OPTIONS_DATA}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                maxSelectable={2}
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

export const TagDisplayVariant: StoryObj<Component> = {
    render: (_args) => {
        const [selected, setSelected] = useState<typeof OPTIONS_DATA>([
            OPTIONS_DATA[0],
            OPTIONS_DATA[2],
        ]);

        return (
            <>
                <Form.MultiSelect
                    displayVariant="tag"
                    label="Tags can be removed with the x or by unchecking the option"
                    options={OPTIONS_DATA}
                    selectedOptions={selected}
                    onSelectOptions={setSelected}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
                <Form.MultiSelect
                    displayVariant="tag"
                    label="The placeholder is shown when nothing is selected"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
                <Form.MultiSelect
                    displayVariant="tag"
                    label="All options selected shows every tag"
                    options={OPTIONS_DATA}
                    selectedOptions={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const TagOverflow: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.MultiSelect
                    displayVariant="tag"
                    label="Tags wrap and collapse into 'and X more' after 4 rows"
                    options={MANY_OPTIONS_DATA}
                    selectedOptions={MANY_OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    enableSearch
                />
                <Form.MultiSelect
                    displayVariant="tag"
                    label="A long label is truncated to one line"
                    options={LONG_OPTIONS_DATA}
                    selectedOptions={LONG_OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const TagStates: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.MultiSelect
                    displayVariant="tag"
                    label="Disabled"
                    disabled
                    options={OPTIONS_DATA}
                    selectedOptions={OPTIONS_DATA.slice(0, 3)}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
                <Form.MultiSelect
                    displayVariant="tag"
                    label="Read-only"
                    readOnly
                    options={OPTIONS_DATA}
                    selectedOptions={OPTIONS_DATA.slice(0, 3)}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
                <Form.MultiSelect
                    displayVariant="tag"
                    label="Error"
                    errorMessage="Selection is required"
                    options={OPTIONS_DATA}
                    selectedOptions={OPTIONS_DATA.slice(0, 3)}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
                <Form.MultiSelect
                    displayVariant="tag"
                    variant="small"
                    label="Small variant"
                    options={OPTIONS_DATA}
                    selectedOptions={OPTIONS_DATA.slice(0, 3)}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                />
            </>
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
                <InputMultiSelect
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    placeholder="Tag display"
                    displayVariant="tag"
                    selectedOptions={OPTIONS_DATA.slice(0, 2)}
                />
            </>
        );
    },
    decorators: [StackDecorator(), StoryDecorator({ maxWidth: true })],
};
