import clsx from "clsx";
import type { NamedExoticComponent } from "react";
import React from "react";

import { mergeRefs } from "../../util";
import isStyledComponent from "../../util/is-styled-components";
import type { ModalCardProps } from "../types";
import { CloseButton } from "./close-button";
import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import * as styles from "./slot-styles";

function CardInner(
    {
        id,
        "data-testid": testId = "modal-card",
        children,
        className,
        elementRef,
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
    const HeaderSlot = findComponentOfType(Header);

    const hasHeader = !!CloseButtonSlot || !!HeaderSlot;

    return (
        <div
            ref={mergeRefs(ref, elementRef)}
            id={id}
            data-testid={testId}
            {...otherProps}
            onClick={handleOnClick}
            className={clsx(styles.modalCard, className)}
        >
            <div
                data-has-close-button={!!hasHeader}
                className={clsx(styles.slotSpacer)}
            >
                {ContentSlot}
                {FooterSlot}
            </div>
            {hasHeader && (HeaderSlot || CloseButtonSlot)}
        </div>
    );
}

export const Card = React.forwardRef<HTMLDivElement, ModalCardProps>(CardInner);

(Card as NamedExoticComponent).displayName = "ModalV2.Card";
