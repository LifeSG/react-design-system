import type { Meta, StoryObj } from "@storybook/react";
import { V2_Layout } from "src/v2_layout";
import { V2_Text } from "src/v2_text";
import { Wrapper } from "./doc-elements";

type Component = typeof V2_Layout.ColDiv;

const meta: Meta<Component> = {
    title: "V2/Layout/Column Divs",
    component: V2_Layout.ColDiv,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const ColumnDivs: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <V2_Layout.ColDiv
                    mobileCols={1}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>1</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={2}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>2</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={3}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>3</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>4</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={5}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>5</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={6}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>6</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={7}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>7</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>8</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={9}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>9</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={10}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>10</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={11}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>11</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={4}
                    tabletCols={8}
                    desktopCols={12}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>12</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
            </Wrapper>
        );
    },
};

export const SpecifyingRanges: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <V2_Layout.ColDiv
                    mobileCols={[1, 5]}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>One</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={[3, 5]}
                    tabletCols={[2, 6]}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>Two</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
                <V2_Layout.ColDiv
                    mobileCols={[2, 4]}
                    tabletCols={[6, 9]}
                    desktopCols={[7, 12]}
                    style={{
                        background: "#FDDDD7",
                        textAlign: "center",
                        padding: "0.5rem 0",
                    }}
                >
                    <V2_Text.BodySmall>Three</V2_Text.BodySmall>
                </V2_Layout.ColDiv>
            </Wrapper>
        );
    },
};
