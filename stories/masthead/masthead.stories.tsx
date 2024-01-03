import type { Meta, StoryObj } from "@storybook/react";
import { Masthead } from "src/masthead";

type Component = typeof Masthead;

const meta: Meta<Component> = {
    title: "Modules/Masthead",
    component: Masthead,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return <Masthead />;
    },
};
