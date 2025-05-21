import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { InputNestedSelect } from "src/input-nested-select";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";
import {
    bigOptions,
    longLabelOptions,
    options,
    searchOptions,
    twoTierOptions,
} from "./nested-data-list";

type Component = typeof Form.NestedSelect;
type StandaloneComponent = typeof InputNestedSelect;

const meta: Meta<Component> = {
    title: "Form/NestedSelect",
    component: Form.NestedSelect,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.NestedSelect
                    label="This is the nested select field"
                    options={options}
                />
                <Form.NestedSelect
                    label="This contains a 2 tier option"
                    options={twoTierOptions}
                />
                <Form.NestedSelect
                    label="This is the disabled state"
                    options={options}
                    disabled
                />
                <Form.NestedSelect
                    label="This is the readonly state"
                    options={options}
                    readOnly
                />
                <Form.NestedSelect
                    label="This is the error state"
                    options={options}
                    errorMessage="Selection is required"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const SpecifyingMode: StoryObj<Component> = {
    render: (_args) => {
        const [selectedKeyPath, setSelectedKeyPath] = useState(["2", "22"]);
        return (
            <>
                <Form.NestedSelect
                    label="The selected option is expanded by default"
                    options={options}
                    selectedKeyPath={selectedKeyPath}
                    onSelectOption={(keyPath) => {
                        setSelectedKeyPath(keyPath);
                    }}
                />
                <Form.NestedSelect
                    label="With all (sub)categories expanded "
                    options={options}
                    mode="expand"
                />
                <Form.NestedSelect
                    label="With all (sub)categories collapsed "
                    options={options}
                    mode="collapse"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const SelectableCategory: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.NestedSelect
                label="This allows selection of categories"
                options={options}
                selectableCategory={true}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithSearch: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.NestedSelect
                label="This has searchable options"
                options={searchOptions}
                enableSearch
                noResultsDesc="No results found description"
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const Virtualisation: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.NestedSelect
                label="The options are rendered using virtualisation"
                options={bigOptions}
                enableSearch
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const LabelTruncation: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.NestedSelect
                    label="This has truncation at the end"
                    options={longLabelOptions}
                />
                <Form.NestedSelect
                    label="This has truncation in the middle"
                    optionTruncationType="middle"
                    options={longLabelOptions}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.NestedSelect
                    label="A shorter form input"
                    options={options}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.NestedSelect
                    label="A longer form input"
                    options={options}
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
            <Form.Select
                variant="small"
                label="This is the small variant"
                options={options}
                enableSearch
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <InputNestedSelect options={options} placeholder="Select" />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
