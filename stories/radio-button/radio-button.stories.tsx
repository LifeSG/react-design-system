import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { RadioButton } from "src/radio-button";
import { GridDecorator } from "stories/storybook-common";
import { OptionContainer, OptionLabel, RadioGroupLabel } from "./doc-elements";

type Component = typeof RadioButton;

const meta: Meta<Component> = {
    title: "Selection and input/RadioButton",
    component: RadioButton,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <RadioButton />
                <RadioButton checked />
                <RadioButton disabled />
                <RadioButton disabled checked />
                <RadioButton displaySize="small" />
                <RadioButton displaySize="small" checked />
                <RadioButton displaySize="small" disabled />
                <RadioButton displaySize="small" disabled checked />
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 2,
            columnHeaders: ["Unchecked", "Checked"],
            rowHeaders: [
                "Default",
                "Default Disabled",
                "Small",
                "Small Disabled",
            ],
        }),
    ],
};

export const MultipleOptions: StoryObj<Component> = {
    render: (_args) => {
        const [value, setValue] = useState("");
        const handleSelection = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            setValue(event.target.value);
        };

        return (
            <div role="radiogroup" aria-labelledby="group-label">
                <RadioGroupLabel id="group-label">
                    Preferred contact method
                </RadioGroupLabel>
                <OptionContainer>
                    <RadioButton
                        id="contact-email"
                        name="contact"
                        value="email"
                        checked={value === "email"}
                        onChange={handleSelection}
                    />
                    <OptionLabel htmlFor="contact-email">Email</OptionLabel>
                </OptionContainer>
                <OptionContainer>
                    <RadioButton
                        id="contact-phone"
                        name="contact"
                        value="phone"
                        checked={value === "phone"}
                        onChange={handleSelection}
                    />
                    <OptionLabel htmlFor="contact-phone">Phone</OptionLabel>
                </OptionContainer>
                <OptionContainer>
                    <RadioButton
                        id="contact-mail"
                        name="contact"
                        value="mail"
                        checked={value === "mail"}
                        onChange={handleSelection}
                        disabled
                    />
                    <OptionLabel htmlFor="contact-mail">
                        Mail (disabled)
                    </OptionLabel>
                </OptionContainer>
            </div>
        );
    },
};
