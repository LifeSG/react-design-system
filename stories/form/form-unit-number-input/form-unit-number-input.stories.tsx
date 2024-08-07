import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { V2_Layout } from "src/v2_layout";
import { UnitNumberInput } from "src/unit-number";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.UnitNumberInput;
type StandaloneComponent = typeof UnitNumberInput;

const meta: Meta<Component> = {
    title: "Form/UnitNumberInput",
    component: Form.UnitNumberInput,
};

export default meta;

export const Default: StoryObj<Component> = {
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
            <V2_Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.UnitNumberInput
                    label="A shorter form input"
                    mobileCols={[1, 5]}
                />
                <Form.UnitNumberInput
                    label="A longer form input"
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

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
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
