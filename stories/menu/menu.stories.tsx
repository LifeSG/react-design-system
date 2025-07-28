import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "src/menu";
import { GridDecorator } from "../storybook-common";
import { Avatar } from "../../src";

type Component = typeof Menu;

const meta: Meta<Component> = {
    title: "Overlays/Menu",
    component: Menu,
};

export default meta;

const menuContent = (
    <Menu.Content>
        <Menu.Section showDivider={false}>
            <Menu.Item label="Name" subLabel="email@email.sg" />
        </Menu.Section>

        <Menu.Section label="Category 1">
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
        </Menu.Section>

        <Menu.Section>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
        </Menu.Section>

        <Menu.Section label="Category 2">
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
        </Menu.Section>
    </Menu.Content>
);

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Menu menuContent={menuContent}>
                    <Avatar>Name</Avatar>
                </Menu>
            </>
        );
    },
};

export const ContentOnly: StoryObj<Component> = {
    render: (_args) => {
        return menuContent;
    },
};

export const ResizeAndFlip: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Menu zIndex={10} menuContent={menuContent}>
                    <Avatar>Name</Avatar>
                </Menu>
                <Menu enableResize={true} zIndex={10} menuContent={menuContent}>
                    <Avatar>Name</Avatar>
                </Menu>
                <Menu
                    enableResize={true}
                    enableFlip={false}
                    zIndex={10}
                    menuContent={menuContent}
                >
                    <Avatar>Name</Avatar>
                </Menu>
                <Menu
                    enableResize={false}
                    enableFlip={false}
                    zIndex={10}
                    menuContent={menuContent}
                >
                    <Avatar>Name</Avatar>
                </Menu>
            </>
        );
    },

    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Resize disabled, Flip enabled (Default)",
                "Resize and Flip enabled",
                "Resize enabled, Flip disabled",
                "Resize and Flip disabled",
            ],
        }),
    ],
};
