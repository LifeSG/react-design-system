import type { Meta, StoryObj } from "@storybook/react";
import { ThemedLoadingSpinner } from "src/animations";

const meta: Meta = {
    title: "Feedback indicators/Animations",
};

export default meta;

export const ThemedAnimation: StoryObj<typeof ThemedLoadingSpinner> = {
    name: "ThemedLoadingSpinner",
    render: (_args) => {
        return <ThemedLoadingSpinner />;
    },
};
