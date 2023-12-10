import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "src/checkbox";
import { Form } from "src/form";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.CustomField;

const meta: Meta<Component> = {
    title: "Form/CustomField",
    component: Form.CustomField,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [cb1, setCb1] = useState(false);
        const [cb2, setCb2] = useState(false);
        const [cb3, setCb3] = useState(false);
        return (
            <StoryContainer>
                <Container>
                    <Form.CustomField label="This is a custom field">
                        <Checkbox checked={cb1} onClick={() => setCb1(!cb1)} />
                    </Form.CustomField>
                    <Form.CustomField
                        label="This is the disabled state"
                        disabled
                    >
                        <Checkbox
                            checked={cb2}
                            onClick={() => setCb2(!cb2)}
                            disabled
                        />
                    </Form.CustomField>
                    <Form.CustomField
                        label="This is the error state"
                        errorMessage="Date is required"
                    >
                        <Checkbox checked={cb3} onClick={() => setCb3(!cb3)} />
                    </Form.CustomField>
                </Container>
            </StoryContainer>
        );
    },
};
