import type { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicator } from "src/progress-indicator";
import { StoryDecorator } from "stories/storybook-common";

type Component = typeof ProgressIndicator;

const meta: Meta<Component> = {
    title: "Feedback indicators/ProgressIndicator",
    component: ProgressIndicator,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <ProgressIndicator
                steps={[
                    { title: "Step 1" },
                    { title: "Step 2" },
                    { title: "Step 3" },
                    { title: "Step 4" },
                    { title: "Step 5" },
                ]}
                currentIndex={1}
                displayExtractor={(item) => item.title}
            />
        );
    },
    decorators: [StoryDecorator()],
};
