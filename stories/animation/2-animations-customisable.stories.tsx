import type { Meta, StoryObj } from "@storybook/react";
import { LoadingDotsSpinner } from "src/animations";
import { Color } from "src/color";
import { BaseTheme } from "src/theme";
import { AnimationDisplay, AnimationItem } from "./doc-elements";

const meta: Meta = {
    title: "General/Animations/Customisable Animations",
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
                        id="custom-1"
                        color={Color.Accent.Light[2]({ theme: BaseTheme })}
                    />
                </AnimationItem>
            </AnimationDisplay>
        );
    },
};
