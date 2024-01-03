import type { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicator } from "src/progress-indicator";
import { StoryContainer } from "../storybook-common";

type Component = typeof ProgressIndicator;

const meta: Meta<Component> = {
    title: "Modules/ProgressIndicator",
    component: ProgressIndicator,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};
