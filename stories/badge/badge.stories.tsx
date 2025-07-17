import { MagnifierIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "src/avatar";
import { Badge } from "src/badge";
import { GridDecorator, RowDecorator } from "stories/storybook-common";

type Component = typeof Badge;

const meta: Meta<Component> = {
    title: "Feedback indicators/Badge",
    component: Badge,
};

export default meta;

export const Default: StoryObj = {
    render: (_args) => (
        <>
            <Badge count={8} variant="dot" />
            <Badge count={8} variant="dot-with-border" />
            <Badge count={8} variant="number" />
            <Badge count={8} variant="number-with-border" />
            <Badge count={8} color="important" variant="dot" />
            <Badge count={8} color="important" variant="dot-with-border" />
            <Badge count={8} color="important" variant="number" />
            <Badge count={8} color="important" variant="number-with-border" />
        </>
    ),
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Dot",
                "Dot with border",
                "Number",
                "Number with border",
            ],
            rowHeaders: ["Default", "Important"],
        }),
    ],
};

export const Count: StoryObj = {
    render: (_args) => (
        <>
            <Badge count={8} />
            <Badge count={88} />
            <Badge count={209} />
            <Badge count={1000} />
            <Badge count={2090} />
        </>
    ),
    decorators: [RowDecorator()],
};

export const Anchored: StoryObj = {
    render: (_args) => (
        <>
            <Badge count={8} variant="dot">
                <MagnifierIcon />
            </Badge>
            <Badge count={8} badgeOffset={["69%", "-54%"]}>
                <MagnifierIcon />
            </Badge>
            <Badge
                count={8}
                variant="dot-with-border"
                badgeOffset={["-3%", "14%"]}
            >
                <Avatar>Example</Avatar>
            </Badge>
            <Badge count={8}>
                <Avatar>Example</Avatar>
            </Badge>
        </>
    ),
    decorators: [RowDecorator()],
};
