import { TickIcon } from "@lifesg/react-icons/tick";
import { css } from "@linaria/core";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Button } from "src/button";
import { ModalV2 } from "src/modal-v2";
import { Typography } from "src/typography";

import { SlotPlayground } from "./doc-elements";

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
            <>
                <Button.Default onClick={openModal}>
                    Click to open
                </Button.Default>
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    onClose={closeModal}
                >
                    <ModalV2.Card>
                        <ModalV2.CloseButton />
                        <ModalV2.Content>
                            <Typography.BodyBL>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Totam debitis explicabo rerum
                                velit quod recusandae, cum odio inventore
                                repellendus non quas quis praesentium suscipit,
                                soluta incidunt officiis omnis, quae error!
                            </Typography.BodyBL>
                        </ModalV2.Content>
                        <ModalV2.Footer
                            primaryButton={
                                <Button.Default>Log out</Button.Default>
                            }
                            secondaryButton={
                                <Button.Default styleType="secondary">
                                    Continue
                                </Button.Default>
                            }
                        />
                    </ModalV2.Card>
                </ModalV2>
            </>
        );
    },
};

export const Slots: StoryObj<Component> = {
    render: () => <SlotPlayground />,
    parameters: {
        docs: {
            canvas: {
                sourceState: "none",
            },
        },
    },
};

export const Footer: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);
        return (
            <>
                <Button.Default onClick={openModal}>
                    Click to open
                </Button.Default>
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    onClose={closeModal}
                >
                    <ModalV2.Card>
                        <ModalV2.CloseButton />
                        <ModalV2.Footer
                            primaryButton={
                                <Button
                                    icon={<TickIcon />}
                                    iconPosition="right"
                                    styleType="light"
                                >
                                    Okay
                                </Button>
                            }
                        />
                    </ModalV2.Card>
                </ModalV2>
            </>
        );
    },
};

const closeButton = css`
    margin: 0;
    padding: 8px;
`;

const content = css`
    margin: 0;
    padding: 16px 32px;
`;

const footer = css`
    margin: 0;
    padding: 16px;
`;

export const StyledSlots: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);

        return (
            <>
                <Button onClick={openModal}>Click to open</Button>
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    onClose={closeModal}
                >
                    <ModalV2.Card>
                        <ModalV2.CloseButton className={closeButton} />
                        <ModalV2.Content className={content}>
                            Content with custom spacing
                        </ModalV2.Content>
                        <ModalV2.Footer
                            className={footer}
                            primaryButton={
                                <Button.Default styleType="light">
                                    Continue
                                </Button.Default>
                            }
                        />
                    </ModalV2.Card>
                </ModalV2>
            </>
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
                    onClose={closeModal}
                >
                    <div
                        style={{
                            width: "50%",
                            padding: "2rem",
                            background: "yellow",
                            margin: "auto",
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
        const handleFirst = (show: boolean) => {
            setShowFirst(show);
        };
        const handleStacked = (show: boolean) => {
            setShowStacked(show);
        };
        return (
            <div>
                <Button.Default
                    onClick={() => {
                        handleFirst(true);
                    }}
                >
                    Click to open
                </Button.Default>
                <ModalV2
                    show={showFirst}
                    onOverlayClick={() => {
                        handleFirst(false);
                    }}
                    onClose={() => {
                        handleFirst(false);
                    }}
                >
                    <ModalV2.Card>
                        <ModalV2.CloseButton />
                        <ModalV2.Content>
                            <Typography.BodyBL>
                                I am the first Modal
                            </Typography.BodyBL>
                            <br />
                            <br />
                            <Button.Default
                                onClick={() => {
                                    handleStacked(true);
                                }}
                            >
                                Click to open the stacked modal
                            </Button.Default>
                        </ModalV2.Content>
                    </ModalV2.Card>
                </ModalV2>
                <ModalV2
                    id="stacked-modal"
                    show={showStacked}
                    onOverlayClick={() => {
                        handleStacked(false);
                    }}
                    onClose={() => {
                        handleStacked(false);
                    }}
                >
                    <ModalV2.Card>
                        <ModalV2.CloseButton />
                        <ModalV2.Content>
                            <Typography.BodyBL>
                                I am the stacked Modal
                            </Typography.BodyBL>
                        </ModalV2.Content>
                    </ModalV2.Card>
                </ModalV2>
            </div>
        );
    },
};

export const ScrollHandling: StoryObj<Component> = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);
        return (
            <>
                <Button.Default onClick={openModal}>
                    Click to open
                </Button.Default>
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    onClose={closeModal}
                >
                    <ModalV2.Card>
                        <ModalV2.CloseButton />
                        <ModalV2.Content>
                            <Typography.BodyBL>
                                This is the start of content.
                            </Typography.BodyBL>
                            <div style={{ height: "100vh" }} />
                            <Typography.BodyBL>
                                This is the end of content.
                            </Typography.BodyBL>
                        </ModalV2.Content>
                    </ModalV2.Card>
                </ModalV2>
            </>
        );
    },
};
