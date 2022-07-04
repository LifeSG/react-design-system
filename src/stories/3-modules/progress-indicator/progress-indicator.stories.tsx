// Generated with util/create-component.js
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
import { ProgressIndicator as PIComponent } from "src/components";
import { ProgressIndicatorProps } from "src/components/types";

export default {
    title: "modules/ProgressIndicator",
    component: PIComponent,
    argTypes: {
        steps: {
            description: "Step items for the progress indicator",
        },
        currentIndex: {
            description: "0 - based index to indicate the current step",
        },
        fadeColor: {
            description:
                "(Mobile view only) When the progress steps are too long, there will be a fade effect at the ends of the progress indicator",
            control: {
                type: null,
            },
        },
        fadePosition: {
            description:
                "(Mobile view only) Specify the positions where the fade will be applied",
        },
        displayExtractor: {
            description:
                "A function that handles deriving the display value of the step item",
        },
    },

    parameters: {
        layout: "padded",
        docs: {
            page: () => (
                <>
                    <Title>Progress Indicator</Title>
                    <Description>
                        A component that displays an indication of the current
                        progress in a step process.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<ProgressIndicatorProps<any>> = (args) => {
    return <PIComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    steps: [
        { title: "Step 1" },
        { title: "Step 2" },
        { title: "Step 3" },
        { title: "Step 4" },
        { title: "Step 5" },
    ],
    displayExtractor: (item) => item.title,
    currentIndex: 1,
};
Default.storyName = "ProgressIndicator";
Default.parameters = {
    docs: {
        source: {
            // Note: The code block identation is intended
            code: `
<ProgressIndicator
	steps={[
		{ title: "Step 1" },
		{ title: "Step 2" },
		{ title: "Step 3" },
		{ title: "Step 4" },
		{ title: "Step 5" },
	]}
	displayExtractor={(item) => item.title}
	currentIndex={1}
/>
			`,
        },
    },
};
