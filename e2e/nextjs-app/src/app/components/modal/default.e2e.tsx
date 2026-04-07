"use client";

import { Modal } from "@lifesg/react-design-system/modal";
import styles from "./modal.module.css";
import { Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <Modal show>
            <Modal.Box>
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
