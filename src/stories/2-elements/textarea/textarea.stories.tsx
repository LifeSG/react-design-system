// Generated with util/create-component.js
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
import { Textarea as TextareaComponent } from "src/components";
import { TextareaProps } from "src/components/types";
import { StoryContainer } from "src/stories/common/components";

export default {
    title: "elements/Textarea",
    component: TextareaComponent,
    argTypes: {
        maxLength: {
            description:
                "The maximum allowed characters to be `Textarea`. Not setting this will hide the counter.",
            table: {
                type: {
                    summary: "number",
                },
            },
        },
        disabled: {
            description: "Specifies `Textarea` should be disabled.",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
        error: {
            description: "Specifies if `Textarea` has an error",
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
                        A field that allows a user to enter a multi-line
                        response. This is useful if there is a sizeable amount
                        of free-form text.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <Description>
                        This component inherits the
                        [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)
                        attributes. Other props include:
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<TextareaProps> = (args) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    };

    return (
        <StoryContainer>
            <TextareaComponent
                value={value}
                onChange={handleChange}
                {...args}
            />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.args = {
    maxLength: 50,
    disabled: false,
    error: false,
    rows: 5,
};
Default.storyName = "Textarea";
