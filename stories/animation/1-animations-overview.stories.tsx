import type { Meta, StoryObj } from "@storybook/react";
import { ThemedLoadingSpinner } from "src/animations";

const meta: Meta = {
    title: "Feedback indicators/Animations",
};

export default meta;

export const ThemedLoadingSpinnerItem: StoryObj<typeof ThemedLoadingSpinner> = {
    name: "ThemedLoadingSpinnerItem",
    render: () => {
        return <ThemedLoadingSpinner />;
    },
};
