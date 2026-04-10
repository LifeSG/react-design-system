"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import { useState } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [show, setShow] = useState(true);
    const [closeCount, setCloseCount] = useState(0);

    return (
        <div className={styles.page}>
            <button data-testid="focus-start" className={styles["focus-start"]}>
                Focus Start
            </button>
            <button data-testid="outside-button">Outside button</button>
            <div data-testid="close-count" className={styles.metric}>
                {closeCount}
            </div>

            <ModalV2
                show={show}
                onClose={() => {
                    setCloseCount((count) => count + 1);
                    setShow(false);
                }}
            >
                <ModalV2.Card className={styles.card}>
                    <ModalV2.CloseButton data-testid="keyboard-close-slot" />
                    <ModalV2.Content>
                        <Typography.BodyBL>
                            Keyboard navigation story
                        </Typography.BodyBL>
                        <input
                            data-testid="modal-input"
                            placeholder="Type here"
                        />
                    </ModalV2.Content>
                    <ModalV2.Footer
                        primaryButton={
                            <Button.Default data-testid="footer-primary-button">
                                Continue
                            </Button.Default>
                        }
                        secondaryButton={
                            <Button.Default data-testid="footer-secondary-button">
                                Back
                            </Button.Default>
                        }
                    />
                </ModalV2.Card>
            </ModalV2>
        </div>
    );
}
