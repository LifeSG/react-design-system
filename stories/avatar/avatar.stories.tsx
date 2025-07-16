import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "src/avatar";
import { Badge } from "src/badge";
import { GridDecorator } from "stories/storybook-common";
import { DefaultComponentWrapper, NAME, menuItems } from "./doc-elements";

type Component = typeof Avatar;

const meta: Meta<Component> = {
    title: "Navigation/Avatar",
    component: Avatar,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Avatar>{NAME}</Avatar>
                <Avatar mobile={true}>{NAME}</Avatar>
                <Badge count={8} color="important" variant="number-with-border">
                    <Avatar>{NAME}</Avatar>
                </Badge>
                <Badge count={8} color="important" variant="dot-with-border">
                    <Avatar mobile={true}>{NAME}</Avatar>
                </Badge>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 2,
            columnHeaders: ["Default", "Mobile"],
            rowHeaders: ["Without badge", "With badge"],
        }),
    ],
};

export const WithMenu: StoryObj<Component> = {
    render: (_args) => {
        return (
            <DefaultComponentWrapper>
                <Badge count={8} color="important" variant="number-with-border">
                    <Avatar menu={{ items: menuItems }}>{NAME}</Avatar>
                </Badge>
            </DefaultComponentWrapper>
        );
    },
};

export const WithOnClick: StoryObj<Component> = {
    render: (_args) => {
        return (
            <DefaultComponentWrapper>
                <Badge count={8} color="important" variant="number-with-border">
                    <Avatar>{NAME}</Avatar>
                </Badge>
            </DefaultComponentWrapper>
        );
    },
};
