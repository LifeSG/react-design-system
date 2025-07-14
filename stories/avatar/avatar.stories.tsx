import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "src/avatar";
import {
    FullWidthStoryDecorator,
    GridDecorator,
} from "stories/storybook-common";
import { Navbar } from "../../src/navbar";
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
                <Avatar badge={{ count: 8, color: "important" }}>{NAME}</Avatar>
                <Avatar badge={{ count: 8, color: "important" }} mobile={true}>
                    {NAME}
                </Avatar>
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
                <Avatar
                    menu={{ items: menuItems }}
                    badge={{ count: 8, color: "important" }}
                >
                    {NAME}
                </Avatar>
            </DefaultComponentWrapper>
        );
    },
};

export const WithOnClick: StoryObj<Component> = {
    render: (_args) => {
        return (
            <DefaultComponentWrapper>
                <Avatar
                    badge={{ count: 8, color: "important" }}
                    onClick={() => alert("Clicked on Avatar")}
                >
                    {NAME}
                </Avatar>
            </DefaultComponentWrapper>
        );
    },
};

export const WithNavBar: StoryObj<Component> = {
    decorators: [FullWidthStoryDecorator({})],
    parameters: { docs: { source: { type: "code" } }, layout: "fullscreen" }, // prevent Storybook from freezing
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: [] }}
                actionButtons={{
                    desktop: [
                        {
                            type: "component",
                            args: {
                                render: (
                                    <Avatar
                                        badge={{ count: 8, color: "important" }}
                                        menu={{ items: menuItems }}
                                    >
                                        {NAME}
                                    </Avatar>
                                ),
                            },
                        },
                    ],
                }}
                fixed={false}
            />
        );
    },
};
