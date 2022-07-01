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
import { FormInputSelectProps } from "src/components/types";
import { StoryContainer } from "../common/components";

export default {
    title: "Form/Select",
    component: Form.Select,
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
        errorMessageTestId: {
            description: "The id used for testing the error message",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        testId: {
            description: "The id used for testing the select input container",
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        options: {
            description: "A list of options that a user can choose from",
        },
        selectedOption: {
            description: "Specifies the selected option object",
            control: {
                type: null,
            },
        },
        enableSearch: {
            description:
                "When specified, it will allow a text base search for the items in the list",
        },
        valueExtractor: {
            description:
                "A function that handles deriving the value of the option that has been selected",
        },
        listExtractor: {
            description:
                "A function that handles deriving the value of the option that is to be displayed in the options",
        },
        displayValueExtractor: {
            description:
                "A function that handles deriving the display value of the option that has been selected",
        },
        onSelectItem: {
            description: "The callback function when a selection is made",
        },
        disabled: {
            description: "Specifies if the input should be disabled",
        },
        name: {
            description: "Specifies the name of the input",
        },
        placeholder: {
            description:
                "SSpecifies a short hint of the expected value of the input",
        },
        listStyleWidth: {
            description:
                "Style option: The width of the options. You can specify e.g. 100% or 12rem",
        },
        error: {
            table: { disable: true },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Select</Title>
                    <Description>
                        A form element that provides a set of options for a user
                        to select.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<FormInputSelectProps<any>> = (args) => {
    return (
        <StoryContainer>
            <Form.Select {...args} />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.storyName = "Select";
Default.args = {
    label: "Category",
    disabled: false,
    errorMessage: "Category is required",
    errorMessageTestId: "Invalid_Category_ErrorMessage",
    options: [
        { value: "A", label: "Option A" },
        { value: "B", label: "Option B" },
        { value: "C", label: "Option C" },
        { value: "D", label: "Option D" },
    ],
    placeholder: "Select",
    valueExtractor: (item) => item.value,
    listExtractor: (item) => item.label,
    displayValueExtractor: (item) => item.label,
};
Default.parameters = {
    docs: {
        source: {
            code: `
<Form.Select
	label="Category"
	errorMessage="Category is required"
	placeholder="Select"
	options={[
		{ value: "A", label: "Option A" },
		{ value: "B", label: "Option B" },
		{ value: "C", label: "Option C" },
		{ value: "D", label: "Option D" },
	]}
	valueExtractor={(item) => item.value}
	listExtractor={(item) => item.label}
	displayValueExtractor={(item) => item.label}
	onSelectItem={(item, extractedValue) => someFn()}
/>
			`,
        },
    },
};
