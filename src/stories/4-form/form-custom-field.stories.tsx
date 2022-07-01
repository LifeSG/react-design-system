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
import { FormCustomFieldProps } from "src/components/types";
import { StoryContainer } from "../common/components";
import { CustomField } from "./doc-elements";

export default {
    title: "Form/Custom Field",
    component: Form.CustomField,
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
        id: {
            description: "The unique identifier of the component",
            table: {
                type: {
                    summary: "string",
                },
            },
            control: {
                type: null,
            },
        },
        children: {
            description: "The custom contents of the form field",
            control: {
                type: null,
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Custom Field</Title>
                    <Description>
                        A custom form element that enables users to specify the
                        contents within. It will still contain a label and error
                        message.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<FormCustomFieldProps> = (args) => {
    return (
        <StoryContainer>
            <Form.CustomField {...args} />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.storyName = "Custom Field";
Default.args = {
    label: "Name",
    errorMessage: "Name is mandatory",
    children: <CustomField />,
};
Default.parameters = {
    docs: {
        source: {
            code: `
<Form.CustomField
	label="name"
	errorMessage="Name is mandatory"
>
	<CustomField />
</Form.CustomField>`,
        },
    },
};
