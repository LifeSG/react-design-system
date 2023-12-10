import type { Meta, StoryObj } from "@storybook/react";
import { UnitNumberInput } from "src/unit-number";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";

type Component = typeof Form.UnitNumberInput;

const meta: Meta<Component> = {
    title: "Form/UnitNumberInput",
    component: Form.UnitNumberInput,
};

export default meta;

export const UnitNumberInput: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.UnitNumberInput label="This is the unit number input" />
                    <Form.UnitNumberInput
                        label="This is the disabled state"
                        disabled
                    />
                    <Form.UnitNumberInput
                        label="This is the readonly state"
                        readOnly
                    />
                    <Form.UnitNumberInput
                        label="This is the readonly state (with value)"
                        value="12-345"
                        readOnly
                    />
                    <Form.UnitNumberInput
                        label="This is the error state"
                        errorMessage="Unit Number is required"
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
                <Form.UnitNumberInput
                    label="A shorter form input"
                    mobileCols={[1, 5]}
                />
                <Form.UnitNumberInput
                    label="A longer form input"
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
                    <UnitNumberInput />
                </Container>
            </StoryContainer>
        );
    },
};
