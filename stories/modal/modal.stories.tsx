import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Modal } from "src/modal";

type Component = typeof Modal;

const meta: Meta<Component> = {
    title: "Overlays/Modal",
    component: Modal,
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
                <Modal show={show} onOverlayClick={closeModal}>
                    <Modal.Box onClose={closeModal}>
                        <div
                            style={{
                                padding: "4rem 2rem",
                                height: "10rem",
                                overflow: "auto",
                            }}
                        >
                            <span>I am a Modal</span>
                        </div>
                    </Modal.Box>
                </Modal>
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
                <Modal
                    show={show}
                    onOverlayClick={closeModal}
                    enableOverlayClick={true}
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
                </Modal>
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
                <Modal show={showFirst} onOverlayClick={handleFirst(false)}>
                    <Modal.Box onClose={handleFirst(false)}>
                        <div
                            style={{
                                padding: "4rem 2rem",
                            }}
                        >
                            <span>I am the first Modal</span>
                            <br />
                            <br />
                            <Button.Default onClick={handleStacked(true)}>
                                Click to open the stacked modal
                            </Button.Default>
                        </div>
                    </Modal.Box>
                </Modal>
                <Modal
                    id="stacked-modal"
                    show={showStacked}
                    onOverlayClick={handleStacked(false)}
                >
                    <Modal.Box onClose={handleStacked(false)}>
                        <div
                            style={{
                                padding: "4rem 2rem",
                                height: "10rem",
                            }}
                        >
                            <span>I am the stacked Modal</span>
                        </div>
                    </Modal.Box>
                </Modal>
            </div>
        );
    },
};
