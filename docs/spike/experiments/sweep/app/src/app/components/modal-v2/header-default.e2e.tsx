"use client";

import { ModalV2, Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <ModalV2 show>
            <ModalV2.Card>
                <ModalV2.Header title="Review photos" />
                <ModalV2.Content>
                    <Typography.BodyBL data-testid="header-content">
                        Header with close button and heading title
                    </Typography.BodyBL>
                </ModalV2.Content>
            </ModalV2.Card>
        </ModalV2>
    );
}
