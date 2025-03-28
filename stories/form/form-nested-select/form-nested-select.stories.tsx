import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { InputNestedSelect } from "src/input-nested-select";
import { Layout } from "src/layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";
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
    render: () => {
        return (
            <StoryContainer>
                <Container>
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
                </Container>
            </StoryContainer>
        );
    },
};

export const SpecifyingMode: StoryObj<Component> = {
    render: () => {
        const [selectedKeyPath, setSelectedKeyPath] = useState(["2", "22"]);
        return (
            <StoryContainer>
                <Container>
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
                </Container>
            </StoryContainer>
        );
    },
};

export const SelectableCategory: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.NestedSelect
                        label="This allows selection of categories"
                        options={options}
                        selectableCategory={true}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const WithSearch: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.NestedSelect
                        label="This has searchable options"
                        options={searchOptions}
                        enableSearch
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const Virtualisation: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.NestedSelect
                        label="The options are rendered using virtualisation"
                        options={bigOptions}
                        enableSearch
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const LabelTruncation: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.NestedSelect
                        label="This has truncation at the end"
                        options={longLabelOptions}
                    />
                    <Form.NestedSelect
                        label="This has truncation in the middle"
                        optionTruncationType="middle"
                        options={longLabelOptions}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.NestedSelect
                    label="A shorter form input"
                    options={options}
                    mobileCols={[1, 5]}
                />
                <Form.NestedSelect
                    label="A longer form input"
                    options={options}
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <InputNestedSelect options={options} placeholder="Select" />
                </Container>
            </StoryContainer>
        );
    },
};
