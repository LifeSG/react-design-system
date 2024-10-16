import type { Meta, StoryObj } from "@storybook/react";
import { Column, Grid } from "./doc-elements/doc-coldiv-display";

const meta: Meta = {
    title: "Core/Layout/ColDiv",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const ColumnDivs: StoryObj = {
    parameters: {
        docs: {
            story: { inline: false, height: 330 },
        },
    },
    render: (_args) => {
        return (
            <Grid type="grid">
                <Column xxsCols={1}>1</Column>
                <Column xxsCols={2}>2</Column>
                <Column xxsCols={3}>3</Column>
                <Column xxsCols={4}>4</Column>
                <Column xxsCols={5}>5</Column>
                <Column xxsCols={6}>6</Column>
                <Column xxsCols={7}>7</Column>
                <Column xxsCols={8}>8</Column>
                <Column xxsCols={8} lgCols={9}>
                    9
                </Column>
                <Column xxsCols={8} lgCols={10}>
                    10
                </Column>
                <Column xxsCols={8} lgCols={11}>
                    11
                </Column>
                <Column xxsCols={8} lgCols={12}>
                    12
                </Column>
            </Grid>
        );
    },
};

export const SpecifyingRanges: StoryObj = {
    parameters: {
        docs: {
            story: { inline: false, height: 180 },
        },
    },
    render: (_args) => {
        return (
            <Grid type="grid">
                <Column xxsCols={[1, 5]}>A</Column>
                <Column xxsCols={[1, 5]}>B</Column>
                <Column xxsCols={[5, 9]}>C</Column>
                <Column xxsCols={[1, 5]}>D</Column>
                <Column xxsCols={[1, 5]} lgCols={[5, 9]}>
                    E
                </Column>
                <Column xxsCols={[2, 8]} lgCols={[2, 12]}>
                    F
                </Column>
                <Column xxsCols={[1, 9]} lgCols={[1, 13]}>
                    G
                </Column>
            </Grid>
        );
    },
};
