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
import { Checkbox as CheckboxComponent } from "src/components";
import { CheckboxProps } from "src/components/types";

export default {
    title: "elements/Checkbox",
    component: CheckboxComponent,
    argTypes: {
        checked: {
            description: "The selected (checked) state of the Checkbox",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
        disabled: {
            description:
                "The state in which an action is allowed to be executed on the Checkbox",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Checkbox</Title>
                    <Description>
                        A field that allows a user to enter a response by
                        clicking, and shown with a tick (checked) when
                        activated.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <Description>
                        This component inherits the
                        [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
                        attributes. Some key props include:
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
    <CheckboxComponent {...args} />
);

export const Checkbox = Template.bind({});
Checkbox.args = {
    checked: false,
    disabled: false,
};
