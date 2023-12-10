import type { Meta, StoryObj } from "@storybook/react";
import { InputNestedMultiSelect } from "src/input-nested-multi-select";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Text } from "src/text";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";
import { options } from "../form-nested-select/nested-data-list.ts";

type Component = typeof Form.NestedMultiSelect;

const meta: Meta<Component> = {
    title: "Form/NestedMultiSelect",
    component: Form.NestedMultiSelect,
};

export default meta;

export const NestedMultiSelect: StoryObj<Component> = {
    render: () => {
        const [selectedKeyPaths, setSelectedKeyPaths] = useState([
            ["999", "820", "10002"],
        ]);
        return (
            <StoryContainer>
                <Container>
                    <Form.NestedMultiSelect
                        label="This is the nested select field"
                        options={options}
                    />
                    <Form.NestedMultiSelect
                        label="This is prefilled with a selected option"
                        options={options}
                        selectedKeyPaths={selectedKeyPaths}
                        onSelectOptions={(keyPaths, values) => {
                            setSelectedKeyPaths(keyPaths);
                        }}
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
                </Container>
            </StoryContainer>
        );
    },
};

export const SpecifyingMode: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
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
                    <Form.NestedMultiSelect
                        label="This has searchable options"
                        options={options}
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
                <Form.NestedMultiSelect
                    label="A shorter form input"
                    options={options}
                    mobileCols={[1, 5]}
                />
                <Form.NestedMultiSelect
                    label="A longer form input"
                    options={options}
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
                    <InputNestedMultiSelect
                        options={options}
                        placeholder="Select"
                    />
                </Container>
            </StoryContainer>
        );
    },
};
