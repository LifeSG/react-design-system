import type { Meta, StoryObj } from "@storybook/react";
import { Mutton } from "src/mutton";

type Component = typeof Mutton;

const meta: Meta<Component> = {
    title: "Selection and input/Mutton",
    component: Mutton,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Mutton>Large</Mutton>
                <Mutton styleType="secondary">Secondary</Mutton>
                <Mutton styleType="light">Light</Mutton>
                <Mutton styleType="link">Link</Mutton>
                <Mutton disabled>Disabled</Mutton>
            </>
        );
    },
};
