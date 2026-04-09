import clsx from "clsx";
import type { NamedExoticComponent } from "react";
import React from "react";
import { isStyledComponent } from "styled-components";

import type { ModalCardProps } from "../types";
import { CloseButton } from "./close-button";
import { Content } from "./content";
import { Footer } from "./footer";
import * as styles from "./slot-styles";

function CardInner(
    {
        id,
        "data-testid": testId = "modal-card",
        children,
        className,
        ...otherProps
    }: ModalCardProps,
    ref: React.ForwardedRef<HTMLDivElement>
) {
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

    const findComponentOfType = (type: any) => {
        return React.Children.toArray(children).find((child) =>
            isComponentType(child as React.ReactPortal, type)
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const CloseButtonSlot = findComponentOfType(CloseButton);
    const ContentSlot = findComponentOfType(Content);
    const FooterSlot = findComponentOfType(Footer);

    const hasCloseButton = !!CloseButtonSlot;

    return (
        <div
            ref={ref}
            id={id}
            data-testid={testId}
            {...otherProps}
            onClick={handleOnClick}
            className={clsx(styles.modalCard, className)}
        >
            <div
                className={clsx(
                    styles.slotSpacer,
                    hasCloseButton
                        ? styles.slotSpacerHasCloseButton
                        : styles.slotSpacerNoCloseButton
                )}
            >
                {ContentSlot}
                {FooterSlot}
            </div>
            {hasCloseButton && CloseButtonSlot}
        </div>
    );
}

export const Card = React.forwardRef<HTMLDivElement, ModalCardProps>(CardInner);

(Card as NamedExoticComponent).displayName = "ModalV2.Card";
