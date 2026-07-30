"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import { useLayoutEffect, useState } from "react";
import styles from "./modal-v2.module.css";

export default function Story() {
    const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (elementRef) {
            // eslint-disable-next-line react-hooks/immutability
            elementRef.style.cssText =
                "background-color: red; border-radius: 8px; padding: 68px;";
        }
    }, [elementRef]);

    return (
        <ModalV2 show data-testid="modal">
            <ModalV2.Card className={styles.card} elementRef={setElementRef}>
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
