import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputMultiSelect } from "src/input-multi-select";
import { V2_Layout } from "src/v2_layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

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

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
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
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
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
            <V2_Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.MultiSelect
                    label="A shorter form input"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                />
                <Form.MultiSelect
                    label="A longer form input"
                    options={OPTIONS_DATA}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </V2_Layout.Content>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const SmallVariant: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.MultiSelect
                        variant="small"
                        label="This is the small variant"
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        enableSearch
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <InputMultiSelect
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        placeholder="Default multi select"
                    />
                    <br />
                    <InputMultiSelect
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        placeholder="Searchable multi select"
                        enableSearch
                    />
                    <br />
                    <InputMultiSelect
                        options={OPTIONS_DATA}
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
