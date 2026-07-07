"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import { useState } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [show, setShow] = useState(true);

    return (
        <div className={styles.page}>
            <button data-testid="focus-start" className={styles["focus-start"]}>
                Focus Start
            </button>
            <button data-testid="outside-button">Outside button</button>

            <ModalV2
                show={show}
                onClose={() => {
                    setShow(false);
                }}
            >
                <ModalV2.Card className={styles.card}>
                    <ModalV2.CloseButton />
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
                            <Button data-testid="footer-primary-button">
                                Continue
                            </Button>
                        }
                        secondaryButton={
                            <Button data-testid="footer-secondary-button">
                                Back
                            </Button>
                        }
                    />
                </ModalV2.Card>
            </ModalV2>
        </div>
    );
}
