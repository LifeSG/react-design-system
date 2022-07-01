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
import { FormFieldGroupProps } from "src/components/types";
import { StoryContainer } from "../common/components";

export default {
    title: "Form/FieldGroup",
    component: Form.FieldGroup,
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
        addon: {
            description: "Properties to describe the addon component.",
            control: {
                type: null,
            },
        },
        type: {
            description:
                "The input type. To find out more about the different types, [click here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types).",
            table: {
                defaultValue: {
                    summary: "text",
                },
            },
        },
        disabled: {
            description: "Specifies input should be disabled.",
        },
        error: {
            table: { disable: true },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>FieldGroup</Title>
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

const Template: Story<FormFieldGroupProps<any>> = (args) => {
    return (
        <StoryContainer>
            <Form.FieldGroup {...args} />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.storyName = "FieldGroup";
Default.args = {
    label: "Enter website",
    errorMessage: "Website is mandatory",
    disabled: false,
    addon: {
        type: "label",
        value: "https://",
    },
};
Default.parameters = {
    docs: {
        source: {
            // Note: The code block identation is intended
            code: `
<Form.FieldGroup
	label={{
		text: "Enter website"
	}}
	errorMessage="Website is mandatory"
	addon={{
		type: "label",
		value: "https://"
	}}
/>`,
        },
    },
};
