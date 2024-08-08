import type { Meta, StoryObj } from "@storybook/react";
import { LoadingDotsSpinner } from "src/animations";
import { V2_Color } from "src/v2_color";
import { V2_BaseTheme } from "src/v2_theme";
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
                        color={V2_Color.Accent.Light[2]({
                            theme: V2_BaseTheme,
                        })}
                    />
                </AnimationItem>
            </AnimationDisplay>
        );
    },
};
