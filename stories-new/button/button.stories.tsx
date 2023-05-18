import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../../src/button";

const meta: Meta<typeof Button.Default> = {
    title: "General/Button",
    component: Button.Default,
    parameters: {
        controls: {
            sort: "alpha",
        },
        argTypes: {
            styleType: {
                control: "select",
                options: ["default", "secondary", "light"],
                description: "something",
                table: {
                    type: {
                        summary: "something",
                    },
                },
                type: { name: "string" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button.Default>;

export const Primary: Story = {
    render: (args) => <Button.Default {...args} />,
    name: "Default",
    args: {
        children: "Default",
        styleType: "default",
        disabled: false,
    },
};

export const Small: Story = {
    render: (args) => <Button.Small {...args} />,
    name: "Small",
    args: {
        children: "Default",
        styleType: "default",
        disabled: false,
    },
};
