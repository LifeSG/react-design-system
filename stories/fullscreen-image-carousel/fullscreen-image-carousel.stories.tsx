import type { Meta, StoryObj } from "@storybook/react-webpack5";
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

export const WithDeleteButton: StoryObj<Component> = {
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
                    items={getImages(4)}
                    show={show}
                    onDelete={() => undefined}
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

export const WithCustomContent: StoryObj<Component> = {
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
                        {
                            type: "custom",
                            itemLabel: "PDF",
                            thumbnailSrc:
                                "https://assets.life.gov.sg/react-design-system/img/upload/pdf.svg",
                            renderContent: () => (
                                <iframe
                                    src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
                                    title="PDF preview"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                    }}
                                />
                            ),
                        },
                        {
                            type: "custom",
                            itemLabel: "document",
                            renderContent: () => (
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "100%",
                                        color: "#fff",
                                        fontSize: 24,
                                    }}
                                >
                                    No thumbnail provided
                                </div>
                            ),
                        },
                    ]}
                    show={show}
                    onDelete={() => undefined}
                    onClose={() => setShow(false)}
                />
            </>
        );
    },
};

export const WithFileInfo: StoryObj<Component> = {
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
                        {
                            src: "https://picsum.photos/id/157/1600/900",
                            fileName: "landscape-photo.jpg",
                            fileSize: "1.2 MB",
                        },
                        {
                            src: "https://picsum.photos/id/163/900/300",
                            fileName: "panoramic-view.jpg",
                            fileSize: "840 KB",
                        },
                        {
                            src: "https://picsum.photos/id/369/1000/1000",
                            fileName: "square-image.jpg",
                        },
                        {
                            src: "https://picsum.photos/id/445/300/300",
                            fileSize: "320 KB",
                        },
                        {
                            src: "https://picsum.photos/id/237/800/600",
                        },
                    ]}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </>
        );
    },
};
