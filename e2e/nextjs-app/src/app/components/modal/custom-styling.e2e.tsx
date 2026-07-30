"use client";

import { Modal } from "@lifesg/react-design-system/modal";
import { Typography } from "@lifesg/react-design-system";
import { useLayoutEffect, useState } from "react";
import styles from "./modal.module.css";

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
        <Modal show>
            <Modal.Box elementRef={setElementRef}>
                <div
                    data-testid="visual-default-content"
                    className={`${styles["modal-box-recommended-spacing"]}`}
                >
                    <Typography.BodyBL>
                        Default modal visual state
                    </Typography.BodyBL>
                </div>
            </Modal.Box>
        </Modal>
    );
}
