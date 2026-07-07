"use client";

import { ModalV2, Typography } from "@lifesg/react-design-system";
import { useState } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(true);

    return (
        <div className={styles.page}>
            <ModalV2
                id="first-modal"
                show={showFirst}
                onClose={() => setShowFirst(false)}
                onOverlayClick={() => setShowFirst(false)}
            >
                <ModalV2.Card
                    className={`${styles.card} ${styles["stack-primary"]}`}
                >
                    <ModalV2.CloseButton data-testid="first-modal-close-slot" />
                    <ModalV2.Content>
                        <Typography.BodyBL data-testid="first-modal-content">
                            First modal
                        </Typography.BodyBL>
                    </ModalV2.Content>
                </ModalV2.Card>
            </ModalV2>

            <ModalV2
                id="second-modal"
                show={showSecond}
                onClose={() => setShowSecond(false)}
                onOverlayClick={() => setShowSecond(false)}
            >
                <ModalV2.Card
                    className={`${styles.card} ${styles["stack-secondary"]}`}
                >
                    <ModalV2.CloseButton data-testid="second-modal-close-slot" />
                    <ModalV2.Content>
                        <Typography.BodyBL data-testid="second-modal-content">
                            Second modal
                        </Typography.BodyBL>
                    </ModalV2.Content>
                </ModalV2.Card>
            </ModalV2>
        </div>
    );
}
