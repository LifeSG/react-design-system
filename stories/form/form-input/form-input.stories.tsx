import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { Input } from "src/input";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StackDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.Input;
type StandaloneComponent = typeof Input;

const meta: Meta<Component> = {
    title: "Form/Input",
    component: Form.Input,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.Input
                    label="This is a input field"
                    placeholder="Enter here..."
                />
                <Form.Input
                    label="This is the error state"
                    errorMessage="Input is required"
                    placeholder="Enter here..."
                />
                <Form.Input
                    label="This is the disabled state"
                    placeholder="Enter here..."
                    disabled
                />
                <Form.Input
                    label="This is the readonly state"
                    placeholder="Enter here..."
                    value="My input value"
                    readOnly
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const ClearButton: StoryObj<Component> = {
    render: (_args) => {
        const [input, setInput] = useState("");
        return (
            <Form.Input
                label="This has clearing enabled"
                placeholder="Enter here..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onClear={() => setInput("")}
                allowClear
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const TextSpacing: StoryObj<Component> = {
    render: (_args) => {
        const [input, setInput] = useState("");
        return (
            <Form.Input
                label="This has text spacing properties (works with tel type only)"
                placeholder="Enter here..."
                value={input}
                spacing={4}
                type="tel"
                onChange={(event) => setInput(event.target.value)}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const NoBorder: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Input
                    value="Default lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    onClear={() => {}}
                    allowClear
                    styleType="no-border"
                />
                <Input
                    value="Disabled lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    styleType="no-border"
                    disabled
                />
                <Input
                    value="Readonly lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    styleType="no-border"
                    readOnly
                />
            </>
        );
    },
    parameters: { outline: { disable: false } },
    decorators: [StackDecorator(), StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.Input
                    label="A shorter form input"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.Input label="A longer form input" xxsCols={[1, 9]} />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <Input placeholder="Enter here..." />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
