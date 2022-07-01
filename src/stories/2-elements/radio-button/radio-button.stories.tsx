import React, { useState } from "react";
import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import { RadioButton } from "src/components";
import { RadioButtonProps } from "src/components/types";
import { Container, Label, OptionContainer } from "./doc-elements";

export default {
    title: "elements/Radio Button",
    component: RadioButton,
    argTypes: {
        checked: {
            description: "The selected (checked) state of the Radio Button",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
        disabled: {
            description:
                "The state in which an action is allowed to be executed on the Radio Button",
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
                    <Title>Radio Button</Title>
                    <Description>
                        A field that allows a user to enter a response by
                        clicking, and shown with a graphical component when
                        activated. Usually Radio Buttons are used to allow
                        selection of a predefined set of mutually exclusive
                        options.
                    </Description>
                    <Stories includePrimary={true} title="Example" />
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

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: true,
    disabled: false,
};

export const MultipleOptions: Story = () => {
    const [value, setValue] = useState<string>("");

    const handleSelection = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <Container>
            <OptionContainer>
                <RadioButton
                    value="A"
                    id="multiple-options-a"
                    name="multiple-options"
                    onChange={handleSelection}
                    checked={value === "A"}
                />
                <Label htmlFor="multiple-options-a">Option A</Label>
            </OptionContainer>
            <OptionContainer>
                <RadioButton
                    value="B"
                    id="multiple-options-b"
                    name="multiple-options"
                    onChange={handleSelection}
                    checked={value === "B"}
                />
                <Label htmlFor="multiple-options-b">Option B</Label>
            </OptionContainer>
        </Container>
    );
};

MultipleOptions.parameters = {
    docs: {
        description: {
            story: "Here is an example of implementing a multiple option radio button form.",
        },
    },
};
