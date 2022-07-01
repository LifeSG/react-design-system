import React from "react";
import { Checkbox, Form, Input, withPopover } from "src/components";
import styled from "styled-components";

export const CustomField = () => (
    <Container>
        <FieldContainer>
            <Input placeholder="Type here..." />
        </FieldContainer>
        <FieldContainer>
            <Checkbox />
        </FieldContainer>
    </Container>
);

export const FormFieldWithAddon = () => (
    <Form.Field
        label={{
            text: "Field with addon",
            addon: {
                content: (
                    <div style={{ background: "yellow" }}>
                        Custom component addon
                    </div>
                ),
            },
        }}
        placeholder="Enter field"
    />
);

const TriggerComponent = () => <Form.LabelAddon addonType="popover" />;

const AddonHOC = withPopover(TriggerComponent, {
    content: "This is my popover content",
});

export const UsedSeparately = () => (
    <Form.Label>
        This was crafted separately
        <AddonHOC />
    </Form.Label>
);

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const FieldContainer = styled.div`
    display: flex;
    margin-right: 1rem;
    :last-of-type {
        margin-right: 0;
    }
`;

export const DisplayLabelForm = styled.div`
    display: flex;
    flex: 0;
    align-items: center;
`;

export const StyledCheckbox = styled(Checkbox)`
    margin-right: 1rem;
`;
