import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "src/menu";
import { Avatar } from "../../src";

type Component = typeof Menu;

const meta: Meta<Component> = {
    title: "Overlays/Menu",
    component: Menu,
};

export default meta;

const getMenuContent = () => {
    return (
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
};

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Menu menuContent={getMenuContent()}>
                    <Avatar>Name</Avatar>
                </Menu>
            </>
        );
    },
};

export const ContentOnly: StoryObj<Component> = {
    render: (_args) => {
        return getMenuContent();
    },
};
