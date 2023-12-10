import type { Meta, StoryObj } from "@storybook/react";
import { InputMultiSelect } from "src/input-multi-select";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Text } from "src/text";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";

type Component = typeof Form.MultiSelect;

const meta: Meta<Component> = {
    title: "Form/MultiSelect",
    component: Form.MultiSelect,
};

export default meta;

export const MultiSelect: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.MultiSelect
                        label="This is the select field"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                    />
                    <Form.MultiSelect
                        label="This is the disabled state"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        disabled
                    />
                    <Form.MultiSelect
                        label="This is the error state"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        errorMessage="Selection is required"
                    />
                    <Form.MultiSelect
                        label="This has preselected items"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        selectedOptions={[
                            { value: "A", label: "Option A" },
                            { value: "C", label: "Option C" },
                        ]}
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
                    <Form.MultiSelect
                        label="This has searchable options"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        enableSearch
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
                <Form.MultiSelect
                    label="A shorter form input"
                    options={[
                        { value: "A", label: "Option A" },
                        { value: "B", label: "Option B" },
                        { value: "C", label: "Option C" },
                        { value: "D", label: "Option D" },
                    ]}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                />
                <Form.MultiSelect
                    label="A longer form input"
                    options={[
                        { value: "A", label: "Option A" },
                        { value: "B", label: "Option B" },
                        { value: "C", label: "Option C" },
                        { value: "D", label: "Option D" },
                    ]}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
};

export const StandaloneUsage: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <InputMultiSelect
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        placeholder="Default multi select"
                    />
                    <br />
                    <InputMultiSelect
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        placeholder="Searchable multi select"
                        enableSearch
                    />
                    <br />
                    <InputMultiSelect
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        placeholder="Searchable multi select"
                        selectedOptions={[{ value: "B", label: "Option B" }]}
                        enableSearch
                    />
                </Container>
            </StoryContainer>
        );
    },
};
