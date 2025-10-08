import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioButton } from "src/radio-button";
import { GridDecorator } from "stories/storybook-common";
import { Label, OptionContainer } from "./doc-elements";

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
    render: () => {
        const [value, setValue] = useState("email");
        const handleSelection = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            setValue(event.target.value);
        };

        return (
            <div role="radiogroup" aria-labelledby="group-label">
                <legend style={{ marginBottom: "1rem" }} id="group-label">
                    Preferred contact method
                </legend>
                <OptionContainer>
                    <RadioButton
                        value="email"
                        id="contact-email"
                        name="contact"
                        checked={value === "email"}
                        onChange={handleSelection}
                    />
                    <Label htmlFor="contact-email">Email</Label>
                </OptionContainer>
                <OptionContainer>
                    <RadioButton
                        value="phone"
                        id="contact-phone"
                        name="contact"
                        checked={value === "phone"}
                        onChange={handleSelection}
                    />
                    <Label htmlFor="contact-phone">Phone</Label>
                </OptionContainer>
                <OptionContainer>
                    <RadioButton
                        value="mail"
                        id="contact-mail"
                        name="contact"
                        disabled
                        checked={value === "mail"}
                        onChange={handleSelection}
                    />
                    <Label htmlFor="contact-mail">Mail (disabled)</Label>
                </OptionContainer>
            </div>
        );
    },
};
