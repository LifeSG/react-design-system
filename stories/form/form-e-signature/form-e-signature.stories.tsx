import type { Meta, StoryObj } from "@storybook/react";
import { ESignature } from "src/e-signature";
import { Form } from "src/form";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";
import { signatureDataURL } from "./doc-elements";

type Component = typeof Form.ESignature;
type StandaloneComponent = typeof ESignature;

const meta: Meta<Component> = {
    title: "Form/E-Signature",
    component: Form.ESignature,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.ESignature
                    label="This is the default state"
                    id="default"
                />
                <Form.ESignature
                    label="This is prefilled"
                    id="prefill"
                    value={signatureDataURL}
                />
                <Form.ESignature
                    label="This comes with a description"
                    id="description"
                    description="Description"
                />
                <Form.ESignature
                    label="This is disabled"
                    id="disabled"
                    disabled
                />
                <Form.ESignature
                    label="This is disabled (prefilled)"
                    id="prefill-disabled"
                    value={signatureDataURL}
                    disabled
                />
                <Form.ESignature
                    label="This comes with an error message"
                    id="error"
                    errorMessage="Error message"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithLoadingIndicator: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.ESignature
                label="This comes with a loading indicator"
                loadingProgress={0.5}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.ESignature
                    label="A shorter form input"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.ESignature label="A longer form input" xxsCols={[1, 9]} />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <ESignature />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
