import type { Meta, StoryObj } from "@storybook/react";
import { Color } from "src/color";
import { Divider } from "src/divider";
import { Layout } from "src/layout";
import { DisplayText, Wrapper } from "./doc-elements";

type Component = typeof Divider;

const meta: Meta<Component> = {
    title: "General/Divider",
    component: Divider,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper type="flex-column">
                <DisplayText>Standard divider</DisplayText>
                <Divider style={{ marginBottom: "1.5rem" }} />
                <DisplayText>Dashed styled divider</DisplayText>
                <Divider
                    lineStyle="dashed"
                    style={{ marginBottom: "1.5rem" }}
                />
            </Wrapper>
        );
    },
};

export const UsingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "5rem" }}>
                <DisplayText>Dividers in the grid layout</DisplayText>
                <Divider layoutType="grid" style={{ marginBottom: "1.5rem" }} />
                <Divider
                    layoutType="grid"
                    lineStyle="dashed"
                    style={{ marginBottom: "1.5rem" }}
                />
                <DisplayText>With custom grid column props</DisplayText>
                <Divider
                    layoutType="grid"
                    mobileCols={[1, 3]}
                    tabletCols={[1, 4]}
                    desktopCols={[1, 5]}
                    style={{ marginBottom: "1.5rem" }}
                />
                <Divider
                    layoutType="grid"
                    lineStyle="dashed"
                    mobileCols={[1, 3]}
                    tabletCols={[1, 4]}
                    desktopCols={[1, 5]}
                />
            </Layout.Content>
        );
    },
};

export const Customisations: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "5rem" }}>
                <DisplayText>Changing the color (pure string)</DisplayText>
                <Divider
                    layoutType="grid"
                    color="red"
                    style={{ marginBottom: "1.5rem" }}
                />
                <Divider
                    layoutType="grid"
                    lineStyle="dashed"
                    color="red"
                    style={{ marginBottom: "1.5rem" }}
                />
                <DisplayText>
                    Changing the color (Using the Color component)
                </DisplayText>
                <Divider
                    layoutType="grid"
                    color={Color.Primary}
                    style={{ marginBottom: "1.5rem" }}
                />
                <Divider
                    layoutType="grid"
                    lineStyle="dashed"
                    color={Color.Primary}
                    style={{ marginBottom: "1.5rem" }}
                />
                <DisplayText>Changing the thickness</DisplayText>
                <Divider
                    layoutType="grid"
                    thickness={5}
                    style={{ marginBottom: "1.5rem" }}
                />
                <Divider
                    layoutType="grid"
                    lineStyle="dashed"
                    thickness={5}
                    style={{ marginBottom: "1.5rem" }}
                />
            </Layout.Content>
        );
    },
};
