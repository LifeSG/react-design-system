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
import { Icon, InputGroup } from "src/components";
import { InputGroupProps } from "src/components/types";
import { StoryContainer } from "src/stories/common/components";

export default {
    title: "modules/InputGroup",
    component: InputGroup,
    argTypes: {
        type: {
            description: "The input type",
        },
        disabled: {
            description: "Specifies input should be disabled.",
        },
        addon: {
            description:
                "Properties to describe the addon component. [View AddonProps](/?path=/docs/modules-inputgroup-addon-props--page)",
            table: {
                type: {
                    summary: "AddonProps<T>",
                },
            },
            control: {
                type: null,
            },
        },
        placeholder: {
            description:
                "Specifies the placeholder of the **input field portion**",
        },
        spacing: {
            description:
                "Adds a space in-between every `n` letters of text in **input field portion**. Only works when `type` is `tel`.",
        },
        error: {
            description: "Specifies if input has an error",
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Input Group</Title>
                    <Description>
                        An enhanced field that allows a user to enter a response
                        and display extra information.
                    </Description>
                    <Heading>Props</Heading>
                    <Description>
                        This component also inherits the
                        [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
                        attributes.
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories includePrimary={true} title="Examples" />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<InputGroupProps<any>> = (args) => (
    <StoryContainer>
        <InputGroup {...args} />
    </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    placeholder: "Enter amount",
    addon: {
        value: "$",
    },
};
Default.parameters = {
    docs: {
        description: {
            story: "This contain a readonly label to provide more context for the input.",
        },
    },
};

export const WithListAddon = Template.bind({});
WithListAddon.args = {
    disabled: false,
    placeholder: "Enter postal code",
    addon: {
        placeholder: "Select",
        value: { value: "SG", display: "Singapore" },
        type: "list",
        listItems: [
            { value: "SG", display: "Singapore" },
            { value: "US", display: "United States" },
            { value: "UK", display: "United Kingdom" },
            { value: "JP", display: "Japan" },
        ],
        valueExtractor: (item) => item.value,
        listExtractor: (item) => item.display,
        selectorTestId: "list-testid",
    },
};
WithListAddon.parameters = {
    docs: {
        description: {
            story: "This contains a list of prefix that can be selected from.",
        },
    },
};

export const WithCustomAddon = Template.bind({});
WithCustomAddon.args = {
    placeholder: "Search...",
    addon: {
        type: "custom",
        children: <Icon type="search" />,
    },
};
WithCustomAddon.parameters = {
    docs: {
        description: {
            story: "This allows a custom component to be passed in, such as an `Icon`.",
        },
    },
};
