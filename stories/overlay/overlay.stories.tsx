import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useRef, useState } from "react";
import { Button } from "src/button";
import { Overlay } from "src/overlay";

type Component = typeof Overlay;

const meta: Meta<Component> = {
    title: "Overlays/Overlay",
    component: Overlay,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openOverlay = () => setShow(true);
        const closeOverlay = () => setShow(false);
        return (
            <div>
                <Button.Default onClick={openOverlay}>
                    Click to open
                </Button.Default>
                <Overlay
                    show={show}
                    onOverlayClick={closeOverlay}
                    enableOverlayClick
                >
                    <div />
                </Overlay>
            </div>
        );
    },
};

export const OverlayClick: StoryObj<Component> = {
    render: () => {
        const contentRef = useRef<HTMLDivElement>(null);
        const [show, setShow] = useState(false);
        const openOverlay = () => setShow(true);
        const closeOverlay = () => setShow(false);
        return (
            <div>
                <Button.Default onClick={openOverlay}>
                    Click to open
                </Button.Default>
                <Overlay
                    containerRef={contentRef}
                    show={show}
                    onOverlayClick={closeOverlay}
                    enableOverlayClick
                >
                    <div
                        id="wrapper"
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            ref={contentRef}
                            style={{
                                background: "white",
                                padding: "2rem",
                                borderRadius: "4px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            Some content
                            <br />
                            <br />
                            <Button.Default onClick={closeOverlay}>
                                Click to dismiss
                            </Button.Default>
                        </div>
                    </div>
                </Overlay>
            </div>
        );
    },
};
