import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "src/date-input";

type StandaloneComponent = typeof DateInput;

const meta: Meta = {
    title: "e2e-DateInput",
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

export const EmptyInput: StoryObj<StandaloneComponent> = {
    render: () => {
        return <DateInput data-testid="e2e" />;
    },
};

export const EmptyInputWithoutButton: StoryObj<StandaloneComponent> = {
    render: () => {
        return <DateInput data-testid="e2e" withButton={false} />;
    },
};
