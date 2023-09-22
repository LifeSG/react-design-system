import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../src/button";
import { Modal } from "../../src/modal";
import { MediaQuery } from "../../src/media";

const Page = styled.div`
    height: 160vh;
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    width: 65vw;

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0;
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }
`;

const Spaces = styled.div`
    height: 200px;
`;

interface CountdownViewProps {
    children: [JSX.Element, JSX.Element];
}

interface ModalProps {
    show: boolean;
    children: JSX.Element;
}

export const CountdownView = ({ children }: CountdownViewProps) => {
    const [elem1, elem2] = children;
    return (
        <Page>
            <Spaces />
            <Section>
                <div>{elem1}</div>
                <div>{elem2}</div>
            </Section>
        </Page>
    );
};

export const NotifyModal = ({ show, children }: ModalProps) => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    useEffect(() => {
        setShowModal(show);
    }, [show]);
    return (
        <Modal
            show={showModal}
            onOverlayClick={closeModal}
            enableOverlayClick={true}
        >
            <Modal.Box onClose={closeModal}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "2rem",
                        height: "10rem",
                        overflow: "auto",
                    }}
                >
                    <span>{children}</span>
                    <Button.Default onClick={closeModal}>Close</Button.Default>
                </div>
            </Modal.Box>
        </Modal>
    );
};
