import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Avatar } from "src";
import { Menu } from "src/menu";
import { GridDecorator } from "stories/storybook-common";

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
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
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
            <Menu menuContent={menuContent}>
                <Avatar>Name</Avatar>
            </Menu>
        );
    },
};

export const MenuContent: StoryObj<Component> = {
    render: (_args) => {
        return menuContent;
    },
};

export const MultipleSections: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Menu.Content>
                <Menu.Section showDivider={false} label="Quick links">
                    <Menu.Link href="https://www.google.com">Link A</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link B</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link C</Menu.Link>
                </Menu.Section>
                <Menu.Section label="All services" columns={2}>
                    <Menu.Link href="https://www.google.com">Link 1</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 2</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 3</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 4</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 5</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 6</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 7</Menu.Link>
                </Menu.Section>
            </Menu.Content>
        );
    },
};

export const GridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Menu.Content>
                <Menu.Section showDivider={false} columns={2}>
                    <Menu.Link href="https://www.google.com">Link 1</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 2</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 3</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 4</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 5</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 6</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 7</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 8</Menu.Link>
                </Menu.Section>
            </Menu.Content>
        );
    },
};

export const GridLayoutWithLabel: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Menu.Content>
                <Menu.Section label="Category" columns={2}>
                    <Menu.Link href="https://www.google.com">Link 1</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 2</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 3</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 4</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 5</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 6</Menu.Link>
                    <Menu.Link href="https://www.google.com">Link 7</Menu.Link>
                </Menu.Section>
            </Menu.Content>
        );
    },
};

export const GridLayoutScrollable: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Menu.Content maxHeight={200} overflow="auto">
                <Menu.Section showDivider={false} columns={2}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <Menu.Link key={i} href="https://www.google.com">
                            Link {i + 1}
                        </Menu.Link>
                    ))}
                </Menu.Section>
            </Menu.Content>
        );
    },
};

export const ResizeAndFlip: StoryObj<Component> = {
    args: {
        menuContent: menuContent,
        zIndex: 10,
    },
    render: (args) => {
        return (
            <>
                <Menu {...args}>
                    <Avatar>Name</Avatar>
                </Menu>
                <Menu enableResize={true} {...args}>
                    <Avatar>Name</Avatar>
                </Menu>
                <Menu enableResize={true} enableFlip={false} {...args}>
                    <Avatar>Name</Avatar>
                </Menu>
                <Menu enableResize={false} enableFlip={false} {...args}>
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
