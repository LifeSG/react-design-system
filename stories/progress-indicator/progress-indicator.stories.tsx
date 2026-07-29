import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ProgressIndicator } from "src/progress-indicator";
import { StoryDecorator, toStoryArgTypes } from "stories/storybook-common";

import { storybookArgTypesByTitle } from "../../.storybook/generated/storybook-argtypes.generated";

type Component = typeof ProgressIndicator;

const meta: Meta<Component> = {
    title: "Feedback indicators/ProgressIndicator",
    component: ProgressIndicator,
    argTypes: toStoryArgTypes(
        storybookArgTypesByTitle["Feedback indicators/ProgressIndicator"]
    ),
};

export default meta;

export const Playground: StoryObj<Component> = {
    parameters: {
        controls: {
            disabled: false,
        },
    },
    args: {
        currentIndex: 1,
        steps: [
            { title: "Step 1" },
            { title: "Step 2" },
            { title: "Step 3" },
            { title: "Step 4" },
            { title: "Step 5" },
        ],
    },
    render: (args) => {
        return (
            <ProgressIndicator
                displayExtractor={(item) => (item as { title: string }).title}
                {...args}
            />
        );
    },
    decorators: [StoryDecorator()],
};
