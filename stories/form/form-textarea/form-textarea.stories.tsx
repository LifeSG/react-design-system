import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { Textarea } from "src/input-textarea";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";
import { renderCustomCounter } from "./doc-elements";

type Component = typeof Form.Textarea;
type StandaloneComponent = typeof Textarea;

const meta: Meta<Component> = {
    title: "Form/Textarea",
    component: Form.Textarea,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.Textarea
                    label="This is a textarea with a counter"
                    placeholder="Enter here..."
                    maxLength={100}
                />
                <Form.Textarea
                    label="This is the disabled state"
                    placeholder="Enter here..."
                    maxLength={100}
                    disabled
                />
                <Form.Textarea
                    label="This is the readonly state"
                    placeholder="Enter here..."
                    value="Hello world, this is my input"
                    maxLength={100}
                    readOnly
                />
                <Form.Textarea
                    label="This is the error state"
                    placeholder="Enter here..."
                    maxLength={100}
                    errorMessage="Input required"
                />
                <Form.Textarea
                    label="This does not have a counter"
                    placeholder="Enter here..."
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithCustomCounter: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.Textarea
                label="This is a textarea with a custom counter label"
                placeholder="Enter here..."
                maxLength={100}
                renderCustomCounter={renderCustomCounter}
            />
        );
    },
    parameters: {
        docs: {
            source: {
                transform: (code: string) =>
                    // NOTE: storybook doesn't render arrow functions properly
                    code.replace(
                        "renderCustomCounter={() => {}}",
                        `renderCustomCounter={renderCustomCounter}`
                    ),
            },
        },
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const TransformValue: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.Textarea
                label="This removes special characters"
                maxLength={100}
                transformValue={(value) => value.replace(/[^A-Za-z0-9 ]/g, "")}
            />
        );
    },
    parameters: {
        docs: {
            source: {
                // NOTE: storybook doesn't render arrow functions properly
                transform: (code: string) =>
                    code.replace(
                        "transformValue={() => {}}",
                        `transformValue={(value) => value.replace(/[^A-Za-z0-9 ]/g, "")}`
                    ),
            },
        },
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.Textarea
                    label="A shorter form input"
                    placeholder="Enter here..."
                    maxLength={100}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.Textarea
                    label="A longer form input"
                    placeholder="Enter here..."
                    maxLength={100}
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <Textarea placeholder="Enter here..." maxLength={100} />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
