import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LoadingDotsSpinner } from "src/animations";
import { V3_Colour, V3_LifeSGTheme } from "src/v3_theme";
import { AnimationDisplay, AnimationItem } from "./doc-elements";
import { TokensTable } from "./tokens-table";

const meta: Meta = {
    title: "Feedback indicators/Animations/Customisable Animations",
};

export default meta;

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
                        color={V3_Colour["icon-primary-subtlest"]({
                            theme: V3_LifeSGTheme,
                        })}
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
