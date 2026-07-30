import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Divider } from "src/divider";
import { Colour } from "src/theme";
import {
    FullWidthStoryDecorator,
    GridDecorator,
    StoryDecorator,
    toStoryArgTypes,
    toStoryExcludedProps,
} from "stories/storybook-common";

import { storybookArgTypesByTitle } from "../../.storybook/generated/storybook-argtypes.generated";
import { LayoutGrid } from "./doc-elements";

type Component = typeof Divider;

const meta: Meta<Component> = {
    title: "Core/Divider",
    component: Divider,
    argTypes: toStoryArgTypes(storybookArgTypesByTitle["Core/Divider"]),
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Divider />
                <Divider lineStyle="dashed" />
            </>
        );
    },
    decorators: [
        GridDecorator({ columns: 1, rowHeaders: ["Standard", "Dashed"] }),
        StoryDecorator(),
    ],
};

export const UsingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <LayoutGrid type="grid">
                <Divider layoutType="grid" />
                <Divider layoutType="grid" lineStyle="dashed" />
            </LayoutGrid>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const SettingGridColumns: StoryObj<Component> = {
    render: (_args) => {
        return (
            <LayoutGrid type="grid">
                <Divider
                    layoutType="grid"
                    xxsCols={[1, 5]}
                    mdCols={[1, 6]}
                    xlCols={[1, 8]}
                />
                <Divider
                    layoutType="grid"
                    lineStyle="dashed"
                    xxsCols={[1, 5]}
                    mdCols={[1, 6]}
                    xlCols={[1, 8]}
                />
            </LayoutGrid>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const Customisations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Divider color="red" />
                <Divider lineStyle="dashed" color="red" />
                <Divider color={Colour.Primitive["secondary-50"]} />
                <Divider
                    lineStyle="dashed"
                    color={Colour.Primitive["secondary-50"]}
                />
                <Divider thickness={5} />
                <Divider lineStyle="dashed" thickness={5} />
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 1,
            rowHeaders: [
                "Colour string",
                "",
                "Colour token",
                "",
                "Thickness",
                "",
            ],
        }),
        StoryDecorator(),
    ],
};

export const Playground: StoryObj<Component> = {
    parameters: {
        controls: {
            disable: false,
            exclude: toStoryExcludedProps(
                storybookArgTypesByTitle["Core/Divider"]
            ),
        },
    },
    render: (args) => {
        return <Divider {...args} />;
    },
    decorators: [FullWidthStoryDecorator()],
};
