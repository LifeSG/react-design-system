"use client";

import { Modal } from "@lifesg/react-design-system/modal";
import styles from "./modal.module.css";

export default function Story() {
    return (
        <div>
            <Modal id="first-modal" show zIndex={99998}>
                <Modal.Box showCloseButton={false}>
                    <div
                        data-testid="first-modal-content"
                        className={`${styles["modal-content"]} ${styles["modal-content-stacked-primary"]} ${styles["modal-box-recommended-spacing"]}`}
                    >
                        First modal
                    </div>
                </Modal.Box>
            </Modal>

            <Modal id="second-modal" show zIndex={99999}>
                <Modal.Box showCloseButton={false}>
                    <div
                        data-testid="second-modal-content"
                        className={`${styles["modal-content"]} ${styles["modal-content-stacked-secondary"]} ${styles["modal-box-recommended-spacing"]}`}
                    >
                        Second modal
                    </div>
                </Modal.Box>
            </Modal>
        </div>
    );
}
