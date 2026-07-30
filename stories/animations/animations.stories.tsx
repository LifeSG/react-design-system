import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LoadingDotsSpinner, ThemedLoadingSpinner } from "src/animations";
import { Colour } from "src/theme";
import {
    toStoryArgTypes,
    toStoryExcludedProps,
} from "stories/storybook-common";

import { storybookArgTypesByTitle } from "../../.storybook/generated/storybook-argtypes.generated";
import { AnimationDisplay, AnimationItem } from "./doc-elements";
import { TokensTable } from "./tokens-table";

const meta: Meta = {
    title: "Feedback indicators/Animations",
    argTypes: toStoryArgTypes(
        storybookArgTypesByTitle["Feedback indicators/Animations"]
    ),
};

export default meta;

export const Playground: StoryObj<typeof LoadingDotsSpinner> = {
    parameters: {
        controls: {
            disable: false,
            exclude: toStoryExcludedProps(
                storybookArgTypesByTitle["Feedback indicators/Animations"]
            ),
        },
    },
    render: (args) => {
        return <LoadingDotsSpinner {...args} />;
    },
};

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
