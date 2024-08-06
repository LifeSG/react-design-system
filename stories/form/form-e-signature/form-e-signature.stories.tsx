import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { ESignature } from "src/e-signature";
import { v2_Layout } from "src/v2_layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";
import { signatureDataURL } from "./doc-elements";

type Component = typeof Form.ESignature;
type StandaloneComponent = typeof ESignature;

const meta: Meta<Component> = {
    title: "Form/E-Signature",
    component: Form.ESignature,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
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
                        label="This comes with an error message"
                        id="error"
                        errorMessage="Error message"
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const WithLoadingIndicator: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.ESignature
                        label="This comes with a loading indicator"
                        loadingProgress={0.5}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <v2_Layout.V2_Content type="grid" style={{ padding: "2rem" }}>
                <Form.ESignature
                    label="A shorter form input"
                    mobileCols={[1, 5]}
                />
                <Form.ESignature
                    label="A longer form input"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </v2_Layout.V2_Content>
        );
    },
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <ESignature />
            </StoryContainer>
        );
    },
};
