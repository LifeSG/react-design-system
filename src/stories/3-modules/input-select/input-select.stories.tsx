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
import { InputSelect as InputSelectComponent } from "src/components";
import { InputSelectProps } from "src/components/types";
import { StoryContainer } from "src/stories/common/components";

export default {
    title: "modules/InputSelect",
    component: InputSelectComponent,
    argTypes: {
        options: {
            description: "A list of options that a user can choose from",
        },
        selectedOption: {
            description: "Specifies the selected option object",
            control: {
                type: null,
            },
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
        onShowOptions: {
            description:
                "The callback function when the options are being shown",
        },
        onHideOptions: {
            description:
                "The callback function when the options are being dismissed",
        },
        enableSearch: {
            description:
                "When specified, it will allow search for the items in the list. Specifying `searchFunction` will also allow search",
        },
        searchFunction: {
            description:
                "When specified, the custom search function will be ran instead of the simple text based search. Specifying this will also allow the search to be enabled.",
        },
        disabled: {
            description: "Specifies if the input should be disabled",
        },
        name: {
            description: "Specifies the name of the input",
        },
        placeholder: {
            description: "Specifies the placeholder text",
        },
        listStyleWidth: {
            description:
                "Style option: The width of the options. You can specify e.g. 100% or 12rem",
        },
        error: {
            description: "Specifies if input has an error",
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Input Select</Title>
                    <Description>
                        A field that provides a set of options for a user to
                        select.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<InputSelectProps<any>> = (args) => (
    <StoryContainer>
        <InputSelectComponent {...args} />
    </StoryContainer>
);

export const InputSelect = Template.bind({});
InputSelect.args = {
    placeholder: "Select",
    options: [
        { value: "A", label: "Option A" },
        { value: "B", label: "Option B" },
        { value: "C", label: "Option C" },
        { value: "D", label: "Option D" },
    ],
    valueExtractor: (item) => item.value,
    listExtractor: (item) => item.label,
    displayValueExtractor: (item) => item.label,
    error: false,
    enableSearch: false,
};

InputSelect.storyName = "InputSelect";

InputSelect.parameters = {
    docs: {
        source: {
            // Note: The code block identation is intended
            code: `
<InputSelect
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
