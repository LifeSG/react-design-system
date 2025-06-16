import type { Meta, StoryObj } from "@storybook/react";
import { LoadingDotsSpinner } from "src/animations";
import { Colour, LifeSGTheme } from "src/theme";
import { AnimationDisplay, AnimationItem } from "./doc-elements";

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
                        color={Colour["icon-primary-subtlest"]({
                            theme: LifeSGTheme,
                        })}
                    />
                </AnimationItem>
            </AnimationDisplay>
        );
    },
};
