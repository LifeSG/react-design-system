import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Example } from "src/example";

type Component = typeof Example;

const meta: Meta<Component> = {
    title: "Test/Example",
    component: Example,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Example>This is string content with default text styling.</Example>
        );
    },
};
