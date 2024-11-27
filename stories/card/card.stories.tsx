import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "src/card";
import { Typography } from "src/typography";

type Component = typeof Card;

const meta: Meta<Component> = {
    title: "Content/Card",
    component: Card,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <Card>This is string content with default text styling.</Card>;
    },
};

export const CustomContent: StoryObj<Component> = {
    render: (_args) => {
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
                    <Typography.BodySM>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </Typography.BodySM>
                    <Typography.BodySM>
                        Consectetur, esse. Eum eaque alias, veniam optio nihil
                        nemo.
                    </Typography.BodySM>
                </div>
            </Card>
        );
    },
};
