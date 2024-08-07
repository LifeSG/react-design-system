import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/button";
import { Card } from "src/card";
import { V2_Text } from "src/v2_text";

type Component = typeof Card;

const meta: Meta<Component> = {
    title: "Modules/Card",
    component: Card,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Card>
                This is a Card with a string as its children. A default styling
                of Text.Body is applied to the string.
            </Card>
        );
    },
};

export const CustomContent: StoryObj<Component> = {
    render: () => {
        return (
            <Card>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <ExclamationCircleFillIcon
                        style={{ height: "1.5rem", width: "1.5rem" }}
                    />
                    <V2_Text.BodySmall>
                        This is a Card with a JSX.Element as its children.
                    </V2_Text.BodySmall>
                    <Button.Small>Click me</Button.Small>
                </div>
            </Card>
        );
    },
};
