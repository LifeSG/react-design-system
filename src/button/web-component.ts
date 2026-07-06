import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import r2wc from "react-to-webcomponent";

import { Button } from "./button";

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

// =============================================================================
// WRAPPER COMPONENT
// =============================================================================

interface LifesgButtonProps {
    label?: string;
    styletype?: string;
    sizetype?: string;
    danger?: boolean | string;
    disabled?: boolean | string;
    loading?: boolean | string;
}

const LifesgButtonWC: React.FC<LifesgButtonProps> = ({
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

// =============================================================================
// CUSTOM ELEMENT REGISTRATION
// =============================================================================

export const LifesgButton = r2wc(LifesgButtonWC, React, ReactDOM, {
    props: {
        label: "string",
        styletype: "string",
        sizetype: "string",
        danger: "boolean",
        disabled: "boolean",
        loading: "boolean",
    },
});

if (!customElements.get("lifesg-button")) {
    customElements.define("lifesg-button", LifesgButton);
}
