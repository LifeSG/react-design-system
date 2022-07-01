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
import { Input } from "src/components";
import { InputProps } from "src/components/types";

export default {
    title: "elements/Input",
    component: Input,
    argTypes: {
        type: {
            description: "The input type",
        },
        placeholder: {
            description: "Placeholder text",
        },
        spacing: {
            description:
                "Adds a space in-between every `n` letters of input text. Only works when `type` is `tel`.",
        },
        disabled: {
            description: "Specifies input should be disabled.",
        },
        error: {
            description: "Specifies if input has an error",
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Input</Title>
                    <Description>
                        A field that allows a user to enter a response.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <Description>
                        This component inherits the
                        [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
                        attributes.
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Enter text",
    disabled: false,
    error: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `
<Input
  onChange={handleChange}
  value={value}
  placeholder="Enter text"
/>
			`,
        },
    },
};

export const Error = Template.bind({});
Error.args = {
    placeholder: "Enter text",
    disabled: false,
    error: true,
};
Error.parameters = {
    docs: {
        source: {
            code: `
<Input
  onChange={handleChange}
  value={value}
  error={true}
/>
			`,
        },
    },
};

const TemplateWithSpacing: Story<InputProps> = (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <Input {...args} value={value} onChange={handleChange} />;
};

export const WithSpacing = TemplateWithSpacing.bind({});
WithSpacing.args = {
    spacing: 4,
    type: "tel",
    value: "1234567890",
};

WithSpacing.parameters = {
    docs: {
        source: {
            code: `
<Input
   onChange={handleChange}
   value={value}
   type={"tel"}
   spacing={4}
/>
			`,
        },
    },
};
