import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Filter } from "src/filter";
import styled from "styled-components";
import { Button } from "../../src";
import { Input } from "../../src/input";
import { Modal } from "../../src/modal";
import { Typography } from "../../src/typography";

const meta: Meta = {
    title: "Getting started/Test",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

const ExampleModal = ({
    show,
    setShow,
}: {
    show: boolean;
    setShow: (show: boolean) => void;
}) => (
    <Modal show={show} onOverlayClick={() => setShow(false)}>
        <Modal.Box style={{ height: "100%" }} onClose={() => setShow(false)}>
            Example modal
            <Input />
        </Modal.Box>
    </Modal>
);

const FullScreenModalBox = styled(Modal.Box)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    max-width: none;
    max-height: none;
    border-radius: 0;
    background: grey;
`;

const ExampleFullscreenModal = ({
    show,
    setShow,
}: {
    show: boolean;
    setShow: (show: boolean) => void;
}) => {
    return (
        <Modal show={show} onOverlayClick={() => setShow(false)}>
            <FullScreenModalBox onClose={() => setShow(false)}>
                Full screen modal
                <Input />
            </FullScreenModalBox>
        </Modal>
    );
};

const ExampleFilter = () => {
    const [show, setShow] = useState(false);
    return (
        <Filter _dangerouslyForceMobile>
            {() => (
                <>
                    <Filter.Item>
                        <Button.Default onClick={() => setShow(true)}>
                            Open nested full screen modal
                        </Button.Default>
                        <ExampleFullscreenModal show={show} setShow={setShow} />
                        <Input />
                    </Filter.Item>
                    <Filter.Item>
                        <Typography.BodyBL>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. In rerum porro eius culpa. Reprehenderit dolor
                            dolore aspernatur maiores quis veritatis illum
                            assumenda fugit quam, error quibusdam quaerat earum
                            tenetur dicta?
                        </Typography.BodyBL>
                    </Filter.Item>
                    <Filter.Item title="Text">
                        <Input />
                    </Filter.Item>
                    <Filter.Item title="Just an example of long content that may wrap to the next line">
                        <Typography.BodyBL>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. In rerum porro eius culpa. Reprehenderit dolor
                            dolore aspernatur maiores quis veritatis illum
                            assumenda fugit quam, error quibusdam quaerat earum
                            tenetur dicta?
                        </Typography.BodyBL>
                    </Filter.Item>
                    <Filter.Item>
                        <Input />
                    </Filter.Item>
                    <Filter.Item>
                        <Typography.BodyBL>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. In rerum porro eius culpa. Reprehenderit dolor
                            dolore aspernatur maiores quis veritatis illum
                            assumenda fugit quam, error quibusdam quaerat earum
                            tenetur dicta?
                        </Typography.BodyBL>
                    </Filter.Item>
                </>
            )}
        </Filter>
    );
};

export const ScrollablePage: StoryObj = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        return (
            <>
                <Typography.BodyBL paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis aliquid temporibus tempore consequuntur
                    distinctio. Temporibus laborum sit illo magni aliquam,
                    veritatis tenetur fugiat, cumque harum odit, repellat
                    quaerat minima ad!
                </Typography.BodyBL>
                <ExampleFilter />
                <Button.Default onClick={() => setShow(true)}>
                    Open modal
                </Button.Default>
                <div style={{ background: "#eee" }}>
                    {Array(20)
                        .fill(null)
                        .map((_, i) => (
                            <Typography.BodyBL paragraph key={i}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Blanditiis aliquid temporibus
                                tempore consequuntur distinctio. Temporibus
                                laborum sit illo magni aliquam, veritatis
                                tenetur fugiat, cumque harum odit, repellat
                                quaerat minima ad!
                            </Typography.BodyBL>
                        ))}
                </div>
                <Modal show={show} onOverlayClick={() => setShow(false)}>
                    <Modal.Box
                        style={{ height: "100%" }}
                        onClose={() => setShow(false)}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <Input />
                    </Modal.Box>
                </Modal>
            </>
        );
    },
};

export const NonScrollablePage: StoryObj = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        return (
            <>
                <Typography.BodyBL paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis aliquid temporibus tempore consequuntur
                    distinctio. Temporibus laborum sit illo magni aliquam,
                    veritatis tenetur fugiat, cumque harum odit, repellat
                    quaerat minima ad!
                </Typography.BodyBL>
                <ExampleFilter />
                <Button.Default onClick={() => setShow(true)}>
                    Open modal
                </Button.Default>
                <div style={{ background: "#eee" }}>
                    {Array(1)
                        .fill(null)
                        .map((_, i) => (
                            <Typography.BodyBL paragraph key={i}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Blanditiis aliquid temporibus
                                tempore consequuntur distinctio. Temporibus
                                laborum sit illo magni aliquam, veritatis
                                tenetur fugiat, cumque harum odit, repellat
                                quaerat minima ad!
                            </Typography.BodyBL>
                        ))}
                </div>
                <ExampleModal show={show} setShow={setShow} />
            </>
        );
    },
};
