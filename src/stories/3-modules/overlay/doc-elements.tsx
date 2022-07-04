import React, { useState } from "react";
import { Button } from "src/components/button";
import { Overlay } from "src/components/overlay";
import styled from "styled-components";

// =============================================================================
// 	SIMPLE MODAL COMPONENT
// =============================================================================
export const SimpleModal = (show) => {
    return (
        <Container show={show}>
            <ModalContainer>
                Click outside this modal to close overlay.
            </ModalContainer>
        </Container>
    );
};

// =============================================================================
// PORTAL EXAMPLE
// =============================================================================
export const PortalExample = () => {
    const [show, setShow] = useState(false);

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
        <>
            <Button.Default onClick={openModal}>Click on me</Button.Default>
            <Overlay
                show={show}
                onOverlayClick={closeModal}
                rootId="overlay-root"
            >
                <SimpleModal show={show} />
            </Overlay>
            <div id="overlay-root" />
        </>
    );
};

// =============================================================================
// 	STYLING
// =============================================================================
interface ContainerProps {
    show?: boolean;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: auto;
`;

const ModalContainer = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    position: relative;
    width: 15rem;
    height: 10rem;
    background: white;
    border: 4px solid white;
    border-radius: 1rem;
    overflow: hidden;
`;
