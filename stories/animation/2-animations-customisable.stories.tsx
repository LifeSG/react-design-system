import type { Meta, StoryObj } from "@storybook/react";
import { LoadingDotsSpinner } from "src/animations";
import { Color } from "src/color";
import { BaseTheme } from "src/theme";
import { AnimationDisplay, AnimationItem } from "./doc-elements";

type Component = typeof undefined;

const meta: Meta<Component> = {
    title: "General/Animations/Customisable Animations",
    component: undefined,
};

export default meta;

export const Default: StoryObj<Component> = {
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
