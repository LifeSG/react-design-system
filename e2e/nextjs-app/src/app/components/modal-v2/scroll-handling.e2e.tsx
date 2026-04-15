"use client";

import { ModalV2, Typography } from "@lifesg/react-design-system";
import styles from "./modal-v2.module.css";

export default function Story() {
    return (
        <ModalV2 show>
            <ModalV2.Card className={styles.card}>
                <ModalV2.CloseButton />
                <ModalV2.Content className={styles["tall-content"]}>
                    <Typography.BodyBL data-testid="scroll-top-content">
                        Scroll handling top content
                    </Typography.BodyBL>
                    <Typography.BodyBL data-testid="scroll-bottom-content">
                        Scroll handling bottom content
                    </Typography.BodyBL>
                </ModalV2.Content>
            </ModalV2.Card>
        </ModalV2>
    );
}
