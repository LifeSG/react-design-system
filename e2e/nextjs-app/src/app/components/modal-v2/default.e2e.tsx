"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import { useState } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [show, setShow] = useState(true);

    return (
        <ModalV2
            show={show}
            data-testid="modal"
            onClose={() => setShow(false)}
            onOverlayClick={() => setShow(false)}
        >
            <ModalV2.Card className={styles.card}>
                <ModalV2.CloseButton />
                <ModalV2.Content>
                    <Typography.BodyBL data-testid="default-content">
                        Default modal-v2 visual state
                    </Typography.BodyBL>
                </ModalV2.Content>
                <ModalV2.Footer
                    primaryButton={<Button>Continue</Button>}
                    secondaryButton={<Button>Cancel</Button>}
                />
            </ModalV2.Card>
        </ModalV2>
    );
}
