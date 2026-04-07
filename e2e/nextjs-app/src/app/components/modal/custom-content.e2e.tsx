"use client";

import { Modal } from "@lifesg/react-design-system/modal";
import styles from "./modal.module.css";

export default function Story() {
    return (
        <Modal show>
            <div
                data-testid="visual-custom-content"
                className={styles["modal-content-custom-visual"]}
            >
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                suscipit auctor dui, sed efficitur ipsum. Donec a semper odio.
                Donec eget ligula ac nunc efficitur efficitur. Donec in
            </div>
        </Modal>
    );
}
