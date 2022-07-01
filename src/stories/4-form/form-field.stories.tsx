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
import { FormFieldProps } from "src/components/types";
import { StoryContainer } from "../common/components";

export default {
    title: "Form/Field",
    component: Form.Field,
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
        placeholder: {
            description:
                "Specifies a short hint of the expected value of the input",
        },
        error: {
            table: { disable: true },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Field</Title>
                    <Description>
                        A form element that contains a label, input and error
                        message.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <Description>
                        This component also inherits the
                        [HTMLInputElement](https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement)
                        attributes.
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<FormFieldProps> = (args) => {
    return (
        <StoryContainer>
            <Form.Field {...args} />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.storyName = "Field";
Default.args = {
    label: {
        text: "Name",
        addon: {
            content: "This is my addon",
        },
    },
    disabled: false,
    placeholder: "Enter text",
    errorMessage: "Name is required",
};
Default.parameters = {
    docs: {
        source: {
            code: `
<Form.Field
	label={{
		text: "Name",
		addon: {
			content: "This is my addon"
		}
	}}
	placeholder="Enter text"
	errorMessage="Name is required"
/>
`,
        },
    },
};
