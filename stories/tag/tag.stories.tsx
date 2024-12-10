import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "src/tag";
import { GridDecorator, RowDecorator } from "stories/storybook-common";

type Component = typeof Tag;

const meta: Meta<Component> = {
    title: "Feedback indicators/Tag",
    component: Tag,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Tag type="outline" colorType="green">
                    Outline style tag
                </Tag>
                <Tag type="solid" colorType="red">
                    Solid style tag
                </Tag>
            </>
        );
    },
    decorators: [RowDecorator()],
};

export const Interactive: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Tag
                    type="outline"
                    interactive={true}
                    onClick={() => window.alert("Interactive tag clicked!")}
                >
                    Interactive tag
                </Tag>
                <Tag type="outline">Non interactive tag</Tag>
            </>
        );
    },
    decorators: [RowDecorator()],
};

export const WithIcon: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Tag
                    type="outline"
                    icon={<PlusCircleFillIcon />}
                    interactive
                    onClick={() => window.alert("Interactive tag clicked!")}
                >
                    Icon on left
                </Tag>
                <Tag
                    type="solid"
                    icon={<PlusCircleFillIcon />}
                    iconPosition="right"
                    interactive
                    onClick={() => window.alert("Interactive tag clicked!")}
                >
                    Icon on right
                </Tag>
            </>
        );
    },
    decorators: [RowDecorator()],
};

export const Variations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Tag type="outline" colorType="black">
                    Label
                </Tag>
                <Tag type="outline" colorType="grey">
                    Label
                </Tag>
                <Tag type="outline" colorType="green">
                    Label
                </Tag>
                <Tag type="outline" colorType="yellow">
                    Label
                </Tag>
                <Tag type="outline" colorType="red">
                    Label
                </Tag>
                <Tag type="outline" colorType="blue">
                    Label
                </Tag>
                <Tag type="solid" colorType="black">
                    Label
                </Tag>
                <Tag type="solid" colorType="grey">
                    Label
                </Tag>
                <Tag type="solid" colorType="green">
                    Label
                </Tag>
                <Tag type="solid" colorType="yellow">
                    Label
                </Tag>
                <Tag type="solid" colorType="red">
                    Label
                </Tag>
                <Tag type="solid" colorType="blue">
                    Label
                </Tag>
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
