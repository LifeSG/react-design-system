import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "src/layout";
import { Text } from "src/text";
import { Wrapper } from "./doc-elements";

type Component = typeof Layout.ColDiv;

const meta: Meta<Component> = {
    title: "Getting Started/Layout/Column Divs",
    component: Layout.ColDiv,
};

export default meta;

export const ColumnDivs: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Layout.ColDiv
                    mobileCols={1}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>1</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={2}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>2</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={3}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>3</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>4</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={5}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>5</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={6}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>6</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={7}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>7</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>8</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={9}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>9</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={10}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>10</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={11}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>11</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={12}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>12</Text.BodySmall>
                </Layout.ColDiv>
            </Wrapper>
        );
    },
};

export const SpecifyingRanges: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Layout.ColDiv
                    mobileCols={[1, 5]}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>One</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={[3, 5]}
                    tabletCols={[2, 6]}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>Two</Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={[2, 4]}
                    tabletCols={[6, 9]}
                    desktopCols={[7, 12]}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <Text.BodySmall>Three</Text.BodySmall>
                </Layout.ColDiv>
            </Wrapper>
        );
    },
};
