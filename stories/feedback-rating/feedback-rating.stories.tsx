import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { FeedbackRating } from "src/feedback-rating";
import { ModalV2 } from "src/modal-v2";

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
                <ModalV2
                    show={show}
                    onOverlayClick={closeModal}
                    onClose={closeModal}
                >
                    <ModalV2.Card>
                        <ModalV2.CloseButton />
                        <ModalV2.Content>
                            <ModalBoxDiv>
                                You have rated: {rating} star
                                {rating === 1 ? "" : "s"}
                            </ModalBoxDiv>
                        </ModalV2.Content>
                    </ModalV2.Card>
                </ModalV2>
                <FeedbackRating
                    rating={rating}
                    onRatingChange={setRating}
                    onSubmit={openModal}
                />
            </>
        );
    },
};
