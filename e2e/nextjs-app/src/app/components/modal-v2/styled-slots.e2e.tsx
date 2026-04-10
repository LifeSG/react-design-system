"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";
import styles from "./modal-v2.module.css";

export default function Story() {
    return (
        <ModalV2 show>
            <ModalV2.Card className={`${styles.card} ${styles["custom-card"]}`}>
                <ModalV2.CloseButton
                    className={styles["custom-close-button"]}
                />
                <ModalV2.Content className={styles["custom-content"]}>
                    <Typography.BodyBL data-testid="styled-slots-content">
                        Content with className slot overrides
                    </Typography.BodyBL>
                </ModalV2.Content>
                <ModalV2.Footer
                    className={styles["custom-footer"]}
                    primaryButton={<Button.Default>Confirm</Button.Default>}
                    secondaryButton={<Button.Default>Back</Button.Default>}
                />
            </ModalV2.Card>
        </ModalV2>
    );
}
