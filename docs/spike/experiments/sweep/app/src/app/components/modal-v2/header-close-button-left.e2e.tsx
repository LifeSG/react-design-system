"use client";

import { ModalV2, Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <ModalV2 show>
            <ModalV2.Card>
                <ModalV2.Header title="Signature" closeButtonPosition="left" />
                <ModalV2.Content>
                    <Typography.BodyBL data-testid="header-content">
                        Header with close button on the left and heading title
                    </Typography.BodyBL>
                </ModalV2.Content>
            </ModalV2.Card>
        </ModalV2>
    );
}
