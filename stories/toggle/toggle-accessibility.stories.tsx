import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Colour } from "src/theme";
import { Toggle } from "src/toggle";
import { Typography } from "src/typography";
import styled from "styled-components";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/Accessibility Guidelines",
    component: Toggle,
};
export default meta;

const ErrorText = styled(Typography.BodyMD)`
    color: ${Colour["text-error"]};
`;

export const GroupExample: StoryObj<Component> = {
    render: (_args) => {
        const [selection, setSelection] = useState<string | undefined>(
            undefined
        );

        return (
            <fieldset
                role="radiogroup"
                style={{
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <legend style={{ marginBottom: "1rem" }}>
                    What toppings would you like?
                </legend>

                <Toggle
                    indicator
                    type="radio"
                    name="toppings"
                    checked={selection === "lettuce"}
                    onChange={() => setSelection("lettuce")}
                >
                    Lettuce
                </Toggle>

                <Toggle
                    indicator
                    type="radio"
                    name="toppings"
                    checked={selection === "tomato"}
                    onChange={() => setSelection("tomato")}
                >
                    Tomato
                </Toggle>
            </fieldset>
        );
    },
};

export const ErrorExample: StoryObj<Component> = {
    render: (_args) => {
        return (
            <fieldset
                style={{
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <legend style={{ marginBottom: "1rem" }}>
                    Would you like to add toppings?
                </legend>

                <Toggle
                    indicator
                    error
                    type="yes"
                    name="add-toppings"
                    aria-invalid="true"
                    aria-describedby="error-text"
                >
                    Yes
                </Toggle>
                <ErrorText id="error-text">Please select yes.</ErrorText>
            </fieldset>
        );
    },
};
