import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioButton } from "src/radio-button";
import { Container, Label, OptionContainer } from "./doc-elements";

type Component = typeof RadioButton;

const meta: Meta<Component> = {
    title: "Data Input/RadioButton",
    component: RadioButton,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [checked, setChecked] = useState(false);
        const handleChange = () => {
            if (!checked) setChecked(true);
        };
        return <RadioButton checked={checked} onChange={handleChange} />;
    },
};

export const MultipleOptions: StoryObj<Component> = {
    render: () => {
        const [value, setValue] = useState("");
        const handleSelection = (event) => {
            setValue(event.target.value);
        };
        return (
            <Container>
                <OptionContainer key="A">
                    <RadioButton
                        value="A"
                        id="options-a"
                        name="options"
                        checked={value === "A"}
                        onChange={handleSelection}
                    />
                    <Label htmlFor="options-a">Option A</Label>
                </OptionContainer>
                <OptionContainer key="B">
                    <RadioButton
                        value="B"
                        id="options-b"
                        name="options"
                        checked={value === "B"}
                        onChange={handleSelection}
                    />
                    <Label htmlFor="options-b">Option B</Label>
                </OptionContainer>
            </Container>
        );
    },
};
