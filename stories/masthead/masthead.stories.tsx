import type { Meta, StoryObj } from "@storybook/react";
import { Masthead } from "src/masthead";
import { FullWidthStoryDecorator } from "stories/storybook-common";

type Component = typeof Masthead;

const meta: Meta<Component> = {
    title: "Navigation/Masthead",
    component: Masthead,
    decorators: [FullWidthStoryDecorator({})],
    parameters: { layout: "fullscreen" },
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <Masthead />;
    },
};
