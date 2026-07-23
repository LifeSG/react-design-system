import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LoadingDotsSpinner, ThemedLoadingSpinner } from "src/animations";
import { Colour } from "src/theme";

import { AnimationDisplay, AnimationItem } from "./doc-elements";
import { TokensTable } from "./tokens-table";

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

export const CustomLoadingDotsSpinner: StoryObj<typeof LoadingDotsSpinner> = {
    name: "LoadingDotsSpinner",
    render: () => {
        return (
            <AnimationDisplay>
                <AnimationItem>
                    <LoadingDotsSpinner id="default" />
                </AnimationItem>
                <AnimationItem>
                    <LoadingDotsSpinner id="custom-1" color="#EF413D" />
                </AnimationItem>
                <AnimationItem>
                    <LoadingDotsSpinner
                        id="custom-2"
                        color={Colour["icon-primary-subtlest"]}
                    />
                </AnimationItem>
            </AnimationDisplay>
        );
    },
};

export const TokenCustomisation: StoryObj = {
    tags: ["!dev"],
    render: () => <TokensTable />,
};
