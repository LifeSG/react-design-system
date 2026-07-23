"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import { useRef, useState, useEffect } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [show, setShow] = useState(true);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            if (elementRef.current) {
                elementRef.current.style.cssText =
                    "background-color: red; border-radius: 8px; padding: 68px;";
            }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <ModalV2
            show={show}
            data-testid="modal"
            onClose={() => setShow(false)}
            onOverlayClick={() => setShow(false)}
        >
            <ModalV2.Card className={styles.card} elementRef={elementRef}>
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
