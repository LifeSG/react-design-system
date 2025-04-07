import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "src/pill";
import { GridDecorator, RowDecorator } from "stories/storybook-common";

type Component = typeof Pill;

const meta: Meta<Component> = {
    title: "Feedback indicators/Pill",
    component: Pill,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Pill type="outline" colorType="blue">
                    Outline style pill
                </Pill>
                <Pill type="solid" colorType="red">
                    Solid style pill
                </Pill>
            </>
        );
    },
    decorators: [RowDecorator()],
};

export const WithIcon: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Pill type="outline" icon={<PlusCircleFillIcon />}>
                    Status Label
                </Pill>
                <Pill type="solid" colorType="blue" icon={<PlaceholderIcon />}>
                    Status Label
                </Pill>
            </>
        );
    },
    decorators: [RowDecorator()],
};

export const Variations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Pill type="outline" colorType="black">
                    Label
                </Pill>
                <Pill type="outline" colorType="grey">
                    Label
                </Pill>
                <Pill type="outline" colorType="green">
                    Label
                </Pill>
                <Pill type="outline" colorType="yellow">
                    Label
                </Pill>
                <Pill type="outline" colorType="red">
                    Label
                </Pill>
                <Pill type="outline" colorType="blue">
                    Label
                </Pill>
                <Pill type="solid" colorType="black">
                    Label
                </Pill>
                <Pill type="solid" colorType="grey">
                    Label
                </Pill>
                <Pill type="solid" colorType="green">
                    Label
                </Pill>
                <Pill type="solid" colorType="yellow">
                    Label
                </Pill>
                <Pill type="solid" colorType="red">
                    Label
                </Pill>
                <Pill type="solid" colorType="blue">
                    Label
                </Pill>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 6,
            columnHeaders: ["Black", "Grey", "Green", "Yellow", "Red", "Blue"],
            rowHeaders: ["Outline", "Solid"],
        }),
    ],
};
