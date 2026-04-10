"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import { useEffect, useState } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [showDefaultFocus, setShowDefaultFocus] = useState(false);
    const [showDisabledFocus, setShowDisabledFocus] = useState(false);

    useEffect(() => {
        if (!showDisabledFocus) {
            return;
        }

        const frameId = requestAnimationFrame(() => {
            const focusTarget = document.querySelector<HTMLElement>(
                '[data-testid="disabled-focus-target"]'
            );
            focusTarget?.focus();
        });

        return () => cancelAnimationFrame(frameId);
    }, [showDisabledFocus]);

    return (
        <div className={styles.page}>
            <div className={styles.row}>
                <Button
                    data-testid="open-default-focus-modal"
                    onClick={() => setShowDefaultFocus(true)}
                >
                    Open default focus modal
                </Button>

                <Button
                    data-testid="open-disable-initial-focus-modal"
                    onClick={() => setShowDisabledFocus(true)}
                >
                    Open disable initial focus modal
                </Button>
            </div>

            <ModalV2
                id="default-focus-modal"
                show={showDefaultFocus}
                onClose={() => setShowDefaultFocus(false)}
                onOverlayClick={() => setShowDefaultFocus(false)}
            >
                <ModalV2.Card className={styles.card}>
                    <ModalV2.CloseButton data-testid="default-focus-close-slot" />
                    <ModalV2.Content>
                        <Typography.BodyBL data-testid="default-focus-content">
                            Default initial focus behavior
                        </Typography.BodyBL>
                    </ModalV2.Content>
                </ModalV2.Card>
            </ModalV2>

            <ModalV2
                id="disable-focus-modal"
                show={showDisabledFocus}
                disableInitialFocus
                onClose={() => setShowDisabledFocus(false)}
                onOverlayClick={() => setShowDisabledFocus(false)}
            >
                <ModalV2.Card className={styles.card}>
                    <ModalV2.CloseButton data-testid="disabled-focus-close-slot" />
                    <ModalV2.Content>
                        <Typography.BodyBL data-testid="disabled-focus-content">
                            Disabled initial focus behavior
                        </Typography.BodyBL>
                        <button
                            type="button"
                            data-testid="disabled-focus-target"
                        >
                            Manual focus target
                        </button>
                    </ModalV2.Content>
                </ModalV2.Card>
            </ModalV2>
        </div>
    );
}
