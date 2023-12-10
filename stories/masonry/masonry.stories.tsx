import type { Meta, StoryObj } from "@storybook/react";
import { Masonry } from "src/masonry";
import { StoryContainer } from "../storybook-common";
import { DemoContainer } from "./doc-elements";

type Component = typeof Masonry;

const meta: Meta<Component> = {
    title: "Modules/Masonry",
    component: Masonry,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};

export const DifferentMediaWidths: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};
