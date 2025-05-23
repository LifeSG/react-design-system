import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
