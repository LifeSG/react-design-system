import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Form } from "src/components";
import { FormDateInputProps } from "src/components/types";
import { StoryContainer } from "../common/components";

export default {
    title: "Form/DateInput",
    component: Form.DateInput,
    argTypes: {
        label: {
            description:
                "A name/description of the purpose of the form element. In the case where an addon is required, you can add the props needed. [Refer here](/?path=/docs/form-form-labels--page#label-addon).",
            table: {
                type: {
                    summary: "string | FormLabelProps",
                },
            },
        },
        errorMessage: {
            description:
                "A message that describes the error/issue with the value of the form element",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        disabled: {
            description: "Specifies input should be disabled",
        },
        error: {
            table: { disable: true },
        },
        value: {
            description:
                "Value of the date in string format <em>YYYY-MM-DD</em> or <em>YYYY-M-D</em>",
        },
        onChange: {
            description:
                "Called when a proper format of input is achieved. Returns as <em>YYYY-MM-DD</em> format",
        },
        onBlur: {
            description: "Returns as <em>YYYY-MM-DD</em> format",
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>DateInput</Title>
                    <Description>
                        A form element that contains a label, `DateInput` and
                        error message.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<FormDateInputProps> = (args) => {
    return (
        <StoryContainer>
            <Form.DateInput {...args} />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.storyName = "DateInput";
Default.args = {
    label: "Date",
    disabled: false,
    errorMessage: "Date is required",
};
Default.parameters = {
    docs: {
        source: {
            code: `<Form.DateInput label="Date" errorMessage="Date is required" />`,
        },
    },
};
