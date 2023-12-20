import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { Input } from "src/input";
import { Layout } from "src/layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.Input;
type StandaloneComponent = typeof Input;

const meta: Meta<Component> = {
    title: "Form/Input",
    component: Form.Input,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [input4, setInput4] = useState(undefined);
        const [input5, setInput5] = useState(undefined);
        return (
            <StoryContainer>
                <Container>
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
                    <Form.Input
                        label="This has text spacing properties (works with tel type only)"
                        placeholder="Enter here..."
                        spacing={4}
                        value={input4}
                        onChange={(event) => setInput4(event.target.value)}
                        type="tel"
                    />
                    <Form.Input
                        label="This has clearing enabled"
                        placeholder="Enter here..."
                        value={input5}
                        onChange={(event) => setInput5(event.target.value)}
                        onClear={() => setInput5("")}
                        allowClear
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
                <Form.Input label="A shorter form input" mobileCols={[1, 5]} />
                <Form.Input
                    label="A longer form input"
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
                    <Input placeholder="Enter here..." />
                </Container>
            </StoryContainer>
        );
    },
};
