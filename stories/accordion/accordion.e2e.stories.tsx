import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "src/accordion";
import { Text } from "src/text";

type Component = typeof Accordion;

const meta: Meta<Component> = {
    title: "e2e-Accordion",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div style={{ margin: "1rem", width: "500px", maxWidth: "90vw" }}>
                <Story />
            </div>
        ),
    ],
    tags: ["e2e"],
};

export default meta;

export const Collapsible: StoryObj<Component> = {
    render: () => {
        return (
            <Accordion
                data-testid="e2e"
                title="Odio facilisis mauris sit amet massa vitae tortor"
            >
                <Accordion.Item title="Odio facilisis mauris sit amet massa vitae tortor">
                    <Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text.Body>
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const Uncollapsible: StoryObj<Component> = {
    render: () => {
        return (
            <Accordion
                data-testid="e2e"
                title="Odio facilisis mauris sit amet massa vitae tortor"
                enableExpandAll={false}
            >
                <Accordion.Item
                    title="Odio facilisis mauris sit amet massa vitae tortor"
                    collapsible={false}
                >
                    <Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text.Body>
                </Accordion.Item>
            </Accordion>
        );
    },
};
