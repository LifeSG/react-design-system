import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import React, { useEffect, useState } from "react";
import { Form } from "src/components";
import { FormTimepickerProps } from "src/components/types";
import { StoryContainer } from "../common/components";

export default {
    title: "Form/Timepicker",
    component: Form.Timepicker,
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
                        A form element that contains a label, `Timepicker` and
                        error message.
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<FormTimepickerProps> = (args) => {
    const [timeValue, setTimeValue] = useState<string>(args.value);

    useEffect(() => {
        setTimeValue(args.value);
    }, [args.value]);

    const handleChange = (value: string) => {
        setTimeValue(value);
    };

    return (
        <StoryContainer>
            <Form.Timepicker
                {...args}
                value={timeValue}
                onChange={handleChange}
            />
        </StoryContainer>
    );
};

export const Default = Template.bind({});
Default.storyName = "Timepicker";
Default.args = {
    label: "Time",
    errorMessage: "Time is required",
    value: "",
    format: "12hr",
    disabled: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<Form.Timepicker label="Time" errorMessage="Time is required" />`,
        },
    },
};
