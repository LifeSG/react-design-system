import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { Textarea } from "src/input-textarea";
import { Layout } from "src/layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";
import { renderCustomCounter } from "./doc-elements";

type Component = typeof Form.Textarea;
type StandaloneComponent = typeof Textarea;

const meta: Meta<Component> = {
    title: "Form/Textarea",
    component: Form.Textarea,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [newValue, setnewValue] = useState("");

        const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            const { value } = event.target;
            setnewValue(value.replace(/[<>\\\n]/g, "_"));
        };
        return (
            <StoryContainer>
                <Container>
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
                        label="This is does not have a counter"
                        placeholder="Enter here..."
                    />
                    <Form.Textarea
                        rows={2}
                        label="This is a textarea with a handle change. "
                        placeholder="Enter here. Replace \, <, >  and new line with _ ..."
                        maxLength={100}
                        onChange={handleInput}
                        value={newValue}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const WithCustomCounter: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Textarea
                        label="This is a textarea with a custom counter label"
                        placeholder="Enter here..."
                        maxLength={100}
                        renderCustomCounter={renderCustomCounter}
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
                <Form.Textarea
                    label="A shorter form input"
                    placeholder="Enter here..."
                    maxLength={100}
                    mobileCols={[1, 5]}
                />
                <Form.Textarea
                    label="A longer form input"
                    placeholder="Enter here..."
                    maxLength={100}
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
                    <Textarea placeholder="Enter here..." maxLength={100} />
                </Container>
            </StoryContainer>
        );
    },
};
