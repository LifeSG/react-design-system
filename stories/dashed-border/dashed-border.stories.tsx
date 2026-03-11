import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { DashedBorder } from "src/dashed-border";
import { Colour, Spacing } from "src/theme";
import styled from "styled-components";

type Component = typeof DashedBorder;

const PreviewContent = styled.div`
    padding: ${Spacing["spacing-20"]};
`;

const meta: Meta<Component> = {
    title: "Core/DashedBorder",
    component: DashedBorder,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => (
        <DashedBorder>
            <PreviewContent>Dashed border container</PreviewContent>
        </DashedBorder>
    ),
};

export const Customised: StoryObj<Component> = {
    render: () => (
        <DashedBorder colour={Colour["border-primary"]}>
            <PreviewContent>Custom colour</PreviewContent>
        </DashedBorder>
    ),
};
