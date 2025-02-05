import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { UnitNumberInput } from "src/unit-number";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.UnitNumberInput;
type StandaloneComponent = typeof UnitNumberInput;

const meta: Meta<Component> = {
    title: "Form/UnitNumberInput",
    component: Form.UnitNumberInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
                    errorMessage="Unit number is required"
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
                <Form.UnitNumberInput
                    label="A shorter form input"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.UnitNumberInput
                    label="A longer form input"
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <UnitNumberInput />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
