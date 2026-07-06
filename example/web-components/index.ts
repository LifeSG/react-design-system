/**
 * Example registration entrypoint.
 *
 * Uses package exports so this example runs against compiled library output.
 */
import "../../src/theme/styles/lifesg.css";

import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import r2wc from "react-to-webcomponent";

import { Button, ModalV2 } from "@lifesg/react-design-system";

const toBoolean = (value: unknown): boolean => {
    if (typeof value === "boolean") return value;
    if (typeof value === "string") {
        const normalized = value.trim().toLowerCase();
        if (normalized === "" || normalized === "true" || normalized === "1") {
            return true;
        }
        if (normalized === "false" || normalized === "0") {
            return false;
        }
    }

    return Boolean(value);
};

interface ButtonWCProps {
    label?: string;
    styletype?: string;
    sizetype?: string;
    danger?: boolean | string;
    disabled?: boolean | string;
    loading?: boolean | string;
}

const ButtonWC: React.FC<ButtonWCProps> = ({
    label = "",
    styletype = "default",
    sizetype = "default",
    danger = false,
    disabled = false,
    loading = false,
}) => {
    const isDanger = toBoolean(danger);
    const isDisabled = toBoolean(disabled);
    const isLoading = toBoolean(loading);

    const ref = useRef<HTMLElement | null>(null);

    const handleClick = useCallback(() => {
        const host = ref.current?.closest("lifesg-button");
        host?.dispatchEvent(
            new CustomEvent("button-click", {
                bubbles: true,
                composed: true,
            })
        );
    }, []);

    return React.createElement(
        "span",
        { ref },
        React.createElement(
            Button.Default,
            {
                styleType: styletype as any,
                sizeType: sizetype as any,
                danger: isDanger,
                disabled: isDisabled,
                loading: isLoading,
                onClick: handleClick,
            },
            label
        )
    );
};

interface ModalWCProps {
    show?: boolean | string;
    animationfrom?: string;
    heading?: string;
    content?: string;
}

const ModalWC: React.FC<ModalWCProps> = ({
    show = false,
    animationfrom = "bottom",
    heading = "Modal",
    content = "",
}) => {
    const isOpen = toBoolean(show);

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
        React.createElement(ModalV2, {
            show: isOpen,
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

export const LifesgButton = r2wc(ButtonWC, React, ReactDOM, {
    props: {
        label: "string",
        styletype: "string",
        sizetype: "string",
        danger: "boolean",
        disabled: "boolean",
        loading: "boolean",
    },
});

export const LifesgModal = r2wc(ModalWC, React, ReactDOM, {
    props: {
        show: "boolean",
        animationfrom: "string",
        heading: "string",
        content: "string",
    },
});

if (!customElements.get("lifesg-button")) {
    customElements.define("lifesg-button", LifesgButton);
}

if (!customElements.get("lifesg-modal")) {
    customElements.define("lifesg-modal", LifesgModal);
}
