import React, { useEffect, useState } from "react";
import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Timepicker as TimepickerComponent } from "src/components";
import { StoryContainer } from "src/stories/common/components";
import { TimepickerProps } from "src/components/types";

export default {
    title: "modules/Timepicker",
    component: TimepickerComponent,
    argTypes: {
        value: {
            description:
                "Value of the time in string based on the format passed. 24 hour will be <em>hh:mm</em>, while 12 hour will be <em>hh:mma</em>",
        },
        defaultValue: {
            description:
                "The default value of the time in string based on the format passed. 24 hour will be <em>hh:mm</em>, while 12 hour will be <em>hh:mma</em>",
        },
        placeholder: {
            description:
                "A short hint of the expected value of the input. 24 hour will be `HH:MM`, while 12 hour will be `HH:MMam`",
        },
        error: {
            description: "Specifies if the input has an error",
        },
        format: {
            description:
                "Specifies the format of the time. 12 hour format will be <em>hh:mma</em> while 24 hour format will be <em>hh:mm</em>",
        },
        disabled: {
            description: "Specifies if the input is to be disabled",
        },
        onChange: {
            description:
                "Called when the user clicks on the `Confirm` button in the time selection box. Returns the date value in the format specified",
        },
        onBlur: {
            description:
                "Called when a defocus happens. Any changes in the time selection box will not be applied.",
        },
        onSelectionCancel: {
            description:
                "Called when the user clicks on the 'Cancel' button in the time selection box. Any changes will not be applied.",
        },
        id: {
            description: "The id of the input",
        },
        name: {
            description: "The name of the input",
        },
        className: {
            description: "The class attribute for the input",
        },
        style: {
            description: "The inline style specification for the input",
        },
        "data-testid": {
            description: "The test id for the input",
        },
        tabIndex: {
            description: "Specifies the tab order of the input",
        },
        role: {
            description: "Describes the role of the input",
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Timepicker</Title>
                    <Description>
                        The component that enables a user to enter a time value.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<TimepickerProps> = (args) => {
    const [timeValue, setTimeValue] = useState<string>(args.value);

    useEffect(() => {
        setTimeValue(args.value);
    }, [args.value]);

    const handleChange = (value: string) => {
        setTimeValue(value);
    };

    return (
        <StoryContainer>
            <TimepickerComponent
                {...args}
                value={timeValue}
                onChange={handleChange}
            />
        </StoryContainer>
    );
};

export const Timepicker = Template.bind({});
Timepicker.storyName = "Timepicker";
Timepicker.args = {
    value: "",
    format: "12hr",
    error: false,
    disabled: false,
};
