import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { InputNestedMultiSelect } from "src/input-nested-multi-select";
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
} from "../form-nested-select/nested-data-list";

type Component = typeof Form.NestedMultiSelect;
type StandaloneComponent = typeof InputNestedMultiSelect;

const meta: Meta<Component> = {
    title: "Form/NestedMultiSelect",
    component: Form.NestedMultiSelect,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.NestedMultiSelect
                    label="This is the nested select field"
                    options={options}
                />
                <Form.NestedMultiSelect
                    label="This contains a 2 tier option"
                    options={twoTierOptions}
                />
                <Form.NestedMultiSelect
                    label="This is the disabled state"
                    options={options}
                    disabled
                />
                <Form.NestedMultiSelect
                    label="This is the readOnly state"
                    options={options}
                    readOnly
                />
                <Form.NestedMultiSelect
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
        const [selectedKeyPaths, setSelectedKeyPaths] = useState([["2", "22"]]);
        return (
            <>
                <Form.NestedMultiSelect
                    label="The selected option is expanded by default"
                    options={options}
                    selectedKeyPaths={selectedKeyPaths}
                    onSelectOptions={(keyPaths) => {
                        setSelectedKeyPaths(keyPaths);
                    }}
                />
                <Form.NestedMultiSelect
                    label="With all (sub)categories expanded "
                    options={options}
                    mode="expand"
                />
                <Form.NestedMultiSelect
                    label="With all (sub)categories collapsed "
                    options={options}
                    mode="collapse"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithSearch: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.NestedMultiSelect
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
            <Form.NestedMultiSelect
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
                <Form.NestedMultiSelect
                    label="This has truncation at the end"
                    options={longLabelOptions}
                />
                <Form.NestedMultiSelect
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
                <Form.NestedMultiSelect
                    label="A shorter form input"
                    options={options}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.NestedMultiSelect
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
            <Form.NestedMultiSelect
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
        return (
            <InputNestedMultiSelect options={options} placeholder="Select" />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
