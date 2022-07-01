import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import { Form } from "src/components";
import { FormTextareaProps } from "src/components/types";
import styled from "styled-components";
import { StoryContainer } from "../common/components";

export default {
    title: "Form/Textarea",
    component: Form.Textarea,
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
            description: "Specifies input should be disabled.",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
        maxLength: {
            description:
                "The maximum allowed characters to be input. Not setting this will hide the counter.",
            table: {
                type: {
                    summary: "number",
                },
            },
        },
        error: {
            table: { disable: true },
        },
        rows: {
            description: "Specifies the visible height of `Textarea`, in lines",
            table: {
                defaultValue: {
                    summary: "5",
                },
                type: {
                    summary: "number",
                },
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Textarea</Title>
                    <Description>
                        A form element that contains a label, textarea and error
                        message.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <Description>
                        This component also inherits the
                        [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)
                        attributes. Other props include:
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<FormTextareaProps> = (args) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    };

    return (
        <StoryContainer>
            <Form.Textarea value={value} onChange={handleChange} {...args} />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.args = {
    label: "Message",
    disabled: false,
    errorMessage: "Message is required",
    maxLength: 50,
    rows: 5,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Form.Textarea label="Message" />`,
        },
    },
};
Default.storyName = "Textarea";
