"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import { useState } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [show, setShow] = useState(true);
    const [overlayClickCount, setOverlayClickCount] = useState(0);

    return (
        <div className={styles.page}>
            <div data-testid="overlay-click-count" className={styles.metric}>
                {overlayClickCount}
            </div>
            <Button data-testid="reset-modal" onClick={() => setShow(true)}>
                Reset modal
            </Button>

            <ModalV2
                show={show}
                enableOverlayClick={false}
                onOverlayClick={() =>
                    setOverlayClickCount((count) => count + 1)
                }
                onClose={() => setShow(false)}
            >
                <ModalV2.Card className={styles.card}>
                    <ModalV2.CloseButton />
                    <ModalV2.Content>
                        <Typography.BodyBL data-testid="overlay-disabled-content">
                            Overlay click should not dismiss this modal
                        </Typography.BodyBL>
                    </ModalV2.Content>
                </ModalV2.Card>
            </ModalV2>
        </div>
    );
}
