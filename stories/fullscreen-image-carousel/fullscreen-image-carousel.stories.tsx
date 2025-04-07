import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { FullscreenImageCarousel } from "src/fullscreen-image-carousel";
import { getImages } from "./doc-elements";

type Component = typeof FullscreenImageCarousel;

const meta: Meta<Component> = {
    title: "Content/FullscreenImageCarousel",
    component: FullscreenImageCarousel,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        return (
            <>
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
            </>
        );
    },
};

export const LoadingAndErrorStates: StoryObj<Component> = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        return (
            <>
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
            </>
        );
    },
};

export const WithManyImages: StoryObj<Component> = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        return (
            <>
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
            </>
        );
    },
};

export const Configurable: StoryObj<Component> = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        return (
            <>
                <Button.Default
                    onClick={() => {
                        setShow((old) => !old);
                    }}
                >
                    Show carousel
                </Button.Default>
                <FullscreenImageCarousel
                    items={[{ src: "https://picsum.photos/id/157/1600/900" }]}
                    show={show}
                    hideNavigation
                    hideCounter
                    hideMagnifier
                    hideThumbnail
                    onClose={() => setShow(false)}
                />
            </>
        );
    },
};
