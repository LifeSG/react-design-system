import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import r2wc from "react-to-webcomponent";

import { Button } from "../button";
import { ModalV2 } from "./index";

// =============================================================================
// WRAPPER COMPONENT
// =============================================================================

interface LifesgModalProps {
    show?: boolean;
    animationfrom?: string;
    heading?: string;
    content?: string;
}

const LifesgModalWC: React.FC<LifesgModalProps> = ({
    show = false,
    animationfrom = "bottom",
    heading = "Modal",
    content = "",
}) => {
    const ref = useRef<HTMLElement | null>(null);

    const dispatchClose = useCallback(() => {
        const host = ref.current?.closest("lifesg-modal");
        host?.dispatchEvent(
            new CustomEvent("modal-close", {
                bubbles: true,
                composed: true,
            })
        );
    }, []);

    return React.createElement(
        "span",
        { ref },
        // eslint-disable-next-line react/no-children-prop
        React.createElement(ModalV2, {
            show: Boolean(show),
            animationFrom: animationfrom as any,
            onClose: dispatchClose,
            enableOverlayClick: true,
            onOverlayClick: dispatchClose,
            children: React.createElement(
                ModalV2.Card,
                null,
                React.createElement(ModalV2.CloseButton, null),
                React.createElement(
                    ModalV2.Content,
                    null,
                    React.createElement(
                        "h2",
                        { style: { marginBottom: "16px" } },
                        heading
                    ),
                    React.createElement(
                        "p",
                        null,
                        content || "Modal content goes here."
                    )
                ),
                React.createElement(ModalV2.Footer, {
                    primaryButton: React.createElement(
                        Button.Default,
                        { onClick: dispatchClose },
                        "Confirm"
                    ),
                    secondaryButton: React.createElement(
                        Button.Default,
                        { styleType: "light", onClick: dispatchClose },
                        "Cancel"
                    ),
                })
            ),
        })
    );
};

// =============================================================================
// CUSTOM ELEMENT REGISTRATION
// =============================================================================

export const LifesgModal = r2wc(LifesgModalWC, React, ReactDOM, {
    props: {
        show: "boolean",
        animationfrom: "string",
        heading: "string",
        content: "string",
    },
});

if (!customElements.get("lifesg-modal")) {
    customElements.define("lifesg-modal", LifesgModal);
}
