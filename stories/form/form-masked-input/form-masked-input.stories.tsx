import type { Meta, StoryObj } from "@storybook/react";
import { MaskedInput } from "src/masked-input";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Text } from "src/text";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";
import { ToggleOffFillIcon } from "@lifesg/react-icons/toggle-off-fill";
import { ToggleOffIcon } from "@lifesg/react-icons/toggle-off";

type Component = typeof Form.MaskedInput;

const meta: Meta<Component> = {
    title: "Form/MaskedInput",
    component: Form.MaskedInput,
};

export default meta;

export const Field: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.MaskedInput
                        label="This is the mask field with no input"
                        maskRange={[2, 5]}
                    />
                    <Form.MaskedInput
                        label="This is the mask field with input"
                        value="S1234567D"
                        maskRange={[2, 5]}
                    />
                    <Form.MaskedInput
                        label="This is set to be transformed to uppercase"
                        maskRange={[2, 5]}
                        transformInput={"uppercase"}
                    />
                    <Form.MaskedInput
                        label="This is set to be transformed to lowercase"
                        maskRange={[2, 5]}
                        transformInput={"lowercase"}
                    />
                    <Form.MaskedInput
                        label="This is the error state"
                        errorMessage="Input is required"
                        maskRange={[2, 5]}
                    />
                    <Form.MaskedInput
                        label="This is the masking disabled state"
                        maskRange={[2, 5]}
                        value="S1234567D"
                        disableMask={true}
                    />
                    <Form.MaskedInput
                        label="This is the readonly state with no pre-filled value"
                        maskRange={[2, 5]}
                        readOnly
                    />
                    <Form.MaskedInput
                        label="This is the readonly state with pre-filled value"
                        value="S1234567D"
                        maskRange={[2, 5]}
                        readOnly
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const Masking: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.MaskedInput
                        label="Set mask range to [2,5]"
                        value="S1234567D"
                        maskRange={[2, 5]}
                    />
                    <Form.MaskedInput
                        label="Set mask range to [2,100]"
                        value="S1234567D"
                        maskRange={[2, 100]}
                    />
                    <Form.MaskedInput
                        label="Set mask range to [100,2] (auto-determines start and end index)"
                        value="S1234567D"
                        maskRange={[100, 2]}
                    />
                    <Form.MaskedInput
                        label="Set unmask range to [1,4]"
                        value="S1234567D"
                        unmaskRange={[1, 4]}
                    />
                    <Form.MaskedInput
                        label="Set mask regex to /\D/g"
                        value="S1234567D"
                        maskRegex={/\D/g}
                    />
                    <Form.MaskedInput
                        label="Set mask transformer that replaces non-digit character with *"
                        value="S1234567D"
                        maskTransformer={(value) => value.replace(/\D/g, "*")}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const WithCustomizations: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.MaskedInput
                        label="Set mask icon inactive color to #2a2b2b"
                        maskRange={[2, 5]}
                        iconInactiveColor="#2a2b2b"
                    />
                    <Form.MaskedInput
                        label="Set mask icon active color to red"
                        value="S1234567D"
                        maskRange={[2, 5]}
                        iconActiveColor="red"
                    />
                    <Form.MaskedInput
                        label="Set mask character to '*'"
                        value="S1234567D"
                        maskRange={[2, 5]}
                        maskChar="*"
                    />
                    <Form.MaskedInput
                        label="Overwrite mask and unmask icon"
                        value="S1234567D"
                        maskRange={[2, 5]}
                        iconMask={<ToggleOffFillIcon />}
                        iconUnmask={<ToggleOffIcon />}
                    />
                    <Form.MaskedInput
                        label="Overwrite mask and unmask icon and their active and inactive colors"
                        value="S1234567D"
                        maskRange={[2, 5]}
                        iconMask={<ToggleOffFillIcon />}
                        iconUnmask={<ToggleOffIcon />}
                        iconActiveColor="blue"
                        iconInactiveColor="black"
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
                <Form.MaskedInput
                    label="A shorter form input"
                    value="S1234567D"
                    maskRange={[2, 5]}
                    mobileCols={[1, 5]}
                />
                <Form.MaskedInput
                    label="A longer form input"
                    value="S1234567D"
                    maskRange={[2, 5]}
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
                    <MaskedInput value="S1234567D" maskRange={[2, 5]} />
                </Container>
            </StoryContainer>
        );
    },
};
