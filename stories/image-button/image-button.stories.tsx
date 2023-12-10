import type { Meta, StoryObj } from "@storybook/react";
import { ImageButton } from "src/image-button";
import { FlexStoryContainer } from "../storybook-common";
import { Headings, Wrapper } from "./doc-elements";

type Component = typeof ImageButton;

const meta: Meta<Component> = {
    title: "General/ImageButton",
    component: ImageButton,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <ImageButton imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png">
                    Office Equipment
                </ImageButton>
                <ImageButton
                    selected
                    imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png"
                >
                    Office Equipment
                </ImageButton>
                <ImageButton
                    disabled
                    imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png"
                >
                    Office Equipment
                </ImageButton>
                <ImageButton
                    error
                    imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png"
                >
                    Office Equipment
                </ImageButton>
                <ImageButton
                    error
                    selected
                    imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png"
                >
                    Office Equipment
                </ImageButton>
            </Wrapper>
        );
    },
};

export const Fallback: StoryObj<Component> = {
    render: () => {
        return (
            <ImageButton
                disabled={false}
                imgSrc="https://cdn-icons-png.flaticon.com/512/10754/10754asdfads537.png"
                focusOutline="browser"
            >
                Rooms
            </ImageButton>
        );
    },
};

export const FlexBehaviour: StoryObj<Component> = {
    render: () => {
        return (
            <FlexStoryContainer>
                <ImageButton imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png">
                    Meeting Room
                </ImageButton>
                <ImageButton imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png">
                    Common Area
                </ImageButton>
                <ImageButton imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png">
                    Pantry
                </ImageButton>
                <ImageButton imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png">
                    Supply Closet
                </ImageButton>
            </FlexStoryContainer>
        );
    },
};
