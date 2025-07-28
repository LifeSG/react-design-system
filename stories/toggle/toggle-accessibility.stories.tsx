import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { Typography } from "src/typography";
import styled from "styled-components";
import { Colour } from "src/theme";

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
    render: () => {
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
                    What toppings would you like?
                </legend>

                <Toggle indicator type="radio" name="toppings">
                    Lettuce
                </Toggle>

                <Toggle indicator type="radio" name="toppings">
                    Tomato
                </Toggle>
            </fieldset>
        );
    },
};

export const ErrorExample: StoryObj<Component> = {
    render: () => {
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
                <ErrorText id="error-text" aria-live="assertive">
                    Please select yes.
                </ErrorText>
            </fieldset>
        );
    },
};
