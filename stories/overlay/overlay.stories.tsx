import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useRef, useState } from "react";
import { Button } from "src/button";
import { Overlay } from "src/overlay";
import { Toggle } from "src/toggle";
import { Typography } from "src/typography";

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

export const ScrollRestore: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const [disableScrollRestore, setDisableScrollRestore] = useState(true);

        // Simulates a loading overlay, e.g. a multi-step form
        const goToNextPage = () => {
            setShow(true);
            setTimeout(() => {
                setShow(false);
                window.scrollTo({ top: 0 });
            }, 1500);
        };

        return (
            <div>
                <Toggle
                    type="checkbox"
                    checked={disableScrollRestore}
                    onChange={() =>
                        setDisableScrollRestore(!disableScrollRestore)
                    }
                >
                    disableScrollRestore
                </Toggle>
                <Typography.BodyBL style={{ margin: "1rem 0" }}>
                    Scroll down and click the button. On iOS, the page returns
                    to the top only if <code>disableScrollRestore</code> is set.
                    Otherwise the overlay restores the previous scroll position
                    after closing.
                </Typography.BodyBL>
                <div style={{ height: "150vh" }} />
                <Button.Default onClick={goToNextPage}>Click me</Button.Default>
                <Overlay
                    show={show}
                    disableScrollRestore={disableScrollRestore}
                >
                    <div
                        style={{
                            height: "100%",
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
                            }}
                        >
                            Loading...
                        </div>
                    </div>
                </Overlay>
            </div>
        );
    },
};
