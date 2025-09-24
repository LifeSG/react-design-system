import React from "react";
import { isStyledComponent } from "styled-components";
import { ModalCardProps } from "../types";
import { CloseButton } from "./close-button";
import { Content } from "./content";
import { Footer } from "./footer";
import { ModalCard, SlotSpacer } from "./slot-styles";

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

    // =========================================================================
    // HELPERS
    // =========================================================================
    const isComponentType = (child: React.ReactPortal, type: any) =>
        isStyledComponent(child.type)
            ? (child.type as unknown as { target: any }).target === type
            : child.type === type;

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const CloseButtonSlot = React.Children.toArray(children).find((child) =>
        isComponentType(child as React.ReactPortal, CloseButton)
    );
    const hasCloseButton = !!CloseButtonSlot;

    const ContentSlot = React.Children.toArray(children).find((child) =>
        isComponentType(child as React.ReactPortal, Content)
    );

    const FooterSlot = React.Children.toArray(children).find((child) =>
        isComponentType(child as React.ReactPortal, Footer)
    );

    return (
        <ModalCard
            id={id}
            data-testid={testId}
            {...otherProps}
            onClick={handleOnClick}
        >
            <SlotSpacer $hasCloseButton={hasCloseButton}>
                {ContentSlot}
                {FooterSlot}
            </SlotSpacer>
            {hasCloseButton && CloseButtonSlot}
        </ModalCard>
    );
};

Card.displayName = "ModalV2.Card";
