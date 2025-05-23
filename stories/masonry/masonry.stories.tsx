import type { Meta, StoryObj } from "@storybook/react";
import { Masonry } from "src/masonry";
import { FullWidthStoryDecorator } from "../storybook-common";
import { DemoContainer } from "./doc-elements";

const meta: Meta = {
    title: "Deprecated/Masonry",
    parameters: {
        layout: "fullscreen",
    },
    decorators: [FullWidthStoryDecorator()],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        return (
            <Masonry.Grid numOfCols={{ lg: 3 }}>
                <Masonry.Tile startLg={1} colsLg={1}>
                    <DemoContainer>1</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile colsLg={2}>
                    <DemoContainer>2</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile colsLg={3}>
                    <DemoContainer>3</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile colsLg={2}>
                    <DemoContainer>4</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile>
                    <DemoContainer>5</DemoContainer>
                </Masonry.Tile>
            </Masonry.Grid>
        );
    },
};

export const DifferentMediaWidths: StoryObj = {
    render: () => {
        return (
            <Masonry.Grid numOfCols={{ lg: 4, md: 3, sm: 2 }}>
                <Masonry.Tile startLg={1} colsLg={1}>
                    <DemoContainer>1</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile colsLg={1} colsMd={2}>
                    <DemoContainer>2</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile colsLg={1} colsMd={3}>
                    <DemoContainer>3</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile colsLg={1} colsMd={2}>
                    <DemoContainer>4</DemoContainer>
                </Masonry.Tile>
                <Masonry.Tile colsSm={2} colsMd={1} colsLg={2}>
                    <DemoContainer>5</DemoContainer>
                </Masonry.Tile>
            </Masonry.Grid>
        );
    },
};
