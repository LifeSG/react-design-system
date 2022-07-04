import React from "react";
import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import { DateInput as DateInputComponent, Input } from "src/components";
import { DateInputProps } from "src/components/types";
import { StoryContainer } from "src/stories/common/components";

export default {
    title: "modules/DateInput",
    component: DateInputComponent,
    argTypes: {
        value: {
            description:
                "Value of the date in string format <em>YYYY-MM-DD</em> or <em>YYYY-M-D</em>",
        },
        error: {
            description: "Specifies if the input has an error",
        },
        onChange: {
            description:
                "Called when a proper format of input is achieved. Returns as <em>YYYY-MM-DD</em> format. Should the value be invalid, the `Invalid date` value will be returned.",
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
                        The component that enables a user to enter a date value.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<DateInputProps> = (args) => (
    <StoryContainer>
        <DateInputComponent {...args} />
    </StoryContainer>
);

export const DateInput = Template.bind({});
DateInput.storyName = "DateInput";
DateInput.args = {
    error: false,
    value: "",
};
