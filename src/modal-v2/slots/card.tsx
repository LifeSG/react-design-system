import React from "react";
import { ModalCardProps } from "../types";
import { CloseButton } from "./close-button";
import { Content } from "./content";
import { ModalCard } from "./slot-styles";

export const Card = ({
    id,
    "data-testid": testId = "modal-card",
    children,
    ...otherProps
}: ModalCardProps) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const CloseButtonSlot = React.Children.toArray(children).find(
        (child) => (child as React.ReactPortal).type === CloseButton
    );
    const hasCloseButton = !!CloseButtonSlot;

    const ContentSlot = React.Children.toArray(children).find(
        (child) => (child as React.ReactPortal).type === Content
    );

    return (
        <ModalCard
            id={id}
            data-testid={testId}
            {...otherProps}
            onClick={handleOnClick}
            $hasCloseButton={hasCloseButton}
        >
            {ContentSlot}
            {hasCloseButton && CloseButtonSlot}
        </ModalCard>
    );
};

Card.displayName = "ModalV2.Card";
