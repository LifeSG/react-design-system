import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FeedbackRating } from "src/feedback-rating";
import { Modal } from "src/modal";
import { ModalBoxDiv } from "./doc-elements";

type Component = typeof FeedbackRating;

const meta: Meta<Component> = {
    title: "Selection and input/FeedbackRating",
    component: FeedbackRating,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [rating, setRating] = useState(0);
        const [show, setShow] = useState(false);
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);
        return (
            <>
                <Modal show={show} onOverlayClick={closeModal}>
                    <Modal.Box onClose={closeModal}>
                        <ModalBoxDiv>
                            You have rated: {rating} star
                            {rating === 1 ? "" : "s"}
                        </ModalBoxDiv>
                    </Modal.Box>
                </Modal>
                <FeedbackRating
                    rating={rating}
                    onRatingChange={setRating}
                    onSubmit={openModal}
                />
            </>
        );
    },
};
