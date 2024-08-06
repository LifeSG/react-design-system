import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "src/layout";
import { v2_Text } from "src/v2_text";
import { Wrapper } from "./doc-elements";

type Component = typeof Layout.ColDiv;

const meta: Meta<Component> = {
    title: "Getting Started/Layout/Column Divs",
    component: Layout.ColDiv,
    parameters: {
        layout: "fullscreen",
    },
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
                    <v2_Text.BodySmall>1</v2_Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={2}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <v2_Text.BodySmall>2</v2_Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={3}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <v2_Text.BodySmall>3</v2_Text.BodySmall>
                </Layout.ColDiv>
                <Layout.ColDiv
                    mobileCols={4}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <v2_Text.BodySmall>4</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>5</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>6</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>7</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>8</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>9</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>10</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>11</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>12</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>One</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>Two</v2_Text.BodySmall>
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
                    <v2_Text.BodySmall>Three</v2_Text.BodySmall>
                </Layout.ColDiv>
            </Wrapper>
        );
    },
};
