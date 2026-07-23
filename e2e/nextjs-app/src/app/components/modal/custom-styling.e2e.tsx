"use client";

import { Modal } from "@lifesg/react-design-system/modal";
import styles from "./modal.module.css";
import { Typography } from "@lifesg/react-design-system";
import { useLayoutEffect, useRef } from "react";

export default function Story() {
    const elementRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const id = requestAnimationFrame(() => {
            if (elementRef.current) {
                elementRef.current.style.cssText =
                    "background-color: red; border-radius: 8px; padding: 68px;";
            }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <Modal show>
            <Modal.Box elementRef={elementRef}>
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
