"use client";

import { Modal } from "@lifesg/react-design-system/modal";
import styles from "./modal.module.css";

export default function Story() {
    return (
        <Modal show>
            <Modal.Box>
                <div
                    data-testid="visual-default-content"
                    className={`${styles["modal-content"]} ${styles["modal-box-recommended-spacing"]}`}
                >
                    Default modal visual state
                </div>
            </Modal.Box>
        </Modal>
    );
}
