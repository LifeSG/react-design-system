import { css } from "@linaria/core";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Example } from "src/example";

type Component = typeof Example;

const meta: Meta<Component> = {
    title: "General/Example",
    component: Example,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <div className={container}>
                <Example>
                    <p>Hello from inside the Example component</p>
                </Example>
            </div>
        );
    },
};

export const WithMultipleChildren: StoryObj<Component> = {
    render: (_args) => {
        return (
            <div className={container}>
                <Example>
                    <p>First child</p>
                    <p>Second child</p>
                    <p>Third child</p>
                </Example>
            </div>
        );
    },
};

const container = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
`;
