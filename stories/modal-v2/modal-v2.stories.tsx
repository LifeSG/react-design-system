import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { ModalV2 } from "src/modal-v2";
import { Typography } from "src/typography";

type Component = typeof ModalV2;

const meta: Meta<Component> = {
    title: "Overlays/ModalV2",
    component: ModalV2,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);
        return (
            <div>
                <Button.Default onClick={openModal}>
                    Click to open
                </Button.Default>
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    onClose={closeModal}
                >
                    <ModalV2.Box onClose={closeModal}>
                        <div
                            style={{
                                padding: "4rem 2rem",
                                height: "10rem",
                                overflow: "auto",
                            }}
                        >
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                        </div>
                    </ModalV2.Box>
                </ModalV2>
            </div>
        );
    },
};

export const CustomContent: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);
        return (
            <>
                <Button.Default onClick={openModal}>
                    Open custom modal
                </Button.Default>
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    enableOverlayClick={true}
                    onClose={closeModal}
                >
                    <div
                        style={{
                            width: "50%",
                            padding: "2rem",
                            background: "yellow",
                        }}
                    >
                        This is a custom component
                    </div>
                </ModalV2>
            </>
        );
    },
};

export const StackedModals: StoryObj<Component> = {
    render: () => {
        const [showFirst, setShowFirst] = useState(false);
        const [showStacked, setShowStacked] = useState(false);
        const handleFirst = (show: boolean) => () => {
            setShowFirst(show);
        };
        const handleStacked = (show: boolean) => () => {
            setShowStacked(show);
        };
        return (
            <div>
                <Button.Default onClick={handleFirst(true)}>
                    Click to open
                </Button.Default>
                <ModalV2
                    show={showFirst}
                    onOverlayClick={handleFirst(false)}
                    onClose={handleFirst(false)}
                >
                    <ModalV2.Box onClose={handleFirst(false)}>
                        <div
                            style={{
                                padding: "4rem 2rem",
                            }}
                        >
                            <Typography.BodyBL>
                                I am the first Modal
                            </Typography.BodyBL>
                            <br />
                            <br />
                            <Button.Default onClick={handleStacked(true)}>
                                Click to open the stacked modal
                            </Button.Default>
                        </div>
                    </ModalV2.Box>
                </ModalV2>
                <ModalV2
                    id="stacked-modal"
                    show={showStacked}
                    onOverlayClick={handleStacked(false)}
                    onClose={handleStacked(false)}
                >
                    <ModalV2.Box onClose={handleStacked(false)}>
                        <div
                            style={{
                                padding: "4rem 2rem",
                            }}
                        >
                            <Typography.BodyBL>
                                I am the stacked Modal
                            </Typography.BodyBL>
                        </div>
                    </ModalV2.Box>
                </ModalV2>
            </div>
        );
    },
};

export const ScrollableModals: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);
        return (
            <div>
                <Button.Default onClick={openModal}>
                    Click to open scrollable modal
                </Button.Default>
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    onClose={closeModal}
                    enableScroll
                >
                    <ModalV2.Box onClose={closeModal}>
                        <div
                            style={{
                                padding: "4rem 2rem",
                                height: "10rem",
                                overflow: "auto",
                            }}
                        >
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                            <Typography.BodyBL>I am a Modal</Typography.BodyBL>
                        </div>
                    </ModalV2.Box>
                </ModalV2>
            </div>
        );
    },
};
