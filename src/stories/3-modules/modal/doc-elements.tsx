import React, { useState } from "react";
import { Button, Modal } from "src/components";
import styled from "styled-components";

export const ModalContent = styled.div`
    padding: 2rem;
    height: 10rem;
    overflow: auto;
`;

export const ModalDemo = (): JSX.Element => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
        <div>
            <Button.Default onClick={openModal}>Click to open</Button.Default>
            <Modal.Base show={show} onOverlayClick={closeModal}>
                <Modal.Box onClose={closeModal}>
                    <ModalContent>
                        <span>I am a Modal</span>
                    </ModalContent>
                </Modal.Box>
            </Modal.Base>
        </div>
    );
};

export const StackedModalDemo = (): JSX.Element => {
    const [showFirst, setShowFirst] = useState(false);
    const [showStacked, setShowStacked] = useState(false);
    const handleFirstModalVisibility = (show: boolean) => () => {
        setShowFirst(show);
    };

    const handleStackedModalVisibility = (show: boolean) => () => {
        setShowStacked(show);
    };

    return (
        <div>
            <Button.Default onClick={handleFirstModalVisibility(true)}>
                Click to open
            </Button.Default>
            <Modal.Base
                show={showFirst}
                onOverlayClick={handleFirstModalVisibility(false)}
            >
                <Modal.Box onClose={handleFirstModalVisibility(false)}>
                    <ModalContent>
                        <span>I am the first Modal</span>
                        <br />
                        <br />
                        <Button.Default
                            onClick={handleStackedModalVisibility(true)}
                        >
                            Click to open the stacked modal
                        </Button.Default>
                    </ModalContent>
                </Modal.Box>
            </Modal.Base>
            <Modal.Base
                id="stacked-modal"
                stacked
                show={showStacked}
                onOverlayClick={handleStackedModalVisibility(false)}
            >
                <Modal.Box onClose={handleStackedModalVisibility(false)}>
                    <ModalContent>
                        <span>I am the stacked Modal</span>
                    </ModalContent>
                </Modal.Box>
            </Modal.Base>
        </div>
    );
};

const CustomComponent = styled.div`
    width: 50%;
    padding: 2rem;
    background: yellow;
`;

export const CustomModalDemo = (): JSX.Element => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);
    return (
        <>
            <Button.Default onClick={openModal}>
                Open custom modal
            </Button.Default>
            <Modal.Base
                show={show}
                onOverlayClick={closeModal}
                enableOverlayClick={true}
            >
                <CustomComponent>This is a custom component</CustomComponent>
            </Modal.Base>
        </>
    );
};
