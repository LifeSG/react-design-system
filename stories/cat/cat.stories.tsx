import type { Meta, StoryObj } from "@storybook/react";
import { Cat } from "src/cat";
import { RowDecorator } from "stories/storybook-common";

type Component = typeof Cat;

const meta: Meta<Component> = {
    title: "Cat",
    component: Cat,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <Cat />;
    },
    decorators: [RowDecorator()],
};
