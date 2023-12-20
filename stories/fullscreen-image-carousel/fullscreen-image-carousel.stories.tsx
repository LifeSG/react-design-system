import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { FullscreenImageCarousel } from "src/fullscreen-image-carousel";
import { FullWidthStoryContainer } from "../storybook-common";
import { getImages } from "./doc-elements";

type Component = typeof FullscreenImageCarousel;

const meta: Meta<Component> = {
    title: "Modules/FullscreenImageCarousel",
    component: FullscreenImageCarousel,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        return (
            <FullWidthStoryContainer>
                <Button.Default
                    onClick={() => {
                        setShow((old) => !old);
                    }}
                >
                    Show carousel
                </Button.Default>
                <FullscreenImageCarousel
                    items={[
                        { src: "https://picsum.photos/id/157/1600/900" },
                        { src: "https://picsum.photos/id/163/900/300" },
                        { src: "https://picsum.photos/id/369/1000/1000" },
                        { src: "https://picsum.photos/id/445/300/300" },
                    ]}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </FullWidthStoryContainer>
        );
    },
};

export const LoadingAndErrorStates: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        return (
            <FullWidthStoryContainer>
                <Button.Default
                    onClick={() => {
                        setShow((old) => !old);
                    }}
                >
                    Show carousel
                </Button.Default>
                <FullscreenImageCarousel
                    items={[
                        { src: "https://httpbin.org/delay/10" },
                        { src: "https://asdfghjklqwertyuiop.com" },
                    ]}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </FullWidthStoryContainer>
        );
    },
};

export const WithManyImages: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        return (
            <FullWidthStoryContainer>
                <Button.Default
                    onClick={() => {
                        setShow((old) => !old);
                    }}
                >
                    Show carousel
                </Button.Default>
                <FullscreenImageCarousel
                    items={getImages(20)}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </FullWidthStoryContainer>
        );
    },
};
