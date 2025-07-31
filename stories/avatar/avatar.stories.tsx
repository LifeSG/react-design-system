import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "src/avatar";
import { Badge } from "src/badge";
import { GridDecorator } from "stories/storybook-common";

type Component = typeof Avatar;

const meta: Meta<Component> = {
    title: "Navigation/Avatar",
    component: Avatar,
};

export default meta;

const NAME = "Maximilian";

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Avatar>{NAME}</Avatar>
                <Avatar sizeType="small">{NAME}</Avatar>
                <Badge count={8} color="important" variant="number-with-border">
                    <Avatar>{NAME}</Avatar>
                </Badge>
                <Badge count={8} color="important" variant="dot-with-border">
                    <Avatar sizeType="small">{NAME}</Avatar>
                </Badge>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 2,
            columnHeaders: ["Default", "Small"],
            rowHeaders: ["Without badge", "With badge"],
        }),
    ],
};
