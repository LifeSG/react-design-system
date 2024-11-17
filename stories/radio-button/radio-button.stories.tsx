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
        const [value, setValue] = useState("");
        const handleSelection = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            setValue(event.target.value);
        };
        return (
            <>
                <OptionContainer>
                    <RadioButton
                        value="A"
                        id="options-a"
                        name="options"
                        checked={value === "A"}
                        onChange={handleSelection}
                    />
                    <Label htmlFor="options-a">Option A</Label>
                </OptionContainer>
                <OptionContainer>
                    <RadioButton
                        value="B"
                        id="options-b"
                        name="options"
                        checked={value === "B"}
                        onChange={handleSelection}
                    />
                    <Label htmlFor="options-b">Option B</Label>
                </OptionContainer>
            </>
        );
    },
};
